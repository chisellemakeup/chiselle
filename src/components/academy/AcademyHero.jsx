import FadeUpInView from "../common/FadeUpInView";
import { publicAssetUrl } from "../../config/assets";

const bannerImg = publicAssetUrl("chiselle-academy-bg-img.png");

export default function AcademyHero() {
  return (
    <section className="overflow-hidden relative text-white flex items-center justify-center h-[560px] md:h-[460px]">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative px-4 py-20 mx-auto text-center md:py-28 lg:py-32">
        <FadeUpInView
          as="h1"
          playOnMount
          delay={0}
          className="mb-4 font-script text-[28px] lg:text-[42px] lg:leading-[48px] leading-snug tracking-[0.02em]"
        >
          Chiselle Academy is for you.
        </FadeUpInView>
        <FadeUpInView
          as="p"
          playOnMount
          delay={0.2}
          className="mx-auto max-w-3xl text-sm font-light md:text-base font-primary"
        >
          No bluff. No Instagram jargon. Just honest learning, real exposure,
          and makeup mentorship that prepares you for the industry as it truly
          is.
        </FadeUpInView>
      </div>
    </section>
  );
}

