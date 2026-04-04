import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MakeupByNowshibaHero from "./components/services/MakeupByNowshibaHero";
import HighDefinitionSection from "./components/services/HighDefinitionSection";
import BrandsWeUseSection from "./components/services/BrandsWeUseSection";
import AdditionalChargesSection from "./components/services/AdditionalChargesSection";
import GeneralNotesSection from "./components/services/GeneralNotesSection";
import InstaFeedSection from "./components/common/InstaFeedSection";

export default function MakeupByNowshiba() {
  return (
    <>
      <Navbar />
      <main className="mt-20 md:mt-36">
        <MakeupByNowshibaHero />
        <HighDefinitionSection />
        <BrandsWeUseSection />
        <AdditionalChargesSection />
        <GeneralNotesSection />
      </main>
      <div className="py-16">
      <InstaFeedSection />
      </div>
      <Footer />
    </>
  );
}
