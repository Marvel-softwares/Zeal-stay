// import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const steps = [
  {
    heading: "Schedule a Call",
    description: `We will have a detailed call to tailor our winning strategy with your brand.`,
  },
  {
    heading: "Onboarding",
    description:
      "Smoothly integrate into our system where we set up everything needed before launching.",
  },
  {
    heading: "Launch",
    description:
      "Approve ads and launch campaigns within 14 days of our strategy call.",
  },
];

export default function Steps() {
  return (
    <div className="bg-black">
      <div className="relative  w-11/12 lg:w-10/12 mx-auto py-12 ">
        <div
          id="steps"
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="hidden lg:block w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-6/12 flex-shrink-0 relative">
            <img
              src={"/images/illustrations/steps-illustration.svg"}
              className="rounded"
              alt="Team Illustration"
            />
            {/* <SvgDotPattern className="w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-sec-text -z-10" /> */}
          </div>
          <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-6/12  md:ml-12 lg:ml-16 md:order-last">
            <div className="lg:py-8 text-center md:text-left">
              <h4 className="text-center md:text-left font-bold text-sec-text">
                How does it work?
              </h4>
              <div className="mt-4 font-black  text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight `text-4xl   tracking-wide ">
                The
                <span className="text-sec-text"> Integral </span>Process
              </div>
              <h4 className="text-center md:text-left mt-4">
                From initial contact to final launch, our approach is designed
                for speed and results. Here’s how we work with you every step of
                the way.
              </h4>
              <ul className="mt-12">
                {steps.map((step, index) => (
                  <li
                    key={index}
                    className="mt-8 flex flex-col md:flex-row items-center md:items-start"
                  >
                    <div className="font-semibold text-4xl leading-none text-gray-400">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="mt-3 md:mt-0 md:ml-6">
                      <h6 className="leading-none text-xl font-semibold">
                        {step.heading}
                      </h6>
                      <p className="mt-3 max-w-xs lg:max-w-sm leading-loose text-sm text-gray-600 font-medium">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
