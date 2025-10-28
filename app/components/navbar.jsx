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
      className="flex flex-col items-center lg:inline-block text-white"
    >
      <Link
        href="/#testimonials"
        className="text-lg my-2 lg:text-base lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-sec-text hover:text-sec-text focus:text-sec-text"
      >
        Testimonials
      </Link>
      <Link
        href="/ad-tutorial"
        className="text-lg my-2 lg:text-base lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-sec-text hover:text-sec-text focus:text-sec-text"
      >
        Ad Tutorial
      </Link>
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

      <Link href={"/schedule-call"}>
        {" "}
        <button
          className={`text-lg my-2 lg:text-base lg:mx-0 px-8 py-3  bg-sec-text text-gray-100 hover:bg-sec-text/[0.9]  hover:text-gray-200 focus:shadow-outline border-b-0 rounded-full font-semibold`}
        >
          Schedule a Call
        </button>
      </Link>
    </div>,
  ];

  const defaultLogoLink = (
    <a
      href="/"
      className="flex items-end  font-black border-b-0 text-2xl ml-0 text-white"
    >
      <Image
        src={"/logo.png"}
        quality={100}
        width={50}
        height={50}
        alt="logo"
        className="w-10 "
      />
      eal Stay
    </a>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <header
      className={`flex justify-between items-center max-w-screen-xl mx-auto ${
        className || "header-light"
      } `}
    >
      <nav className="hidden lg:flex flex-1 justify-between items-center">
        {logoLink}
        {links}
      </nav>

      <div className="flex flex-1 items-center justify-between lg:hidden">
        {logoLink}
        <motion.nav
          initial={{ x: "150%", display: "none" }}
          animate={
            showNavLinks
              ? { x: 0, display: "block" }
              : { x: "150%", display: "none" }
          }
          className="fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white z-10"
        >
          <div className="">{links}</div>
        </motion.nav>
        <button
          onClick={toggleNavbar}
          className={`lg:hidden  z-20 focus:outline-none hover:text-sec-text transition duration-300 ${
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
