import { TESTIMONIALS } from "../../data/content";
import { srcAssetUrl } from "../../config/assets";
import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";

const bgTexture = srcAssetUrl("bg-texture-2.svg");
const t1 = srcAssetUrl("home/testimonial-img1.png");
const t2 = srcAssetUrl("home/testimonial-img2.png");
const t3 = srcAssetUrl("home/testimonial-img3.png");
const t4 = srcAssetUrl("home/testimonial-img4.png");
const t5 = srcAssetUrl("home/testimonial-img5.png");
const t6 = srcAssetUrl("home/testimonial-img6.png");
const t7 = srcAssetUrl("home/testimonial-img7.png");
const t8 = srcAssetUrl("home/testimonial-img8.png");
const t9 = srcAssetUrl("home/testimonial-img9.png");

const TESTIMONIAL_IMAGES = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden relative py-10 lg:py-32"
    >
      <div className="container relative">
        {/* Heading */}
        <div className="mb-14 text-center">
          <FadeUpInView as="p" delay={0.02} className="mb-5 text-xs md:text-sm uppercase text-brand-secondary font-primary">
            TESTIMONIALS
          </FadeUpInView>
          <FadeUpInView as="h2" delay={0.1} className="md:mb-6 font-secondary text-[28px] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase">
            MY CLIENT&apos;S WORDS
            <br />
            SAY IT BEST.
          </FadeUpInView>
        </div>

        <ScrubStagger
          variant="card"
          className="gap-8 mx-auto space-y-8 columns-1 sm:columns-2 xl:columns-3"
          stagger={0.05}
        >
          {TESTIMONIALS.map((t, index) => {
            const img = TESTIMONIAL_IMAGES[index];
            return (
              <div
                key={t.name}
                data-scrub-item
                className="bg-transparent rounded border-2 p-[2px] border-brand-secondary break-inside-avoid"
                style={{ breakInside: "avoid" }}
              >
                <div className="p-6 border bg-white/85 border-brand-secondary">
                  {img && (
                    <div className="overflow-hidden bg-brand-pinkLight/40">
                      <img
                        src={img}
                        alt={t.name}
                        className="object-cover w-full h-56 rounded-lg"
                      />
                    </div>
                  )}
                  <div className="pt-5 pb-6">
                    <h3 className="mb-3 font-secondary text-base lg:text-xl tracking-[0.02em] text-brand-primary uppercase">
                      {t.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-secondary font-primary">
                      {t.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrubStagger>
      </div>
    </section>
  );
}
