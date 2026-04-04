import { STATS } from "../data/content";
import { srcAssetUrl } from "../config/assets";

const bgTexture = srcAssetUrl("bg-texture-2.svg");
const ABOUT_IMAGE_SRC = srcAssetUrl("home/home-about-img.png");

export default function About() {
  return (
    <section id="about" className="overflow-hidden relative py-16 lg:py-[60px]">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "250px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          opacity: 0.2,
        }}
      />

      <div className="container pb-12 mx-auto text-center lg:pb-20">
        <p className="mb-6 text-[14px] leading-[20px] text-secondary uppercase font-primary">
          SO WHATS CHISELLE ABOUT
        </p>

        <h2 className="md:mb-8 font-secondary text-[1.75rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase">
          WHERE BEAUTY FEELS LIKE YOU.
          <br className="hidden lg:block" />
          REAL, NATURAL AND INTENTIONAL
        </h2>
      </div>

      <div className="relative container grid items-center gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Left: Portrait card */}
        <div className="flex justify-center order-1">
          <div className="relative max-w-sm lg:max-w-md">
            <div className="overflow-hidden relative">
              {ABOUT_IMAGE_SRC ? (
                <img
                  src={ABOUT_IMAGE_SRC}
                  alt="Nowshiba Shajahan – Founder & Senior Pro Artist at Chiselle"
                  className="block object-cover w-full h-auto"
                />
              ) : (
                <div className="block w-full h-[420px] bg-gradient-to-b from-brand-gold/60 to-brand-cream" />
              )}
            </div>
          </div>
        </div>

        {/* Right: Copy + stats */}
        <div className="max-w-xl order-2 lg:ml-6">
          <p className="mb-4 text-base font-light leading-relaxed font-primary text-brand-secondary">
            Chiselle was never meant to be loud or overcomplicated. It began
            with one simple belief: makeup should feel comfortable, intentional,
            and still feel like you.
          </p>
          <p className="mb-4 text-base font-light leading-relaxed font-primary text-brand-secondary">
            Every look is built slowly and thoughtfully. No forcing trends. Just
            understanding your features, your comfort, and the kind of bride you
            want to be on your wedding day.
          </p>
          <p className="mb-8 text-base font-light leading-relaxed font-primary text-brand-secondary">
            Nowshiba brings years of hands-on experience working closely with
            brides, models, and women from all walks of life. That experience
            shows not just in the final look, but in the process. Knowing when
            to add, when to hold back, and when to let your natural self lead.
            We take on a limited number of bookings to ensure every bride
            receives the time, attention, and effortless experience she deserves
            on her special day.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mb-8 text-brand-primary">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-primary md:text-[32px] leading-10">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-primary">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Signature + CTA */}
          <div className="space-y-2">
            <p className="text-3xl font-script md:text-4xl text-brand-primary">
              Nowshiba Shajahan
            </p>
            <p className="text-base text-brand-primary font-primary">
              Founder &amp; Senior Pro Artist, Chiselle
            </p>
          </div>

          <a href="#about" className="inline-block mt-6 btn-primary">
            BEHIND CHISELLE
          </a>
        </div>
      </div>
    </section>
  );
}
