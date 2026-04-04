import ScrubStagger from "../common/ScrubStagger";
import { publicAssetUrl } from "../../config/assets";

const CREW_PACKAGES = [
  {
    id: 1,
    title: "Outstation Wedding",
    image: publicAssetUrl("christian-wedding-img.png"),
    description:
      "If your wedding is outside Chennai and you want to look like your most natural, confident self, the Chiselle Crew has you covered.",
    showIncluded: true,
    priceLabel: "",
    price: "₹37,500",
    notes: [
      "*All travel (flight/train/bus), accommodation, local transfers, and cab arrangements (including venues without airport access) are to be arranged or reimbursed by the client for the Chiselle team.",
    ],
  },
  {
    id: 2,
    title: "Groom Makeup Package",
    image: publicAssetUrl("destination-wedding-img.png"),
    description:
      "It’s time for grooms to shine too. Our qualified professionals specialise in groom makeup and grooming that enhances your features while keeping the look natural, polished, and camera-ready.",
    showIncluded: false,
    priceLabel: "Price",
    price: "",
    notes: ['✦ Makeup: <span class="font-semibold text-brand-primary">₹5,500</span>', '✦ Hair: <span class="font-semibold text-brand-primary">₹4,000</span>'],
  },
  {
    id: 3,
    title: "Trial Makeup",
    image: publicAssetUrl("destination-wedding-img.png"),
    description:
      "Trial makeup will be done exclusively by the designated team member at Chiselle studio, based on their availability. Each session is limited to 1 hour, during which one or two looks will be demonstrated. The trial is optional and charged separately from the bridal package.",
    showIncluded: false,
    priceLabel: "Price",
    price: "",
    notes: ['✦ Makeup: <span class="font-semibold text-brand-primary">₹5,000</span>', '✦ Hair Trial: <span class="font-semibold text-brand-primary">₹3,000</span>'],
  },
];

function CrewPackageCard({ pkg, reverse }) {
  const { title, image, description, showIncluded, priceLabel, price, notes } =
    pkg;

  return (
    <div className="rounded-2xl bg-[#FFE4DD40] shadow-sm border border-[#E7C9C0] overflow-hidden">
      <div
        className={`flex flex-col items-center gap-10 lg:gap-[120px] px-8 py-10 md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* Image */}
        <div className="md:w-[35%]">
          {image && (
            <div className="w-full h-full">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full rounded-[4px]"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between md:w-[65%]">
          <div className="flex flex-col gap-6">
            <h2 className="font-secondary text-[24px] md:text-[32px] lg:text-[36px] leading-tight tracking-[0.08em] text-brand-primary uppercase">
              {title}
            </h2>
            <p className="text-base leading-relaxed md:text-lg text-brand-secondary font-primary">
              {description}
            </p>

            <span className="block w-full h-[1px] bg-[#2B04051A]" />

            <div className="flex flex-col gap-6">
              {showIncluded && (
                <div className="space-y-3">
                  <h3 className="text-base text-brand-primary font-primary">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-1.5 text-base md:text-lg text-brand-secondary font-primary">
                    <li>✦ HD Matte / Dewy Finish Makeup</li>
                    <li>✦ Bridal Hairstyling</li>
                    <li>✦ Saree / Lehenga Draping</li>
                  </ul>
                </div>
              )}

              {/*
                Main package price (e.g. Outstation) — must show even when footnote `notes` exist.
                Cards that only use HTML notes for pricing leave `price` empty.
              */}
              {price && (
                <div>
                  <p className="mb-1 text-xl font-primary text-brand-secondary">
                    {priceLabel ? `${priceLabel} ` : null}
                    <span className="text-brand-primary">
                      {price}
                    </span>
                  </p>
                </div>
              )}

              {notes && notes.length > 0 && (
                <div className="text-sm md:text-base text-brand-secondary font-primary space-y-1.5">
                  {priceLabel && !price && (
                    <p className="text-brand-primary">
                      {priceLabel}
                    </p>
                  )}
                  {notes.map((note) => (
                    <p
                      key={note}
                      className="text-brand-secondary text-lg first:text-sm"
                      dangerouslySetInnerHTML={{ __html: note }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8 max-w-md md:flex-row">
            <a href="#contact" className="w-full text-center btn-primary">
              Book Now
            </a>
            <a
              href="#contact"
              className="w-full text-center btn-outline border-[#E7C9C0] text-brand-primary hover:bg-[#ffe4dd]/40 hover:text-brand-primary"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CrewPackagesSection() {
  return (
    <section className="py-16 md:py-24">
      <ScrubStagger
        variant="card"
        className="container px-5 space-y-10 lg:px-[60px]"
        stagger={0.1}
        sequenceOnEnter
        itemDuration={0.45}
        start="top 86%"
      >
        {CREW_PACKAGES.map((pkg, index) => (
          <div key={pkg.id} data-scrub-item>
            <CrewPackageCard pkg={pkg} reverse={index % 2 === 0} />
          </div>
        ))}
      </ScrubStagger>
    </section>
  );
}
