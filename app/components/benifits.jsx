"use client";

import Image from "next/image";
import Link from "next/link";

// import { Calendar, TrendingUp, ThumbsUp } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      // icon: <Calendar className="w-12 h-12 text-yellow-400" />,
      title: "More bookings",
      description:
        "Marketing leads to higher occupancy rates as well as more direct bookings which grow your business and reduce OTA dependency.",
      src: "/features/api.svg",
    },

    {
      // icon: <TrendingUp className="w-12 h-12 text-yellow-400" />,
      title: "Business Growth",
      description:
        "Increase the value of your business by building assets like social media followers, email lists & brand power.",
      src: "/features/directbookings.svg",
    },
    {
      // icon: <ThumbsUp className="w-12 h-12 text-yellow-400" />,
      title: "Better Guests",
      description:
        "It's been proven that branded marketing results in better quality guests who pay higher rates and are more appreciative.",
      src: "/images/services/crown.svg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black ">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400/20">
            Benefits
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Why Work with Us?
        </h2>

        {/* Subheading */}
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          The brand growth, business assets and equity value gained for your
          business in the process is just a bonus.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#242424] backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                {" "}
                <Image
                  src={benefit.src}
                  height={32}
                  width={32}
                  alt={benefit.title}
                  className="w-8 8-10"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-3 lg:mt-5">
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
        </div>
      </div>
    </section>
  );
}
