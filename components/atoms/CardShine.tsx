"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

interface CardShineProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(16, 185, 129, 0.15)"
  enableTilt?: boolean;
}

export const CardShine: React.FC<CardShineProps> = ({
  children,
  className = "",
  glowColor = "rgba(16, 185, 129, 0.08)",
  enableTilt = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for shine position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Motion values for 3D tilt (spring configurations for smooth return)
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative cursor position inside the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    if (enableTilt) {
      // Calculate rotation based on cursor distance from center (-10 to 10 degrees)
      const rX = ((y - height / 2) / (height / 2)) * -6; // slightly reduced range for elegance
      const rY = ((x - width / 2) / (width / 2)) * 6;
      
      rotateX.set(rX);
      rotateY.set(rY);
    }
  };

  const handleMouseLeave = () => {
    // Reset positions
    rotateX.set(0);
    rotateY.set(0);
  };

  // Define radial gradient template
  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
      }}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Interactive Shine Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
        style={{ background }}
      />
      {children}
    </motion.div>
  );
};

export default CardShine;
