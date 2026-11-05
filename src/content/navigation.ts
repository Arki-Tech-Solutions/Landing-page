/**
 * Header mega-menus and footer link columns.
 * Structure mirrors the reference site; labels are generic service names.
 */

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
      { label: "Healthcare Software Engineering", href: "/industries/healthcare-solutions/software-development", description: "Custom platforms that improve patient care and clinical workflows." },
      { label: "Medical Application Development", href: "/industries/healthcare-solutions/application-development", description: "Secure patient apps with outcome-focused UX and integrations." },
      { label: "Remote Patient Monitoring Systems", href: "/industries/healthcare-solutions/remote-patient-monitoring", description: "Continuous vitals, alerts and dashboards for distributed care teams." },
      { label: "EHR & EMR Interoperability", href: "/industries/healthcare-solutions/ehr-emr-interoperability", description: "Compliant data exchange across hospitals, clinics and vendors." },
      { label: "Telemedicine Platform Solutions", href: "/industries/healthcare-solutions/telemedicine-systems", description: "Video-first virtual care built for scale, privacy and uptime." },
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
      { label: "AI-Powered Tutoring Systems", href: "/industries/edtech-solutions/ai-powered-tutoring", description: "Adaptive practice, feedback loops and personalization at scale." },
      { label: "Learning Management Platforms", href: "/industries/edtech-solutions/lms-platforms", description: "Courses, cohorts and analytics in one institution-grade stack." },
      { label: "Student Information Systems", href: "/industries/edtech-solutions/student-information-systems", description: "Enrollment, grades and records with role-based governance." },
      { label: "Virtual Classroom Experiences", href: "/industries/edtech-solutions/virtual-classrooms", description: "Live and hybrid sessions with engagement and attendance tools." },
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
      { label: "Headless Commerce Architecture", href: "/industries/e-commerce-solutions/headless-commerce-architecture", description: "API-first catalogs, carts and checkout across any storefront." },
      { label: "Multi-Vendor Marketplace Platforms", href: "/industries/e-commerce-solutions/multi-vendor-marketplaces", description: "Sellers, payouts, disputes and policy in one control plane." },
      { label: "Mobile-First Commerce PWAs", href: "/industries/e-commerce-solutions/mobile-first-pwas", description: "Fast, installable shopping that works on patchy networks." },
      { label: "Custom Payment Gateway Integrations", href: "/industries/e-commerce-solutions/custom-payment-gateways", description: "Local and global payment rails, including mobile money." },
      { label: "Omnichannel Commerce Integrations", href: "/industries/e-commerce-solutions/omnichannel-integrations", description: "Unified orders, inventory and customers across channels." },
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
      { label: "AI Fraud Detection & Scoring", href: "/industries/fintech-solutions/ai-fraud-detection", description: "Real-time models and rules that reduce losses and noise." },
      { label: "Blockchain & DeFi Protocol Engineering", href: "/industries/fintech-solutions/blockchain-defi-protocols", description: "On-chain products with custody, risk and compliance by design." },
      { label: "Secure Payment Gateway Engineering", href: "/industries/fintech-solutions/secure-payment-gateways", description: "Tokenization, 3-D Secure and fraud-aware checkout." },
      { label: "RegTech & Compliance Automation", href: "/industries/fintech-solutions/regtech-automation", description: "KYC, AML and audit-ready reporting without manual drag." },
      { label: "Digital Banking Platform Delivery", href: "/industries/fintech-solutions/digital-banking-platforms", description: "Accounts, cards and lending flows in a unified core." },
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
      { label: "LLM & RAG Systems", href: "/industries/ai-data-solutions/llm-rag-systems", description: "Generative AI pipelines grounded in your own data." },
      { label: "Custom AI Agents", href: "/industries/ai-data-solutions/custom-ai-agents", description: "Agents that automate complex, multi-step workflows." },
      { label: "Machine Learning Engineering", href: "/industries/ai-data-solutions/machine-learning-engineering", description: "Predictive and deep learning models for specific use cases." },
      { label: "Data Infrastructure", href: "/industries/ai-data-solutions/data-infrastructure", description: "Data lakes and pipelines for real-time analytics." },
    ],
  },
];

/** Industries shown in the header mega-menu and mobile menu (in `industryMenu` order). */
export const headerIndustryIds = ["healthcare", "fintech", "ecommerce", "edtech", "ai-data"];

export type ResourceMenuCategory = { id: string; title: string; icon: string; entries: (NavLink & { icon: string })[] };

export const resourceMenu: { featured: { headline: string; subheadline: string; href: string }; categories: ResourceMenuCategory[] } = {
  featured: {
    headline: "See clearly. Build what satisfies.",
    subheadline: "Partner with Arki Tech for secure, scalable software built by senior engineers in Addis Ababa.",
    href: "/ourstories",
  },
  categories: [
    {
      id: "resources",
      title: "Insights",
      icon: "LayoutDashboard",
      entries: [
        { label: "Blog", href: "/blog", description: "Notes on craft, delivery and lessons from our projects.", icon: "FileText" },
        { label: "Case Studies", href: "/case-studies", description: "Client journeys from kickoff through launch and support.", icon: "Briefcase" },
        { label: "Process", href: "/process", description: "Sprints, clear updates and shipping production code.", icon: "Presentation" },
      ],
    },
    {
      id: "learn",
      title: "Clients",
      icon: "BookOpen",
      entries: [
        { label: "Our Clients", href: "/all-clients", description: "Teams that trust the systems we design, build and run.", icon: "Globe" },
        { label: "Testimonials", href: "/all-testimonials", description: "What partners say about speed, quality and reliability.", icon: "MessageSquare" },
      ],
    },
    {
      id: "company",
      title: "About us",
      icon: "Building",
      entries: [
        { label: "Our Story", href: "/ourstories", description: "Why we started, what Arki means, and where we are going.", icon: "BookOpen" },
        { label: "Life @ Arki Tech", href: "/life-at-arki-tech", description: "Culture, learning and teamwork in Addis Ababa.", icon: "Users" },
        { label: "Engagement Model", href: "/engagement-model", description: "Teams, pricing and delivery that scale with you.", icon: "Briefcase" },
      ],
    },
  ],
};

/** Link under the Services/Technologies/Industries mega-menus. */
export const whyArkiLink = { label: "How we work with product teams →", href: "/why-arki" };

/** Label of the "Read more" link in the mega-menu footer bars and mobile accordions. */
export const readMoreLabel = "Read more";

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "Our Story", href: "/ourstories" },
      { label: "Process", href: "/process" },
      { label: "Engagement Model", href: "/engagement-model" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Why Arki Tech",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Client Testimonials", href: "/all-testimonials" },
      { label: "Life @ Arki Tech", href: "/life-at-arki-tech" },
      { label: "Careers", href: "/life-at-arki-tech#careers" },
      { label: "Our Clients", href: "/all-clients" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Engineering Teams", href: "/services/hire-dedicated-developers" },
      { label: "AI & Data Products", href: "/services/ai-development-services" },
      { label: "Software Engineering", href: "/services/software-development" },
      { label: "Cloud & DevOps", href: "/services/cloud-solutions" },
      { label: "Product Modernization", href: "/services/modernization-support" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Your Privacy Choices", href: "/privacy-choices" },
];
