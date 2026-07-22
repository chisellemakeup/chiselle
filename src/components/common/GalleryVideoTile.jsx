import { useEffect, useRef, useState } from "react";

/**
 * Portrait gallery video: lazy-loaded src, custom play/pause only (no native controls).
 */
export default function GalleryVideoTile({ src, className = "", onOpen }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          return;
        }
        const video = videoRef.current;
        if (video && !video.paused) video.pause();
        setIsPlaying(false);
      },
      { rootMargin: "120px", threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-sm shadow-xl bg-black/5 ${className}`}
    >
  <video
  ref={videoRef}
  className="block w-full aspect-[9/16] object-cover md:object-contain"
  playsInline
  preload="metadata"              
 src={inView ? `${src}#t=0.001` : undefined} 
  poster={`${src}#t=0.001`}         
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
  onEnded={() => setIsPlaying(false)}
   />

      {onOpen ? (
        <button
          type="button"
          onClick={onOpen}
          className="flex absolute top-2 right-2 z-10 justify-center items-center w-8 h-8 rounded-full border-0 shadow-md backdrop-blur-sm bg-white/90 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Open video in fullscreen"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-brand-dark"
            aria-hidden
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </button>
      ) : null}

      <button
        type="button"
        onClick={togglePlay}
        className="flex absolute inset-0 justify-center items-center border-0 bg-transparent cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <span
          className={`inline-flex justify-center items-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm bg-white/90 transition-opacity ${
            isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
          }`}
        >
          {isPlaying ? (
            <span className="flex gap-1" aria-hidden>
              <span className="block w-[3px] h-4 bg-brand-dark" />
              <span className="block w-[3px] h-4 bg-brand-dark" />
            </span>
          ) : (
            <span
              className="ml-0.5 inline-block w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-brand-dark"
              aria-hidden
            />
          )}
        </span>
      </button>
    </div>
  );
}
