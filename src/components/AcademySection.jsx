import { srcAssetUrl } from "../config/assets";

const academyBg = srcAssetUrl("/chiselle-academy-bg-img.png");

export default function AcademySection() {
  return (
    <section className="overflow-hidden relative py-24 lg:py-32">
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
        <p className="mb-5 text-sm text-white uppercase font-primary">
          CHISELLE ACADEMY
        </p>
        <h2 className="mb-6 font-secondary text-[2.1rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-white uppercase">
          WE DON&apos;T JUST TEACH MAKEUP.
          <br />
          WE TEACH THE REAL DEAL.
        </h2>
        <p className="mb-10 text-base font-light leading-relaxed text-white font-primary">
          At Chiselle Academy, you learn premium, timeless bridal beauty the
          practical way. Strong basics, advanced techniques, real industry
          insights, and mentorship that has your back. If you want skills that
          translate from class to client, you&apos;re in the right place.
        </p>

        <div className="text-center">
          <a
            href="#contact"
            className="bg-white btn-primary text-brand-primary hover:bg-brand-light"
          >
            LET’S GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
}
