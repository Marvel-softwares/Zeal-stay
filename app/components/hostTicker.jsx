"use client";
import { motion } from 'framer-motion';

const TrustedHostsTicker = () => {
  // Your trusted hosts - add as many as you need
  const hosts = [
    "ZOONDUB",
    "RIVERSIDE RESORT",
    "VILLAZIO",
    "RETROFUSION",
    "APPLE-TREE HOSPITALITY",
    "MAYUR VILLA",
    "BACHI'S NEST",
    "NEVILLES VILLA",
  ];

  // Duplicate the array multiple times for seamless loop
  const duplicatedHosts = [...hosts, ...hosts, ...hosts];

  return (
    <div className="w-full overflow-hidden">
      <div className="w-11/12 lg:max-w-7xl mx-auto px-4">        
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" /> */}
          
          {/* Animated ticker */}
          <motion.div
            className="flex gap-12"
            animate={{
              x: ["0%", "-33.333%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedHosts.map((host, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl md:text-2xl lg:text-3xl font-bold text-gray-600/50 tracking-wider whitespace-nowrap hover:text-slate-500/60 transition-colors duration-300"
              >
                {host}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustedHostsTicker;