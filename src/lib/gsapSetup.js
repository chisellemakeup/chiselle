import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Idempotent ScrollTrigger registration (call from any GSAP component). */
export function ensureScrollTrigger() {
  if (typeof window === "undefined") return;
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
