import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AcademyHero from "./components/academy/AcademyHero";
import AcademyDifferentSection from "./components/academy/AcademyDifferentSection";
import AcademyCoursesSection from "./components/academy/AcademyCoursesSection";
import Gallery from "./components/home/Gallery";
import AboutFaq from "./components/about/AboutFaq";
import AcademyCareerCta from "./components/academy/AcademyCareerCta";
import InstaFeedSection from "./components/common/InstaFeedSection";

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main className="mt-20 md:mt-36 bg-brand-bg text-brand-primary">
        <AcademyHero />
        <AcademyDifferentSection />
        <AcademyCoursesSection />
        <Gallery
          sectionTitle="OUR STUDENTS' WORK"
          sectionDescription="Hear from our students whose dreams we have nurtured into flourishing careers as successful Makeup artists."
          ctaLabel="VIEW GALLERY"
          hideSectionLabel
        />
        <AboutFaq />
        <AcademyCareerCta />
      </main>
      <Footer />
    </>
  );
}
