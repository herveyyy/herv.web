"use client";

import React, { useEffect, useRef } from "react";

interface BackgroundDotsProps {
  variant?: "grid" | "network";
  color?: string; // e.g. "rgba(16, 185, 129, 0.4)"
  opacity?: number;
  interactive?: boolean;
}

export const BackgroundDots: React.FC<BackgroundDotsProps> = ({
  variant = "grid",
  color = "rgba(16, 185, 129, 0.15)",
  opacity = 1,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    // Intersection Observer to stop animation when canvas is not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Track mouse position relative to canvas
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      // Initialize particles if network variant
      if (variant === "network") {
        const area = rect.width * rect.height;
        const particleCount = Math.min(Math.floor(area / 15000), 100); // balance density and performance
        particles = [];
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.3,
          });
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Ease the mouse coordinates to make movement super smooth
    const easeMouse = () => {
      const mouse = mouseRef.current;
      if (mouse.targetX === -1000) {
        mouse.x = -1000;
        mouse.y = -1000;
      } else {
        if (mouse.x === -1000) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.1;
          mouse.y += (mouse.targetY - mouse.y) * 0.1;
        }
      }
    };

    // Render loop
    const render = () => {
      if (!canvas || !ctx) return;
      
      if (isVisibleRef.current) {
        const width = canvas.width / (window.devicePixelRatio || 1);
        const height = canvas.height / (window.devicePixelRatio || 1);

        ctx.clearRect(0, 0, width, height);
        easeMouse();

        const mouse = mouseRef.current;

        if (variant === "grid") {
          const spacing = 40;
          const cols = Math.ceil(width / spacing) + 1;
          const rows = Math.ceil(height / spacing) + 1;

          for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
              const baseX = c * spacing;
              const baseY = r * spacing;

              let x = baseX;
              let y = baseY;
              let dotColor = color;
              let dotRadius = 1;

              if (mouse.x !== -1000) {
                const dx = mouse.x - baseX;
                const dy = mouse.y - baseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 120;

                if (dist < maxDist) {
                  // Magnetic pull/attraction towards mouse
                  const factor = (maxDist - dist) / maxDist;
                  x += dx * factor * 0.15;
                  y += dy * factor * 0.15;
                  dotRadius = 1 + factor * 2;
                  
                  // Color blending towards brighter emerald
                  dotColor = `rgba(16, 185, 129, ${opacity * (0.15 + factor * 0.65)})`;
                }
              }

              ctx.beginPath();
              ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
              ctx.fillStyle = dotColor;
              ctx.fill();
            }
          }
        } else if (variant === "network") {
          // Update & Draw Particles
          particles.forEach((p, idx) => {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce on boundaries
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            // Connect close particles
            for (let j = idx + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dx = p.x - p2.x;
              const dy = p.y - p2.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const maxDist = 90;

              if (dist < maxDist) {
                const alpha = (maxDist - dist) / maxDist * 0.15;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = color.replace(/[\d.]+\)$/g, `${alpha})`); // dynamically replace alpha
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }

            // Connect to mouse
            if (mouse.x !== -1000) {
              const dx = mouse.x - p.x;
              const dy = mouse.y - p.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const maxDist = 120;

              if (dist < maxDist) {
                const alpha = (maxDist - dist) / maxDist * 0.3;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
              }
            }
          });
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [variant, color, opacity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ opacity }}
    />
  );
};

export default BackgroundDots;
