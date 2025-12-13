"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";

export default function ContentPreviewSection() {
  const sliderRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const content = [
    {
      id: 1,
      type: "video",
      src: "/ourWork/1.mp4",
      thumbnail: "/ourWork/1.jpg",
      caption: "Bedroom Paradise",
    },
    {
      id: 2,
      type: "video",
      src: "/ourWork/2.mp4",
      thumbnail: "/ourWork/2.jpg",
      caption: "Modern Bathroom",
    },
    {
      id: 3,
      type: "video",
      src: "/ourWork/3.mp4",
      thumbnail: "/ourWork/3.jpg",
      caption: "Cozy Living Space",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    responsive: [
     
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="h-full bg-black flex items-center justify-center py-16 px-4">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400/20 mb-6">
            Showcasing the Experiences
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Content Preview
          </h2>
          <p className="text-gray-400 text-lg">
            In collaboration with talented content creators & hidden gem stays!
          </p>
        </div>

        {/* Slider Container */}
        <div className="w-10/12 mx-auto relative px-12">
          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {content.map((item) => (
              <div key={item.id} className="px-2">
                <div className="cursor-pointer rounded-2xl overflow-hidden mx-auto" style={{ width: '70%' }}>
                  <ReactPlayer
                    controls={true}
                    width="100%"
                    height="100%"
                    url={"/ourWork/1.mp4"}
                    style={{ borderRadius: '1rem' }}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .slick-slider {
          position: relative;
        }
        
        .slick-slide > div {
          display: flex;
          justify-content: center;
        }
        
        .slick-slide > div > div {
          width: 100%;
        }
      `}</style>
    </div>
  );
}