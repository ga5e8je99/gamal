"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiEye,
  FiCode,
  FiArrowRight,
  FiArrowLeft,
  FiShield,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiMongodb,
  SiWebgl,
  SiRedux,
  SiJavascript,
  SiExpress,
  SiMui,
  SiVite,
  SiGooglegemini,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

export default function ProjectCard({ project, dict, language }) {
  const isArabic = language === "ar";
  const ArrowIcon = isArabic ? FiArrowLeft : FiArrowRight;
  const isFlagship = project.slug === "masar-erp" || project.id === "proj-0";

  // 3D Perspective Tilt on Mouse Movement
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const projectData = (dict.projectsData && dict.projectsData[project.id]) || {};
  const title = projectData.title || project.title;
  const description = projectData.description || project.description;
  const problem = projectData.problem || project.problem;
  const role = projectData.role || project.role;
  const impact = projectData.impact || project.impact;

  const getLocalizedCategory = (category) => {
    if (!category) return "Full-Stack";
    if (isArabic) {
      if (category.includes("ERP")) return "نظام مؤسسي (Enterprise ERP)";
      if (category.includes("3D") || category.includes("Frontend")) return "واجهات وثلاثي أبعاد (3D)";
      if (category.includes("AI")) return "ذكاء اصطناعي (AI / Full-Stack)";
      if (category.includes("E-Commerce")) return "متجر متكامل (E-Commerce)";
      if (category.includes("Full-Stack")) return "تطبيق متكامل (Full-Stack)";
    }
    return category;
  };

  const getTechBadge = (tech, idx) => {
    const techName = String(tech?.name || tech);
    let Icon = FiCode;
    let colorClass = "border-teal-500/40 text-teal-300";

    const lower = techName.toLowerCase();
    if (lower.includes("react")) { Icon = SiReact; colorClass = "border-cyan-500/50 text-cyan-300"; }
    else if (lower.includes("next")) { Icon = SiNextdotjs; colorClass = "border-gray-500 text-white"; }
    else if (lower.includes("type")) { Icon = SiTypescript; colorClass = "border-blue-500/50 text-blue-300"; }
    else if (lower.includes("java")) { Icon = SiJavascript; colorClass = "border-yellow-500/50 text-yellow-300"; }
    else if (lower.includes("three")) { Icon = SiThreedotjs; colorClass = "border-gray-400 text-gray-200"; }
    else if (lower.includes("redux")) { Icon = SiRedux; colorClass = "border-purple-500/50 text-purple-300"; }
    else if (lower.includes("node")) { Icon = SiNodedotjs; colorClass = "border-emerald-500/50 text-emerald-300"; }
    else if (lower.includes("mongo")) { Icon = SiMongodb; colorClass = "border-green-600/50 text-green-300"; }
    else if (lower.includes("tailwind")) { Icon = SiTailwindcss; colorClass = "border-teal-400/50 text-teal-300"; }
    else if (lower.includes("webgl")) { Icon = SiWebgl; colorClass = "border-blue-400/50 text-blue-300"; }
    else if (lower.includes("express")) { Icon = SiExpress; colorClass = "border-gray-500 text-gray-300"; }
    else if (lower.includes("gemini")) { Icon = SiGooglegemini; colorClass = "border-blue-400/50 text-blue-300"; }
    else if (lower.includes("mui") || lower.includes("material")) { Icon = SiMui; colorClass = "border-sky-500/50 text-sky-300"; }
    else if (lower.includes("vite")) { Icon = SiVite; colorClass = "border-purple-400/50 text-purple-300"; }
    else if (lower.includes("prisma")) { Icon = SiPrisma; colorClass = "border-emerald-400/50 text-emerald-300"; }
    else if (lower.includes("postgres")) { Icon = SiPostgresql; colorClass = "border-sky-400/50 text-sky-300"; }

    return (
      <div
        key={idx}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-950/70 border ${colorClass} text-[11px] font-mono`}
      >
        <Icon className="text-xs" />
        <span>{techName}</span>
      </div>
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      className={`group relative rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
        isFlagship
          ? "bg-gradient-to-b from-gray-900/95 via-gray-900/85 to-gray-950 border-2 border-teal-500/60 shadow-[0_0_40px_rgba(20,184,166,0.22)] hover:border-teal-400 hover:shadow-[0_0_55px_rgba(20,184,166,0.35)]"
          : "bg-gradient-to-b from-gray-900/85 via-gray-900/60 to-gray-950/95 border border-gray-800/90 hover:border-teal-500/50 hover:shadow-[0_10px_35px_-10px_rgba(20,184,166,0.2)]"
      }`}
    >
      {/* Dynamic 3D Glare Reflection */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}), transparent 55%)`,
        }}
      />

      {/* Flagship Top Banner */}
      {isFlagship && (
        <div className="relative z-20 px-4 py-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-xs font-bold flex items-center justify-between tracking-wide shadow-md">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-300">★</span>
            <span>{isArabic ? "المشروع المؤسسي الرائد (Flagship Enterprise ERP)" : "Flagship Enterprise ERP System"}</span>
          </div>
          <span className="font-mono text-[10px] bg-black/40 px-2 py-0.5 rounded-full border border-white/20">
            Production v1.0
          </span>
        </div>
      )}

      {/* Top Floating Badges */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        {project.featured && !isFlagship && (
          <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md shadow-teal-500/20">
            <FiEye className="text-xs" /> {dict.portfolio.featuredBadge}
          </span>
        )}
      </div>

      <div className={`absolute ${isFlagship ? "top-10" : "top-4"} right-4 z-20`}>
        <span className="px-3 py-1 bg-gray-950/85 backdrop-blur-md text-teal-300 text-xs font-mono font-medium rounded-full border border-teal-500/40 shadow-sm">
          {getLocalizedCategory(project.category)}
        </span>
      </div>

      {/* Project Image */}
      <Link
        href={`/projects/${project.slug || project.id}`}
        className="relative h-60 sm:h-64 overflow-hidden bg-gray-950 block group/img"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent z-10" />
        <Image
          src={project.image || "/projectImage/image.webp"}
          alt={title}
          fill
          className="object-cover group-hover/img:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          loading="lazy"
        />
        
        {/* Hover Highlight Overlay */}
        <div className="absolute inset-0 bg-teal-900/10 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10" />
      </Link>

      {/* Project Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
            <Link href={`/projects/${project.slug || project.id}`} className="hover:underline decoration-teal-400/40">
              {title}
            </Link>
          </h3>

          <p className="text-gray-300/80 text-sm mb-4 leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Special Flagship Architecture Tags for Masar ERP */}
          {isFlagship && (
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono flex items-center gap-1">
                <FiZap className="text-xs" /> Sub-100ms APIs
              </span>
              <span className="px-2.5 py-1 rounded-md bg-sky-500/15 border border-sky-500/30 text-sky-300 text-[11px] font-mono flex items-center gap-1">
                <FiShield className="text-xs" /> ACID Concurrency Locks
              </span>
              <span className="px-2.5 py-1 rounded-md bg-teal-500/15 border border-teal-500/30 text-teal-300 text-[11px] font-mono flex items-center gap-1">
                <FiCheckCircle className="text-xs" /> ZATCA Phase 2 QR
              </span>
            </div>
          )}

          {/* Problem, Role, Impact Breakdown */}
          {(problem || role || impact) && (
            <div className="mb-5 p-3.5 rounded-xl bg-gray-950/70 border border-gray-800/80 space-y-2 text-xs">
              {problem && (
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono text-[11px] font-semibold shrink-0 uppercase tracking-wider">
                    {dict.portfolio.challengeLabel}
                  </span>
                  <span className="text-gray-300 leading-snug line-clamp-2">{problem}</span>
                </div>
              )}
              {role && (
                <div className="flex items-start gap-2">
                  <span className="text-teal-400 font-mono text-[11px] font-semibold shrink-0 uppercase tracking-wider">
                    {dict.portfolio.roleLabel}
                  </span>
                  <span className="text-gray-300 leading-snug line-clamp-2">{role}</span>
                </div>
              )}
              {impact && (
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono text-[11px] font-semibold shrink-0 uppercase tracking-wider">
                    {dict.portfolio.outcomeLabel}
                  </span>
                  <span className="text-emerald-300/90 font-medium leading-snug line-clamp-2">{impact}</span>
                </div>
              )}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <p className="text-gray-500 text-xs font-mono mb-2">{dict.portfolio.techUsed}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies?.map((tech, techIndex) =>
                getTechBadge(tech, techIndex)
              )}
            </div>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-800/80 mt-auto">
          <div className="flex items-center gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-xs font-medium transition-colors group/link px-3 py-1.5 rounded-lg ${
                  isFlagship
                    ? "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40"
                    : "text-gray-300 hover:text-teal-300 bg-gray-900 hover:bg-teal-500/20 border border-gray-800"
                }`}
              >
                {isFlagship ? (
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                ) : (
                  <FiExternalLink className="text-xs" />
                )}
                <span>{dict.portfolio.liveDemo}</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors group/link px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800"
              >
                <FiGithub className="text-xs" />
                <span>{dict.portfolio.code}</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug || project.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-medium transition-all group/btn hover:border-teal-400/50"
          >
            <span>{dict.portfolio.caseStudy}</span>
            <ArrowIcon className="text-xs group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
