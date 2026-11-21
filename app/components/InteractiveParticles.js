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

    // Balanced density for full-page subtle immersion
    const numParticles = Math.min(Math.floor((width * height) / 13000), 80);
    const particles = [];
    let mouse = { x: -1000, y: -1000, radius: 130 };

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

    // Signature Palette: Soft Emerald, Mint, Teal, and Cyan
    const colors = [
      { r: 52, g: 211, b: 153 }, // Mint
      { r: 45, g: 212, b: 191 }, // Teal
      { r: 16, g: 185, b: 129 }, // Emerald
      { r: 6, g: 182, b: 212 },  // Cyan
    ];

    for (let i = 0; i < numParticles; i++) {
      const typeRand = Math.random();
      let type = "small";
      let radius = Math.random() * 2.2 + 1.2;

      if (typeRand > 0.88) {
        type = "large"; // Large soft translucent bubble
        radius = Math.random() * 12 + 9;
      } else if (typeRand > 0.65) {
        type = "medium"; // Medium gentle bubble
        radius = Math.random() * 5 + 3.5;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.45 - 0.15, // Smooth upward floating motion
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        radius,
        type,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.25 + 0.2, // Delicate softer alpha
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle, elegant constellation connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. Update and draw floating bubbles
      for (let p of particles) {
        p.swayAngle += p.swaySpeed;
        p.x += p.vx + Math.sin(p.swayAngle) * 0.3;
        p.y += p.vy;

        // Seamless viewport wrapping
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }
        if (p.y > height + 30) p.y = -30;

        // Smooth mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 2.0;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.type === "large") {
          // Soft translucent bubble with subtle gradient and thin rim
          const grad = ctx.createRadialGradient(
            p.x - p.radius * 0.3,
            p.y - p.radius * 0.3,
            p.radius * 0.1,
            p.x,
            p.y,
            p.radius
          );
          grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.22)`);
          grad.addColorStop(0.7, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.06)`);
          grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.38)`);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.45)`;
          ctx.lineWidth = 0.9;
          ctx.stroke();

          // Soft delicate glint
          ctx.beginPath();
          ctx.arc(
            p.x - p.radius * 0.36,
            p.y - p.radius * 0.36,
            p.radius * 0.22,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
          ctx.fill();
        } else if (p.type === "medium") {
          // Medium delicate bubble
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.18)`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.45)`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          // Small twinkling particle
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
          ctx.fill();
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
      className="fixed inset-0 pointer-events-none z-20 w-full h-full opacity-60"
    />
  );
}
