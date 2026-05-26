import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";
import { publicAssetUrl } from "../../config/assets";

const TOP_IMAGE = publicAssetUrl("general-note&require-img.jpg");

const LEFT_NOTES = [
  "All products are sanitised after every use for hygiene and quality.",
  "Only one person, along with the bride, is allowed in the dressing room to avoid delays.",
  "Makeover services are strictly appointment-based. Time slots will be allocated, and maintaining the schedule is essential. Please avoid last-minute changes. Any specific requirements must be communicated in advance via WhatsApp (+91 7708076661).",
  "Basic travel charges apply for the makeup artist, hair stylist, and team. For event venues located more than 15 km from Gopalapuram, an additional ₹2,500 will be charged.",
];

const RIGHT_NOTES = [
  "Hair flowers, jewellery, non-traditional bindi, prescription contact lenses, and nail paint will not be provided.",
  "The complete makeover requires a total of 3 hours – 45 minutes to 1 hour exclusively for Nowshiba’s makeup session and 2 hours for hair styling, draping, jewellery, and getting the bride fully ready.",
  "Availability is confirmed only when the event date, time, and venue are finalised.",
  "A 50% non-refundable advance is required to confirm any booking; the remaining 50% to be paid 2 days before or on the event day (Bank transfer only). All charges exclude 5% GST.",
];

function NoteItem({ text }) {
  return (
    <li
      data-scrub-item
      className="block text-sm leading-relaxed md:text-base text-brand-secondary font-primary"
    >
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-[10px] text-white">
        ✓
      </span>
      <span className="pl-2">{text}</span>
    </li>
  );
}

export default function GeneralNotesSection() {
  return (
    <section className="bg-[#FFE4DD40] pb-20">
      <div className="container">
        <div className="p-5 border border-[#2B04051A] rounded-xl lg:p-10 bg-white">
          <div className="text-center text-brand-primary">
            <FadeUpInView as="h2" delay={0.08} className="mb-7 font-secondary text-[22px] md:text-[32px] lg:text-[42px] leading-tight tracking-[0.02em] uppercase">
              General Notes & Requirements
            </FadeUpInView>
          </div>

          {/*
            Outer FadeUpInView: whole block eases in after the title.
            Inner ScrubStagger: stagger + scrub on image and each note line.
          */}
          <FadeUpInView
            as="div"
            variant="card"
            delay={0.12}
            className="block"
          >
            <ScrubStagger variant="text" className="block" stagger={0.08}>
              <div
                data-scrub-item
                className="overflow-hidden mb-10 rounded-2xl"
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-auto md:h-[460px] overflow-hidden rounded-2xl">
                  <img
                    src={TOP_IMAGE}
                    alt="General notes and requirements"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 border-b border-[#2B04051A] pb-10">
                <ul className="space-y-5 min-w-0">
                  {LEFT_NOTES.map((note) => (
                    <NoteItem key={note} text={note} />
                  ))}
                </ul>
                <ul className="space-y-5 min-w-0">
                  {RIGHT_NOTES.map((note) => (
                    <NoteItem key={note} text={note} />
                  ))}
                </ul>
              </div>
            </ScrubStagger>
          </FadeUpInView>

          {/* CTA */}
          <div className="mt-10 text-center">
            <FadeUpInView as="p" delay={0.14} className="mb-4 text-lg text-brand-secondary font-primary">
              Still have questions?
            </FadeUpInView>
            <FadeUpInView variant="button" delay={0.22}>
              <a
                href="#contact"
                className="inline-flex px-6 mx-auto lg:px-14 btn-primary"
              >
                Contact Us
              </a>
            </FadeUpInView>
          </div>
        </div>
      </div>
    </section>
  );
}
