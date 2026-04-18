import { useLayoutEffect, useRef } from "react";
import { ensureScrollTrigger, gsap } from "../../lib/gsapSetup";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Staggered fade-up on `[data-scrub-item]` children.
 * - Default: scroll-scrubbed sequence.
 * - `sequenceOnEnter`: play one-by-one when the block enters view (time-based, no scrub).
 */
export default function ScrubStagger({
  as: Tag = "div",
  className,
  children,
  selector = "[data-scrub-item]",
  start = "top 88%",
  end = "top 48%",
  y = 34,
  opacityFrom = 0,
  stagger = 0.07,
  scrub = 0.45,
  /** In-view stagger: stronger scale-up for clearer depth */
  scaleFrom = 0.84,
  /** Bottom-weighted origin so items feel anchored as they scale in */
  transformOrigin = "50% 88%",
  /** When true, each item fades up in sequence once (good for cards / grids). */
  sequenceOnEnter = false,
  /** Duration per item when `sequenceOnEnter` (seconds) */
  itemDuration = 0.52,
}) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return undefined;

    ensureScrollTrigger();

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector, root);
      if (!items.length) return;

      gsap.set(items, {
        y,
        opacity: opacityFrom,
        scale: scaleFrom,
        transformOrigin,
        force3D: true,
      });

      if (sequenceOnEnter) {
        gsap.to(items, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: itemDuration,
          ease: "expo.out",
          stagger: {
            each: stagger,
            from: "start",
          },
          scrollTrigger: {
            trigger: root,
            start,
            once: true,
            invalidateOnRefresh: true,
          },
        });
        return;
      }

      gsap.to(items, {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "none",
        stagger: {
          each: stagger,
          from: "start",
        },
        scrollTrigger: {
          trigger: root,
          start,
          end,
          scrub: typeof scrub === "number" ? scrub : 1,
          invalidateOnRefresh: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [
    selector,
    start,
    end,
    y,
    opacityFrom,
    stagger,
    scrub,
    scaleFrom,
    transformOrigin,
    sequenceOnEnter,
    itemDuration,
  ]);

  return (
    <Tag ref={rootRef} className={className}>
      {children}
    </Tag>
  );
}
