"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/lib/LanguageContext";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiCalendar,
  FiUser,
  FiCheckCircle,
  FiLayers,
  FiClock,
  FiShare2,
  FiCheck,
  FiTarget,
  FiZap,
  FiCpu,
  FiHome
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiJavascript,
  SiWebgl
} from "react-icons/si";

export default function ProjectDetailClient({ project, prevProject, nextProject }) {
  const [copied, setCopied] = useState(false);
  const { dict, isRTL } = useLanguage();
  const t = dict?.projectDetail || {};
  const localizedProjects = dict?.projectsData || {};

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getTechIcon = (techName) => {
    const lower = String(techName).toLowerCase();
    if (lower.includes("react")) return SiReact;
    if (lower.includes("next")) return SiNextdotjs;
    if (lower.includes("type")) return SiTypescript;
    if (lower.includes("java")) return SiJavascript;
    if (lower.includes("three")) return SiThreedotjs;
    if (lower.includes("node")) return SiNodedotjs;
    if (lower.includes("mongo")) return SiMongodb;
    if (lower.includes("tailwind")) return SiTailwindcss;
    if (lower.includes("webgl")) return SiWebgl;
    if (lower.includes("redux")) return SiRedux;
    if (lower.includes("express")) return SiExpress;
    return FiLayers;
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#070b14] text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">{t.notFoundTitle || "Project Not Found"}</h1>
        <p className="text-gray-400 mb-8">{t.notFoundDesc || "The project you are looking for does not exist or has been moved."}</p>
        <Link
          href="/#portfolio"
          className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <FiArrowLeft className={isRTL ? "rotate-180" : ""} /> {t.backToProjects || "Back to Portfolio"}
        </Link>
      </div>
    );
  }

  // Localized attributes
  const localizedData = localizedProjects[project.id] || localizedProjects[project.slug] || {};
  const title = localizedData.title || project.title;
  const tagline = localizedData.tagline || project.tagline;
  const overview = localizedData.overview || localizedData.description || project.overview || project.description;
  const problem = localizedData.problem || project.problem;
  const solution = localizedData.solution || project.solution;
  const role = localizedData.role || project.role;
  const impact = localizedData.impact || project.impact;
  const features = localizedData.features || project.features;

  const prevLocalized = prevProject ? (localizedProjects[prevProject.id] || localizedProjects[prevProject.slug] || {}) : null;
  const prevTitle = prevLocalized?.title || prevProject?.title;

  const nextLocalized = nextProject ? (localizedProjects[nextProject.id] || localizedProjects[nextProject.slug] || {}) : null;
  const nextTitle = nextLocalized?.title || nextProject?.title;

  return (
    <div className="min-h-screen bg-[#070b14] text-white selection:bg-teal-500/30 selection:text-teal-200">
      {/* Exact Site Navbar */}
      <Navbar />

      {/* Main Project Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Top Action Toolbar (Breadcrumb + Back + Share) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-800/80">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-gray-400" aria-label="Breadcrumb">
            <Link href="/#home" className="hover:text-teal-400 transition-colors flex items-center gap-1">
              <FiHome /> {t.home || "Home"}
            </Link>
            <span>/</span>
            <Link href="/#portfolio" className="hover:text-teal-400 transition-colors">
              {t.portfolio || "Portfolio"}
            </Link>
            <span>/</span>
            <span className="text-teal-300 truncate max-w-[200px] sm:max-w-none">{title}</span>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gray-900/90 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 text-xs font-medium transition-all group"
            >
              <FiArrowLeft className={`${isRTL ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"} transition-transform`} />
              <span>{t.backToProjects || "Back to Projects"}</span>
            </Link>

            <button
              onClick={handleShare}
              type="button"
              className="px-3.5 py-1.5 text-xs font-mono rounded-lg bg-gray-900/90 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 flex items-center gap-1.5 transition-all cursor-pointer"
              title="Share Project URL"
            >
              {copied ? (
                <>
                  <FiCheck className="text-teal-400 text-xs" />
                  <span className="text-teal-300">{t.linkCopied || "Link Copied!"}</span>
                </>
              ) : (
                <>
                  <FiShare2 className="text-xs" />
                  <span>{t.share || "Share"}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Project Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-medium">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold">
                {t.featuredBadge || "Featured Case Study"}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {tagline && (
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
              {tagline}
            </p>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <FiExternalLink /> {t.liveDemo || "Live Demo"}
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-gray-900/90 hover:bg-gray-800 text-gray-200 border border-gray-700 text-sm font-medium flex items-center gap-2 transition-all hover:border-gray-600"
              >
                <FiGithub /> {t.sourceCode || "Source Code"}
              </a>
            )}
          </div>
        </div>

        {/* Hero Preview Showcase Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-gray-950 shadow-2xl mb-12 group">
          <Image
            src={project.image || "/projectImage/image.webp"}
            alt={title}
            fill
            className="object-cover group-hover:scale-102 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Project Meta Bar (4-Column Info Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-gray-900/60 border border-gray-800/80 mb-12">
          <div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <FiUser className="text-teal-400" /> {t.myRole || "My Role"}
            </p>
            <p className="text-sm font-semibold text-gray-200">{role?.split(".")[0] || project.role?.split(".")[0] || "Full-Stack Engineer"}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <FiClock className="text-teal-400" /> {t.timeline || "Timeline"}
            </p>
            <p className="text-sm font-semibold text-gray-200">{project.duration || "4-6 Weeks"}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <FiTarget className="text-teal-400" /> {t.clientType || "Client / Type"}
            </p>
            <p className="text-sm font-semibold text-gray-200">{project.client || "Web Platform"}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <FiLayers className="text-teal-400" /> {t.category || "Category"}
            </p>
            <p className="text-sm font-semibold text-gray-200">{project.category || "Full-Stack"}</p>
          </div>
        </div>

        {/* Detailed Case Study Sections */}
        <div className="space-y-12 mb-16">
          {/* 1. Overview */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span> {t.projectOverview || "Project Overview"}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{t.aboutTheProject || "About the Project"}</h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {overview}
            </p>
          </section>

          {/* 2. Challenge & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* The Challenge */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <FiTarget className="text-base" /> {t.theChallenge || "The Challenge"}
              </div>
              <h3 className="text-xl font-bold text-white">{t.problemStatement || "Problem Statement"}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {problem || "Addressing complex scalability and performance challenges in modern web architectures."}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-6 rounded-2xl bg-teal-500/5 border border-teal-500/20 space-y-3">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <FiZap className="text-base" /> {t.theSolution || "The Solution"}
              </div>
              <h3 className="text-xl font-bold text-white">{t.technicalArchitecture || "Technical Architecture"}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {solution || role || "Crafted a custom architecture leveraging modern component design, persistent state management, and optimized asset delivery."}
              </p>
            </div>
          </div>

          {/* 3. Key Features */}
          {features && features.length > 0 && (
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span> {t.keyFeatures || "Key Features & Capabilities"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{t.coreFunctionality || "Core Functionality"}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-teal-500/40 transition-colors space-y-2"
                  >
                    <div className="flex items-center gap-2 text-teal-300 font-semibold text-base">
                      <FiCheckCircle className="text-teal-400 shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-6">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. Results & Impact */}
          {impact && (
            <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/20 to-gray-900/40 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <FiCpu className="text-base" /> {t.measurableOutcome || "Measurable Outcome"}
              </div>
              <h3 className="text-2xl font-bold text-white">{t.resultsImpact || "Results & Impact"}</h3>
              <p className="text-emerald-200/90 text-base sm:text-lg leading-relaxed font-medium">
                {impact}
              </p>
            </section>
          )}

          {/* 5. Technologies Stack */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span> {t.techStack || "Tech Stack"}
            </div>
            <h2 className="text-2xl font-bold text-white">{t.techToolsUsed || "Technologies & Tools Used"}</h2>
            <div className="flex flex-wrap gap-3 pt-2">
              {project.technologies?.map((tech, idx) => {
                const Icon = getTechIcon(tech);
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/80 border border-gray-700/80 text-gray-200 text-sm font-mono hover:border-teal-400/60 hover:text-teal-300 transition-colors"
                  >
                    <Icon className="text-base text-teal-400" />
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Project Next / Prev Navigation */}
        <div className="pt-10 border-t border-gray-800/80 grid sm:grid-cols-2 gap-4 mb-16">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug || prevProject.id}`}
              className="p-5 rounded-xl bg-gray-900/50 hover:bg-gray-800/70 border border-gray-800 hover:border-teal-500/40 transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-2 group-hover:text-teal-400 transition-colors">
                <FiArrowLeft className={`${isRTL ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"} transition-transform`} />
                <span>{t.prevProject || "Previous Project"}</span>
              </div>
              <span className="font-semibold text-white group-hover:text-teal-300 transition-colors line-clamp-1">
                {prevTitle}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block"></div>
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug || nextProject.id}`}
              className="p-5 rounded-xl bg-gray-900/50 hover:bg-gray-800/70 border border-gray-800 hover:border-teal-500/40 transition-all group flex flex-col justify-between text-right sm:ml-auto w-full"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-mono text-gray-400 mb-2 group-hover:text-teal-400 transition-colors">
                <span>{t.nextProject || "Next Project"}</span>
                <FiArrowRight className={`${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform`} />
              </div>
              <span className="font-semibold text-white group-hover:text-teal-300 transition-colors line-clamp-1">
                {nextTitle}
              </span>
            </Link>
          )}
        </div>

        {/* Call to Action Banner */}
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-gray-900/90 to-gray-950 border border-teal-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-teal-500/10 via-transparent to-transparent pointer-events-none"></div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t.ctaTitle || "Interested in building a project like this?"}
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            {t.ctaDesc || "Let's collaborate to design and develop your custom web application with exceptional performance and clean architecture."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold text-sm hover:from-teal-600 hover:to-cyan-700 shadow-xl shadow-teal-500/25 transition-all transform hover:-translate-y-0.5"
            >
              {t.scheduleConsultation || "Schedule a Consultation"}
            </Link>
            <a
              href="https://wa.me/201285645073"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-gray-200 border border-gray-700 font-semibold text-sm transition-all"
            >
              {t.chatWhatsapp || "Chat on WhatsApp"}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
