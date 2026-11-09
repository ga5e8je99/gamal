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

export default function Portfolio() {
  const { projects } = useSiteData();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Apps", "Frontend", "Full-Stack"];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category?.toLowerCase() === selectedCategory.toLowerCase();
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
    let colorClass = "border-teal-500/40";

    const lower = techName.toLowerCase();
    if (lower.includes("react")) { Icon = SiReact; colorClass = "border-cyan-500/50 text-cyan-300"; }
    else if (lower.includes("next")) { Icon = SiNextdotjs; colorClass = "border-gray-500 text-white"; }
    else if (lower.includes("type")) { Icon = SiTypescript; colorClass = "border-blue-500/50 text-blue-300"; }
    else if (lower.includes("java")) { Icon = SiJavascript; colorClass = "border-yellow-500/50 text-yellow-300"; }
    else if (lower.includes("three")) { Icon = SiThreedotjs; colorClass = "border-gray-400 text-gray-200"; }
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
            <span className="text-teal-400 font-mono text-sm tracking-wider">MY PORTFOLIO</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of modern web applications, interactive interfaces, and scalable full-stack architectures.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-500/25 scale-105"
                  : "bg-gray-900/90 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`group relative bg-gradient-to-b from-gray-900/70 to-gray-950/90 border border-gray-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between ${
                project.featured ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Top Badges */}
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                {project.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md">
                    <FiEye className="text-xs" /> FEATURED
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
                className="relative h-60 md:h-64 overflow-hidden bg-gray-950 block group/img"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                <Image
                  src={project.image || "/projectImage/image.webp"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-teal-900/10 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10"></div>
              </Link>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    <Link href={`/projects/${project.slug || project.id}`} className="hover:underline decoration-teal-400/40">
                      {project.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem, Role, Impact Breakdown */}
                  {(project.problem || project.role || project.impact) && (
                    <div className="mb-4 p-3.5 rounded-xl bg-gray-950/70 border border-gray-800/80 space-y-2 text-xs">
                      {project.problem && (
                        <div className="flex items-start gap-2">
                          <span className="text-amber-400 font-mono text-[11px] font-semibold shrink-0 uppercase tracking-wider">
                            Challenge:
                          </span>
                          <span className="text-gray-300 leading-snug">{project.problem}</span>
                        </div>
                      )}
                      {project.role && (
                        <div className="flex items-start gap-2">
                          <span className="text-teal-400 font-mono text-[11px] font-semibold shrink-0 uppercase tracking-wider">
                            My Role:
                          </span>
                          <span className="text-gray-300 leading-snug">{project.role}</span>
                        </div>
                      )}
                      {project.impact && (
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-400 font-mono text-[11px] font-semibold shrink-0 uppercase tracking-wider">
                            Outcome:
                          </span>
                          <span className="text-emerald-300/90 font-medium leading-snug">{project.impact}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-gray-500 text-xs font-mono mb-2.5">TECHNOLOGIES USED</p>
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
                        <span>Demo</span>
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
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug || project.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-medium transition-all group/btn hover:border-teal-400/50"
                  >
                    <span>Case Study</span>
                    <FiArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-500 font-mono">
            No projects found in this category.
          </div>
        )}

      </div>
    </section>
  );
}
