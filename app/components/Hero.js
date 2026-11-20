"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteData } from "@/lib/useSiteData";
import { useLanguage } from "@/lib/LanguageContext";
import InteractiveParticles from "./InteractiveParticles";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowLeft,
  FiCheckCircle,
  FiAward,
  FiZap,
  FiShield,
  FiBriefcase,
  FiGithub,
} from "react-icons/fi";

export default function Hero() {
  const { profile } = useSiteData();
  const { dict, isRTL, language } = useLanguage();
  const isArabic = language === "ar";
  const ArrowIcon = isRTL ? FiArrowLeft : FiArrowRight;

  const fullName = isArabic ? dict.hero.name : (profile.name || "Gamal Ahmed");
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0] || fullName;
  const lastName = nameParts.slice(1).join(" ") || "";

  // Dynamic Animated Role Cycler
  const roles = isArabic
    ? [
        "مهندس برمجيات ومطور ويب متكامل (Full-Stack Architect)",
        "خبير Next.js 15 و React 19 وتطبيقات الأداء العالي",
        "مطور أنظمة ومؤسسات ERP ومعمارية مالية متقدمة",
        "مهندس قواعد بيانات (PostgreSQL & Prisma) والسحابة",
      ]
    : [
        "Full-Stack Web Architect & Engineer",
        "Next.js 15 & React 19 Specialist",
        "Enterprise ERP & Financial Systems Builder",
        "PostgreSQL, Prisma & Cloud Database Engineer",
      ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3800);
    return () => clearInterval(roleTimer);
  }, [roles.length]);

  const coreTech = [
    { name: "Next.js 15", color: "border-white/30 text-white bg-white/5" },
    { name: "React 19", color: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10" },
    { name: "TypeScript", color: "border-blue-500/40 text-blue-300 bg-blue-500/10" },
    { name: "Prisma ORM", color: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10" },
    { name: "PostgreSQL", color: "border-sky-500/40 text-sky-300 bg-sky-500/10" },
    { name: "Tailwind CSS", color: "border-teal-500/40 text-teal-300 bg-teal-500/10" },
    { name: "Node.js", color: "border-green-500/40 text-green-300 bg-green-500/10" },
    { name: "Docker", color: "border-indigo-500/40 text-indigo-300 bg-indigo-500/10" },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24 relative bg-[#080c16] overflow-hidden"
      id="home"
    >
      {/* 1. Interactive Ambient Particles Background */}
      <InteractiveParticles />

      {/* Radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-7/12 space-y-7">
            
            {/* Top Greeting Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-mono tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{dict.hero.greeting}</span>
              <span className="text-gray-500">|</span>
              <span className="text-emerald-400 font-semibold">{dict.hero.badge}</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                <span>{firstName}</span>{" "}
                {lastName && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                    {lastName}
                  </span>
                )}
              </h1>

              {/* Dynamic Animated Role Cycler */}
              <div className="h-14 sm:h-12 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-200"
                  >
                    {roles[currentRoleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </div>

            {/* Bio description */}
            <p className="text-gray-300/90 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {isArabic
                ? "مهندس ومطور ويب متكامل متخصص في بناء أنظمة المؤسسات والمنصات التفاعلية عالية الأداء باستخدام Next.js و React و Node.js وقواعد البيانات الحديثة، مع التركيز التام على تجربة مستخدم استثنائية وأعلى معايير الأمان وقابلية التوسع."
                : (profile.shortBio || dict.hero.shortBio)}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#portfolio"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold text-sm sm:text-base rounded-xl hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/25 flex items-center gap-2"
              >
                <span>{dict.hero.viewWork}</span>
                <ArrowIcon className="text-base" />
              </Link>
              
              <Link
                href="#contact"
                className="px-7 py-3.5 border-2 border-gray-700/80 bg-gray-900/60 backdrop-blur-md text-gray-200 font-semibold text-sm sm:text-base rounded-xl hover:border-teal-500 hover:text-teal-300 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/15"
              >
                {dict.hero.contactMe}
              </Link>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download="Gamal_Ahmed_Resume.pdf"
                  className="px-5 py-3.5 text-gray-400 hover:text-teal-300 font-medium text-sm transition-colors flex items-center gap-2 underline underline-offset-4 decoration-gray-700 hover:decoration-teal-500"
                >
                  <FiBriefcase className="text-base" />
                  <span>{dict.hero.downloadCv || "Download CV"}</span>
                </a>
              )}
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800/80 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">3+</div>
                <div className="text-xs text-gray-400 mt-0.5">{isArabic ? "سنوات خبرة" : "Years Experience"}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">20+</div>
                <div className="text-xs text-gray-400 mt-0.5">{isArabic ? "مشروع مكتمل" : "Projects Shipped"}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
                <div className="text-xs text-gray-400 mt-0.5">{isArabic ? "رضا العملاء" : "Client Satisfaction"}</div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <p className="text-gray-400 text-xs font-mono uppercase tracking-wider mb-3">
                {isArabic ? "التقنيات الأساسية التي أتقنها" : "CORE PRODUCTION STACK"}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {coreTech.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono border backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar & Floating Badges */}
          <div className="w-full lg:w-5/12 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 lg:w-96 lg:h-96">
              
              {/* Outer pulsing neon glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/25 via-cyan-500/20 to-blue-500/25 rounded-full blur-3xl animate-pulse" />

              {/* Main Avatar Circular Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800/80 shadow-[0_0_50px_rgba(20,184,166,0.25)] group">
                <Image
                  src="/gamalImage.webp"
                  alt={`${fullName} - Full-Stack Web Developer`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 336px, 384px"
                  priority
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glassmorphism Badge 1: Top-Right (Web Vitals) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 sm:-top-5 sm:-right-4 bg-gray-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-teal-500/35 shadow-xl shadow-teal-500/10 flex items-center gap-2 z-20"
              >
                <div className="p-1 rounded-lg bg-teal-500/15 text-teal-400">
                  <FiZap className="text-sm" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white font-mono">100% Performance</div>
                  <div className="text-[9px] text-gray-400">{isArabic ? "سرعة واستجابة قياسية" : "Core Web Vitals"}</div>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 2: Top-Left (Enterprise Architecture) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 -left-4 sm:top-1/4 sm:-left-8 bg-gray-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-cyan-500/35 shadow-xl shadow-cyan-500/10 flex items-center gap-2 z-20"
              >
                <div className="p-1 rounded-lg bg-cyan-500/15 text-cyan-400">
                  <FiShield className="text-sm" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white font-mono">Clean Architecture</div>
                  <div className="text-[9px] text-gray-400">{isArabic ? "معمارية نظيفة وقابلة للتوسع" : "ACID & Type-Safe"}</div>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 3: Bottom Status */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 bg-gray-950/95 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700/80 shadow-2xl flex items-center gap-2.5 z-20"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-emerald-300 text-xs font-mono font-medium">
                  {dict.hero.badge}
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Smooth Scroll Down Indicator */}
        <div className="flex justify-center pt-16 lg:pt-20">
          <Link
            href="#about"
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-teal-300 transition-colors"
          >
            <span className="text-xs font-mono tracking-widest uppercase group-hover:tracking-wider transition-all">
              {isArabic ? "اكتشف المزيد" : "Scroll Down"}
            </span>
            <div className="w-6 h-10 border-2 border-gray-700 group-hover:border-teal-500/80 rounded-full flex justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-2.5 bg-teal-400 rounded-full"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
