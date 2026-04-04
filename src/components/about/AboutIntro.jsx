import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";

export default function AboutIntro() {
  return (
    <section className="relative py-10 md:py-16 bg-white lg:py-24">
      <div className="container px-5 mx-auto lg:px-12">
        <div className="flex flex-col gap-5 lg:gap-10 lg:flex-row lg:items-start">
          {/* Left heading */}
          <div className="lg:w-[50%]">
            <FadeUpInView
              as="h2"
              variant="text"
              scrub={true}
              className="font-secondary text-[1.6rem] md:text-[2rem] lg:text-[42px] leading-tight tracking-[2%] text-left text-brand-primary uppercase"
            >
              WHAT MAKES US DIFFERENT
            </FadeUpInView>
          </div>

          {/* Right copy */}
          <div className="lg:w-[50%] max-w-2xl">
            <div className="space-y-4 text-base font-light leading-relaxed md:text-lg text-brand-secondary font-primary">
              <FadeUpInView as="p" scrub={true} delay={0.1}>
                In a city full of talented artists, we choose a slightly
                different brushstroke. While many focus on creating a dramatic
                transformation, we focus on recognition. That moment when you
                look in the mirror and think, &ldquo;Yes, that&apos;s me.&rdquo;
              </FadeUpInView>
              <FadeUpInView as="p" scrub={true} delay={0.14}>
                We believe makeup should empower, not overpower. Instead of
                masking features or chasing one &ldquo;ideal&rdquo; bridal look,
                we enhance what already works for your face, your skin, and your
                style. Our skin-first, real-finish approach is designed for long
                ceremonies, Chennai&apos;s warm weather, and most importantly,
                your emotional moments. This ensures your makeup feels
                comfortable, lasts beautifully, and lets your expressions do the
                talking.
              </FadeUpInView>
              <FadeUpInView as="p" scrub={true} delay={0.18}>
                Because standing out doesn&apos;t always mean more makeup.
                Sometimes, it simply means the right amount.
              </FadeUpInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
