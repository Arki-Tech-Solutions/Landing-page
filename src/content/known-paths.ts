/**
 * Every valid path under the dynamic route sections, built from the same
 * content the pages use in generateStaticParams. src/proxy.ts uses it to
 * answer unknown slugs with a real 404 status before streaming starts
 * (streamed notFound() can only send a 200 with a noindex tag).
 */
import { blogPosts } from "./blog";
import { caseStudies } from "./case-studies";
import { getIndustries, getOfferings } from "./industries";
import { landingRedirects, landings, serviceGroups } from "./services";
import { techCategories } from "./technologies";

export const dynamicSections = ["/blog", "/case-studies", "/industries", "/services", "/technologies"] as const;

export const knownPaths: ReadonlySet<string> = new Set([
  ...blogPosts.map((p) => `/blog/${p.slug}`),
  ...caseStudies.map((c) => `/case-studies/${c.slug}`),
  ...getIndustries().map((i) => `/industries/${i.slug}`),
  ...getOfferings().map((o) => `/industries/${o.industry.slug}/${o.slug}`),
  ...landings.map((l) => `/services/${l.slug}`),
  ...Object.keys(landingRedirects).map((slug) => `/services/${slug}`),
  ...serviceGroups.flatMap((g) => g.subcategories.map((s) => `/services/${g.id}/${s.id}`)),
  ...serviceGroups.flatMap((g) => g.subcategories.flatMap((s) => s.items.map((i) => `/services/${g.id}/${s.id}/${i.slug}`))),
  ...techCategories.map((c) => `/technologies/${c.id}`),
  ...techCategories.flatMap((c) => c.items.map((i) => `/technologies/${c.id}/${i.slug}`)),
]);
