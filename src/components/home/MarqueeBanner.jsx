import { MARQUEE_ITEMS } from "../../data/content";
import FadeUpInView from "../common/FadeUpInView";
import { useHomeIntro } from "./HomePageBoot";

const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function MarqueeBanner() {
  const { introReady } = useHomeIntro();

  return (
    <FadeUpInView
      as="div"
      variant="text"
      playOnMount
      mountReady={introReady}
      delay={0.88}
      blurPx={8}
      skewFrom={1}
      clipReveal
      className="overflow-hidden py-3 select-none will-change-transform lg:py-5 bg-brand-primary"
    >
      <div className="flex w-max whitespace-nowrap animate-[marquee_16s_linear_infinite] lg:animate-marquee">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex gap-6 items-center px-6 text-sm text-white shrink-0 lg:text-lg font-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </FadeUpInView>
  );
}
