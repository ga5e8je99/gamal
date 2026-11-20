"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSliders, FiCheck } from "react-icons/fi";
import { useLanguage } from "@/lib/LanguageContext";

export const THEME_ACCENTS = [
  { id: "emerald", name: "Emerald", color: "#10B981", bgClass: "bg-emerald-500", glow: "rgba(16,185,129,0.3)" },
  { id: "cyan", name: "Cyan", color: "#06B6D4", bgClass: "bg-cyan-500", glow: "rgba(6,182,212,0.3)" },
  { id: "violet", name: "Violet", color: "#8B5CF6", bgClass: "bg-violet-500", glow: "rgba(139,92,246,0.3)" },
  { id: "amber", name: "Amber", color: "#F59E0B", bgClass: "bg-amber-500", glow: "rgba(245,158,11,0.3)" },
  { id: "rose", name: "Rose", color: "#F43F5E", bgClass: "bg-rose-500", glow: "rgba(244,63,94,0.3)" },
];

export default function ThemeAccentSwitcher() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [activeTheme, setActiveTheme] = useState("emerald");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("gamal_theme_accent");
      if (saved && THEME_ACCENTS.some((t) => t.id === saved)) {
        setActiveTheme(saved);
        applyAccent(saved);
      }
    } catch (e) {}
  }, []);

  const applyAccent = (themeId) => {
    const theme = THEME_ACCENTS.find((t) => t.id === themeId) || THEME_ACCENTS[0];
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--accent-primary", theme.color);
      document.documentElement.style.setProperty("--accent-glow", theme.glow);
      document.documentElement.setAttribute("data-accent", themeId);
    }
  };

  const handleSelect = (themeId) => {
    setActiveTheme(themeId);
    applyAccent(themeId);
    try {
      localStorage.setItem("gamal_theme_accent", themeId);
    } catch (e) {}
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900/80 hover:bg-gray-800 border border-gray-700/80 hover:border-teal-500/50 text-gray-300 hover:text-white transition-all text-xs font-mono shadow-sm cursor-pointer"
        title={isArabic ? "تخصيص لون البورتفوليو" : "Customize Theme Accent"}
      >
        <span
          className="w-2.5 h-2.5 rounded-full transition-colors"
          style={{
            backgroundColor:
              THEME_ACCENTS.find((t) => t.id === activeTheme)?.color || "#10B981",
          }}
        />
        <FiSliders className="text-xs" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 end-0 z-50 p-3 rounded-2xl bg-gray-950/95 backdrop-blur-xl border border-gray-800 shadow-2xl min-w-[190px]"
          >
            <div className="text-[11px] font-mono text-gray-400 mb-2 px-1 flex items-center justify-between">
              <span>{isArabic ? "اختر مظهر الألوان" : "Theme Accent"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            </div>

            <div className="grid grid-cols-5 gap-2 pt-1 pb-1">
              {THEME_ACCENTS.map((accent) => {
                const isSelected = activeTheme === accent.id;
                return (
                  <button
                    key={accent.id}
                    type="button"
                    onClick={() => handleSelect(accent.id)}
                    className="group relative flex flex-col items-center gap-1 p-1 rounded-xl transition-all hover:bg-white/5 cursor-pointer"
                    title={accent.name}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                        isSelected ? "scale-110 ring-2 ring-white/60" : "group-hover:scale-105"
                      }`}
                      style={{ backgroundColor: accent.color }}
                    >
                      {isSelected && <FiCheck className="text-white text-xs" />}
                    </div>
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
