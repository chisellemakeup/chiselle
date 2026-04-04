import { useState } from "react";
import { srcAssetUrl } from "../config/assets";
import GalleryLightbox from "./common/GalleryLightbox";
import GalleryImageTile from "./common/GalleryImageTile";

const gallery1 = srcAssetUrl("gallery-img1.png");
const gallery2 = srcAssetUrl("gallery-img2.png");
const gallery3 = srcAssetUrl("gallery-img3.png");
const gallery4 = srcAssetUrl("gallery-img4.png");
const gallery5 = srcAssetUrl("gallery-img5.png");
const gallery6 = srcAssetUrl("gallery-img6.png");
const gallery7 = srcAssetUrl("gallery-img7.png");
const gallery8 = srcAssetUrl("gallery-img8.png");
const bgTexture = srcAssetUrl("bg-texture-5.svg");

const GALLERY_IMAGES = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section
      id="gallery"
      className="overflow-hidden relative py-10 lg:py-24 bg-brand-primary"
    >
      {/* Background texture + stripes */}
      <div
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center lg:mb-14">
          <p className="mb-5 text-sm text-white uppercase font-primary">
            THE CHISELLE TOUCH
          </p>
          <h2 className="mb-6 font-secondary text-[2.1rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-white uppercase">
            LOOKS THAT SPEAK FOR THEMSELVES
          </h2>
        </div>

        {/* Gallery mosaic */}
        {/* Desktop: 4 explicit columns to match reference layout */}
        <div className="hidden gap-4 mx-auto lg:flex">
          {/* Column 1 */}
          <div className="flex flex-col flex-1 gap-4">
            <GalleryImageTile
              src={gallery1}
              onOpen={() => setLightboxIndex(GALLERY_IMAGES.indexOf(gallery1))}
            />
            <GalleryImageTile
              src={gallery5}
              onOpen={() => setLightboxIndex(GALLERY_IMAGES.indexOf(gallery5))}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col flex-1 gap-4">
            <GalleryImageTile
              src={gallery2}
              onOpen={() => setLightboxIndex(GALLERY_IMAGES.indexOf(gallery2))}
            />
            <GalleryImageTile
              src={gallery6}
              onOpen={() => setLightboxIndex(GALLERY_IMAGES.indexOf(gallery6))}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col flex-1 gap-4">
            <GalleryImageTile
              src={gallery3}
              onOpen={() => setLightboxIndex(GALLERY_IMAGES.indexOf(gallery3))}
            />
            <GalleryImageTile
              src={gallery7}
              onOpen={() => setLightboxIndex(GALLERY_IMAGES.indexOf(gallery7))}
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col flex-1 gap-4">
            <GalleryImageTile
              src={gallery4}
              onOpen={() => setLightboxIndex(GALLERY_IMAGES.indexOf(gallery4))}
            />
            <GalleryImageTile
              src={gallery8}
              onOpen={() => setLightboxIndex(GALLERY_IMAGES.indexOf(gallery8))}
            />
          </div>
        </div>

        {/* Mobile / tablet: simple responsive grid */}
        <div className="grid grid-cols-2 gap-4 mx-auto max-w-5xl sm:grid-cols-3 lg:hidden">
          {GALLERY_IMAGES.map((src, idx) => (
            <GalleryImageTile
              key={src}
              src={src}
              className="h-[180px]"
              onOpen={() => setLightboxIndex(idx)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#gallery"
            className="bg-white btn-primary text-brand-primary hover:bg-brand-light"
          >
            VIEW FULL GALLERY
          </a>
        </div>

        <GalleryLightbox
          images={GALLERY_IMAGES}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </div>
    </section>
  );
}
