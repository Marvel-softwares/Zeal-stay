"use client";
import Script from "next/script";
// import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import { ReactComponent as SvgDotPattern } from "";

export default function ScheduleCall() {
  return (
    <div id="scheduleCall" className="relative">
      <div className="flex flex-col md:flex-row justify-end w-11/12 lg:w-10/12 mx-auto items-center py-5 lg:py-10">
        <div className=" mx-auto  md:w-7/12 flex-shrink-0 relative order-last">
          <div
            className="calendly-inline-widget  w-full h-[535px] lg:h-[600px]"
            data-url="https://calendly.com/kazi-marvelsoftwares?hide_gdpr_banner=1&primary_color=496316"
          ></div>
          {/* <SvgDotPattern className="w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-sec-text -z-10" /> */}
        </div>
        <div className=" mx-auto   md:w-5/12   md:order-first self-center">
          <div className="lg:py-8 text-center md:text-left">
            <h4 className="font-bold text-sec-text text-center md:text-left">
              Schedule a Call
            </h4>
            <div className="mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl  md:text-left leading-tight">
              Lets build your
              <span className="text-sec-text"> Property Brand.</span>
            </div>
            <p className="hidden lg:block mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">
              Schedule a one-on-one call with us to discuss how we can elevate
              your Property Brand & Profits.
            </p>
            {/* <button className="mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0 rounded-full px-8 py-3 font-bold  bg-sec-text text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      {/* <Script
        src="https://assets.calendly.com/assets/external/widget.css"
        strategy="beforeInteractive"
      /> */}
    </div>
  );
}
