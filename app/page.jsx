import Banner from "./components/banner";
import Services from "./components/services";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import FAQS from "./components/faqs";
import Benefits from "./components/benifits";
import OurWork from "./components/ourWork";

export default function Home() {
  return (
    <div className="text-white">
      <Banner />
      <Services />
      {/* <FloatingBookCall> */}
      <Testimonials />
      <Benefits />
      <OurWork/>
      <FAQS />
      {/* </FloatingBookCall> */}
      <Footer />
    </div>
  );
}
