"use client"
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function TrustedHostsTicker() {
  const controls = useAnimationControls();
  const clients = [
    { id: 1, name: "Zoondub", logoUrl: "/clients/Zoondub.png" },
    { id: 2, name: "Mayur", logoUrl: "/clients/Mayur.png" },
    { id: 3, name: "Nevilles", logoUrl: "/clients/Nevilles.png" },
    { id: 4, name: "Retrofusion", logoUrl: "/clients/Retrofusion.png" },
    { id: 5, name: "Villazio", logoUrl: "/clients/Villazio.png" },
    { id: 6, name: "Bachis", logoUrl: "/clients/Bachis.png" },
    { id: 7, name: "Millionaires", logoUrl: "/clients/Millionaires.png" },
  ];

  // Speeds (edit these)
  const NORMAL_SPEED = 20; // seconds
  const SLOW_SPEED = 50; // seconds

  // Start normal speed on mount
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: NORMAL_SPEED,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, []);

  const setSpeed = (duration) => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <div
      className="relative overflow-hidden"
      // Desktop slow down
      onMouseEnter={() => setSpeed(SLOW_SPEED)}
      onMouseLeave={() => setSpeed(NORMAL_SPEED)}
      // Mobile slow down
      onTouchStart={() => setSpeed(SLOW_SPEED)}
      onTouchEnd={() => setSpeed(NORMAL_SPEED)}
    >
      <motion.div className="flex gap-3 lg:gap-10" animate={controls}>
        {/* First set of logos */}
        {clients.map((logo, idx) => (
          <div
            key={`first-${idx}`}
            className="flex items-center justify-center min-w-[150px]"
          >
            <img
              src={logo.logoUrl}
              alt={logo.name}
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {clients.map((logo, idx) => (
          <div
            key={`second-${idx}`}
            className="flex items-center justify-center min-w-[150px]"
          >
            <img
              src={logo.logoUrl}
              alt={logo.name}
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}