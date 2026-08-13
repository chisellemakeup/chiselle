import { useState } from "react";
import FadeUpInView from "../common/FadeUpInView";

export default function BlogFAQAccordion({ faq = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faq.length) return null;

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="mx-auto mt-16 max-w-5xl">
      <FadeUpInView
        as="h3"
        variant="text"
        scrub={false}
        className="mb-8 font-primary text-[28px] md:text-[36px] lg:text-[42px] text-brand-primary"
      >
        Frequently Asked Questions
      </FadeUpInView>

      <div className="border-t border-[#E5D7CF]">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={`faq-${index}`}
              className="border-b border-[#E5D7CF]"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <h3 className="font-primary text-base md:text-lg text-brand-primary">
                  {item.question}
                </h3>

                <span
                  className={`shrink-0 text-2xl transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 pr-10 text-sm leading-relaxed md:text-base text-brand-secondary font-primary">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}