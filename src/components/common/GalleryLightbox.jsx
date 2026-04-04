import { useEffect, useCallback } from "react";

/**
 * Full-screen image viewer with keyboard and backdrop close.
 * Does not alter gallery layout — only overlays when open.
 */
export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}) {
  const open =
    activeIndex !== null &&
    activeIndex !== undefined &&
    activeIndex >= 0 &&
    activeIndex < images.length;

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const goPrev = useCallback(() => {
    if (!images.length || activeIndex === null) return;
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [images.length, activeIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (!images.length || activeIndex === null) return;
    onNavigate((activeIndex + 1) % images.length);
  }, [images.length, activeIndex, onNavigate]);

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

  if (!open) return null;

  const src = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
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
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-2 top-1/2 z-[102] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
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
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}
      <div
        className="relative z-[101] max-h-[90vh] max-w-[min(100vw-2rem,1200px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt=""
          className="max-h-[90vh] w-auto max-w-full object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}
