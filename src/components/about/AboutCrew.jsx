import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";
import { publicAssetUrl, srcAssetUrl } from "../../config/assets";

const bgTexture6 = srcAssetUrl("bg-texture-6.png");

const CREW_MEMBERS = [
  "AUDREY",
  "ESTHER",
  "LILLY",
  "CLAIRE",
  "DARLENE",
  "COURTNEY",
];

export default function AboutCrew() {
  return (
    <section className="relative pb-10 md:py-16 lg:py-24 bg-[#fff7f3]">
      <div
        className="hidden absolute inset-0 -left-5 -top-6 z-40 opacity-90 pointer-events-none md:left-0 md:top-0 md:block"
        style={{
          backgroundImage: `url(${bgTexture6})`,
          backgroundSize: "auto",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="container px-5 mx-auto lg:px-12">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-lg text-center">
          <FadeUpInView
            as="h2"
            variant="text"
            scrub={true}
            delay={0.1}
            className="mb-4 font-secondary text-[28px] md:text-[32px] lg:text-[42px] leading-tight tracking-[2%] text-brand-primary uppercase"
          >
            MEET CHISELLE CREW
          </FadeUpInView>
          <FadeUpInView
            as="p"
            variant="text"
            scrub={true}
            delay={0.18}
            className="text-base font-light leading-relaxed text-brand-secondary font-primary"
          >
            Perfect for brides who want a stunning, long-lasting look on their
            most special day, this is about more than just beauty—it&apos;s
            about feeling confident, cared for, and completely yourself.
          </FadeUpInView>
        </div>

        <ScrubStagger
          variant="card"
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {CREW_MEMBERS.map((name, index) => {
            const imgIndex = index % 3;
            const src =
              imgIndex === 0
                ? publicAssetUrl("about-crew-audrey.png")
                : imgIndex === 1
                  ? publicAssetUrl("about-crew-esther.png")
                  : publicAssetUrl("about-crew-lily.png");
            return (
              <div
                key={name}
                data-scrub-item
                className="bg-white rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                <div className="overflow-hidden relative p-4 w-full">
                  <img
                    src={src}
                    alt={name}
                    className="block object-cover w-full h-auto"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="mb-3 font-secondary text-[28px] md:text-[32px] leading-snug tracking-[2%] text-brand-primary uppercase">
                    {name}
                  </h3>
                  <p className="text-base font-light leading-relaxed text-brand-secondary font-primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
              </div>
            );
          })}
        </ScrubStagger>
      </div>
    </section>
  );
}
