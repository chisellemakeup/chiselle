import { srcAssetUrl } from "../../config/assets";

const previewImage = srcAssetUrl("home/home-video-preview.png");

export default function VideoSection() {
  return (
    <section className="relative pb-10 w-full lg:pb-[60px]">
      <div className="relative container w-full max-w-[1440px] mx-auto">
        <div className="overflow-hidden relative w-full rounded-none lg:rounded-sm">
          <img
            src={previewImage}
            alt="Bridal party at the wedding – Chiselle bridal makeup in action"
            className="block object-cover w-full h-full"
          />

          {/* Play button overlay */}
          <button
            type="button"
            className="flex absolute inset-0 justify-center items-center"
            aria-label="Play bridal experience video"
          >
            <span className="inline-flex justify-center items-center w-16 h-16 rounded-full shadow-xl backdrop-blur-sm bg-white/85 md:w-20 md:h-20">
              <span className="ml-1 inline-block w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-brand-dark" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
