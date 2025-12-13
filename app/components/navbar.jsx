"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
// import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import Image from "next/image.js";
import Link from "next/link";

const Header = ({ logoLink, links, className }) => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavbar = () => {
    setShowNavLinks(!showNavLinks);
  };

  const defaultLinks = [
    <div
      key={1}
      className="flex flex-col lg:flex-row items-center text-black lg:text-white"
    >
      <Link
        href="/#testimonials"
        className="text-lg my-2 lg:text-base lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-sec-text hover:text-sec-text focus:text-sec-text"
      >
        Testimonials
      </Link>
      {/* <Link
        href="/ad-tutorial"
        className="text-lg my-2 lg:text-base lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-sec-text hover:text-sec-text focus:text-sec-text"
      >
        Ad Tutorial
      </Link> */}
      <Link
        href="/#services"
        className="text-lg my-2 lg:text-base lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-sec-text hover:text-sec-text focus:text-sec-text"
      >
        Services
      </Link>
      <Link
        href="/#steps"
        className="text-lg my-2 lg:text-base lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-sec-text hover:text-sec-text focus:text-sec-text"
      >
        Steps
      </Link>
      <Link
        href="/#faqs"
        className="text-lg my-2 lg:text-base lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-sec-text hover:text-sec-text focus:text-sec-text"
      >
        FAQs
      </Link>

      <Link href="/schedule-call">
        <button className="flex items-center gap-3 text-lg my-2 lg:text-base lg:mx-0 px-4 py-3 bg-[#242424] text-gray-100 hover:bg-sec-text/90 hover:text-gray-200 border-b-0 rounded-full font-semibold">
          Get Your Custom Strategy
          <span className="flex items-center justify-center w-6 h-6 bg-sec-text rounded-full transition-transform duration-300 group-hover:translate-x-1">
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </Link>
    </div>,
  ];

  const defaultLogoLink = (
    <a
      href="/"
      className="flex items-end  font-black border-b-0 text-2xl ml-0 "
    >
      <Image
        src={"/logo3.svg"}
        quality={100}
        width={350}
        height={350}
        alt="logo"
        className="w-56 lg:w-96 "
      />
    </a>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <header
      className={`flex justify-between items-center max-w-screen-xl mx-auto header-light  py-4 lg:py-2 border-b border-b-gray-900 lg:border-b-0`}
    >
      <nav className="hidden lg:flex flex-1 justify-between items-center">
        {logoLink}
        {links}
      </nav>

      <div className="flex flex-1 items-center justify-between lg:hidden px-2">
        {logoLink}
        <motion.nav
          initial={{ x: "150%", display: "none" }}
          animate={
            showNavLinks
              ? { x: 0, display: "block" }
              : { x: "150%", display: "none" }
          }
          className="fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg  bg-white z-10"
        >
          <div className="">{links}</div>
        </motion.nav>
        <button
          onClick={toggleNavbar}
          className={`lg:hidden  z-20 focus:outline-none text-sec-text transition duration-300 ${
            showNavLinks ? "open" : "closed"
          }`}
        >
          {showNavLinks ? (
            <Image
              width={24}
              height={24}
              src={"/images/closeMenu.svg"}
              alt="closeMenu"
              className="fixed right-[25px]"
            />
          ) : (
            <Image
              width={24}
              height={24}
              src={"/images/navMenu.svg"}
              alt="openMenu"
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
