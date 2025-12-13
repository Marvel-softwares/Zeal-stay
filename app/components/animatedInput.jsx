"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Add framer-motion for smooth animation
import CalendlyLink from "./calendlyLink";
import Link from "next/link";
import Image from "next/image";

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
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative  max-w-80 text-white">
      <div className="relative text-center mx-auto lg:mx-0 py-3 lg:py-5 bg-[#383838] rounded-full">
        <div className="sm:pr-4 pl-8   w-full font-medium focus:outline-none transition duration-300  hover:border-gray-500 text-left flex items-center">
          Get Your Custom Strategy
        </div>
      </div>
      <Link href={"/schedule-call"}>
        <button className="w-full sm:absolute right-0 top-0 bottom-0 bg-sec-text text-gray-100 font-bold mr-2 my-2 rounded-full py-4 flex items-center justify-center sm:w-12  text-lg">
          <Image
            width={24}
            height={24}
            src="/svg/right.svg"
            className="w-6 h-6"
            alt="Next"
          />
        </button>
      </Link>
    </div>
  );
};

export default RotatingTextInput;

// className="sm:pr-48 pl-8 py-3 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 focus:border-sec-text hover:border-gray-500"
