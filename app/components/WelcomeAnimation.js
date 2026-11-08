"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WelcomeAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If the user already visited in this session, skip intro immediately
    if (typeof window !== "undefined" && sessionStorage.getItem("gamal_intro_seen") === "true") {
      if (onComplete) onComplete();
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("gamal_intro_seen", "true");
          }
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
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
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-radial from-gray-900 via-black to-[#050811] text-white px-4 overflow-hidden select-none"
    >
      {/* Background ambient glow circles */}
      <div className="absolute w-[450px] h-[450px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-[350px] h-[350px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* SVG Container */}
      <div className="relative z-10 flex flex-col items-center">
        <svg
          className="w-48 h-48 sm:w-64 sm:h-64 drop-shadow-[0_0_25px_rgba(20,184,166,0.35)]"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            <linearGradient id="accentGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer rotating cyber orbit ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="88"
            stroke="url(#neonGradient)"
            strokeWidth="1.5"
            strokeDasharray="16 12 4 12"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
            opacity="0.6"
          />

          {/* Reverse counter-orbit ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="76"
            stroke="#06b6d4"
            strokeWidth="1"
            strokeDasharray="6 8"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
            opacity="0.4"
          />

          {/* Hexagon Cyber Frame */}
          <motion.polygon
            points="100,28 162,64 162,136 100,172 38,136 38,64"
            stroke="url(#neonGradient)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="rgba(15, 23, 42, 0.45)"
            filter="url(#svgGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          {/* Left code bracket '<' */}
          <motion.path
            d="M80 82L62 100L80 118"
            stroke="#2dd4bf"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0, x: -10 }}
            animate={{ pathLength: 1, opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />

          {/* Center slash '/' */}
          <motion.line
            x1="93"
            y1="122"
            x2="107"
            y2="78"
            stroke="url(#accentGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          />

          {/* Right code bracket '>' */}
          <motion.path
            d="M120 82L138 100L120 118"
            stroke="#2dd4bf"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0, x: 10 }}
            animate={{ pathLength: 1, opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          />

          {/* Pulsing center power core */}
          <motion.circle
            cx="100"
            cy="100"
            r="4"
            fill="#38bdf8"
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating orbit tech particles */}
          <motion.circle
            cx="100"
            cy="14"
            r="3"
            fill="#10b981"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.circle
            cx="100"
            cy="186"
            r="2.5"
            fill="#06b6d4"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
        </svg>

        {/* Welcome Text in Futuristic Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-6 space-y-2"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-teal-400" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-emerald-400 uppercase drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]">
              Welcome
            </h1>
            <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-teal-400" />
          </div>

          <p className="text-sm sm:text-base font-mono text-gray-400 tracking-wider">
            GAMAL AHMED <span className="text-teal-400">•</span> PORTFOLIO
          </p>
        </motion.div>

        {/* Futuristic Progress Bar */}
        <div className="w-56 sm:w-64 mt-8 flex flex-col items-center gap-2">
          <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden p-[1px] border border-gray-700/50">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="w-full flex justify-between items-center text-xs font-mono text-gray-400">
            <span className="text-teal-400">SYSTEM INITIALIZED</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Instant Skip Button */}
        <button
          onClick={handleSkip}
          className="mt-6 px-4 py-1.5 text-xs font-mono text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-gray-700/60 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Skip Intro →
        </button>
      </div>
    </motion.div>
  );
}
