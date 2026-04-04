import React, { useLayoutEffect, useRef } from "react";
import { ensureScrollTrigger, gsap } from "../../lib/gsapSetup";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** `durationScroll` = in-view one-shot; `durationMount` = hero / playOnMount */
const presets = {
  text: { durationScroll: 0.58, durationMount: 1.12, y: 18, scale: 1 },
  card: { durationScroll: 0.5, durationMount: 0.88, y: 32, scale: 0.985 },
  button: { durationScroll: 0.44, durationMount: 0.78, y: 8, scale: 1 },
};

/**
 * Fade / lift in on scroll (editorial feel — reference: smooth scrub reveals).
 * Default: scroll-scrubbed motion. Pass `scrub={0}` or `scrub={false}` for a one-shot play when entering view.
 * Pass `playOnMount` for intro animations on first paint (e.g. hero) — no ScrollTrigger.
 */
export default function FadeUpInView({
  as = "div",
  className,
  children,
  variant = "text",
  delay = 0,
  duration,
  y,
  scale,
  once = true,
  /** Number = scrub strength; `0` or `false` = animate once on enter (no scrub) */
  scrub,
  /** Narrower range = faster in-view scrub completion */
  start = "top 90%",
  end = "top 58%",
  enabled = true,
  /** Animate once when the page loads (hero); ignores scroll / scrub */
  playOnMount = false,
  /** When using `playOnMount`, wait until true before playing (e.g. after page loader) */
  mountReady = true,
  /** GSAP ease — long deceleration reads more “premium” than power2 */
  ease = "expo.out",
  /** Starting blur (px); skipped for scroll-scrub tweens (perf). */
  blurPx = 0,
  /** Subtle skew (deg), 0 = off */
  skewFrom = 0,
  /** Reveal from bottom with clip-path (mount + scroll one-shot only). */
  clipReveal = false,
}) {
  const elRef = useRef(null);
  const preset = presets[variant] ?? presets.text;
  const resolvedDuration =
    duration ??
    (playOnMount ? preset.durationMount : preset.durationScroll);
  const resolvedY = y ?? preset.y;
  const resolvedScale = scale ?? preset.scale;
  const resolvedScrub =
    scrub === undefined || scrub === null ? 0.45 : scrub;
  const useScrub =
    !playOnMount && resolvedScrub !== 0 && resolvedScrub !== false;

  useLayoutEffect(() => {
    const node = elRef.current;
    if (!node || !enabled) return undefined;
    if (prefersReducedMotion()) {
      gsap.set(node, { clearProps: "all" });
      return undefined;
    }

    const canBlur = blurPx > 0 && !useScrub;
    const narrow =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 640px)").matches;
    const resolvedBlur = canBlur ? (narrow ? blurPx * 0.5 : blurPx) : 0;
    const canClip = clipReveal && !useScrub;

    const fromProps = {
      y: resolvedY,
      opacity: 0,
      scale: resolvedScale,
      skewY: skewFrom,
      transformOrigin: "50% 85%",
      force3D: true,
    };
    if (resolvedBlur > 0) {
      fromProps.filter = `blur(${resolvedBlur}px)`;
    }
    if (canClip) {
      fromProps.clipPath = "inset(100% 0 0 0)";
    }

    const toProps = {
      y: 0,
      opacity: 1,
      scale: 1,
      skewY: 0,
      duration: resolvedDuration,
      delay,
      ease,
      force3D: true,
    };
    if (resolvedBlur > 0) {
      toProps.filter = "blur(0px)";
    }
    if (canClip) {
      toProps.clipPath = "inset(0% 0 0 0)";
    }

    if (playOnMount) {
      const ctx = gsap.context(() => {
        gsap.set(node, fromProps);
        if (!mountReady) return;
        gsap.to(node, toProps);
      }, node);
      return () => ctx.revert();
    }

    ensureScrollTrigger();

    const ctx = gsap.context(() => {
      gsap.set(node, fromProps);

      if (useScrub) {
        gsap.to(node, {
          y: 0,
          opacity: 1,
          scale: 1,
          skewY: 0,
          ease: "none",
          scrollTrigger: {
            trigger: node,
            start,
            end,
            scrub:
              typeof resolvedScrub === "number" ? resolvedScrub : 1,
            invalidateOnRefresh: true,
          },
        });
      } else {
        gsap.to(node, {
          ...toProps,
          scrollTrigger: {
            trigger: node,
            start,
            toggleActions: once ? "play none none none" : "play reverse play reverse",
            once,
            invalidateOnRefresh: true,
          },
        });
      }
    }, node);

    return () => ctx.revert();
  }, [
    enabled,
    delay,
    resolvedDuration,
    resolvedY,
    resolvedScale,
    useScrub,
    resolvedScrub,
    start,
    end,
    once,
    variant,
    playOnMount,
    mountReady,
    ease,
    blurPx,
    skewFrom,
    clipReveal,
  ]);

  return React.createElement(as, { ref: elRef, className }, children);
}
