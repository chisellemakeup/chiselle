import { getAllBlogs } from "../../data/blogs-loader";
import BlogCard from "./BlogCard";
import FadeUpInView from "../common/FadeUpInView";
import ScrubStagger from "../common/ScrubStagger";

export default function BlogsSection() {
  const allBlogs = getAllBlogs();
  const questions = allBlogs.find((b) => b.slug === "bridal-makeup-questions");
  const essentials = allBlogs.find((b) => b.slug === "essential-makeup-fundamentals");

  const cardPosts = [
    essentials,
    questions,
    questions,
    questions,
    questions,
    questions,
  ].filter(Boolean);

  return (
    <section className="py-16 md:py-24 bg-[#FFF3EE]">
      <div className="container px-5 lg:px-[60px]">
        <FadeUpInView as="h2" variant="text" className="mb-10 font-script text-[26px] md:text-[32px] lg:text-[42px] leading-tight text-brand-primary">
          Blogs
        </FadeUpInView>

        <ScrubStagger
          variant="card"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          stagger={0.09}
          sequenceOnEnter
          itemDuration={0.4}
          start="top 86%"
        >
          {cardPosts.map((post, idx) => (
            <div key={`${post.slug}-${idx}`} data-scrub-item className="min-w-0 h-full">
              <BlogCard post={post} hideLink={false} />
            </div>
          ))}
        </ScrubStagger>
      </div>
    </section>
  );
}
