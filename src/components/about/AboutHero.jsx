import FadeUpInView from "../common/FadeUpInView";
import { publicAssetUrl } from "../../config/assets";

const aboutBannerImg = publicAssetUrl("about-banner-img.png");

export default function AboutHero() {
  return (
    <section className="overflow-hidden relative text-white">
      <div className="absolute inset-0">
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-full"
          style={{
            backgroundImage: `url(${aboutBannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div className="container relative px-4 mx-auto text-center py-32">
        <FadeUpInView
          as="h1"
          variant="text"
          playOnMount
          delay={0}
          className="mb-4 font-secondary text-[28px] lg:text-[42px] lg:leading-[48px] leading-snug tracking-[0.08em] uppercase"
        >
          Founded and led by Nowshiba Shajahan,{" "}
          <br className="hidden md:block" /> Chiselle is more than
          <br className="hidden md:block" /> a{" "}
          <span className="capitalize font-script lg:leading-[60px]">
            Bridal makeup{" "}
          </span>{" "}
          brand
        </FadeUpInView>
        <FadeUpInView
          as="p"
          variant="text"
          playOnMount
          delay={0.22}
          className="mx-auto max-w-xl text-sm font-light md:text-base font-primary"
        >
          We focus on clean, real-skin finishes, thoughtful detailing, and a
          level of care that keeps you comfortable through even the longest
          ceremonies.
        </FadeUpInView>
      </div>
    </section>
  );
}
