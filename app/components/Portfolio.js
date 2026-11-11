"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiExternalLink, FiGithub, FiEye, FiCode, FiLayers, FiArrowRight } from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiThreedotjs, 
  SiNodedotjs, 
  SiMongodb, 
  SiFirebase, 
  SiWebgl, 
  SiBlender, 
  SiUnity, 
  SiGraphql, 
  SiRedux,
  SiJavascript,
  SiExpress
} from "react-icons/si";
import { useSiteData } from "@/lib/useSiteData";
import { useLanguage } from "@/lib/LanguageContext";

export default function Portfolio() {
  const { projects } = useSiteData();
  const { dict, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: dict.portfolio.all },
    { key: "fullstack", label: dict.portfolio.fullstack },
    { key: "frontend3d", label: dict.portfolio.frontend3d }
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "fullstack") {
      return (
        project.category?.toLowerCase().includes("full-stack") ||
        project.technologies?.some((t) => {
          const str = typeof t === "string" ? t : t?.name || "";
          return ["Node.js", "Express.js", "MongoDB", "Redux"].includes(str);
        })
      );
    }
    if (selectedCategory === "frontend3d") {
      return (
        project.category?.toLowerCase().includes("3d") ||
        project.category?.toLowerCase().includes("frontend") ||
        project.technologies?.some((t) => {
          const str = typeof t === "string" ? t : t?.name || "";
          return ["Three.js", "WebGL"].includes(str);
        })
      );
    }
    return true;
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getTechBadge = (tech, idx) => {
    if (typeof tech === "object" && tech !== null) {
      return (
        <div
          key={idx}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900/60 border ${tech.color || "border-teal-500/40"} text-gray-300 text-xs`}
        >
          {tech.icon && <span className="text-sm">{tech.icon}</span>}
          <span>{tech.name}</span>
        </div>
      );
    }

    const techName = String(tech);
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

    return (
      <div
        key={idx}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900/60 border ${colorClass} text-xs font-mono`}
      >
        <Icon className="text-sm" />
        <span>{techName}</span>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-[#061a24] relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
            <span className="text-teal-400 font-mono text-sm tracking-wider">{dict.portfolio.sectionBadge}</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {dict.portfolio.sectionTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">{dict.portfolio.sectionTitleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {dict.portfolio.sectionSubtitle}
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedCategory === cat.key 
                  ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-500/25 scale-105"
                  : "bg-gray-900/90 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {filteredProjects.map((project) => {
            const projectData = (dict.projectsData && dict.projectsData[project.id]) || {};
            const title = projectData.title || project.title;
            const description = projectData.description || project.description;
            const problem = projectData.problem || project.problem;
            const role = projectData.role || project.role;
            const impact = projectData.impact || project.impact;

            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group relative bg-gradient-to-b from-gray-900/85 via-gray-900/60 to-gray-950/95 border border-gray-800 rounded-2xl overflow-hidden hover:border-teal-500/50 hover:shadow-[0_10px_35px_-10px_rgba(20,184,166,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Badges */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md shadow-teal-500/20">
                      <FiEye className="text-xs" /> {dict.portfolio.featuredBadge}
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-gray-950/80 backdrop-blur-md text-teal-300 text-xs font-mono font-medium rounded-full border border-teal-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Project Image */}
                <Link
                  href={`/projects/${project.slug || project.id}`}
                  className="relative h-60 sm:h-64 overflow-hidden bg-gray-950 block group/img"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent z-10"></div>
                  <Image
                    src={project.image || "/projectImage/image.webp"}
                    alt={title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-teal-900/10 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10"></div>
                </Link>

                {/* Project Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-teal-300 transition-colors">
                      <Link href={`/projects/${project.slug || project.id}`} className="hover:underline decoration-teal-400/40">
                        {title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                      {description}
                    </p>

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
                      <p className="text-gray-500 text-xs font-mono mb-2.5">{dict.portfolio.techUsed}</p>
                      <div className="flex flex-wrap gap-2">
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
                          className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-teal-300 transition-colors group/link"
                        >
                          <div className="p-1.5 rounded-lg bg-gray-800 group-hover/link:bg-teal-500/20 transition-colors">
                            <FiExternalLink className="text-xs" />
                          </div>
                          <span>{dict.portfolio.liveDemo}</span>
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors group/link"
                        >
                          <div className="p-1.5 rounded-lg bg-gray-800 group-hover/link:bg-gray-700 transition-colors">
                            <FiGithub className="text-xs" />
                          </div>
                          <span>{dict.portfolio.code}</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.slug || project.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-medium transition-all group/btn hover:border-teal-400/50"
                    >
                      <span>{dict.portfolio.caseStudy}</span>
                      <FiArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-500 font-mono">
            {dict.portfolio.noProjects}
          </div>
        )}

      </div>
    </section>
  );
}
