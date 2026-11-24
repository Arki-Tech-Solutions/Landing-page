/**
 * Search and AI-assistant (SEO / GEO) helpers: which pages are public, absolute URLs,
 * and the per-page metadata every page uses (canonical URL, Open Graph, Twitter card).
 *
 * Hidden pages (src/content/hidden.ts), redirected service sub-pages and the sample case
 * studies are never listed, so the sitemap only names pages that answer with a 200.
 */
import type { Metadata } from "next";
import { hideServiceSubPages, isHidden } from "./hidden";
import { knownPaths } from "./known-paths";
import { landingRedirects } from "./services";
import { site } from "./site";
import { defaultOgImage } from "./urls";

export { absoluteUrl, defaultOgImage } from "./urls";

/** Pages without a dynamic segment, in menu order. */
export const staticPaths = [
  "/",
  "/portfolio",
  "/ourstories",
  "/why-arki",
  "/process",
  "/engagement-model",
  "/schedule-meeting",
  "/privacy-policy",
  "/cookie-policy",
  "/privacy-choices",
] as const;

/** Paths that redirect elsewhere and must not be indexed. */
const redirectedPaths = [
  "/case-studies", // next.config.ts sends these to /portfolio
  ...Object.keys(landingRedirects).map((slug) => `/services/${slug}`),
];

const isRedirected = (path: string) => redirectedPaths.some((p) => path === p || path.startsWith(`${p}/`));

/** A service sub-page (/services/<group>/<sub> or deeper), redirected while hideServiceSubPages is on. */
const isServiceSubPage = (path: string) => path.startsWith("/services/") && path.split("/").length > 3;

/** Every public page that answers with a 200: the sitemap, llms.txt and checks use this list. */
export function indexablePaths(): string[] {
  const all = [...staticPaths, ...knownPaths];
  return [...new Set(all)].filter(
    (p) => !isHidden(p) && !isRedirected(p) && !(hideServiceSubPages && isServiceSubPage(p)),
  );
}

type PageMetaInput = {
  /** Path of the page, e.g. "/portfolio/tumsa". Becomes the canonical URL. */
  path: string;
  /** Page title; the root layout adds " | Arki Tech Solutions". */
  title: string;
  description: string;
  /** A page-specific preview image in /public. Falls back to the brand image. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

/**
 * Metadata for one page: title, description, canonical URL, Open Graph and Twitter card.
 * Open Graph is replaced, not merged, between layout and page, so every field is set here.
 */
export function pageMeta({ path, title, description, image, imageAlt, type = "website" }: PageMetaInput): Metadata {
  const images = image ? [{ url: image, alt: imageAlt ?? title }] : [defaultOgImage];
  const socialTitle = path === "/" ? title : `${title} | ${site.name}`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_US",
      title: socialTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: images.map((i) => i.url),
    },
  };
}
