"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiCode,
  FiGlobe,
  FiStar,
  FiTool,
  FiCheckCircle,
} from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiThreedotjs,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiVite,
  SiVercel,
  SiBootstrap,
  SiGithub,
  SiPostman,
  SiMui,
  SiNetlify,
  SiRailway,
  SiJsonwebtokens,
} from "react-icons/si";
import Link from "next/link"; 
import { BiLogoVisualStudio } from "react-icons/bi";
import { useSiteData } from "@/lib/useSiteData";

export default function AboutMe() {
  const { profile } = useSiteData();
  const skills = [
    {
      name: "React/Next.js",
      icon: <SiReact />,
      level: 95,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: 90,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: 92,
      color: "from-yellow-500 to-amber-500",
    },
    

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 94,
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
      level: 90,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Material-UI",
      icon: <SiMui />,
      level: 95,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "HTML5/CSS3",
      icon: <SiHtml5 />,
      level: 96,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      level: 85,
      color: "from-green-400 to-emerald-400",
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 80,
      color: "from-green-600 to-emerald-600",
    },
  ];

  const tools = [
    { name: "VS Code", icon: <BiLogoVisualStudio />, category: "Development" },
    { name: "Git & GitHub", icon: <SiGithub />, category: "Version Control" },
    { name: "Figma", icon: <SiFigma />, category: "Design" },
    { name: "Vercel", icon: <SiVercel />, category: "Deployment" },
    { name: "Vite", icon: <SiVite />, category: "Build Tool" },
    { name: "Postman", icon: <SiPostman />, category: "API Testing" },
    { name: "Netlify", icon: <SiNetlify />, category: "Deployment" },
    { name: "Railway", icon: <SiRailway />, category: "Backend Hosting" },
    { name: "JWT", icon: <SiJsonwebtokens />, category: "Authentication" },
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
      id="about"
      className="py-20 bg-linear-to-b from-black via-gray-900/50 to-black"
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
            <div className="w-8 h-0.5 bg-linear-to-r from-transparent via-green-500 to-transparent"></div>
            <span className="text-green-400 font-mono text-sm tracking-wider">
              GET TO KNOW ME
            </span>
            <div className="w-8 h-0.5 bg-linear-to-r from-transparent via-green-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-blue-500">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer bridging the gap between web and virtual
            reality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image & Bio */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                <Image
                  src="/profile.webp"
                  alt="Gamal Ahmed - Web & VR Developer"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-green-500/30 rounded-full animate-pulse-slow"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-blue-500/30 rounded-full animate-pulse-slow"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">
                  Available for work
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-3">
                <FiStar className="text-green-500 text-xl" />
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hello! I&apos;m{" "}
                  <span className="text-teal-400 font-medium">
                    {profile.name || "Gamal Ahmed"}
                  </span>
                  , a dedicated Full Stack Developer with over {profile.yearsExperience || "3+"} years of
                  experience in building modern, scalable, and user-friendly web
                  applications.
                </p>

                <p>
                  I started my journey with front-end development, mastering
                  HTML, CSS, JavaScript, and React. With time, I expanded my
                  expertise to back-end technologies such as Node.js,
                  Express.js, and MongoDB, which enabled me to build complete,
                  end-to-end solutions that deliver real value to users.
                </p>

                <p>
                  I’m passionate about writing clean, maintainable code and
                  crafting seamless digital experiences. My goal is to develop
                  applications that are fast, secure, easy to use, and optimized
                  for performance. I enjoy working across the full development
                  lifecycle — from planning and UI/UX design, to backend logic,
                  database architecture, and deployment.
                </p>

                <p>
                  Beyond coding, I love exploring new technologies, improving my
                  skills, contributing to open-source projects, and helping
                  other developers through blog posts, workshops, and community
                  support.
                </p>

                <p>
                  I believe in continuous learning and staying up-to-date with
                  the latest industry standards to ensure the solutions I build
                  remain modern, efficient, and impactful.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-teal-400" />
                  <span className="text-gray-300">{profile.yearsExperience || "3+"} Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-teal-400" />
                  <span className="text-gray-300">{profile.projectsCompleted || "20+"} Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500" />
                  <span className="text-gray-300">Web App Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500" />
                  <span className="text-gray-300">Remote Work</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500" />
                  <span className="text-gray-300">On-site Availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500" />
                  <span className="text-gray-300">hybrid Work Options</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Tools */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Skills Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-b from-gray-900/50 to-transparent border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-linear-to-r from-green-500 to-emerald-600">
                  <FiCode className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Technical Skills
                  </h3>
                  <p className="text-gray-400 text-sm">My core competencies</p>
                </div>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-xl text-gray-400 group-hover:text-white transition-colors">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-green-400 text-sm font-mono">
                        {skill.level}%
                      </span>
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
                ))}
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-b from-gray-900/50 to-transparent border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500">
                  <FiTool className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Tools & Technologies
                  </h3>
                  <p className="text-gray-400 text-sm">My daily drivers</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="group bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="text-3xl text-gray-400 group-hover:text-white transition-colors">
                        {tool.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {tool.name}
                        </h4>
                        <p className="text-gray-500 text-xs mt-1">
                          {tool.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-3 text-gray-400">
                  <FiGlobe className="text-blue-500" />
                  <p className="text-sm">
                    Always exploring new tools and technologies to stay at the
                    forefront of modern web development.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-linear-to-r from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-2xl p-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Let&apos;s Build Something Amazing
              </h3>
              <p className="text-gray-400">
                Have a project in mind? Let&apos;s discuss how we can bring it
                to life.
              </p>
            </div>
            <Link href="#contact" className="px-8 py-3 bg-linear-to-r from-green-600 to-emerald-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/25">
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
     
    </section>
  );
}
