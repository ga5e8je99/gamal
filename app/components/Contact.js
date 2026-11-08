"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Picker from "./Picker";
import { useSiteData } from "@/lib/useSiteData";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiTwitter,
  FiMessageSquare,
  FiUser,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";
import { SiLinkedin, SiGithub, SiCodepen } from "react-icons/si";

export default function ContactSection() {
  const { addMessage } = useSiteData();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      addMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      // Persist to server API
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      }).catch((err) => console.warn("Server persist warning:", err));
    } catch (err) {
      console.error(err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "gamal.ahmed.dev@gmail.com",
      color: "from-red-500 to-pink-500",
      link: "mailto:gamal.ahmed.dev@gmail.com",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+20 128 564 5073",
      color: "from-green-500 to-emerald-500",
      link: "tel:+201285645073",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Cairo, Egypt",
      color: "from-blue-500 to-cyan-500",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      url: "https://linkedin.com/in/gamal-ahmed--",
      color:
        "hover:bg-blue-600 hover:border-blue-600 hover:text-white text-blue-400",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      url: "https://github.com/ga5e8je99",
      color: "hover:bg-gray-800 hover:border-gray-800 text-gray-300",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      url: "https://twitter.com/yourusername",
      color:
        "hover:bg-sky-500 hover:border-sky-500 hover:text-white text-sky-400",
    },
    {
      name: "CodePen",
      icon: <SiCodepen />,
      url: "https://codepen.io/yourusername",
      color: "hover:bg-black hover:border-black text-gray-300",
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
  const [open, setOpen] = useState(true);
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-black via-gray-900 to-black "
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
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-teal-500 to-transparent"></div>
            <span className="text-teal-400 font-mono text-sm tracking-wider">
              GET IN TOUCH
            </span>
            <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-teal-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-500">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together
            to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Social */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FiMessageSquare className="text-teal-500" />
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-linear-to-b from-gray-900/30 to-transparent border border-gray-800 rounded-xl hover:border-teal-500/50 transition-all duration-300"
                  >
                    <a
                      href={info.link}
                      className="flex items-center gap-4 group flex-1"
                    >
                      <div
                        className={`p-3 rounded-lg bg-linear-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">
                          {info.title}
                        </div>
                        <div className="text-white font-medium group-hover:text-teal-300 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                    {info.title !== "Location" && (
                      <button
                        type="button"
                        onClick={() => handleCopy(info.value, info.title)}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-gray-800 text-gray-300 hover:bg-teal-500/20 hover:text-teal-300 border border-gray-700 transition-all shrink-0 ml-3"
                      >
                        {copiedKey === info.title ? "Copied!" : "Copy"}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FiUser className="text-teal-500" />
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center justify-center p-4 border border-gray-800 rounded-xl transition-all duration-300 ${social.color}`}
                  >
                    <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={fadeInUp}>
              <div className="bg-linear-to-br from-gray-900/50 to-transparent border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-linear-to-r from-teal-500 to-cyan-500">
                    <FiCheckCircle className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">
                      Current Availability
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Taking on new projects
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-teal-400 font-medium">
                      Within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Project Types</span>
                    <span className="text-teal-400 font-medium">
                      Web Applications
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Timezone</span>
                    <span className="text-teal-400 font-medium">
                      GMT+2 (Cairo)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="bg-linear-to-b from-gray-900/50 to-transparent border border-gray-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send me a message
              </h3>
              <p className="text-gray-400 mb-8">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex p-4 rounded-full bg-linear-to-r from-green-500 to-emerald-600 mb-6">
                    <FiCheckCircle className="text-white text-3xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-400 mb-6">
                    Thank you for your message. I&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        <span className="flex items-center gap-1">
                          <FiUser className="text-teal-500" />
                          Your Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        <span className="flex items-center gap-1">
                          <FiMail className="text-teal-500" />
                          Email Address
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <span className="flex items-center gap-1">
                        <FiFileText className="text-teal-500" />
                        Subject
                      </span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <span className="flex items-center gap-1">
                        <FiMessageSquare className="text-teal-500" />
                        Message
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-gray-400 text-sm">
                      <p>Typically replies within 24 hours</p>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group px-8 py-3 bg-linear-to-r from-teal-600 to-cyan-600 text-white font-medium rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map/CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-linear-to-b from-gray-900/30 to-transparent border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Map Placeholder */}
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex p-4 rounded-full bg-linear-to-r from-teal-500 to-cyan-500 mb-4">
                      <FiMapPin className="text-white text-2xl" />
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      Based in Cairo, Egypt
                    </h4>
                    <p className="text-gray-400">
                      Working with clients worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Prefer a quick chat?
                </h3>
                <p className="text-gray-400 mb-6">
                  Schedule a call to discuss your project in detail
                </p>
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => setIsCalendarOpen(true)}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-medium rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-teal-500/20"
                  >
                    Schedule a Call
                  </button>
                  <Link
                    href="https://wa.me/201285645073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 border-2 border-gray-700 text-gray-300 font-medium rounded-lg hover:border-teal-500 hover:text-teal-400 transition-all duration-300"
                  >
                    WhatsApp Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Picker openProp={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  );
}
