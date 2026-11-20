"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSliders, FiCheck } from "react-icons/fi";
import { useLanguage } from "@/lib/LanguageContext";

export const THEME_ACCENTS = [
  {
    id: "emerald",
    name: "Emerald",
    nameAr: "زمردي (الأصلي)",
    color: "#10B981",
    glow: "rgba(16, 185, 129, 0.4)",
    vars: {
      "--theme-teal-300": "#6ee7b7",
      "--theme-teal-400": "#34d399",
      "--theme-teal-500": "#10b981",
      "--theme-teal-600": "#059669",
      "--theme-teal-700": "#047857",
      "--theme-emerald-300": "#6ee7b7",
      "--theme-emerald-400": "#34d399",
      "--theme-emerald-500": "#10b981",
      "--theme-emerald-600": "#059669",
      "--theme-emerald-700": "#047857",
      "--theme-cyan-300": "#67e8f9",
      "--theme-cyan-400": "#22d3ee",
      "--theme-cyan-500": "#06b6d4",
      "--theme-cyan-600": "#0891b2",
      "--theme-cyan-700": "#0e7490",
      "--accent-primary": "#10b981",
      "--accent-glow": "rgba(16, 185, 129, 0.4)",
    },
  },
  {
    id: "cyan",
    name: "Cyan",
    nameAr: "سماوي تقني",
    color: "#06B6D4",
    glow: "rgba(6, 182, 212, 0.4)",
    vars: {
      "--theme-teal-300": "#67e8f9",
      "--theme-teal-400": "#22d3ee",
      "--theme-teal-500": "#06b6d4",
      "--theme-teal-600": "#0891b2",
      "--theme-teal-700": "#0e7490",
      "--theme-emerald-300": "#7dd3fc",
      "--theme-emerald-400": "#38bdf8",
      "--theme-emerald-500": "#0284c7",
      "--theme-emerald-600": "#0369a1",
      "--theme-emerald-700": "#075985",
      "--theme-cyan-300": "#a5f3fc",
      "--theme-cyan-400": "#38bdf8",
      "--theme-cyan-500": "#0ea5e9",
      "--theme-cyan-600": "#0284c7",
      "--theme-cyan-700": "#0369a1",
      "--accent-primary": "#06b6d4",
      "--accent-glow": "rgba(6, 182, 212, 0.4)",
    },
  },
  {
    id: "violet",
    name: "Violet",
    nameAr: "بنفسجي رقمي",
    color: "#8B5CF6",
    glow: "rgba(139, 92, 246, 0.4)",
    vars: {
      "--theme-teal-300": "#c4b5fd",
      "--theme-teal-400": "#a78bfa",
      "--theme-teal-500": "#8b5cf6",
      "--theme-teal-600": "#7c3aed",
      "--theme-teal-700": "#6d28d9",
      "--theme-emerald-300": "#d8b4fe",
      "--theme-emerald-400": "#c084fc",
      "--theme-emerald-500": "#a855f7",
      "--theme-emerald-600": "#9333ea",
      "--theme-emerald-700": "#7e22ce",
      "--theme-cyan-300": "#c7d2fe",
      "--theme-cyan-400": "#818cf8",
      "--theme-cyan-500": "#6366f1",
      "--theme-cyan-600": "#4f46e5",
      "--theme-cyan-700": "#4338ca",
      "--accent-primary": "#8b5cf6",
      "--accent-glow": "rgba(139, 92, 246, 0.4)",
    },
  },
  {
    id: "amber",
    name: "Amber",
    nameAr: "ذهبي ملكي",
    color: "#F59E0B",
    glow: "rgba(245, 158, 11, 0.4)",
    vars: {
      "--theme-teal-300": "#fcd34d",
      "--theme-teal-400": "#fbbf24",
      "--theme-teal-500": "#f59e0b",
      "--theme-teal-600": "#d97706",
      "--theme-teal-700": "#b45309",
      "--theme-emerald-300": "#fdba74",
      "--theme-emerald-400": "#fb923c",
      "--theme-emerald-500": "#f97316",
      "--theme-emerald-600": "#ea580c",
      "--theme-emerald-700": "#c2410c",
      "--theme-cyan-300": "#fef08a",
      "--theme-cyan-400": "#facc15",
      "--theme-cyan-500": "#eab308",
      "--theme-cyan-600": "#ca8a04",
      "--theme-cyan-700": "#a16207",
      "--accent-primary": "#f59e0b",
      "--accent-glow": "rgba(245, 158, 11, 0.4)",
    },
  },
  {
    id: "rose",
    name: "Rose",
    nameAr: "ياقوتي جذاب",
    color: "#F43F5E",
    glow: "rgba(244, 63, 94, 0.4)",
    vars: {
      "--theme-teal-300": "#fda4af",
      "--theme-teal-400": "#fb7185",
      "--theme-teal-500": "#f43f5e",
      "--theme-teal-600": "#e11d48",
      "--theme-teal-700": "#be123c",
      "--theme-emerald-300": "#fecdd3",
      "--theme-emerald-400": "#fda4af",
      "--theme-emerald-500": "#e11d48",
      "--theme-emerald-600": "#be123c",
      "--theme-emerald-700": "#9f1239",
      "--theme-cyan-300": "#fbcfe8",
      "--theme-cyan-400": "#f472b6",
      "--theme-cyan-500": "#ec4899",
      "--theme-cyan-600": "#db2777",
      "--theme-cyan-700": "#be185d",
      "--accent-primary": "#f43f5e",
      "--accent-glow": "rgba(244, 63, 94, 0.4)",
    },
  },
];

export function applyThemeAccent(themeId) {
  if (typeof document === "undefined") return;
  const theme = THEME_ACCENTS.find((t) => t.id === themeId) || THEME_ACCENTS[0];
  const root = document.documentElement;

  // Set attribute on html and body for CSS attribute selectors
  root.setAttribute("data-accent", theme.id);
  if (document.body) {
    document.body.setAttribute("data-accent", theme.id);
  }

  // Directly inject all theme variables on documentElement inline style for immediate execution
  if (theme.vars) {
    for (const [prop, val] of Object.entries(theme.vars)) {
      root.style.setProperty(prop, val);
    }
  }

  // Dispatch custom event for canvas particles & external listeners
  window.dispatchEvent(
    new CustomEvent("gamal-theme-change", {
      detail: { id: theme.id, theme },
    })
  );
}

export default function ThemeAccentSwitcher() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [activeTheme, setActiveTheme] = useState("emerald");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Restore saved theme on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("gamal_theme_accent");
      const targetTheme = saved && THEME_ACCENTS.some((t) => t.id === saved) ? saved : "emerald";
      setActiveTheme(targetTheme);
      applyThemeAccent(targetTheme);
    } catch (e) {
      applyThemeAccent("emerald");
    }
  }, []);

  // Click outside and Escape key to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (themeId) => {
    setActiveTheme(themeId);
    applyThemeAccent(themeId);
    try {
      localStorage.setItem("gamal_theme_accent", themeId);
    } catch (e) {}
    setIsOpen(false);
  };

  const currentTheme = THEME_ACCENTS.find((t) => t.id === activeTheme) || THEME_ACCENTS[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900/90 hover:bg-gray-800 border border-gray-700/80 hover:border-teal-500/60 text-gray-300 hover:text-white transition-all text-xs font-mono shadow-sm cursor-pointer"
        title={isArabic ? "تخصيص ثيم الألوان" : "Customize Theme Accent"}
        aria-label="Customize theme accent"
        aria-expanded={isOpen}
      >
        <span
          className="w-3 h-3 rounded-full transition-transform duration-300 shadow-sm"
          style={{
            backgroundColor: currentTheme.color,
            boxShadow: `0 0 10px ${currentTheme.color}`,
          }}
        />
        <FiSliders className="text-xs text-gray-400 group-hover:text-white transition-colors" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full mt-2 end-0 z-50 p-3.5 rounded-2xl bg-gray-950/95 backdrop-blur-2xl border border-gray-800 shadow-2xl min-w-[210px]"
            dir={isArabic ? "rtl" : "ltr"}
          >
            <div className="text-[11px] font-mono text-gray-400 mb-2.5 px-1 flex items-center justify-between border-b border-gray-800/80 pb-2">
              <span className="font-semibold text-gray-300">
                {isArabic ? "مظهر الألوان المخصص" : "Theme Accent"}
              </span>
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: currentTheme.color }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              {THEME_ACCENTS.map((accent) => {
                const isSelected = activeTheme === accent.id;
                return (
                  <button
                    key={accent.id}
                    type="button"
                    onClick={() => handleSelect(accent.id)}
                    className={`group w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                      isSelected
                        ? "bg-white/10 text-white font-medium"
                        : "hover:bg-white/5 text-gray-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-transform ${
                          isSelected ? "scale-110 ring-2 ring-white/70" : "group-hover:scale-105"
                        }`}
                        style={{
                          backgroundColor: accent.color,
                          boxShadow: isSelected ? `0 0 12px ${accent.color}` : "none",
                        }}
                      />
                      <span className="font-sans text-xs">
                        {isArabic ? accent.nameAr : accent.name}
                      </span>
                    </div>

                    {isSelected && (
                      <FiCheck
                        className="text-xs transition-transform"
                        style={{ color: accent.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
