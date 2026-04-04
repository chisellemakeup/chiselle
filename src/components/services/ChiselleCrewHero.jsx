import FadeUpInView from "../common/FadeUpInView";
import { publicAssetUrl } from "../../config/assets";

const bannerImg = publicAssetUrl("chiselle-crew-hero.png");

export default function ChiselleCrewHero() {
  return (
    <section className="overflow-hidden relative text-white flex items-center justify-center h-[560px] md:h-[460px]">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div className="container relative px-4 py-20 mx-auto text-center md:py-28 lg:py-32">
        <FadeUpInView
          as="h1"
          playOnMount
          delay={0}
          className="mb-4 font-script text-[28px] lg:text-[42px] lg:leading-[48px] leading-snug tracking-[0.02em]"
        >
          The Chiselle Crew
        </FadeUpInView>
        <FadeUpInView
          as="p"
          playOnMount
          delay={0.2}
          className="mx-auto max-w-xl text-sm font-light md:text-base font-primary"
        >
          The Chiselle Crew is a collective of skilled makeup artists trained
          under the expertise of Nowshiba Shajahan. Carefully selected and
          mentored, each artist is trusted to deliver the same attention to
          detail and seamless experience you expect from Chiselle.
        </FadeUpInView>
      </div>
    </section>
  );
}
