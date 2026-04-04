import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensureScrollTrigger } from "../lib/gsapSetup";
import { srcAssetUrl } from "../config/assets";
import FadeUpInView from "./common/FadeUpInView";
import ScrubStagger from "./common/ScrubStagger";
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

const TABS = [
  "Traditional Bridal",
  "Reception / Cocktail Bridal",
  "Christian Bridal",
  "Editorial / Photoshoots Makeup",
  "Celebrity Makeup",
  "Chiselle Crew",
];

// Add images per-tab here. For now, only the first tab is filled.
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

const TAB_IMAGES = {
  "Traditional Bridal": [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ],
  "Reception / Cocktail Bridal": [gallery4],
  "Christian Bridal": [gallery1, gallery2],
  "Editorial / Photoshoots Makeup": [gallery2, gallery3, gallery4],
  "Celebrity Makeup": [gallery1, gallery2, gallery3, gallery4],
  "Chiselle Crew": [gallery1],
};

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = React.useState(TABS[0]);
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  const images = TAB_IMAGES[activeTab] ?? [];
  const desktopColumns = splitIntoColumns(images, 4);

  React.useEffect(() => {
    setLightboxIndex(null);
  }, [activeTab]);

  React.useEffect(() => {
    ensureScrollTrigger();
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [activeTab]);

  return (
    <section className="py-16 md:py-24 bg-[#FFF3EE] relative overflow-hidden">
      <div className="container px-5 lg:px-[60px]">
        {/* Heading */}
        <FadeUpInView className="mb-8" variant="text" playOnMount delay={0}>
          <h1 className="mb-4 font-script text-[28px] md:text-[36px] lg:text-[42px] leading-tight tracking-[0.08em] text-brand-primary capitalize font-medium">
            Gallery
          </h1>
        </FadeUpInView>

        {/* Tabs */}
        <FadeUpInView
          className="flex gap-3 mb-10 overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x"
          variant="button"
          playOnMount
          delay={0.16}
        >
          {TABS.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-4 text-xs uppercase rounded-[4px] border font-primary text-nowrap ${
                  isActive
                    ? "bg-brand-primary text-white border-brand-primary"
                    : "bg-transparent text-brand-primary border-[#2B04051A] hover:bg-[#FFE4DD]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </FadeUpInView>

        {/* Gallery content – masonry style similar to home page */}
        {images.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm uppercase font-primary text-brand-primary/80">
              No images yet for “{activeTab}”.
            </p>
          </div>
        ) : (
          <>
            <ScrubStagger
              key={`${activeTab}-mobile`}
              variant="card"
              className="grid grid-cols-2 gap-4 mx-auto max-w-5xl sm:grid-cols-3 lg:hidden"
              stagger={0.08}
              sequenceOnEnter
              itemDuration={0.38}
              start="top 88%"
            >
              {images.map((src, idx) => (
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
              key={`${activeTab}-desktop`}
              variant="card"
              className="hidden gap-4 mx-auto lg:flex"
              stagger={0.08}
              sequenceOnEnter
              itemDuration={0.38}
              start="top 88%"
            >
              {desktopColumns.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4">
                  {col.map((src, rowIdx) => (
                    <div
                      key={`${String(src)}-${colIdx}-${rowIdx}`}
                      data-scrub-item
                    >
                      <GalleryImageTile
                        src={src}
                        onOpen={() => setLightboxIndex(images.indexOf(src))}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </ScrubStagger>
          </>
        )}

        <GalleryLightbox
          images={images}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </div>
    </section>
  );
}
