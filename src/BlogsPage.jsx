import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogsSection from "./components/blogs/BlogsSection";
import InstaFeedSection from "./components/common/InstaFeedSection";

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="mt-20 md:mt-36 bg-brand-bg text-brand-primary">
        <BlogsSection />
      </main>
      <div className="py-16">
      <InstaFeedSection />
      </div>
      <Footer />
    </>
  );
}

