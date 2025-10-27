"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Add framer-motion for smooth animation
import CalendlyLink from "./calendlyLink";
import Link from "next/link";

const RotatingTextInput = () => {
  const texts = [
    "Build your Property Brand",
    "Skyrocket Direct Bookings",
    "Save on OTA commissions",
    "Increases Occupancy",
    "Build Guest Loyalty",
    "Property Automation",
    "Kill Double Bookings",
    "Multiply Profits",
    "Reduce Dependency on OTAs",
    "Lifetime Free Channel Manager",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative  max-w-md text-white">
      <div className="relative text-center mx-auto lg:mx-0 py-[28px] lg:py-8 border-2 rounded-full">
        <div className="sm:pr-48 pl-8   w-full font-medium focus:outline-none transition duration-300  hover:border-gray-500 text-left flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute"
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <Link href={"/schedule-call"}>
        <button className="w-full sm:absolute right-0 top-0 bottom-0 animate-border bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] text-gray-100 font-bold mr-2 my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none text-lg">
            Chat Now &#8599;
        </button>
      </Link>
    </div>
  );
};

export default RotatingTextInput;

// className="sm:pr-48 pl-8 py-3 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-sec-text hover:border-gray-500"
