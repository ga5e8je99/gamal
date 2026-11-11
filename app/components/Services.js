"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiLayers, 
  FiServer,
  FiZap,
  FiCheckCircle,
  FiTrendingUp,
  FiDatabase,
  FiMessageSquare,
  FiCalendar
} from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJsonwebtokens
} from "react-icons/si";
import Picker from "./Picker";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { dict, isRTL } = useLanguage();
  const t = dict?.services || {};

  const servicesData = [
    {
      id: 1,
      defaultTitle: "Full-Stack Web Development",
      icon: <FiCode />,
      color: "from-teal-500 to-cyan-500",
      defaultDescription: "Modern, responsive, and high-performance web applications built with Next.js, React, and Tailwind CSS for seamless user experience.",
      defaultFeatures: [
        "Custom Next.js & React Applications",
        "Server-Side Rendering (SSR) & Static Generation",
        "Responsive & Mobile-First Interface",
        "Fast Performance & Core Web Vitals Optimization",
        "Clean, Maintainable Component Architecture",
        "Seamless Third-Party API Integrations"
      ],
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <SiNodedotjs /> }
      ],
      pricing: {
        basic: "$500",
        standard: "$1,200",
        premium: "$2,500"
      }
    },
    {
      id: 2,
      defaultTitle: "RESTful API & Database Architecture",
      icon: <FiServer />,
      color: "from-emerald-500 to-teal-500",
      defaultDescription: "Scalable backend services, RESTful endpoints, and database models designed with Node.js, Express, and MongoDB.",
      defaultFeatures: [
        "RESTful API Design & Endpoints",
        "MongoDB Schema Design & Validation",
        "JWT Authentication & Route Protection",
        "CRUD Operations & Aggregation Queries",
        "Error Handling & Input Sanitization",
        "Serverless Route Handlers in Next.js"
      ],
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "JWT Auth", icon: <SiJsonwebtokens /> },
        { name: "Next.js API", icon: <SiNextdotjs /> }
      ],
      pricing: {
        basic: "$400",
        standard: "$950",
        premium: "$1,800"
      }
    },
    {
      id: 3,
      defaultTitle: "UI/UX Design to Pixel-Perfect Code",
      icon: <FiLayers />,
      color: "from-cyan-500 to-blue-500",
      defaultDescription: "Translating wireframes and Figma designs into clean, responsive, and accessible code with interactive animations.",
      defaultFeatures: [
        "Figma to React / Tailwind Conversion",
        "Design Systems & Reusable Components",
        "Interactive Animations (Framer Motion)",
        "Mobile-First Responsive Layouts",
        "Accessibility (a11y) & SEO Standards",
        "Dark / Light Mode Architecture"
      ],
      technologies: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "React", icon: <SiReact /> },
        { name: "Framer Motion", icon: <FiLayers /> }
      ],
      pricing: {
        basic: "$350",
        standard: "$800",
        premium: "$1,500"
      }
    }
  ];

  const additionalServicesData = [
    {
      defaultTitle: "Performance Optimization",
      icon: <FiZap />,
      defaultDescription: "Speed up your website with bundle splitting, image optimization, and caching.",
      defaultFeatures: ["Core Web Vitals", "Lighthouse 90+", "Asset Compression"]
    },
    {
      defaultTitle: "Technical SEO & Schema",
      icon: <FiTrendingUp />,
      defaultDescription: "Structured JSON-LD schema, dynamic sitemaps, and OpenGraph social cards.",
      defaultFeatures: ["JSON-LD Person/Org", "Dynamic Sitemaps", "Metadata & Social Tags"]
    },
    {
      defaultTitle: "Database Modeling",
      icon: <FiDatabase />,
      defaultDescription: "Structured MongoDB schemas, Mongoose models, and indexing for fast queries.",
      defaultFeatures: ["Mongoose Schemas", "Indexing", "Validation Middleware"]
    },
    {
      defaultTitle: "Maintenance & Deployment",
      icon: <FiCheckCircle />,
      defaultDescription: "Automated Git deployment to Vercel/Netlify with ongoing code updates.",
      defaultFeatures: ["Vercel CI/CD", "Environment Config", "Post-launch Support"]
    }
  ];

  const stepsData = [
    {
      step: "01",
      defaultTitle: "Discovery",
      defaultDescription: "Understanding requirements, user stories, and technical scope.",
      icon: <FiMessageSquare />
    },
    {
      step: "02",
      defaultTitle: "Planning & Architecture",
      defaultDescription: "Creating wireframes, tech stack selection, and database models.",
      icon: <FiLayers />
    },
    {
      step: "03",
      defaultTitle: "Agile Development",
      defaultDescription: "Iterative sprints with clean code, testing, and continuous feedback.",
      icon: <FiCode />
    },
    {
      step: "04",
      defaultTitle: "Launch & Support",
      defaultDescription: "Production deployment on Vercel, performance checks, and handoff.",
      icon: <FiCheckCircle />
    }
  ];

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

  return (
    <section id="services" className="py-20 bg-[#0d1527] relative transition-colors duration-500">
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
            <span className="text-teal-400 font-mono text-sm tracking-wider">
              {t.sectionBadge || "MY SERVICES"}
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.sectionTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
              {t.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {servicesData.map((service, index) => {
            const localized = t.items?.[index] || {};
            const title = localized.title || service.defaultTitle;
            const description = localized.description || service.defaultDescription;
            const features = localized.features || service.defaultFeatures;

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-b from-gray-900/70 to-gray-950/90 border border-gray-800 rounded-2xl p-7 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-r ${service.color} text-white text-2xl shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6 space-y-2.5">
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                      {t.whatsIncluded || "What's Included"}
                    </h4>
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <FiCheckCircle className="text-teal-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 pt-4 border-t border-gray-800/80">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-gray-900 text-gray-300 text-xs flex items-center gap-1.5 border border-gray-800"
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-5 border-t border-gray-800/80 flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-gray-500 text-xs font-mono">
                      {t.startingAt || "Starting at"}
                    </div>
                    <div className="text-2xl font-bold text-teal-400" dir="ltr">
                      {service.pricing.basic}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCalendarOpen(true)}
                    className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all shadow-md shadow-teal-500/20 cursor-pointer"
                  >
                    {t.bookCall || "Book Call"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.addonsTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                {t.addonsTitleHighlight}
              </span>
            </h3>
            <p className="text-gray-400 text-sm">
              {t.addonsSubtitle}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServicesData.map((service, index) => {
              const localized = t.addons?.[index] || {};
              const title = localized.title || service.defaultTitle;
              const description = localized.description || service.defaultDescription;
              const features = localized.features || service.defaultFeatures;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-800 rounded-xl p-5 hover:border-teal-500/30 transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gray-800/60 text-teal-400 mb-3 text-xl group-hover:bg-teal-500/10 group-hover:text-teal-300 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-white font-bold text-base mb-1.5">{title}</h4>
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">{description}</p>
                  <div className="space-y-1">
                    {features.map((feature, idx) => (
                      <div key={idx} className="text-gray-500 text-[11px] font-mono">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* How I Work */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.howIWorkTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                {t.howIWorkTitleHighlight}
              </span>
            </h3>
            <p className="text-gray-400 text-sm">
              {t.howIWorkSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {stepsData.map((item, index) => {
              const localized = t.steps?.[index] || {};
              const title = localized.title || item.defaultTitle;
              const description = localized.description || item.defaultDescription;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center hover:border-teal-500/30 transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/30 flex items-center justify-center mb-3 text-lg">
                    {item.icon}
                  </div>
                  <div className="text-teal-400 font-mono text-xs font-bold mb-1">
                    {t.stepPrefix || "STEP"} {item.step}
                  </div>
                  <h4 className="text-white font-bold text-base mb-1.5">{title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section with Direct Booking Explanation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900/60 via-gray-950/80 to-gray-900/60 p-8 sm:p-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {t.ctaTitle}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {t.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(true)}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FiCalendar />
                  <span>{t.scheduleConsultation || "Schedule Free Consultation"}</span>
                </button>
                <Link
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-3 border border-gray-700 text-gray-300 font-medium rounded-xl hover:border-teal-500 hover:text-teal-300 transition-all duration-300 text-center"
                >
                  {t.sendMessage || "Send a Message"}
                </Link>
              </div>
              <p className="text-[11px] text-gray-500 mt-4 font-mono">
                {t.noCommitment}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Calendar Booking Modal */}
      <Picker openProp={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  );
}
