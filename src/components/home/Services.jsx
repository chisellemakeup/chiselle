import { SERVICES } from "../../data/content";
import { srcAssetUrl } from "../../config/assets";
import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";

const serviceImg1 = srcAssetUrl("services-img1.png");
const serviceImg2 = srcAssetUrl("services-img2.png");
const serviceImg3 = srcAssetUrl("services-img3.png");
const bgTexture6 = srcAssetUrl("bg-texture-6.png");

const SERVICE_IMAGES = [serviceImg1, serviceImg2, serviceImg3];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-10 md:py-24 bg-[#ffe4dd]/20 lg:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 -left-5 -top-6 z-40 opacity-90 pointer-events-none md:left-0 md:top-0"
        style={{
          backgroundImage: `url(${bgTexture6})`,
          backgroundSize: "auto",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="container px-5 lg:px-32">
        {/* Heading */}
        <div className="mb-16 text-center">
          <FadeUpInView
            as="p"
            delay={0.02}
            className="mb-5 text-sm uppercase text-brand-secondary font-primary"
          >
            Services
          </FadeUpInView>
          <FadeUpInView
            as="h2"
            delay={0.1}
            className="mb-6 font-secondary text-[1.75rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase"
          >
            EXPLORE BASED <br className="block md:hidden" /> ON YOUR NEEDS
          </FadeUpInView>
        </div>

        <ScrubStagger
          variant="card"
          className="space-y-20 lg:space-y-24"
          stagger={0.1}
        >
          {SERVICES.map((service, index) => {
            const reverse = index % 2 === 1;
            const image = SERVICE_IMAGES[index];
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={service.title}
                className={`flex flex-col justify-between items-center gap-10 lg:gap-16 lg:flex-row ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image card */}
                <div
                  data-scrub-item
                  className={`flex justify-center ${
                    reverse ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <FadeUpInView
                    as="div"
                    variant="card"
                    delay={0.02 + index * 0.05}
                    className="relative w-full max-w-md"
                  >
                    <div className="relative overflow-hidden rounded-[6px] bg-brand-primary">
                      <div className="p-2.5">
                        <img
                          src={image}
                          alt={service.title}
                          className="block w-full h-full object-cover rounded-[4px]"
                        />
                      </div>
                      <div className="flex flex-col gap-3 justify-between items-start px-6 py-4 text-brand-bg lg:gap-5">
                        <span className="text-base font-primary md:tracking-[0.3em] uppercase">
                          {number}
                        </span>
                        <span className="text-[32px] leading-9 tracking-[0.02em] uppercase font-secondary">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </FadeUpInView>
                </div>

                {/* Text block */}
                <div
                  data-scrub-item
                  className="mx-auto max-w-xl text-left lg:mx-0"
                >
                  <FadeUpInView
                    as="div"
                    variant="text"
                    delay={0.08 + index * 0.05}
                  >
                    <h3 className="hidden md:block mb-4 font-secondary text-[2.1rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase">
                      {service.title}
                    </h3>

                    <p className="mb-4 text-lg font-light leading-relaxed text-brand-secondary font-primary">
                      {service.desc}
                    </p>

                    <ul className="mb-6 space-y-1.5 text-lg font-light leading-relaxed text-brand-secondary font-primary">
                      {service.tags.map((tag) => (
                        <li key={tag} className="flex gap-2 items-start">
                          <span className="mt-[2px] text-lg text-brand-secondary">
                            ✦
                          </span>
                          <span className="text-lg">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </FadeUpInView>

                  <FadeUpInView
                    as="div"
                    className="flex flex-wrap gap-4"
                    variant="button"
                    delay={0.16}
                  >
                    <a
                      href={service.serviceuUrl}
                      className="w-full text-center btn-primary md:w-auto"
                    >
                      EXPLORE OUR SERVICES
                    </a>
                    <a
                      href="#contact"
                      className="btn-outline border-[#2B04051A] w-full md:w-auto text-center text-brand-primary hover:bg-[#ffe4dd]/40 hover:text-brand-primary"
                    >
                      DOWNLOAD BROCHURE
                    </a>
                  </FadeUpInView>
                </div>
              </div>
            );
          })}
        </ScrubStagger>
      </div>
    </section>
  );
}
