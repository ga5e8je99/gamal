"use client";

import { useSyncExternalStore } from "react";
import {
  INITIAL_PROFILE,
  INITIAL_PROJECTS,
  INITIAL_SKILLS,
  INITIAL_SERVICES,
  STORAGE_KEYS
} from "./siteData";

// Constant frozen references for server snapshots
const EMPTY_ARRAY = Object.freeze([]);

// Module-level in-memory cache to guarantee referential stability for getSnapshot
const memoryCache = {
  [STORAGE_KEYS.PROFILE]: INITIAL_PROFILE,
  [STORAGE_KEYS.PROJECTS]: INITIAL_PROJECTS,
  [STORAGE_KEYS.SKILLS]: INITIAL_SKILLS,
  [STORAGE_KEYS.SERVICES]: INITIAL_SERVICES,
  [STORAGE_KEYS.APPOINTMENTS]: EMPTY_ARRAY,
  [STORAGE_KEYS.MESSAGES]: EMPTY_ARRAY
};

let cacheInitialized = false;
const DATA_SYNC_VERSION = "v4_add_neo_project";

function loadCacheFromStorage() {
  if (typeof window === "undefined") return;
  try {
    const rawProfile = window.localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (rawProfile) {
      const parsedProfile = JSON.parse(rawProfile);
      const mergedProfile = {
        ...INITIAL_PROFILE,
        ...parsedProfile,
        socials: {
          ...INITIAL_PROFILE.socials,
          ...(parsedProfile?.socials || {}),
          x: INITIAL_PROFILE.socials.x,
          instagram: INITIAL_PROFILE.socials.instagram
        }
      };
      delete mergedProfile.socials.twitter;
      delete mergedProfile.socials.codepen;
      memoryCache[STORAGE_KEYS.PROFILE] = mergedProfile;
      window.localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(mergedProfile));
    }

    const rawProjects = window.localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (rawProjects) {
      let parsed = JSON.parse(rawProjects);
      if (Array.isArray(parsed)) {
        // 1. Purge obsolete removed projects (e.g. legacy chatbot)
        parsed = parsed.filter(
          (p) =>
            p.slug !== "ai-support-assistant" &&
            !p.title?.toLowerCase().includes("conversational support")
        );

        // 2. Synchronize canonical projects from INITIAL_PROJECTS
        const initialMap = new Map(INITIAL_PROJECTS.map((p) => [p.id, p]));
        const updated = parsed.map((p) => {
          const canonical = initialMap.get(p.id);
          if (canonical) {
            return {
              ...canonical,
              ...p,
              category: canonical.category,
              slug: canonical.slug,
              image: canonical.image,
              liveLink: canonical.liveLink,
              githubLink: canonical.githubLink,
              technologies: canonical.technologies
            };
          }
          return p;
        });

        // 3. Ensure any missing canonical projects are included
        const updatedIds = new Set(updated.map((p) => p.id));
        const missing = INITIAL_PROJECTS.filter((p) => !updatedIds.has(p.id));
        const finalProjects = [...updated, ...missing];

        memoryCache[STORAGE_KEYS.PROJECTS] = finalProjects;
        window.localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(finalProjects));
        window.localStorage.setItem("site_data_sync_version", DATA_SYNC_VERSION);
      }
    } else {
      memoryCache[STORAGE_KEYS.PROJECTS] = INITIAL_PROJECTS;
      window.localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(INITIAL_PROJECTS));
      window.localStorage.setItem("site_data_sync_version", DATA_SYNC_VERSION);
    }

    const rawSkills = window.localStorage.getItem(STORAGE_KEYS.SKILLS);
    if (rawSkills) memoryCache[STORAGE_KEYS.SKILLS] = JSON.parse(rawSkills);

    const rawServices = window.localStorage.getItem(STORAGE_KEYS.SERVICES);
    if (rawServices) memoryCache[STORAGE_KEYS.SERVICES] = JSON.parse(rawServices);

    const rawApts = window.localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
    if (rawApts) memoryCache[STORAGE_KEYS.APPOINTMENTS] = JSON.parse(rawApts);

    const rawMsgs = window.localStorage.getItem(STORAGE_KEYS.MESSAGES);
    if (rawMsgs) memoryCache[STORAGE_KEYS.MESSAGES] = JSON.parse(rawMsgs);
  } catch (err) {
    console.error("Error reading cache from localStorage:", err);
  }
}

// Active listeners set
const listeners = new Set();

function notifyListeners() {
  listeners.forEach((listener) => {
    try {
      listener();
    } catch (e) {
      console.error(e);
    }
  });
}

function subscribeToStore(listener) {
  if (!cacheInitialized && typeof window !== "undefined") {
    cacheInitialized = true;
    loadCacheFromStorage();
  }
  listeners.add(listener);

  const handleStorageChange = () => {
    loadCacheFromStorage();
    notifyListeners();
  };

  if (typeof window !== "undefined") {
    window.addEventListener("storage", handleStorageChange);
  }

  return () => {
    listeners.delete(listener);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorageChange);
    }
  };
}

function updateCacheAndStore(key, value) {
  memoryCache[key] = value;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error saving ${key} to localStorage:`, e);
    }
  }
  notifyListeners();
}

// Referentially stable snapshot getters
const getProfileSnapshot = () => memoryCache[STORAGE_KEYS.PROFILE];
const getProjectsSnapshot = () => memoryCache[STORAGE_KEYS.PROJECTS];
const getSkillsSnapshot = () => memoryCache[STORAGE_KEYS.SKILLS];
const getServicesSnapshot = () => memoryCache[STORAGE_KEYS.SERVICES];
const getAppointmentsSnapshot = () => memoryCache[STORAGE_KEYS.APPOINTMENTS];
const getMessagesSnapshot = () => memoryCache[STORAGE_KEYS.MESSAGES];

// Referentially stable server snapshot getters (returns constant reference)
const getServerProfile = () => INITIAL_PROFILE;
const getServerProjects = () => INITIAL_PROJECTS;
const getServerSkills = () => INITIAL_SKILLS;
const getServerServices = () => INITIAL_SERVICES;
const getServerAppointments = () => EMPTY_ARRAY;
const getServerMessages = () => EMPTY_ARRAY;

export function useSiteData() {
  const profile = useSyncExternalStore(
    subscribeToStore,
    getProfileSnapshot,
    getServerProfile
  );

  const projects = useSyncExternalStore(
    subscribeToStore,
    getProjectsSnapshot,
    getServerProjects
  );

  const skills = useSyncExternalStore(
    subscribeToStore,
    getSkillsSnapshot,
    getServerSkills
  );

  const services = useSyncExternalStore(
    subscribeToStore,
    getServicesSnapshot,
    getServerServices
  );

  const appointments = useSyncExternalStore(
    subscribeToStore,
    getAppointmentsSnapshot,
    getServerAppointments
  );

  const messages = useSyncExternalStore(
    subscribeToStore,
    getMessagesSnapshot,
    getServerMessages
  );

  // CRUD actions
  const saveProfile = (newProfile) => {
    updateCacheAndStore(STORAGE_KEYS.PROFILE, newProfile);
  };

  const saveProjects = (newProjects) => {
    updateCacheAndStore(STORAGE_KEYS.PROJECTS, newProjects);
  };

  const saveSkills = (newSkills) => {
    updateCacheAndStore(STORAGE_KEYS.SKILLS, newSkills);
  };

  const saveServices = (newServices) => {
    updateCacheAndStore(STORAGE_KEYS.SERVICES, newServices);
  };

  const addAppointment = (appointment) => {
    const current = memoryCache[STORAGE_KEYS.APPOINTMENTS] || [];
    const newApt = {
      id: "apt-" + Date.now(),
      createdAt: new Date().toISOString(),
      status: "Pending",
      ...appointment
    };
    const updated = [newApt, ...current];
    updateCacheAndStore(STORAGE_KEYS.APPOINTMENTS, updated);

    if (typeof window !== "undefined") {
      fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment)
      }).catch((err) => console.error("Error persisting booking:", err));
    }

    return true;
  };

  const updateAppointmentStatus = (id, newStatus) => {
    const current = memoryCache[STORAGE_KEYS.APPOINTMENTS] || [];
    const updated = current.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    updateCacheAndStore(STORAGE_KEYS.APPOINTMENTS, updated);
  };

  const deleteAppointment = (id) => {
    const current = memoryCache[STORAGE_KEYS.APPOINTMENTS] || [];
    const updated = current.filter((item) => item.id !== id);
    updateCacheAndStore(STORAGE_KEYS.APPOINTMENTS, updated);
  };

  const addMessage = (msg) => {
    const current = memoryCache[STORAGE_KEYS.MESSAGES] || [];
    const newMsg = {
      id: "msg-" + Date.now(),
      createdAt: new Date().toISOString(),
      read: false,
      ...msg
    };
    const updated = [newMsg, ...current];
    updateCacheAndStore(STORAGE_KEYS.MESSAGES, updated);

    if (typeof window !== "undefined") {
      fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msg)
      }).catch((err) => console.error("Error persisting message:", err));
    }

    return true;
  };

  const markMessageAsRead = (id) => {
    const current = memoryCache[STORAGE_KEYS.MESSAGES] || [];
    const updated = current.map((item) =>
      item.id === id ? { ...item, read: true } : item
    );
    updateCacheAndStore(STORAGE_KEYS.MESSAGES, updated);
  };

  const deleteMessage = (id) => {
    const current = memoryCache[STORAGE_KEYS.MESSAGES] || [];
    const updated = current.filter((item) => item.id !== id);
    updateCacheAndStore(STORAGE_KEYS.MESSAGES, updated);
  };

  const resetToDefaults = () => {
    updateCacheAndStore(STORAGE_KEYS.PROFILE, INITIAL_PROFILE);
    updateCacheAndStore(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
    updateCacheAndStore(STORAGE_KEYS.SKILLS, INITIAL_SKILLS);
    updateCacheAndStore(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
  };

  return {
    profile,
    projects,
    skills,
    services,
    appointments,
    messages,
    saveProfile,
    saveProjects,
    saveSkills,
    saveServices,
    addAppointment,
    updateAppointmentStatus,
    deleteAppointment,
    addMessage,
    markMessageAsRead,
    deleteMessage,
    resetToDefaults
  };
}
