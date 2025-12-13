import React from "react";
// import logo from "../../images/logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 ">
      <div className="max-w-screen-xl mx-auto py-20 ">
        <div className="flex items-center justify-center flex-col px-8">
          <div className="flex items-center justify-center md:justify-start">
            <a
              href="/"
              className="flex items-end  font-black border-b-0 text-2xl ml-0 text-white"
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
          </div>

          <div className="mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row">
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-300 focus:text-gray-300 hover:border-gray-300 focus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4"
            >
              Home
            </a>

            <a
              href="/#services"
              className="border-b-2 border-transparent hover:text-gray-300 focus:text-gray-300 hover:border-gray-300 focus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4"
            >
              Services
            </a>
            <a
              href="/#testimonials"
              className="border-b-2 border-transparent hover:text-gray-300 focus:text-gray-300 hover:border-gray-300 focus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4"
            >
              Testimonials
            </a>
            <a
              href="/privacy"
              className="border-b-2 border-transparent hover:text-gray-300 focus:text-gray-300 hover:border-gray-300 focus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent hover:text-gray-300 focus:text-gray-300 hover:border-gray-300 focus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row">
            <a
              href="mailto:zealmedia07@gmail.com"
              className="cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4"
            >
              Email: info@stayadvertising.com
            </a>
          </div>

          <div className="mt-10">
            <a
              href="https://www.facebook.com/p/Zeal-Stay-100094757943639/"
              className="cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4"
            >
              <Image
                width={18}
                height={18}
                alt="facebook"
                src={"/socialMedia/facebook.svg"}
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/zealstay/"
              className="cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4"
            >
              <Image
                width={18}
                height={18}
                alt="facebook"
                src={"/socialMedia/instagram.svg"}
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://wa.me/9168986282?text=Hi,%0AI%20am%20interested%20in%20your%20services.%0AI%20would%20like%20to%20know%20more%20about:%20________."
              className="cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4"
            >
              <Image
                width={18}
                height={18}
                alt="facebook"
                src={"/socialMedia/whatsapp.svg"}
                className="w-6 h-6"
              />
            </a>
          </div>

          <p className="text-center mt-10 font-medium tracking-wide text-sm text-gray-600">
            &copy; 2025 Stay Advertising. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
