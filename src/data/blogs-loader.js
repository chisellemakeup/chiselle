import { publicAssetUrl } from "../config/assets";

const blogModules = import.meta.glob("./blogs/*.json", { eager: true });

function resolveMediaUrl(path) {
  if (path == null || path === "") return path;
  if (typeof path !== "string") return path;
  const t = path.trim();
  if (t.startsWith("http://") || t.startsWith("https://")) return t;
  return publicAssetUrl(t.startsWith("/") ? t : `/${t}`);
}

function filenameToSlug(path) {
  // path format: "./blogs/some-file.json"
  const parts = path.split("/");
  const file = parts[parts.length - 1] || "";
  return file.replace(/\.json$/i, "");
}

export function getAllBlogs() {
  return Object.entries(blogModules).map(([path, mod]) => {
    const blog = mod?.default ?? mod;
    const slug = filenameToSlug(path);
    const sections = Array.isArray(blog.sections)
      ? blog.sections.map((s) =>
          s?.image != null && s.image !== ""
            ? { ...s, image: resolveMediaUrl(s.image) }
            : s,
        )
      : blog.sections;
    return { ...blog, slug, sections };
  });
}

export function getBlogBySlug(slug) {
  const blog = getAllBlogs().find((b) => b.slug === slug);
  return blog;
}

