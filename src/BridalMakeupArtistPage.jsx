import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceHeroSection from "./components/services/ServiceHeroSection";
import {
  SERVICE_PAGE_HERO_DATA,
  SERVICE_PAGE_WHY_US_DATA,
  SERVICE_FAQ_DATA,
  SERVICE_PAGE_ABOUT_INTRO_DATA,
  SERVICE_PAGE_ABOUT_INTRO_DATA2,
  SERVICE_PAGE_ACADEMY_DATA,
} from "./data/content";
import ServiceAboutSection from "./components/services/ServiceAboutSection";
import {
  WhyUs,
  SignatureStyle,
  HowWeWork,
} from "./components/services/ServiceFeaturesSection";
import Services from "./components/home/Services";
import Gallery from "./components/home/Gallery";
import ServiceFAQAccordion from "./components/services/ServiceFAQAccodion";
import ServicePageIntroSection from "./components/services/ServicePageIntroSection";
import ServicePageIntroSection2 from "./components/services/ServicePageIntroSection2";
import Testimonials from "./components/home/Testimonials";
import InstaFeedSection from "./components/common/InstaFeedSection";
import Contact from "./components/Contact";
import ServicePageAcademy from "./components/services/ServicePageAcademy";

export default function BridalMakeupArtistPage() {
  useEffect(() => {
    // Replace existing title
    document.title = "Professional Bridal Makeup Artist in Tamil Nadu";

    // Replace existing description
    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Looking for a bridal makeup artist in Tamil Nadu? Explore professional bridal makeup and hair services with natural, personalised looks created for your wedding day.",
      );
    }

    // Replace existing canonical
    const canonical = document.querySelector('link[rel="canonical"]');

    if (canonical) {
      canonical.setAttribute(
        "href",
        "https://chisellemakeupandhair.com/bridal-makeup-artist-in-tamil-nadu",
      );
    }
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <ServiceHeroSection content={SERVICE_PAGE_HERO_DATA[0]} />
        <ServiceAboutSection />
        <WhyUs content={SERVICE_PAGE_WHY_US_DATA} />
        <ServicePageIntroSection2 content={SERVICE_PAGE_ABOUT_INTRO_DATA2} />
        <Services />
        <SignatureStyle />
        <HowWeWork />
        <Gallery
          sectionLabel="THE CHISELLE TOUCH"
          sectionTitle="LOOKS THAT SPEAK FOR THEMSELVES"
        />
        <ServicePageIntroSection content={SERVICE_PAGE_ABOUT_INTRO_DATA} />
        <Testimonials />
        <ServiceFAQAccordion
          title={SERVICE_FAQ_DATA.title}
          faq={SERVICE_FAQ_DATA.items}
        />
        <InstaFeedSection />
        <Contact />
        <ServicePageAcademy content={SERVICE_PAGE_ACADEMY_DATA} />
      </main>
      <Footer />
    </>
  );
}
