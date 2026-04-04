import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPageSection from "./components/contact/ContactPageSection";
import InstaFeedSection from "./components/common/InstaFeedSection";
import FadeUpInView from "./components/common/FadeUpInView";

import { publicAssetUrl } from "./config/assets";

const contactBannerImg = publicAssetUrl("contact-banner-img.png");

function ContactHero() {
  return (
    <section className="flex relative justify-center items-center text-white py-40">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${contactBannerImg})` }}
      />

      <div className="container relative px-6 mx-auto max-w-3xl text-center">
        <h1 className="mb-5 font-script text-[26px] md:text-[34px] lg:text-[42px] leading-tight tracking-[0.02em]">
          <FadeUpInView as="span" playOnMount delay={0} className="block">
            This is where your bridal
          </FadeUpInView>
          <FadeUpInView as="span" playOnMount delay={0.14} className="mt-1 block">
            journey with Chiselle begins
          </FadeUpInView>
        </h1>
        <FadeUpInView
          as="p"
          playOnMount
          delay={0.24}
          className="text-sm leading-relaxed md:text-base font-primary"
        >
          If you&apos;re looking for natural, thoughtful bridal makeup that feels
          like you, you&apos;re in the right place. Share your details in the form
          below and we&apos;ll take it from there.
        </FadeUpInView>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mt-20 md:mt-36 bg-brand-bg text-brand-primary">
        <ContactHero />
        <ContactPageSection />
      </main>
      <Footer />
    </>
  );
}
