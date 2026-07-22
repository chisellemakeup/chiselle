import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";
import { publicAssetUrl } from "../../config/assets";

const CREW_PACKAGES = [
  {
    id: 1,
    cardImage: publicAssetUrl("crew-basic-card-img.jpg"),
    title: "Crew Basic",
    experience: "1+ years of experienced artists",
    hdPrice: "₹22,500",
    airbrushPrice: "₹25,000",
  },
  {
    id: 2,
    cardImage: publicAssetUrl("crew-pro-card-img.jpg"),
    title: "Crew Pro",
    experience: "2+ years of experienced artists",
    hdPrice: "₹27,500",
    airbrushPrice: "₹32,000",
  },
  {
    id: 3,
    cardImage: publicAssetUrl("crew-elite-card-img.jpg"),
    title: "Crew Elite",
    experience: "4+ years of experienced artists",
    hdPrice: "₹30,000",
    airbrushPrice: "₹35,000",
  },
];

function CrewPackageCard({ pkg }) {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-white border border-[#E7C9C0] rounded-2xl">
      {/* Image */}
      <div className="overflow-hidden p-4">
        <img
          src={pkg.cardImage}
          alt={pkg.title}
          className="object-cover w-full h-56 md:h-64 rounded-[4px]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 justify-between p-5">
        <div className="space-y-4">
          <div>
            <h3 className="mb-1 font-secondary text-[20px] md:text-[32px] tracking-[0.02em] font-medium uppercase text-brand-primary">
              {pkg.title}
            </h3>
            <p className="text-sm md:text-base text-brand-secondary font-primary">
              {pkg.experience}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-primary text-brand-secondary">
              <span className="font-semibold text-brand-primary">
                What&apos;s included:
              </span>
            </p>
            <ul className="space-y-1.5 text-sm md:text-base text-brand-secondary font-primary">
              <li>✦ HD / Airbrush Makeup Finish</li>
              <li>✦ Bridal Hairstyling</li>
              <li>✦ Saree / Lehenga Draping</li>
            </ul>
          </div>

          <div className="space-y-1 text-sm md:text-base font-primary text-brand-secondary">
            <p>
              <span className="font-normal text-brand-secondary">HD: </span>
              <span className="font-semibold text-brand-primary">
                {pkg.hdPrice}
              </span>
            </p>
            <p>
              <span className="font-normal text-brand-secondary">
                Airbrush:{" "}
              </span>
              <span className="font-semibold text-brand-primary">
                {pkg.airbrushPrice}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6 md:flex-row">
          <a href="/contact" className="w-full text-center btn-primary">
            Book Now
          </a>
          <a
            href="/contact"
            className="w-full text-center btn-outline border-[#E7C9C0] text-brand-primary hover:bg-[#ffe4dd]/40 hover:text-brand-primary"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HdAirbrushCrewSection() {
  return (
    <section
      id="hd-air-brush-makeup"
      className="scroll-mt-24 bg-[#FFE4DD40] py-16 md:scroll-mt-32 md:py-24"
    >
      <div className="container px-5 lg:px-[60px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <FadeUpInView as="h2" delay={0.08} className="mb-4 font-secondary text-[24px] md:text-[32px] lg:text-[42px] leading-tight tracking-[0.08em] text-brand-primary uppercase">
            HD/Airbrush Makeup
          </FadeUpInView>
          <FadeUpInView as="p" delay={0.16} className="mx-auto max-w-2xl text-sm leading-relaxed md:text-base text-brand-secondary font-primary">
            We use premium formulas from brands like Armani, Dior, NARS and
            Chanel for flawless, a lightweight base. HD and airbrush techniques
            give a natural glow that photographs beautifully and lasts for
            hours.
          </FadeUpInView>
        </div>

        <ScrubStagger
          variant="card"
          className="grid gap-5 md:grid-cols-3"
          stagger={0.09}
          sequenceOnEnter
          itemDuration={0.42}
          start="top 86%"
        >
          {CREW_PACKAGES.map((pkg) => (
            <div key={pkg.id} data-scrub-item>
              <CrewPackageCard pkg={pkg} />
            </div>
          ))}
        </ScrubStagger>
      </div>
    </section>
  );
}
