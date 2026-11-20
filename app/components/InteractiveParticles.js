"use client";

import React, { useEffect, useRef } from "react";

const THEME_PALETTES = {
  emerald: {
    particles: [
      "rgba(16, 185, 129, ",
      "rgba(20, 184, 166, ",
      "rgba(52, 211, 153, ",
      "rgba(6, 182, 212, ",
    ],
    line: "16, 185, 129",
  },
  cyan: {
    particles: [
      "rgba(6, 182, 212, ",
      "rgba(56, 189, 248, ",
      "rgba(34, 211, 238, ",
      "rgba(59, 130, 246, ",
    ],
    line: "6, 182, 212",
  },
  violet: {
    particles: [
      "rgba(139, 92, 246, ",
      "rgba(168, 85, 247, ",
      "rgba(192, 132, 252, ",
      "rgba(129, 140, 248, ",
    ],
    line: "139, 92, 246",
  },
  amber: {
    particles: [
      "rgba(245, 158, 11, ",
      "rgba(251, 191, 36, ",
      "rgba(253, 211, 77, ",
      "rgba(234, 88, 12, ",
    ],
    line: "245, 158, 11",
  },
  rose: {
    particles: [
      "rgba(244, 63, 94, ",
      "rgba(251, 113, 133, ",
      "rgba(244, 114, 182, ",
      "rgba(225, 29, 72, ",
    ],
    line: "244, 63, 94",
  },
};

export default function InteractiveParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const numParticles = Math.min(Math.floor((width * height) / 18000), 55);
    const particles = [];
    let mouse = { x: -1000, y: -1000, radius: 120 };

    let currentThemeId = "emerald";
    try {
      const saved = localStorage.getItem("gamal_theme_accent");
      if (saved && THEME_PALETTES[saved]) currentThemeId = saved;
    } catch (e) {}

    let currentPalette = THEME_PALETTES[currentThemeId] || THEME_PALETTES.emerald;

    const handleThemeChange = (e) => {
      const newThemeId = e.detail?.id;
      if (newThemeId && THEME_PALETTES[newThemeId]) {
        currentPalette = THEME_PALETTES[newThemeId];
        particles.forEach((p) => {
          p.colorBase = currentPalette.particles[Math.floor(Math.random() * currentPalette.particles.length)];
        });
      }
    };

    window.addEventListener("gamal-theme-change", handleThemeChange);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        colorBase: currentPalette.particles[Math.floor(Math.random() * currentPalette.particles.length)],
        alpha: Math.random() * 0.4 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${currentPalette.line}, ${0.14 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.8;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("gamal-theme-change", handleThemeChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 opacity-70"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
