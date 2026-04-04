import { publicAssetUrl } from "../../config/assets";

const INSTA_IMAGES = [
  publicAssetUrl("insta-feed-img1.png"),
  publicAssetUrl("insta-feed-img2.png"),
  publicAssetUrl("insta-feed-img3.png"),
  publicAssetUrl("insta-feed-img4.png"),
  publicAssetUrl("insta-feed-img5.png"),
  publicAssetUrl("insta-feed-img6.png"),
];

const DEFAULT_INSTAGRAM_URL =
  "https://www.instagram.com/chisellemakeupandhair/";
const DEFAULT_INSTAGRAM_HANDLE = "@chisellemakeupandhair";

/** Pass `communityLabel={null}` or `""` to hide the community line. */
export default function InstaFeedSection({
  instagramUrl = DEFAULT_INSTAGRAM_URL,
  instagramHandle = DEFAULT_INSTAGRAM_HANDLE,
  communityLabel,
}) {
  const resolvedCommunity =
    communityLabel === undefined ? "+86k community" : communityLabel;
  const loopImages = [...INSTA_IMAGES, ...INSTA_IMAGES];

  return (
    <section className="bg-white">
      <div className="max-w-none">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-secondary text-[22px] md:text-[28px] lg:text-[42px] leading-tight tracking-[0.08em] text-brand-primary uppercase">
            Find us on <br /> Instagram
          </h2>
        </div>

        {/* Full-width horizontal marquee + hover overlay */}
        <div className="overflow-hidden relative px-4 w-full md:px-8 lg:px-16">
          <div className="flex gap-4 pb-4 w-max insta-track motion-reduce:animate-none animate-marquee">
            {loopImages.map((src, index) => (
              <a
                key={`${src}-${index}`}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 group"
              >
                <div className="relative overflow-hidden rounded-t-[32px]">
                  <img
                    src={src}
                    alt={`Instagram highlight ${(index % INSTA_IMAGES.length) + 1}`}
                    className="object-cover w-full h-auto transition-all duration-300 group-hover:scale-105 group-hover:opacity-0"
                  />
                  <div className="flex absolute inset-0 justify-center items-center p-4 text-xs to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <div className="flex flex-col gap-6 justify-center items-center md:gap-8">
                      <div className="flex justify-center">
                        <div className="overflow-hidden relative w-14 h-14 rounded-full border-2 border-brand-secondary/70">
                          <img
                            src={src}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm drop-shadow-sm text-brand-secondary md:text-lg font-primary">
                          {instagramHandle}
                        </p>
                        <div className="mx-3 mb-3 rounded-full border-b-2 border-dotted border-brand-secondary/50" />
                        {resolvedCommunity ? (
                          <p className="text-base drop-shadow-sm text-brand-secondary/95 font-primary">
                            {resolvedCommunity}
                          </p>
                        ) : null}
                      </div>
                      <span className="inline-block pointer-events-none btn-primary">
                        Follow us
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Touch / reduced motion: same info without relying on hover */}
        <div className="px-4 pb-6 mt-6 text-center md:hidden">
          <p className="text-sm font-primary text-brand-secondary">
            {instagramHandle}
          </p>
          {resolvedCommunity ? (
            <p className="mt-1 text-sm text-brand-secondary font-primary">
              {resolvedCommunity}
            </p>
          ) : null}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 btn-primary"
          >
            Follow us
          </a>
        </div>

        <style>{`
          .insta-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
