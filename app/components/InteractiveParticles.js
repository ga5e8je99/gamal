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

    // Density tailored for full-page coverage at silky 60 FPS
    const numParticles = Math.min(Math.floor((width * height) / 14000), 85);
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

    // Palette: Signature Emerald, Mint, Teal, and Electric Cyan
    const colors = [
      { r: 16, g: 185, b: 129 }, // Emerald
      { r: 20, g: 184, b: 166 }, // Teal
      { r: 52, g: 211, b: 153 }, // Mint
      { r: 6, g: 182, b: 212 },  // Cyan
    ];

    for (let i = 0; i < numParticles; i++) {
      const typeRand = Math.random();
      let type = "small";
      let radius = Math.random() * 2.5 + 1.2;

      if (typeRand > 0.88) {
        type = "large"; // Large translucent floating bubble with glowing rim
        radius = Math.random() * 12 + 10;
      } else if (typeRand > 0.65) {
        type = "medium"; // Medium bubble
        radius = Math.random() * 5 + 4;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.15, // Upward floating bubble motion
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        radius,
        type,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.35 + 0.25,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle constellation connections between nearby small/medium particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.14 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.7;
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
        p.x += p.vx + Math.sin(p.swayAngle) * 0.3;
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
          const force = (1 - dist / mouse.radius) * 2.2;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.type === "large") {
          // Translucent bubble with glowing border and subtle reflection glint
          const grad = ctx.createRadialGradient(
            p.x - p.radius * 0.3,
            p.y - p.radius * 0.3,
            p.radius * 0.1,
            p.x,
            p.y,
            p.radius
          );
          grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.4})`);
          grad.addColorStop(0.7, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.12})`);
          grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.6})`);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.75})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Bubble glint
          ctx.beginPath();
          ctx.arc(
            p.x - p.radius * 0.35,
            p.y - p.radius * 0.35,
            p.radius * 0.22,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.65})`;
          ctx.fill();
        } else if (p.type === "medium") {
          // Medium glowing bubble
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.4})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.8})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          // Small sparkling bubble
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.5)`;
          ctx.shadowBlur = 5;
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
      className="fixed inset-0 pointer-events-none z-20 w-full h-full opacity-75"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
