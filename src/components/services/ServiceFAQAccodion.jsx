import { useState } from "react";
import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";
import AccordionAnswer from "../common/AccordionAnswer";

export default function ServiceFAQAccordion({
  title = "Frequently Asked Questions",
  faq = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq.length) return null;

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <section className="relative py-16 bg-white lg:py-24">
      <div className="container px-6 mx-auto max-w-4xl lg:px-16">
        {/* FAQ Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-left md:text-center">
          <FadeUpInView
            as="h3"
            variant="text"
            scrub={false}
            delay={0.1}
            className="mb-4 font-secondary text-[28px] md:text-[32px] lg:text-[42px] leading-tight tracking-[2%] text-brand-primary uppercase"
          >
            {title}
          </FadeUpInView>
        </div>

        {/* FAQ Items */}
        <div className="border-t border-[#E5D7CF]">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrubStagger
                key={`faq-${index}`}
                variant="text"
                className="block border-b border-[#E5D7CF]"
                stagger={0.06}
              >
                <div data-scrub-item className="py-5 md:py-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggleFAQ(index)}
                    className="flex gap-4 items-start w-full text-left"
                  >
                    {/* Question + Answer */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`mb-2 text-base font-primary -tracking-[2%] ${
                          isOpen ? "text-brand-primary" : "text-brand-secondary"
                        }`}
                      >
                        {item.question}
                      </h3>

                      <AccordionAnswer
                        isOpen={isOpen}
                        className="mt-2 text-base font-light leading-relaxed text-brand-secondary font-primary"
                      >
                        <p id={`faq-answer-${index}`}>{item.answer}</p>
                      </AccordionAnswer>
                    </div>

                    {/* Plus / Close Icon */}
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
      </div>
    </section>
  );
}
