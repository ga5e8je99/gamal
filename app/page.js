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
        <Hero />
        <About />
        <SkillsSection />
        <ExperienceEducation />
        <Portfolio />
        <Services />
        <ContactSection />
      </main>
    </div>
  );
}
