import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FaqTabs from "./components/faq/FaqTabs";
import InstaFeedSection from "./components/common/InstaFeedSection";
import FadeUpInView from "./components/common/FadeUpInView";
import { publicAssetUrl } from "./config/assets";

const faqBannerImg = publicAssetUrl("faq-banner-img.jpg");

function FaqHero() {
  return (
    <section className="flex relative justify-center items-center text-white py-40">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${faqBannerImg})` }}
      />

      <div className="container relative px-6 mx-auto max-w-3xl text-center">
        <h1 className="mb-5 font-script text-[26px] md:text-[34px] lg:text-[42px] leading-tight tracking-[0.02em]">
          <FadeUpInView as="span" playOnMount delay={0} className="block">
          Things brides usually ask us,
          </FadeUpInView>
          <FadeUpInView as="span" playOnMount delay={0.14} className="mt-1 block">
          we’ve answered them here
          </FadeUpInView>
        </h1>
        <FadeUpInView
          as="p"
          playOnMount
          delay={0.24}
          className="text-sm leading-relaxed md:text-base font-primary"
        >
          From booking timelines to trials and wedding-day prep, this page is
          here to make choosing your bridal makeup team feel simpler and more reassuring. Think of it as a gentle guide to how we work, what to expect and how we support you every step of the way. If you still need clarity, we’re just a message away.
        </FadeUpInView>
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="mt-20 md:mt-36 bg-brand-bg text-brand-primary">
        <FaqHero />
        <FaqTabs />
      </main>
      <Footer />
    </>
  );
}
