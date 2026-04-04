/**
 * Same visual as before (rounded, shadow, cover) — optional click opens lightbox.
 */
export default function GalleryImageTile({ src, className = "", onOpen }) {
  const shellClass = `overflow-hidden rounded-sm shadow-xl ${className}`;

  if (onOpen) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className={`${shellClass} block w-full border-0 bg-transparent p-0 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
      >
        <img
          src={src}
          alt=""
          className="object-cover w-full h-full pointer-events-none"
        />
      </button>
    );
  }

  return (
    <div className={shellClass}>
      <img src={src} alt="" className="object-cover w-full h-full" />
    </div>
  );
}
