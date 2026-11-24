/**
 * Schema.org structured data (JSON-LD) that tells Google and AI assistants who Arki is,
 * where it works and what each page is about. Rendered with components/seo/JsonLd.tsx.
 *
 * Validate after changes: https://validator.schema.org and https://search.google.com/test/rich-results
 */
import type { Project } from "./portfolio";
import { absoluteUrl, defaultOgImage } from "./urls";
import { site } from "./site";
import { team } from "./team";

const orgId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

/** Links to Arki's profiles elsewhere (LinkedIn, Facebook…). Empty ones are skipped. */
const sameAs = Object.values(site.social).filter(Boolean);

/** What Arki builds, in the words buyers search for. */
const knowsAbout = [
  "Custom software development",
  "AI development",
  "Enterprise resource planning (ERP) systems",
  "Pharmacy management software",
  "Hospital management systems",
  "Point-of-sale systems",
  "Digital menus and restaurant ordering",
  "Cloud and DevOps",
  "Dedicated software development teams",
  "Amharic and Afaan Oromo software",
  "Ethiopian e-invoicing (Ministry of Revenues)",
  "Telebirr and Chapa payment integration",
];

const address = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  addressCountry: site.address.country,
};

/** The company: an Organization and a local ProfessionalService in Addis Ababa, serving Ethiopia and clients worldwide. */
export function organizationSchema() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.shortName,
    url: absoluteUrl("/"),
    logo: { "@type": "ImageObject", url: absoluteUrl(site.logo.light) },
    image: absoluteUrl(defaultOgImage.url),
    description: site.description,
    slogan: site.tagline,
    email: site.emails.info,
    telephone: site.phone,
    address,
    areaServed: [{ "@type": "Country", name: site.address.countryName }, { "@type": "Place", name: "Worldwide" }],
    knowsLanguage: ["en", "am", "om"],
    knowsAbout,
    founder: team.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.emails.contact,
        telephone: site.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Amharic", "Afaan Oromo"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.emails.support,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Amharic", "Afaan Oromo"],
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: absoluteUrl("/"),
    inLanguage: "en",
    publisher: { "@id": orgId },
  };
}

/** Site-wide graph for the root layout. */
export function siteGraph() {
  return { "@context": "https://schema.org", "@graph": [organizationSchema(), websiteSchema()] };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: absoluteUrl(c.href) } : {}),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/** A service Arki offers (service landings and industry pages). */
export function serviceSchema({ name, description, path, serviceType }: { name: string; description: string; path: string; serviceType?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    ...(serviceType ? { serviceType } : {}),
    provider: { "@id": orgId },
    areaServed: [{ "@type": "Country", name: site.address.countryName }, { "@type": "Place", name: "Worldwide" }],
  };
}

/** A portfolio project: work Arki built, for a client or as its own product. */
export function projectSchema(p: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    description: p.summary,
    url: absoluteUrl(`/portfolio/${p.slug}`),
    ...(p.image ? { image: absoluteUrl(p.image) } : {}),
    genre: p.sector,
    creator: { "@id": orgId },
    ...(p.client ? { sourceOrganization: { "@type": "Organization", name: p.client } } : {}),
    ...(p.stack?.length ? { keywords: p.stack.join(", ") } : {}),
    ...(p.links?.length ? { sameAs: p.links.map((l) => l.href) } : {}),
  };
}
