import Navbar from "./navbar";
import TrustedHostsTicker from "./hostTicker";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-black">
      <Navbar roundedHeaderButton={true} />
      <div className="pt-4">
        <div className="relative w-11/12 lg:w-10/12 mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center pb-6 md:pt-16 md:pb-12 text-white">
            {/* Left Content */}
            <div className="relative lg:w-6/12 max-w-lg mx-auto lg:max-w-none text-center lg:text-left">
              <span className="inline-block w-fit text-sec-text bg-[#242424] rounded-full px-4 py-2 mb-4 lg:mb-8 text-sm lg:text-base xl:text-lg font-semibold">
                PREMIUM VACATION RENTAL OWNERS
              </span>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight my-3 lg:my-6">
                The
                <span className="text-sec-text"> Smarter</span> way to <br />
                Get
                <span className="text-sec-text"> Bookings</span>
              </h1>
              <p className="text-gray-600 my-4 lg:my-8 text-sm lg:text-base xl:text-lg font-semibold">
                Predictable inquiries from qualified guests ready to book your
                luxury property.
              </p>

              {/* Video - Shows on mobile only, below the text */}
              <div className="lg:hidden relative mt-8 mb-6 w-full">
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1145513505?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    title="Introduction to Zeal Stay"
                  ></iframe>
                </div>
              </div>

              <Link href={"/schedule-call"}>
                <div className="flex justify-center lg:justify-start">
                  <button className="group relative flex items-center gap-4 bg-[#383838] text-white font-semibold text-base lg:text-lg px-4 py-2 lg:py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                    <span>Get Your Custom Strategy</span>
                    <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-sec-text rounded-full transition-transform duration-300 group-hover:translate-x-1">
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800"
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
                    </div>
                  </button>
                </div>
              </Link>
            </div>

            {/* Right Video - Shows on desktop only */}
            <div className="hidden lg:flex relative mt-8 lg:mt-0 flex-1 flex-col justify-center lg:self-start w-full">
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://player.vimeo.com/video/1145513505?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  title="Introduction to Zeal Stay"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Trusted Hosts */}
          <div className="mt-6 lg:mt-0">
            <p className="text-center uppercase text-xs tracking-wider font-bold text-gray-500 mb-2">
              Our TRUSTED HOSTS
            </p>
            <TrustedHostsTicker />
          </div>
        </div>
      </div>
    </div>
  );
}