import { srcAssetUrl } from "../../config/assets";
import FadeUpInView from "../common/FadeUpInView";

const bgTexture = srcAssetUrl("bg-texture-5.svg");

export default function ServicePageAcademy({ content }) {
  if (!content) return null;

  const academyBg = content.image?.src
    ? srcAssetUrl(content.image.src)
    : null;

  return (
    <section className="overflow-hidden relative py-32">

      {/* Background image */}
      <div className="absolute inset-0">
        {academyBg ? (
          <img
            src={academyBg}
            alt={content.image?.alt || ""}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-brand-secondary" />
        )}
      </div>

      {/* Content */}
      <div className="container relative mx-auto max-w-4xl text-center text-white">

        {/* Label */}
        <FadeUpInView
          as="p"
          scrub={true}
          delay={0.02}
          className="mb-5 text-xs md:text-sm text-white uppercase font-primary"
        >
          {content.label}
        </FadeUpInView>

        {/* Heading */}
        <FadeUpInView
          as="h2"
          scrub={true}
          delay={0.1}
          className="mb-6 font-secondary text-[2.1rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-white uppercase"
        >
          {content.title.first}

          <br className="hidden md:block" />

          {content.title.second}
        </FadeUpInView>

        {/* Description */}
        <FadeUpInView
          as="p"
          scrub={true}
          delay={0.18}
          className="mb-10 text-base font-light leading-relaxed text-white font-primary"
        >
          {content.description}
        </FadeUpInView>

        {/* Button */}
        <FadeUpInView
          as="div"
          scrub={true}
          className="text-center"
          variant="button"
          delay={0.24}
        >
          <a
            href={content.button.href}
            className="bg-white btn-primary text-brand-primary hover:bg-brand-light"
          >
            {content.button.text}
          </a>
        </FadeUpInView>

      </div>
    </section>
  );
}