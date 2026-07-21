import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutHero from "./components/about/AboutHero";
import AboutIntro from "./components/about/AboutIntro";
import AboutFounder from "./components/about/AboutFounder";
import AboutCrew from "./components/about/AboutCrew";
import AboutFaq from "./components/about/AboutFaq";
import Contact from "./components/Contact";
import AcademySection from "./components/home/AcademySection";
import InstaFeedSection from "./components/common/InstaFeedSection";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="mt-20 bg-brand-bg text-brand-primary md:mt-36">
        <AboutHero />
        <AboutIntro />
        <AboutFounder />
        <AboutCrew />
        <AcademySection />
        <AboutFaq />
        <InstaFeedSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
