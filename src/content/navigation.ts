/**
 * Header mega-menus and footer link columns.
 * Services list the five main services (menuServices); Company groups the about and working-with-us pages.
 */
import { isHidden } from "./hidden";

/** Drops links to hidden pages (content/hidden.ts), and any group left empty. */
const withoutHidden = <T extends { entries: NavLink[] }>(groups: T[]) =>
  groups.map((g) => ({ ...g, entries: g.entries.filter((e) => !isHidden(e.href)) })).filter((g) => g.entries.length > 0);
const withoutHiddenLinks = <T extends { links: NavLink[] }>(groups: T[]) =>
  groups.map((g) => ({ ...g, links: g.links.filter((l) => !isHidden(l.href)) })).filter((g) => g.links.length > 0);

export type NavLink = { label: string; href: string; description?: string };

export type ServiceMenuCategory = {
  id: string;
  label: string;
  href: string;
  icon: string; // lucide-react icon name
  /**
   * Id of the one subcategory shown in the header menus. The other subcategory is left
   * out of the menus for now but keeps its page; set this to its id to swap them.
   */
  menuPick?: string;
  subcategories: { id: string; label: string; href: string; entries: NavLink[] }[];
};

const svc = (cat: string, sub: string, slug: string) => `/services/${cat}/${sub}/${slug}`;

export const serviceMenu: ServiceMenuCategory[] = [
  {
    id: "artificial-intelligence",
    label: "Artificial Intelligence",
    href: "/services/ai-development-services",
    icon: "Brain",
    menuPick: "generative-ai",
    subcategories: [
      {
        id: "generative-ai",
        label: "Generative AI & LLMs",
        href: "/services/artificial-intelligence/generative-ai",
        entries: [
          { label: "Custom LLM Engineering", href: svc("artificial-intelligence", "generative-ai", "custom-llm-development") },
          { label: "OpenAI Integration Services", href: svc("artificial-intelligence", "generative-ai", "openai-integrations") },
          { label: "Enterprise AI Chatbots", href: svc("artificial-intelligence", "generative-ai", "ai-chatbots") },
          { label: "RAG Architecture Design", href: svc("artificial-intelligence", "generative-ai", "rag-architecture") },
        ],
      },
      {
        id: "data-science",
        label: "Data Science & ML Engineering",
        href: "/services/artificial-intelligence/data-science",
        entries: [
          { label: "Predictive Analytics Models", href: svc("artificial-intelligence", "data-science", "predictive-analytics") },
          { label: "NLP & Computer Vision", href: svc("artificial-intelligence", "data-science", "nlp-computer-vision") },
          { label: "Data Pipeline Engineering", href: svc("artificial-intelligence", "data-science", "data-engineering") },
          { label: "Workflow Automation Systems", href: svc("artificial-intelligence", "data-science", "workflow-automation") },
        ],
      },
    ],
  },
  {
    id: "team-engagement",
    label: "Team Engagement",
    href: "/services/hire-dedicated-developers",
    icon: "Users",
    menuPick: "staff-augmentation",
    subcategories: [
      {
        id: "staff-augmentation",
        label: "Expert Staff Augmentation",
        href: "/services/team-engagement/staff-augmentation",
        entries: [
          { label: "Dedicated Developer Teams", href: svc("team-engagement", "staff-augmentation", "dedicated-engineers") },
          { label: "Professional IT Staffing", href: svc("team-engagement", "staff-augmentation", "it-staffing") },
          { label: "Managed Delivery Teams", href: svc("team-engagement", "staff-augmentation", "managed-teams") },
          { label: "Senior Technical Leads", href: svc("team-engagement", "staff-augmentation", "tech-leads") },
        ],
      },
      {
        id: "project-delivery",
        label: "Managed Project Delivery",
        href: "/services/team-engagement/project-delivery",
        entries: [
          { label: "Agile Delivery Squads", href: svc("team-engagement", "project-delivery", "agile-squads") },
          { label: "End-to-End Development", href: svc("team-engagement", "project-delivery", "full-cycle-development") },
          { label: "Rapid Prototype Delivery", href: svc("team-engagement", "project-delivery", "rapid-prototyping") },
          { label: "QA & Quality Engineering", href: svc("team-engagement", "project-delivery", "qa-testing") },
        ],
      },
    ],
  },
  {
    id: "software-engineering",
    label: "Software Engineering",
    href: "/services/software-development",
    icon: "Code2",
    menuPick: "custom-applications",
    subcategories: [
      {
        id: "custom-applications",
        label: "Custom Applications",
        href: "/services/software-engineering/custom-applications",
        entries: [
          { label: "Custom Web Applications", href: svc("software-engineering", "custom-applications", "web-applications") },
          { label: "Mobile Application Delivery", href: svc("software-engineering", "custom-applications", "mobile-apps") },
          { label: "Enterprise Software Systems", href: svc("software-engineering", "custom-applications", "enterprise-systems") },
          { label: "Scalable SaaS Platforms", href: svc("software-engineering", "custom-applications", "saas-platforms") },
        ],
      },
      {
        id: "product-engineering",
        label: "Product Engineering",
        href: "/services/software-engineering/product-engineering",
        entries: [
          { label: "Product UI/UX Design", href: svc("software-engineering", "product-engineering", "ui-ux-design") },
          { label: "MVP Product Development", href: svc("software-engineering", "product-engineering", "mvp-development") },
          { label: "API Architecture Design", href: svc("software-engineering", "product-engineering", "api-architecture") },
          { label: "Enterprise System Integration", href: svc("software-engineering", "product-engineering", "system-integration") },
        ],
      },
    ],
  },
  {
    id: "cloud-solutions",
    label: "Cloud Solutions",
    href: "/services/cloud-solutions",
    icon: "Cloud",
    menuPick: "cloud-infrastructure",
    subcategories: [
      {
        id: "cloud-infrastructure",
        label: "Cloud Infrastructure Design",
        href: "/services/cloud-solutions/cloud-infrastructure",
        entries: [
          { label: "AWS Cloud Engineering", href: svc("cloud-solutions", "cloud-infrastructure", "aws-cloud-services") },
          { label: "Microsoft Azure Solutions", href: svc("cloud-solutions", "cloud-infrastructure", "azure-solutions") },
          { label: "Cloud Migration Programs", href: svc("cloud-solutions", "cloud-infrastructure", "cloud-migration") },
          { label: "Serverless Architecture", href: svc("cloud-solutions", "cloud-infrastructure", "serverless-architecture") },
        ],
      },
      {
        id: "devops-services",
        label: "DevOps & Automation",
        href: "/services/cloud-solutions/devops-services",
        entries: [
          { label: "CI/CD Pipeline Engineering", href: svc("cloud-solutions", "devops-services", "ci-cd-pipelines") },
          { label: "Infrastructure as Code", href: svc("cloud-solutions", "devops-services", "infrastructure-as-code") },
          { label: "Microservices Architecture", href: svc("cloud-solutions", "devops-services", "microservices") },
          { label: "Cloud Security Engineering", href: svc("cloud-solutions", "devops-services", "cloud-security") },
        ],
      },
    ],
  },
  {
    id: "modernization-support",
    label: "Modernization & Support",
    href: "/services/modernization-support",
    icon: "RefreshCw",
    menuPick: "support-maintenance",
    subcategories: [
      {
        id: "legacy-modernization",
        label: "Legacy Modernization",
        href: "/services/modernization-support/legacy-modernization",
        entries: [
          { label: "Legacy System Refactoring", href: svc("modernization-support", "legacy-modernization", "system-refactoring") },
          { label: "Microservices Migration", href: svc("modernization-support", "legacy-modernization", "monolith-to-microservices") },
          { label: "Cloud Replatforming Services", href: svc("modernization-support", "legacy-modernization", "cloud-replatforming") },
          { label: "Architecture Review Audits", href: svc("modernization-support", "legacy-modernization", "architecture-audits") },
        ],
      },
      {
        id: "support-maintenance",
        label: "Support & Maintenance",
        href: "/services/modernization-support/support-maintenance",
        entries: [
          { label: "24/7 SLA Monitoring Services", href: svc("modernization-support", "support-maintenance", "24-7-sla-monitoring") },
          { label: "Site Reliability Engineering", href: svc("modernization-support", "support-maintenance", "site-reliability-engineering") },
          { label: "Disaster Recovery Planning", href: svc("modernization-support", "support-maintenance", "disaster-recovery") },
          { label: "Security Patching Programs", href: svc("modernization-support", "support-maintenance", "security-patching") },
        ],
      },
    ],
  },
];

/**
 * The main services as listed in the header menus and footer, in this order. Names and lines
 * match the home page "What we build" cards. (serviceMenu above still drives the service pages.)
 */
export const menuServices: (NavLink & { icon: string; description: string })[] = [
  { label: "AI & Data", href: "/services/ai-development-services", icon: "Brain", description: "AI assistants, agents and data pipelines built into the products you already run." },
  { label: "Custom Software", href: "/services/software-development", icon: "Code2", description: "Web and mobile apps, and the backend systems behind them, built around how you work." },
  { label: "Cloud & DevOps", href: "/services/cloud-solutions", icon: "Cloud", description: "Cloud setup, automated releases and monitoring that keep your product running." },
  { label: "Dedicated Teams", href: "/services/hire-dedicated-developers", icon: "Users", description: "Experienced engineers who join your team, work in your tools and stay for the long run." },
  { label: "Modernization & Support", href: "/services/modernization-support", icon: "RefreshCw", description: "Rework ageing systems and keep live software secure and healthy after launch." },
];

export type IndustryMenuCategory = {
  id: string;
  label: string;
  /** Shorter label used in the header mega-menu, when it differs from `label`. */
  menuLabel?: string;
  /** Icon used in the header menus only, when it differs from `icon` (lucide name). */
  menuIcon?: string;
  /**
   * Offerings shown in the header menus, by href, in this order. The other offerings
   * (including the blockchain and crypto ones) are left out of the menus for now but
   * keep their pages and stay listed on the industry page.
   */
  menuPicks?: string[];
  href: string;
  icon: string;
  entries: NavLink[];
};

export const industryMenu: IndustryMenuCategory[] = [
  {
    id: "healthcare",
    label: "Healthcare Solutions",
    menuLabel: "Healthcare",
    menuIcon: "Stethoscope",
    menuPicks: [
      "/industries/healthcare-solutions/application-development",
      "/industries/healthcare-solutions/telemedicine-systems",
      "/industries/healthcare-solutions/ehr-emr-interoperability",
    ],
    href: "/industries/healthcare-solutions",
    icon: "HeartPulse",
    entries: [
      { label: "Clinical Software", href: "/industries/healthcare-solutions/software-development", description: "Systems built around how clinics and hospitals actually run, from intake to discharge." },
      { label: "Patient Apps", href: "/industries/healthcare-solutions/application-development", description: "Booking, results and reminders patients can use on any phone." },
      { label: "Remote Patient Monitoring", href: "/industries/healthcare-solutions/remote-patient-monitoring", description: "Readings from home devices, with alerts the care team can act on." },
      { label: "Health Records Integration", href: "/industries/healthcare-solutions/ehr-emr-interoperability", description: "Patient records that move safely between clinics, labs and pharmacies." },
      { label: "Telemedicine Platforms", href: "/industries/healthcare-solutions/telemedicine-systems", description: "Video and audio visits that hold up on everyday mobile networks." },
    ],
  },
  {
    id: "edtech",
    label: "EdTech Solutions",
    menuLabel: "Education",
    menuIcon: "School",
    menuPicks: [
      "/industries/edtech-solutions/lms-platforms",
      "/industries/edtech-solutions/student-information-systems",
      "/industries/edtech-solutions/ai-powered-tutoring",
    ],
    href: "/industries/edtech-solutions",
    icon: "GraduationCap",
    entries: [
      { label: "AI Tutors", href: "/industries/edtech-solutions/ai-powered-tutoring", description: "Practice and feedback that adapt to each student, with teachers in control." },
      { label: "Learning Platforms (LMS)", href: "/industries/edtech-solutions/lms-platforms", description: "Courses, enrollment and grading in one place, usable on a phone." },
      { label: "Student Information Systems", href: "/industries/edtech-solutions/student-information-systems", description: "Enrollment, attendance, grades and fees in one accurate record." },
      { label: "Virtual Classrooms", href: "/industries/edtech-solutions/virtual-classrooms", description: "Live and recorded lessons that work for students on mobile data." },
    ],
  },
  { id: "gaming", label: "Gaming Solutions", href: "/industries/gaming-industry-solutions", icon: "Gamepad2", entries: [] },
  {
    id: "ecommerce",
    label: "E-Commerce Solutions",
    menuLabel: "Commerce",
    menuIcon: "ShoppingBag",
    menuPicks: [
      "/industries/e-commerce-solutions/multi-vendor-marketplaces",
      "/industries/e-commerce-solutions/custom-payment-gateways",
      "/industries/e-commerce-solutions/mobile-first-pwas",
    ],
    href: "/industries/e-commerce-solutions",
    icon: "ShoppingCart",
    entries: [
      { label: "Headless Storefronts", href: "/industries/e-commerce-solutions/headless-commerce-architecture", description: "Fast custom storefronts on top of the commerce engine you choose." },
      { label: "Multi-Vendor Marketplaces", href: "/industries/e-commerce-solutions/multi-vendor-marketplaces", description: "Seller onboarding, commissions and payouts in one system." },
      { label: "Mobile Shopping Apps (PWA)", href: "/industries/e-commerce-solutions/mobile-first-pwas", description: "Installable stores that load fast on modest phones and networks." },
      { label: "Payment Integrations", href: "/industries/e-commerce-solutions/custom-payment-gateways", description: "Mobile money, bank and card payments with clean reconciliation." },
      { label: "Omnichannel Operations", href: "/industries/e-commerce-solutions/omnichannel-integrations", description: "One view of stock, orders and customers across shop, web and social." },
    ],
  },
  {
    id: "fintech",
    label: "FinTech Solutions",
    menuLabel: "Payments & FinTech",
    menuIcon: "Wallet",
    menuPicks: [
      "/industries/fintech-solutions/secure-payment-gateways",
      "/industries/fintech-solutions/digital-banking-platforms",
      "/industries/fintech-solutions/ai-fraud-detection",
    ],
    href: "/industries/fintech-solutions",
    icon: "Landmark",
    entries: [
      { label: "Fraud Detection", href: "/industries/fintech-solutions/ai-fraud-detection", description: "Models and rules that catch suspicious activity without blocking good customers." },
      { label: "Blockchain & DeFi Protocol Engineering", href: "/industries/fintech-solutions/blockchain-defi-protocols", description: "On-chain products with custody, risk and compliance by design." },
      { label: "Payment Gateways", href: "/industries/fintech-solutions/secure-payment-gateways", description: "Secure checkout and payment processing that stands up to an audit." },
      { label: "Compliance Automation", href: "/industries/fintech-solutions/regtech-automation", description: "KYC, AML checks and regulatory reports without the spreadsheet work." },
      { label: "Digital Banking Platforms", href: "/industries/fintech-solutions/digital-banking-platforms", description: "Accounts, transfers and lending in apps customers trust." },
      { label: "Retail & Institutional Crypto Wallets", href: "/industries/fintech-solutions/crypto-wallets", description: "Policy-driven wallets for consumers and treasuries." },
    ],
  },
  {
    id: "ai-data",
    label: "AI & Data Products",
    menuLabel: "AI & Data",
    menuIcon: "Sparkles",
    menuPicks: [
      "/industries/ai-data-solutions/llm-rag-systems",
      "/industries/ai-data-solutions/custom-ai-agents",
      "/industries/ai-data-solutions/machine-learning-engineering",
    ],
    href: "/industries/ai-data-solutions",
    icon: "Database",
    entries: [
      { label: "AI Assistants on Your Data", href: "/industries/ai-data-solutions/llm-rag-systems", description: "Chat and search that answer from your own documents, with sources." },
      { label: "AI Agents", href: "/industries/ai-data-solutions/custom-ai-agents", description: "Agents that handle routine, multi-step work across your tools." },
      { label: "Machine Learning Models", href: "/industries/ai-data-solutions/machine-learning-engineering", description: "Forecasting, scoring and classification models built for one clear job." },
      { label: "Data Pipelines & Warehousing", href: "/industries/ai-data-solutions/data-infrastructure", description: "Clean, reliable data in one place for reporting and AI." },
    ],
  },
];

/** Industries shown in the header mega-menu and mobile menu (in `industryMenu` order). */
export const headerIndustryIds = ["healthcare", "fintech", "ecommerce", "edtech", "ai-data"];

export type ResourceMenuCategory = { id: string; title: string; icon: string; entries: (NavLink & { icon: string })[] };

export const resourceMenu: { featured: { headline: string; subheadline: string; href: string }; categories: ResourceMenuCategory[] } = {
  featured: {
    headline: "See clearly. Build what satisfies.",
    subheadline: "Software and AI engineering from Addis Ababa, by the team that plans it, builds it and supports it.",
    href: "/ourstories",
  },
  categories: withoutHidden([
    {
      id: "company",
      title: "About Arki",
      icon: "Building",
      entries: [
        { label: "Our Story", href: "/ourstories", description: "Who we are, what Arki means and the work so far.", icon: "BookOpen" },
        { label: "Why Arki Tech", href: "/why-arki", description: "Six reasons teams choose us, each backed by real work.", icon: "Eye" },
        { label: "Portfolio", href: "/portfolio", description: "Real projects: government, enterprise and our own products.", icon: "Briefcase" },
        { label: "Life @ Arki Tech", href: "/life-at-arki-tech", description: "Culture, learning and teamwork in Addis Ababa.", icon: "Users" },
      ],
    },
    {
      id: "working",
      title: "Working with us",
      icon: "Presentation",
      entries: [
        { label: "How We Work", href: "/process", description: "Five steps from first call to launch, with a demo every week.", icon: "Presentation" },
        { label: "Ways to Work With Us", href: "/engagement-model", description: "A project, a dedicated team, or engineers in your team.", icon: "Users" },
        { label: "Book a Meeting", href: "/schedule-meeting", description: "A 30-minute call with the engineers, not a salesperson.", icon: "CalendarCheck" },
      ],
    },
    {
      // Hidden for now (content/hidden.ts); the group appears again when its pages come back.
      id: "resources",
      title: "Resources",
      icon: "LayoutDashboard",
      entries: [
        { label: "Blog", href: "/blog", description: "Notes on craft, delivery and lessons from our projects.", icon: "FileText" },
        { label: "Our Clients", href: "/all-clients", description: "Teams that trust the systems we design, build and run.", icon: "Globe" },
        { label: "Testimonials", href: "/all-testimonials", description: "What partners say about speed, quality and reliability.", icon: "MessageSquare" },
      ],
    },
  ]),
};

/** Link under the Services/Technologies/Industries mega-menus. */
export const whyArkiLink = { label: "Why teams choose Arki →", href: "/why-arki" };

/** Label of the "Read more" link in the mega-menu footer bars and mobile accordions. */
export const readMoreLabel = "Read more";

export const footerColumns: { heading: string; links: NavLink[] }[] = withoutHiddenLinks([
  {
    heading: "Company",
    links: [
      { label: "Our Story", href: "/ourstories" },
      { label: "Why Arki Tech", href: "/why-arki" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Life @ Arki Tech", href: "/life-at-arki-tech" },
      { label: "Careers", href: "/life-at-arki-tech#careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Work With Us",
    links: [
      { label: "How We Work", href: "/process" },
      { label: "Ways to Work With Us", href: "/engagement-model" },
      { label: "Book a Meeting", href: "/schedule-meeting" },
      { label: "Our Clients", href: "/all-clients" },
      { label: "Client Testimonials", href: "/all-testimonials" },
    ],
  },
  {
    heading: "Services",
    links: menuServices.map(({ label, href }) => ({ label, href })),
  },
]);

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Your Privacy Choices", href: "/privacy-choices" },
];
