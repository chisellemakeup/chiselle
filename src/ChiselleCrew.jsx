import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChiselleCrewHero from "./components/services/ChiselleCrewHero";
import HdAirbrushCrewSection from "./components/services/HdAirbrushCrewSection";
import CrewPackagesSection from "./components/services/CrewPackagesSection";
import AdditionalChargesSection from "./components/services/AdditionalChargesSection";
import GeneralNotesSection from "./components/services/GeneralNotesSection";
import Gallery from "./components/home/Gallery";
import BrandsWeUseSection from "./components/services/BrandsWeUseSection";
import InstaFeedSection from "./components/common/InstaFeedSection";

export default function ChiselleCrew() {
  return (
    <>
      <Navbar />
      <main className="mt-20 bg-brand-bg text-brand-primary md:mt-36">
        <ChiselleCrewHero />
        <HdAirbrushCrewSection />
        <CrewPackagesSection />
        <BrandsWeUseSection />
        <Gallery />
        <AdditionalChargesSection />
        <GeneralNotesSection />
      </main>
      <div className="py-16">
      <InstaFeedSection
        instagramUrl="https://www.instagram.com/chisellecrew/"
        instagramHandle="@chisellecrew"
        communityLabel="+86k community"
      />
      </div>
      <Footer />
    </>
  );
}
