import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";

export default function AcademyDifferentSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="container px-5 lg:px-[60px]">
        <FadeUpInView as="h2" className="mb-10 font-secondary text-[28px] lg:text-[42px] leading-tight tracking-[0.08em] text-brand-primary uppercase text-center">
          WHAT MAKES CHISELLE
          <br />
          ACADEMY DIFFERENT
        </FadeUpInView>

        <div className="mx-auto">
          {/* Double border frame */}
          <div className="p-[3px] bg-white border border-[#222222]">
            <div className="bg-white border border-[#222222]">
              <ScrubStagger
                variant="card"
                className="grid grid-cols-1 gap-12 p-8 lg:p-10 md:grid-cols-3 md:gap-10"
                stagger={0.1}
                sequenceOnEnter
                itemDuration={0.4}
                start="top 86%"
              >
                <div data-scrub-item className="text-center ">
                  <h3 className="mb-4 font-secondary text-[22px] lg:!text-[32px] tracking-[0.02em] text-brand-primary uppercase">
                    REAL WORK. REAL WISDOM
                  </h3>
                  <p className="text-sm leading-relaxed font-primary text-brand-secondary md:px-6">
                    Learn directly from Nowshiba&apos;s decade-long hands-on experience with real brides, real skin, and real pressure.
                    No trend-chasing. No shortcuts. Just what actually works.
                  </p>
                </div>

                <div
                  data-scrub-item
                  className="text-center border-brand-secondary/40"
                >
                  <h3 className="mb-4 font-secondary text-[22px] lg:!text-[32px] tracking-[0.02em] text-brand-primary uppercase">
                    BASICS BEFORE BRILLIANCE.
                  </h3>
                  <p className="text-sm leading-relaxed font-primary text-brand-secondary md:px-6">
                    We get the foundation right first. Skin prep, products,
                    blending, longevity, then, advanced artistry. Because great
                    makeup starts long before the final look.
                  </p>
                </div>

                <div
                  data-scrub-item
                  className="text-center border-brand-secondary/40"
                >
                  <h3 className="mb-4 font-secondary text-[22px] lg:!text-[32px] tracking-[0.02em] text-brand-primary uppercase">
                    BEYOND THE BRUSH.
                  </h3>
                  <p className="text-sm leading-relaxed font-primary text-brand-secondary md:px-6">
                    From pricing and clients to timelines, hygiene, and
                    on-ground etiquette, you learn how the industry truly runs.
                    Plus mentorship that guides you, corrects you, and helps you
                    grow.
                  </p>
                </div>
              </ScrubStagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
