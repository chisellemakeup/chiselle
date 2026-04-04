import { useState } from "react";
import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";
import AccordionAnswer from "../common/AccordionAnswer";

const FAQ_ITEMS = [
  {
    question:
      "What is the difference between HD bridal makeup and airbrush bridal makeup?",
    answer:
      "HD makeup uses traditional products blended seamlessly for a natural, skin-like finish, while airbrush bridal makeup uses a silicone-based formula for ultra-light, long-lasting coverage. Both can look natural when done correctly, and the right choice depends on your skin type, event duration, and comfort. At Chiselle, we skip the airbrush gun and instead use airbrush-finish techniques with products that create a lightweight, water-resistant base that feels comfortable and lasts beautifully in humid climate.",
  },
  {
    question: "Is airbrush bridal makeup suitable for Chennai weather?",
    answer:
      "Yes. Airbrush-style bridal makeup works well in Chennai’s humid climate because of its lightweight feel and long-wear properties. With the right prep, setting, and product layering, HD products can also perform just as well while keeping your skin comfortable through long ceremonies.",
  },
  {
    question: "What bridal makeup works best for South Indian weddings?",
    answer:
      "South Indian bridal makeup needs to balance tradition with longevity. Soft yet defined eyes, a well-set base, and sweat-resistant products work best for long rituals, heavy jewellery, and rich silk sarees. We design each look based on your outfits, lighting, and comfort level with makeup so it feels like you—even in full bridal attire.",
  },
  {
    question: "Will my bridal makeup last all day in hot and humid conditions?",
    answer:
      "Yes. We use professional, climate-appropriate products, strong skin prep, and setting techniques to ensure your bridal makeup stays fresh through ceremonies, emotions, and long hours. We also plan for touch-ups during critical points so you feel secure and camera-ready throughout.",
  },
  {
    question: "Will my bridal makeup look good both in photos and real life?",
    answer:
      "Absolutely. Chiselle’s focus is on a real-skin finish that looks flattering in person and in photos. We balance coverage, texture, and placement so your base looks natural in daylight, soft in close-ups, and beautifully defined under professional cameras—without ever feeling heavy.",
  },
];

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-16 bg-white lg:py-24">
      <div className="container px-6 mx-auto max-w-4xl lg:px-16">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-left md:text-center">
          <FadeUpInView
            as="h2"
            variant="text"
            scrub={false}
            delay={0.1}
            className="mb-4 font-secondary text-[28px] md:text-[32px] lg:text-[42px] leading-tight tracking-[2%] text-brand-primary uppercase"
          >
            FREQUENTLY ASKED QUESTIONS
          </FadeUpInView>
        </div>

        <div className="border-t border-[#E5D7CF]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <ScrubStagger
                key={item.question}
                variant="text"
                className="block border-b border-[#E5D7CF]"
                stagger={0.06}
              >
                <div data-scrub-item className="py-5 md:py-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex((prev) => (prev === index ? -1 : index))
                    }
                    className="flex gap-4 items-start w-full text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <p
                        className={`mb-2 text-base font-primary -tracking-[2%] ${
                          isOpen ? "text-brand-primary" : "text-brand-secondary"
                        }`}
                      >
                        {item.question}
                      </p>
                      <AccordionAnswer
                        isOpen={isOpen}
                        className="mt-2 text-base font-light leading-relaxed text-brand-secondary font-primary"
                      >
                        <p>{item.answer}</p>
                      </AccordionAnswer>
                    </div>

                    <span
                      className="inline-flex shrink-0 items-center justify-center mt-1 w-8 h-8 text-xl leading-none font-sans font-normal text-brand-primary border border-dashed border-[#2B04051A]"
                      aria-hidden="true"
                    >
                      {isOpen ? "\u00D7" : "\u002B"}
                    </span>
                  </button>
                </div>
              </ScrubStagger>
            );
          })}
        </div>

        <FadeUpInView
          as="div"
          className="mt-14 text-center"
          variant="button"
          scrub={false}
          delay={0.2}
        >
          <a href="#contact" className="btn-primary">
            KNOW MORE
          </a>
        </FadeUpInView>
      </div>
    </section>
  );
}
