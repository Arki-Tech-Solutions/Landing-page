/**
 * Industry pages (/industries/[industry]) and industry offering pages
 * (/industries/[industry]/[offering]).
 *
 * Labels, hrefs and one-line descriptions come from `industryMenu` in
 * `navigation.ts`; this file holds the page copy only.
 *
 * TODO(confirm): every `caseStudy` below is a SAMPLE (flagged `sample: true`) that
 * shows the layout. Replace with a real Arki Tech project (client name only with
 * the client's permission). Client logos on industry pages are placeholders too.
 */
import { industryMenu, type IndustryMenuCategory, type NavLink } from "./navigation";

export type Faq = { q: string; a: string };

export type IndustryCard = { title: string; description: string; points: string[] };

export type IndustryContent = {
  /** Highlighted first word(s) of the hero h1. */
  heroHighlight: string;
  heroTitle: string;
  heroDescription: string;
  /** Six short highlights under the hero, shown with icons. */
  highlights: string[];
  /** Four capability cards. */
  cards: IndustryCard[];
  /** Three short challenge statements for the dark consultation band (keep under ~55 chars). */
  challenges: string[];
  /** Six niche solutions. */
  niche: string[];
  caseStudy: {
    client: string;
    context: string;
    challenge: string;
    solution: string;
    result: string;
    sample?: boolean;
  };
  /** Six "why choose us" points. */
  whyUs: string[];
  faqs: Faq[];
};

export type OfferingContent = {
  /** Paragraph under the tagline in the hero. */
  intro: string;
  /** Five outcomes. The first four also appear in the hero sidebar. */
  outcomes: string[];
  /** Six practices. The first five also appear as hero tags. */
  practices: string[];
  /** Four challenges. */
  challenges: string[];
  /** Five delivery phases. */
  phases: string[];
  /** Three audiences. */
  audiences: { title: string; text: string }[];
  faqs: Faq[];
};

/** Shared section copy for the industry template. */
export const industryTemplate = {
  heroCta: { label: "Book a 30-min call", href: "/schedule-meeting" },
  cardsTitle: "Engineered for efficient operations",
  cardsDescription: "We start from how your business actually runs, then apply the right technology to deliver measurable results.",
  consultTitle: "Move your product forward with senior engineers who build it right the first time.",
  consultCta: { label: "Get a free consultation with an engineer", href: "/schedule-meeting" },
  nicheTitle: "Focused solutions we build",
  nicheDescription: "Products that streamline operations and sharpen everyday decision-making",
  statsTitle: "What we bring to every engagement",
  caseTitle: "Case Study Snapshot",
  caseDescription: "How we approach real problems with purpose-built technology.",
  caseLabels: { client: "Client", challenge: "Challenge", solution: "Our Solution", result: "Result" },
  methodTitle: "Our Lean-Agile Methodology",
  methodDescription: "A delivery roadmap shaped around your business goals",
  method: {
    analysis: "Analysis & Modeling",
    arrow: "Processing",
    poc: "POC (Proof of Concept) OR MVP (Minimum Viable Product)",
    loop: "Development & Re-engineering",
    roles: ["Product Owner", "Scrum Master"],
    sprint: { length: "1 - 4 Wk", label: "Sprint" },
    review: "Sprint Review",
    secure: "Securing & Deployment",
    support: "Stage Development & Support",
  },
  clientsTitle: "Our partners and clients",
  /** TODO(confirm): replace with real client logos (with permission). */
  clientLogos: ["Client Name", "Client Name", "Client Name", "Client Name", "Client Name", "Client Name"],
  clientsCta: { label: "View more clients", href: "/all-clients" },
  whyTitle: "Why teams choose Arki",
  whyDescription: "Our engineering services are shaped around you, your customers and the growth of your business.",
  faqDescription: "Wondering how we work, what to expect or how engagements are structured? Here are the answers clients ask for most.",
};

/** Shared section copy for the offering template. */
export const offeringTemplate = {
  heroCta: { label: "Book a 30-min call", href: "/schedule-meeting" },
  outcomeLabel: "Outcome",
  focusLabel: "Focus",
  challengesBadge: "Reality check",
  challengesTitle: "Challenges we help you solve",
  challengesDescription: "Most teams hit similar obstacles. Here is where we start.",
  outcomesBadge: "Outcome",
  outcomesTitle: "What success looks like",
  stackBadge: "Stack & Practice",
  stackTitle: "How we",
  stackHighlight: "engineer it",
  stackDescription: "The technical stack, specialist tooling and delivery habits that keep quality consistent and pace predictable.",
  stackStats: [
    { value: "6", label: "Core Practices" },
    { value: "5", label: "Delivery Phases" },
  ],
  stackFocusTitle: "Built to the same standard on every engagement.",
  stackFocusCta: { label: "Our process", href: "/process" },
  deliveryBadge: "Execution",
  deliveryTitle: "Delivery path",
  deliveryDescription: "A phased path from discovery to production.",
  phaseLabel: "Phase",
  fitBadge: "Fit",
  fitTitle: "Who this is for",
  fitDescription: "We adjust depth, pace and team shape to how you operate today.",
  ctaTitle: (label: string) => `Ready to scope ${label}?`,
  ctaDescription: "Tell us your constraints and timeline, and we will come back with a clear technical approach and team shape.",
  ctaPrimary: { label: "Start a conversation", href: "/schedule-meeting" },
  ctaSecondary: (industryLabel: string) => `View all ${industryLabel}`,
  faqDescription: "Wondering how we work, what to expect or how engagements are structured? Here are the answers clients ask for most.",
};

const sampleNote = "Sample project";

/** Page copy per industry, keyed by the industry slug (the segment after /industries/). */
export const industryContent: Record<string, IndustryContent> = {
  "fintech-solutions": {
    heroHighlight: "Build",
    heroTitle: "Trusted, Compliant Financial Products",
    heroDescription:
      "Mobile money integrations, digital banking and RegTech. We engineer audit-ready platforms that keep transactions secure, satisfy regulators and open new financial models, in Ethiopia and beyond.",
    highlights: [
      "Security-first architecture",
      "Automated KYC/AML workflows",
      "Real-time fraud monitoring",
      "Mobile money & wallet integration",
      "Multi-currency (ETB, USD) support",
      "Audit-ready by design",
    ],
    cards: [
      {
        title: "Security & Compliance",
        description: "Design systems around the controls your regulators and auditors expect, from central bank directives to card-data standards.",
        points: ["PCI-DSS-aligned controls", "Central bank reporting", "Encryption at rest & in transit", "Audit logs & access control", "Secure key management"],
      },
      {
        title: "Payments & Wallets",
        description: "Bring mobile money wallets, bank transfers and cards behind one reliable payment layer with automatic reconciliation.",
        points: ["Mobile money wallets", "Bank & national switch integrations", "Card acquiring", "Reconciliation engines"],
      },
      {
        title: "Backend & Data",
        description: "Fault-tolerant, high-throughput backends and real-time data pipelines for money movement that cannot fail.",
        points: ["Go", "Java", "Python", "Event streaming (Kafka)"],
      },
      {
        title: "Integrations",
        description: "Connect core banking systems, payment processors and identity providers into a single auditable workflow.",
        points: ["Core banking APIs", "Payment processors", "National ID & KYC providers", "SMS & USSD channels"],
      },
    ],
    challenges: [
      "Meeting central bank and audit requirements early",
      "Automating KYC/AML without slowing sign-up",
      "Keeping wallet and bank ledgers reconciled",
    ],
    niche: ["Custom payment gateways", "Digital banking platforms", "Mobile money integrations", "RegTech automation tools", "Fraud detection systems", "Multi-currency wallets"],
    caseStudy: {
      client: `${sampleNote}: Mobile Money Checkout`,
      context: "A multi-branch retailer accepting wallets, bank transfers and cards",
      challenge: "Payments arrived through several wallets, banks and card terminals, each with its own report. Finance reconciled by hand at the end of every day and receipts failed when the connection dropped.",
      solution: "A single checkout service that routes each payment to the right rail, records it in one ledger and reconciles automatically against provider statements, with offline-tolerant receipts at the till.",
      result: "One view of every payment across branches, reconciliation that runs itself, and a checkout that keeps working on unreliable networks.",
      sample: true,
    },
    whyUs: [
      "Security and compliance designed in from the first sprint",
      "Encryption, tokenization and complete audit trails as standard",
      "Real-time fraud and AML monitoring",
      "Low-latency transaction processing",
      "Hands-on experience with mobile money and bank integrations",
      "API-first platforms ready for open banking",
    ],
    faqs: [
      {
        q: "Which compliance requirements do you design for?",
        a: "We design around the rules you operate under: central bank directives in Ethiopia, PCI-DSS for card data, and international standards when you serve customers abroad. We implement encryption, tokenization and audit trails and work alongside your compliance team and auditors; certification itself stays with your organization.",
      },
      {
        q: "Can you integrate mobile money wallets and local banks?",
        a: "Yes. We build against mobile money wallet APIs, bank APIs and national payment switches, and wrap them behind one payment layer so your product is not tied to a single provider.",
      },
      {
        q: "How do you automate KYC/AML?",
        a: "We integrate identity verification and screening providers, including national ID checks where available, and build workflows that verify customers, screen against watchlists and keep an audit trail for every decision.",
      },
      {
        q: "Do you build blockchain and crypto products?",
        a: "Yes, for markets where they are permitted. We build and review smart contracts, wallets and tokenization systems, and we check the regulatory position of each target market before any build starts.",
      },
    ],
  },

  "healthcare-solutions": {
    heroHighlight: "Engineer",
    heroTitle: "Secure Health Technology That Improves Care",
    heroDescription:
      "Telemedicine, clinical records and health data platforms. We build patient-facing and clinical software that improves care delivery while respecting Ethiopian data protection law and international privacy standards.",
    highlights: [
      "Privacy-first architecture",
      "Secure telehealth platforms",
      "EHR/EMR interoperability",
      "Remote patient monitoring",
      "Consent-aware analytics",
      "Patient engagement tools",
    ],
    cards: [
      {
        title: "Privacy & Security",
        description: "Treat patient data protection as a foundation, aligned with Ethiopia's personal data protection rules and international standards such as HIPAA and GDPR where you need them.",
        points: ["Ethiopian data protection", "HIPAA & GDPR alignment", "Consent management", "Multi-factor identity"],
      },
      {
        title: "Interoperability",
        description: "Exchange data in standard formats between your platform, hospital systems, labs and national health information systems.",
        points: ["HL7 FHIR APIs", "EHR/EMR integrations", "DHIS2 reporting", "Lab & pharmacy systems"],
      },
      {
        title: "Telehealth",
        description: "Virtual care experiences that stay reliable on mobile networks, from booking to video visit to follow-up.",
        points: ["WebRTC video", "Low-bandwidth fallbacks", "Scheduling & reminders", "e-Prescriptions"],
      },
      {
        title: "Health Data & AI",
        description: "Turn clinical and operational data into dashboards and decision support that clinicians and managers trust.",
        points: ["Clinical dashboards", "Decision support", "De-identified analytics", "Amharic-language interfaces"],
      },
    ],
    challenges: [
      "Protecting patient data across every system",
      "Exchanging records between clinics and labs",
      "Building tools clinicians actually adopt",
    ],
    niche: ["Telehealth platforms", "Remote patient monitoring systems", "Clinical decision support tools", "Patient engagement applications", "Health data analytics dashboards", "EHR/EMR integration services"],
    caseStudy: {
      client: `${sampleNote}: Clinic Records Platform`,
      context: "A network of private clinics moving off paper records",
      challenge: "Patient files, appointments and lab results lived on paper and spreadsheets in each branch, so records did not follow patients between clinics and access was hard to control.",
      solution: "A shared records platform with appointments, lab results and role-based access, audit trails on every record view, and a simple patient app for bookings and reminders.",
      result: "Records that follow the patient across branches, clear accountability for every access, and less time spent chasing paperwork.",
      sample: true,
    },
    whyUs: [
      "Privacy and security built in from day one",
      "Standards-based interoperability with FHIR and HL7",
      "Telehealth that works on everyday mobile networks",
      "Clinician-centred UX research and design",
      "Audit trails and consent management as standard",
      "Experience with local and international health data rules",
    ],
    faqs: [
      {
        q: "Which data protection rules do you design for?",
        a: "We design around Ethiopia's personal data protection requirements and, where you serve patients or partners abroad, international frameworks such as HIPAA or GDPR. Your legal and compliance teams stay in the loop on every decision about patient data.",
      },
      {
        q: "Can you integrate with existing hospital and lab systems?",
        a: "Yes. We use HL7 FHIR and other standard interfaces where they exist, and build safe adapters for older systems when they do not.",
      },
      {
        q: "Do your telehealth products work on slow connections?",
        a: "We design for real network conditions: adaptive video, audio-only fallbacks, and booking and messaging that keep working when bandwidth drops.",
      },
      {
        q: "Can patient-facing apps support Amharic and other local languages?",
        a: "Yes. We build multilingual interfaces, including Amharic and Afaan Oromo, and test them with real users before launch.",
      },
    ],
  },

  "edtech-solutions": {
    heroHighlight: "Power",
    heroTitle: "Personal, Engaging Learning for Every Student",
    heroDescription:
      "Learning platforms, AI tutoring and mobile learning apps. We build accessible education tools that lift completion rates, cut admin work and stay usable on low-bandwidth connections.",
    highlights: [
      "Adaptive learning paths",
      "Live & recorded classrooms",
      "AI-powered tutoring",
      "Offline & low-bandwidth modes",
      "Accessibility built in",
      "Learning analytics",
    ],
    cards: [
      {
        title: "Learning Platforms",
        description: "Build a custom LMS or extend an existing one to match your teaching approach, languages and scale.",
        points: ["Custom LMS/LXP development", "Moodle", "Canvas integrations"],
      },
      {
        title: "AI & Data",
        description: "Personalize learning paths, automate assessment and show teachers which students are falling behind and why.",
        points: ["Adaptive learning algorithms", "Automated assessment", "Python", "Learning analytics"],
      },
      {
        title: "Mobile & Offline",
        description: "Learning apps that sync when a connection is available and keep working when it is not.",
        points: ["Flutter", "React Native", "Offline content sync", "Data-light media"],
      },
      {
        title: "Engagement",
        description: "Live classes, gamified practice and messaging that keep students and parents involved.",
        points: ["Live video classes", "Gamification", "SMS & push notifications", "Parent portals"],
      },
    ],
    challenges: [
      "Reaching students on low-bandwidth connections",
      "Personalizing learning paths with AI",
      "Making content engaging beyond video",
    ],
    niche: ["Custom LMS/LXP platforms", "AI tutoring assistants", "Live video tutoring systems", "Automated assessment engines", "Student information systems", "Mobile learning applications"],
    caseStudy: {
      client: `${sampleNote}: School Learning Hub`,
      context: "A private school group introducing blended learning",
      challenge: "Teachers shared lessons through messaging groups, students on mobile data struggled with video, and leaders had no view of who was keeping up.",
      solution: "A mobile-first learning hub with downloadable lessons, short quizzes that sync when online, and a teacher dashboard that flags students who need support.",
      result: "Lessons that reach students on modest phones and connections, and teachers who can see progress at a glance.",
      sample: true,
    },
    whyUs: [
      "Designed for low-bandwidth and offline use",
      "Accessible interfaces that follow WCAG guidance",
      "Multilingual content, including Amharic and Afaan Oromo",
      "AI that supports teachers instead of replacing them",
      "Strong student data privacy practices",
      "Platforms that scale from one school to many",
    ],
    faqs: [
      {
        q: "Will the platform work for students with weak connections?",
        a: "Yes. We design for offline-first use: downloadable lessons, lightweight media, background sync and SMS fallbacks for key notifications.",
      },
      {
        q: "Can you extend our existing LMS instead of replacing it?",
        a: "Often that is the better path. We extend Moodle, Canvas and similar platforms with custom plugins, integrations and mobile apps.",
      },
      {
        q: "How do you use AI responsibly with students?",
        a: "AI features are scoped to clear learning goals, reviewed by educators, and designed so teachers can see and override what the system recommends.",
      },
      {
        q: "Do you support local languages?",
        a: "Yes. Interfaces and content workflows can support Amharic, Afaan Oromo and other languages alongside English.",
      },
    ],
  },

  "gaming-industry-solutions": {
    heroHighlight: "Level",
    heroTitle: "Up Player Engagement & Platform Performance",
    heroDescription:
      "Real-time backends, Unity and Flutter games, and secure monetization. We build the high-concurrency infrastructure that keeps players connected and revenue flowing.",
    highlights: [
      "Real-time multiplayer backends",
      "Secure monetization systems",
      "Cross-platform releases",
      "Anti-cheat & fraud protection",
      "Live operations & events",
      "Local payment options",
    ],
    cards: [
      {
        title: "Game Development",
        description: "Build polished, performant games and tools that play well on the devices your audience actually owns.",
        points: ["Unity Engine", "Godot", "C#", "C++"],
      },
      {
        title: "Real-Time Infrastructure",
        description: "Low-latency, high-concurrency backends that scale from a soft launch to a growing player base.",
        points: ["WebSockets", "Node.js", "Go", "Redis"],
      },
      {
        title: "Mobile & Cross-Platform",
        description: "Ship to Android, iOS and the web from one codebase while keeping builds light for mid-range phones.",
        points: ["Flutter", "Unity mobile", "WebGL", "App size optimization"],
      },
      {
        title: "Monetization & LiveOps",
        description: "In-app purchases, mobile money top-ups, events and analytics that keep players engaged for the long run.",
        points: ["In-app purchases", "Mobile money top-ups", "Event tooling", "Player analytics"],
      },
    ],
    challenges: [
      "Scaling servers as the player base grows",
      "Integrating secure, local payment options",
      "Reducing churn with live operations",
    ],
    niche: ["Real-time multiplayer platforms", "Casual & educational games", "In-app purchase & monetization engines", "Player matchmaking systems", "Live operations dashboards", "Cross-platform mobile games"],
    caseStudy: {
      client: `${sampleNote}: Casual Quiz Game`,
      context: "A trivia game for mobile players across East Africa",
      challenge: "The prototype dropped players during live quiz rounds, the app was too heavy for many phones, and players could not pay with the methods they use every day.",
      solution: "A WebSocket backend that scales per round, a lighter Flutter client, and a payment layer that adds mobile money top-ups next to app store purchases.",
      result: "Stable live rounds, a smaller download, and payment options that match how players actually pay.",
      sample: true,
    },
    whyUs: [
      "Real-time backend expertise",
      "Builds optimized for mid-range devices",
      "Secure, fraud-aware monetization",
      "Mobile money and app store payments",
      "Analytics-driven live operations",
      "Cross-platform delivery from one codebase",
    ],
    faqs: [
      {
        q: "Which engines and frameworks do you use?",
        a: "Mostly Unity and Flutter for clients, with Godot for lighter titles, and Node.js or Go backends for real-time play.",
      },
      {
        q: "Can players pay with mobile money?",
        a: "Yes. We integrate mobile money top-ups alongside app store billing where store policies allow, with server-side validation for every purchase.",
      },
      {
        q: "How do you prevent cheating?",
        a: "Authoritative servers, server-side validation, rate limiting and anomaly detection on player behaviour, tuned to the type of game.",
      },
      {
        q: "Can you take over an existing game?",
        a: "Yes. We start with a code and infrastructure review, stabilize what is live, then plan new features with you.",
      },
    ],
  },

  "e-commerce-solutions": {
    heroHighlight: "Engineer",
    heroTitle: "Smooth Commerce That Converts & Scales",
    heroDescription:
      "Headless commerce, marketplaces and mobile-first PWAs. We build fast shopping journeys that cut checkout friction, simplify operations and accept the payment methods your customers already use.",
    highlights: [
      "Headless commerce architecture",
      "Mobile-first PWA experiences",
      "Automated order processing",
      "Real-time inventory sync",
      "Mobile money & card checkout",
      "ERP integration",
    ],
    cards: [
      {
        title: "Commerce Platforms",
        description: "Build or customize commerce platforms that handle traffic spikes, multiple currencies and a growing catalogue.",
        points: ["Shopify", "Medusa", "WooCommerce", "Custom headless builds"],
      },
      {
        title: "Frontend & Frameworks",
        description: "Fast, mobile-first storefronts tuned for Core Web Vitals and conversion on everyday phones.",
        points: ["Next.js", "React", "Vue.js", "Flutter for mobile apps"],
      },
      {
        title: "Backend & Cloud",
        description: "Cloud-native backends that scale during busy periods and keep orders, stock and payments consistent.",
        points: ["Node.js", "Go", "PostgreSQL", "AWS & GCP"],
      },
      {
        title: "Payments & Integrations",
        description: "Mobile money, cards and bank transfers plus the ERP, logistics and messaging tools you run on.",
        points: ["Mobile money wallets", "Card gateways", "ERP & accounting", "Delivery partners"],
      },
    ],
    challenges: [
      "Moving off rigid, monolithic platforms",
      "Unifying operations across sellers and channels",
      "Speeding up mobile checkout on slow networks",
    ],
    niche: ["Custom headless storefronts", "Multi-vendor marketplace platforms", "Mobile commerce applications", "Product information management (PIM)", "Order management systems (OMS)", "Customer loyalty & rewards engines"],
    caseStudy: {
      client: `${sampleNote}: Online Marketplace`,
      context: "A growing marketplace connecting local sellers and shoppers",
      challenge: "The storefront slowed down on mobile data, sellers updated stock by phone calls, and checkout only accepted cards that most shoppers did not have.",
      solution: "A headless PWA storefront, a seller portal with live inventory, and a checkout that accepts mobile money, bank transfer and cash on delivery.",
      result: "A faster mobile experience, sellers who manage their own stock, and payment options that match local habits.",
      sample: true,
    },
    whyUs: [
      "Fast, mobile-first storefronts",
      "Local and international payment rails",
      "Marketplace and multi-vendor experience",
      "Clean integrations with ERP and logistics",
      "Conversion-focused UX",
      "Infrastructure that scales for peak demand",
    ],
    faqs: [
      {
        q: "Can you integrate local payment methods?",
        a: "Yes. We integrate mobile money wallets, bank transfers and card gateways, and support cash-on-delivery flows with proper reconciliation.",
      },
      {
        q: "Should we go headless?",
        a: "Not always. We recommend headless when you need several storefronts, custom experiences or more performance than your platform allows, and say so plainly when it is not worth it.",
      },
      {
        q: "Can you build a multi-vendor marketplace?",
        a: "Yes: seller onboarding, catalog moderation, commissions, payouts and dispute handling in one control plane.",
      },
      {
        q: "Will the store work on slow connections?",
        a: "We build PWAs with caching, image optimization and lightweight pages so shoppers can browse and buy on modest phones and networks.",
      },
    ],
  },

  "ai-data-solutions": {
    heroHighlight: "Ship",
    heroTitle: "AI Features Faster, Without Rebuilding Your Team",
    heroDescription:
      "RAG systems, AI agents, ML pipelines and LLM-powered workflows. We add intelligent capabilities to the platforms you already run, including support for Amharic and Afaan Oromo.",
    highlights: [
      "LLM integration",
      "Retrieval-augmented generation (RAG)",
      "Custom AI agents & workflows",
      "Machine learning pipelines",
      "Predictive analytics",
      "Data infrastructure & engineering",
    ],
    cards: [
      {
        title: "LLM & RAG Systems",
        description: "Retrieval-augmented pipelines that ground language models in your own documents and data.",
        points: ["OpenAI & Claude APIs", "LangChain", "Vector databases", "LlamaIndex"],
      },
      {
        title: "Custom AI Agents",
        description: "Agents that reason across steps, call your tools and automate workflows with humans in the loop.",
        points: ["Agent frameworks", "Tool calling", "Workflow automation", "API integrations"],
      },
      {
        title: "Machine Learning",
        description: "Train, fine-tune and deploy predictive and deep learning models for your specific use case.",
        points: ["PyTorch", "scikit-learn", "MLOps", "Model monitoring"],
      },
      {
        title: "Data Engineering",
        description: "Pipelines, warehouses and lakes that deliver clean, timely data to analytics and AI.",
        points: ["Apache Airflow", "dbt", "Kafka", "BigQuery & Snowflake"],
      },
    ],
    challenges: [
      "Adding AI to existing, older systems",
      "Scaling data infrastructure for LLM workloads",
      "Keeping data private while building AI",
    ],
    niche: ["Customer support assistants", "Document processing (OCR & NLP)", "Predictive analytics dashboards", "Recommendation engines", "AI-powered search", "Amharic & Afaan Oromo language tools"],
    caseStudy: {
      client: `${sampleNote}: Document Assistant`,
      context: "An organization with years of policies and reports in Amharic and English",
      challenge: "Staff spent hours searching shared drives for the right policy or report, and answers depended on who remembered where things were.",
      solution: "A RAG assistant that indexes approved documents in both languages, answers with citations, and respects existing access permissions.",
      result: "Answers grounded in the organization's own documents, with sources staff can check in one click.",
      sample: true,
    },
    whyUs: [
      "Production AI, not just prototypes",
      "Evaluation harnesses before every release",
      "Experience with Amharic and Afaan Oromo text",
      "Privacy-aware data handling",
      "Model-agnostic architecture",
      "Clear cost and latency budgets",
    ],
    faqs: [
      {
        q: "Which models do you work with?",
        a: "We are model-agnostic: hosted models such as Claude and GPT, and open-weight models you can run yourself when data must stay in-house.",
      },
      {
        q: "Can AI features handle Amharic or Afaan Oromo?",
        a: "Yes, with care. We test models on your real content, add language-specific preprocessing and evaluation, and set expectations honestly where quality is still limited.",
      },
      {
        q: "How do you keep our data private?",
        a: "We minimize what leaves your systems, use providers with appropriate data terms, and can deploy models in your own cloud or on premises.",
      },
      {
        q: "How do you measure whether an AI feature works?",
        a: "We build evaluation sets from your data, track quality, cost and latency on every change, and roll back automatically on regressions.",
      },
    ],
  },
};

/** Page copy per offering, keyed by "<industry>/<offering>". */
export const offeringContent: Record<string, OfferingContent> = {
  /* ───────────── Healthcare ───────────── */
  "healthcare-solutions/software-development": {
    intro:
      "Healthcare software has to fit how clinics really run. We build clinical and operational platforms around care workflows, with access control, audit trails and data protection designed in rather than added after launch.",
    outcomes: [
      "Clinical workflows that take fewer clicks and less paperwork.",
      "Role-based access with an audit trail on every record.",
      "Reliable uptime for systems clinicians depend on daily.",
      "Reporting that managers and health authorities can use.",
      "A codebase your own team can maintain and extend.",
    ],
    practices: ["Clinical workflow mapping", "Role-based access control", "Audit logging", "FHIR data models", "Automated testing", "Privacy reviews"],
    challenges: [
      "Paper and spreadsheet processes that do not scale across branches.",
      "Off-the-shelf systems that clash with local workflows.",
      "Unclear ownership of patient data and who can see it.",
      "Older systems with no documentation or tests.",
    ],
    phases: [
      "Shadow clinicians and map current workflows.",
      "Define data model, roles and privacy requirements.",
      "Ship a first workflow to a pilot site.",
      "Iterate with clinician feedback and usage data.",
      "Roll out across sites with training and support.",
    ],
    audiences: [
      { title: "Hospitals and clinic networks", text: "You need records, scheduling and billing that work across branches without losing control of patient data." },
      { title: "Health startups", text: "You have a care model that works and need a platform that can grow with it safely." },
      { title: "NGOs and public health programs", text: "You need dependable tools for field teams and reporting that fits national systems." },
    ],
    faqs: [
      { q: "Do you build from scratch or extend existing systems?", a: "Both. We assess what you have and recommend the path with the least risk, which is often extending before replacing." },
      { q: "How do you handle patient data protection?", a: "Access control, encryption and audit trails are part of the design, and we align with Ethiopian data protection rules and any international frameworks you need." },
      { q: "Can the system work across several clinics?", a: "Yes. Multi-site setups with shared records and site-level permissions are a common pattern for us." },
      { q: "Do you provide training?", a: "We run training for administrators and super-users, and produce short guides for clinical staff." },
      { q: "What happens after launch?", a: "We offer support and maintenance plans, or hand over fully documented code to your team." },
    ],
  },
  "healthcare-solutions/application-development": {
    intro:
      "Patients judge care by how easy it is to book, ask a question or see a result. We design and build secure patient and clinician apps that are simple to use, accessible and connected to the systems behind them.",
    outcomes: [
      "Booking, reminders and results in a single app.",
      "Interfaces in Amharic, Afaan Oromo and English.",
      "Secure messaging between patients and care teams.",
      "Apps that stay responsive on mid-range phones.",
      "Usage analytics that respect patient privacy.",
    ],
    practices: ["Patient UX research", "Flutter & React Native", "Secure authentication", "Accessibility testing", "EHR integrations", "Privacy-aware analytics"],
    challenges: [
      "Apps patients download once and never open again.",
      "Sensitive data stored insecurely on devices.",
      "Disconnected apps that do not sync with clinic systems.",
      "Language and literacy barriers in patient-facing flows.",
    ],
    phases: [
      "Research patient and clinician needs.",
      "Prototype key flows and test with real users.",
      "Build the app and connect it to clinical systems.",
      "Run a pilot and measure adoption.",
      "Release widely and keep improving.",
    ],
    audiences: [
      { title: "Clinics and hospitals", text: "You want patients to book, pay and get results without calling or queuing." },
      { title: "Digital health startups", text: "You need a polished, secure app that earns patient trust from the first release." },
      { title: "Pharmacies and labs", text: "You want to share results and prescriptions safely and reduce walk-in pressure." },
    ],
    faqs: [
      { q: "Native or cross-platform?", a: "Usually cross-platform with Flutter or React Native, which gives near-native performance with one codebase." },
      { q: "How do you secure health data on the phone?", a: "Minimal local storage, encryption, secure authentication and remote session revocation." },
      { q: "Can the app support local languages?", a: "Yes. We build full localization, including Amharic and Afaan Oromo, and test with native speakers." },
      { q: "Can it integrate with our records system?", a: "Yes, through FHIR or custom APIs, depending on what your system supports." },
      { q: "Who owns the code?", a: "You do. Code, designs and documentation are handed over in full." },
    ],
  },
  "healthcare-solutions/remote-patient-monitoring": {
    intro:
      "Monitoring only helps when the right person sees the right signal in time. We build remote monitoring systems that collect readings from devices and patients, flag what matters and fit into care team routines.",
    outcomes: [
      "Readings from devices and self-reports in one view.",
      "Threshold alerts routed to the right clinician.",
      "Fewer missed follow-ups for chronic patients.",
      "SMS options for patients without smartphones.",
      "Data quality checks on every incoming reading.",
    ],
    practices: ["Device integrations", "Alerting rules", "Clinician dashboards", "SMS & USSD check-ins", "Time-series storage", "Alert fatigue tuning"],
    challenges: [
      "Too many alerts, so clinicians start ignoring them.",
      "Devices that use different formats and protocols.",
      "Patients with limited data plans or basic phones.",
      "Readings that never make it into the patient record.",
    ],
    phases: [
      "Define the patient groups and signals to monitor.",
      "Integrate devices and patient check-in channels.",
      "Design alert rules with clinicians.",
      "Pilot with a small cohort and tune thresholds.",
      "Scale up with monitoring and support.",
    ],
    audiences: [
      { title: "Chronic care programs", text: "You manage diabetes, hypertension or similar conditions and want to see trouble before a crisis." },
      { title: "Hospitals discharging patients home", text: "You want to follow recovery remotely and reduce avoidable readmissions." },
      { title: "Community health programs", text: "Your field teams need simple tools and a clear view of the patients they support." },
    ],
    faqs: [
      { q: "Which devices can you integrate?", a: "Bluetooth and connected devices with documented APIs, plus manual entry and SMS check-ins when devices are not available." },
      { q: "How do you avoid alert fatigue?", a: "We design rules with clinicians, group related alerts and review alert volumes during the pilot." },
      { q: "Can patients without smartphones take part?", a: "Yes. SMS or USSD check-ins work on basic phones." },
      { q: "Where is the data stored?", a: "Where your data protection requirements say it should be, including local hosting when required." },
      { q: "Does it connect to our records system?", a: "We write readings and alerts back to your EHR where an integration is available." },
    ],
  },
  "healthcare-solutions/ehr-emr-interoperability": {
    intro:
      "Records are only useful when they move with the patient. We connect clinics, labs, pharmacies and reporting systems through standard interfaces, so data is exchanged safely and arrives in a form people can use.",
    outcomes: [
      "Patient records that follow people between facilities.",
      "Lab results delivered straight into the record.",
      "Automated reporting to health information systems.",
      "Clear audit trails for every data exchange.",
      "Fewer duplicate entries and transcription errors.",
    ],
    practices: ["HL7 FHIR APIs", "Integration engines", "Terminology mapping", "Patient identity matching", "DHIS2 reporting", "Interface monitoring"],
    challenges: [
      "Systems that each store patients under a different ID.",
      "Older software with no modern API.",
      "Inconsistent codes for diagnoses, drugs and tests.",
      "Integrations that fail silently and nobody notices.",
    ],
    phases: [
      "Inventory systems, data flows and owners.",
      "Agree on standards, codes and identity matching.",
      "Build and test interfaces in a staging environment.",
      "Go live with monitoring on every interface.",
      "Extend to new partners and data types.",
    ],
    audiences: [
      { title: "Hospital groups", text: "Your facilities use different systems and you need one reliable view of each patient." },
      { title: "Health software vendors", text: "Your product needs standards-based interfaces to win larger customers." },
      { title: "Public health programs", text: "You need facility data to reach national reporting systems without manual re-entry." },
    ],
    faqs: [
      { q: "Do you only work with FHIR?", a: "FHIR is our default, but we also work with HL7 v2, CSV exports and custom APIs when that is what systems support." },
      { q: "How do you match patients across systems?", a: "We use deterministic and probabilistic matching with human review for uncertain cases." },
      { q: "Can you report to DHIS2?", a: "Yes. We automate aggregate and case-based reporting to DHIS2 instances." },
      { q: "What if an interface fails?", a: "Every interface is monitored, with alerts, retries and dashboards for failed messages." },
      { q: "How is privacy handled in data exchange?", a: "Encrypted transport, scoped access and audit logs, aligned with your data protection requirements." },
    ],
  },
  "healthcare-solutions/telemedicine-systems": {
    intro:
      "A virtual visit should feel as dependable as walking into a clinic. We build telemedicine platforms that cover booking, video, documentation and follow-up, designed for the networks and devices your patients actually use.",
    outcomes: [
      "Video visits that adapt to weak or unstable connections.",
      "Booking, payment and reminders in one flow.",
      "Visit notes and prescriptions saved to the record.",
      "Audio-only fallback when video is not possible.",
      "Usage and quality metrics reviewed every week.",
    ],
    practices: ["WebRTC video", "Scheduling & reminders", "e-Prescriptions", "Multi-tenant provider setup", "Mobile money payments", "Call quality monitoring"],
    challenges: [
      "Calls that drop or freeze on mobile networks.",
      "Scheduling and reminders split across tools.",
      "Visit notes and billing lost after the call ends.",
      "Patients unsure how to join their appointment.",
    ],
    phases: [
      "Map the visit journey for patients and clinicians.",
      "Choose and harden the video stack for your scale.",
      "Integrate scheduling, payments and records.",
      "Pilot with a group of providers.",
      "Scale with monitoring and support.",
    ],
    audiences: [
      { title: "Clinics adding virtual care", text: "You want to offer remote consultations without disrupting in-person services." },
      { title: "Telehealth startups", text: "Your first version works; now you need reliability, scale and proper record keeping." },
      { title: "Specialist networks", text: "You want to connect specialists in the city with patients and doctors elsewhere." },
    ],
    faqs: [
      { q: "How do you handle poor connections?", a: "Adaptive bitrate video, audio-only fallback and reconnection logic, tested on real mobile networks." },
      { q: "Can patients pay through the platform?", a: "Yes, with mobile money, cards or bank transfer, depending on your setup." },
      { q: "Are calls recorded?", a: "Only if you decide they should be, with consent, encryption and retention rules defined up front." },
      { q: "Can several clinics share one platform?", a: "Yes. Multi-tenant setups keep each provider's patients and settings separate." },
      { q: "Do you build the mobile apps too?", a: "Yes. Web, Android and iOS from a shared codebase." },
    ],
  },

  /* ───────────── EdTech ───────────── */
  "edtech-solutions/ai-powered-tutoring": {
    intro:
      "Good tutoring meets students where they are. We build AI tutoring features that adapt practice to each learner, explain mistakes clearly and keep teachers in control of what the system recommends.",
    outcomes: [
      "Practice that adapts to each student's level.",
      "Hints and explanations instead of bare answers.",
      "Teacher dashboards showing where students struggle.",
      "Support for local languages and curricula.",
      "Guardrails that keep AI responses on topic and safe.",
    ],
    practices: ["Adaptive item selection", "LLM tutoring prompts", "Curriculum alignment", "Evaluation sets", "Safety guardrails", "Learning analytics"],
    challenges: [
      "Generic AI answers that do not match the curriculum.",
      "Students using AI to skip the thinking.",
      "No way to tell whether the tutor actually helps.",
      "High model costs per active student.",
    ],
    phases: [
      "Define learning goals and target curriculum.",
      "Build an evaluation set with educators.",
      "Prototype the tutor with a small student group.",
      "Measure learning impact and cost per student.",
      "Roll out with monitoring and teacher controls.",
    ],
    audiences: [
      { title: "EdTech companies", text: "You want AI tutoring that improves outcomes, not just engagement metrics." },
      { title: "Schools and school groups", text: "You want to give every student extra practice and support without adding to teacher workload." },
      { title: "Exam preparation providers", text: "You need personalized practice aligned to national exams." },
    ],
    faqs: [
      { q: "How do you keep the AI aligned with our curriculum?", a: "We ground the tutor in your approved content and test it against an evaluation set built with your educators." },
      { q: "Can it work in Amharic or Afaan Oromo?", a: "We can support local languages, testing quality carefully and adding human review where models are weaker." },
      { q: "How do you stop students just getting answers?", a: "The tutor gives hints and step-by-step guidance, and teachers can set how much help is allowed." },
      { q: "What does it cost to run?", a: "We design for a cost-per-student budget using caching, smaller models and limits where appropriate." },
      { q: "Is student data safe?", a: "We minimize personal data, keep it out of model training and follow your data protection requirements." },
    ],
  },
  "edtech-solutions/lms-platforms": {
    intro:
      "A learning platform should make teaching easier, not add admin. We build and extend LMS platforms that handle courses, cohorts and assessment, work on modest connections and give you useful data on learning.",
    outcomes: [
      "Courses, cohorts and grading in one place.",
      "Offline-capable mobile access for learners.",
      "Analytics that show completion and engagement.",
      "Integrations with payment, SIS and video tools.",
      "Multilingual interfaces and content.",
    ],
    practices: ["Moodle & Canvas extensions", "Custom LMS builds", "Offline sync", "SCORM & xAPI", "Payments integration", "Learning analytics"],
    challenges: [
      "Platforms too heavy for students on mobile data.",
      "Off-the-shelf LMS that does not fit your model.",
      "Manual enrollment and grading work.",
      "Little insight into who is actually learning.",
    ],
    phases: [
      "Review teaching model, users and constraints.",
      "Choose build, extend or integrate.",
      "Deliver core course and enrollment flows.",
      "Add analytics, payments and integrations.",
      "Migrate content and launch with support.",
    ],
    audiences: [
      { title: "Universities and colleges", text: "You need a platform for blended learning that students can use on their phones." },
      { title: "Training providers", text: "You sell courses and need enrollment, payments and certificates that just work." },
      { title: "Corporate learning teams", text: "You want onboarding and compliance training with clear completion reporting." },
    ],
    faqs: [
      { q: "Build custom or use Moodle?", a: "We recommend extending a proven platform unless your model genuinely needs something different." },
      { q: "Can learners pay with mobile money?", a: "Yes. We integrate mobile money, cards and bank transfers for course payments." },
      { q: "Does it work offline?", a: "Mobile apps can download content and sync progress when a connection is available." },
      { q: "Can you migrate our existing content?", a: "Yes, including SCORM packages, videos, quizzes and user records." },
      { q: "Do you host it?", a: "We can host it, deploy it to your cloud or hand it over to your IT team." },
    ],
  },
  "edtech-solutions/student-information-systems": {
    intro:
      "Enrollment, attendance, grades and fees should not live in five spreadsheets. We build student information systems with clear roles and permissions, so schools and universities run on accurate records.",
    outcomes: [
      "One source of truth for every student record.",
      "Role-based access for staff, students and parents.",
      "Fee tracking with mobile money and bank payments.",
      "Reports for leadership and regulators in minutes.",
      "SMS notifications to parents and students.",
    ],
    practices: ["Records data modelling", "Role-based permissions", "Fee & payment integration", "Report generation", "SMS notifications", "Data migration"],
    challenges: [
      "Records scattered across spreadsheets and paper files.",
      "Fee collection that is hard to reconcile.",
      "Reports that take days to compile.",
      "Unclear permissions on who can change grades.",
    ],
    phases: [
      "Map processes from admission to graduation.",
      "Design the data model and roles.",
      "Build core records, attendance and grading.",
      "Add fees, reporting and notifications.",
      "Migrate historical data and go live.",
    ],
    audiences: [
      { title: "Private schools", text: "You want to replace spreadsheets with one system for records, fees and parent communication." },
      { title: "Universities", text: "You need registration, grading and transcripts that scale across faculties." },
      { title: "School groups", text: "You run several campuses and need consistent records and consolidated reporting." },
    ],
    faqs: [
      { q: "Can parents get updates by SMS?", a: "Yes. Attendance, results and fee reminders can go by SMS, app or email." },
      { q: "Can we migrate our existing records?", a: "Yes. We clean and import spreadsheets and exports from older systems." },
      { q: "Does it support fee payments?", a: "Yes, with mobile money and bank integrations and automatic reconciliation." },
      { q: "Who can change grades?", a: "Permissions are configurable, and every change is logged with who made it and when." },
      { q: "Can it integrate with our LMS?", a: "Yes. We sync enrollments and grades with common LMS platforms." },
    ],
  },
  "edtech-solutions/virtual-classrooms": {
    intro:
      "Live classes should keep students engaged even when connections are weak. We build virtual and hybrid classroom tools with interaction, attendance and recordings, tuned for low-bandwidth use.",
    outcomes: [
      "Live sessions that adapt to available bandwidth.",
      "Polls, quizzes and breakout rooms built in.",
      "Automatic attendance and participation tracking.",
      "Lightweight recordings for students who miss class.",
      "Integration with your LMS and timetable.",
    ],
    practices: ["WebRTC classrooms", "Bandwidth adaptation", "Interactive tools", "Attendance tracking", "Recording pipelines", "LMS integration"],
    challenges: [
      "Video that freezes for students on mobile data.",
      "Passive sessions where students switch off.",
      "Manual attendance across many classes.",
      "Recordings too large to download.",
    ],
    phases: [
      "Understand class formats and network conditions.",
      "Prototype the classroom experience.",
      "Build interaction, attendance and recording.",
      "Pilot with teachers and students.",
      "Scale and integrate with existing systems.",
    ],
    audiences: [
      { title: "Universities and colleges", text: "You run blended or remote programs and need classes that work for every student." },
      { title: "Online tutoring businesses", text: "You need a reliable live classroom that carries your brand." },
      { title: "Training organizations", text: "You deliver workshops remotely and want interaction and attendance records." },
    ],
    faqs: [
      { q: "How do you handle low bandwidth?", a: "Adaptive video, audio-first modes and lightweight slides instead of full screen-sharing when needed." },
      { q: "Can we brand the classroom?", a: "Yes. Fully white-labelled under your domain and design." },
      { q: "Are sessions recorded?", a: "Optionally, with compressed recordings and downloadable audio for students on limited data." },
      { q: "Does it integrate with our LMS?", a: "Yes. Classes, attendance and recordings can sync with your LMS." },
      { q: "How many participants can join?", a: "We size the architecture for your largest classes and load-test before launch." },
    ],
  },

  /* ───────────── E-Commerce ───────────── */
  "e-commerce-solutions/headless-commerce-architecture": {
    intro:
      "Headless commerce separates your storefront from your commerce engine so each can move at its own pace. We design API-first catalogs, carts and checkouts that power web, app and social channels from a single backend.",
    outcomes: [
      "Storefronts that load fast on mobile data.",
      "One backend serving web, app and social channels.",
      "Frontend releases without backend risk.",
      "Clean APIs for partners and marketplaces.",
      "Infrastructure that scales for sales events.",
    ],
    practices: ["API-first catalogs", "Next.js storefronts", "Edge caching", "Checkout orchestration", "Search & merchandising", "Performance budgets"],
    challenges: [
      "Monolithic platforms that slow down every change.",
      "Storefronts that are heavy on mobile networks.",
      "Different channels with different product data.",
      "Checkout outages during peak traffic.",
    ],
    phases: [
      "Audit the current platform and traffic patterns.",
      "Design the target architecture and APIs.",
      "Build the storefront on the new stack.",
      "Migrate catalog, customers and orders.",
      "Cut over gradually with monitoring.",
    ],
    audiences: [
      { title: "Growing online retailers", text: "Your current platform limits speed, design or integrations." },
      { title: "Brands selling across channels", text: "You sell on web, app, social and marketplaces and want one source of product truth." },
      { title: "Teams replatforming", text: "You are leaving a monolith and want a safe, staged migration." },
    ],
    faqs: [
      { q: "Is headless right for us?", a: "It pays off when you need several channels, custom experiences or more performance. We tell you honestly if it is not worth it yet." },
      { q: "Which commerce engines do you use?", a: "Medusa, Shopify, commercetools-style APIs or a custom engine, depending on your needs and budget." },
      { q: "How do you migrate without downtime?", a: "Staged migration, parallel running and gradual traffic switching." },
      { q: "Will SEO suffer?", a: "No. We preserve URLs, set up redirects and use server rendering for crawlable pages." },
      { q: "Can we keep our current payment providers?", a: "Yes. Payment integrations sit behind the checkout layer and can be moved across." },
    ],
  },
  "e-commerce-solutions/multi-vendor-marketplaces": {
    intro:
      "Marketplaces succeed when sellers and buyers both trust the platform. We build multi-vendor marketplaces with seller onboarding, payouts, disputes and policy controls in one place.",
    outcomes: [
      "Self-serve seller onboarding and catalog management.",
      "Automatic commission and payout calculation.",
      "Payouts to bank accounts and mobile money wallets.",
      "Dispute and returns workflows with clear SLAs.",
      "Moderation tools that keep listings trustworthy.",
    ],
    practices: ["Seller portals", "Commission engines", "Payout reconciliation", "Catalog moderation", "Dispute workflows", "Search & ranking"],
    challenges: [
      "Manual seller onboarding that does not scale.",
      "Payouts calculated in spreadsheets.",
      "Low-quality or duplicate listings.",
      "Disputes handled over phone and chat.",
    ],
    phases: [
      "Define marketplace rules, fees and policies.",
      "Build seller onboarding and catalog tools.",
      "Add orders, commissions and payouts.",
      "Launch with a group of pilot sellers.",
      "Scale with moderation and analytics.",
    ],
    audiences: [
      { title: "Marketplace founders", text: "You have a marketplace idea or MVP and need a platform that scales." },
      { title: "Retailers opening to third-party sellers", text: "You want to add other sellers without losing control of quality." },
      { title: "B2B trading platforms", text: "You connect suppliers and buyers and need quotes, credit and invoicing." },
    ],
    faqs: [
      { q: "Can sellers get paid by mobile money?", a: "Yes. We support payouts to bank accounts and mobile money wallets, with reconciliation." },
      { q: "How are commissions handled?", a: "Configurable rules per category, seller or promotion, calculated automatically on each order." },
      { q: "Can sellers manage their own stock?", a: "Yes, through a seller portal or mobile app, with bulk upload and API options." },
      { q: "How do you handle disputes?", a: "Structured workflows with evidence, deadlines and clear outcomes for both sides." },
      { q: "Do you build the mobile apps?", a: "Yes. Buyer and seller apps for Android and iOS." },
    ],
  },
  "e-commerce-solutions/mobile-first-pwas": {
    intro:
      "Many shoppers will not download an app before their first purchase. We build installable progressive web apps that load fast, work on unreliable networks and feel like native apps on modest phones.",
    outcomes: [
      "Fast first loads on 3G and congested networks.",
      "Offline browsing of cached catalog pages.",
      "Installable, app-like experience with no app store.",
      "Push re-engagement where browsers allow it.",
      "One codebase across Android, iOS and desktop.",
    ],
    practices: ["Service worker caching", "App shell architecture", "Web payments", "Image optimization", "Core Web Vitals tuning", "Analytics for PWA sessions"],
    challenges: [
      "Heavy sites that time out on mobile data.",
      "Out-of-date carts and catalog caches.",
      "Analytics that miss PWA sessions.",
      "Low push notification opt-in rates.",
    ],
    phases: [
      "Measure current performance on real devices.",
      "Define caching strategy for pages, data and media.",
      "Build the PWA shell and key flows.",
      "Integrate analytics and payments.",
      "Launch and tune with field data.",
    ],
    audiences: [
      { title: "Retailers in mobile-first markets", text: "Your customers shop on mid-range phones and patchy networks." },
      { title: "Teams without app budgets", text: "You want an app-like experience without maintaining separate native apps." },
      { title: "Brands with slow mobile sites", text: "Your mobile conversion lags behind desktop and you suspect speed." },
    ],
    faqs: [
      { q: "Do PWAs work on iPhones?", a: "Yes, with some limits on push and background features, which we design around." },
      { q: "Can customers pay inside the PWA?", a: "Yes, with mobile money, cards and other web payment methods." },
      { q: "How do you update the PWA safely?", a: "Versioned caches, staged rollouts and kill switches so a bad release cannot break the store." },
      { q: "Will it replace our native app?", a: "For many retailers it can; for others it complements the app as the fast entry point." },
      { q: "How fast will it be?", a: "We set performance budgets up front and measure on real devices and networks." },
    ],
  },
  "e-commerce-solutions/custom-payment-gateways": {
    intro:
      "Customers pay in many ways: mobile money, bank transfer, cards and cash on delivery. We integrate local and international payment rails behind one checkout, with reconciliation and fraud checks built in.",
    outcomes: [
      "Mobile money, bank, card and cash-on-delivery in one checkout.",
      "Automatic reconciliation against provider statements.",
      "Retry and fallback when a provider is down.",
      "Fraud checks that do not block good customers.",
      "Clear payment reports for finance teams.",
    ],
    practices: ["Payment orchestration", "Mobile money integration", "Webhook handling", "Reconciliation jobs", "Fraud rules", "PCI-DSS-aligned design"],
    challenges: [
      "Each provider with its own API and reports.",
      "Payments that succeed but orders that do not update.",
      "Manual reconciliation at the end of each day.",
      "Checkout failures when one provider is down.",
    ],
    phases: [
      "Map payment methods, providers and flows.",
      "Design the payment layer and ledger.",
      "Integrate providers with sandbox testing.",
      "Add reconciliation, reporting and fraud rules.",
      "Go live and monitor success rates.",
    ],
    audiences: [
      { title: "Online stores", text: "You want to accept the payment methods your customers actually use." },
      { title: "Platforms and marketplaces", text: "You collect payments for others and need clean splits and payouts." },
      { title: "Businesses selling across borders", text: "You need local rails at home and international cards abroad." },
    ],
    faqs: [
      { q: "Which mobile money providers can you integrate?", a: "Any wallet or aggregator with an API. We wrap them behind one layer so you can add or switch providers." },
      { q: "How do you handle failed or pending payments?", a: "Webhooks, status polling and idempotent updates so orders always match the real payment state." },
      { q: "Do you store card data?", a: "No. We use tokenization through certified processors so card data stays out of your systems." },
      { q: "Can you automate reconciliation?", a: "Yes. Daily jobs match transactions to provider statements and flag mismatches." },
      { q: "Can payments be split between sellers?", a: "Yes, with configurable splits and payout schedules." },
    ],
  },
  "e-commerce-solutions/omnichannel-integrations": {
    intro:
      "Customers move between your shop, website, app and social channels. We connect orders, inventory and customer data across every channel so stock is accurate and service is consistent.",
    outcomes: [
      "Real-time stock across stores and online channels.",
      "One customer profile across every touchpoint.",
      "Orders from social and messaging channels captured automatically.",
      "Click-and-collect and delivery from any location.",
      "Consolidated sales reporting.",
    ],
    practices: ["Inventory sync", "POS integration", "Order routing", "Customer data unification", "ERP connectors", "Messaging commerce"],
    challenges: [
      "Selling items online that are out of stock in store.",
      "Orders taken over chat and copied by hand.",
      "Customer history split across systems.",
      "Reports that never agree with each other.",
    ],
    phases: [
      "Map channels, systems and data owners.",
      "Define the source of truth for each data type.",
      "Build integrations and sync jobs.",
      "Pilot with a subset of stores and channels.",
      "Roll out with monitoring and alerts.",
    ],
    audiences: [
      { title: "Retail chains", text: "You run several shops and an online store and need one view of stock." },
      { title: "Brands selling on social channels", text: "A lot of your orders arrive through chat and social media." },
      { title: "Distributors", text: "You sell to retailers and consumers and need consistent pricing and stock." },
    ],
    faqs: [
      { q: "Can you integrate our existing POS?", a: "Usually yes, through APIs, exports or a lightweight connector." },
      { q: "How real-time is the inventory sync?", a: "Near real-time for most setups, with reconciliation jobs to catch drift." },
      { q: "Can orders from Telegram or WhatsApp be captured?", a: "Yes. We can build ordering bots or connect chat tools to your order system." },
      { q: "Which ERPs do you work with?", a: "Odoo, ERPNext, Microsoft Dynamics and custom systems with APIs." },
      { q: "What happens if a sync fails?", a: "Failures are logged, retried and surfaced on a dashboard with alerts." },
    ],
  },

  /* ───────────── FinTech ───────────── */
  "fintech-solutions/ai-fraud-detection": {
    intro:
      "Fraud models fail quietly. We combine rules with machine learning, shadow scoring and analyst feedback so you can tighten controls without blocking good customers, measured against baselines your risk team sets.",
    outcomes: [
      "Faster detection of coordinated attacks and mule accounts.",
      "Reason codes analysts can explain in reviews.",
      "Evaluation datasets refreshed from real outcomes.",
      "Scoring fast enough for payment authorization.",
      "Automatic rollback when a new model underperforms.",
    ],
    practices: ["Feature pipelines", "Real-time scoring services", "Rules + model ensembles", "Investigation tooling", "Analyst feedback capture", "Graph and device features"],
    challenges: [
      "Label leakage and feedback loops that degrade models.",
      "Tight latency budgets on payment and transfer endpoints.",
      "Analysts who do not trust black-box scores.",
      "Fraudsters adapting faster than models are retrained.",
    ],
    phases: [
      "Define fraud patterns and label quality goals.",
      "Backtest on historical fraud and false positives.",
      "Shadow-deploy before changing any cut-offs.",
      "Hold weekly reviews with risk and product teams.",
      "Red-team new rules with simulated attacks.",
    ],
    audiences: [
      { title: "Wallets and payment providers", text: "You need real-time scoring on transfers and top-ups, informed by your own fraud history." },
      { title: "Banks and microfinance institutions", text: "You want to detect account takeover and loan fraud without slowing down customers." },
      { title: "Teams moving beyond rules", text: "You want to add machine learning gradually, with shadow scoring before anything goes live." },
    ],
    faqs: [
      { q: "Real-time or batch features?", a: "Both: real-time for decisions, batch for behavioural and network aggregates with clear freshness targets." },
      { q: "What can auditors and regulators see?", a: "Top contributing features, rule hits and plain-language explanations suitable for your compliance records." },
      { q: "How soon can we shadow in production?", a: "Often within weeks if event data is in place; longer if labels or data quality need work first." },
      { q: "Do you test for bias?", a: "Yes. We agree a measurement plan with your legal and risk teams and monitor key segments." },
      { q: "Can you use hosted models?", a: "Yes, with documentation for vendor risk, versioning and what happens when a provider changes a model." },
    ],
  },
  "fintech-solutions/blockchain-defi-protocols": {
    intro:
      "On-chain products need security, custody and compliance designed in from the start. We build and review smart contracts, tokenization systems and protocol integrations for markets where they are permitted.",
    outcomes: [
      "Smart contracts reviewed and tested before deployment.",
      "Clear custody and key management model.",
      "On-chain and off-chain records that reconcile.",
      "Monitoring and alerting on contract activity.",
      "A documented regulatory position for each market.",
    ],
    practices: ["Solidity development", "Contract testing & fuzzing", "Security reviews", "Key management", "Indexing & analytics", "Upgrade strategies"],
    challenges: [
      "Contract bugs that cannot be undone after deployment.",
      "Unclear regulatory status in target markets.",
      "Custody models that put user funds at risk.",
      "Off-chain systems that drift from on-chain state.",
    ],
    phases: [
      "Define the product, markets and regulatory position.",
      "Design contracts, custody and data flows.",
      "Build with full test and fuzzing coverage.",
      "Run internal and independent security reviews.",
      "Deploy in stages with monitoring.",
    ],
    audiences: [
      { title: "Web3 startups", text: "You are building a protocol or token product and need engineering rigour." },
      { title: "Financial institutions exploring tokenization", text: "You want to test tokenized assets or settlement in a controlled setting." },
      { title: "Teams with existing contracts", text: "You need a review, an upgrade path or better monitoring." },
    ],
    faqs: [
      { q: "Do you build crypto products for Ethiopia?", a: "We check the regulatory position for every target market. Where crypto products are restricted, we focus on markets where they are permitted or on non-custodial research and pilots." },
      { q: "Which chains do you work with?", a: "Ethereum and EVM-compatible chains, plus permissioned ledgers such as Hyperledger Fabric." },
      { q: "Do you perform audits?", a: "We do thorough internal reviews and testing, and recommend an independent audit before any mainnet launch." },
      { q: "How are keys managed?", a: "With hardware security, multi-signature or MPC setups matched to your risk model." },
      { q: "Can contracts be upgraded?", a: "Where appropriate, using proxy patterns with governance controls and clear disclosure." },
    ],
  },
  "fintech-solutions/crypto-wallets": {
    intro:
      "Wallets hold real value, so policy and security have to come first. We build consumer and institutional wallets with clear custody models, transaction policies and recovery flows, for markets where they are permitted.",
    outcomes: [
      "Custody model matched to your users and risk appetite.",
      "Transaction policies and approval workflows.",
      "Recovery flows that do not compromise security.",
      "Address screening and transaction monitoring.",
      "Clear transaction history users can understand.",
    ],
    practices: ["MPC & multi-sig custody", "Policy engines", "Secure mobile storage", "Address screening", "Transaction monitoring", "Recovery design"],
    challenges: [
      "Users losing access with no safe recovery path.",
      "Weak approval controls on treasury wallets.",
      "Exposure to sanctioned or risky addresses.",
      "Confusing transaction UX that causes costly mistakes.",
    ],
    phases: [
      "Define custody, markets and compliance needs.",
      "Design key management and policies.",
      "Build wallet apps and backend services.",
      "Security testing and independent review.",
      "Launch in stages with monitoring.",
    ],
    audiences: [
      { title: "Consumer wallet startups", text: "You need a secure, easy wallet for users in permitted markets." },
      { title: "Treasury and operations teams", text: "You hold digital assets and need approvals, limits and audit trails." },
      { title: "Exchanges and platforms", text: "You need hot and cold wallet infrastructure with strong controls." },
    ],
    faqs: [
      { q: "Custodial or non-custodial?", a: "It depends on your users, licensing and risk model. We help you choose and design for it." },
      { q: "Is this available for Ethiopian users?", a: "We review the regulatory position for every market before building and only build where the product is permitted." },
      { q: "How do you secure keys on mobile?", a: "Secure enclaves, MPC key shares and biometric protection, never plain storage." },
      { q: "Do you screen addresses?", a: "Yes, through blockchain analytics providers, with policy rules for risky activity." },
      { q: "Which assets do you support?", a: "Major chains and tokens, with an architecture that makes adding networks straightforward." },
    ],
  },
  "fintech-solutions/digital-banking-platforms": {
    intro:
      "Customers expect banking that works in an app and on basic phones alike. We build digital banking channels, account services and lending flows that connect cleanly to your core banking system and meet regulatory expectations.",
    outcomes: [
      "Mobile and web banking on top of your existing core.",
      "USSD channels for customers without smartphones.",
      "Digital onboarding with national ID checks.",
      "Lending flows with automated decisions and audit trails.",
      "Integration with wallets and national payment switches.",
    ],
    practices: ["Core banking integration", "Mobile & web banking apps", "USSD channels", "Digital onboarding", "Lending workflows", "Security testing"],
    challenges: [
      "Core systems with limited or outdated APIs.",
      "Branch-heavy onboarding that loses customers.",
      "Separate channels with inconsistent experiences.",
      "Security and regulatory reviews late in the project.",
    ],
    phases: [
      "Assess core systems, channels and requirements.",
      "Design the integration layer and APIs.",
      "Build priority journeys such as onboarding and transfers.",
      "Run security testing and regulatory review.",
      "Launch in phases with monitoring.",
    ],
    audiences: [
      { title: "Banks", text: "You want to modernize digital channels without replacing your core." },
      { title: "Microfinance institutions", text: "You want to serve more customers remotely with digital savings and loans." },
      { title: "Fintechs partnering with banks", text: "You need a robust integration and a product customers trust." },
    ],
    faqs: [
      { q: "Do we need to replace our core banking system?", a: "Usually not. We build an integration layer that exposes what digital channels need." },
      { q: "Can customers onboard fully online?", a: "Where regulation allows, yes, with national ID verification and risk-based checks." },
      { q: "Do you build USSD channels?", a: "Yes, alongside mobile and web, sharing the same backend services." },
      { q: "How do you approach security?", a: "Threat modelling, secure coding, penetration testing and monitoring throughout the project." },
      { q: "Can you integrate mobile money wallets?", a: "Yes, for wallet-to-bank and bank-to-wallet transfers." },
    ],
  },
  "fintech-solutions/regtech-automation": {
    intro:
      "Compliance work grows faster than compliance teams. We automate KYC, AML monitoring and regulatory reporting so checks are consistent, decisions are traceable and reports are ready when regulators ask.",
    outcomes: [
      "KYC checks completed in minutes instead of days.",
      "Transaction monitoring with tuned alert rules.",
      "Case management with a complete audit trail.",
      "Regulatory reports generated from source data.",
      "Fewer false positives for analysts to clear.",
    ],
    practices: ["KYC workflows", "National ID verification", "Sanctions screening", "Transaction monitoring", "Case management", "Regulatory reporting"],
    challenges: [
      "Manual KYC that creates onboarding backlogs.",
      "Alert queues full of false positives.",
      "Reports compiled by hand from several systems.",
      "Decisions with no clear record of who decided and why.",
    ],
    phases: [
      "Map obligations, processes and data sources.",
      "Design automated checks and case workflows.",
      "Integrate identity and screening providers.",
      "Tune rules with compliance analysts.",
      "Automate reporting and launch.",
    ],
    audiences: [
      { title: "Banks and microfinance institutions", text: "You want faster onboarding and less manual compliance work." },
      { title: "Payment and wallet providers", text: "You are scaling quickly and need monitoring that keeps up." },
      { title: "Compliance teams", text: "You want tools that make every decision traceable." },
    ],
    faqs: [
      { q: "Which identity checks can you integrate?", a: "National ID verification where available, document checks, liveness and sanctions or PEP screening." },
      { q: "Can you reduce false positives?", a: "Yes, by tuning rules with your analysts and adding risk scoring where it helps." },
      { q: "Do you generate regulatory reports?", a: "We automate reports from source data in the formats your regulators require." },
      { q: "Will this replace our compliance team?", a: "No. It removes repetitive work so your team can focus on judgement calls." },
      { q: "How is the audit trail kept?", a: "Every check, decision and change is logged with who, what and when." },
    ],
  },
  "fintech-solutions/secure-payment-gateways": {
    intro:
      "A payment gateway has to be secure, fast and always on. We build gateways with tokenization, strong authentication, provider routing and fraud checks, connecting cards, bank transfers and mobile money.",
    outcomes: [
      "Card data kept out of your systems through tokenization.",
      "Routing across providers for higher success rates.",
      "Strong customer authentication where required.",
      "Real-time fraud checks on every transaction.",
      "Automatic settlement and reconciliation reports.",
    ],
    practices: ["Tokenization", "3-D Secure", "Provider routing", "Idempotent APIs", "Fraud scoring", "Reconciliation"],
    challenges: [
      "Payment failures that are hard to diagnose.",
      "Card data handling that widens compliance scope.",
      "Duplicate charges from retries and timeouts.",
      "Settlement reports that do not match transactions.",
    ],
    phases: [
      "Define payment methods, volumes and compliance scope.",
      "Design gateway architecture and security controls.",
      "Integrate providers and build merchant APIs.",
      "Security testing and certification support.",
      "Launch with monitoring and runbooks.",
    ],
    audiences: [
      { title: "Payment service providers", text: "You are building or modernizing a gateway for merchants." },
      { title: "Large merchants", text: "You process enough volume to justify your own routing and controls." },
      { title: "Platforms collecting payments", text: "You need secure, reliable payment collection inside your product." },
    ],
    faqs: [
      { q: "Do you help with PCI-DSS?", a: "We design to minimize scope and support your certification process; the certification itself is held by your organization." },
      { q: "Can the gateway handle mobile money and bank transfers?", a: "Yes, alongside cards, behind one merchant API." },
      { q: "How do you prevent double charges?", a: "Idempotency keys, careful retry logic and reconciliation checks." },
      { q: "What uptime can we expect?", a: "We design for high availability with redundancy and monitoring, and agree targets with you." },
      { q: "Do you provide merchant dashboards?", a: "Yes: transactions, refunds, disputes and settlement reports." },
    ],
  },

  /* ───────────── AI & Data ───────────── */
  "ai-data-solutions/custom-ai-agents": {
    intro:
      "Agents are useful when they can act reliably inside your real workflows. We build AI agents that plan across steps, call your tools and APIs, and hand off to people when confidence is low.",
    outcomes: [
      "Multi-step workflows automated end to end.",
      "Agents that use your systems through safe, scoped tools.",
      "Human approval on high-impact actions.",
      "Full traces of every agent decision.",
      "Cost and latency kept within agreed budgets.",
    ],
    practices: ["Tool design", "Agent orchestration", "Human-in-the-loop flows", "Tracing & observability", "Evaluation suites", "Permission scoping"],
    challenges: [
      "Agents that work in demos but fail on real data.",
      "Tools with too much access and too few safeguards.",
      "No visibility into why an agent did something.",
      "Costs that grow unpredictably with usage.",
    ],
    phases: [
      "Choose a workflow with clear value and boundaries.",
      "Design tools, permissions and handoffs.",
      "Build the agent with evaluation from day one.",
      "Pilot with users and review traces.",
      "Expand scope as reliability is proven.",
    ],
    audiences: [
      { title: "Operations teams", text: "You have repetitive, multi-step work that follows clear rules." },
      { title: "Product teams", text: "You want agent features inside your product that users can trust." },
      { title: "Support and service teams", text: "You want agents that resolve routine requests and escalate the rest." },
    ],
    faqs: [
      { q: "Which frameworks do you use?", a: "We use provider SDKs and lightweight orchestration, adding frameworks only when they help." },
      { q: "How do you keep agents safe?", a: "Scoped tools, approval steps, rate limits and full logging of actions." },
      { q: "Can agents work in Amharic?", a: "Yes, for many tasks, after testing quality on your real inputs." },
      { q: "How do you measure reliability?", a: "Task-level evaluation suites and production traces reviewed regularly." },
      { q: "What does it cost to run?", a: "We set cost budgets per task and design to stay within them." },
    ],
  },
  "ai-data-solutions/data-infrastructure": {
    intro:
      "AI and analytics are only as good as the data behind them. We build pipelines, warehouses and lakes that deliver clean, timely, well-documented data to the teams and models that depend on it.",
    outcomes: [
      "Reliable pipelines with monitoring and alerts.",
      "A single, documented source of truth for metrics.",
      "Near real-time data where the business needs it.",
      "Data quality checks on every load.",
      "Clear ownership and access controls.",
    ],
    practices: ["ELT pipelines", "Data modelling with dbt", "Streaming with Kafka", "Orchestration with Airflow", "Data quality tests", "Access governance"],
    challenges: [
      "Reports that disagree on basic numbers.",
      "Pipelines that break silently overnight.",
      "Data scattered across apps and spreadsheets.",
      "No clear rules on who can access sensitive data.",
    ],
    phases: [
      "Inventory sources, consumers and key metrics.",
      "Design the target architecture and models.",
      "Build pipelines with tests and monitoring.",
      "Migrate reports and consumers.",
      "Hand over with documentation and training.",
    ],
    audiences: [
      { title: "Growing companies", text: "Your data lives in many tools and nobody trusts the numbers." },
      { title: "Teams preparing for AI", text: "You need clean, accessible data before models can help." },
      { title: "Analytics teams", text: "You spend more time fixing pipelines than answering questions." },
    ],
    faqs: [
      { q: "Which warehouse should we use?", a: "BigQuery, Snowflake, Postgres or ClickHouse, depending on volume, budget and skills." },
      { q: "Can data stay in Ethiopia?", a: "Yes. We can deploy on local infrastructure or in-country hosting when required." },
      { q: "Do you do real-time streaming?", a: "Yes, with Kafka or managed equivalents where the use case justifies it." },
      { q: "How do you ensure data quality?", a: "Automated tests on every load, freshness checks and alerts." },
      { q: "Will our team be able to maintain it?", a: "Yes. We document everything and train your team as we build." },
    ],
  },
  "ai-data-solutions/llm-rag-systems": {
    intro:
      "Language models are only useful when they answer from your own facts. We build retrieval-augmented generation systems that ground answers in your documents and data, cite their sources and respect access rights.",
    outcomes: [
      "Answers grounded in your own documents, with citations.",
      "Search across Amharic and English content.",
      "Access rights respected on every query.",
      "Quality measured on an evaluation set you trust.",
      "Predictable cost and response time.",
    ],
    practices: ["Document ingestion", "Chunking & embeddings", "Vector search", "Reranking", "Evaluation harnesses", "Access-aware retrieval"],
    challenges: [
      "Answers that sound confident but are wrong.",
      "Documents in many formats and languages.",
      "Users seeing content they should not have access to.",
      "No objective way to know if quality improved.",
    ],
    phases: [
      "Define questions, users and source documents.",
      "Build ingestion and an evaluation set.",
      "Prototype retrieval and answer generation.",
      "Tune quality, cost and latency.",
      "Deploy with monitoring and feedback capture.",
    ],
    audiences: [
      { title: "Knowledge-heavy organizations", text: "Your staff spend hours searching policies, reports and manuals." },
      { title: "Customer support teams", text: "You want accurate answers drawn from your help content." },
      { title: "Product teams", text: "You want to add grounded AI answers to your product." },
    ],
    faqs: [
      { q: "Which models do you use?", a: "Hosted models such as Claude or GPT, or open-weight models when data must stay in-house." },
      { q: "Does it work with Amharic documents?", a: "Yes, with language-aware processing and evaluation on your real content." },
      { q: "How do you reduce hallucinations?", a: "Strong retrieval, citation requirements and evaluation against known answers." },
      { q: "Can it respect document permissions?", a: "Yes. Retrieval filters results by each user's access rights." },
      { q: "Where is the data stored?", a: "In your cloud or on premises, depending on your requirements." },
    ],
  },
  "ai-data-solutions/machine-learning-engineering": {
    intro:
      "A model in a notebook is not a product. We take machine learning from experiment to production with reproducible training, reliable deployment and monitoring that catches drift before users do.",
    outcomes: [
      "Models deployed behind reliable, versioned APIs.",
      "Reproducible training pipelines.",
      "Monitoring for drift and performance decay.",
      "Clear baselines and business metrics for every model.",
      "Retraining that is automated and auditable.",
    ],
    practices: ["Feature engineering", "Experiment tracking", "Model serving", "Drift monitoring", "Automated retraining", "Model documentation"],
    challenges: [
      "Models that never leave the notebook.",
      "Performance that degrades silently in production.",
      "Training runs nobody can reproduce.",
      "Unclear link between model metrics and business results.",
    ],
    phases: [
      "Frame the problem and success metrics.",
      "Explore data and build baselines.",
      "Train and validate candidate models.",
      "Deploy with monitoring and fallbacks.",
      "Automate retraining and reviews.",
    ],
    audiences: [
      { title: "Companies with valuable data", text: "You have historical data and a clear decision you want to improve." },
      { title: "Data science teams", text: "You build good models but struggle to run them in production." },
      { title: "Product teams", text: "You want predictions, recommendations or forecasts inside your product." },
    ],
    faqs: [
      { q: "Which frameworks do you use?", a: "PyTorch, scikit-learn and gradient-boosting libraries, chosen per problem." },
      { q: "Do we need a lot of data?", a: "It depends on the problem. We assess what you have and start with simple baselines." },
      { q: "How do you deploy models?", a: "As versioned APIs or batch jobs, with monitoring and rollback." },
      { q: "How do you detect drift?", a: "We monitor input distributions and outcomes and alert when they shift." },
      { q: "Can models run on our own servers?", a: "Yes. We deploy to cloud, on-premises or edge devices." },
    ],
  },
};

/* ───────────── Lookups ───────────── */

export type IndustryPage = { slug: string; menu: IndustryMenuCategory; content: IndustryContent; offerings: (NavLink & { slug: string })[] };
export type OfferingPage = { slug: string; menu: NavLink & { slug: string }; industry: IndustryPage; content: OfferingContent };

const lastSegment = (href: string) => href.split("/").filter(Boolean).pop() ?? "";

export function getIndustries(): IndustryPage[] {
  return industryMenu
    .map((menu) => {
      const slug = lastSegment(menu.href);
      const content = industryContent[slug];
      if (!content) return null;
      const offerings = menu.entries.map((e) => ({ ...e, slug: lastSegment(e.href) }));
      return { slug, menu, content, offerings };
    })
    .filter((x): x is IndustryPage => x !== null);
}

export function getIndustry(slug: string): IndustryPage | undefined {
  return getIndustries().find((i) => i.slug === slug);
}

export function getOfferings(): OfferingPage[] {
  return getIndustries().flatMap((industry) =>
    industry.offerings
      .map((o) => {
        const content = offeringContent[`${industry.slug}/${o.slug}`];
        return content ? { slug: o.slug, menu: o, industry, content } : null;
      })
      .filter((x): x is OfferingPage => x !== null),
  );
}

export function getOffering(industrySlug: string, offeringSlug: string): OfferingPage | undefined {
  return getOfferings().find((o) => o.industry.slug === industrySlug && o.slug === offeringSlug);
}
