import About from "./components/about";
import Banner from "./components/banner";
import Contact from "./components/contact-us";
import Services from "./components/services";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import FAQS from "./components/faqs";
import Steps from "./components/steps";
import FloatingBookCall from "./components/floatingBookCall";

export default function Home() {
  return (
    <div className="text-white">
      <Banner />
      <FloatingBookCall>
        <Services />
         <Testimonials />
        <Steps />
        <FAQS />
      </FloatingBookCall>
      <Footer />
    </div>
  );
}
