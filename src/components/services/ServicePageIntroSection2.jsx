import FadeUpInView from "../common/FadeUpInView";

export default function ServicePageIntroSection2({ content }) {
  if (!content) return null;

  return (
    <section className="relative py-10 md:py-16 bg-white lg:py-24">
      <div className="container px-5 mx-auto lg:px-12">

        <div className="flex flex-col gap-5 lg:gap-10 lg:flex-row lg:items-start">

          {/* Left heading */}
          <div className="lg:w-[50%]">
            <FadeUpInView
              as="h2"
              variant="text"
              scrub={true}
              className="font-secondary text-[1.6rem] md:text-[2rem] lg:text-[42px] leading-tight tracking-[2%] text-left text-brand-primary uppercase"
            >
              {content.title}
            </FadeUpInView>
          </div>

          {/* Right copy */}
          <div className="lg:w-[50%] max-w-2xl">
            <div className="space-y-4 text-base font-light leading-relaxed md:text-lg text-brand-secondary font-primary">

              {content.paragraphs.map((paragraph, index) => (
                <FadeUpInView
                  key={index}
                  as="p"
                  scrub={true}
                  delay={0.1 + index * 0.04}
                >
                  {paragraph}
                </FadeUpInView>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}