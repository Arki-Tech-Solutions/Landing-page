/**
 * Company-wide facts for Arki Tech Solutions.
 *
 * Values marked TODO(confirm) are placeholders. Replace them with real details
 * before launch: they are shown on every page (header, footer, contact blocks).
 */
export const site = {
  name: "Arki Tech Solutions",
  shortName: "Arki Tech",
  legalName: "Arki Tech Solutions PLC", // as on the company profile
  tagline: "Software & AI engineering from Addis Ababa",
  description:
    "Arki Tech Solutions is a software and AI engineering company registered in Ethiopia. Senior engineering teams that see the problem clearly and ship software that satisfies.",
  /** "Arki" — Afaan Oromo: to see, observe, be conscious. Amharic: satisfying. */
  nameMeaning: {
    oromo: "to see, to observe, to be conscious",
    amharic: "satisfying",
  },
  url: "https://www.arkisolutions.com",
  /** General address: footer, legal pages, careers. */
  email: "info@arkisolutions.com",
  /**
   * Public addresses (all forward to the company Gmail, which is not shown on the site).
   * contact: project enquiries and meeting requests; support: help for existing clients.
   */
  emails: {
    info: "info@arkisolutions.com",
    contact: "contact@arkisolutions.com",
    support: "support@arkisolutions.com",
  },
  /** Public phone numbers: Jabir Esmael, then Firomsa Abrahim. `phone` is the main one. */
  phones: ["+251 949 794 235", "+251 940 433 419"],
  phone: "+251 949 794 235",
  /** Postal address for search engines and AI assistants (structured data). Keep in step with `locations`. */
  address: {
    street: "Office No. 15, Woreda 10, Kirkos Sub-city, Churchill Avenue (near La Gare / Legehar)",
    /** Full official address: legal pages, structured data and llms.txt. Use exactly this on Google Business Profile. */
    full: "Office No. 15, Woreda 10, Kirkos Sub-city, Churchill Avenue (near La Gare / Legehar), Addis Ababa, Ethiopia",
    /** Short form for contact blocks. */
    short: "Churchill Avenue (near La Gare), Kirkos, Addis Ababa",
    /** Office pin on the map. */
    geo: { latitude: 9.0114631, longitude: 38.7541276 },
    mapUrl: "https://maps.google.com/?q=9.0114631,38.7541276",
    city: "Addis Ababa",
    region: "Addis Ababa",
    country: "ET",
    countryName: "Ethiopia",
  },
  locations: [
    {
      label: "Office No. 15, Woreda 10, Kirkos Sub-city, Churchill Avenue (near La Gare / Legehar), Addis Ababa, Ethiopia — Headquarters & Engineering Hub",
      mapUrl: "https://maps.google.com/?q=9.0114631,38.7541276",
    },
  ],
  social: {
    // Social profiles: leave a link empty ("") to hide its icon in the footer. TODO(confirm): add the real page URLs.
    linkedin: "", // guessed earlier: https://www.linkedin.com/company/arki-tech-solutions (not confirmed)
    facebook: "",
    x: "",
    youtube: "",
  },
  logo: {
    /* Trying the "lens i" wordmark (brand options, Logo 7) in the site's green palette.
       Previous aperture logo: /brand/arki-logo.svg and /brand/arki-logo-white.svg.
       Palette B (ultramarine & saffron) version for comparison: /brand/arki-logo-lens-palette-b.svg. */
    light: "/brand/arki-logo-lens.svg",
    dark: "/brand/arki-logo-lens-white.svg",
    mark: "/brand/arki-mark.svg",
  },
  bookingHref: "/schedule-meeting",
  /** Shown in the footer copyright line. Update each January. */
  copyrightYear: 2026,
} as const;

export type Site = typeof site;
