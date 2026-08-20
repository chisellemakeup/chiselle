import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { HomeBootProvider } from "./components/home/HomePageBoot";
import Hero from "./components/home/Hero";
import MarqueeBanner from "./components/home/MarqueeBanner";
import About from "./components/home/About";
import VideoSection from "./components/home/VideoSection";
import { WhyUs, SignatureStyle, HowWeWork } from "./components/home/Features";
import Services from "./components/home/Services";
import Gallery from "./components/home/Gallery";
import AcademySection from "./components/home/AcademySection";
import Testimonials from "./components/home/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InstaFeedSection from "./components/common/InstaFeedSection";

export default function App() {
  useEffect(() => {
  document.title = "Chiselle – Luxury Bridal Makeup & Hair";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute(
    "content",
    "Chiselle – Luxury Bridal Makeup & Hair. Personalised bridal services crafted with experience, intention, and meticulous attention to detail. Based in Chennai, Coimbatore. Available worldwide."
  );
}, []);
  return (
    <HomeBootProvider>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <WhyUs />
        <SignatureStyle />
        <HowWeWork />
        <Services />
        <Gallery
          sectionLabel="THE CHISELLE TOUCH"
          sectionTitle="LOOKS THAT SPEAK FOR THEMSELVES"
        />
        <AcademySection />
        <Testimonials />
        <InstaFeedSection />
        <Contact />
      </main>
      <Footer />
    </HomeBootProvider>
  );
}
