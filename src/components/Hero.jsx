import { HERO_MARQUEE_IMAGES } from "../data/content";
import { srcAssetUrl } from "../config/assets";

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
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute lg:top-36 left-0 inset-0 opacity-90 pointer-events-none z-40"
        style={{
          backgroundImage: `url(${bgHeroPattern})`,
          backgroundSize: "250px",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="container flex flex-col lg:flex-row lg:items-center overflow-hidden relative z-10 gap-10 min-h-screen lg:gap-32">
        <div className="relative w-full lg:w-[65%] flex items-center lg:pt-20">
          <div className="relative z-10 pt-32 pb-10 md:pt-32 md:pb-20">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-brand-primary tracking-[0.02em] !leading-[1.2] font-light mb-6 text-left">
              <span className="font-normal font-secondary">LUXURY </span>
              <span className="font-script text-brand-primary">
                Bridal Makeup <span className="!font-secondary">&</span> Hair
              </span>
              <span className="font-normal font-secondary">
                THAT STILL FEELS <br /> LIKE YOU
              </span>
            </h1>

            <p className="mb-8 text-base font-light leading-relaxed font-primary text-brand-secondary lg:text-lg">
              Personalised bridal makeup and hair services crafted with
              experience, intention, and meticulous attention to detail. <br />{" "}
              <br /> Based in Chennai, Coimbatore, Available worldwide.
            </p>

            <a href="#contact" className="inline-block btn-primary">
              ENQUIRE AVAILABILITY
            </a>
          </div>
        </div>

        <div className="relative w-full lg:w-[35%] h-[50vh] md:h-[70vh] min-h-[420px] lg:h-screen flex gap-5 overflow-hidden bg-brand-cream/30">
          <div className="flex overflow-hidden flex-col flex-1 gap-2">
            <VerticalMarqueeTrack images={topImages} direction="up" />
          </div>
          <div className="flex overflow-hidden flex-col flex-1 gap-2">
            <VerticalMarqueeTrack images={bottomImages} direction="down" />
          </div>
        </div>
      </div>
    </section>
  );
}
