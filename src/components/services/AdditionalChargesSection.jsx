import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";
import { publicAssetUrl } from "../../config/assets";

const CENTER_IMAGE = publicAssetUrl("additional-charges-img.png");

const LEFT_CHARGES = [
  { amount: "₹3,500", label: "Extra Saree Drape" },
  { amount: "₹1,000", label: "Extra lehenga drape" },
  { amount: "₹1,500/hr", label: "Waiting charge between changes" },
  { amount: "₹1,500/hr", label: "Extra hair extension/ Sowri (Highlighted)" },
  { amount: "₹4,500", label: "Madisar Drape" },
];

const RIGHT_CHARGES = [
  { amount: "₹750 – ₹1,500", label: "Kunjalam / Andal Kondai" },
  { amount: "₹300 – ₹2,000", label: "Hair Accessories ranging from" },
  { amount: "₹300 – ₹2,000", label: "Makeup Touch-up" },
  { amount: "₹300 – ₹2,000", label: "Change of Hairstyle" },
  { amount: "₹1,000 – ₹2,000", label: "Jewellery stitching" },
];

function ChargeCard({ amount, label }) {
  return (
    <div className="flex flex-col items-center md:items-start gap-3 p-5 rounded-xl bg-[#D9BFA64D] border border-[#2B04051A] text-center md:text-left w-full md:w-[316px] min-h-[168px]">
      <div className="inline-flex px-3 py-2 text-sm text-white rounded-full md:py-3 md:px-5 font-primary bg-brand-primary w-fit">
        {amount}
      </div>
      <p className="text-sm leading-relaxed md:text-lg text-brand-secondary font-primary w-[32vw] md:w-auto">
        {label}
      </p>
    </div>
  );
}

export default function AdditionalChargesSection() {
  return (
    <section className="py-16 md:py-20 bg-[#FFE4DD40]">
      <div className="container px-5 lg:px-16">
        <div className="mb-10 text-center text-brand-primary">
          <FadeUpInView
            as="h2"
            className="mb-4 font-secondary text-[24px] md:text-[32px] lg:text-[42px] leading-tight tracking-[0.02em] uppercase"
          >
            Additional Charges
          </FadeUpInView>
        </div>

        {/*
          Single ScrubStagger root so all [data-scrub-item] nodes share one ScrollTrigger
          and stagger in document order (two separate roots were fighting / mis-triggering).
        */}
        <ScrubStagger
          variant="card"
          className="flex flex-col gap-6 md:gap-8"
          stagger={0.08}
          sequenceOnEnter
          itemDuration={0.38}
          start="top 86%"
        >
          <div
            data-scrub-item
            className="overflow-hidden relative rounded-2xl w-full max-w-[650px] mx-auto md:hidden"
          >
            <img
              src={CENTER_IMAGE}
              alt="Additional charges reference"
              className="object-cover w-full aspect-[4/3] sm:aspect-[16/10]"
            />
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-6 w-full md:w-[316px] min-h-[168px]">
              {LEFT_CHARGES.map((item) => (
                <div key={item.label} data-scrub-item>
                  <ChargeCard amount={item.amount} label={item.label} />
                </div>
              ))}
            </div>

            <div
              data-scrub-item
              className="hidden md:block overflow-hidden rounded-2xl w-full max-w-[650px] mx-auto"
            >
              <img
                src={CENTER_IMAGE}
                alt="Additional charges reference"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col gap-6 w-full md:w-[316px] min-h-[168px]">
              {RIGHT_CHARGES.map((item) => (
                <div key={item.label} data-scrub-item>
                  <ChargeCard amount={item.amount} label={item.label} />
                </div>
              ))}
            </div>
          </div>
        </ScrubStagger>
      </div>
    </section>
  );
}
