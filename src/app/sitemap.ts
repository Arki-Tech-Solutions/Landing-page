import type { MetadataRoute } from "next";
import { absoluteUrl, indexablePaths } from "@/content/seo";

/** How important each page family is relative to the rest of the site (0–1). */
function priority(path: string): number {
  if (path === "/") return 1;
  if (path === "/portfolio" || /^\/services\/[^/]+$/.test(path)) return 0.9;
  if (/^\/(industries|portfolio)\//.test(path)) return 0.8;
  if (["/ourstories", "/why-arki", "/process", "/engagement-model", "/schedule-meeting"].includes(path)) return 0.7;
  return 0.3; // legal pages
}

/** /sitemap.xml: every public page, built from the same list the 404 proxy uses. */
export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths()
    .map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: path === "/" || path === "/portfolio" ? ("weekly" as const) : ("monthly" as const),
      priority: priority(path),
    }))
    .sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url));
}
