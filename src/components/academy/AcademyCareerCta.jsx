import FadeUpInView from "../common/FadeUpInView";
import { publicAssetUrl } from "../../config/assets";

const bgImg = publicAssetUrl("academy-career-bg.png");

export default function AcademyCareerCta() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 lg:h-[720px] flex items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />

      <div className="container relative px-6 mx-auto text-center text-white">
        <FadeUpInView as="h2" delay={0.08} className="mb-5 font-secondary text-[26px] md:text-[34px] lg:text-[56px] leading-tight tracking-[0.08em] uppercase">
          Ready to start your
          <br />
          makeup career?
        </FadeUpInView>
        <FadeUpInView as="p" delay={0.16} className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed md:text-base font-primary">
          Join our next batch and learn from Bengaluru's most trusted makeup educator
        </FadeUpInView>
        <FadeUpInView variant="button" delay={0.24}>
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-xs uppercase bg-white rounded-sm text-brand-primary font-primary hover:bg-brand-light"
          >
            Let&apos;s get started
          </a>
        </FadeUpInView>
      </div>
    </section>
  );
}
