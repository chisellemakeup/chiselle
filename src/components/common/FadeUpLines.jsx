import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import { ensureScrollTrigger, gsap } from "../../lib/gsapSetup";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Line-by-line reveal with scroll scrub (bottom line leads when `fromEnd` is true).
 * Pass `playOnMount` for hero / page-open intros (time-based, no ScrollTrigger).
 */
export default function FadeUpLines({
  as: Tag = "div",
  className,
  children,
  scrub = 0.45,
  start = "top 92%",
  end = "top 58%",
  staggerEach = 0.07,
  /** When true, stagger from the last line upward */
  fromEnd = true,
  /** Optional fixed offset (px); if omitted, mount vs scroll use `yMount` / `yScroll`. */
  y,
  yMount = 22,
  yScroll = 38,
  /** Delay before line tween starts (use with `playOnMount` for hero sequencing) */
  delay = 0,
  /** Line animation duration when `playOnMount` (scroll mode uses scrub, not this) */
  lineDuration = 0.55,
  playOnMount = false,
  /** When using `playOnMount`, wait until true before playing (e.g. after page loader) */
  mountReady = true,
  ease = "expo.out",
  /** Blur (px) per line — mount / scroll one-shot only; not used with scrub. */
  blurPx = 0,
  /** Slight Y variance between lines (px) for a more organic stagger */
  yJitter = 4,
  /** Starting scale per line when scroll-driven (`playOnMount` off). Hero copy ignores this. */
  scaleScroll = 0.88,
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    const lineY = y ?? (playOnMount ? yMount : yScroll);

    const split = new SplitType(el, {
      types: ["lines"],
    });

    const lines = split.lines;
    if (!lines?.length) {
      split.revert();
      return undefined;
    }

    const narrow =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 640px)").matches;
    const resolvedBlur =
      blurPx > 0 && playOnMount
        ? narrow
          ? blurPx * 0.55
          : blurPx
        : 0;

    if (playOnMount) {
      const ctx = gsap.context(() => {
        lines.forEach((line, i) => {
          const jitter =
            yJitter > 0 ? (i % 2 === 0 ? yJitter : -yJitter * 0.6) : 0;
          const from = {
            y: lineY + jitter,
            opacity: 0,
            force3D: true,
          };
          if (resolvedBlur > 0) {
            from.filter = `blur(${resolvedBlur}px)`;
          }
          gsap.set(line, from);
        });
        if (!mountReady) return;
        gsap.to(lines, {
          y: 0,
          opacity: 1,
          filter: resolvedBlur > 0 ? "blur(0px)" : "none",
          duration: lineDuration,
          delay,
          ease,
          stagger: {
            each: staggerEach,
            from: fromEnd ? "end" : "start",
          },
        });
      }, el);
      return () => {
        ctx.revert();
        split.revert();
      };
    }

    ensureScrollTrigger();

    const ctx = gsap.context(() => {
      gsap.set(lines, {
        y: lineY,
        opacity: 0,
        scale: scaleScroll,
        transformOrigin: "50% 90%",
        force3D: true,
      });

      gsap.to(lines, {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "none",
        stagger: {
          each: staggerEach,
          from: fromEnd ? "end" : "start",
        },
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: typeof scrub === "number" ? scrub : 1,
          invalidateOnRefresh: true,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [
    scrub,
    start,
    end,
    staggerEach,
    fromEnd,
    y,
    yMount,
    yScroll,
    delay,
    lineDuration,
    playOnMount,
    mountReady,
    ease,
    blurPx,
    yJitter,
    scaleScroll,
  ]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
