import { SIGNATURE_STYLES, HOW_WE_WORK } from "../data/content";
import { srcAssetUrl } from "../config/assets";

const bgTexture = srcAssetUrl("bg-texture-1-light.svg");
const bgTexture3 = srcAssetUrl("bg-texture-3.svg");
const signatureImg = srcAssetUrl("signature-bridal-img.png");
const bgTexture4 = srcAssetUrl("bg-texture-4.png");
const bgTexture5 = srcAssetUrl("bg-texture-5.png");

export function WhyUs() {
  return (
    <section className="overflow-hidden relative py-10 lg:py-[60px] bg-brand-primary">
      {/* Background texture */}
      <div
        className="absolute left-0 inset-0 opacity-90 pointer-events-none z-40"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "250px",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute right-0 inset-0 opacity-90 pointer-events-none z-40"
        style={{
          backgroundImage: `url(${bgTexture3})`,
          backgroundSize: "250px",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container flex relative flex-col items-center mx-auto text-center">
        <p className="mb-5 text-sm text-white uppercase font-primary">
          WHY DO BRIDES COME TO US?
        </p>
        <h2 className="mb-6 font-secondary text-[1.75rem] md:text-[2.2rem] lg:text-[42px] leading-snug tracking-[0.02em] text-white uppercase">
          THE BEST BRIDAL LOOK IS THE
          <br className="hidden lg:block" />
          ONE THAT FEELS LIKE YOU
        </h2>
        <p className="mb-4 text-base md:text-lg font-light leading-relaxed text-white font-primary lg:max-w-[710px]">
          Chiselle brides are our biggest asset. They trust us with their
          vision, and we make sure every detail of their bridal makeup and hair
          is taken care of.
        </p>
        <p className="mb-0 text-base lg:text-lg font-light leading-relaxed text-white font-primary lg:max-w-[710px]">
          The best moments? When a bride says, &ldquo;Omg, I still feel like
          me&rdquo; or when the family can&apos;t stop beaming with joy seeing
          her. Minimal, real, and intentional. The result? Happy, radiant and
          confident brides who feel like themselves… and keep coming back for
          more.
        </p>
      </div>
    </section>
  );
}

export function SignatureStyle() {
  return (
    <section className="overflow-hidden relative py-10 bg-[#ffe4dd]/20 lg:py-[60px]">

      <div
        className="absolute top-5 right-0 inset-0 opacity-90 pointer-events-none z-40"
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
          <p className="mb-5 text-sm uppercase text-brand-secondary font-primary">
            SIGNATURE BRIDAL STYLE
          </p>
          <h2 className="mb-6 font-secondary text-[1.75rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase">
            WHERE MINIMAL MEETS RADIANT
          </h2>
        </div>

        {/* Layout: left/right pillars with center image */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-12 justify-center items-center text-center lg:gap-32">
            <SignaturePillar item={SIGNATURE_STYLES[0]} />
            <SignaturePillar item={SIGNATURE_STYLES[1]} />
          </div>

          {/* Center image */}
          <div className="mx-auto lg:w-[495px]">
            <div className="overflow-hidden relative">
              <img
                src={signatureImg}
                alt="Signature bridal look by Chiselle"
                className="block object-cover w-full h-full lg:w-[495px]"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-12 justify-center items-center text-center lg:gap-32">
            <SignaturePillar item={SIGNATURE_STYLES[2]} />
            <SignaturePillar item={SIGNATURE_STYLES[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SignaturePillar({ item }) {
  if (!item) return null;

  const [firstWord, ...rest] = item.title.split(" ");
  const restTitle = rest.join(" ");

  return (
    <div className={`flex flex-col gap-2 !justify-center !text-center`}>
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
        className="absolute top-36 left-0 inset-0 opacity-90 pointer-events-none z-40"
        style={{
          backgroundImage: `url(${bgTexture5})`,
          backgroundSize: "auto",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute top-5 right-0 inset-0 opacity-90 pointer-events-none z-40"
        style={{
          backgroundImage: `url(${bgTexture4})`,
          backgroundSize: "auto",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container relative">
        <div className="text-center">
          <p className="mb-5 text-sm uppercase text-brand-secondary font-primary">
            HOW WE WORK
          </p>
          <h2 className="mb-6 font-secondary text-[2.1rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase">
            3 SIMPLE STEPS
          </h2>
        </div>

        <div className="mt-12 lg:mt-14">
          {/* Double frame box */}
          <div className="p-[2px] mx-auto rounded border-2 border-brand-secondary">
            <div className="px-8 py-14 border border-brand-secondary">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
                {HOW_WE_WORK.map((step) => (
                  <div key={step.num} className="text-center">
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
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <a href="#contact" className="btn-primary">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
