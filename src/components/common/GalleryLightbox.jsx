import { useEffect, useCallback, useRef, useState } from "react";

function normalizeItems(images, items) {
  if (items?.length) return items;
  if (images?.length) return images.map((src) => ({ type: "image", src }));
  return [];
}

/**
 * Full-screen gallery viewer (images + portrait videos) with keyboard navigation.
 */
export default function GalleryLightbox({
  images,
  items: itemsProp,
  activeIndex,
  onClose,
  onNavigate,
}) {
  const items = normalizeItems(images, itemsProp);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const open =
    activeIndex !== null &&
    activeIndex !== undefined &&
    activeIndex >= 0 &&
    activeIndex < items.length;

  const current = open ? items[activeIndex] : null;
  const isVideo = current?.type === "video";

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setIsPlaying(false);
  }, [activeIndex, open]);

  useEffect(() => {
    if (!open) {
      const video = videoRef.current;
      if (video) video.pause();
      setIsPlaying(false);
    }
  }, [open]);

  const goPrev = useCallback(() => {
    if (!items.length || activeIndex === null) return;
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [items.length, activeIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (!items.length || activeIndex === null) return;
    onNavigate((activeIndex + 1) % items.length);
  }, [items.length, activeIndex, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, goPrev, goNext]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  if (!open || !current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={isVideo ? "Video preview" : "Image preview"}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85"
        aria-label="Close gallery"
        onClick={onClose}
      />
      <button
        type="button"
        className="absolute top-4 right-4 z-[102] flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 bg-brand-primary/90 text-xl leading-none text-white font-primary hover:bg-brand-primary"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-2 top-1/2 z-[102] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 z-[102] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next"
          >
            ›
          </button>
        </>
      )}
      <div
        className="relative z-[101] max-h-[90vh] max-w-[min(100vw-2rem,1200px)]"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <div className="relative">
            <video
              key={current.src}
              ref={videoRef}
              src={current.src}
              className="max-h-[90vh] w-auto max-w-full object-contain shadow-2xl aspect-[9/16]"
              playsInline
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            <button
              type="button"
              onClick={togglePlay}
              className="flex absolute inset-0 justify-center items-center border-0 bg-transparent cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <span
                className={`inline-flex justify-center items-center w-14 h-14 rounded-full shadow-lg backdrop-blur-sm bg-white/90 transition-opacity ${
                  isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                }`}
              >
                {isPlaying ? (
                  <span className="flex gap-1.5" aria-hidden>
                    <span className="block w-1 h-5 bg-brand-dark" />
                    <span className="block w-1 h-5 bg-brand-dark" />
                  </span>
                ) : (
                  <span
                    className="ml-0.5 inline-block w-0 h-0 border-t-[10px] border-b-[10px] border-l-[14px] border-t-transparent border-b-transparent border-l-brand-dark"
                    aria-hidden
                  />
                )}
              </span>
            </button>
          </div>
        ) : (
          <img
            src={current.src}
            alt=""
            className="max-h-[90vh] w-auto max-w-full object-contain shadow-2xl"
          />
        )}
      </div>
    </div>
  );
}
