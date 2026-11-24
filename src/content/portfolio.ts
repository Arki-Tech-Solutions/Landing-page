/**
 * Arki's real project portfolio, from the company profile (November 2026).
 * Used by /portfolio, /portfolio/[slug], the home "Selected work" section and the
 * "Work in this field" section on industry pages.
 *
 * Screenshots live in public/projects/ (not public/portfolio/: src/proxy.ts answers unknown
 * /portfolio/* paths with a 404). A project without `image` gets a branded cover with an
 * illustrated `scene` (components/portfolio/ProjectVisual.tsx) until real screenshots are added.
 * Fewes screenshots come from the local dev build with synthetic seed data.
 */

export type ProjectKind =
  | "client"
  | "product"
  | "partnership"
  | "open-source"
  | "research";
export type ProjectStatus = "Live" | "Active" | "In development" | "Completed";
export type CoverScene = "dashboard" | "queue" | "ballot" | "member" | "signal";

export type Project = {
  slug: string;
  name: string;
  kind: ProjectKind;
  status: ProjectStatus;
  sector: string;
  /** Who it was built for. Products and open-source work have no client. */
  client?: string;
  partner?: { name: string; href?: string };
  period: string;
  /** One sentence, shown on cards and under the title. */
  summary: string;
  /** "The problem" on the project page. */
  challenge: string;
  /** "What we built": the main features, one line each. */
  features: string[];
  /** Extra rows for the facts card, e.g. users or languages. */
  facts?: { label: string; value: string }[];
  stack?: string[];
  links?: { label: string; href: string }[];
  /** Main screenshot (1440×900) in /public. */
  image?: string;
  /** More screenshots shown on the project page. */
  gallery?: { src: string; caption: string }[];
  /** A walkthrough video shown on the project page. */
  video?: { src: string; poster: string; caption: string };
  /** lucide icon name for the branded cover. */
  icon: string;
  /** Illustration drawn on the branded cover when there is no screenshot. */
  scene?: CoverScene;
  /** Shown large on /portfolio and on the home page. */
  featured?: boolean;
  /** Industry page slugs where this project appears under "Work in this field". */
  industries?: string[];
};

export const kindLabels: Record<ProjectKind, string> = {
  client: "Client project",
  product: "Arki product",
  partnership: "Partnership",
  "open-source": "Open source",
  research: "Research",
};

export const projects: Project[] = [
  {
    slug: "tumsa",
    name: "Tumsa",
    kind: "client",
    status: "In development",
    sector: "Government",
    client: "Oromia Region President's Office (proposed)",
    period: "Aug 2026 – present",
    summary:
      "A field data collection platform that brings verified raw data straight to the region, instead of summaries that lose reliability on the way up.",
    challenge:
      "Regional decisions were made on summaries passed up level by level, and every step lost detail and reliability. The region needed the raw, verified data from the field, kept on its own servers, and reports it could trust.",
    features: [
      "Dynamic form builder: any form, for any sector, such as health or agriculture",
      "Raw data stored on the region's own servers in Ethiopia",
      "Report and format generation, with AI built in",
      "Secure API, web console, file uploads and row-level data security",
    ],
    facts: [
      { label: "Users", value: "Field workers across every sector and level" },
    ],
    image: "/projects/tumsa.jpg",
    gallery: [
      {
        src: "/projects/tumsa.jpg",
        caption:
          "Region dashboard: official figures from accepted records only",
      },
      {
        src: "/projects/tumsa-phone.jpg",
        caption: "Field app: today's work and one question per screen",
      },
    ],
    video: {
      src: "/projects/tumsa-walkthrough.mp4",
      poster: "/projects/tumsa-poster.jpg",
      caption:
        "Collect on the phone, supervisor signs off, woreda accepts, results. About four minutes.",
    },
    icon: "ClipboardList",
    featured: true,
    industries: ["ai-data-solutions"],
  },
  {
    slug: "custom-enterprise-erp",
    name: "Custom Enterprise ERP",
    kind: "client",
    status: "Active",
    sector: "Enterprise",
    client: "Alif Car Import",
    period: "Dec 2025 – present",
    summary: "A configurable ERP that adapts to any type of business, from vehicle import to trade and services.",
    challenge:
      "Every business runs differently: an importer tracks shipments, customs costs, stock and sales in its own way. Off-the-shelf systems forced that into someone else's process, so we built one that is configured around theirs.",
    features: [
      "Finance, inventory, sales, purchasing and import management",
      "Business workflows with role-based access control",
      "Transaction validation and a clean REST API",
      "One codebase, configured for each organisation",
    ],
    stack: ["NestJS", "Next.js", "TypeScript", "MariaDB"],
    image: "/projects/custom-erp.jpg",
    gallery: [
      { src: "/projects/custom-erp.jpg", caption: "Executive dashboard: revenue, receivables, payables, cash flow and stock value" },
      { src: "/projects/custom-erp-inventory.jpg", caption: "Inventory: stock health, reservations and valuation across warehouses and shops" },
    ],
    icon: "Building2",
    scene: "dashboard",
    featured: true,
  },
  {
    slug: "fewes-pharmacy-os",
    name: "Fewes Pharmacy OS",
    kind: "product",
    status: "Active",
    sector: "Pharmacy",
    period: "2026 – present",
    summary:
      "A complete operating system for licensed Ethiopian retail pharmacies, from the sales counter to the back office.",
    challenge:
      "A pharmacy counter cannot stop when the internet does. Retail pharmacies need fast sales at the counter, a back office for stock and records, the hardware they already use, and readiness for e-invoicing.",
    features: [
      "Point-of-sale counter for cashiers and pharmacists, plus back office",
      "Desktop counter app that keeps working offline",
      "Receipt printer, cash drawer and till key built in",
      "Ready for Ministry of Revenues e-invoicing",
    ],
    facts: [
      { label: "Built for", value: "Licensed Ethiopian retail pharmacies" },
      { label: "Languages", value: "English and Amharic" },
    ],
    // TODO: add the live demo link (https://fewes-demo.vercel.app) once the deployment is running again.
    image: "/projects/fewes.jpg",
    gallery: [
      {
        src: "/projects/fewes.jpg",
        caption:
          "Back office overview: sales, e-invoices and controlled medicines across branches",
      },
      {
        src: "/projects/fewes-landing.jpg",
        caption: "Product site: keep selling, keep the register, keep the law",
      },
      {
        src: "/projects/fewes-products.jpg",
        caption: "Products: EFDA registration, VAT, stock on hand and margins",
      },
      {
        src: "/projects/fewes-sales.jpg",
        caption: "Sales: every receipt with its e-invoice status",
      },
      {
        src: "/projects/fewes-controlled.jpg",
        caption:
          "Controlled register: discrepancies stop sales until a recount",
      },
    ],
    icon: "Pill",
    featured: true,
    industries: ["healthcare-solutions"],
  },
  {
    slug: "serviy",
    name: "Serviy",
    kind: "product",
    status: "Live",
    sector: "Hospitality",
    period: "2026",
    summary:
      "AI-powered digital menus and ordering for restaurants, hotels, coffee shops and cafés.",
    challenge:
      "Guests want to order without waiting, in Amharic or English, from a menu that respects fasting and dietary needs. Owners want to see what sells, and a small café should not pay for the features a hotel needs.",
    features: [
      "AI-powered menus with QR code ordering at the table",
      "Amharic and English, with fasting and dietary filters",
      "Loyalty, gift cards, delivery and live sales analytics",
      "Features switched on per business, from a small café to a hotel",
    ],
    facts: [
      {
        label: "Built for",
        value: "Restaurants, hotels, coffee shops and cafés",
      },
    ],
    links: [
      { label: "Serviy app", href: "https://resturantapp-orcin.vercel.app/" },
      {
        label: "QR digital menu",
        href: "https://oumburs9.github.io/arki-digital-menu/",
      },
    ],
    image: "/projects/serviy.jpg",
    gallery: [
      {
        src: "/projects/serviy.jpg",
        caption: "Serviy: the guest menu and staff dashboard",
      },
      {
        src: "/projects/serviy-menu.jpg",
        caption:
          "QR digital menu: table ordering, fasting filters and analytics",
      },
    ],
    icon: "UtensilsCrossed",
    featured: true,
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    kind: "product",
    status: "Completed",
    sector: "Healthcare",
    period: "Feb – Jun 2026",
    summary:
      "A multi-branch hospital management system built for Ethiopian hospitals, from registration to billing.",
    challenge:
      "Hospitals with several branches need one system for the whole patient journey, from registration to billing, while keeping each branch's data separate and every clinical change traceable.",
    features: [
      "Registration, triage, consultations, laboratory and pharmacy",
      "Billing and queue management with real-time updates",
      "Role-based access and branch-level data isolation",
      "Full audit trail of clinical changes",
    ],
    facts: [{ label: "Built for", value: "Multi-branch Ethiopian hospitals" }],
    icon: "Hospital",
    scene: "queue",
    industries: ["healthcare-solutions"],
  },
  {
    slug: "arki-digital-menu",
    name: "Arki Digital Menu",
    kind: "product",
    status: "Live",
    sector: "Hospitality",
    period: "2026",
    summary: "A QR digital menu that takes the order, not just shows it, in Amharic and English.",
    challenge:
      "Paper menus can't show what is sold out, can't take an order from the table and tell the owner nothing about what sells. Cafés and restaurants needed a menu guests open with a QR code that does all three, priced so a small café only pays for what it uses.",
    features: [
      "QR ordering per table, with orders going straight to the owner's screen",
      "Amharic and English, with fasting, vegetarian and allergen filters",
      "Item options, live sold-out and \"goes well with\" suggestions",
      "Per-item analytics, with features switched on per business",
    ],
    facts: [{ label: "Built for", value: "Cafés, restaurants and hotels, from Starter to Growth plans" }],
    links: [{ label: "Live demo", href: "https://oumburs9.github.io/arki-digital-menu/" }],
    image: "/projects/serviy-menu.jpg",
    icon: "QrCode",
  },
  {
    slug: "mpa-membership-platform",
    name: "MPA Membership & Event Platform",
    kind: "client",
    status: "Live",
    sector: "Membership",
    client: "Muslim Professionals Association",
    period: "Apr – Nov 2025",
    summary:
      "Member registration, membership and subscriptions, and event management with online payment through Chapa.",
    challenge:
      "The association needed one place where professionals can join, keep their membership active, and register and pay for events online, without paperwork.",
    features: [
      "Member registration",
      "Membership and subscriptions",
      "Event management",
      "Online payment through Chapa",
    ],
    stack: ["Chapa payments"],
    links: [{ label: "muslimprofession.org", href: "https://muslimprofession.org/" }],
    image: "/projects/mpa.jpg",
    icon: "UsersRound",
    scene: "member",
  },
  {
    slug: "trade-escrow",
    name: "TradeEscrow",
    kind: "open-source",
    status: "Live",
    sector: "Agri-export",
    period: "2026 – present",
    summary:
      "An Ethereum escrow that replaces slow, costly bank letters of credit for agricultural exports.",
    challenge:
      "Bank letters of credit for agricultural exports are slow and costly. Buyers and exporters still need protection: payment should move only when the goods arrive as agreed.",
    features: [
      "The buyer locks payment in a smart contract",
      "The exporter ships the goods",
      "An independent inspector confirms the delivery",
      "Payment is released automatically, or the buyer is refunded",
    ],
    stack: ["Ethereum", "Smart contracts"],
    links: [
      { label: "Live app", href: "https://oumburs9.github.io/trade-escrow/" },
      { label: "GitHub", href: "https://github.com/oumburs9/trade-escrow" },
    ],
    image: "/projects/trade-escrow.jpg",
    icon: "Handshake",
    industries: ["fintech-solutions"],
  },
  {
    slug: "bioflex",
    name: "BioFlex",
    kind: "research",
    status: "Completed",
    sector: "Biomedical AI",
    client: "Ethiopian Artificial Intelligence Institute",
    period: "2023 – Jul 2024",
    summary:
      "Machine learning that classifies muscle (EMG) signals to control a bionic hand.",
    challenge:
      "A bionic hand is only useful if it follows the wearer's intent. The research question was whether machine learning could read that intent reliably from muscle signals.",
    features: [
      "Machine learning models that classify muscle (EMG) signals",
      "Signals turned into bionic hand movements",
      "Funded by the Ethiopian Artificial Intelligence Institute",
      "Published research",
    ],
    stack: ["Machine learning", "EMG signal processing"],
    icon: "Activity",
    scene: "signal",
    industries: ["ai-data-solutions"],
  },
];

/** Organisations we have built for or with, shown on /portfolio. */
export const clientList = [
  "Oromia Region President's Office",
  "Alif Car Import",
  "Muslim Professionals Association",
  "Ethiopian Artificial Intelligence Institute",
];

export const portfolioCopy = {
  crumb: "Portfolio",
  eyebrow: "Portfolio",
  title: "Software we've built",
  highlight: "and shipped.",
  intro:
    "Government platforms, enterprise systems and products of our own, designed, built and supported by our team in Addis Ababa.",
  cta: { label: "Start a project", href: "/schedule-meeting" },
  featuredEyebrow: "Featured work",
  featuredTitle: "Projects we're",
  featuredHighlight: "proud of.",
  moreEyebrow: "More work",
  moreTitle: "Platforms, products",
  moreHighlight: "and research.",
  clientsEyebrow: "Clients & partners",
  clientsTitle: "Who we've built",
  clientsHighlight: "for and with.",
  view: "View project",
  /* Project page */
  allWork: "All work",
  problemEyebrow: "The problem",
  builtEyebrow: "What we built",
  stackEyebrow: "Built with",
  liveEyebrow: "See it live",
  similar: "Start a similar project",
  next: "Next project",
  /* Home and industry pages */
  homeEyebrow: "Our work",
  homeTitle: "Recent projects",
  homeHighlight: "we've built.",
  homeText:
    "Real systems for real organisations: government, enterprise, healthcare and hospitality.",
  videoEyebrow: "Watch it work",
  videoTitle: "See it",
  videoHighlight: "in action.",
  homeAll: "See all projects",
  industryEyebrow: "Our work",
  industryTitle: "Work in",
  industryText: "Projects our team has built in this field.",
};

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
export const featuredProjects = () => projects.filter((p) => p.featured);
export const projectsForIndustry = (slug: string) =>
  projects.filter((p) => p.industries?.includes(slug));

/** The projects on the home page, two rows of three. */
const homeSlugs = [
  "tumsa",
  "fewes-pharmacy-os",
  "serviy",
  "custom-enterprise-erp",
  "hospital-management-system",
  "trade-escrow",
];
export const homeProjects = () =>
  homeSlugs.map(getProject).filter((p): p is Project => !!p);
