"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiTool,
  FiLayers,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVite,
  SiVercel,
  SiNetlify,
  SiJsonwebtokens,
  SiMongoose,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function SkillsSection() {
  const { dict, language } = useLanguage();
  const frontendSkills = [
    {
      name: "React.js",
      icon: <SiReact className="text-cyan-400" />,
      tier: "Production Core",
      experience: "3+ years",
      usedIn: "VR E-Commerce, Food App, Portfolio",
      highlight: "Custom Hooks, Context API, High-performance component architecture",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      tier: "Primary Framework",
      experience: "2+ years",
      usedIn: "Portfolio, JobMatch Portal, Dashboard",
      highlight: "App Router, SSR, Turbopack, Dynamic routing, Metadata SEO",
      badgeColor: "border-white/40 text-white bg-white/10",
    },
    {
      name: "JavaScript (ES6+)",
      icon: <SiJavascript className="text-yellow-400" />,
      tier: "Core Language",
      experience: "4+ years",
      usedIn: "All Client & Server projects",
      highlight: "Async/Await, Closures, DOM manipulation, Functional programming",
      badgeColor: "border-yellow-500/40 text-yellow-300 bg-yellow-500/10",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400" />,
      tier: "Production Styling",
      experience: "3+ years",
      usedIn: "Full design systems across all projects",
      highlight: "Responsive layouts, Dark mode, Custom animations, Grid & Flexbox",
      badgeColor: "border-teal-500/40 text-teal-300 bg-teal-500/10",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400" />,
      tier: "Working Proficiency",
      experience: "2 years",
      usedIn: "JobMatch & Type-safe component modules",
      highlight: "Interface contracts, Typed props, Refactoring safety",
      badgeColor: "border-blue-500/40 text-blue-300 bg-blue-500/10",
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux className="text-purple-400" />,
      tier: "State Management",
      experience: "2+ years",
      usedIn: "Food Ordering & Cart state",
      highlight: "Slices, Dispatch actions, Middleware, Global store sync",
      badgeColor: "border-purple-500/40 text-purple-300 bg-purple-500/10",
    },
    {
      name: "HTML5 / Semantic Web",
      icon: <SiHtml5 className="text-orange-400" />,
      tier: "Foundational Standard",
      experience: "5+ years",
      usedIn: "All web applications",
      highlight: "Semantic tags, Web accessibility (a11y), SEO microdata",
      badgeColor: "border-orange-500/40 text-orange-300 bg-orange-500/10",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-emerald-400" />,
      tier: "Server Runtime",
      experience: "2+ years",
      usedIn: "RESTful server services, File handling",
      highlight: "Event loop, Non-blocking I/O, NPM packages, Modular architecture",
      badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300" />,
      tier: "API Framework",
      experience: "2+ years",
      usedIn: "Event Management & Booking APIs",
      highlight: "Middleware chains, Route controllers, Error handling, CORS",
      badgeColor: "border-gray-500/40 text-gray-300 bg-gray-500/10",
    },
    {
      name: "MongoDB & Mongoose",
      icon: <SiMongodb className="text-green-500" />,
      tier: "Database Modeling",
      experience: "2+ years",
      usedIn: "User auth, Event databases, Order catalogs",
      highlight: "Schema validation, Document querying, Aggregation pipelines",
      badgeColor: "border-green-500/40 text-green-300 bg-green-500/10",
    },
    {
      name: "JWT & Auth Security",
      icon: <SiJsonwebtokens className="text-pink-400" />,
      tier: "Authentication",
      experience: "2 years",
      usedIn: "Dashboard auth & User portal sessions",
      highlight: "Stateless tokens, Password hashing (bcrypt), Protected routes",
      badgeColor: "border-pink-500/40 text-pink-300 bg-pink-500/10",
    },
    {
      name: "RESTful APIs",
      icon: <FiServer className="text-cyan-400" />,
      tier: "Architecture",
      experience: "3 years",
      usedIn: "Next.js Route Handlers & Microservices",
      highlight: "Standard HTTP methods, JSON payloads, Status code contracts",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
    },
  ];

  const toolsTechnologies = [
    {
      category: "Development & Testing",
      items: [
        { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-400 text-2xl" />, role: "Primary IDE" },
        { name: "Git", icon: <SiGit className="text-orange-400 text-2xl" />, role: "Version Control" },
        { name: "GitHub", icon: <SiGithub className="text-gray-200 text-2xl" />, role: "Collaboration" },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-2xl" />, role: "API Testing" },
      ],
    },
    {
      category: "Build & Cloud Deployment",
      items: [
        { name: "Vite", icon: <SiVite className="text-purple-400 text-2xl" />, role: "Fast Bundler" },
        { name: "Vercel", icon: <SiVercel className="text-white text-2xl" />, role: "Serverless Host" },
        { name: "Netlify", icon: <SiNetlify className="text-teal-400 text-2xl" />, role: "Edge Hosting" },
      ],
    },
    {
      category: "UI/UX & Design Tools",
      items: [
        { name: "Figma", icon: <SiFigma className="text-pink-400 text-2xl" />, role: "UI Design & Prototyping" },
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-[#0b172a] relative transition-colors duration-500"
    >
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
              {dict.skills.sectionBadge}
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {dict.skills.sectionTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
              {dict.skills.sectionTitleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {dict.skills.sectionSubtitle}
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600">
              <FiCode className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {language === "ar" ? "معمارية الواجهات الأمامية" : "Frontend Architecture"}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === "ar" ? "واجهات مستخدم سريعة، متجاوبة، وسهلة الوصول" : "Fast, responsive, and accessible user interfaces"}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-gray-900/70 to-gray-950/80 border border-gray-800 rounded-2xl p-5 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl p-2 rounded-xl bg-gray-800/80 border border-gray-700/60">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base group-hover:text-teal-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-gray-400 text-xs font-mono">
                          {skill.experience}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${skill.badgeColor}`}
                    >
                      {skill.tier}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-mono">Applied in:</span>
                  <Link
                    href="#portfolio"
                    className="text-teal-400 hover:text-teal-300 flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>{skill.usedIn}</span>
                    <FiArrowUpRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600">
              <FiServer className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {language === "ar" ? "الواجهة الخلفية وقواعد البيانات" : "Backend & Database Architecture"}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === "ar" ? "واجهات برمجة قابلة للتوسع، نمذجة قواعد البيانات، وأنظمة التوثيق" : "Scalable APIs, database modeling, and authentication"}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-gray-900/70 to-gray-950/80 border border-gray-800 rounded-2xl p-5 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl p-2 rounded-xl bg-gray-800/80 border border-gray-700/60">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base group-hover:text-emerald-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-gray-400 text-xs font-mono">
                          {skill.experience}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${skill.badgeColor}`}
                    >
                      {skill.tier}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-mono">Applied in:</span>
                  <Link
                    href="#portfolio"
                    className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>{skill.usedIn}</span>
                    <FiArrowUpRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Workflow */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600">
              <FiTool className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {language === "ar" ? "الأدوات وبيئة التطوير السحابية" : "Tools & Daily Workflow"}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === "ar" ? "أدوات متكاملة للاختبار، التحكم في الإصدارات، والاستضافة السحابية" : "Ecosystem utilities for testing, version control, and cloud deployment"}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {toolsTechnologies.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={fadeInUp}
                className="bg-gradient-to-b from-gray-900/60 to-gray-950/80 border border-gray-800 rounded-2xl p-6"
              >
                <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <FiLayers className="text-teal-400" />
                  {category.category}
                </h4>

                <div className="space-y-3">
                  {category.items.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-900/50 border border-gray-800/80 hover:border-teal-500/30 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        {tool.icon}
                        <span className="text-white text-sm font-medium">
                          {tool.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-400">
                        {tool.role}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
