import { SIGNATURE_STYLES, HOW_WE_WORK , SERVICE_PAGE_WHY_US_DATA} from "../../data/content";
import { srcAssetUrl } from "../../config/assets";
import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";

const bgTexture = srcAssetUrl("bg-texture-1-light.svg");
const bgTexture3 = srcAssetUrl("bg-texture-3.svg");
const signatureImg = srcAssetUrl("signature-bridal-img.jpg");
const bgTexture4 = srcAssetUrl("bg-texture-4.png");
const bgTexture5 = srcAssetUrl("bg-texture-5.png");

export function WhyUs({ content = SERVICE_PAGE_WHY_US_DATA }) {
  return (
    <section className="overflow-hidden relative py-10 lg:py-[60px] bg-brand-primary">
      {/* Background texture */}
      <div
        className="absolute inset-0 left-0 z-40 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "250px",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 right-0 z-40 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url(${bgTexture3})`,
          backgroundSize: "250px",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container flex relative flex-col items-center mx-auto text-center">
        <FadeUpInView
          as="p"
          delay={0.02}
          className="mb-5 text-sm text-white uppercase font-primary"
        >
          {content.label}
        </FadeUpInView>
        <FadeUpInView
          as="h3"
          delay={0.1}
          className="mb-6 font-secondary text-[1.75rem] md:text-[2.2rem] lg:text-[42px] leading-snug tracking-[0.02em] text-white uppercase"
        >
          {content.title.first} <br className="hidden lg:block" />
          {content.title.second}
        </FadeUpInView>
        <FadeUpInView
            key={index}
            as="p"
            delay={0.18 + index * 0.08}
            className="mb-4 text-base md:text-lg font-light leading-relaxed text-white font-primary lg:max-w-[710px]"
          >
            {paragraph}
          </FadeUpInView>
      </div>
    </section>
  );
}

export function SignatureStyle() {
  return (
    <section className="overflow-hidden relative py-10 bg-[#ffe4dd]/20 lg:py-[60px]">
      <div
        className="absolute inset-0 right-0 top-5 z-40 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url(${bgTexture4})`,
          backgroundSize: "auto",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="container relative mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center lg:mb-14">
          <FadeUpInView
            as="p"
            delay={0.02}
            className="mb-5 text-sm uppercase text-brand-secondary font-primary"
          >
            SIGNATURE BRIDAL STYLE
          </FadeUpInView>
          <FadeUpInView
            as="h3"
            delay={0.1}
            className="mb-6 font-secondary text-[1.75rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase"
          >
            WHERE MINIMAL MEETS RADIANT
          </FadeUpInView>
        </div>

        <ScrubStagger
          variant="card"
          className="flex flex-col gap-10 lg:flex-row lg:gap-16"
          stagger={0.06}
        >
          <div className="flex flex-col gap-12 justify-center items-center text-center lg:gap-32">
            <div data-scrub-item>
              <SignaturePillar item={SIGNATURE_STYLES[0]} />
            </div>
            <div data-scrub-item>
              <SignaturePillar item={SIGNATURE_STYLES[1]} />
            </div>
          </div>

          <div className="mx-auto lg:w-[495px]">
            <div className="overflow-hidden relative">
              <div data-scrub-item>
                <img
                  src={signatureImg}
                  alt="Signature bridal look by Chiselle"
                  className="block object-cover w-full h-full lg:w-[495px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 justify-center items-center text-center lg:gap-32">
            <div data-scrub-item>
              <SignaturePillar item={SIGNATURE_STYLES[2]} />
            </div>
            <div data-scrub-item>
              <SignaturePillar item={SIGNATURE_STYLES[3]} />
            </div>
          </div>
        </ScrubStagger>
      </div>
    </section>
  );
}

function SignaturePillar({ item }) {
  if (!item) return null;

  const [firstWord, ...rest] = item.title.split(" ");
  const restTitle = rest.join(" ");

  return (
    <div className={`flex flex-col gap-2 !text-center !justify-center`}>
      <h3 className="text-lg text-brand-secondary md:text-xl">
        <span className="text-2xl md:text-3xl font-script text-brand-primary">
          {firstWord}
        </span>
        {restTitle && (
          <span className="ml-1 text-2xl font-light uppercase font-secondary md:text-3xl text-brand-primary">
            {" "}
            {restTitle}
          </span>
        )}
      </h3>
      <p className="max-w-xs text-sm font-light leading-relaxed text-center font-primary text-brand-secondary">
        {item.desc}
      </p>
    </div>
  );
}

export function HowWeWork() {
  return (
    <section className="overflow-hidden relative py-10 md:py-24 lg:py-32">
      {/* Soft corner florals */}
      <div
        className="absolute inset-0 left-0 top-36 z-40 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url(${bgTexture5})`,
          backgroundSize: "auto",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 right-0 top-5 z-40 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url(${bgTexture4})`,
          backgroundSize: "auto",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container relative">
        <div className="text-center">
          <FadeUpInView
            as="p"
            delay={0.02}
            className="mb-5 text-sm uppercase text-brand-secondary font-primary"
          >
            HOW WE WORK
          </FadeUpInView>
          <FadeUpInView
            as="h3"
            delay={0.1}
            className="mb-6 font-secondary text-[2.1rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase"
          >
            3 SIMPLE STEPS
          </FadeUpInView>
        </div>

        <div className="mt-12 lg:mt-14">
          <div className="p-[2px] mx-auto rounded border-2 border-brand-secondary">
            <div className="px-8 py-14 border border-brand-secondary">
              <ScrubStagger
                variant="card"
                className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10"
                stagger={0.07}
              >
                {HOW_WE_WORK.map((step) => (
                  <div key={step.num} data-scrub-item className="text-center">
                    <div className="flex justify-center items-center mx-auto mb-8 w-16 h-16 text-lg rounded-full border border-dashed font-primary border-brand-secondary text-brand-primary">
                      {Number(step.num)}
                    </div>

                    <h3 className="mb-4 font-secondary text-[1.25rem] md:text-[32px] leading-9 tracking-[0.02em] uppercase text-brand-primary">
                      {step.title}
                    </h3>
                    <p className="mx-auto max-w-[260px] text-sm leading-relaxed text-brand-secondary font-primary font-light">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </ScrubStagger>
            </div>
          </div>

          <FadeUpInView
            as="div"
            className="mt-14 text-center"
            variant="button"
            delay={0.18}
          >
            <a href="#contact" className="btn-primary">
              LEARN MORE
            </a>
          </FadeUpInView>
        </div>
      </div>
    </section>
  );
}
