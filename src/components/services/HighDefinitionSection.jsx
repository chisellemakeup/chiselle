import ScrubStagger from "../common/ScrubStagger";
import { publicAssetUrl } from "../../config/assets";

const SERVICE_DETAIL_CARDS = [
  {
    id: 1,
    /** Footer / deep link: HD + Airbrush block entry */
    anchorId: "hd-air-brush-makeup",
    title: "High Definition Makeup",
    image: publicAssetUrl("high-definition-img.jpg"),
    description:
      "Designed to look flawless in real life and on high-definition cameras. HD makeup wears beautifully in humid conditions and photographs cleanly without flashback or heaviness – perfect for brides and events where close-up photos matter.",
    priceLabel: "",
    price: "₹50,000",
    showNotes: false,
    showIncluded: true,
  },
  {
    id: 2,
    title: "Airbrush Makeup",
    image: publicAssetUrl("airbrush-img.jpg"),
    description:
      "We use Temptu airbrush foundation blended traditionally to create a smooth, even, silicone-based finish. The result is a lightweight, water-resistant base with a natural glam effect that lasts up to 10 hours. Ideal for all-day events, this finish feels comfortable on the skin while looking refined in person and polished on camera.",
    priceLabel: "",
    price: "₹55,000",
    showNotes: false,
    showIncluded: true,
    included: [
      "✦ Airbrush Makeup Finish (Matte / Dewy)",
      "✦ Bridal Hairstyling",
      "✦ Saree / Lehenga Draping",
    ],
  },
  {
    id: 3,
    anchorId: "christian-weddings",
    title: "Christian Wedding Makeup",
    image: publicAssetUrl("christian-wedding-img.jpg"),
    description:
      "Thoughtfully created for long wedding days that begin at the church and flow into the reception. Using Temptu airbrush or silicone-based foundations, we focus on a strong, long-lasting base with soft definition, allowing the makeup to hold through ceremonies while staying elegant and timeless.",
    priceLabel: "",
    price: "₹50,000",
    showNotes: false,
    showIncluded: true,
  },
  {
    id: 4,
    title: "Destination Wedding Makeup",
    image: publicAssetUrl("destination-wedding-img.jpg"),
    description:
      "If your wedding is outside Chennai and you want to look like your best, most natural self, you’re in the right place. Our destination wedding makeup is thoughtfully tailored to suit the location, climate, and length of your celebrations. We use professional, trusted brands like Tarte, MAC, NARS, Chanel, and Temptu Airbrush to ensure your makeup stays fresh, comfortable, and flawless throughout your wedding events.",
    priceLabel: "",
    price: "₹1,15,000",
    showNotes: true,
    notes: [
      "All travel (flight/train/bus), accommodation, local transfers, and cab arrangements (including venues without airport access) are to be arranged or reimbursed by the client for the Chiselle team.",
    ],
    showIncluded: true,
  },
  {
    id: 5,
    title: "Guest Makeup",
    image: publicAssetUrl("guest-makeup-img.jpg"),
    description:
      "Effortless, well-balanced makeup tailored to complement your outfit and the occasion. Guest makeup is designed to feel comfortable, polished, and long-wearing, enhancing your features without overpowering your natural look.",
    priceLabel: "",
    price: "",
    showNotes: true,
    notes: [
      '✦ <span class="font-semibold text-brand-primary">₹40,000</span> if booked along with a bridal package',
      '✦ <span class="font-semibold text-brand-primary">₹45,000</span> if booked without a bridal package',
    ],
    showIncluded: false,
  },
  {
    id: 6,
    title: "Trial Makeup",
    image: publicAssetUrl("trial-makeup-img.jpg"),
    description:
      "Trial makeup will be done exclusively by Nowshiba at her studio, subject to her availability. Each session is limited to 1 hour, during which one or two looks will be demonstrated. Missed slots will be rescheduled only according to the next available time. Please note that the trial provides a preview look and is not a full bridal makeover. The trial is optional, and if chosen, the charges are separate from the bridal package and will not be deducted from the final package cost.",
    priceLabel: "",
    price: "",
    showNotes: true,
    notes: [
      '✦ Makeup: <span class="font-semibold text-brand-primary">₹10,000</span>',
      '✦ Hair Trial: <span class="font-semibold text-brand-primary">₹3,000</span>',
    ],
    showIncluded: false,
  },
];

function ServiceDetailCard({ service, reverse, whiteBg }) {
  const {
    title,
    image,
    description,
    priceLabel,
    price,
    showNotes,
    notes = [],
  } = service;

  return (
    <div
      className={`rounded-2xl shadow-sm border border-[#E7C9C0] overflow-hidden ${
        whiteBg ? "bg-white" : "bg-[#FFE4DD40]"
      }`}
    >
      <div
        className={`flex flex-col items-center gap-10 lg:gap-[120px] px-5 py-6 md:px-10 md:py-10 md:flex-row ${
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
              {service.showIncluded && (
                <div>
                  <h3 className="mb-4 text-base text-brand-primary font-primary">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-1.5 text-base md:text-lg text-brand-secondary font-primary">
                    <li>✦ HD Matte / Dewy Finish Makeup</li>
                    <li>✦ Bridal Hairstyling</li>
                    <li>✦ Saree / Lehenga Draping</li>
                  </ul>
                </div>
              )}

              {showNotes && notes.length > 0 && (
                <div className="font-primary space-y-1.5">
                  {service.id === 4 && <p className="text-sm md:text-base text-brand-primary">Notes</p>}
                  {service.id === 6 && <p className="text-sm md:text-base text-brand-primary">Price</p>}
                  {notes.map((note) => (
                    <p
                      key={note}
                      className="text-brand-secondary text-lg"
                      dangerouslySetInnerHTML={{ __html: note }}
                    />
                  ))}
                </div>
              )}

              {(priceLabel || price) && (
                <div>
                  <p className="mb-1 text-xl font-primary text-brand-primary">
                    {priceLabel}{" "}
                    {price && (
                      <span className="font-semibold text-brand-primary">
                        {price}
                      </span>
                    )}
                  </p>
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

export default function HighDefinitionSection() {
  return (
    <section className="pt-16 md:pt-24">
      <ScrubStagger
        variant="card"
        className="container px-5 space-y-10 lg:px-24"
        stagger={0.1}
        sequenceOnEnter
        itemDuration={0.45}
        start="top 86%"
      >
        {SERVICE_DETAIL_CARDS.map((service, index) => (
          <div
            key={service.id}
            id={service.anchorId}
            data-scrub-item
            className={
              service.anchorId ? "scroll-mt-24 md:scroll-mt-32" : undefined
            }
          >
            <ServiceDetailCard
              service={service}
              reverse={index % 2 === 1}
              whiteBg={index % 2 === 1}
            />
          </div>
        ))}
      </ScrubStagger>
    </section>
  );
}
