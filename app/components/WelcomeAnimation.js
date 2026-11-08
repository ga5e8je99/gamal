"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function WelcomeAnimation({ onComplete }) {
  useEffect(() => {
    // If the user already visited in this session, skip intro immediately
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("gamal_intro_seen") === "true"
    ) {
      if (onComplete) onComplete();
      return;
    }

    // Auto-transition into the website once the cursive writing is written & held
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("gamal_intro_seen", "true");
      }
      if (onComplete) onComplete();
    }, 4800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("gamal_intro_seen", "true");
    }
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#14141e] text-white px-4 select-none cursor-pointer"
      onClick={handleSkip}
    >
      {/* Centered Handwriting Welcome Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="welcome-handwrite">Welcome</div>

        {/* Minimal Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-xs sm:text-sm font-mono text-gray-400 tracking-[0.25em] uppercase mt-2"
        >
          Gamal Ahmed <span className="text-teal-400">•</span> Portfolio
        </motion.p>
      </div>

      {/* Skip Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute bottom-8 px-4 py-1.5 text-xs font-mono text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-gray-700/60 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Skip Intro →
      </button>
    </motion.div>
  );
}
