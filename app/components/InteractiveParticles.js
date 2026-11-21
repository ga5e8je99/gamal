"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // High-visibility density for full-page immersion
    const numParticles = Math.min(Math.floor((width * height) / 11000), 100);
    const particles = [];
    let mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Vivid Palette: Signature Emerald, Mint, Teal, and Electric Cyan
    const colors = [
      { r: 52, g: 211, b: 153 }, // Mint (#34d399) - High brightness
      { r: 45, g: 212, b: 191 }, // Teal (#2dd4bf) - Vivid
      { r: 16, g: 185, b: 129 }, // Emerald (#10b981) - Primary
      { r: 6, g: 182, b: 212 },  // Cyan (#06b6d4) - Radiant
    ];

    for (let i = 0; i < numParticles; i++) {
      const typeRand = Math.random();
      let type = "small";
      let radius = Math.random() * 2.5 + 1.5;

      if (typeRand > 0.85) {
        type = "large"; // Large translucent glowing bubble with highlight glint
        radius = Math.random() * 14 + 11;
      } else if (typeRand > 0.6) {
        type = "medium"; // Medium luminous bubble
        radius = Math.random() * 6 + 4.5;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.55 - 0.2, // Continuous upward floating motion
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.025 + 0.012,
        radius,
        type,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.45, // High-contrast opacity
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing constellation connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.22 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. Update and draw floating bubbles
      for (let p of particles) {
        // Natural gentle swaying motion
        p.swayAngle += p.swaySpeed;
        p.x += p.vx + Math.sin(p.swayAngle) * 0.35;
        p.y += p.vy;

        // Wrap around viewport edges seamlessly
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }
        if (p.y > height + 30) p.y = -30;

        // Mouse proximity interaction (smooth repulsion)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 2.5;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.type === "large") {
          // Large translucent bubble with luminous gradient and crisp glowing border
          const grad = ctx.createRadialGradient(
            p.x - p.radius * 0.35,
            p.y - p.radius * 0.35,
            p.radius * 0.1,
            p.x,
            p.y,
            p.radius
          );
          grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.5)`);
          grad.addColorStop(0.7, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.18)`);
          grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.7)`);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.9)`;
          ctx.lineWidth = 1.4;
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.8)`;
          ctx.shadowBlur = 8;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Shiny reflective bubble glint
          ctx.beginPath();
          ctx.arc(
            p.x - p.radius * 0.38,
            p.y - p.radius * 0.38,
            p.radius * 0.25,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.fill();
        } else if (p.type === "medium") {
          // Medium luminous bubble
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.45)`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.85)`;
          ctx.lineWidth = 1.1;
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.6)`;
          ctx.shadowBlur = 6;
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else {
          // Small glowing sparkling bubble
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.8)`;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
    />
  );
}
