import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GalleryTabs from "./components/GalleryTabs";
import InstaFeedSection from "./components/common/InstaFeedSection";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="mt-20 md:mt-36 bg-[#FFF3EE]">
        <GalleryTabs />
      </main>
      <div className="py-16">
      <InstaFeedSection />
      </div>
      <Footer />
    </>
  );
}

