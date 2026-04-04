import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InstaFeedSection from "./components/common/InstaFeedSection";
import { getAllBlogs, getBlogBySlug } from "./data/blogs-loader";
import BlogCard from "./components/blogs/BlogCard";
import FadeUpInView from "./components/common/FadeUpInView";
import ScrubStagger from "./components/common/ScrubStagger";
import { publicAssetUrl } from "./config/assets";

const HERO_IMAGE = publicAssetUrl("blogs-inner-img1.png");

const SHARE_ICONS = [
  { name: "Instagram", src: publicAssetUrl("Instagram.svg") },
  { name: "Facebook", src: publicAssetUrl("Facebook.svg") },
  { name: "LinkedIn", src: publicAssetUrl("LinkedIn.svg") },
];

export default function BlogsInnerPage() {
  const { slug } = useParams();

  const post = useMemo(() => {
    const found = slug ? getBlogBySlug(slug) : null;
    if (!found) {
      return {
        title: "Blog Post",
        authorLine: "Author Name | Nov 22, 2025",
        heroTag: "DELICATE MUTED ROSE FINISH",
        sections: [],
      };
    }
    return {
      title: found.title,
      authorLine: `${found.author} | ${found.date}`,
      heroTag: found.heroTag,
      sections: found.sections ?? [],
    };
  }, [slug]);

  const relatedPosts = useMemo(() => {
    const all = getAllBlogs();
    const others = all.filter((b) => b.slug !== slug);
    if (!others.length) return [];

    const out = [];
    for (let i = 0; i < 3; i += 1) {
      out.push(others[i % others.length]);
    }
    return out;
  }, [slug]);

  useEffect(() => {
    if (post?.title) {
      document.title = `${post.title} | Chiselle`;
    }
  }, [post?.title]);

  return (
    <>
      <Navbar />
      <main className="mt-20 md:mt-36 bg-brand-bg text-brand-primary">
        <article className="container px-5 py-10 md:py-16">
          {/* Title — scrub off so Lenis + stacked text stays stable */}
          <header className="mx-auto mb-6 max-w-5xl">
            <FadeUpInView
              as="h6"
              variant="text"
              playOnMount
              delay={0}
              className="pb-6 text-xs text-brand-secondary font-primary"
            >
              Blog | {post.title}
            </FadeUpInView>
            <FadeUpInView
              as="h1"
              variant="text"
              playOnMount
              delay={0.1}
              className="font-primary text-[36px] lg:text-[56px] leading-tight pb-4"
            >
              {post.title}
            </FadeUpInView>
            <FadeUpInView
              as="p"
              variant="text"
              playOnMount
              delay={0.2}
              className="mb-2 text-base text-brand-secondary font-primary"
            >
              {post.authorLine}
            </FadeUpInView>
          </header>

          {/* Hero / top image */}
          <FadeUpInView
            as="div"
            variant="card"
            playOnMount
            delay={0.28}
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[2px]"
          >
            <img
              src={HERO_IMAGE}
              alt={post.title}
              className="object-cover w-full"
            />
          </FadeUpInView>

          {/* Content — each section: stagger + scrub on heading, media, copy, outcome */}
          <div className="mx-auto mt-10 space-y-12 max-w-5xl">
            {post.sections.map((sec, secIdx) => (
              <ScrubStagger
                key={`${sec.heading}-${secIdx}`}
                variant="text"
                className="flex flex-col gap-4"
                stagger={0.08}
              >
                <div data-scrub-item>
                  <h2 className="font-primary text-[22px] md:text-[28px] lg:text-[42px] text-brand-primary">
                    {sec.heading}
                  </h2>
                </div>
                {sec.image ? (
                  <div data-scrub-item className="overflow-hidden rounded-[2px]">
                    <img
                      src={sec.image}
                      alt={sec.heading}
                      className="object-cover w-full max-h-[420px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}
                {sec.paragraphs?.map((para, idx) => (
                  <p
                    key={`${sec.heading}-p-${idx}`}
                    data-scrub-item
                    className="text-sm leading-relaxed md:text-base text-brand-secondary font-primary"
                  >
                    {para}
                  </p>
                ))}
                {(sec.outcomeTitle || sec.outcomeText) && (
                  <div data-scrub-item className="space-y-2 pt-2">
                    {sec.outcomeTitle ? (
                      <p className="text-lg md:text-2xl -tracking-[2%] text-brand-primary font-primary">
                        {sec.outcomeTitle}
                      </p>
                    ) : null}
                    {sec.outcomeText ? (
                      <p className="text-sm leading-relaxed md:text-base text-brand-secondary font-primary">
                        {sec.outcomeText}
                      </p>
                    ) : null}
                  </div>
                )}
              </ScrubStagger>
            ))}
          </div>

          {/* Share — label + icons stagger */}
          <section className="mx-auto mt-14 max-w-5xl">
            <ScrubStagger
              variant="button"
              className="flex flex-wrap items-center gap-x-6 gap-y-4"
              stagger={0.07}
            >
              <p data-scrub-item className="text-sm font-primary text-brand-secondary">
                Share:
              </p>
              {SHARE_ICONS.map((icon) => (
                <a
                  key={icon.name}
                  data-scrub-item
                  href="#"
                  className="inline-flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white border border-[#E5D7CF]"
                  aria-label={`Share on ${icon.name}`}
                >
                  <img src={icon.src} alt="" className="w-[24px] h-[24px] invert" />
                </a>
              ))}
            </ScrubStagger>
          </section>
        </article>

        {/* Related blogs */}
        <section className="py-10 mt-14 md:py-16 bg-brand-bg">
          <div className="container flex flex-col md:items-center mx-auto">
            <FadeUpInView
              as="h2"
              variant="text"
              scrub={false}
              className="mb-6 font-secondary text-[36px] lg:text-[42px] text-left md:text-center text-brand-primary"
            >
              More stories
            </FadeUpInView>

            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p, idx) => (
                <ScrubStagger
                  key={`${p.slug}-${idx}`}
                  variant="card"
                  className="min-w-0 h-full"
                  stagger={0.06}
                >
                  <div data-scrub-item className="h-full">
                    <Link
                      to={`/blogs/${p.slug}`}
                      className="block h-full rounded-[16px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                    >
                      <BlogCard post={p} />
                    </Link>
                  </div>
                </ScrubStagger>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="py-16">
      <InstaFeedSection />
      </div>
      <Footer />
    </>
  );
}
