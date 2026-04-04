/**
 * GCS static files: https://storage.googleapis.com/chsielle-assets/<fileName>
 *
 * Any path you pass is reduced to the last segment only (the file name).
 * Examples:
 *   /assets/home/gallery-img2.png → …/gallery-img2.png
 *   home/foo.png                  → …/foo.png
 *
 * Optional: VITE_ASSETS_BASE_URL (no trailing slash) to override the bucket base.
 */

const DEFAULT_BASE = "https://storage.googleapis.com/chsielle-assets";

/** Last path segment only; ignores query/hash. */
export function fileNameFromPath(input) {
  const s = String(input).trim().replace(/\\/g, "/");
  const noQuery = s.split(/[?#]/, 1)[0];
  const parts = noQuery.split("/").filter(Boolean);
  return parts.length ? parts[parts.length - 1] : "";
}

export function getAssetsBaseUrl() {
  const raw =
    typeof import.meta !== "undefined" && import.meta.env?.VITE_ASSETS_BASE_URL;
  const base =
    typeof raw === "string" && raw.trim() ? raw.trim() : DEFAULT_BASE;
  return base.replace(/\/+$/, "");
}

/** Full URL: base + file name only. */
export function cdnUrl(pathOrFileName) {
  const name = fileNameFromPath(pathOrFileName);
  const base = getAssetsBaseUrl();
  return name ? `${base}/${name}` : base;
}

/** Same as cdnUrl — kept for existing imports. */
export function publicAssetUrl(sitePath) {
  return cdnUrl(sitePath);
}

/** Same as cdnUrl — kept for existing imports. */
export function srcAssetUrl(relativePath) {
  return cdnUrl(relativePath);
}
