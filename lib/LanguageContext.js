"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "gamal_site_lang";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "ar" || saved === "en") {
        setLanguageState(saved);
      } else {
        // Detect browser language
        const browserLang = navigator.language?.toLowerCase() || "";
        if (browserLang.startsWith("ar")) {
          setLanguageState("ar");
        }
      }
    } catch (e) {
      console.error(e);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const isRTL = language === "ar";
      document.documentElement.dir = isRTL ? "rtl" : "ltr";
      document.documentElement.lang = language;
      if (isRTL) {
        document.documentElement.classList.add("rtl");
      } else {
        document.documentElement.classList.remove("rtl");
      }
    }
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, language);
      } catch (e) {
        console.error(e);
      }
    }
  }, [language]);

  const setLanguage = (lang) => {
    if (lang === "ar" || lang === "en") {
      setLanguageState(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (path, fallback = "") => {
    const keys = path.split(".");
    let current = translations[language];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return fallback || path;
      }
    }
    return current ?? fallback ?? path;
  };

  const isRTL = language === "ar";
  const dict = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRTL,
        dir: isRTL ? "rtl" : "ltr",
        t,
        dict,
        mounted
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback outside provider
    return {
      language: "en",
      setLanguage: () => {},
      toggleLanguage: () => {},
      isRTL: false,
      dir: "ltr",
      t: (path, fallback) => fallback || path,
      dict: translations.en,
      mounted: false
    };
  }
  return context;
}

