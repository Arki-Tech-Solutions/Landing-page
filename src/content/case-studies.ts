/**
 * Case studies. Shared by the home carousel, /case-studies and /case-studies/[slug].
 *
 * TODO(confirm): these are SAMPLE projects that show the layout. Replace each one
 * with a real Arki Tech project (client name only with the client's permission).
 * They are flagged with `sample: true` so they are easy to find. Every metric,
 * outcome and team entry below is ILLUSTRATIVE ("target", "designed for") and
 * must be replaced with confirmed figures before launch. No client is named.
 */
export type CaseMetric = { value: string; label: string };
export type CaseStep = { title: string; text: string };
export type CaseStackGroup = { group: string; items: string[] };
export type CaseTeamMember = { role: string; title: string; focus: string };
export type CaseScreen = { label: string; icon: string };

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

  /* ---- Detail page (/case-studies/[slug]) and portfolio grid ---- */
  /** Short badge on the portfolio card, e.g. "FINTECH". */
  category: string;
  /** Industry label shown above the featured title, e.g. "Payments". */
  industry: string;
  /** Detail hero title. */
  headline: string;
  /** Detail hero paragraph. */
  intro: string;
  /** Hero meta row: sector, industry, location, duration, engagement. */
  meta: { sector: string; industry: string; location: string; duration: string; engagement: string };
  /** Project status on the featured card. */
  status: string;
  /** Illustrative headline numbers for the dark band (2–4 items). */
  metrics: CaseMetric[];
  requirements: string[];
  objective: string;
  deliverables: string[];
  execution: CaseStep[];
  stack: CaseStackGroup[];
  features: CaseStep[];
  benefits: string[];
  outcomes: string[];
  /** "System interfaces" tiles (branded placeholders until screenshots exist). */
  screens: CaseScreen[];
  /** Roles only. TODO(confirm): add real names only with permission. */
  team: CaseTeamMember[];
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
    category: "FINTECH",
    industry: "Payments",
    headline: "Mobile Money Checkout: Unified Payments",
    intro: "A sample engagement showing how we would bring mobile money, bank transfers and cards into one checkout for a retailer with many branches. The focus is a reconciliation engine that matches every payment to an order automatically and receipts that keep working when the network drops.",
    meta: { sector: "Retail", industry: "FinTech / Payments", location: "Addis Ababa, Ethiopia", duration: "6 Months (sample)", engagement: "Dedicated Product Team" },
    status: "Sample Project",
    metrics: [
      { value: "1 Checkout", label: "All Payment Rails" },
      { value: "Auto", label: "Reconciliation" },
      { value: "Offline-Ready", label: "Receipts" },
      { value: "Illustrative", label: "Figures" },
    ],
    requirements: [
      "Accept mobile money, bank transfer and card payments through a single flow",
      "Match each incoming payment to the right order without manual spreadsheets",
      "Keep branches selling and issuing receipts during network outages",
      "Give finance a daily, auditable view of settlements across providers",
    ],
    objective: "Replace branch-by-branch payment handling with one dependable checkout and a reconciliation process finance can trust.",
    deliverables: ["Unified payment gateway service", "Reconciliation and settlement engine", "Flutter point-of-sale app", "Finance dashboard in Next.js", "Provider webhooks with retries"],
    execution: [
      { title: "Provider Abstraction Layer", text: "A single Go service wraps each payment provider behind one interface, so adding a new rail is configuration plus an adapter rather than a rewrite." },
      { title: "Event-Driven Reconciliation", text: "Payments, webhooks and bank statements land as events and are matched to orders by rules finance can review and adjust." },
      { title: "Offline-First Point of Sale", text: "The branch app queues sales and receipts locally and syncs safely when connectivity returns, with conflict checks on the server." },
    ],
    stack: [
      { group: "Backend", items: ["Go", "PostgreSQL", "Redis"] },
      { group: "Mobile", items: ["Flutter", "Firebase"] },
      { group: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { group: "Infrastructure", items: ["Docker", "Kubernetes", "GitHub Actions"] },
    ],
    features: [
      { title: "One Checkout", text: "Customers pick how they pay; staff see one consistent flow." },
      { title: "Settlement View", text: "Daily settlements per provider with exceptions flagged for review." },
      { title: "Resilient Receipts", text: "Receipts issue offline and reconcile once the branch is back online." },
    ],
    benefits: [
      "Senior engineers with hands-on experience integrating local payment rails",
      "Working sessions in the same time zone (GMT+3) as the operations team",
      "Audit-friendly design with clear logs for every money movement",
      "Full source code and documentation handed over to the client",
    ],
    outcomes: [
      "Target: less manual reconciliation work for the finance team",
      "Designed for consistent checkout across every branch",
      "Clear audit trail for each payment and refund",
      "A foundation that can take on new payment providers",
    ],
    screens: [
      { label: "Checkout", icon: "Smartphone" },
      { label: "Settlement dashboard", icon: "LayoutDashboard" },
    ],
    team: [
      { role: "Tech Lead", title: "Backend Architect", focus: "Payment gateway & reconciliation design" },
      { role: "Engineer", title: "Mobile Engineer", focus: "Offline-first Flutter point of sale" },
    ],
  },
  {
    slug: "clinic-records-platform",
    title: "Clinic Records Platform",
    tags: "HEALTHCARE / SAAS",
    summary: "Patient records, appointments and lab results for a network of private clinics, with role-based access and audit trails built in from day one.",
    tech: "NestJS, PostgreSQL, React",
    icon: "HeartPulse",
    sample: true,
    category: "HEALTHCARE",
    industry: "Health Records",
    headline: "Clinic Records Platform: Connected Care",
    intro: "A sample engagement for a network of private clinics that needs patient records, appointments and lab results in one place. Access control and audit trails are part of the core design, so sensitive data is protected from the first release.",
    meta: { sector: "Healthcare SaaS", industry: "Healthcare / EMR", location: "Addis Ababa, Ethiopia", duration: "8 Months (sample)", engagement: "Fixed-Scope Project + Support" },
    status: "Sample Project",
    metrics: [
      { value: "Multi-Clinic", label: "Tenancy" },
      { value: "Role-Based", label: "Access Control" },
      { value: "Full", label: "Audit Trail" },
      { value: "Illustrative", label: "Figures" },
    ],
    requirements: [
      "Move paper and spreadsheet records into one secure patient history",
      "Let reception, doctors and lab staff see only what their role needs",
      "Book and reschedule appointments across several clinic locations",
      "Record every view and change to patient data for later review",
    ],
    objective: "Give each clinic a single, secure patient record that staff can rely on during busy consultations.",
    deliverables: ["Patient record and visit history", "Appointment scheduling across branches", "Lab orders and results module", "Role and permission management", "Audit log and export tools"],
    execution: [
      { title: "Tenant-Aware Data Model", text: "Each clinic's data is isolated in PostgreSQL while shared reference data stays in one place, keeping reporting simple and access safe." },
      { title: "Policy-Driven Access", text: "Permissions are expressed as policies in NestJS, so a new role is defined by rules rather than scattered checks in the code." },
      { title: "Immutable Audit Log", text: "Reads and writes on patient data are recorded append-only, with a review screen for clinic administrators." },
    ],
    stack: [
      { group: "Backend", items: ["NestJS", "Node.js", "PostgreSQL"] },
      { group: "Frontend", items: ["React", "TypeScript", "Material UI"] },
      { group: "Infrastructure", items: ["Docker", "AWS"] },
      { group: "QA/DevOps", items: ["GitHub Actions", "Grafana"] },
    ],
    features: [
      { title: "Patient Timeline", text: "Visits, prescriptions and lab results in one chronological view." },
      { title: "Smart Scheduling", text: "Appointments by doctor, room and branch with reminders." },
      { title: "Lab Workflow", text: "Orders flow to the lab and results return to the doctor's queue." },
    ],
    benefits: [
      "Engineers who treat privacy and access control as core requirements",
      "Close collaboration with clinical staff during design workshops",
      "Phased rollout plan that keeps clinics running during migration",
      "Ongoing support and maintenance option after launch",
    ],
    outcomes: [
      "Target: faster access to a patient's full history during visits",
      "Designed to reduce double bookings across branches",
      "Every access to sensitive data is traceable",
      "A platform ready for new clinics to be onboarded",
    ],
    screens: [
      { label: "Patient record", icon: "ClipboardList" },
      { label: "Appointments", icon: "CalendarDays" },
    ],
    team: [
      { role: "Tech Lead", title: "Full-stack Architect", focus: "Data model, access policies & audit design" },
      { role: "Engineer", title: "Frontend Engineer", focus: "Clinical workflows & scheduling UI" },
    ],
  },
  {
    slug: "amharic-support-assistant",
    title: "Amharic Support Assistant",
    tags: "AI, NLP / CUSTOMER SUPPORT",
    summary: "A retrieval-augmented assistant that answers customer questions in Amharic and English from a company's own documents, with human handover for edge cases.",
    tech: "Python, FastAPI, LangChain, pgvector",
    icon: "MessagesSquare",
    sample: true,
    category: "AI / NLP",
    industry: "Customer Support",
    headline: "Amharic Support Assistant: Bilingual AI",
    intro: "A sample engagement showing a retrieval-augmented assistant that answers customer questions in Amharic and English using only the company's own documents. When the assistant is unsure, it hands the conversation to a human agent with the context attached.",
    meta: { sector: "Customer Service", industry: "AI / NLP", location: "Addis Ababa, Ethiopia", duration: "4 Months (sample)", engagement: "AI Product Squad" },
    status: "Sample Project",
    metrics: [
      { value: "Amharic + English", label: "Languages" },
      { value: "Grounded", label: "Answers" },
      { value: "Human", label: "Handover" },
      { value: "Illustrative", label: "Figures" },
    ],
    requirements: [
      "Answer common questions in Amharic and English with consistent quality",
      "Ground every answer in approved company documents, with sources",
      "Hand difficult or sensitive conversations to a human agent",
      "Let the support team update knowledge without engineering help",
    ],
    objective: "Help a support team answer routine questions instantly in the customer's language while keeping humans in charge of the hard cases.",
    deliverables: ["Document ingestion pipeline", "Bilingual retrieval and answer service", "Web chat widget", "Agent handover console", "Evaluation and feedback dashboard"],
    execution: [
      { title: "Bilingual Retrieval", text: "Documents are chunked and embedded with models evaluated on Amharic text, and stored in pgvector alongside metadata for filtering." },
      { title: "Guarded Generation", text: "Answers are generated only from retrieved passages, cite their sources, and fall back to a handover when confidence is low." },
      { title: "Continuous Evaluation", text: "A test set of real question types runs on every change, so quality is measured rather than guessed." },
    ],
    stack: [
      { group: "AI", items: ["Python", "LangChain", "Hugging Face", "OpenAI"] },
      { group: "Backend", items: ["Python", "PostgreSQL", "Redis"] },
      { group: "Frontend", items: ["React", "TypeScript"] },
      { group: "Infrastructure", items: ["Docker", "Google Cloud"] },
    ],
    features: [
      { title: "Cited Answers", text: "Each reply links back to the document passage it came from." },
      { title: "Smart Handover", text: "Low-confidence chats move to an agent with full context." },
      { title: "Self-Serve Knowledge", text: "Support staff upload and retire documents themselves." },
    ],
    benefits: [
      "Engineers experienced with Amharic and Afaan Oromo language data",
      "Measured quality through evaluation sets, not demos",
      "Privacy-aware deployment options, including in-country hosting",
      "Clear documentation so the client team can maintain the system",
    ],
    outcomes: [
      "Target: faster first responses for routine questions",
      "Designed to keep answers consistent across languages",
      "Support agents focus on complex conversations",
      "A reusable base for more AI features later",
    ],
    screens: [
      { label: "Chat widget", icon: "MessagesSquare" },
      { label: "Agent console", icon: "Headset" },
    ],
    team: [
      { role: "Tech Lead", title: "AI Engineer", focus: "Retrieval pipeline & evaluation" },
      { role: "Engineer", title: "Full-stack Engineer", focus: "Chat widget & agent console" },
    ],
  },
  {
    slug: "agri-marketplace",
    title: "Agri Marketplace",
    tags: "AGRICULTURE, E-COMMERCE / LOGISTICS",
    summary: "A marketplace linking farmer cooperatives with wholesale buyers, including price discovery, order tracking and a driver app for last-mile delivery.",
    tech: "Django, Flutter, Next.js",
    icon: "Sprout",
    sample: true,
    category: "AGRICULTURE",
    industry: "AgriTech",
    headline: "Agri Marketplace: Farm to Buyer",
    intro: "A sample engagement for a marketplace that connects farmer cooperatives with wholesale buyers. It covers listings and price discovery, order tracking, and a driver app for the final delivery leg, designed for patchy rural connectivity.",
    meta: { sector: "Marketplace", industry: "Agriculture / E-commerce", location: "Ethiopia", duration: "7 Months (sample)", engagement: "Dedicated Product Team" },
    status: "Sample Project",
    metrics: [
      { value: "3 Apps", label: "Buyer, Co-op, Driver" },
      { value: "Live", label: "Order Tracking" },
      { value: "Low-Bandwidth", label: "Design" },
      { value: "Illustrative", label: "Figures" },
    ],
    requirements: [
      "Let cooperatives list produce with grades, quantities and prices",
      "Give buyers transparent prices and reliable order status",
      "Coordinate drivers for pickup and last-mile delivery",
      "Work on low-end phones and slow rural networks",
    ],
    objective: "Shorten the path from farm to buyer with a marketplace that is simple enough for cooperatives and reliable enough for wholesalers.",
    deliverables: ["Cooperative listing app", "Buyer web marketplace", "Driver delivery app", "Order and payment tracking", "Operations admin panel"],
    execution: [
      { title: "Shared Domain Core", text: "A Django core models produce, lots, orders and deliveries once, and serves all three apps through a versioned API." },
      { title: "Lightweight Mobile Apps", text: "Flutter apps cache data locally and send small payloads, so they stay usable on slow connections." },
      { title: "Delivery Coordination", text: "Pickups are grouped by route and drivers confirm each step with photos and signatures." },
    ],
    stack: [
      { group: "Backend", items: ["Django", "Python", "PostgreSQL"] },
      { group: "Mobile", items: ["Flutter", "Firebase"] },
      { group: "Frontend", items: ["Next.js", "Tailwind CSS"] },
      { group: "Infrastructure", items: ["Docker", "DigitalOcean"] },
    ],
    features: [
      { title: "Price Discovery", text: "Recent prices by grade and region help both sides agree faster." },
      { title: "Order Tracking", text: "Every order moves through clear, visible steps." },
      { title: "Driver App", text: "Route lists, proof of delivery and simple payouts." },
    ],
    benefits: [
      "A team that designs for real-world connectivity in Ethiopia",
      "Field research with cooperatives before building screens",
      "Mobile money ready payment flows",
      "Incremental launches that start with one region",
    ],
    outcomes: [
      "Target: more transparent pricing for cooperatives",
      "Designed to reduce failed or late deliveries",
      "Buyers see order status without phone calls",
      "A platform that can expand to new regions and crops",
    ],
    screens: [
      { label: "Marketplace", icon: "Store" },
      { label: "Driver app", icon: "Truck" },
    ],
    team: [
      { role: "Tech Lead", title: "Backend Architect", focus: "Marketplace domain & API design" },
      { role: "Engineer", title: "Mobile Engineer", focus: "Cooperative and driver apps" },
    ],
  },
  {
    slug: "school-learning-portal",
    title: "School Learning Portal",
    tags: "EDTECH / WEB & MOBILE",
    summary: "A learning portal for schools with course content, assignments, grading and parent updates that stays usable on low-bandwidth connections.",
    tech: "Laravel, Vue.js, MySQL",
    icon: "GraduationCap",
    sample: true,
    category: "EDTECH",
    industry: "Education",
    headline: "School Learning Portal: Learning Anywhere",
    intro: "A sample engagement for a group of schools that wants course content, assignments, grading and parent updates in one portal. Pages are light and cache well, so students can keep learning on slow mobile connections.",
    meta: { sector: "Education", industry: "EdTech", location: "Addis Ababa, Ethiopia", duration: "5 Months (sample)", engagement: "Fixed-Scope Project" },
    status: "Sample Project",
    metrics: [
      { value: "3 Roles", label: "Student, Teacher, Parent" },
      { value: "Light", label: "Page Weight" },
      { value: "Bilingual", label: "Interface" },
      { value: "Illustrative", label: "Figures" },
    ],
    requirements: [
      "Publish lessons, files and videos for each class and grade",
      "Collect assignments and return grades with feedback",
      "Keep parents informed about progress and announcements",
      "Stay usable on shared devices and slow connections",
    ],
    objective: "Give teachers one place to run their classes online and give families a clear view of each student's progress.",
    deliverables: ["Course and lesson management", "Assignments and grading", "Parent portal and notifications", "School admin tools", "Amharic and English interface"],
    execution: [
      { title: "Modular Laravel Backend", text: "Courses, assignments and messaging are separate modules with clear boundaries, which keeps the codebase easy to extend." },
      { title: "Performance Budget", text: "Each page has a size budget; media is compressed and loaded on demand so lessons open quickly on mobile data." },
      { title: "Localised Interface", text: "All interface text is translatable, with Amharic and English shipped from the start." },
    ],
    stack: [
      { group: "Backend", items: ["Laravel", "PHP", "MySQL"] },
      { group: "Frontend", items: ["Vue.JS", "Tailwind CSS"] },
      { group: "Infrastructure", items: ["Docker", "Cloudflare"] },
      { group: "QA/DevOps", items: ["GitHub Actions"] },
    ],
    features: [
      { title: "Class Spaces", text: "Lessons, files and discussions organised by class." },
      { title: "Gradebook", text: "Teachers grade quickly and students see feedback right away." },
      { title: "Parent Updates", text: "Announcements and progress summaries by SMS or app." },
    ],
    benefits: [
      "Product thinking shaped by how local schools actually work",
      "Accessible, bilingual interface from day one",
      "Training sessions for teachers during rollout",
      "Maintenance plan aligned with the school calendar",
    ],
    outcomes: [
      "Target: less paperwork for teachers",
      "Designed to keep parents better informed",
      "Lessons available outside class hours",
      "A portal more schools can join over time",
    ],
    screens: [
      { label: "Class space", icon: "BookOpen" },
      { label: "Gradebook", icon: "ClipboardCheck" },
    ],
    team: [
      { role: "Tech Lead", title: "Full-stack Engineer", focus: "Laravel modules & performance budget" },
      { role: "Engineer", title: "Frontend Engineer", focus: "Vue interface & localisation" },
    ],
  },
  {
    slug: "logistics-control-tower",
    title: "Logistics Control Tower",
    tags: "LOGISTICS, DATA / CLOUD",
    summary: "Real-time fleet tracking and dispatch dashboards for a freight operator, with event streaming, alerting and analytics on a cost-aware cloud setup.",
    tech: "Node.js, Kafka, React, AWS",
    icon: "Truck",
    sample: true,
    category: "LOGISTICS",
    industry: "Fleet & Freight",
    headline: "Logistics Control Tower: Fleet in View",
    intro: "A sample engagement for a freight operator that needs to see its fleet in real time. Vehicle events stream into dispatch dashboards with alerts and analytics, running on a cloud setup sized to keep monthly costs predictable.",
    meta: { sector: "Freight", industry: "Logistics / Data", location: "Addis Ababa, Ethiopia", duration: "6 Months (sample)", engagement: "Dedicated Team + DevOps" },
    status: "Sample Project",
    metrics: [
      { value: "Real-Time", label: "Fleet View" },
      { value: "Streaming", label: "Event Pipeline" },
      { value: "Cost-Aware", label: "Cloud Setup" },
      { value: "Illustrative", label: "Figures" },
    ],
    requirements: [
      "Show every vehicle's position and status on one live map",
      "Alert dispatchers to delays, stops and route deviations",
      "Keep historical data for analysis and customer reporting",
      "Control cloud costs as the fleet grows",
    ],
    objective: "Give dispatchers a single live view of the fleet and give managers reliable data to plan routes and capacity.",
    deliverables: ["Telemetry ingestion pipeline", "Live dispatch dashboard", "Alerting rules engine", "Analytics and reports", "Infrastructure as code"],
    execution: [
      { title: "Event Streaming Backbone", text: "Vehicle telemetry flows through Kafka topics, so dashboards, alerts and storage each consume the same events independently." },
      { title: "Rules-Based Alerting", text: "Dispatchers define alert rules for delays and geofences without code changes." },
      { title: "Right-Sized Cloud", text: "Infrastructure is defined in Terraform with autoscaling and storage tiers chosen to keep costs predictable." },
    ],
    stack: [
      { group: "Backend", items: ["Node.js", "TypeScript", "PostgreSQL"] },
      { group: "Data", items: ["Apache Spark", "Elasticsearch"] },
      { group: "Frontend", items: ["React", "Redux"] },
      { group: "Infrastructure", items: ["AWS", "Terraform", "Docker"] },
      { group: "Monitoring", items: ["Prometheus", "Grafana"] },
    ],
    features: [
      { title: "Live Map", text: "Positions, status and ETAs for the whole fleet at a glance." },
      { title: "Alert Center", text: "Delays and route deviations raised as they happen." },
      { title: "Trip Analytics", text: "Historical reports on utilisation and on-time delivery." },
    ],
    benefits: [
      "Engineers with streaming and cloud cost experience",
      "DevOps practices with monitoring from the first sprint",
      "Infrastructure documented and owned by the client",
      "Time-zone overlap with African, European and Gulf partners",
    ],
    outcomes: [
      "Target: quicker response to delays and incidents",
      "Designed for predictable monthly cloud spend",
      "Better data for route and capacity planning",
      "A pipeline ready for new data sources",
    ],
    screens: [
      { label: "Live map", icon: "Map" },
      { label: "Alert center", icon: "BellRing" },
    ],
    team: [
      { role: "Tech Lead", title: "Data Engineer", focus: "Streaming pipeline & alerting" },
      { role: "Engineer", title: "DevOps Engineer", focus: "Cloud infrastructure & monitoring" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
