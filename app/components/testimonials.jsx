"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "As a busy professional, I don't have a lot of time to manage my investments, but pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
      author: "Tyronne",
      role: "Neville's Villa",
      video: "/testimonials/Testimonial-1.mp4",
    },
  ];

  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#02070f] to-[#131b2d] flex items-center justify-center py-8 text-white">
      <div className="w-12/12 lg:w-9/12 mx-auto rounded-2xl p-8 lg:p-12 shadow-sm">
        {/* Heading - Visible on mobile, hidden on desktop */}
        <div className="lg:hidden mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Real Success Stories
          </h2>
          <p className="text-gray-500 text-lg mb-4">
            What our clients say about{" "}
            <span className="text-sec-text font-medium">Zeal Stay</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Video */}
          <div className="flex justify-center lg:justify-start w-full lg:w-6/12">
            <div className="relative w-full max-w-md">
              <video
                ref={videoRef}
                src={testimonials[currentSlide].video}
                className="w-full h-[410px] rounded-2xl shadow-2xl object-cover"
                onClick={togglePlay}
              />

              {/* Play/Pause Button Overlay */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <div className={`w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-all duration-300 group-hover:scale-110 border border-white ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                  {isPlaying ? (
                    // Pause icon
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    // Play icon
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="flex flex-col justify-center w-full lg:w-6/12">
            {/* Heading - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Real Success Stories
              </h2>
              <p className="text-gray-500 text-lg mb-8">
                What our clients say about{" "}
                <span className="text-sec-text font-medium">Zeal Stay</span>
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-sec-text transition-colors"
                aria-label="Previous testimonial"
              >
                <Image
                  width={24}
                  height={24}
                  src="/svg/left.svg"
                  className="w-6 h-6"
                  alt="Previous"
                />
              </button>
              <span className="text-gray-600 font-medium">
                {currentSlide + 1} of {totalSlides}
              </span>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-sec-text transition-colors"
                aria-label="Next testimonial"
              >
                <Image
                  width={24}
                  height={24}
                  src="/svg/right.svg"
                  className="w-6 h-6"
                  alt="Next"
                />
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="rounded-2xl shadow-lg">
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Image
                    width={24}
                    height={24}
                    key={i}
                    src="/svg/star.svg"
                    className="w-6 h-6"
                    alt="Star"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                <svg
                  className="w-4 h-4 opacity-75 text-primary-500 inline-block mr-1 -mt-3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                    </g>
                  </g>
                </svg>{" "}
                {testimonials[currentSlide].text}{" "}
                <svg
                  className="w-4 h-4 opacity-75 text-primary-500 inline-block ml-1 -mt-3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                      <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-gray-200 font-semibold text-lg">
                    {testimonials[currentSlide].author}
                  </p>
                  <p className="text-indigo-600 font-medium">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}