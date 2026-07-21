import { HERO_MARQUEE_IMAGES } from "../../data/content";
import { srcAssetUrl } from "../../config/assets";
import FadeUpInView from "../common/FadeUpInView";
import FadeUpLines from "../common/FadeUpLines";
import { useHomeIntro } from "./HomePageBoot";

const bgHeroPattern = srcAssetUrl("bg-texture-1.png");

const defaultTrackImages = [
  [{ src: null }, { src: null }, { src: null }],
  [{ src: null }, { src: null }, { src: null }],
];

function HeroImageSlot({ src, className }) {
  if (src) {
    return (
      <img
        src={src}
        alt=""
        className={`object-cover w-full h-full ${className}`}
      />
    );
  }
  return (
    <div
      className={`bg-gradient-to-b from-brand-gold/60 to-brand-cream ${className}`}
    />
  );
}

function VerticalMarqueeTrack({ images, direction = "up" }) {
  const list = images.length
    ? images
    : defaultTrackImages[0].map(() => ({ src: null }));
  const animClass =
    direction === "up" ? "animate-marqueeUp" : "animate-marqueeDown";
  const triple = [...list, ...list, ...list];

  return (
    <div className="overflow-hidden flex-1 h-full min-h-0">
      <div className={`flex flex-col flex-shrink-0 gap-5 w-full ${animClass}`}>
        {triple.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full aspect-[3/4] overflow-hidden"
          >
            <HeroImageSlot
              src={item.src || item}
              className="w-full h-full rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { introReady } = useHomeIntro();
  const [topTrack, bottomTrack] = HERO_MARQUEE_IMAGES;
  const topImages =
    topTrack && topTrack.length
      ? topTrack.map((src) => ({ src }))
      : defaultTrackImages[0];
  const bottomImages =
    bottomTrack && bottomTrack.length
      ? bottomTrack.map((src) => ({ src }))
      : defaultTrackImages[1];

  return (
    <section id="home" className="overflow-hidden relative">
      <div
        className="absolute inset-0 left-0 z-40 opacity-90 pointer-events-none lg:top-36"
        style={{
          backgroundImage: `url(${bgHeroPattern})`,
          backgroundSize: "250px",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="container flex overflow-hidden relative z-10 flex-col gap-10 min-h-screen lg:flex-row lg:items-center lg:gap-32">
        <div className="relative w-full lg:w-[65%] flex items-center lg:pt-20">
          <div className="relative z-10 pt-32 md:pt-48 lg:pt-32 lg:pb-20">
            <div className="hidden md:block">
              <h1 className="mb-6 text-left font-serif text-4xl font-light tracking-[0.02em] text-brand-primary !leading-[1.2] md:text-5xl lg:text-[4rem]">
                <FadeUpInView
                  as="span"
                  playOnMount
                  mountReady={introReady}
                  delay={0}
                  blurPx={14}
                  skewFrom={1.8}
                  clipReveal
                  className="block will-change-transform"
                >
                  <span className="font-normal font-secondary">LUXURY</span>
                  <span className="font-script text-brand-primary">
                    Bridal Makeup <span className="!font-secondary">&</span>
                  </span>
                </FadeUpInView>
                <FadeUpInView
                  as="span"
                  playOnMount
                  mountReady={introReady}
                  delay={0.16}
                  blurPx={16}
                  skewFrom={2.2}
                  clipReveal
                  className="block mt-1 will-change-transform md:mt-2"
                >
                  <span className="font-script text-brand-primary">Hair </span>
                  <span className="font-normal font-secondary">
                    THAT STILL FEELS <br className="hidden md:block" /> LIKE YOU
                  </span>
                </FadeUpInView>
              </h1>
            </div>

            <div className="block md:hidden">
              <h1 className="mb-6 text-left font-serif text-4xl font-light tracking-[0.02em] text-brand-primary !leading-[1.2] md:text-5xl lg:text-[4rem]">
                <FadeUpInView
                  as="span"
                  playOnMount
                  mountReady={introReady}
                  delay={0}
                  blurPx={14}
                  skewFrom={1.8}
                  clipReveal
                  className="block will-change-transform"
                >
                  <span className="font-normal font-secondary">LUXURY</span>
                  <span className="font-script text-brand-primary">Bridal</span>
                </FadeUpInView>
                <FadeUpInView
                  as="span"
                  playOnMount
                  mountReady={introReady}
                  delay={0}
                  blurPx={14}
                  skewFrom={1.8}
                  clipReveal
                  className="block will-change-transform"
                >
                  <span className="font-script text-brand-primary">
                    makeup <span className="!font-secondary">&</span> Hair
                  </span>

                  <span className="font-normal font-secondary"> that</span>
                </FadeUpInView>
                <FadeUpInView
                  as="span"
                  playOnMount
                  mountReady={introReady}
                  delay={0.34}
                  blurPx={14}
                  skewFrom={1.8}
                  clipReveal
                  className="block mt-1 will-change-transform md:mt-2"
                >
                  <span className="font-normal font-secondary">
                    Still Feels Like You
                  </span>
                </FadeUpInView>
              </h1>
            </div>

            <FadeUpLines
              as="p"
              playOnMount
              mountReady={introReady}
              delay={0.52}
              staggerEach={0.065}
              lineDuration={0.62}
              blurPx={7}
              yJitter={5}
              y={20}
              className="mb-8 text-base font-light leading-relaxed font-primary text-brand-secondary will-change-transform lg:text-lg"
              fromEnd
            >
              Personalised bridal makeup and hair services crafted with
              experience, intention, and meticulous attention to detail.{" "}
              <br className="hidden md:block" />{" "}
              <br className="hidden md:block" /> Based in Chennai, Coimbatore,
              Available worldwide.
            </FadeUpLines>

            <FadeUpInView
              as="div"
              variant="button"
              playOnMount
              mountReady={introReady}
              delay={0.78}
              blurPx={6}
              skewFrom={0.8}
              clipReveal
              className="will-change-transform"
            >
              <a href="#contact" className="inline-block btn-primary">
                ENQUIRE AVAILABILITY
              </a>
            </FadeUpInView>
          </div>
        </div>

        <FadeUpInView
          as="div"
          playOnMount
          mountReady={introReady}
          delay={0.42}
          blurPx={10}
          skewFrom={1.2}
          variant="text"
          scale={1}
          y={40}
          duration={1.05}
          className="relative flex h-[50vh] min-h-[420px] w-full gap-5 overflow-hidden rounded-t-lg bg-brand-cream/30 will-change-transform md:h-[70vh] lg:h-screen lg:w-[35%] md:rounded-none"
        >
          <div className="flex overflow-hidden flex-col flex-1 gap-2">
            <VerticalMarqueeTrack images={topImages} direction="up" />
          </div>
          <div className="flex overflow-hidden flex-col flex-1 gap-2">
            <VerticalMarqueeTrack images={bottomImages} direction="down" />
          </div>
        </FadeUpInView>
      </div>
    </section>
  );
}
