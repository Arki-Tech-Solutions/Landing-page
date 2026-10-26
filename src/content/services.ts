/**
 * Service pages: /services/<landing>, /services/<group>/<sub>, /services/<group>/<sub>/<item>.
 *
 * Structure mirrors the reference site:
 * - 7 landing pages (category template) + 3 group slugs that redirect to a landing page.
 * - 6 groups × 2 subcategories (subcategory template).
 * - 46 items, rendered with one of three layouts chosen by group (`variant`).
 *
 * Labels and hrefs for the menu-listed subcategories and items come from
 * `serviceMenu` in navigation.ts; the emerging-technologies group is not in the
 * menu, so its labels live here.
 */
import { serviceMenu } from "./navigation";

export type TechTile = { name: string; icon?: string };
export type TitledText = { title: string; text: string };
export type QA = { q: string; a: string };

const dv = (n: string, v = "original") => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-${v}.svg`;
const si = (n: string) => `https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/${n}.svg`;

export const serviceCta = { label: "Book a 30-min call", href: "/schedule-meeting" };
export const faqIntro = "Straight answers to the questions teams usually ask before an engagement starts.";

/* -------------------------------------------------------------------------- */
/* Landing pages (category template)                                           */
/* -------------------------------------------------------------------------- */

export type ServiceLanding = {
  slug: string;
  /** Breadcrumb label. */
  crumb: string;
  /** Small pill above the title (the page's h1). */
  eyebrow: string;
  /** Gradient part of the hero title. */
  title: string;
  /** Optional plain part after the gradient title. */
  titleRest?: string;
  description: string;
  /** lucide icon name used in the hero artwork. */
  icon: string;
  /** Highlighted words in "<x> designed for your business needs". */
  offeringsHighlight: string;
  offerings: TitledText[];
  approach: { highlight: string; rest: string; description: string; items: TitledText[] };
  tech: { subject: string; description: string; groups: { title: string; items: TechTile[] }[] };
  sectors: { rest: string; description: string; items: (TitledText & { note: string })[] };
  faq?: { highlight: string; rest: string; items: QA[] };
};

export const landings: ServiceLanding[] = [
  {
    slug: "ai-development-services",
    crumb: "AI Development Services",
    eyebrow: "Services",
    title: "AI Development",
    description:
      "Put language models, prediction and automation to work inside your product. We design retrieval pipelines, fine-tune models on your data and ship AI features your users can trust.",
    icon: "BrainCircuit",
    offeringsHighlight: "AI Development",
    offerings: [
      { title: "Custom LLM Development", text: "Fine-tune and evaluate language models on your own documents, tickets and domain vocabulary." },
      { title: "OpenAI & Gemini Integrations", text: "Add generation, semantic search, embeddings and multimodal input to your product with model calls that are monitored, cached and cost-capped." },
      { title: "RAG Architecture", text: "Ground every answer in your own knowledge base so responses cite sources instead of guessing." },
      { title: "Predictive Analytics", text: "Forecast demand, churn and risk with models trained and validated on your historical data." },
      { title: "NLP & Computer Vision", text: "Classify text, read documents and inspect images, including Amharic and Afaan Oromo text pipelines." },
      { title: "Workflow Automation", text: "Hand repetitive back-office steps to AI agents that route, draft and escalate with a human in the loop." },
    ],
    approach: {
      highlight: "How we approach",
      rest: "AI development",
      description:
        "We start from the business problem, not the model. Each engagement pairs proven tooling with clear evaluation so you can see what the AI is doing and why.",
      items: [
        { title: "Retrieval-Augmented Generation (RAG)", text: "Connect models to your private data so outputs stay accurate, current and traceable." },
        { title: "Prompt & Agent Orchestration", text: "Break complex tasks into chained, testable steps with tool use and fallbacks." },
        { title: "Business Process Automation", text: "Replace manual hand-offs with AI-assisted decisions that log every action." },
      ],
    },
    tech: {
      subject: "behind our AI work",
      description: "We pick the tools that fit your problem and your budget, then integrate them cleanly with the systems you already run.",
      groups: [
        { title: "ML Frameworks", items: [{ name: "TensorFlow", icon: dv("tensorflow") }, { name: "PyTorch", icon: dv("pytorch") }, { name: "Scikit-learn", icon: si("scikitlearn") }, { name: "Keras", icon: dv("keras") }] },
        { title: "Language & NLP", items: [{ name: "OpenAI", icon: si("openai") }, { name: "Hugging Face", icon: si("huggingface") }, { name: "LangChain", icon: si("langchain") }, { name: "spaCy", icon: si("spacy") }, { name: "Anthropic", icon: si("anthropic") }] },
        { title: "Deployment & MLOps", items: [{ name: "Kubernetes", icon: dv("kubernetes", "plain") }, { name: "Docker", icon: dv("docker") }, { name: "FastAPI", icon: dv("fastapi") }, { name: "MLflow", icon: si("mlflow") }, { name: "AWS SageMaker", icon: dv("amazonwebservices") }] },
        { title: "Data Storage & Processing", items: [{ name: "PostgreSQL", icon: dv("postgresql") }, { name: "MongoDB", icon: dv("mongodb") }, { name: "Apache Spark", icon: dv("apachespark") }, { name: "Redis", icon: dv("redis") }] },
      ],
    },
    sectors: {
      rest: "AI work fits best",
      description: "AI earns its place where data is plentiful and decisions are repetitive. These are the sectors where we see the clearest value.",
      items: [
        { title: "Healthcare", text: "Triage assistants, clinical document search and patient follow-up automation.", note: "Models that support clinicians rather than replace them." },
        { title: "Fintech", text: "Fraud signals, credit scoring support and multilingual customer assistants.", note: "Explainable outputs for regulated decisions." },
        { title: "Retail", text: "Demand forecasting, product search and personalised recommendations.", note: "Predictions tied to stock and margin, not vanity metrics." },
      ],
    },
    faq: {
      highlight: "AI Development",
      rest: "FAQs",
      items: [
        { q: "How do we know if AI is worth it for our business?", a: "We run a short discovery to map the workflows where AI could save time or money, estimate the impact, and tell you plainly when a simpler solution will do." },
        { q: "Why build custom AI instead of buying an off-the-shelf tool?", a: "Custom systems are trained and evaluated on your data and workflows, so they handle your edge cases and you keep control of the model and the data." },
        { q: "How do you protect our data during an AI project?", a: "Data stays in environments you approve, access is role-based, traffic is encrypted, and we can run models on your own infrastructure when data must not leave it." },
      ],
    },
  },
  {
    slug: "cloud-solutions",
    crumb: "Cloud Solutions",
    eyebrow: "Services",
    title: "Cloud",
    titleRest: "& DevOps",
    description: "Run on infrastructure that scales with demand and deploys on every merge. We design, automate and harden cloud platforms on AWS, Azure and Google Cloud.",
    icon: "Cloud",
    offeringsHighlight: "Cloud & DevOps",
    offerings: [
      { title: "Cloud Infrastructure", text: "Design multi-zone deployments with predictable uptime and costs you can forecast." },
      { title: "Cloud Migration Strategy", text: "Move on-premise workloads to the cloud in planned waves with rollback paths at every step." },
      { title: "Serverless Architecture", text: "Cut idle spend with event-driven backends that scale to zero between peaks." },
      { title: "CI/CD Pipeline Automation", text: "Build, test and deploy automatically so releases become routine instead of risky." },
      { title: "Infrastructure as Code", text: "Describe every environment in Terraform so changes are reviewed, versioned and repeatable." },
      { title: "Cloud Security & Compliance", text: "Tighten IAM, encrypt data in transit and at rest, and apply least-privilege policies by default." },
    ],
    approach: {
      highlight: "How we approach",
      rest: "cloud and DevOps",
      description: "We treat infrastructure as a product: designed, versioned, observed and improved, so your engineers spend time on features rather than firefighting.",
      items: [
        { title: "Infrastructure as Code (IaC)", text: "Provision environments with Terraform, CloudFormation or Ansible and review changes like application code." },
        { title: "Managed Kubernetes", text: "Run containers on EKS, AKS or GKE with autoscaling, health checks and sane defaults." },
        { title: "Cost Optimisation", text: "Right-size resources, use reserved capacity and tag spend so every team sees what it costs." },
      ],
    },
    tech: {
      subject: "behind our cloud work",
      description: "We use the services that suit your workload and your team's skills, and keep the architecture portable where it matters.",
      groups: [
        { title: "Compute & Containers", items: [{ name: "AWS", icon: dv("amazonwebservices") }, { name: "Kubernetes", icon: dv("kubernetes", "plain") }, { name: "Docker", icon: dv("docker") }, { name: "Google Cloud", icon: dv("googlecloud") }, { name: "Azure", icon: dv("azure") }] },
        { title: "Storage & Databases", items: [{ name: "PostgreSQL", icon: dv("postgresql") }, { name: "DynamoDB", icon: dv("dynamodb") }, { name: "Redis", icon: dv("redis") }, { name: "MySQL", icon: dv("mysql") }] },
        { title: "DevOps & Automation", items: [{ name: "Terraform", icon: dv("terraform") }, { name: "Ansible", icon: dv("ansible") }, { name: "Jenkins", icon: dv("jenkins") }, { name: "GitHub Actions", icon: dv("githubactions") }] },
        { title: "Monitoring & Security", items: [{ name: "Prometheus", icon: dv("prometheus") }, { name: "Grafana", icon: dv("grafana") }, { name: "Datadog", icon: si("datadog") }, { name: "Vault", icon: dv("vault") }] },
      ],
    },
    sectors: {
      rest: "cloud work fits best",
      description: "Cloud maturity pays off fastest where uptime, compliance and traffic spikes decide whether customers stay.",
      items: [
        { title: "Fintech", text: "Secure, auditable platforms for payments and mobile money integrations.", note: "Infrastructure designed for audits from day one." },
        { title: "Healthcare", text: "Private, encrypted storage and processing for patient records.", note: "Access controls and logging that hold up to review." },
        { title: "SaaS", text: "Multi-tenant platforms serving customers across regions.", note: "Isolation, autoscaling and per-tenant cost visibility." },
      ],
    },
    faq: {
      highlight: "Cloud",
      rest: "& DevOps FAQs",
      items: [
        { q: "How long does a cloud migration usually take?", a: "It depends on the number of systems and their dependencies. Small estates move in a few weeks; larger ones run in waves over a few months." },
        { q: "Can you reduce our current cloud bill?", a: "Usually, yes. We audit usage, remove idle resources, right-size instances and set up budgets and alerts so savings stick." },
        { q: "What does your DevOps approach look like?", a: "Automation first: infrastructure as code, CI/CD on every merge, observability built in, and small, frequent releases." },
      ],
    },
  },
  {
    slug: "digital-transformation",
    crumb: "Digital Transformation",
    eyebrow: "Services",
    title: "Digital Transformation",
    description: "Replace paper trails and ageing systems with connected, cloud-ready software. We modernise processes step by step, without stopping the business that runs on them.",
    icon: "RefreshCw",
    offeringsHighlight: "Digital Transformation",
    offerings: [
      { title: "Digital Strategy & Roadmapping", text: "Find the changes with the highest return and sequence them into a realistic plan." },
      { title: "Legacy System Modernisation", text: "Rework outdated applications into maintainable, secure, cloud-ready systems." },
      { title: "Customer Experience Design", text: "Redesign web, mobile and USSD touchpoints so customers finish what they start." },
      { title: "Business Process Automation", text: "Digitise approvals, forms and hand-offs to cut delays and manual errors." },
      { title: "Data Analytics & BI", text: "Turn operational data into dashboards leaders actually open every week." },
      { title: "Cloud Adoption", text: "Move infrastructure to the cloud with training so your team can run it confidently." },
    ],
    approach: {
      highlight: "How we approach",
      rest: "digital modernisation",
      description: "Technology alone does not transform anything. We pair new systems with the process and team changes that make them stick.",
      items: [
        { title: "Data-Driven Decisions", text: "Give leadership timely, trustworthy numbers instead of month-end spreadsheets." },
        { title: "Agile Ways of Working", text: "Coach teams into short delivery cycles and continuous feedback." },
        { title: "Commerce Modernisation", text: "Connect storefronts, inventory and payments into one reliable flow." },
      ],
    },
    tech: {
      subject: "behind our transformation work",
      description: "We blend integration with existing systems and modern cloud tooling so the transition is gradual and safe.",
      groups: [
        { title: "Cloud Platforms", items: [{ name: "AWS", icon: dv("amazonwebservices") }, { name: "Azure", icon: dv("azure") }, { name: "Google Cloud", icon: dv("googlecloud") }, { name: "Salesforce", icon: dv("salesforce") }] },
        { title: "Data & BI", items: [{ name: "Metabase", icon: si("metabase") }, { name: "Apache Kafka", icon: dv("apachekafka") }, { name: "PostgreSQL", icon: dv("postgresql") }, { name: "Snowflake", icon: si("snowflake") }] },
        { title: "Business Systems", items: [{ name: "Odoo", icon: si("odoo") }, { name: "SAP", icon: si("sap") }, { name: "Zendesk", icon: si("zendesk") }, { name: "Oracle", icon: dv("oracle") }] },
        { title: "Modern Frontend", items: [{ name: "Next.js", icon: dv("nextjs") }, { name: "React", icon: dv("react") }, { name: "Vue.js", icon: dv("vuejs") }, { name: "Tailwind CSS", icon: dv("tailwindcss") }, { name: "Figma", icon: dv("figma") }] },
      ],
    },
    sectors: {
      rest: "transformation work fits best",
      description: "We work with established organisations where digital maturity is now the difference between keeping and losing customers.",
      items: [
        { title: "Retail", text: "Omnichannel sales, unified inventory and loyalty programmes.", note: "One view of stock and customers across every channel." },
        { title: "Fintech", text: "Digital onboarding, mobile money rails and automated claims.", note: "Legacy cores wrapped in clean, documented APIs." },
        { title: "Public & Healthcare", text: "Digital records, appointment flows and citizen-facing portals.", note: "Paper processes rebuilt as simple digital journeys." },
      ],
    },
    faq: {
      highlight: "Digital Transformation",
      rest: "FAQs",
      items: [
        { q: "Where does a transformation project start?", a: "With an audit of current processes and systems, followed by a roadmap that ranks changes by impact and effort." },
        { q: "What if some legacy systems cannot be replaced yet?", a: "We wrap them with APIs or refactor them incrementally so they keep working while the rest of the estate moves forward." },
        { q: "When will we see results?", a: "We plan early wins in the first few months, such as an automated workflow or a live dashboard, to build momentum for the longer programme." },
      ],
    },
  },
  {
    slug: "emerging-technologies",
    crumb: "Emerging Technologies",
    eyebrow: "Services",
    title: "Emerging",
    titleRest: "Technologies",
    description: "Prototype and ship with blockchain, real-time 3D and spatial computing, where they genuinely improve your product rather than decorate it.",
    icon: "Sparkles",
    offeringsHighlight: "Emerging Technologies",
    offerings: [
      { title: "Smart Contracts & DApps", text: "Write, test and audit Solidity contracts and the apps that talk to them." },
      { title: "DeFi Solutions", text: "Design lending, payment and settlement protocols with transparent on-chain logic." },
      { title: "Decentralised Ledgers", text: "Keep tamper-evident records shared across organisations that do not fully trust each other." },
      { title: "AR/VR Development", text: "Build augmented and virtual reality experiences for training, retail and field work." },
      { title: "Unity 3D Engines", text: "Create real-time 3D simulations and interactive visualisations in Unity." },
      { title: "Spatial Computing", text: "Model digital twins of sites and equipment that teams can explore in 3D." },
    ],
    approach: {
      highlight: "How we approach",
      rest: "emerging technology",
      description: "We validate the idea with a focused prototype first, then engineer for production only when the value is proven.",
      items: [
        { title: "DApp Development", text: "On-chain logic kept small, audited and paired with familiar web front ends." },
        { title: "Cross-Platform Engines", text: "One codebase delivered to headset, desktop, web and mobile targets." },
        { title: "Interactive Simulations", text: "Physics-based digital twins rendered through production-grade 3D pipelines." },
      ],
    },
    tech: {
      subject: "behind our emerging technology work",
      description: "Mature, well-supported tools only. New technology is risky enough without an experimental stack underneath it.",
      groups: [
        { title: "Blockchain", items: [{ name: "Solidity", icon: dv("solidity") }, { name: "Ethereum", icon: si("ethereum") }, { name: "Web3.js", icon: si("web3dotjs") }] },
        { title: "3D & Interactive", items: [{ name: "Unity", icon: dv("unity") }, { name: "Three.js", icon: dv("threejs") }, { name: "Blender", icon: dv("blender") }] },
        { title: "Cross-Platform", items: [{ name: "Flutter", icon: dv("flutter") }, { name: "React Native", icon: dv("react") }] },
      ],
    },
    sectors: {
      rest: "emerging tech fits best",
      description: "These technologies pay off in specific places. We will tell you honestly if yours is not one of them.",
      items: [
        { title: "Education & Training", text: "VR safety drills and 3D lab simulations for students and staff.", note: "Practice that is safe, repeatable and measurable." },
        { title: "Supply Chain", text: "Shared ledgers that trace goods such as coffee from farm to export.", note: "Provenance records every party can verify." },
        { title: "Real Estate & Industry", text: "Digital twins and AR walkthroughs of sites and equipment.", note: "Decisions made in 3D before anything is built." },
      ],
    },
    faq: {
      highlight: "Emerging Technologies",
      rest: "FAQs",
      items: [
        { q: "Which blockchains do you build on?", a: "Mostly Ethereum and EVM-compatible networks using Solidity, chosen per project for cost, speed and ecosystem fit." },
        { q: "Can Unity experiences run in a browser?", a: "Yes. We export to WebGL and tune assets and shaders so experiences load quickly across devices." },
        { q: "Can a smart contract be changed after launch?", a: "Deployed code is immutable unless an upgrade pattern is designed in, which is why we test and audit thoroughly before mainnet." },
      ],
    },
  },
  {
    slug: "hire-dedicated-developers",
    crumb: "Hire Dedicated Developers",
    eyebrow: "Services",
    title: "Hire Dedicated Teams",
    description: "Add senior engineers to your team, or hand a whole roadmap to a managed squad. Engineers in Addis Ababa on GMT+3, with working hours that overlap Europe, the Gulf and Africa.",
    icon: "Users",
    offeringsHighlight: "Dedicated Teams",
    offerings: [
      { title: "Dedicated Developers", text: "Senior engineers matched to your stack who work as part of your team." },
      { title: "IT Staffing & Tech Leads", text: "Fill skill gaps quickly with vetted specialists and hands-on technical leads." },
      { title: "Managed Teams", text: "A self-sufficient squad that owns planning, engineering, QA and releases." },
      { title: "Agile Squads", text: "Cross-functional teams running Scrum or Kanban against your roadmap." },
      { title: "Full-Cycle Development", text: "From discovery and design through launch and ongoing improvement." },
      { title: "QA & Validation", text: "Dedicated testers and automation engineers guarding every release." },
    ],
    approach: {
      highlight: "How our",
      rest: "team model works",
      description: "You choose the level of involvement. We supply experienced engineers and the delivery structure that keeps them productive.",
      items: [
        { title: "Flexible Team Size", text: "Scale up or down as the roadmap changes, without long hiring cycles." },
        { title: "Delivery Management Included", text: "Every team has a delivery lead who keeps communication clear and progress visible." },
        { title: "Cost-Effective Senior Talent", text: "Experienced engineers at rates that let your budget go further." },
      ],
    },
    tech: {
      subject: "our engineers work in",
      description: "We match engineers to your existing stack so they contribute from the first sprint.",
      groups: [
        { title: "Frontend", items: [{ name: "React", icon: dv("react") }, { name: "Next.js", icon: dv("nextjs") }, { name: "Vue.js", icon: dv("vuejs") }, { name: "Angular", icon: dv("angular") }, { name: "Tailwind CSS", icon: dv("tailwindcss") }] },
        { title: "Backend", items: [{ name: "Node.js", icon: dv("nodejs") }, { name: "Python", icon: dv("python") }, { name: "Go", icon: dv("go") }, { name: "Java", icon: dv("java") }, { name: "Laravel", icon: dv("laravel") }] },
        { title: "Mobile", items: [{ name: "React Native", icon: dv("react") }, { name: "Flutter", icon: dv("flutter") }, { name: "Swift", icon: dv("swift") }, { name: "Kotlin", icon: dv("kotlin") }] },
        { title: "Database & Cloud", items: [{ name: "PostgreSQL", icon: dv("postgresql") }, { name: "MongoDB", icon: dv("mongodb") }, { name: "AWS", icon: dv("amazonwebservices") }, { name: "Google Cloud", icon: dv("googlecloud") }, { name: "Azure", icon: dv("azure") }] },
      ],
    },
    sectors: {
      rest: "teams fit best",
      description: "Dedicated teams add the most value where product roadmaps move fast and hiring locally is slow.",
      items: [
        { title: "SaaS", text: "Feature teams that keep release cycles short.", note: "Engineers who own outcomes, not just tickets." },
        { title: "Fintech", text: "Secure, well-tested financial software.", note: "Careful engineering for systems that move money." },
        { title: "Healthcare", text: "Applications that respect patient privacy.", note: "Teams used to compliance-heavy delivery." },
      ],
    },
    faq: {
      highlight: "Dedicated Teams",
      rest: "FAQs",
      items: [
        { q: "How quickly can an engineer join our team?", a: "We usually share matched profiles within a few days and can onboard soon after you approve." },
        { q: "Will the engineers overlap with our working hours?", a: "Yes. Addis Ababa is on GMT+3, which overlaps well with Europe, the Middle East and most of Africa, and we adjust schedules for other regions." },
        { q: "Can we interview engineers before they start?", a: "Always. You meet the candidates and make the final decision." },
      ],
    },
  },
  {
    slug: "modernization-support",
    crumb: "Modernization Support",
    eyebrow: "Support",
    title: "Modernization",
    titleRest: "& Support",
    description: "Keep critical systems fast, secure and online. We refactor legacy code, move it to modern platforms and watch over production around the clock.",
    icon: "RefreshCw",
    offeringsHighlight: "Modernization & Support",
    offerings: [
      { title: "System Refactoring", text: "Pay down technical debt and speed up slow code paths without a risky rewrite." },
      { title: "Monolith to Microservices", text: "Split large applications into services in stages, keeping production stable throughout." },
      { title: "Cloud Replatforming", text: "Move legacy workloads to managed cloud platforms and current runtimes." },
      { title: "24/7 SLA Monitoring", text: "Alerting and dashboards that catch problems before your users do." },
      { title: "Site Reliability Engineering", text: "Error budgets, capacity planning and incident response sized to your SLAs." },
      { title: "Disaster Recovery", text: "Tested backups and failover so data and service survive the worst day." },
    ],
    approach: {
      highlight: "How we approach",
      rest: "modernization and support",
      description: "We change systems while they keep earning. Every step is reversible, measured and agreed before it reaches production.",
      items: [
        { title: "Gradual Revitalisation", text: "Modernise components one at a time while revenue-critical flows keep running." },
        { title: "Technical Debt Reduction", text: "Target the bottlenecks that slow your team the most, first." },
        { title: "Continuous Observability", text: "Live insight into the health of every service and dependency." },
      ],
    },
    tech: {
      subject: "behind our modernization work",
      description: "We work with the stack you have and introduce new tools only where they reduce risk or effort.",
      groups: [
        { title: "Observability", items: [{ name: "Prometheus", icon: dv("prometheus") }, { name: "Grafana", icon: dv("grafana") }, { name: "Datadog", icon: si("datadog") }] },
        { title: "DevOps & Deployment", items: [{ name: "Docker", icon: dv("docker") }, { name: "Kubernetes", icon: dv("kubernetes", "plain") }, { name: "Terraform", icon: dv("terraform") }] },
        { title: "Modern Runtimes", items: [{ name: "Node.js", icon: dv("nodejs") }, { name: "Go", icon: dv("go") }, { name: ".NET", icon: dv("dotnetcore") }] },
      ],
    },
    sectors: {
      rest: "modernization work fits best",
      description: "Modernization matters most where old systems slow the team down or put operations at risk.",
      items: [
        { title: "Banking & Fintech", text: "Core systems moved behind APIs with no downtime for customers.", note: "Parallel runs before every cutover." },
        { title: "E-Commerce", text: "Database and platform upgrades ahead of peak seasons.", note: "Load-tested before the traffic arrives." },
        { title: "SaaS", text: "Automated patching and monitoring for multi-tenant platforms.", note: "Security updates without weekend outages." },
      ],
    },
  },
  {
    slug: "software-development",
    crumb: "Software Development",
    eyebrow: "Development",
    title: "Custom Software",
    description: "Web platforms, mobile apps and the APIs behind them, designed and built end to end by one senior team.",
    icon: "Code2",
    offeringsHighlight: "Custom Software",
    offerings: [
      { title: "Web Applications", text: "Fast, secure web apps built with React and Next.js." },
      { title: "Mobile App Development", text: "iOS, Android and cross-platform apps that work on low-end devices and patchy networks." },
      { title: "Enterprise Systems & SaaS", text: "Internal tools and multi-tenant platforms that stay reliable under real load." },
      { title: "UI/UX Design", text: "Wireframes and prototypes you can test with users before engineering starts." },
      { title: "API Architecture", text: "Well-documented REST and GraphQL APIs that other teams enjoy using." },
      { title: "System Integration", text: "Connect payment gateways, ERPs and legacy systems into one maintainable architecture." },
    ],
    approach: {
      highlight: "How we approach",
      rest: "software engineering",
      description: "Small, senior teams, short feedback loops and code written to be read by the next engineer.",
      items: [
        { title: "Tailored Solutions", text: "Every system is scoped to the problem you are actually solving." },
        { title: "Agile Delivery", text: "Working software every sprint, with your feedback built into the next one." },
        { title: "Secure by Default", text: "OWASP practices, data protection and access control from the first commit." },
      ],
    },
    tech: {
      subject: "behind our software work",
      description: "Proven, well-supported technologies chosen for your product's needs and your team's future.",
      groups: [
        { title: "Frontend", items: [{ name: "React", icon: dv("react") }, { name: "Next.js", icon: dv("nextjs") }, { name: "TypeScript", icon: dv("typescript") }, { name: "Vue", icon: dv("vuejs") }, { name: "Angular", icon: dv("angular") }, { name: "Tailwind CSS", icon: dv("tailwindcss") }] },
        { title: "Backend", items: [{ name: "Node.js", icon: dv("nodejs") }, { name: "Python", icon: dv("python") }, { name: "Go", icon: dv("go") }, { name: "Java", icon: dv("java") }, { name: ".NET", icon: dv("dotnetcore") }] },
        { title: "Database & Cloud", items: [{ name: "PostgreSQL", icon: dv("postgresql") }, { name: "MongoDB", icon: dv("mongodb") }, { name: "MySQL", icon: dv("mysql") }, { name: "AWS", icon: dv("amazonwebservices") }, { name: "Google Cloud", icon: dv("googlecloud") }, { name: "Azure", icon: dv("azure") }] },
        { title: "Mobile", items: [{ name: "React Native", icon: dv("react") }, { name: "Flutter", icon: dv("flutter") }, { name: "Swift", icon: dv("swift") }, { name: "Kotlin", icon: dv("kotlin") }, { name: "Ionic", icon: dv("ionic") }] },
      ],
    },
    sectors: {
      rest: "software fits best",
      description: "We build where well-engineered software makes a measurable difference to customers and operations.",
      items: [
        { title: "Fintech", text: "Payments, lending and mobile money products.", note: "Ledgers and reconciliations that always balance." },
        { title: "Healthcare", text: "Clinic, pharmacy and patient-facing platforms.", note: "Privacy and audit trails built in." },
        { title: "EdTech", text: "Learning platforms and school management systems.", note: "Designed for real classrooms and real bandwidth." },
      ],
    },
    faq: {
      highlight: "Custom Software",
      rest: "FAQs",
      items: [
        { q: "How do you run a software project?", a: "In short iterations: we agree a scope, ship working software every sprint and adjust the plan with your feedback." },
        { q: "How long does a custom build take?", a: "An MVP often takes two to four months; larger platforms are delivered in phases over a longer period." },
      ],
    },
  },
];

/** Group slugs that only redirect to a landing page (307 on the reference). */
export const landingRedirects: Record<string, string> = {
  "artificial-intelligence": "/services/ai-development-services",
  "software-engineering": "/services/software-development",
  "team-engagement": "/services/hire-dedicated-developers",
};

/* -------------------------------------------------------------------------- */
/* Subcategories and items                                                     */
/* -------------------------------------------------------------------------- */

/** Item layout: AI & cloud = "delivery", software & teams = "hiring", modernization & emerging = "transition". */
export type ItemVariant = "delivery" | "hiring" | "transition";

export type ServiceItemCopy = {
  slug: string;
  /** Only needed when the item is not listed in the header menu. */
  label?: string;
  /** Hero headline. In "transition" items, words wrapped in *asterisks* are highlighted. */
  heroTitle: string;
  description: string;
  /** Four KPI chips. */
  kpis: [string, string, string, string];
  /** Four item-specific scope points: deliverables (delivery), scope highlights (hiring), scope of work (transition). */
  focus: [string, string, string, string];
  faqs: QA[];
};

export type ServiceSubcategoryCopy = {
  id: string;
  label?: string;
  /** Gradient hero title. */
  heroTitle: string;
  description: string;
  snapshot: { value: string; label: string }[];
  pillars: { title: string; points: TitledText[] }[];
  why: (TitledText & { icon: string })[];
  faq: QA;
  /** Item pages: hero badge for "transition" items. */
  badge: string;
  /** Item pages: two context paragraphs; "{title}" is replaced by the item label. */
  context?: [string, string];
  items: ServiceItemCopy[];
};

type GroupCopy = { id: string; label?: string; landing: string; variant: ItemVariant; subcategories: ServiceSubcategoryCopy[] };

const groupCopy: GroupCopy[] = [
  {
    id: "artificial-intelligence",
    landing: "ai-development-services",
    variant: "delivery",
    subcategories: [
      {
        id: "generative-ai",
        heroTitle: "Language Model Engineering",
        description: "Assistants, content pipelines and retrieval systems built on GPT, Claude, Gemini and open models, grounded in your own data.",
        snapshot: [
          { value: "RAG", label: "Grounded" },
          { value: "LLM", label: "Model-agnostic" },
          { value: "Private", label: "Deploy option" },
          { value: "Evals", label: "Built in" },
        ],
        pillars: [
          {
            title: "AI Capabilities",
            points: [
              { title: "Model Fine-tuning", text: "Adapt open models to your terminology, tone and tasks." },
              { title: "Vector Search", text: "Semantic search over documents with pgvector, Pinecone or Milvus." },
              { title: "Agentic Workflows", text: "Agents that call tools and APIs with guardrails and audit logs." },
            ],
          },
          {
            title: "Production Readiness",
            points: [
              { title: "Prompt Engineering", text: "Versioned prompts tested against real examples." },
              { title: "Safety & Guardrails", text: "Filters and checks that reduce hallucination and misuse." },
              { title: "Scalable Inference", text: "Caching, batching and autoscaling sized to your traffic." },
            ],
          },
        ],
        why: [
          { icon: "Bot", title: "Architecture First", text: "We map how models, data and infrastructure connect before writing code, so the system holds up as usage grows." },
          { icon: "Shield", title: "Privacy & Control", text: "Run models on your own infrastructure when data must not leave it, with no third-party calls." },
        ],
        faq: { q: "Can the model use our internal documents?", a: "Yes. Retrieval pipelines let the model answer from your documents with citations, without retraining every time content changes." },
        badge: "Delivery & execution",
        items: [
          {
            slug: "custom-llm-development",
            heroTitle: "Ship production-ready custom language models with measurable accuracy at every milestone",
            description: "Senior AI engineers fine-tune and deploy domain-specific models on infrastructure you control, with evaluation suites that show exactly how they perform.",
            kpis: ["Hallucination rate on domain questions", "Inference latency per request", "Accuracy against a domain benchmark", "Cost per thousand tokens"],
            focus: ["Fine-tuned domain model", "Evaluation report against the base model", "Secure inference API with monitoring", "Retraining and versioning pipeline"],
            faqs: [
              { q: "Do we need expensive GPUs?", a: "Not always. Quantisation and smaller open models often run well on modest hardware or managed endpoints." },
              { q: "How do you measure success?", a: "With automated benchmarks built from your data plus expert review of sampled outputs." },
            ],
          },
          {
            slug: "openai-integrations",
            heroTitle: "Integrate OpenAI and other model APIs into your product with cost and quality under control",
            description: "We add generation, embeddings and multimodal features to your product with caching, fallbacks and usage limits built in from day one.",
            kpis: ["Response latency (P95)", "Monthly API spend per active user", "Task success rate", "Fallback and error rate"],
            focus: ["Integration architecture and API layer", "Prompt library with test cases", "Usage, cost and quality dashboard", "Fallback and rate-limit handling"],
            faqs: [
              { q: "Are we locked into one provider?", a: "No. We put a thin abstraction in front of model calls so switching or mixing providers is a configuration change." },
              { q: "Will our data be used to train their models?", a: "We use enterprise API settings that exclude your data from training and document the data flow for your review." },
            ],
          },
          {
            slug: "ai-chatbots",
            heroTitle: "Launch AI assistants that answer from your knowledge and hand off to people when they should",
            description: "Customer and staff assistants grounded in your content, available in English, Amharic and Afaan Oromo, with guardrails and human escalation.",
            kpis: ["Response latency (P95 under 2s)", "Intent recognition accuracy", "Containment rate without escalation", "Answer accuracy on your content"],
            focus: ["Conversation design and escalation rules", "Knowledge ingestion pipeline", "Web, WhatsApp or Telegram channel integration", "Analytics and review console"],
            faqs: [
              { q: "Can the assistant speak local languages?", a: "Yes. We test Amharic and Afaan Oromo quality on your real conversations and pick models accordingly." },
              { q: "What happens when it does not know the answer?", a: "It says so and routes the conversation to a person with the context attached." },
            ],
          },
          {
            slug: "rag-architecture",
            heroTitle: "Design retrieval pipelines that keep AI answers accurate, current and traceable",
            description: "We structure, chunk and index your knowledge so models cite real sources, and we measure retrieval quality as carefully as the answers.",
            kpis: ["Retrieval precision at top results", "Answer groundedness score", "Index freshness", "Query latency"],
            focus: ["Ingestion and chunking strategy", "Vector and hybrid search index", "Evaluation set and scoring harness", "Access-aware retrieval layer"],
            faqs: [
              { q: "Which vector database do you use?", a: "Often PostgreSQL with pgvector for simplicity; dedicated stores when scale or features require them." },
              { q: "Can users only see documents they have access to?", a: "Yes. Retrieval respects your existing permissions so answers never leak restricted content." },
            ],
          },
        ],
      },
      {
        id: "data-science",
        heroTitle: "Data Science & ML Engineering",
        description: "Forecasting, classification and vision models that move from notebook to production with the pipelines to keep them accurate.",
        snapshot: [
          { value: "Pipelines", label: "Production-grade" },
          { value: "Validated", label: "Holdout-tested" },
          { value: "Spark", label: "Scale-ready" },
          { value: "MLOps", label: "Automated" },
        ],
        pillars: [
          {
            title: "Modelling",
            points: [
              { title: "Predictive Modelling", text: "Forecast demand, churn and risk from historical patterns." },
              { title: "Natural Language Processing", text: "Classify, extract and summarise text, including Ethiopian languages." },
              { title: "Computer Vision", text: "Detect objects, read documents and inspect products automatically." },
            ],
          },
          {
            title: "ML Engineering",
            points: [
              { title: "MLOps Pipelines", text: "Automated training, testing and deployment for models." },
              { title: "Feature Engineering", text: "Turn raw records into reliable model inputs." },
              { title: "Data Visualisation", text: "Dashboards that explain what the models are seeing." },
            ],
          },
        ],
        why: [
          { icon: "LineChart", title: "Statistically Rigorous", text: "Models are validated on holdout data with documented precision and recall before release." },
          { icon: "Database", title: "Scalable Pipelines", text: "Pipelines designed to handle ten times today's volume without a rebuild." },
        ],
        faq: { q: "How do you handle sensitive data?", a: "We anonymise and encrypt data in the pipeline so personal information is protected before any model sees it." },
        badge: "Delivery & execution",
        items: [
          {
            slug: "predictive-analytics",
            heroTitle: "Forecast demand, churn and risk with models validated against your own history",
            description: "We build and deploy predictive models that plug into your planning tools, with monitoring that flags drift before decisions suffer.",
            kpis: ["Forecast error (MAPE)", "Model precision and recall", "Prediction freshness", "Decisions influenced per month"],
            focus: ["Validated forecasting model", "Feature store and data pipeline", "Prediction API and dashboard", "Drift monitoring and retraining plan"],
            faqs: [
              { q: "How much data do we need?", a: "It varies, but a year or more of consistent records is usually a good start. We assess your data before committing." },
              { q: "Can predictions feed our existing tools?", a: "Yes. We expose results through APIs or push them into your ERP, CRM or BI tool." },
            ],
          },
          {
            slug: "nlp-computer-vision",
            heroTitle: "Read documents, understand text and inspect images automatically",
            description: "Text and vision models for document processing, classification and visual inspection, tuned for local languages and real-world image quality.",
            kpis: ["Extraction accuracy per field", "Classification F1 score", "Images processed per minute", "Manual review rate"],
            focus: ["Labelled training and test sets", "Text or vision model tuned to your data", "Processing API with confidence scores", "Human review workflow for edge cases"],
            faqs: [
              { q: "Do you support Amharic and Afaan Oromo?", a: "Yes. We evaluate OCR and language models on Ge'ez and Latin scripts using your own samples." },
              { q: "What if image quality is poor?", a: "We design for it with preprocessing, confidence thresholds and human review for low-confidence cases." },
            ],
          },
          {
            slug: "data-engineering",
            heroTitle: "Build data pipelines your analysts and models can rely on",
            description: "Ingestion, transformation and warehousing that turn scattered sources into clean, documented, tested datasets.",
            kpis: ["Pipeline success rate", "Data freshness (lag)", "Failed data quality checks", "Cost per processed gigabyte"],
            focus: ["Source ingestion connectors", "Tested transformation layer", "Warehouse or lakehouse schema", "Data quality monitoring and alerts"],
            faqs: [
              { q: "Batch or streaming?", a: "Whichever the use case needs. Many teams start with batch and add streaming only where latency matters." },
              { q: "Which warehouse do you recommend?", a: "It depends on volume, budget and skills; PostgreSQL, BigQuery and Snowflake are common choices." },
            ],
          },
          {
            slug: "workflow-automation",
            heroTitle: "Automate repetitive work with AI agents that keep people in control",
            description: "We map manual processes and replace the repetitive steps with agents that route, draft and decide, escalating anything uncertain.",
            kpis: ["Hours saved per week", "Straight-through processing rate", "Error rate versus manual baseline", "Escalation rate"],
            focus: ["Process map and automation candidates", "Agent workflows with tool integrations", "Approval and escalation rules", "Audit log and performance dashboard"],
            faqs: [
              { q: "Which processes should we automate first?", a: "High-volume, rule-heavy tasks with clear outcomes, such as invoice handling or ticket triage." },
              { q: "Can staff override the automation?", a: "Yes. Every automated decision can be reviewed, corrected and fed back to improve the system." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "team-engagement",
    landing: "hire-dedicated-developers",
    variant: "hiring",
    subcategories: [
      {
        id: "staff-augmentation",
        heroTitle: "Staff Augmentation",
        description: "Senior engineers who join your stand-ups, use your tools and ship in your codebase from the first sprint.",
        snapshot: [
          { value: "Senior", label: "Engineers" },
          { value: "GMT+3", label: "Time zone" },
          { value: "Vetted", label: "Technically" },
          { value: "Flexible", label: "Team size" },
        ],
        pillars: [
          {
            title: "Talent",
            points: [
              { title: "Technical Vetting", text: "Live coding and system design reviews by our senior engineers." },
              { title: "Stack Matching", text: "Engineers chosen for your languages, frameworks and domain." },
              { title: "Fast Onboarding", text: "Access, environment and first tasks planned before day one." },
            ],
          },
          {
            title: "Continuity",
            points: [
              { title: "Delivery Oversight", text: "A delivery lead checks in on quality and progress." },
              { title: "Knowledge Retention", text: "Documentation habits that keep context in your team." },
              { title: "Easy Scaling", text: "Add or rotate engineers as priorities change." },
            ],
          },
        ],
        why: [
          { icon: "UserCheck", title: "Proven Engineers", text: "Every engineer passes a technical review by senior staff before we propose them." },
          { icon: "Clock", title: "Overlapping Hours", text: "GMT+3 overlaps well with Europe, the Gulf and Africa, so collaboration happens in real time." },
        ],
        faq: { q: "Do the engineers work only on our project?", a: "Yes. Dedicated engineers work full time on your product and follow your processes." },
        badge: "Dedicated hiring",
        context: [
          "Teams looking for {title} usually have a roadmap that is outgrowing their hiring pipeline, and need experienced engineers who can contribute without weeks of hand-holding.",
          "Every month a key role stays open, features slip and existing engineers carry more load. Adding senior capacity now protects both the roadmap and the team.",
        ],
        items: [
          {
            slug: "dedicated-engineers",
            heroTitle: "Add dedicated senior engineers who work as part of your team from week one",
            description: "Full-time engineers matched to your stack, embedded in your rituals and accountable to your roadmap.",
            kpis: ["Time to first merged pull request", "Sprint commitment reliability", "Code review turnaround", "Engineer retention"],
            focus: ["Profile matching and interviews", "Onboarding plan and environment setup", "Embedded delivery in your workflow", "Monthly performance check-ins"],
            faqs: [
              { q: "Can we scale the team later?", a: "Yes. Add engineers as the roadmap grows, or scale down with agreed notice." },
              { q: "Who manages the engineers day to day?", a: "You do, as with your own team. We handle HR, equipment and performance support." },
            ],
          },
          {
            slug: "it-staffing",
            heroTitle: "Fill critical engineering roles quickly with vetted IT specialists",
            description: "Short- and long-term specialists for development, QA, DevOps and data roles, screened by engineers rather than recruiters.",
            kpis: ["Time to shortlist", "Interview-to-hire ratio", "Ramp-up time to full productivity", "Assignment completion rate"],
            focus: ["Role definition and skills matrix", "Technical screening by senior engineers", "Shortlist and client interviews", "Onboarding and replacement guarantee"],
            faqs: [
              { q: "Which roles can you staff?", a: "Frontend, backend, mobile, QA, DevOps, data and project roles." },
              { q: "What if a placement does not work out?", a: "We replace the specialist quickly at no extra recruitment cost." },
            ],
          },
          {
            slug: "managed-teams",
            heroTitle: "Hand a roadmap to a managed team that owns delivery end to end",
            description: "A cross-functional team with its own lead, QA and delivery management, reporting progress against outcomes you agree.",
            kpis: ["Milestones delivered on schedule", "Escaped defect rate", "Release frequency", "Stakeholder satisfaction score"],
            focus: ["Team composition and delivery plan", "Sprint delivery with demos", "QA and release management", "Weekly reporting and governance"],
            faqs: [
              { q: "How involved do we need to be?", a: "Mainly in priorities and acceptance. The team handles planning and execution." },
              { q: "How do we track progress?", a: "Shared boards, sprint demos and a short weekly report against agreed milestones." },
            ],
          },
          {
            slug: "tech-leads",
            heroTitle: "Bring in senior technical leads to steer architecture and grow your team",
            description: "Hands-on leads who make architecture decisions, review code and mentor engineers while still shipping.",
            kpis: ["Architecture decisions documented", "Review coverage on critical code", "Team velocity trend", "Production incident count"],
            focus: ["Architecture assessment and roadmap", "Code review and engineering standards", "Mentoring and team rituals", "Hiring support and handover plan"],
            faqs: [
              { q: "Is the lead hands-on?", a: "Yes. Our leads write code as well as review it and guide decisions." },
              { q: "Can a lead help us hire?", a: "Yes. They can design interviews and assess candidates for your permanent team." },
            ],
          },
        ],
      },
      {
        id: "project-delivery",
        heroTitle: "Project Delivery",
        description: "Agile squads that take a product or feature from idea to production, with clear milestones and no surprises at the end.",
        snapshot: [
          { value: "Squads", label: "Cross-functional" },
          { value: "Sprints", label: "Two-week" },
          { value: "QA", label: "Built in" },
          { value: "Demos", label: "Every sprint" },
        ],
        pillars: [
          {
            title: "Delivery",
            points: [
              { title: "Agile Squads", text: "Product, design, engineering and QA in one team." },
              { title: "Rapid Prototyping", text: "Clickable prototypes to validate ideas early." },
              { title: "Full-Cycle Builds", text: "From discovery through launch and iteration." },
            ],
          },
          {
            title: "Quality",
            points: [
              { title: "Test Automation", text: "Automated suites that guard every release." },
              { title: "Release Management", text: "Planned releases with rollback paths." },
              { title: "Transparent Reporting", text: "Progress, risks and budget visible every week." },
            ],
          },
        ],
        why: [
          { icon: "Target", title: "Outcome Focused", text: "We agree measurable goals per milestone, not just a list of features." },
          { icon: "Eye", title: "Full Visibility", text: "Shared boards and sprint demos mean you always know where things stand." },
        ],
        faq: { q: "Fixed price or time and materials?", a: "Both work. Fixed scope suits well-defined projects; time and materials suits evolving products." },
        badge: "Managed delivery",
        context: [
          "Organisations choosing {title} usually need a product shipped on a deadline without building a full in-house team first.",
          "Delays compound: a late launch costs revenue and momentum. A ready-formed squad with a proven process shortens the path to production.",
        ],
        items: [
          {
            slug: "agile-squads",
            heroTitle: "Deliver faster with agile squads that ship working software every sprint",
            description: "Self-organising squads running Scrum or Kanban against your roadmap, with demos and retrospectives that keep everyone aligned.",
            kpis: ["Sprint goal completion", "Lead time for changes", "Escaped defects per release", "Stakeholder satisfaction"],
            focus: ["Squad setup and working agreements", "Backlog refinement and sprint planning", "Continuous integration and QA", "Sprint demos and retrospectives"],
            faqs: [
              { q: "How big is a squad?", a: "Typically four to seven people, shaped to the work: engineers, QA and a delivery lead, with design as needed." },
              { q: "Can a squad work alongside our team?", a: "Yes. Squads can own a product area or collaborate closely with your engineers." },
            ],
          },
          {
            slug: "full-cycle-development",
            heroTitle: "Take your product from first idea to live users with one accountable team",
            description: "Discovery, design, engineering, launch and iteration handled by a single team that owns the outcome.",
            kpis: ["Time from discovery to launch", "Milestones delivered on schedule", "Post-launch defect rate", "User activation after release"],
            focus: ["Discovery and product definition", "UX design and prototyping", "Engineering, QA and launch", "Post-launch support and iteration"],
            faqs: [
              { q: "Do you help define the product?", a: "Yes. Discovery workshops turn ideas into a prioritised, testable scope." },
              { q: "What happens after launch?", a: "We can continue with improvements and support, or hand over to your team with documentation." },
            ],
          },
          {
            slug: "rapid-prototyping",
            heroTitle: "Validate product ideas in weeks with prototypes real users can test",
            description: "Clickable and functional prototypes that answer your riskiest questions before you invest in a full build.",
            kpis: ["Time to first testable prototype", "User tests completed", "Key assumptions validated", "Cost per validated hypothesis"],
            focus: ["Assumption mapping and test plan", "Clickable or coded prototype", "User testing sessions", "Findings report and build recommendation"],
            faqs: [
              { q: "Is the prototype code reusable?", a: "Sometimes. We agree upfront whether speed or reusability matters more." },
              { q: "Who are the test users?", a: "Your customers where possible; we can also recruit representative users locally." },
            ],
          },
          {
            slug: "qa-testing",
            heroTitle: "Release with confidence through automated and exploratory quality engineering",
            description: "Test strategy, automation and manual exploratory testing that catch issues before your users do.",
            kpis: ["Automated test coverage of critical paths", "Escaped defect rate", "Regression cycle time", "Flaky test rate"],
            focus: ["Test strategy and risk analysis", "UI, API and mobile test automation", "Performance and security testing", "CI integration and quality reporting"],
            faqs: [
              { q: "Can you test on real devices?", a: "Yes, including low-end Android devices common in African markets." },
              { q: "Do you work with our existing tests?", a: "Yes. We extend and stabilise what you have before adding more." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "software-engineering",
    landing: "software-development",
    variant: "hiring",
    subcategories: [
      {
        id: "custom-applications",
        heroTitle: "Custom Applications",
        description: "Web, mobile and enterprise applications engineered around your workflows, built to stay fast and maintainable as you grow.",
        snapshot: [
          { value: "Web", label: "& Mobile" },
          { value: "Typed", label: "Codebases" },
          { value: "CI/CD", label: "From day one" },
          { value: "Tested", label: "Automatically" },
        ],
        pillars: [
          {
            title: "Engineering",
            points: [
              { title: "Modern Frameworks", text: "React, Next.js, Flutter and proven backend stacks." },
              { title: "Clean Architecture", text: "Modular code that new engineers can understand quickly." },
              { title: "Offline-Ready Mobile", text: "Apps that keep working on unreliable networks." },
            ],
          },
          {
            title: "Operations",
            points: [
              { title: "Automated Testing", text: "Unit, integration and end-to-end tests in CI." },
              { title: "Observability", text: "Logs, metrics and alerts from the first release." },
              { title: "Security Practices", text: "OWASP-aligned code reviews and dependency scanning." },
            ],
          },
        ],
        why: [
          { icon: "Code2", title: "Senior Engineers", text: "Experienced engineers who have shipped and maintained production systems." },
          { icon: "Layers", title: "Built to Last", text: "Documentation and clean structure so your team can own the code later." },
        ],
        faq: { q: "Will we own the source code?", a: "Yes. All code and intellectual property belong to you." },
        badge: "Dedicated hiring",
        context: [
          "Companies investing in {title} often find that early technical shortcuts now slow every release and make performance unpredictable under load.",
          "The longer structural problems wait, the more expensive they become. Senior engineering input now keeps the system ready for the users you expect next year.",
        ],
        items: [
          {
            slug: "web-applications",
            heroTitle: "Build resilient web applications that stay fast under real traffic",
            description: "Senior engineers design and build web platforms with solid architecture, clean state management and performance budgets you can measure.",
            kpis: ["Availability and uptime (%)", "Mean time to resolution (MTTR)", "Deployment frequency", "Core Web Vitals scores"],
            focus: ["Architecture and data model design", "API and third-party integration", "Automated testing and QA", "Production deployment and monitoring"],
            faqs: [
              { q: "Which framework do you recommend?", a: "Usually React with Next.js for the front end; the backend depends on your team and requirements." },
              { q: "Can you take over an existing web app?", a: "Yes. We start with a code and architecture review, then improve it incrementally." },
            ],
          },
          {
            slug: "mobile-apps",
            heroTitle: "Launch mobile apps that feel smooth and work offline on every device",
            description: "Native and cross-platform apps built for performance on everyday Android and iOS devices, with offline-first data and reliable releases.",
            kpis: ["App start time and frame rate", "Crash-free sessions", "Store release frequency", "App size on install"],
            focus: ["Native or cross-platform architecture", "API integration and offline sync", "Device testing and automation", "Store publishing and release pipeline"],
            faqs: [
              { q: "Native or cross-platform?", a: "Cross-platform with Flutter or React Native suits most products; native is best for heavy device features." },
              { q: "Can the app integrate mobile money?", a: "Yes. We integrate local payment providers such as telebirr and M-Pesa where available." },
            ],
          },
          {
            slug: "enterprise-systems",
            heroTitle: "Engineer enterprise systems that connect teams, data and processes reliably",
            description: "ERP extensions, internal platforms and workflow systems built with role-based access, audit trails and integration in mind.",
            kpis: ["System availability", "Process cycle time", "Integration error rate", "User adoption across departments"],
            focus: ["Domain modelling and process mapping", "Role-based access and audit trails", "Integration with ERP and finance systems", "Rollout, training and support"],
            faqs: [
              { q: "Can you extend Odoo or SAP?", a: "Yes. We build modules and integrations or replace parts with custom services where it makes sense." },
              { q: "How do you handle rollout?", a: "In phases, department by department, with training and support at each step." },
            ],
          },
          {
            slug: "saas-platforms",
            heroTitle: "Build SaaS platforms that scale tenants, features and revenue together",
            description: "Multi-tenant architecture, subscription billing and self-service onboarding engineered to grow without a rewrite.",
            kpis: ["Tenant onboarding time", "Platform uptime", "Cost per tenant", "Feature release frequency"],
            focus: ["Multi-tenant architecture and isolation", "Billing, plans and subscriptions", "Admin and self-service onboarding", "Scalability and load testing"],
            faqs: [
              { q: "Shared or isolated databases per tenant?", a: "It depends on compliance and scale. We often start shared with strong isolation and offer dedicated options for large tenants." },
              { q: "Can you handle local payment billing?", a: "Yes, alongside international providers like Stripe." },
            ],
          },
        ],
      },
      {
        id: "product-engineering",
        heroTitle: "Product Engineering",
        description: "Design, MVPs and APIs that help product teams learn fast and build on solid foundations.",
        snapshot: [
          { value: "MVP", label: "In weeks" },
          { value: "UX", label: "Research-led" },
          { value: "APIs", label: "Documented" },
          { value: "Iterative", label: "Delivery" },
        ],
        pillars: [
          {
            title: "Product",
            points: [
              { title: "Discovery", text: "Workshops that define the problem and the smallest useful solution." },
              { title: "UX & UI Design", text: "Research-informed flows and consistent design systems." },
              { title: "MVP Builds", text: "Launch the essentials fast, then learn from real users." },
            ],
          },
          {
            title: "Platform",
            points: [
              { title: "API Design", text: "Clear, versioned contracts for web, mobile and partners." },
              { title: "Integrations", text: "Payments, messaging, identity and legacy systems connected." },
              { title: "Scalable Foundations", text: "Architecture that grows past the MVP stage." },
            ],
          },
        ],
        why: [
          { icon: "Lightbulb", title: "Product Thinking", text: "Engineers who ask why before how, and challenge scope that does not serve users." },
          { icon: "Rocket", title: "Fast Iteration", text: "Short cycles from idea to feedback, so you invest in what works." },
        ],
        faq: { q: "Can you work with our in-house designers?", a: "Yes. We adapt to your design process or provide designers as needed." },
        badge: "Dedicated hiring",
        context: [
          "Product teams pursuing {title} usually need to prove value quickly while keeping the foundations sound enough to scale.",
          "Building the wrong thing is the most expensive mistake a product team can make. Experienced product engineers reduce that risk from the first sprint.",
        ],
        items: [
          {
            slug: "ui-ux-design",
            heroTitle: "Design product experiences users understand at first glance",
            description: "Research, information architecture and interface design that make complex products feel simple, backed by a reusable design system.",
            kpis: ["Task completion rate in usability tests", "Time on key tasks", "Design system adoption", "Support tickets on usability"],
            focus: ["User research and journey mapping", "Wireframes and interactive prototypes", "Visual design and design system", "Usability testing and iteration"],
            faqs: [
              { q: "Which tools do you use?", a: "Figma for design and prototyping, with design tokens shared with engineering." },
              { q: "Do you design for local languages?", a: "Yes, including layouts that handle Amharic script and longer translated strings." },
            ],
          },
          {
            slug: "mvp-development",
            heroTitle: "Launch a focused MVP fast and learn from real users",
            description: "We help you cut scope to what matters, build it properly and put it in front of users within weeks.",
            kpis: ["Time to launch", "Activation rate", "Validated learnings per cycle", "Cost to first paying user"],
            focus: ["Scope definition and prioritisation", "Design and core feature build", "Analytics and feedback loops", "Launch and next-iteration plan"],
            faqs: [
              { q: "How long does an MVP take?", a: "Typically eight to sixteen weeks depending on scope." },
              { q: "Will we need to rebuild after the MVP?", a: "Not if it is built well. We keep the architecture simple but sound so it can grow." },
            ],
          },
          {
            slug: "api-architecture",
            heroTitle: "Design APIs that are clear, secure and ready for every client",
            description: "REST and GraphQL APIs with consistent conventions, strong authentication and documentation developers enjoy reading.",
            kpis: ["API latency (P95)", "Error rate by endpoint", "Breaking changes per release", "Time for a partner to integrate"],
            focus: ["Domain and contract design", "Authentication and rate limiting", "OpenAPI documentation and SDKs", "Versioning and monitoring"],
            faqs: [
              { q: "REST or GraphQL?", a: "REST for most public and partner APIs; GraphQL when many clients need flexible data shapes." },
              { q: "How do you keep APIs secure?", a: "OAuth2 or token auth, input validation, rate limits and regular security testing." },
            ],
          },
          {
            slug: "system-integration",
            heroTitle: "Connect your systems so data flows without manual re-entry",
            description: "Integrations between payment gateways, ERPs, CRMs and legacy systems, with monitoring and retries so nothing gets lost.",
            kpis: ["Integration success rate", "Data sync latency", "Manual reconciliation hours", "Mean time to detect failures"],
            focus: ["Integration map and data contracts", "Connectors and middleware", "Error handling, retries and alerts", "Reconciliation and reporting"],
            faqs: [
              { q: "Can you integrate with local banks and payment providers?", a: "Yes, where they offer APIs, and through secure file exchange where they do not." },
              { q: "What if an external system goes down?", a: "Queues and retries keep data safe until the system recovers, and alerts tell your team." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cloud-solutions",
    landing: "cloud-solutions",
    variant: "delivery",
    subcategories: [
      {
        id: "cloud-infrastructure",
        heroTitle: "Cloud Infrastructure",
        description: "Secure, scalable cloud foundations on AWS, Azure and Google Cloud, designed for uptime and predictable cost.",
        snapshot: [
          { value: "99.9%", label: "Uptime target" },
          { value: "Multi", label: "Cloud ready" },
          { value: "IaC", label: "Everything" },
          { value: "SRE", label: "Practices" },
        ],
        pillars: [
          {
            title: "Infrastructure",
            points: [
              { title: "Cloud Migration", text: "Planned migration waves with tested cutover and rollback." },
              { title: "Serverless", text: "Event-driven services that scale with demand." },
              { title: "Hybrid Cloud", text: "On-premise systems connected securely to public cloud." },
            ],
          },
          {
            title: "Stability",
            points: [
              { title: "Disaster Recovery", text: "Backups and failover tested on a schedule." },
              { title: "Cost Governance", text: "Budgets, tagging and right-sizing that keep spend in check." },
              { title: "Security Hardening", text: "Network isolation, IAM and encryption by default." },
            ],
          },
        ],
        why: [
          { icon: "Cloud", title: "Cloud Native", text: "Managed services where they save effort, so engineers focus on product." },
          { icon: "ShieldCheck", title: "Security First", text: "Least-privilege access and encryption enforced from the start." },
        ],
        faq: { q: "Which cloud provider should we choose?", a: "We compare AWS, Azure and Google Cloud against your workloads, skills, data residency needs and budget." },
        badge: "Delivery & execution",
        items: [
          {
            slug: "aws-cloud-services",
            heroTitle: "Run on AWS infrastructure that is secure, observable and cost-efficient",
            description: "We design and automate AWS environments with well-architected practices, from networking and IAM to compute, data and monitoring.",
            kpis: ["Infrastructure uptime", "Monthly cost versus budget", "Deployment lead time", "Security findings open"],
            focus: ["Landing zone and account structure", "Terraform modules for every environment", "Monitoring, logging and alerting", "Cost and security review"],
            faqs: [
              { q: "Can you review our existing AWS setup?", a: "Yes. We run a well-architected review and give you a prioritised list of fixes." },
              { q: "Do you manage AWS for us after setup?", a: "We can, or we train your team to run it." },
            ],
          },
          {
            slug: "azure-solutions",
            heroTitle: "Build on Microsoft Azure with governance and automation built in",
            description: "Azure environments for .NET workloads, data platforms and Microsoft 365 integrations, set up with policies and automation.",
            kpis: ["Service availability", "Policy compliance score", "Provisioning time for new environments", "Cost per workload"],
            focus: ["Subscription and policy design", "Infrastructure as code with Bicep or Terraform", "Identity and access with Entra ID", "Monitoring and cost management"],
            faqs: [
              { q: "Can you migrate .NET applications to Azure?", a: "Yes, from lift-and-shift to modernised App Service or container deployments." },
              { q: "Do you integrate with Microsoft 365?", a: "Yes, including identity, SharePoint and Teams integrations." },
            ],
          },
          {
            slug: "cloud-migration",
            heroTitle: "Move workloads to the cloud in planned waves without disrupting operations",
            description: "Assessment, planning and execution of cloud migrations with rehearsed cutovers and clear rollback paths.",
            kpis: ["Downtime during cutover", "Workloads migrated on schedule", "Post-migration incident count", "Run cost versus on-premise"],
            focus: ["Discovery and dependency mapping", "Migration wave plan", "Rehearsed cutover runbooks", "Post-migration optimisation"],
            faqs: [
              { q: "Will there be downtime?", a: "We plan for minimal or zero downtime with replication and rehearsed cutovers." },
              { q: "What about data residency?", a: "We choose regions and architectures that meet your regulatory requirements." },
            ],
          },
          {
            slug: "serverless-architecture",
            heroTitle: "Cut idle costs with serverless backends that scale automatically",
            description: "Event-driven architectures on Lambda, Cloud Functions and managed queues that scale with demand and cost nothing at rest.",
            kpis: ["Cost per million requests", "Cold start latency", "Function error rate", "Time to ship a new endpoint"],
            focus: ["Event-driven architecture design", "Functions, queues and workflows", "Observability and tracing", "Load and cost testing"],
            faqs: [
              { q: "Is serverless right for every workload?", a: "No. It suits spiky, event-driven work; steady heavy workloads may be cheaper on containers." },
              { q: "Won't we be locked in?", a: "We keep business logic portable and isolate provider-specific pieces." },
            ],
          },
        ],
      },
      {
        id: "devops-services",
        heroTitle: "DevOps & Automation",
        description: "Pipelines, infrastructure as code and observability that make releases routine and recovery fast.",
        snapshot: [
          { value: "0", label: "Manual deploys" },
          { value: "Minutes", label: "Lead time" },
          { value: "Fast", label: "Recovery" },
          { value: "IaC", label: "Native" },
        ],
        pillars: [
          {
            title: "Automation",
            points: [
              { title: "CI/CD Pipelines", text: "Automated build, test and deployment for every change." },
              { title: "Infrastructure as Code", text: "Terraform and Ansible for reproducible environments." },
              { title: "Containers", text: "Docker and Kubernetes from local development to production." },
            ],
          },
          {
            title: "Resilience",
            points: [
              { title: "Observability", text: "Logs, metrics and traces in one place." },
              { title: "DevSecOps", text: "Security scanning built into the pipeline." },
              { title: "Autoscaling", text: "Capacity that follows traffic without overspending." },
            ],
          },
        ],
        why: [
          { icon: "GitBranch", title: "No Environment Drift", text: "Everything defined in code, so staging and production stay identical." },
          { icon: "Activity", title: "Visible System Health", text: "Dashboards and alerts wired to your on-call process." },
        ],
        faq: { q: "Which DevOps tools do you use?", a: "Terraform, Docker, Kubernetes and GitHub Actions or GitLab CI most often, adapted to what you already use." },
        badge: "Delivery & execution",
        items: [
          {
            slug: "ci-cd-pipelines",
            heroTitle: "Ship every change safely with automated build, test and deploy pipelines",
            description: "Pipelines that test, scan and deploy every merge, with preview environments and one-click rollbacks.",
            kpis: ["Deployment frequency", "Lead time for changes", "Change failure rate", "Mean time to restore"],
            focus: ["Pipeline design and branching strategy", "Automated tests and security scans", "Preview and staging environments", "Rollback and release automation"],
            faqs: [
              { q: "Which CI platform do you use?", a: "GitHub Actions and GitLab CI most often, and Jenkins where it is already in place." },
              { q: "Can pipelines deploy mobile apps too?", a: "Yes, including automated store submissions." },
            ],
          },
          {
            slug: "infrastructure-as-code",
            heroTitle: "Define every environment in code so changes are reviewed and repeatable",
            description: "Terraform and Ansible codebases that make infrastructure versioned, testable and easy to recreate.",
            kpis: ["Infrastructure under code (%)", "Time to provision an environment", "Drift incidents", "Change review coverage"],
            focus: ["Terraform module library", "Environment and state management", "Policy checks in CI", "Documentation and team training"],
            faqs: [
              { q: "Can you import existing infrastructure?", a: "Yes. We bring existing resources under code without recreating them." },
              { q: "Terraform or Pulumi?", a: "Terraform by default for its ecosystem; Pulumi if your team prefers general-purpose languages." },
            ],
          },
          {
            slug: "microservices",
            heroTitle: "Design microservice architectures that scale teams as well as traffic",
            description: "Service boundaries, messaging and platform tooling that let teams deploy independently without chaos.",
            kpis: ["Independent deploys per week", "Inter-service error rate", "P95 latency across services", "Time to onboard a new service"],
            focus: ["Service boundary design", "Messaging and API gateway setup", "Kubernetes platform and service templates", "Distributed tracing and monitoring"],
            faqs: [
              { q: "Do we really need microservices?", a: "Not always. We often recommend a modular monolith first and split only where it pays off." },
              { q: "How do services communicate?", a: "Synchronous APIs where needed and events or queues for loose coupling." },
            ],
          },
          {
            slug: "cloud-security",
            heroTitle: "Harden your cloud with least-privilege access and continuous monitoring",
            description: "IAM, network, encryption and monitoring controls reviewed and automated so security keeps pace with delivery.",
            kpis: ["Critical findings open", "Mean time to remediate", "Policy compliance score", "Secrets exposed in code"],
            focus: ["Cloud security assessment", "IAM and network hardening", "Secrets management and encryption", "Continuous monitoring and alerting"],
            faqs: [
              { q: "Can you help us prepare for an audit?", a: "Yes. We map controls to the framework you need and close the gaps." },
              { q: "Do you do penetration testing?", a: "We run configuration and vulnerability reviews and work with specialist testers for full penetration tests." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "modernization-support",
    landing: "modernization-support",
    variant: "transition",
    subcategories: [
      {
        id: "legacy-modernization",
        heroTitle: "Legacy Modernization",
        description: "Refactor, replatform and restructure ageing systems in safe steps while the business keeps running.",
        snapshot: [
          { value: "Zero", label: "Downtime goal" },
          { value: "Phased", label: "Cutovers" },
          { value: "Tested", label: "Fallbacks" },
          { value: "Audited", label: "Architecture" },
        ],
        pillars: [
          {
            title: "Transformation",
            points: [
              { title: "Refactoring", text: "Improve structure and speed without changing behaviour." },
              { title: "Service Extraction", text: "Move domains out of the monolith one by one." },
              { title: "Replatforming", text: "Shift workloads to managed cloud platforms." },
            ],
          },
          {
            title: "Safety",
            points: [
              { title: "Parallel Runs", text: "Old and new systems compared before cutover." },
              { title: "Regression Testing", text: "Characterisation tests that lock in current behaviour." },
              { title: "Rollback Plans", text: "Every step reversible if something goes wrong." },
            ],
          },
        ],
        why: [
          { icon: "Layers", title: "Incremental by Design", text: "Small, reversible steps instead of a risky big-bang rewrite." },
          { icon: "ShieldCheck", title: "Business Continuity", text: "Revenue-critical flows keep running throughout the transition." },
        ],
        faq: { q: "Should we rewrite or refactor?", a: "Usually refactor. We recommend a rewrite only when the existing system cannot be changed safely." },
        badge: "Engineering-led system transition",
        context: [
          "Teams commissioning {title} typically need the change done without pausing feature work, with clear scope boundaries and sign-offs that protect release dates.",
          "These projects usually start when legacy code slows every release and hiring cannot keep up. Each month of waiting adds to the technical debt and the cost of change.",
        ],
        items: [
          {
            slug: "system-refactoring",
            heroTitle: "Refactor *legacy code* into a codebase your team can *change with confidence*",
            description: "We add tests around existing behaviour, then restructure and speed up the code in small, safe steps.",
            kpis: ["Test coverage on critical paths", "Build and deploy time", "Defects per release", "Lead time for changes"],
            focus: ["Codebase health assessment", "Characterisation and regression tests", "Incremental refactoring plan", "Performance profiling and fixes"],
            faqs: [
              { q: "Will feature work have to stop?", a: "No. Refactoring runs alongside feature delivery in agreed slices." },
              { q: "Which languages do you handle?", a: "PHP, Java, .NET, Python and JavaScript are the most common." },
            ],
          },
          {
            slug: "monolith-to-microservices",
            heroTitle: "Move from a *monolith* to *services* without stopping the business",
            description: "We extract domains step by step using the strangler pattern, with traffic routing and parallel runs before each cutover.",
            kpis: ["Services extracted on schedule", "Downtime during cutovers", "Independent deploys per week", "Error rate after extraction"],
            focus: ["Domain and dependency analysis", "Strangler routing layer", "Service extraction in phases", "Data migration and synchronisation"],
            faqs: [
              { q: "How long does it take?", a: "It depends on size; we deliver value with the first extracted service in weeks, not at the end." },
              { q: "What about the shared database?", a: "We split data gradually with synchronisation so both sides stay consistent." },
            ],
          },
          {
            slug: "cloud-replatforming",
            heroTitle: "Replatform *legacy workloads* onto *modern cloud* runtimes",
            description: "Containerise and move applications to managed platforms and current runtimes, reducing operational overhead.",
            kpis: ["Workloads replatformed", "Infrastructure cost change", "Patch currency of runtimes", "Incidents after move"],
            focus: ["Workload assessment and target platform", "Containerisation and runtime upgrades", "Data and configuration migration", "Cutover and post-move tuning"],
            faqs: [
              { q: "How is this different from a rewrite?", a: "Replatforming keeps the application mostly intact while changing where and how it runs." },
              { q: "Can old frameworks run in containers?", a: "Usually yes, which buys time to modernise the code gradually." },
            ],
          },
          {
            slug: "architecture-audits",
            heroTitle: "Get an *independent architecture review* before your next big decision",
            description: "A structured review of architecture, code, infrastructure and delivery practices, with a prioritised improvement plan.",
            kpis: ["Critical risks identified", "Recommendations adopted", "Time to report", "Follow-up items closed"],
            focus: ["Stakeholder interviews and goals", "Code and architecture review", "Infrastructure and security review", "Prioritised roadmap and presentation"],
            faqs: [
              { q: "How long does an audit take?", a: "Two to four weeks for most systems." },
              { q: "Do you implement the recommendations?", a: "We can, or your team can use the roadmap independently." },
            ],
          },
        ],
      },
      {
        id: "support-maintenance",
        heroTitle: "Support & Maintenance",
        description: "Monitoring, reliability engineering, patching and recovery planning that keep production healthy around the clock.",
        snapshot: [
          { value: "24/7", label: "Monitoring" },
          { value: "SLA", label: "Backed" },
          { value: "SRE", label: "Practices" },
          { value: "DR", label: "Tested" },
        ],
        pillars: [
          {
            title: "Reliability",
            points: [
              { title: "Proactive Monitoring", text: "Alerts on symptoms users would notice." },
              { title: "Incident Response", text: "Clear escalation paths and post-incident reviews." },
              { title: "Capacity Planning", text: "Headroom planned before traffic peaks." },
            ],
          },
          {
            title: "Protection",
            points: [
              { title: "Security Patching", text: "Regular, tested updates for systems and dependencies." },
              { title: "Backups", text: "Automated, encrypted and restore-tested." },
              { title: "Disaster Recovery", text: "Failover plans rehearsed on a schedule." },
            ],
          },
        ],
        why: [
          { icon: "Activity", title: "Always Watching", text: "Monitoring and on-call coverage matched to your SLAs." },
          { icon: "LifeBuoy", title: "Calm Incidents", text: "Runbooks and clear roles so outages are short and well-communicated." },
        ],
        faq: { q: "Do you support systems you did not build?", a: "Yes. We start with an onboarding review, then take over monitoring and maintenance." },
        badge: "Reliable operations",
        context: [
          "Teams investing in {title} usually want fewer incidents, faster recovery and confidence that production is watched when they are not.",
          "Demand rises as systems grow and release cycles shorten. Without dedicated operational care, small issues become outages.",
        ],
        items: [
          {
            slug: "24-7-sla-monitoring",
            heroTitle: "Keep production *watched around the clock* with *SLA-backed monitoring*",
            description: "Dashboards, alerting and on-call coverage that catch problems early and escalate them to the right people.",
            kpis: ["Mean time to detect", "Mean time to acknowledge", "SLA attainment", "False alert rate"],
            focus: ["Monitoring and alerting setup", "On-call rota and escalation paths", "Status page and communication", "Monthly SLA reporting"],
            faqs: [
              { q: "Who responds at night?", a: "Our on-call engineers, following agreed runbooks and escalating to your team when needed." },
              { q: "Which tools do you use?", a: "Prometheus, Grafana and Datadog most often, or your existing stack." },
            ],
          },
          {
            slug: "site-reliability-engineering",
            heroTitle: "Apply *site reliability engineering* to make *uptime predictable*",
            description: "Service level objectives, error budgets and automation that balance reliability with delivery speed.",
            kpis: ["SLO attainment", "Error budget burn rate", "Toil hours per week", "Incident recurrence"],
            focus: ["SLOs and error budgets", "Toil reduction and automation", "Capacity and performance planning", "Post-incident review process"],
            faqs: [
              { q: "What is an error budget?", a: "The amount of unreliability you accept; it guides when to ship features and when to fix reliability." },
              { q: "Can SRE work with a small team?", a: "Yes. We scale practices to your size and focus on the highest-impact services." },
            ],
          },
          {
            slug: "disaster-recovery",
            heroTitle: "Plan *disaster recovery* so data and service *survive the worst day*",
            description: "Backup, replication and failover strategies with recovery objectives agreed and tested regularly.",
            kpis: ["Recovery time objective met", "Recovery point objective met", "Backup restore success rate", "DR drills completed"],
            focus: ["Risk and impact assessment", "Backup and replication design", "Failover runbooks", "Scheduled recovery drills"],
            faqs: [
              { q: "How often should we test recovery?", a: "At least twice a year, and after major infrastructure changes." },
              { q: "Can you handle power and connectivity outages?", a: "Yes. We plan for regional and provider failures, not just hardware faults." },
            ],
          },
          {
            slug: "security-patching",
            heroTitle: "Stay ahead of vulnerabilities with *regular, tested security patching*",
            description: "Scheduled updates for operating systems, runtimes and dependencies, tested in staging and rolled out with minimal disruption.",
            kpis: ["Mean time to patch critical CVEs", "Systems on supported versions", "Patch-related incidents", "Dependency vulnerabilities open"],
            focus: ["Asset and dependency inventory", "Vulnerability scanning", "Staged patch rollout", "Monthly security reporting"],
            faqs: [
              { q: "Will patching cause downtime?", a: "We use rolling updates and maintenance windows to avoid it wherever possible." },
              { q: "How fast do you patch critical issues?", a: "Critical vulnerabilities are prioritised within agreed SLA windows." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "emerging-technologies",
    label: "Emerging Technologies",
    landing: "emerging-technologies",
    variant: "transition",
    subcategories: [
      {
        id: "immersive-tech",
        label: "Immersive Tech",
        heroTitle: "Immersive Tech",
        description: "AR, VR and real-time 3D experiences for training, sales and operations, built to run smoothly on real hardware.",
        snapshot: [
          { value: "3D", label: "Real-time" },
          { value: "Unity", label: "Engine" },
          { value: "AR/VR", label: "Ready" },
          { value: "60fps", label: "Target" },
        ],
        pillars: [
          {
            title: "Spatial Stack",
            points: [
              { title: "AR Development", text: "Augmented reality for training, retail and field work." },
              { title: "Unity Simulations", text: "Physics-based digital twins and training modules." },
              { title: "Spatial UI", text: "Interfaces designed for headsets and 3D spaces." },
            ],
          },
          {
            title: "Experience Delivery",
            points: [
              { title: "Interactive Prototypes", text: "Validate the experience before full production." },
              { title: "Cross-Device Performance", text: "Consistent frame rates on headset, desktop and mobile." },
              { title: "Content Pipelines", text: "Workflows for updating 3D content easily." },
            ],
          },
        ],
        why: [
          { icon: "Eye", title: "Visual Quality", text: "Performance budgets per device so experiences stay smooth and convincing." },
          { icon: "Monitor", title: "Hardware Tested", text: "Profiled on the headsets and phones your users actually own." },
        ],
        faq: { q: "Can these experiences run in a browser?", a: "Yes. WebXR and three.js let many experiences run directly in the browser." },
        badge: "Real-time 3D delivery",
        context: [
          "Organisations exploring {title} usually want a working experience in users' hands quickly, to prove value before committing to full production.",
          "Interest grows as headsets and capable phones become common. Teams that test early learn what works and avoid expensive dead ends.",
        ],
        items: [
          {
            slug: "ar-vr-development",
            label: "AR & VR Application Build",
            heroTitle: "Build *AR and VR experiences* that *train, sell and inform*",
            description: "Augmented and virtual reality applications for headsets and phones, from concept and prototype to store release.",
            kpis: ["Frame rate on target devices", "Session completion rate", "Training time reduction", "App load time"],
            focus: ["Experience concept and storyboard", "Interactive prototype", "Production build for target devices", "Release and analytics"],
            faqs: [
              { q: "Which headsets do you support?", a: "Meta Quest and mobile AR on iOS and Android most often, chosen per project." },
              { q: "Do users need a headset?", a: "Not always. Many AR experiences run on ordinary smartphones." },
            ],
          },
          {
            slug: "interactive-simulations",
            label: "Interactive Simulation Design",
            heroTitle: "Design *interactive simulations* that make *complex systems* easy to explore",
            description: "Physics-based simulations and digital twins for training, planning and demonstration.",
            kpis: ["Simulation accuracy versus real data", "Learner assessment scores", "Scenarios delivered", "Performance on target hardware"],
            focus: ["Scenario and learning design", "3D modelling and physics", "Data integration for digital twins", "Assessment and reporting"],
            faqs: [
              { q: "Can simulations use live data?", a: "Yes. Digital twins can connect to sensors and business systems." },
              { q: "Are simulations accessible on low-end PCs?", a: "We set performance budgets so they run on the hardware you have." },
            ],
          },
          {
            slug: "unity-3d-engines",
            label: "Unity 3D Engine Solutions",
            heroTitle: "Ship *real-time 3D* products built with *Unity*",
            description: "Unity development for interactive apps, visualisations and simulations across mobile, desktop, web and XR.",
            kpis: ["Frame rate stability", "Build size per platform", "Crash-free sessions", "Content update turnaround"],
            focus: ["Architecture and asset pipeline", "Gameplay and interaction systems", "Multi-platform builds", "Performance profiling and optimisation"],
            faqs: [
              { q: "Can Unity builds run on the web?", a: "Yes, via WebGL, with assets optimised for download size." },
              { q: "Can you take over an existing Unity project?", a: "Yes. We review the project, stabilise it and continue development." },
            ],
          },
        ],
      },
      {
        id: "web3-blockchain",
        label: "Web3 & Blockchain",
        heroTitle: "Web3 & Blockchain",
        description: "Smart contracts, decentralised apps and ledgers built with security and real business value first.",
        snapshot: [
          { value: "EVM", label: "Compatible" },
          { value: "Audited", label: "Contracts" },
          { value: "Tested", label: "On testnet" },
          { value: "Hybrid", label: "On/off-chain" },
        ],
        pillars: [
          {
            title: "On-chain",
            points: [
              { title: "Smart Contracts", text: "Solidity contracts with thorough tests and reviews." },
              { title: "DeFi Protocols", text: "Lending, payments and settlement logic." },
              { title: "Token Design", text: "Token standards and economics that make sense." },
            ],
          },
          {
            title: "Off-chain",
            points: [
              { title: "DApp Front Ends", text: "Familiar web experiences connected to wallets." },
              { title: "Indexing & APIs", text: "Fast reads of on-chain data for apps and reports." },
              { title: "Key Management", text: "Secure handling of keys and signing." },
            ],
          },
        ],
        why: [
          { icon: "ShieldCheck", title: "Security First", text: "Tests, reviews and external audits before anything reaches mainnet." },
          { icon: "Scale", title: "Honest Advice", text: "We will tell you when a regular database serves you better than a blockchain." },
        ],
        faq: { q: "Is blockchain legal to use in Ethiopia?", a: "Rules are evolving. We help you understand current guidance and design solutions that respect local regulation." },
        badge: "Security-first Web3 delivery",
        context: [
          "Teams pursuing {title} usually need contracts and apps that are secure from launch, because deployed code is hard to change.",
          "A single contract bug can be costly and public. Experienced engineers and a careful testing process reduce that risk before launch.",
        ],
        items: [
          {
            slug: "dapp-development",
            label: "Decentralized App Delivery",
            heroTitle: "Deliver *decentralised apps* with a *familiar user experience*",
            description: "DApps that connect smart contracts to clean web and mobile interfaces, with wallet support and fast data indexing.",
            kpis: ["Transaction success rate", "Wallet connection success", "Gas cost per key action", "Page load time"],
            focus: ["Architecture: on-chain versus off-chain", "Smart contract integration", "Wallet and signing flows", "Indexing and analytics"],
            faqs: [
              { q: "Do users need crypto experience?", a: "We design flows that guide newcomers and can hide complexity where appropriate." },
              { q: "Which wallets do you support?", a: "MetaMask, WalletConnect-compatible wallets and embedded wallet options." },
            ],
          },
          {
            slug: "defi-solutions",
            label: "DeFi Protocol Engineering",
            heroTitle: "Engineer *DeFi protocols* with *transparent, audited* logic",
            description: "Lending, payment and settlement protocols designed with risk controls, oracles and thorough testing.",
            kpis: ["Audit findings resolved", "Test coverage of contracts", "Protocol uptime", "Oracle deviation incidents"],
            focus: ["Protocol and risk design", "Contract development and testing", "Oracle and price feed integration", "Audit coordination and launch"],
            faqs: [
              { q: "Do you arrange external audits?", a: "Yes. We prepare the code and coordinate with independent auditors." },
              { q: "Can DeFi connect to mobile money?", a: "Through regulated on- and off-ramp partners where permitted." },
            ],
          },
          {
            slug: "smart-contracts",
            label: "Smart Contract Development",
            heroTitle: "Write *smart contracts* that are *secure before they are immutable*",
            description: "Solidity development with test suites, static analysis and review processes designed for code that cannot be patched easily.",
            kpis: ["Test coverage", "Static analysis findings", "Gas efficiency", "Audit issues resolved"],
            focus: ["Specification and threat model", "Contract implementation", "Testing, fuzzing and analysis", "Deployment and verification"],
            faqs: [
              { q: "Can contracts be upgraded?", a: "Only if designed for it. We discuss upgrade patterns and their trade-offs upfront." },
              { q: "Which tools do you use?", a: "Foundry or Hardhat, OpenZeppelin libraries and static analysers such as Slither." },
            ],
          },
        ],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Variant copy shared by every item of a layout                               */
/* -------------------------------------------------------------------------- */

export const phases = [
  "Analyse constraints and agree scope",
  "Deliver in short, phased iterations",
  "Validate scale, security and quality",
  "Operate, measure and improve",
];

export const itemShared = {
  prerequisites: ["Documented goals and success criteria", "Access to the systems involved", "A named milestone owner"],
  blueprintIntro: "How our engineers fit in with your team.",
  delivery: {
    deliverablesIntro: "Concrete, reviewable artefacts handed over as the work progresses.",
    outcomes: (noun: string) => [
      `${noun} delivered against agreed accuracy and performance thresholds`,
      "Clear visibility for stakeholders on technical progress and business impact",
      "Risks identified and handled at each milestone before production",
    ],
    coreTeam: ["Solution architect", "Implementation engineers", "Quality and release lead"],
    models: ["Fixed milestone plan", "Continuous sprint delivery", "Embedded in your release train"],
  },
  hiring: {
    trust: ["Technically vetted engineers", "Quality built into every sprint"],
    why: [
      { title: "Engineering Rigour", text: "Work is scoped against business goals, so the team knows what success looks like before it starts." },
      { title: "Clear Ownership", text: "Every milestone has an owner and acceptance criteria, so nothing falls between iterations." },
      { title: "Production First", text: "Quality gates at each milestone validate behaviour on realistic data before merge." },
      { title: "Maintainable Systems", text: "Architecture and pipelines are documented as we go, so future engineers start with context." },
    ],
    coreTeam: ["Matched domain engineers", "Technical lead oversight", "Delivery coordinator"],
    models: ["Dedicated contributors", "Managed team extension", "Hybrid co-delivery"],
  },
  transition: {
    deliverables: ["Implementation blueprint and dependency map", "Milestone plan with acceptance criteria", "Validation checkpoints at each phase", "Deployment runbook and stabilisation plan"],
    governance: ["Weekly status and priority alignment", "Architecture and scope decisions logged with owners", "Risk review at every milestone"],
    risks: [
      { risk: "Unclear scope boundaries", control: "Run discovery and confirm sign-offs" },
      { risk: "Hidden integration gaps", control: "Validate in isolated environments first" },
      { risk: "Unstable releases", control: "Quality gates and tested rollbacks" },
    ],
    outcomes: [
      "Changes deployed against pre-agreed acceptance criteria",
      "Transparent progress for every stakeholder",
      "Lower delivery risk and operational overhead",
    ],
    coreTeam: ["Transition lead", "Platform engineers", "Change and release manager"],
    models: ["Phased domain transition", "Parallel-run operations", "Gradual capability hand-over"],
    advantages: [
      { title: "Aligned to your roadmap", text: "Every engagement starts with documented goals tied to your product plans, not a ticket list." },
      { title: "Clear ownership", text: "Each milestone has an accountable owner, so progress is always visible." },
      { title: "Speed with safety", text: "Quality gates and validation keep pace from turning into risk." },
      { title: "Maintainable by design", text: "Documented architecture and clean hand-over so your engineers can own the result." },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* Resolved data + lookups                                                     */
/* -------------------------------------------------------------------------- */

export type ServiceItem = ServiceItemCopy & { label: string; href: string };
export type ServiceSubcategory = Omit<ServiceSubcategoryCopy, "items" | "label"> & { label: string; href: string; items: ServiceItem[] };
export type ServiceGroup = { id: string; label: string; landing: string; variant: ItemVariant; subcategories: ServiceSubcategory[] };

function resolveGroup(g: GroupCopy): ServiceGroup {
  const menu = serviceMenu.find((m) => m.id === g.id);
  const label = g.label ?? menu?.label ?? g.id;
  return {
    id: g.id,
    label,
    landing: g.landing,
    variant: g.variant,
    subcategories: g.subcategories.map((s) => {
      const subHref = `/services/${g.id}/${s.id}`;
      const menuSub = menu?.subcategories.find((ms) => ms.id === s.id);
      return {
        ...s,
        label: s.label ?? menuSub?.label ?? s.id,
        href: subHref,
        items: s.items.map((it) => {
          const href = `${subHref}/${it.slug}`;
          const menuItem = menuSub?.entries.find((e) => e.href === href);
          return { ...it, label: it.label ?? menuItem?.label ?? it.slug, href };
        }),
      };
    }),
  };
}

export const serviceGroups: ServiceGroup[] = groupCopy.map(resolveGroup);

export function getLanding(slug: string) {
  return landings.find((l) => l.slug === slug);
}

export function getSubcategory(groupId: string, subId: string) {
  const group = serviceGroups.find((g) => g.id === groupId);
  const sub = group?.subcategories.find((s) => s.id === subId);
  return group && sub ? { group, sub } : undefined;
}

export function getItem(groupId: string, subId: string, slug: string) {
  const found = getSubcategory(groupId, subId);
  const item = found?.sub.items.find((i) => i.slug === slug);
  return found && item ? { ...found, item } : undefined;
}
