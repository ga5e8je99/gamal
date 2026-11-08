"use client";

import { motion } from "framer-motion";
import { 
  FiCode, 
  FiLayers, 
  FiSmartphone, 
  FiGlobe,
  FiShield,
  FiZap,
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiMessageSquare
} from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiThreedotjs, 
  SiFigma,
  SiAdobexd,
  SiAndroid,
  SiIos,
  SiWebgl,
  SiUnity
} from "react-icons/si";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <FiCode />,
      color: "from-blue-500 to-cyan-500",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: [
        "Custom React & Next.js Applications",
        "Progressive Web Apps (PWA)",
        "Real-time Applications",
        "E-commerce Solutions",
        "API Integration & Development",
        "Performance Optimization"
      ],
      technologies: [
        { name: "React/Next.js", icon: <SiReact /> },
        { name: "TypeScript", icon: <FiCode /> },
        { name: "Node.js", icon: <FiCode /> },
        { name: "MongoDB", icon: <FiCode /> }
      ],
      process: [
        { step: "Discovery & Planning", description: "Requirements analysis" },
        { step: "UI/UX Design", description: "Wireframing & prototyping" },
        { step: "Development", description: "Agile development cycle" },
        { step: "Testing & Deployment", description: "Quality assurance" }
      ],
      pricing: {
        basic: "$1,500+",
        standard: "$3,500+",
        premium: "$7,500+"
      }
    },
    {
      id: 2,
      title: "UI/UX Design",
      icon: <FiLayers />,
      color: "from-purple-500 to-pink-500",
      description: "User-centered designs that combine aesthetics with functionality to create intuitive and engaging digital experiences.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Interactive Mockups",
        "Design Systems",
        "User Testing",
        "Accessibility Compliance"
      ],
      technologies: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "Adobe XD", icon: <SiAdobexd /> },
        { name: "Prototyping", icon: <FiLayers /> },
        { name: "User Testing", icon: <FiUsers /> }
      ],
      process: [
        { step: "Research", description: "User personas & journey mapping" },
        { step: "Wireframing", description: "Low-fidelity prototypes" },
        { step: "Design", description: "High-fidelity mockups" },
        { step: "Testing", description: "User feedback & iteration" }
      ],
      pricing: {
        basic: "$800+",
        standard: "$1,800+",
        premium: "$3,500+"
      }
    },
    {
      id: 3,
      title: "App Development",
      icon: <FiSmartphone />,
      color: "from-green-500 to-emerald-500",
      description: "Cross-platform mobile applications built with React Native for consistent performance across iOS and Android.",
      features: [
        "React Native Applications",
        "iOS & Android Development",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Third-party Integrations"
      ],
      technologies: [
        { name: "React Native", icon: <SiReact /> },
        { name: "iOS", icon: <SiIos /> },
        { name: "Android", icon: <SiAndroid /> },
        { name: "Firebase", icon: <FiCode /> }
      ],
      process: [
        { step: "Strategy", description: "Market research & planning" },
        { step: "Design", description: "Mobile-first design approach" },
        { step: "Development", description: "Agile mobile development" },
        { step: "Launch", description: "Store deployment & maintenance" }
      ],
      pricing: {
        basic: "$2,500+",
        standard: "$5,000+",
        premium: "$10,000+"
      }
    },
    {
      id: 4,
      title: "VR Development",
      icon: <FiGlobe />,
      color: "from-orange-500 to-red-500",
      description: "Immersive virtual reality experiences and 3D web applications that push the boundaries of digital interaction.",
      features: [
        "3D Web Applications",
        "VR/AR Experiences",
        "Interactive 3D Models",
        "Real-time Rendering",
        "Spatial Audio",
        "Multi-user VR Spaces"
      ],
      technologies: [
        { name: "Three.js", icon: <SiThreedotjs /> },
        { name: "WebGL", icon: <SiWebgl /> },
        { name: "Unity", icon: <SiUnity /> },
        { name: "Blender", icon: <FiCode /> }
      ],
      process: [
        { step: "Concept", description: "VR/AR strategy planning" },
        { step: "3D Modeling", description: "Asset creation & optimization" },
        { step: "Development", description: "Immersive experience building" },
        { step: "Testing", description: "Performance & UX testing" }
      ],
      pricing: {
        basic: "$3,000+",
        standard: "$7,000+",
        premium: "$15,000+"
      }
    }
  ];

  const additionalServices = [
    {
      title: "Performance Optimization",
      icon: <FiZap />,
      description: "Speed up your website with advanced optimization techniques",
      features: ["Core Web Vitals", "Lighthouse Score", "Caching Strategies"]
    },
    {
      title: "Security Auditing",
      icon: <FiShield />,
      description: "Comprehensive security assessment and protection implementation",
      features: ["Vulnerability Testing", "SSL Implementation", "Data Protection"]
    },
    {
      title: "SEO Optimization",
      icon: <FiTrendingUp />,
      description: "Improve search engine rankings and organic traffic",
      features: ["Technical SEO", "Content Strategy", "Analytics Setup"]
    },
    {
      title: "Maintenance & Support",
      icon: <FiCheckCircle />,
      description: "Ongoing support and maintenance for your digital products",
      features: ["Regular Updates", "Bug Fixes", "Technical Support"]
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
    <section id="services" className="py-20 bg-linear-to-b from-black via-gray-900 to-black">
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
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent"></div>
            <span className="text-indigo-400 font-mono text-sm tracking-wider">MY SERVICES</span>
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services I <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">Offer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs and goals
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative bg-linear-to-b from-gray-900/50 to-transparent border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-linear-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400 text-sm">Starting from {service.pricing.basic}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>

              {/* Service Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <FiCheckCircle className="text-green-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/50 text-gray-300 text-sm border border-gray-700"
                      >
                        <span className="text-sm">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Development Process</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="bg-gray-800/30 rounded-lg p-3">
                        <div className="text-indigo-400 text-xs font-semibold mb-1">Step {idx + 1}</div>
                        <div className="text-white text-sm font-medium">{step.step}</div>
                        <div className="text-gray-500 text-xs">{step.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Starting at</div>
                    <div className="text-2xl font-bold text-white">{service.pricing.basic}</div>
                  </div>
                  <button className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
            <h3 className="text-3xl font-bold text-white mb-3">
              Additional <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-500">Services</span>
            </h3>
            <p className="text-gray-400">Specialized solutions for specific needs</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="group bg-linear-to-b from-gray-900/30 to-transparent border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gray-800/50 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 mb-4">
                  {service.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-gray-500 text-xs">
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
            <h3 className="text-3xl font-bold text-white mb-3">
              How I <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500">Work</span>
            </h3>
            <p className="text-gray-400">A structured process for successful project delivery</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-linear-to-r from-transparent via-gray-800 to-transparent hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your requirements and goals",
                  icon: <FiMessageSquare />
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Creating detailed project roadmap and timeline",
                  icon: <FiLayers />
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building with agile methodologies and regular updates",
                  icon: <FiCode />
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Testing, deployment, and ongoing support",
                  icon: <FiCheckCircle />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative text-center"
                >
                  <div className="relative z-10 inline-flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-linear-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{step.step}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-linear-to-r from-gray-900/50 to-gray-900/30 p-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and create a custom solution that drives results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/25">
                  Start a Project
                </button>
                <button className="px-8 py-3 border-2 border-gray-700 text-gray-300 font-medium rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}