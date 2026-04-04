import { SERVICES } from "../data/content";
import { srcAssetUrl } from "../config/assets";

const serviceImg1 = srcAssetUrl("home/services-img1.png");
const serviceImg2 = srcAssetUrl("home/services-img2.png");
const serviceImg3 = srcAssetUrl("home/services-img3.png");
const bgTexture6 = srcAssetUrl("bg-texture-6.png");

const SERVICE_IMAGES = [serviceImg1, serviceImg2, serviceImg3];

export default function Services() {
  return (
    <section id="services" className="relative py-10 md:py-24 bg-[#ffe4dd]/20 lg:py-32 overflow-hidden">
      <div
        className="absolute -top-6 md:top-0 -left-5 md:left-0 inset-0 opacity-90 pointer-events-none z-40"
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
          <p className="mb-5 text-sm uppercase text-brand-secondary font-primary">
            Services
          </p>
          <h2 className="mb-6 font-secondary text-[1.75rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase">
            EXPLORE BASED <br className="block md:hidden" /> ON YOUR NEEDS
          </h2>
        </div>

        {/* Service rows */}
        <div className="space-y-20 lg:space-y-24">
          {SERVICES.map((service, index) => {
            const reverse = index % 2 === 1;
            const image = SERVICE_IMAGES[index];
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={service.title}
                className={`flex flex-col justify-between items-center gap-10 lg:gap-16 lg:flex-row ${
                  reverse ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image card */}
                <div
                  className={`flex justify-center ${
                    reverse ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <div className="relative w-full max-w-md">
                    <div className="relative overflow-hidden rounded-[6px] bg-brand-primary">
                      <div className="p-2.5">
                        <img
                          src={image}
                          alt={service.title}
                          className="block w-full h-full object-cover rounded-[4px]"
                        />
                      </div>
                      <div className="flex flex-col gap-3 justify-between items-start px-6 py-4 lg:gap-5 text-brand-bg">
                        <span className="text-base tracking-[0.3em] uppercase font-primary">
                          {number}
                        </span>
                        <span className="text-2xl md:text-[32px] leading-9 tracking-[0.02em] uppercase font-secondary">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text block */}
                <div className="mx-auto max-w-xl text-left lg:mx-0">
                  <h3 className="mb-4 font-secondary text-[2.1rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase">
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

                  <div className="flex flex-wrap gap-4">
                    <a href="#contact" className="btn-primary">
                      EXPLORE OUR SERVICES
                    </a>
                    <a
                      href="#contact"
                      className="btn-outline border-[#2B04051A] text-brand-primary hover:bg-[#ffe4dd]/40 hover:text-brand-primary"
                    >
                      DOWNLOAD BROCHURE
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
