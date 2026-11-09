"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsSection from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ExperienceEducation from "./components/ExperienceEducation";
import Services from "./components/Services";
import ContactSection from "./components/Contact";
import WelcomeAnimation from "./components/WelcomeAnimation";
import Wave from "./components/Wave";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-transparent min-h-screen text-white selection:bg-teal-500/30 selection:text-teal-200">
      <AnimatePresence mode="wait">
        {loading && (
          <WelcomeAnimation
            key="welcome-intro"
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Navbar />

        {/* 1. Hero Section (#080c16) */}
        <Hero />

        {/* Wave: Hero (#080c16) -> About (#061d19) */}
        <Wave
          fill="#061d19"
          stroke="rgba(16, 185, 129, 0.65)"
          className="bg-[#080c16]"
        />

        {/* 2. About Section (#061d19) */}
        <About />

        {/* Wave: About (#061d19) -> Skills (#0b172a) */}
        <Wave
          fill="#0b172a"
          stroke="rgba(6, 182, 212, 0.65)"
          flip
          className="bg-[#061d19]"
        />

        {/* 3. Skills Section (#0b172a) */}
        <SkillsSection />

        {/* Wave: Skills (#0b172a) -> Experience (#141026) */}
        <Wave
          fill="#141026"
          stroke="rgba(139, 92, 246, 0.65)"
          className="bg-[#0b172a]"
        />

        {/* 4. Experience & Education Section (#141026) */}
        <ExperienceEducation />

        {/* Wave: Experience (#141026) -> Portfolio (#061a24) */}
        <Wave
          fill="#061a24"
          stroke="rgba(20, 184, 166, 0.65)"
          flip
          className="bg-[#141026]"
        />

        {/* 5. Portfolio Section (#061a24) */}
        <Portfolio />

        {/* Wave: Portfolio (#061a24) -> Services (#0d1527) */}
        <Wave
          fill="#0d1527"
          stroke="rgba(59, 130, 246, 0.65)"
          className="bg-[#061a24]"
        />

        {/* 6. Services Section (#0d1527) */}
        <Services />

        {/* Wave: Services (#0d1527) -> Contact (#060913) */}
        <Wave
          fill="#060913"
          stroke="rgba(45, 212, 191, 0.65)"
          flip
          className="bg-[#0d1527]"
        />

        {/* 7. Contact Section (#060913) */}
        <ContactSection />
      </main>
    </div>
  );
}
