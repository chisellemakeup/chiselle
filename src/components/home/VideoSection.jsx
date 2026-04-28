import { useEffect, useRef, useState } from "react";
import { srcAssetUrl } from "../../config/assets";

// import videoSrc from "../../assets/home/";
const previewImage = srcAssetUrl("home/home-video-preview.png");
// const VIDEO_SRC = videoSrc;
const VIDEO_SRC = "";	

function getYouTubeVideoId(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      return parsed.pathname.replace("/", "");
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      return parsed.searchParams.get("v") || "";
    }
  } catch {
    return "";
  }

  return "";
}

function isDirectVideoUrl(url) {
  if (!url) return false;
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

function resolveDirectVideoSrc(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url) || url.startsWith("/")) return url;
  if (url.startsWith("./") || url.startsWith("../")) {
    try {
      return new URL(url, import.meta.url).href;
    } catch {
      return "";
    }
  }
  return url;
}

export default function VideoSection() {
  const sectionRef = useRef(null);
  const [pageLoaded, setPageLoaded] = useState(
    document.readyState === "complete",
  );
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
      return undefined;
    }

    function handleLoad() {
      setPageLoaded(true);
    }

    window.addEventListener("load", handleLoad, { once: true });
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: [0.6], rootMargin: "0px" },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const youtubeVideoId = getYouTubeVideoId(VIDEO_SRC);
  const isYouTubeVideo = Boolean(youtubeVideoId);
  const resolvedDirectVideoSrc = resolveDirectVideoSrc(VIDEO_SRC);
  const isDirectVideo = isDirectVideoUrl(resolvedDirectVideoSrc);
  const hasPlayableSource = isYouTubeVideo || isDirectVideo;
  const shouldLoadVideo = hasPlayableSource && pageLoaded && isInView;
  const youtubeEmbedSrc = youtubeVideoId
    ? `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${youtubeVideoId}&controls=1&rel=0`
    : "";

  return (
    <section ref={sectionRef} className="relative pb-10 w-full lg:pb-[60px]">
      <div className="relative container w-full max-w-[1440px] mx-auto">
        <div className="overflow-hidden relative w-full rounded-none lg:rounded-sm">
          {shouldLoadVideo ? (
            isYouTubeVideo ? (
              <iframe
                src={youtubeEmbedSrc}
                title="Bridal experience video"
                className="block w-full h-full aspect-video"
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <video
                src={resolvedDirectVideoSrc}
                className="block object-cover w-full h-full"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={previewImage}
              />
            )
          ) : (
            <img
              src={previewImage}
              alt="Bridal party at the wedding – Chiselle bridal makeup in action"
              className="block object-cover w-full h-full"
              loading="lazy"
              decoding="async"
            />
          )}

          {/* Play button overlay */}
          {!shouldLoadVideo ? (
            <button
              type="button"
              className="flex absolute inset-0 justify-center items-center"
              aria-label="Play bridal experience video"
              disabled={!hasPlayableSource}
            >
              <span className="inline-flex justify-center items-center w-16 h-16 rounded-full shadow-xl backdrop-blur-sm bg-white/85 md:w-20 md:h-20">
                <span className="ml-1 inline-block w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-brand-dark" />
              </span>
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
