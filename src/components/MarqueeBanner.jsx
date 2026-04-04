import { MARQUEE_ITEMS } from "../data/content";

const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function MarqueeBanner() {
  return (
    <div className="overflow-hidden py-3 select-none lg:py-5 bg-brand-primary">
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
    </div>
  );
}
