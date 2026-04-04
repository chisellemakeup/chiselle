import { createContext, useContext, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensureScrollTrigger } from "../../lib/gsapSetup";

const HomeIntroContext = createContext({ introReady: true });

export function useHomeIntro() {
  return useContext(HomeIntroContext);
}

/**
 * Home route only: full-screen loader until window `load`, then fade out and set `introReady`.
 */
export function HomeBootProvider({ children }) {
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    const minMs = 780;
    const started = Date.now();
    let cancelled = false;

    const go = () => {
      if (cancelled) return;
      const wait = Math.max(0, minMs - (Date.now() - started));
      setTimeout(() => {
        if (cancelled) return;
        setPhase("exiting");
        setTimeout(() => {
          if (!cancelled) setPhase("ready");
        }, 540);
      }, wait);
    };

    if (document.readyState === "complete") {
      go();
    } else {
      window.addEventListener("load", go, { once: true });
    }

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (phase !== "ready") {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      ensureScrollTrigger();
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [phase]);

  const introReady = phase === "ready";

  return (
    <HomeIntroContext.Provider value={{ introReady }}>
      {phase !== "ready" && (
        <div
          className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 bg-[#FFF3EE] transition-opacity duration-[520ms] ease-out ${
            phase === "exiting" ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          aria-busy="true"
          aria-label="Loading"
        >
          <div
            className="h-12 w-12 rounded-full border-2 border-brand-primary border-t-transparent motion-safe:animate-spin"
            role="presentation"
          />
          <p className="font-script text-2xl tracking-wide text-brand-primary md:text-3xl">
            Chiselle
          </p>
        </div>
      )}
      {children}
    </HomeIntroContext.Provider>
  );
}
