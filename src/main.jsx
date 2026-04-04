import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.jsx";
import About from "./About.jsx";
import MakeupByNowshiba from "./MakeupByNowshiba.jsx";
import ChiselleCrew from "./ChiselleCrew.jsx";
import GalleryPage from "./GalleryPage.jsx";
import AcademyPage from "./AcademyPage.jsx";
import FaqPage from "./FaqPage.jsx";
import ContactPage from "./ContactPage.jsx";
import BlogsPage from "./BlogsPage.jsx";
import BlogsInnerPage from "./BlogsInnerPage.jsx";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.15,
  smoothWheel: true,
  smoothTouch: false,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    lenis.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/makeup-by-nowshiba" element={<MakeupByNowshiba />} />
        <Route path="/chiselle-crew" element={<ChiselleCrew />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogsInnerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
