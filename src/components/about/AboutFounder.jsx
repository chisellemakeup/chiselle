import { srcAssetUrl } from "../../config/assets";
import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";

const founderImg = srcAssetUrl("nowshiba-pic.png");

export default function AboutFounder() {
  return (
    <section className="relative py-16 lg:pb-16 lg:pt-24 bg-[#fff7f3]">
      <div className="container px-5 mx-auto lg:px-12">
        <div className="flex flex-col-reverse md:flex-col gap-10 lg:flex-row lg:items-start">
          {/* Left copy */}
          <div className="lg:w-[50%] max-w-2xl">
          <FadeUpInView
                as="h2"
                variant="text"
                delay={0.1}
                className="mb-6 font-secondary text-[28px] lg:text-[42px] leading-tight tracking-[2%] text-brand-primary uppercase"
              >
                <ScrubStagger
                  variant="text"
                  stagger={0.1}
                >
              MORE ABOUT NOWSHIBA
                </ScrubStagger>
              </FadeUpInView>

            <div className="space-y-4 text-base font-light leading-relaxed text-brand-secondary font-primary">
              <FadeUpInView
                as="p"
                variant="text"
                delay={0.08}
              >
                <ScrubStagger
                  variant="text"
                  stagger={0.1}
                >
                    My journey did not start at a makeup chair. I trained as an
                    architect, but somewhere along the way, makeup became my
                    favourite way to create. What truly pulled me in was not just
                    the brushes or colours, but that moment when someone looks in
                    the mirror and instantly stands a little taller. Confidence
                    really does that.
                </ScrubStagger>
              </FadeUpInView>
              <FadeUpInView
                as="p"
                variant="text"
                delay={0.08}
              >
                <ScrubStagger
                  variant="text"
                  stagger={0.1}
                >
                What began as a hobby slowly turned into a full-time love.
                Today, I get to make my brides feel like their most confident
                selves on some of the biggest days of their lives. I am deeply
                obsessed with skin, tiny details, and makeup that feels
                comfortable enough to last through long hours, happy tears,
                tight hugs, and emotional moments.
            </ScrubStagger>
          </FadeUpInView>
          <FadeUpInView
                as="p"
                variant="text"
                delay={0.08}
              >
                <ScrubStagger
                  variant="text"
                  stagger={0.1}
                >
                Over the years, I have worked with hundreds of brides across
                industries and cities. Along the way, I became known for a
                natural, timeless style of bridal makeup that is skin-first,
                soft, and never trend-chasing.
            </ScrubStagger>
          </FadeUpInView>
          <FadeUpInView
                as="p"
                variant="text"
                delay={0.08}
              >
                <ScrubStagger
                  variant="text"
                  stagger={0.12}
                >
                That belief became Chiselle – a brand built on trust,
                consistency, and keeping things real. Our brides don&apos;t just
                come once. They come for their engagement, their wedding, and
                sometimes even their child&apos;s first birthday. That still
                amazes me.
            </ScrubStagger>
          </FadeUpInView>
            </div>
          </div>

          {/* Right image + caption: outer fade-up + staggered scrub on image and lines */}
          <FadeUpInView
            as="div"
            variant="card"
            delay={0.08}
            className="flex justify-center w-full lg:w-[50%]"
          >
            <ScrubStagger
              variant="card"
              className="flex w-full max-w-md flex-col"
              stagger={0.1}
            >
              <div
                data-scrub-item
                className="relative w-full overflow-hidden rounded-sm"
              >
                <img
                  src={founderImg}
                  alt="Nowshiba Shajahan – Founder & Senior Pro Artist at Chiselle"
                  className="block aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p
                data-scrub-item
                className="mt-6 text-left text-[1.4rem] md:text-[32px] font-script text-brand-primary"
              >
                Nowshiba Shajahan
              </p>
              <p
                data-scrub-item
                className="mt-1 text-left text-base font-primary text-brand-secondary"
              >
                Founder &amp; Senior Pro Artist, Chiselle
              </p>
            </ScrubStagger>
          </FadeUpInView>
        </div>
      </div>
    </section>
  );
}
