"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiDownload, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, dict, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    pathname?.startsWith("/projects") ? "portfolio" : "home"
  );
  const mobileMenuRef = useRef(null);

  // Sync active section on project pages
  useEffect(() => {
    if (pathname?.startsWith("/projects")) {
      setActiveSection("portfolio");
    }
  }, [pathname]);

  // Robust, throttled scroll spy for section highlighting
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 20);

          if (pathname === "/") {
            // Check top of page
            if (scrollY < 100) {
              setActiveSection("home");
              ticking = false;
              return;
            }

            // Check bottom of page
            if (
              window.innerHeight + scrollY >=
              document.documentElement.scrollHeight - 100
            ) {
              setActiveSection("contact");
              ticking = false;
              return;
            }

            // Exact DOM order of sections
            const sections = [
              "home",
              "about",
              "skills",
              "experience",
              "portfolio",
              "services",
              "contact",
            ];

            for (let i = sections.length - 1; i >= 0; i--) {
              const sectionId = sections[i];
              const el = document.getElementById(sectionId);
              if (el) {
                const rect = el.getBoundingClientRect();
                // Trigger when section top enters upper viewport
                if (rect.top <= window.innerHeight * 0.35) {
                  setActiveSection(sectionId);
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close mobile menu on Escape key press or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest("button[data-mobile-toggle]")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Navigation Items
  const navItems = [
    { id: "home", label: dict?.nav?.home || "Home" },
    { id: "about", label: dict?.nav?.about || "About" },
    { id: "skills", label: dict?.nav?.skills || "Skills" },
    { id: "experience", label: dict?.nav?.experience || "Experience" },
    { id: "portfolio", label: dict?.nav?.portfolio || "Portfolio" },
    { id: "services", label: dict?.nav?.services || "Services" },
    { id: "contact", label: dict?.nav?.contact || "Contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#060913]/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link
              href="/#home"
              className="flex items-center gap-2 group transition-transform duration-200 hover:scale-102"
              aria-label="Gamal Ahmed - Home"
            >
              <div className="relative flex items-center">
                {/* Subtle emerald ambient aura on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Official Logo */}
                <Image
                  src="/logo-full.png"
                  alt="Gamal Ahmed - Full-Stack Developer"
                  width={180}
                  height={52}
                  priority
                  className="h-9 sm:h-10 w-auto object-contain select-none"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center" aria-label="Main Navigation">
              <ul className="flex items-center gap-1 bg-gray-950/70 p-1 rounded-full border border-gray-800/80 backdrop-blur-sm shadow-inner">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/#${item.id}`}
                        onClick={() => setActiveSection(item.id)}
                        className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 block ${
                          isActive
                            ? "text-teal-300 bg-teal-500/15 border border-teal-500/30 shadow-xs"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        }`}
                      >
                        <span className="relative z-10" suppressHydrationWarning>
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right Action Group */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switch Button */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-900/80 hover:bg-gray-800 border border-gray-800 hover:border-teal-500/50 text-gray-200 text-xs font-semibold transition-all duration-300 cursor-pointer shadow-sm"
                title={language === "en" ? "التبديل إلى العربية" : "Switch to English"}
                aria-label="Toggle language"
              >
                <FiGlobe className="text-teal-400 text-sm" />
                <span suppressHydrationWarning>{dict?.nav?.langSwitch || "العربية"}</span>
              </button>

              {/* Download CV Button */}
              <motion.a
                href="/Gamal_Ahmed_Resume.pdf"
                download="Gamal_Ahmed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium text-xs rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 inline-flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-1.5">
                  <FiDownload className="text-sm" />
                  <span suppressHydrationWarning>{dict?.nav?.downloadCv || "Download CV"}</span>
                </div>
              </motion.a>
            </div>

            {/* Mobile Actions (Language + Hamburger) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-200 text-xs font-medium cursor-pointer"
                aria-label="Toggle language"
              >
                <FiGlobe className="text-teal-400" />
                <span suppressHydrationWarning>{dict?.nav?.langSwitch || "العربية"}</span>
              </button>

              <button
                type="button"
                data-mobile-toggle="true"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-teal-500/50 transition-all duration-300 cursor-pointer"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-[#060913]/95 backdrop-blur-xl border-b border-gray-800/80 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/#${item.id}`}
                        onClick={() => {
                          setActiveSection(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-teal-500/15 text-teal-300 border border-teal-500/30"
                            : "text-gray-300 hover:bg-gray-800/40 hover:text-white"
                        }`}
                      >
                        <span className="font-medium text-sm" suppressHydrationWarning>
                          {item.label}
                        </span>
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-2 border-t border-gray-800/80">
                <a
                  href="/Gamal_Ahmed_Resume.pdf"
                  download="Gamal_Ahmed_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium text-sm rounded-xl hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 shadow-md shadow-teal-500/20"
                >
                  <FiDownload className="text-base" />
                  <span suppressHydrationWarning>{dict?.nav?.downloadCv || "Download CV"}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
