"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function WelcomeAnimation({ onComplete }) {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent background scrolling while intro is visible
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    // Smooth progress counter from 0 to 100% over ~2.4 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment smoothly
        const step = Math.floor(Math.random() * 8) + 5;
        return Math.min(100, prev + step);
      });
    }, 100);

    // Auto complete once progress reaches 100%
    const timer = setTimeout(() => {
      handleComplete();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  const handleComplete = () => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-white px-4 select-none cursor-pointer overflow-hidden"
      onClick={handleComplete}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Centered Handwriting Welcome Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Glowing Logo Icon */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-5 relative"
        >
          <div className="absolute inset-0 bg-teal-500/25 blur-2xl rounded-full animate-pulse" />
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-800 p-2.5 border border-teal-500/40 shadow-[0_0_35px_rgba(20,184,166,0.35)] flex items-center justify-center">
            <Image
              src="/logo-icon.png"
              alt="Gamal Emblem"
              width={64}
              height={64}
              priority
              className="w-full h-full object-contain select-none"
            />
          </div>
        </motion.div>

        {/* Cursive Handwriting "Welcome" */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="welcome-handwrite"
        >
          Welcome
        </motion.div>

        {/* Minimal Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xs sm:text-sm font-mono text-gray-400 tracking-[0.25em] uppercase mt-3"
        >
          Gamal Ahmed <span className="text-teal-400">•</span> Portfolio
        </motion.p>

        {/* Dynamic Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 w-48 sm:w-64 flex flex-col items-center gap-2"
        >
          <div className="w-full h-1 bg-gray-800/80 rounded-full overflow-hidden border border-gray-700/40">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="flex items-center justify-between w-full text-[11px] font-mono text-gray-500">
            <span>{isArabic ? "جاري تجهيز التجربة..." : "Initializing..."}</span>
            <span className="text-teal-400 font-semibold">{progress}%</span>
          </div>
        </motion.div>
      </div>

      {/* Skip Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleComplete();
        }}
        className="absolute bottom-8 px-5 py-1.5 text-xs font-mono text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-gray-700/60 hover:border-teal-500/50 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
      >
        <span>{isArabic ? "تخطي والدخول المباشر" : "Skip Intro"}</span>
        <span className="text-teal-400">→</span>
      </motion.button>
    </motion.div>
  );
}
