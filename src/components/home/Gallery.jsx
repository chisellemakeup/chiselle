import { useState } from "react";
import { srcAssetUrl } from "../../config/assets";
import FadeUpInView from "../common/FadeUpInView";
import FadeUpLines from "../common/FadeUpLines";
import ScrubStagger from "../common/ScrubStagger";
import GalleryLightbox from "../common/GalleryLightbox";
import GalleryImageTile from "../common/GalleryImageTile";

const gallery1 = srcAssetUrl("home/gallery-img1.png");
const gallery2 = srcAssetUrl("home/gallery-img2.png");
const gallery3 = srcAssetUrl("home/gallery-img3.png");
const gallery4 = srcAssetUrl("home/gallery-img4.png");
const gallery5 = srcAssetUrl("home/gallery-img5.png");
const gallery6 = srcAssetUrl("home/gallery-img6.png");
const gallery7 = srcAssetUrl("home/gallery-img7.png");
const gallery8 = srcAssetUrl("home/gallery-img8.png");
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

/** Round-robin into columns for masonry-style desktop layout (max 4 columns). */
function splitIntoColumns(items, maxColumns = 4) {
  const n = items.length;
  if (n === 0) return [];
  const columnCount = Math.min(maxColumns, n);
  const cols = Array.from({ length: columnCount }, () => []);
  items.forEach((item, idx) => {
    cols[idx % columnCount].push(item);
  });
  return cols;
}

export default function Gallery({
  sectionLabel,
  sectionTitle = "LOOKS THAT SPEAK FOR THEMSELVES",
  sectionDescription,
  images,
  ctaLabel = "VIEW FULL GALLERY",
  hideCta = false,
  hideSectionLabel = false,
}) {
  const visibleImages = images && images.length ? images : GALLERY_IMAGES;
  const desktopColumns = splitIntoColumns(visibleImages, 4);
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
          {!hideSectionLabel && sectionLabel && (
            <FadeUpInView
              as="p"
              scrub={0}
              delay={0.02}
              className="mb-5 text-xs md:text-sm text-white uppercase font-primary"
            >
              {sectionLabel}
            </FadeUpInView>
          )}
          <FadeUpLines
            as="h2"
            className="mb-4 md:mb-6 font-secondary text-[28px] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-white uppercase"
            fromEnd
          >
            {sectionTitle}
          </FadeUpLines>
          {sectionDescription && (
            <FadeUpLines
              as="p"
              className="mx-auto max-w-lg text-sm leading-relaxed md:text-base font-primary text-white/90"
              fromEnd
            >
              {sectionDescription}
            </FadeUpLines>
          )}
        </div>

        <ScrubStagger
          variant="card"
          className="grid grid-cols-2 gap-4 mx-auto max-w-5xl sm:grid-cols-3 lg:hidden"
          stagger={0.08}
          sequenceOnEnter
          itemDuration={0.38}
          start="top 88%"
        >
          {visibleImages.map((src, idx) => (
            <div key={`${src}-${idx}`} data-scrub-item>
              <GalleryImageTile
                src={src}
                className="h-[180px]"
                onOpen={() => setLightboxIndex(idx)}
              />
            </div>
          ))}
        </ScrubStagger>

        <ScrubStagger
          variant="card"
          className="hidden gap-4 mx-auto lg:flex"
          stagger={0.08}
          sequenceOnEnter
          itemDuration={0.38}
          start="top 88%"
        >
          {desktopColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col flex-1 gap-4">
              {col.map((src, rowIdx) => (
                <div key={`${String(src)}-${colIdx}-${rowIdx}`} data-scrub-item>
                  <GalleryImageTile
                    src={src}
                    onOpen={() =>
                      setLightboxIndex(visibleImages.indexOf(src))
                    }
                  />
                </div>
              ))}
            </div>
          ))}
        </ScrubStagger>

        {!hideCta && (
          <FadeUpInView
            as="div"
            className="mt-12 text-center"
            variant="button"
            scrub={0}
            delay={0.22}
          >
            <a
              href="/gallery"
              className="bg-white btn-primary text-brand-primary hover:bg-brand-light"
            >
              {ctaLabel}
            </a>
          </FadeUpInView>
        )}

        <GalleryLightbox
          images={visibleImages}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </div>
    </section>
  );
}
