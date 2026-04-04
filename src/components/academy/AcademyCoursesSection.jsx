import { useEffect, useState } from "react";
import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";
import { publicAssetUrl } from "../../config/assets";

const courseImg = publicAssetUrl("courses-card-img.png");

const COURSES = [
  {
    tag: "UPCOMING COURSES",
    meta: "BRIDAL & SELF MAKE-UP",
    title: "1-on-1 Glam Sessions",
    desc: "A personalised, private mentorship from Nowshiba for bridal artists looking to upgrade or individuals wanting to master their own makeup. Tailored based on your exact needs.",
    fee: "30,000 including GST",
    duration: "5 Days",
    taughtBy: "Senior Artists / Nowshiba",
    content: [
      "Skin preparation and priming",
      "Colour correction",
      "Concealing skin flaws like spots, pigmentation, dark circles etc",
      "Base/Foundation types and application",
      "Contouring and highlighting - cream and powder",
      "Perfecting the base on all skin colours - light, medium and deep skin tones",
      "Eye makeup basics and advanced blending",
      "Smokey eyes - types, intensity, black and coloured",
      "Glitter eye techniques and signature looks",
      "Bridal eye makeup and cut crease",
      "Smudged and wing liner application",
      "Eyebrow defining",
      "False eye lashes and their application",
      "Blush application",
      "Lip shapes and lipstick application",
    ],
    timings: "5.30 pm to 8.30 pm",
    upcomingBatches: "Please WhatsApp +91 7708076661 to enroll",
  },
  {
    tag: "UPCOMING COURSES",
    meta: "LOOK & LEARN MASTERCLASS",
    title: "The Art of Bridal Elegance",
    desc: "Watch Nowshiba break down signature bridal techniques, skin prep, and finishing details. Learn the why behind every step and see how timeless bridal makeup comes together.",
    fee: "18,000 including GST",
    duration: "3 Days",
    taughtBy: "Nowshiba",
    content: [
      "Skin prep and bridal base breakdown",
      "Signature chiselled soft glam eye look",
      "Layering products for long wear",
      "Balancing traditional and modern bridal aesthetics",
      "Final detailing, finishing and photography readiness",
    ],
    timings: "11.00 am to 4.00 pm",
    upcomingBatches: "Limited slots. WhatsApp +91 7708076661",
  },
  {
    tag: "UPCOMING COURSES",
    meta: "FULL BRIDAL · MAKEUP · HAIR · DRAPE",
    title: "8-DAY In-depth bridal programme",
    desc: "An immersive, hands-on course covering complete bridal artistry from skin to finish. Designed to prepare you for real wedding days with confidence and clarity.",
    fee: "65,000 including GST",
    duration: "8 Days",
    taughtBy: "Senior Team + Nowshiba",
    content: [
      "Complete bridal skin and complexion workflow",
      "Traditional and contemporary bridal eye styles",
      "Bridal hairstyling and finishing",
      "Draping techniques for multiple outfit styles",
      "Client handling and wedding-day workflow practice",
    ],
    timings: "10.00 am to 6.00 pm",
    upcomingBatches: "Next batch opens soon. WhatsApp +91 7708076661",
  },
  {
    tag: "UPCOMING COURSE",
    meta: "HANDS-ON · BASICS",
    title: "Chiselle Beginner Course",
    desc: "Start strong with essential makeup fundamentals, product knowledge, and techniques. Ideal for beginners who want a solid, no-confusion foundation in makeup artistry.",
    fee: "22,000 including GST",
    duration: "4 Days",
    taughtBy: "Senior Artists",
    content: [
      "Kit understanding and product hygiene",
      "Foundation matching and blending techniques",
      "Basic eye looks and liner styles",
      "Face structure understanding and correction",
      "Everyday to occasion-ready complete looks",
    ],
    timings: "12.00 pm to 5.00 pm",
    upcomingBatches: "WhatsApp +91 7708076661 for batch dates",
  },
];

const ACADEMY_TERMS = [
  "The fee is non-refundable & non-adjustable against any other services in part or in whole.",
  "The balance amount is payable at least 48 hrs before start date of the course.",
  "Students need to carry their own brush set & beauty blender or purchase from the academy. The list of brushes will be shared with you a few days before the course starts.",
  "Some other personal hygiene items like wet wipes, makeup remover, hair section clips, comb etc will need to be carried by the students. A list will be shared before the start of the session.",
  "All makeup for practice will be provided during the classes by the academy.",
  "Video/Audio recording/reselling/redistribution of classes and written material is strictly prohibited. Legal action will be taken against anyone found to carry out / support the mentioned activities.",
];

function CourseCard({ tag, meta, title, desc, onKnowMore }) {
  return (
    <article className="flex flex-col overflow-hidden bg-white border border-[#E4DAD3] rounded-[12px] shadow-sm">
      <div className="overflow-hidden relative p-3">
        <img
          src={courseImg}
          alt={title}
          className="object-cover w-full h-[260px] md:h-[280px] rounded-md"
        />
        <div className="absolute top-5 left-5">
          <span className="inline-block px-4 py-2 text-xs uppercase bg-white rounded-md shadow-sm text-brand-primary font-primary">
            {tag}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-6 pt-6 pb-4">
        <p className="mb-2 text-[10px] tracking-[0.22em] text-brand-secondary uppercase font-primary">
          {meta}
        </p>
        <h3 className="mb-3 font-primary text-[18px] md:text-[24px] text-brand-secondary">
          {title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-brand-secondary font-primary">
          {desc}
        </p>

        <div className="flex flex-col gap-3 mt-auto sm:flex-row sm:items-center">
          <button className="px-6 py-3 w-full text-xs text-white uppercase rounded-sm bg-brand-primary font-primary hover:bg-brand-primary/90">
            Enroll Now
          </button>
          <button
            type="button"
            onClick={onKnowMore}
            className="w-full px-6 py-3 text-xs uppercase border border-[#E4DAD3] text-brand-secondary font-primary rounded-sm bg-[#FFE4DD40] hover:bg-[#FFF3EE]"
          >
            Know More
          </button>
        </div>
      </div>
    </article>
  );
}

export default function AcademyCoursesSection() {
  const [activeCourse, setActiveCourse] = useState(null);

  useEffect(() => {
    if (!activeCourse) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeCourse]);

  return (
    <section className="py-16 md:py-24 bg-[#FFF3EE]">
      <div className="container px-5 lg:px-[60px]">
        <section className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <FadeUpInView
            as="h2"
            delay={0.1}
            className="mb-4 font-secondary text-[26px] md:text-[32px] tracking-[0.08em] uppercase text-brand-primary"
          >
            Courses We Offer
          </FadeUpInView>
          <FadeUpInView
            as="p"
            delay={0.18}
            className="text-sm leading-relaxed md:text-base text-brand-secondary font-primary"
          >
            Take the first step towards realising your dreams in the world of
            makeup artistry. Select any of our courses and embark on a
            transformative learning experience that will shape your future
            career.
          </FadeUpInView>
        </section>

        <ScrubStagger
          variant="card"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.09}
          sequenceOnEnter
          itemDuration={0.42}
          start="top 86%"
        >
          {COURSES.map((course) => (
            <div key={course.title} data-scrub-item>
              <CourseCard
                {...course}
                onKnowMore={() => setActiveCourse(course)}
              />
            </div>
          ))}
        </ScrubStagger>
      </div>

      {activeCourse && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close course details"
            onClick={() => setActiveCourse(null)}
            className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
          />
          <article
            data-lenis-prevent
            className="relative z-10 w-full max-w-[600px] max-h-[88vh] overflow-y-auto overscroll-contain touch-pan-y rounded-[12px] bg-white border border-[#E4DAD3] shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-5 border-b border-[#E4DAD3] ">
              <h3 className="font-primary text-[20px] font-semibold leading-none text-brand-primary">
                {activeCourse.title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveCourse(null)}
                className="text-3xl lg:text-4xl -mt-2 text-brand-secondary hover:text-brand-primary"
                aria-label="Close popup"
              >
                ×
              </button>
            </div>

            <div className="px-5 pt-3 pb-7 text-brand-secondary font-primary">
              <p className="text-base">Fee : {activeCourse.fee}</p>
              <p className="text-base">
                Course Duration : {activeCourse.duration}
              </p>
              <p className="mb-4 text-base">
                Taught by : {activeCourse.taughtBy}
              </p>

              <h4 className="mb-2 text-base font-semibold leading-none pb-2">
                Course Content
              </h4>
              <ul className="mb-4 space-y-0.5 text-base leading-relaxed">
                {activeCourse.content.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>

              <h4 className="mb-1 text-base font-semibold leading-none pb-2">
                Timings
              </h4>
              <p className="mb-4 text-base">{activeCourse.timings}</p>

              <h4 className="mb-1 text-base font-semibold leading-none pb-2">
                Upcoming batches :
              </h4>
              <p className="mb-4 text-base">{activeCourse.upcomingBatches}</p>

              <h4 className="mb-1 text-base font-semibold leading-none pb-2">
                Upcoming batches :
              </h4>
              <p className="mb-1 text-base">{activeCourse.upcomingBatches}</p>
              <p className="mb-4 text-base">
                You need to get your own products for this course.
              </p>

              <h4 className="mb-2 text-base font-semibold leading-none pb-2">
                Important Terms and Conditions governing all courses at the
                academy
              </h4>
              <ol className="mb-4 space-y-2 text-base leading-relaxed list-decimal list-inside">
                {ACADEMY_TERMS.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ol>

              <p className="text-base leading-relaxed">
                By enrolling for any of courses above, you consent having read
                the above terms & conditions & agree to them.
              </p>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
