import { useState } from "react";
import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";
import AccordionAnswer from "../common/AccordionAnswer";

const FAQ_TABS = [
  {
    id: "right-artist",
    label: "Finding the Right Bridal Makeup Artist",
    items: [
      {
        question:
          "Who is the best bridal makeup artist in Chennai for a natural look?",
        answer:
          "The best bridal makeup artist in Chennai for a natural look is someone who brings out your best features instead of hiding them behind layers. At Chiselle Makeup & Hair, we specialise in minimal, skin-like bridal makeup that photographs beautifully and still looks like you in real life.",
      },
      {
        question: "How do I choose the right bridal makeup artist in Chennai?",
        answer:
          "Look for consistency in their work, real bride reviews, hygiene standards, and whether their style aligns with yours. A good bridal makeup artist will listen to your comfort level, understand your wedding rituals, and customise the look that will suit you.",
      },
      {
        question:
          "What makes Chiselle Makeup & Hair different from other bridal makeup artists in Chennai?",
        answer:
          "Chiselle Makeup and Hair is rooted in natural, timeless bridal makeup. We focus on skin prep, refined techniques, and personalised looks instead of trends that fade. We intentionally do not follow instagram trends or chase virality. Our approach is calm, organised, and bride-centric, so even amidst wedding chaos, you feel confident.",
      },
    ],
  },
  {
    id: "style-aesthetic",
    label: "Bridal Makeup Style & Aesthetic",
    items: [
      {
        question: "What type of bridal makeup is best for a natural look?",
        answer:
          "Natural bridal makeup focuses on even skin, soft eyes, subtle contouring, and balanced lips. The goal is fresh, elegant makeup that complements your features and wedding attire without looking heavy or overdone.",
      },
      {
        question:
          "Can I get minimal bridal makeup if I don't usually wear makeup?",
        answer:
          "Absolutely. Many Chiselle brides rarely wear makeup. We design minimal bridal makeup that feels lightweight, comfortable, and familiar, so you still feel like yourself and most importantly comfortable on your wedding day.",
      },
      {
        question: "How do I know which bridal makeup style suits me best?",
        answer:
          "Your ideal bridal makeup style depends on your skin type, facial features, outfit colours, jewellery, and wedding setting. During consultations or trials, we guide you toward a look that suits you, not just what's trending online.",
      },
    ],
  },
  {
    id: "types-longevity",
    label: "Makeup Types & Longevity",
    items: [
      {
        question:
          "What is the difference between HD bridal makeup and airbrush bridal makeup?",
        answer:
          "HD makeup uses traditional products blended seamlessly for a natural, skin-like finish, while airbrush bridal makeup typically uses a silicone-based formula for ultra-light, long-lasting coverage. Both can look natural when done correctly, and the right choice depends on your skin type, event duration, and comfort. At Chiselle, we skip the airbrush gun and instead use Temptu airbrush foundation blended traditionally to create a lightweight, water-resistant finish that feels comfortable and lasts beautifully in humid climate.",
      },
      {
        question: "Is airbrush bridal makeup suitable for Chennai weather?",
        answer:
          "Yes, airbrush makeup works well in Chennai's humid climate due to its lightweight and long-wear properties. That said, HD makeup can perform just as well when paired with proper skin prep and professional techniques.",
      },
      {
        question: "What bridal makeup works best for South Indian weddings?",
        answer:
          "South Indian bridal makeup needs to balance tradition with longevity. Soft yet defined eyes, well-set base, and sweat-resistant products work best for long rituals, heavy jewellery, and rich silk sarees.",
      },
      {
        question:
          "Will my bridal makeup last all day in hot and humid conditions?",
        answer:
          "Yes. We use professional, climate-appropriate products, strong skin prep, and setting techniques to ensure your bridal makeup stays fresh through ceremonies, emotions, and long hours.",
      },
      {
        question:
          "Will my bridal makeup look good both in photos and real life?",
        answer:
          "That's a priority at Chiselle. Our makeup is designed to look natural in daylight, flattering in close-ups, and well-balanced for photography, without appearing heavy in person.",
      },
    ],
  },
  {
    id: "timelines-prep",
    label: "Timelines, Trials & Preparation",
    items: [
      {
        question: "How early should I book a bridal makeup artist in Chennai?",
        answer:
          "We recommend booking your bridal makeup artist 4–6 months in advance, especially for peak wedding seasons. Popular dates tend to fill up quickly.",
      },
      {
        question: "Is a bridal makeup trial necessary?",
        answer:
          "A bridal makeup trial can be helpful, but it isn't always necessary. Many brides find it difficult to visualise the final look without the actual outfit, jewellery, and hair. At Chiselle, we rely on detailed consultations and reference alignment to ensure your wedding-day makeup feels cohesive and true to you.",
      },
      {
        question: "What happens during a bridal makeup trial?",
        answer:
          "During the trial, we discuss your wedding details, skin concerns, outfit, and preferences. We test makeup styles, products, and finishes to create a look you're completely comfortable with. You can opt in for a hair trial too to get a better idea of the final look.",
      },
      {
        question: "When should I start skincare before my wedding?",
        answer:
          "Ideally, start consistent skincare 6–12 months before your wedding. Healthy skin allows makeup to sit better and last longer.",
      },
    ],
  },
  {
    id: "booking-services",
    label: "Booking, Services & Team",
    items: [
      {
        question: "Who will be doing my makeup on the wedding day?",
        answer:
          "Depending on who you're booking, your makeup will be done either by Nowshiba Shahjahan or a Chiselle Crew artist who are trusted and trained under Nowshiba to deliver the same quality, technique, and Chiselle aesthetic.",
      },
      {
        question: "What is the difference between Chiselle and the Chiselle Crew?",
        answer:
          "Chiselle is led by Nowshiba Shahjahan, while the Chiselle Crew is a team of carefully selected and mentored artists. Crew bookings are ideal for brides who want the Chiselle experience with more date flexibility.",
      },
      {
        question:
          "Do you offer bridal makeup for multiple events and family members?",
        answer:
          "Yes. We offer customised bridal makeup packages for multiple wedding events and also provide makeup and hair services for family members, bridesmaids, and close relatives.",
      },
    ],
  },
  {
    id: "pricing-concerns",
    label: "Pricing & Practical Concerns",
    items: [
      {
        question: "What is the cost of bridal makeup in Chennai?",
        answer:
          "Bridal makeup costs in Chennai vary based on the artist's experience, style of makeup and products used. At Chiselle, pricing reflects professional expertise, premium products, and a personalised experience rather than one-size-fits-all packages.",
      },
      {
        question: "What is included in a professional bridal makeup package?",
        answer:
          "A professional bridal makeup package typically includes skin prep, premium makeup products, bridal hair styling, draping assistance if required and timeline coordination to ensure everything runs smoothly.",
      },
    ],
  },
];

export default function FaqTabs() {
  const [activeTabId, setActiveTabId] = useState(FAQ_TABS[0].id);
  const [openIndex, setOpenIndex] = useState(0);

  const activeTab =
    FAQ_TABS.find((tab) => tab.id === activeTabId) ?? FAQ_TABS[0];
  const items = activeTab.items ?? [];

  const handleTabClick = (id) => {
    setActiveTabId(id);
    setOpenIndex(0);
  };

  return (
    <section className="overflow-hidden relative py-16 bg-white lg:py-24">
      <div className="container px-5 mx-auto lg:px-[60px]">
        <FadeUpInView
          as="h2"
          scrub={0}
          once
          className="mb-10 text-center font-secondary text-xl tracking-[0.12em] text-brand-primary md:text-2xl"
        >
          FREQUENTLY ASKED QUESTIONS
        </FadeUpInView>

        {/* Tabs row */}
        <FadeUpInView
          className="flex gap-3 mb-10 relative overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x"
          variant="button"
        >
          {FAQ_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`px-5 py-3 text-xs rounded-[4px] border font-primary text-nowrap ${
                  isActive
                    ? "bg-brand-primary text-white border-brand-primary"
                    : "bg-[#FFF3EE] text-brand-secondary border-[#2B04051A] hover:bg-[#FFE4DD]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </FadeUpInView>

        {/* FAQ list for active tab */}
        {items.length === 0 ? (
          <p className="py-10 text-sm text-center text-brand-secondary font-primary">
            We&apos;re curating detailed answers for this section. In the
            meantime, feel free to reach out via the contact form if you have a
            specific question.
          </p>
        ) : (
          <ScrubStagger
            variant="card"
            className="border-t border-[#E5D7CF] max-w-4xl mx-auto"
            stagger={0.06}
          >
            {items.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div
                  key={item.question}
                  data-scrub-item
                  className="border-b border-[#E5D7CF] py-5 md:py-6 md:px-5"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex((prev) => (prev === index ? -1 : index))
                    }
                    className="flex gap-4 items-start w-full text-left"
                  >
                    <div className="flex-1">
                    <p
                      className={`mb-2 text-xl font-primary -tracking-[2%] ${
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
              );
            })}
          </ScrubStagger>
        )}
      </div>
    </section>
  );
}
