"use client";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiExternalLink,
  FiUsers,
  FiStar,
  FiTarget
} from "react-icons/fi";

export default function ExperienceEducation() {
  const experiences = [
    {
      type: "freelancer",
      title: "Freelance Full Stack Web Developer",
      company: "Self-Employed",
      period: "2020 - Present",
      location: "Remote",
      description: "Working with clients worldwide to build modern web applications. Specializing in full‑stack development with a focus on performance, scalability, and responsive design.",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      icon: <FiUsers />,
      color: "from-blue-500 to-cyan-500",
      highlights: [
        "Delivered 20+ projects with 100% client satisfaction",
        "Built scalable full‑stack solutions for startups and enterprises",
        "Implemented modern authentication and API integrations"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computers & Informatics",
      institution: "Suez Canal University",
      period: "2020 - 2025",
      location: "Ismailia, Egypt",
      description: "Specialized in software engineering and human-computer interaction. Graduated with honors.",
      courses: ["Web Technologies", "Computer Graphics", "Human-Computer Interaction", "Data Structures"],
      icon: <FiBookOpen />,
      color: "from-purple-500 to-pink-500",
      evaluation: "Good"
    }
  ];

  const courses = [
    {
      title: "Advanced Full Stack Development",
      platform: "Coursera",
      duration: "12 weeks",
      skills: ["MERN", "REST APIs", "GraphQL"],
      icon: <FiStar />,
      completed: true
    },
    {
      title: "Advanced JavaScript Patterns",
      platform: "Udemy",
      duration: "8 weeks",
      skills: ["Design Patterns", "Performance", "ES6+"],
      icon: <FiStar />,
      completed: true
    },
    {
      title: "Web Performance Optimization",
      platform: "Pluralsight",
      duration: "6 weeks",
      skills: ["Core Web Vitals", "Lighthouse", "Optimization"],
      icon: <FiStar />,
      completed: true
    },
    {
      title: "Accessible Web Development",
      platform: "LinkedIn Learning",
      duration: "4 weeks",
      skills: ["WCAG", "ARIA", "Screen Readers"],
      icon: <FiStar />,
      completed: true
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
    <section id="experience" className="py-20 bg-transparent relative z-20">
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
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
            <span className="text-yellow-400 font-mono text-sm tracking-wider">MY JOURNEY</span>
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey, education, and continuous learning path
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Left Column - Experience */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500">
                <FiBriefcase className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
                <p className="text-gray-400">Freelance & consulting work</p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative"
                >
                  {/* Timeline line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-linear-to-b from-blue-500/50 to-transparent group-last:hidden"></div>
                  )}

                  <div className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className={`relative shrink-0 w-12 h-12 rounded-full bg-linear-to-r ${exp.color} flex items-center justify-center`}>
                      {exp.icon}
                      <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-linear-to-b from-gray-900/50 to-transparent border border-gray-800 rounded-xl p-6 group-hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                          <FiCalendar className="text-blue-500" />
                          <span>{exp.period}</span>
                          <FiMapPin className="ml-4 text-green-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-5">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                            <p className="text-gray-400 text-sm">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500">
                <FiBookOpen className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="text-gray-400">Academic background</p>
              </div>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-linear-to-b from-gray-900/50 to-transparent border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-linear-to-r ${edu.color}`}>
                    {edu.icon}
                  </div>
                  {edu.evaluation && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
                        {edu.evaluation}
                      </div>
                      <div className="text-gray-400 text-xs">Evaluation</div>
                    </div>
                  )}
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                <p className="text-purple-400 font-medium mb-3">{edu.institution}</p>

                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="text-purple-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMapPin className="text-green-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {edu.description}
                </p>

                {/* Courses */}
                <div>
                  <p className="text-gray-500 text-xs font-medium mb-2">KEY COURSES</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800/30 text-gray-400 text-xs rounded border border-gray-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        

        {/* Stats & CTA - Certifications stat removed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-linear-to-b from-gray-900/30 to-transparent border border-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-500 mb-2">
                5+
              </div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-linear-to-b from-gray-900/30 to-transparent border border-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500 mb-2">
                20+
              </div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-linear-to-b from-gray-900/30 to-transparent border border-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500 mb-2">
                30+
              </div>
              <div className="text-gray-400">Courses Completed</div>
            </div>
          </div>

          {/* Download CV CTA */}
          <div className="text-center">
            <div className="inline-block bg-linear-to-r from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Want to See My Full CV?</h3>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                Download my complete resume with detailed experience, skills, and achievements
              </p>
              <a
                href="/gamal-ahmed-resume.pdf"
                download="Gamal_Ahmed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/25"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}