// import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import Image from "next/image";

const cards = [
  // {
  //   imageSrc: "/images/services/crown.svg",
  //   title: "Brand Building & Guest Loyalty",
  //   description:
  //     "Reduce Dependency on OTAs by building strong Host Brand Identity and foster long-term Guest Loyalty.",
  //   url: "https://timerse.com",
  // },
  // {
  //   imageSrc: "/images/services/website.svg",
  //   title: "Direct Booking Website",
  //   description:
  //     "A stunning, feature-rich web app designed to captivate guests, featuring your properties, seamless payment gateway, interactive maps, and much more.",
  //   url: "https://google.com",
  // },
  {
    imageSrc: "/images/services/marketing.svg",
    title: "Direct Booking Ads (Meta-Focused)",
    description:
      "We run professionally managed Facebook & Instagram ads that put your property in front of high-intent travelers — and bring booking-ready inquiries directly to you.",
    url: "https://google.com",
  },
  // {
  //   imageSrc: "/images/services/channelManager.svg",
  //   title: "Channel Manager",
  //   description:
  //     "Say goodbye to double bookings! Connected to 100+ OTAs worldwide, syncing prices & availability across OTAs and your website.",
  //   url: "https://reddit.com",
  // },
  {
    imageSrc: "/images/services/automation.svg",
    title: "Smart CRM & Automation",
    description:
      "Turn inquiries into confirmed bookings — fast. Our CRM system makes sure no enquiry slips through. Track every inquiry, get instant alerts, and follow up with ease — all in one place.",
    url: "https://timerse.com",
  },

  {
    imageSrc: "/images/services/rocket.svg",
    title: "Full-Service Setup & Strategy",
    description:
      "From collecting photos, to running ads, to delivering enquiries— we handle the setup, strategy, and support. All you do is talk to qualified guests.",
    url: "https://reddit.com",
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-r from-[#02070f] to-[#131b2d] ">
      <div className="relative w-11/12 lg:w-10/12 mx-auto py-12 ">
        <h2
          id="services"
          className="text-4xl   sm:text-5xl font-black text-center"
        >
          Amazing Services
        </h2>
        <p className="mt-4 text-sm md:text-base  font-medium leading-relaxed text-secondary-100  text-center">
          Comprehensive Suite of Flexible, Customizable Services and Tools to
          Effortlessly Maximize Your Revenue.
        </p>
        <div className="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center">
          {cards.map((card, i) => (
            <div key={i} className="lg:w-1/3 max-w-xs">
              <div className="flex flex-col items-center text-center h-full mx-4 px-4 py-6 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105">
                <div className="text-center rounded-full p-2 bg-gray-100">
                  <Image
                    src={card.imageSrc}
                    height={32}
                    width={32}
                    alt={card.title}
                    className="w-10 h-10"
                  />
                </div>

                <h4 className="mt-4 font-bold text-xl leading-none">
                  {card.title}
                </h4>
                <p className="mt-4 text-sm font-medium text-secondary-100">
                  {card.description}
                </p>

                {/* <div className="mt-auto inline-flex items-center pt-5 text-sm font-bold text-sec-text leading-none hocus:text-primary-900 transition duration-300">
                  <span>Learn More</span>
                  <svg className="ml-4 w-4" viewBox="0 0 31.49 31.49">
                    <path
                      fill="currentColor"
                      d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        {/* <SvgDecoratorBlob3 className="pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48" /> */}
      </div>
    </div>
  );
}
