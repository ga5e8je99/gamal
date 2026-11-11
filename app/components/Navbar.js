"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiDownload, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { language, toggleLanguage, dict, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    pathname?.startsWith("/projects") ? "portfolio" : "home"
  );
  
  useEffect(() => {
    if (pathname?.startsWith("/projects")) {
      setActiveSection("portfolio");
    }
  }, [pathname]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          if (pathname === "/") {
            const sections = [
              "home",
              "about",
              "services",
              "skills",
              "portfolio",
              "experience",
              "contact",
            ];
            const current = sections.find((section) => {
              const element = document.getElementById(section);
              if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 120 && rect.bottom >= 120;
              }
              return false;
            });
            if (current) setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { id: "home", label: dict.nav.home },
    { id: "about", label: dict.nav.about },
    { id: "skills", label: dict.nav.skills },
    { id: "experience", label: dict.nav.experience },
    { id: "portfolio", label: dict.nav.portfolio },
    { id: "services", label: dict.nav.services },
    { id: "contact", label: dict.nav.contact },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-600 rounded-lg blur opacity-75 animate-pulse-slow"></div>
                <Link
                  href="/#home"
                  className="relative text-3xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                >
                  Gamal
                </Link>
              </div>
              <span className="hidden xl:inline text-xs font-mono px-2 py-1 bg-gray-800/50 rounded text-gray-400">
                /dev
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-6">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/#${item.id}`}
                        className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-300 rounded-lg block ${
                          isActive
                            ? "text-green-400 bg-gray-800/60 shadow-xs"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                        }`}
                        onClick={() => setActiveSection(item.id)}
                      >
                        <span className="relative z-10">{item.label}</span>
                        {isActive && (
                          <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-linear-to-r from-green-500 to-emerald-500 rounded-full" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Action Group */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switch Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-800/60 hover:bg-gray-750/80 border border-gray-700/70 hover:border-teal-500/50 text-gray-200 text-xs font-semibold transition-all duration-300 shadow-sm"
                title={language === "en" ? "التبديل إلى العربية" : "Switch to English"}
                aria-label="Toggle language"
              >
                <FiGlobe className="text-teal-400 text-sm" />
                <span>{dict.nav.langSwitch}</span>
              </button>

              {/* Download CV Button */}
              <motion.a
                href="/Gamal_Ahmed_Resume.pdf"
                download="Gamal_Ahmed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-5 py-2.5 bg-linear-to-r from-teal-500 to-emerald-600 text-white font-medium text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 inline-flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-linear-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <FiDownload className="text-base" />
                  <span>{dict.nav.downloadCv}</span>
                </div>
              </motion.a>
            </div>

            {/* Mobile Actions (Lang + Hamburger) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gray-800/60 border border-gray-700 text-gray-200 text-xs font-medium"
                aria-label="Toggle language"
              >
                <FiGlobe className="text-teal-400" />
                <span>{dict.nav.langSwitch}</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white hover:border-green-500/50 transition-all duration-300"
              >
                {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 lg:hidden overflow-hidden"
          >
            <div className="px-4 py-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: item.id.charCodeAt(0) * 0.01 }}
                  >
                    <Link
                      href={`/#${item.id}`}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gray-800/50 text-green-400"
                          : "text-gray-300 hover:bg-gray-800/30 hover:text-white"
                      }`}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span className="font-medium">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 px-4"
              >
                <a
                  href="/Gamal_Ahmed_Resume.pdf"
                  download="Gamal_Ahmed_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-300"
                >
                  <FiDownload className="text-lg" />
                  <span>{dict.nav.downloadCv}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
