export default function AboutProcess() {
  const steps = [
    {
      label: "01",
      title: "DISCOVERY &amp; CONCEPT",
      text: "We understand your events, outfits, comfort with makeup, and references to build a look that feels aligned with you.",
    },
    {
      label: "02",
      title: "DESIGN &amp; EXECUTION",
      text: "Skin prep, product selection, and application are all personalised to your skin, features, and how long your events run.",
    },
    {
      label: "03",
      title: "FINAL TOUCH &amp; SUPPORT",
      text: "We stay till the very end of your slot to make sure you feel secure, set, and fully ready before you walk out.",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-[#fff7f3]">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs md:text-sm tracking-[0.3em] uppercase text-brand-secondary font-primary">
            WHAT TO EXPECT
          </p>
          <h2 className="mb-4 font-secondary text-[1.7rem] md:text-[2.1rem] leading-snug tracking-[0.05em] uppercase text-brand-primary">
            YOUR CHISELLE BRIDAL EXPERIENCE
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.label}
              className="border-2 border-brand-secondary p-[2px] rounded-sm bg-white"
            >
              <div className="h-full border border-brand-secondary px-6 py-7 bg-white/95">
                <span className="text-xs tracking-[0.3em] uppercase text-brand-secondary font-primary">
                  {step.label}
                </span>
                <h3 className="mt-3 mb-3 font-secondary text-[1.1rem] md:text-[1.3rem] leading-snug tracking-[0.06em] uppercase text-brand-primary">
                  <span dangerouslySetInnerHTML={{ __html: step.title }} />
                </h3>
                <p className="text-sm md:text-base font-light leading-relaxed text-brand-secondary font-primary">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

