"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isText, setIsText] = useState(false);

  // Raw mouse coordinates for instant center dot tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth fluid trailing outer ring
  const springConfig = { damping: 26, stiffness: 320, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setMounted(true);
    document.body.classList.add("custom-cursor-enabled");

    let isInside = false;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isInside) {
        isInside = true;
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseEnter = () => {
      isInside = true;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      isInside = false;
      setIsVisible(false);
    };

    const checkHoverTarget = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], select, .cursor-pointer, [data-cursor-hover]'
      );
      const textElement = target.closest(
        'input[type="text"], input[type="email"], input[type="tel"], textarea, [contenteditable="true"]'
      );

      setIsHovered(!!interactive);
      setIsText(!!textElement);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", checkHoverTarget, { passive: true });
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", checkHoverTarget);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[999999] overflow-hidden select-none transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* 1. Outer Smooth Trailing Halo Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.65 : isText ? 0.4 : 1,
          borderColor: isHovered
            ? "rgba(45, 212, 191, 0.9)"
            : "rgba(20, 184, 166, 0.4)",
          backgroundColor: isHovered
            ? "rgba(20, 184, 166, 0.18)"
            : "rgba(20, 184, 166, 0.04)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="w-9 h-9 rounded-full border border-teal-400/50 backdrop-blur-[1px] shadow-[0_0_15px_rgba(20,184,166,0.3)]"
      />

      {/* 2. Inner Instant Precision Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 1.4 : isText ? 0 : 1,
        }}
        transition={{ duration: 0.08, ease: "easeOut" }}
        className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 shadow-[0_0_10px_#2dd4bf,0_0_18px_#06b6d4]"
      />
    </div>
  );
}
