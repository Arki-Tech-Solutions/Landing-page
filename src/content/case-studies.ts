/**
 * Case studies. Shared by the home carousel, /case-studies and /case-studies/[slug].
 *
 * TODO(confirm): these are SAMPLE projects that show the layout. Replace each one
 * with a real Arki Tech project (client name only with the client's permission).
 * They are flagged with `sample: true` so they are easy to find.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  /** Upper-case tag line, e.g. "FINTECH, PAYMENTS / MOBILE". */
  tags: string;
  summary: string;
  tech: string;
  /** lucide-react icon used in the generated cover visual until real screenshots exist. */
  icon: string;
  /** Optional screenshot/mockup in /public. */
  image?: string;
  sample?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mobile-money-checkout",
    title: "Mobile Money Checkout",
    tags: "FINTECH, PAYMENTS / MOBILE",
    summary: "A unified checkout that accepts mobile money, bank transfers and cards for a multi-branch retailer, with automatic reconciliation and offline-tolerant receipts.",
    tech: "Go, PostgreSQL, Flutter, Next.js",
    icon: "Wallet",
    sample: true,
  },
  {
    slug: "clinic-records-platform",
    title: "Clinic Records Platform",
    tags: "HEALTHCARE / SAAS",
    summary: "Patient records, appointments and lab results for a network of private clinics, with role-based access and audit trails built in from day one.",
    tech: "NestJS, PostgreSQL, React",
    icon: "HeartPulse",
    sample: true,
  },
  {
    slug: "amharic-support-assistant",
    title: "Amharic Support Assistant",
    tags: "AI, NLP / CUSTOMER SUPPORT",
    summary: "A retrieval-augmented assistant that answers customer questions in Amharic and English from a company's own documents, with human handover for edge cases.",
    tech: "Python, FastAPI, LangChain, pgvector",
    icon: "MessagesSquare",
    sample: true,
  },
  {
    slug: "agri-marketplace",
    title: "Agri Marketplace",
    tags: "AGRICULTURE, E-COMMERCE / LOGISTICS",
    summary: "A marketplace linking farmer cooperatives with wholesale buyers, including price discovery, order tracking and a driver app for last-mile delivery.",
    tech: "Django, Flutter, Next.js",
    icon: "Sprout",
    sample: true,
  },
  {
    slug: "school-learning-portal",
    title: "School Learning Portal",
    tags: "EDTECH / WEB & MOBILE",
    summary: "A learning portal for schools with course content, assignments, grading and parent updates that stays usable on low-bandwidth connections.",
    tech: "Laravel, Vue.js, MySQL",
    icon: "GraduationCap",
    sample: true,
  },
  {
    slug: "logistics-control-tower",
    title: "Logistics Control Tower",
    tags: "LOGISTICS, DATA / CLOUD",
    summary: "Real-time fleet tracking and dispatch dashboards for a freight operator, with event streaming, alerting and analytics on a cost-aware cloud setup.",
    tech: "Node.js, Kafka, React, AWS",
    icon: "Truck",
    sample: true,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
