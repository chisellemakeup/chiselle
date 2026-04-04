import { srcAssetUrl } from "../../config/assets";
import FadeUpInView from "../common/FadeUpInView";

const academyBg = srcAssetUrl("home/chiselle-academy-bg-img.png");
const bgTexture = srcAssetUrl("bg-texture-5.svg");

export default function AcademySection() {
  return (
    <section className="overflow-hidden relative py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={academyBg}
          alt="Chiselle Academy bridal makeup training in action"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-brand-secondary/70" /> */}

      <div className="container relative mx-auto max-w-4xl text-center text-white">
        <FadeUpInView as="p" scrub={true} delay={0.02} className="mb-5 text-xs md:text-sm text-white uppercase font-primary">
          CHISELLE ACADEMY
        </FadeUpInView>
        <FadeUpInView as="h2" scrub={true} delay={0.1} className="mb-6 font-secondary text-[2.1rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-white uppercase">
          WE DON&apos;T JUST TEACH MAKEUP.
          <br className="hidden md:block" />
          WE TEACH THE REAL DEAL.
        </FadeUpInView>
        <FadeUpInView as="p" scrub={true} delay={0.18} className="mb-10 text-base font-light leading-relaxed text-white font-primary">
          At Chiselle Academy, you learn premium, timeless bridal beauty the
          practical way. Strong basics, advanced techniques, real industry
          insights, and mentorship that has your back. If you want skills that
          translate from class to client, you&apos;re in the right place.
        </FadeUpInView>

        <FadeUpInView as="div" scrub={true} className="text-center" variant="button" delay={0.24}>
          <a
            href="#contact"
            className="bg-white btn-primary text-brand-primary hover:bg-brand-light"
          >
            LET’S GET STARTED
          </a>
        </FadeUpInView>
      </div>
    </section>
  );
}
