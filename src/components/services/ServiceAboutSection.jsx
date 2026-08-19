import { useEffect, useMemo, useRef } from "react";

import { SERVICE_PAGE_ABOUT_DATA } from "../../data/content";
import { srcAssetUrl } from "../../config/assets";

import FadeUpInView from "../common/FadeUpInView";
import FadeUpLines from "../common/FadeUpLines";
import ScrubStagger from "../common/ScrubStagger";

import {
  ensureScrollTrigger,
  gsap,
  ScrollTrigger,
} from "../../lib/gsapSetup";

const bgTexture = srcAssetUrl("bg-texture-2.svg");

export default function About({ content = SERVICE_PAGE_ABOUT_DATA }) {
  const sectionRef = useRef(null);
  const linePathRef = useRef(null);

  /*
   * Convert:
   * "10+" → target: 10, suffix: "+"
   * "500+" → target: 500, suffix: "+"
   */
  const parsedStats = useMemo(
    () =>
      content.stats.map((s) => {
        const match = String(s.value).match(/^(\d+)(.*)$/);

        const target = match ? Number(match[1]) : 0;
        const suffix = match ? match[2] : "";

        return {
          ...s,
          target,
          suffix,
        };
      }),
    [content.stats]
  );

  useEffect(() => {
    const section = sectionRef.current;
    const path = linePathRef.current;

    if (!section || !path || typeof window === "undefined") {
      return undefined;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    ensureScrollTrigger();

    const ctx = gsap.context(() => {
      const pathLength = path.getTotalLength();

      const drawLength =
        window.innerWidth >= 1024
          ? 4000
          : pathLength;

      gsap.set(path, {
        strokeDasharray: drawLength,
        strokeDashoffset: drawLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 3.2,
        ease: "power1.out",

        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          once: true,
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });
    }, section);

    const onResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  const aboutImage = content.image?.src
    ? srcAssetUrl(content.image.src)
    : null;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="overflow-hidden relative py-16 lg:py-[60px]"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "250px",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
        }}
      />

      {/* Decorative Line */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 700 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            ref={linePathRef}
            d="M-80 620 C 10 590, 80 565, 140 535 C 210 500, 265 505, 150 455 C 90 428, 100 403, 182 387 C 255 372, 320 368, 385 355 C 470 336, 548 292, 590 242 C 630 196, 705 159, 785 136 C 895 104, 1015 94, 1125 74 C 1250 52, 1325 40, 1440 6"
            fill="none"
            stroke="#D9BFA6"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Section Heading */}
      <div className="container relative z-10 pb-12 mx-auto text-center lg:pb-20">
        <FadeUpInView
          as="p"
          scrub={0}
          className="mb-6 text-[14px] leading-[20px] text-secondary uppercase font-primary"
        >
          {content.label}
        </FadeUpInView>

        <FadeUpLines
          as="h2"
          className="md:mb-8 font-secondary text-[1.75rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase"
          fromEnd
        >
          {content.title.first}

          <br className="hidden lg:block" />

          {content.title.second}
        </FadeUpLines>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container grid items-center gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">

        {/* Image */}
        <div className="flex order-1 justify-center">
          <FadeUpInView
            as="div"
            variant="card"
            className="relative max-w-sm lg:max-w-md"
          >
            <div className="overflow-hidden relative">
              {aboutImage ? (
                <img
                  src={aboutImage}
                  alt={content.image.alt}
                  className="block object-cover w-full h-auto"
                />
              ) : (
                <div className="block w-full h-[420px] bg-gradient-to-b from-brand-gold/60 to-brand-cream" />
              )}
            </div>
          </FadeUpInView>
        </div>

        {/* Text */}
        <ScrubStagger
          as="div"
          variant="text"
          className="order-2 max-w-xl lg:ml-6"
          stagger={0.07}
          scrub={0.45}
        >

          {/* Paragraphs */}
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              data-scrub-item
              className={`text-base font-light leading-relaxed font-primary text-brand-secondary ${
                index === content.paragraphs.length - 1
                  ? "mb-8"
                  : "mb-4"
              }`}
            >
              {paragraph}
            </p>
          ))}

          {/* Stats */}
          <div
            data-scrub-item
            className="flex flex-wrap gap-8 mb-8 text-brand-primary"
          >
            {parsedStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-primary md:text-[32px] leading-10">
                  {stat.target}
                  {stat.suffix}
                </div>

                <div className="mt-1 text-sm font-primary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Artist */}
          <div
            data-scrub-item
            className="space-y-2"
          >
            <p className="text-3xl font-script md:text-4xl text-brand-primary">
              {content.artist.name}
            </p>

            <p className="text-base text-brand-primary font-primary">
              {content.artist.role}
            </p>
          </div>

          {/* Button */}
          <div data-scrub-item>
            <a
              href={content.button.href}
              className="inline-block mt-6 btn-primary"
            >
              {content.button.text}
            </a>
          </div>

        </ScrubStagger>
      </div>
    </section>
  );
}