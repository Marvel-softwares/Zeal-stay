import Navbar from "./navbar";
import CalendlyLink from "./calendlyLink";
import AnimatedInput from "./animatedInput";
import TrustedHostsTicker from "./hostTicker";
// import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";

// const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
//   pointer-events: none;
//   opacity: 0.05;
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   height: 16rem;
//   width: 16rem;
//   transform: translateX(-66.6667%);
//   z-index: -10;
// `;

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#02070f] via-[#131b2d] to-[#28284b]">
      <div className="pt-4 w-11/12 lg:w-10/12 mx-auto min-h-screen">
        <Navbar roundedHeaderButton={true} />
        <div className="relative">
          <div className="flex  flex-col-reverse lg:flex-row lg:items-center  pb-10 md:pt-16 md:pb-20 text-white">
            <div className="relative lg:w-5/12  max-w-lg mx-auto lg:max-w-none text-left">
              <h1 className="text-center lg:text-start font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight my-6 lg:my-0">
                The
                <span className="text-sec-text"> Smarter</span> way to <br />{" "}
                Get
                <span className="text-sec-text"> Bookings</span>
              </h1>
              <p className="my-4 lg:my-8 hidden lg:block text-base xl:text-lg font-semibold">
                No Hidden Costs. No Setup Cost. We sell Growth
              </p>

              <AnimatedInput />
              {/* <div className="mt-12 lg:mt-24">
                <p className="uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500">
                  Our TRUSTED HOSTS
                </p>
                <TrustedHostsTicker />
              </div> */}
            </div>
            <div className="relative mt-8 lg:mt-0 flex-1 flex flex-col justify-center lg:self-start">
              <div className="flex justify-center lg:justify-end items-center h-96">
                <iframe
                  class=" w-full h-full"
                  src="https://www.youtube.com/embed/u-OFNaL2hoc?si=91vQ9XBOtyW2J5FY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          {/* <DecoratorBlob1 /> */}
        </div>
      </div>
    </div>
  );
}
