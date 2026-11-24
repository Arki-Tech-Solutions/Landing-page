/**
 * Absolute URLs on the live domain. Kept free of heavy imports: client components
 * (e.g. the FAQ accordion) use it through structured-data.ts.
 */
import { site } from "./site";

/** absoluteUrl("/portfolio") → "https://www.arkisolutions.com/portfolio". */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

/** Default social preview image (1200×630), used when a page has no image of its own. */
export const defaultOgImage = {
  url: "/og/arki-og.png",
  width: 1200,
  height: 630,
  alt: `${site.name}: software and AI engineering from Addis Ababa, Ethiopia`,
};
