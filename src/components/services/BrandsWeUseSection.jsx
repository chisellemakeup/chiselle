import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";
import { publicAssetUrl } from "../../config/assets";

const BRANDS = [
  publicAssetUrl("lakme-logo.png"),
  publicAssetUrl("maybelline-logo.png"),
  publicAssetUrl("mac-logo.png"),
  publicAssetUrl("revlon-logo.png"),
  publicAssetUrl("nykaa-logo.png"),
  publicAssetUrl("colorbar-logo.png"),
  publicAssetUrl("maybelline-logo.png"),
  publicAssetUrl("colorbar-logo.png"),
  publicAssetUrl("nykaa-logo.png"),
  publicAssetUrl("lakme-logo.png"),
  publicAssetUrl("revlon-logo.png"),
  publicAssetUrl("mac-logo.png"),
];

const BRANDS_MARQUEE = [...BRANDS, ...BRANDS];

export default function BrandsWeUseSection() {
  return (
    <section className="overflow-x-hidden py-16 md:py-20">
      <div className="container px-5 text-center lg:px-16">
        <FadeUpInView
          as="h2"
          className="mb-4 font-secondary text-[24px] md:text-[32px] lg:text-[42px] leading-tight tracking-[0.02em] text-brand-primary uppercase"
        >
          Brands We Use
        </FadeUpInView>
        <FadeUpInView
          as="p"
          className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed md:text-base text-brand-secondary font-primary"
        >
          We use a curated selection of premium, trusted, long-wear products
          chosen for comfort, performance, and real-skin finish. Brands may vary
          based on skin type, weather, and the look you choose.
        </FadeUpInView>

        <div className="overflow-hidden -mx-5 mb-2 md:hidden motion-reduce:overflow-x-auto">
          <div className="flex gap-5 items-center w-max motion-reduce:animate-none animate-marquee">
            {BRANDS_MARQUEE.map((src, index) => (
              <div
                key={`brand-marquee-${index}`}
                className="flex justify-center items-center shrink-0"
              >
                <img
                  src={src}
                  alt=""
                  className="object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <FadeUpInView as="div" variant="card" className="hidden md:block">
          <ScrubStagger
            variant="card"
            className="grid grid-cols-4 gap-4 lg:grid-cols-6 lg:gap-5"
            stagger={0.07}
            sequenceOnEnter
            itemDuration={0.35}
            start="top 88%"
          >
            {BRANDS.map((src, index) => (
              <div
                key={`${src}-${index}`}
                data-scrub-item
                className="flex min-h-[72px] min-w-0 items-center justify-center "
              >
                <img
                  src={src}
                  alt=""
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </ScrubStagger>
        </FadeUpInView>
      </div>
    </section>
  );
}
