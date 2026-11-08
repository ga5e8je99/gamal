"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiTool,
  FiCpu,
  FiLayers,
  FiDatabase,
  FiTrendingUp,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiRedux,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiPostman,
  SiWebpack,
  SiVite,
  SiVercel,
  SiNetlify,
  SiAdobexd,
  SiBlender,
  SiUnity,
  SiWebgl,
  SiJsonwebtokens,
  SiMongoose,
  SiRailway,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import Link from "next/link";
export default function SkillsSection() {
  const frontendSkills = [
    {
      name: "React",
      icon: <SiReact />,
      level: 95,
      color: "from-cyan-500 to-blue-500",
      experience: "3 years",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      level: 90,
      color: "from-black to-gray-600",
      experience: "2 years",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: 88,
      color: "from-blue-600 to-blue-800",
      experience: "3 years",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: 92,
      color: "from-yellow-500 to-amber-600",
      experience: "5 years",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 94,
      color: "from-teal-500 to-cyan-500",
      experience: "3 years",
    },
    {
      name: "Three.js",
      icon: <SiThreedotjs />,
      level: 65,
      color: "from-gray-700 to-black",
      experience: "2 years",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      level: 87,
      color: "from-purple-600 to-pink-600",
      experience: "3 years",
    },
    {
      name: "HTML5/CSS3",
      icon: <SiHtml5 />,
      level: 96,
      color: "from-orange-600 to-red-600",
      experience: "5+ years",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      level: 86,
      color: "from-green-600 to-emerald-600",
      experience: "3 years",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: 82,
      color: "from-gray-900 to-gray-950",
      experience: "3 years",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 80,
      color: "from-green-700 to-emerald-800",
      experience: "2 years",
    },
    {
      name: "JWT",
      icon: <SiJsonwebtokens />,
      level: 78,
      color: "from-yellow-600 to-red-600",
      experience: "2 years",
    },
    {
      name: "REST APIs",
      icon: <FiServer />,
      level: 90,
      color: "from-indigo-600 to-purple-600",
      experience: "3 years",
    },
    {
      name: "Mongoose",
      icon: <SiMongoose />,
      level: 75,
      color: "from-green-500 to-green-700",
      experience: "2 years",
    },
  ];

  const toolsTechnologies = [
    {
      category: "Development Tools",
      items: [
        {
          name: "VS Code",
          icon: <BiLogoVisualStudio />,
          color: "border-blue-500 text-blue-400",
        },
        {
          name: "Git",
          icon: <SiGit />,
          color: "border-orange-500 text-orange-400",
        },
        {
          name: "GitHub",
          icon: <SiGithub />,
          color: "border-gray-300 text-gray-300",
        },
        
        {
          name: "Postman",
          icon: <SiPostman />,
          color: "border-orange-600 text-orange-500",
        },
      ],
    },
    {
      category: "Build & Deployment",
      items: [
        {
          name: "Vite",
          icon: <SiVite />,
          color: "border-purple-500 text-purple-400",
        },
        {
          name: "Webpack",
          icon: <SiWebpack />,
          color: "border-blue-300 text-blue-300",
        },
        {
          name: "Vercel",
          icon: <SiVercel />,
          color: "border-gray-50 text-gray-50",
        },
        {
          name: "Netlify",
          icon: <SiNetlify />,
          color: "border-teal-500 text-teal-400",
        },
        {
          name: "Railway",
          icon: <SiRailway />,
          color: "border-white text-white",
        },
      ],
    },
    {
      category: "Design Ui/UX Tools",
      items: [
        {
          name: "Figma",
          icon: <SiFigma />,
          color: "border-pink-500 text-pink-400",
        },
        {
          name: "Illustrator",
          icon: <SiAdobeillustrator />,
          color: "border-amber-700 text-amber-500",
        },
        {
          name: "Photoshop",
          icon: <SiAdobephotoshop />,
          color: "border-blue-700 text-blue-500",
        },
        
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
      className="py-20 bg-linear-to-b from-black via-gray-900 to-black"
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
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-blue-400 font-mono text-sm tracking-wider">
              TECHNICAL EXPERTISE
            </span>
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-500">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities across web
            development
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
            <div className="p-3 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500">
              <FiCode className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Front-End Development
              </h3>
              <p className="text-gray-400">
                Building modern, responsive user interfaces
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group bg-linear-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl text-gray-300">{skill.icon}</div>
                    <div>
                      <h4 className="text-white font-bold">{skill.name}</h4>
                      <p className="text-gray-500 text-sm">
                        {skill.experience} experience
                      </p>
                    </div>
                  </div>
                  <span className="text-green-400 font-mono text-sm bg-gray-800 px-2 py-1 rounded">
                    {skill.level}%
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                    />
                  </div>
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
            <div className="p-3 rounded-xl bg-linear-to-r from-green-500 to-emerald-600">
              <FiServer className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Back-End Development
              </h3>
              <p className="text-gray-400">
                Server-side logic, databases, and APIs
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group bg-linear-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-5 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl text-gray-300">{skill.icon}</div>
                    <div>
                      <h4 className="text-white font-bold">{skill.name}</h4>
                      <p className="text-gray-500 text-sm">
                        {skill.experience} experience
                      </p>
                    </div>
                  </div>
                  <span className="text-green-400 font-mono text-sm bg-gray-800 px-2 py-1 rounded">
                    {skill.level}%
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
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
            <div className="p-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-600">
              <FiTool className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Tools & Technologies
              </h3>
              <p className="text-gray-400">
                Development environment and productivity tools
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {toolsTechnologies.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={fadeInUp}
                className="bg-linear-to-b from-gray-900/30 to-transparent border border-gray-800 rounded-2xl p-6"
              >
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <FiLayers className="text-gray-400" />
                  {category.category}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {category.items.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: toolIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="group relative"
                    >
                      <div
                        className={`bg-gray-900/50 border ${
                          tool.color.split(" ")[0]
                        } rounded-xl p-4 text-center transition-all duration-300 hover:bg-gray-800/50 hover:shadow-lg`}
                      >
                        <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                          {tool.icon}
                        </div>
                        <p
                          className={`text-sm font-medium ${
                            tool.color.split(" ")[1]
                          }`}
                        >
                          {tool.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-blue-900/20 to-transparent border border-blue-800/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiCpu className="text-blue-400 text-2xl" />
                <h4 className="text-white font-bold">Full-Stack Focus</h4>
              </div>
              <p className="text-gray-300 text-sm">
                End-to-end development capability from UI to database
              </p>
            </div>

            <div className="bg-linear-to-br from-green-900/20 to-transparent border border-green-800/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiTrendingUp className="text-green-400 text-2xl" />
                <h4 className="text-white font-bold">Continuous Learning</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Always updating skills with latest technologies and best
                practices
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-900/20 to-transparent border border-purple-800/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiDatabase className="text-purple-400 text-2xl" />
                <h4 className="text-white font-bold">
                  Backend & API Development
                </h4>
              </div>
              <p className="text-gray-300 text-sm">
                Strong experience in building scalable APIs and managing
                databases
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-linear-to-r from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Let&apos;s combine these skills to build something amazing
              together
            </p>
            <Link href={'#services'} className="px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25">
              Start a Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
