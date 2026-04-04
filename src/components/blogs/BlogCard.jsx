import { Link } from "react-router-dom";
import { publicAssetUrl } from "../../config/assets";

const BLOG_IMAGE = publicAssetUrl("blogs-card-img.png");

function getExcerptFromPost(post) {
  const firstSection = post.sections?.[0];
  const firstParagraph = firstSection?.paragraphs?.[0];
  return firstParagraph ?? "Learn more about this blog post on Chiselle Academy.";
}

// Presentational card (no Link inside) so callers can wrap however they want.
export default function BlogCard({ post, hideLink = true }) {
  const titleClampStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
  };

  const descClampStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
  };

  const content = (
    <article className="flex h-full flex-col overflow-hidden bg-white border border-[#F0E4DE] rounded-[16px] shadow-sm">
      <div className="overflow-hidden p-4">
        <img
          src={BLOG_IMAGE}
          alt={post.title}
          className="object-cover w-full h-[220px] md:h-[300px] rounded-md"
        />
      </div>

      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        <p className="mb-2 text-sm text-brand-secondary font-primary">
          {post.author} | {post.date}
        </p>
        <h3
          className="mb-3 font-serif text-[18px] md:text-[32px] leading-snug text-brand-primary"
          style={titleClampStyle}
        >
          {post.title}
        </h3>
        <p
          className="text-base leading-relaxed text-brand-secondary font-primary"
          style={descClampStyle}
        >
          {getExcerptFromPost(post)}
        </p>
      </div>
    </article>
  );

  if (hideLink) return content;

  return (
    <Link
      to={`/blogs/${post.slug}`}
      aria-label={post.title}
      className="block h-full rounded-[16px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
    >
      {content}
    </Link>
  );
}

