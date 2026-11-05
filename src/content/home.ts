/**
 * Home page copy for Arki Tech Solutions.
 * Items marked TODO(confirm) are placeholders for real company facts
 * (numbers, client quotes, projects). Replace them before launch.
 */

export const hero = {
  /** Announcement pill above the headline; change the text and link whenever there's news. */
  badge: { tag: "New", label: "AI agents & automation for your product", href: "/industries/ai-data-solutions/custom-ai-agents" },
  /**
   * Headline (the original wording): "<titleA> <titleJoin> <titleB>" with A and B in green,
   * then titleLine2 a little smaller. Tried and set aside: "See the problem. Build the fix."
   * with "With a senior engineering team in Addis Ababa." under it.
   */
  titleA: "See Problems Clearly",
  titleJoin: "and",
  titleB: "Ship What Satisfies",
  titleLine2: "with Skilled Professionals Who Deliver",
  description:
    "Most software fails because the problem was never understood. We start there: we look closely, agree on what matters, then design, build and ship it with you.",
  cta: { label: "Start a project", href: "/schedule-meeting" },
  secondaryCta: { label: "Our services", href: "/#services" },
  marqueeLabel: "Technologies We Build With",
};

/** Home services section: four simple cards in one row. */
export const services = {
  eyebrow: "Services",
  title: "What we build",
  description:
    "From a first AI feature to a full platform. Start with the one closest to your problem; most projects end up using a few.",
  cards: [
    {
      title: "AI & Data",
      icon: "BrainCircuit",
      text: "AI assistants, agents and data pipelines built into the products you already run.",
      href: "/services/ai-development-services",
    },
    {
      title: "Custom Software",
      icon: "Code2",
      text: "Web and mobile apps, and the backend systems behind them, built around how you work.",
      href: "/services/software-development",
    },
    {
      title: "Cloud & DevOps",
      icon: "CloudCog",
      text: "Cloud setup, automated releases and monitoring that keep your product running.",
      href: "/services/cloud-solutions",
    },
    {
      title: "Dedicated Teams",
      icon: "Users",
      text: "Experienced engineers who join your team, work in your tools and stay for the long run.",
      href: "/services/hire-dedicated-developers",
    },
  ],
  /* Not shown on the home page for now (pages still exist): Digital Transformation
     (/services/digital-transformation). The earlier bento layout is in git history. */
  /* Previous card copy (3x2 grid), kept for reference: */
  items: [
    { title: "Artificial Intelligence Solutions", icon: "BrainCircuit", before: "Upgrade with next-gen", link: "AI solutions", href: "/services/ai-development-services", after: ". Using machine learning, NLP and automation, we create data-powered AI applications shaped around your business." },
    { title: "Custom Software Engineering", icon: "Code2", before: "Build", link: "custom software", href: "/services/software-development", after: " around how your business actually works. Our engineers turn bold ideas into secure, scalable products." },
    { title: "Digital Transformation", icon: "RefreshCw", before: "Move paper and spreadsheets into", link: "digital systems", href: "/services/digital-transformation", after: " that your teams enjoy using. Faster processes, better data, measurable results." },
    { title: "Team Engagement & Staffing", icon: "Users", before: "Scale your team with pre-vetted,", link: "dedicated engineers", href: "/services/hire-dedicated-developers", after: ". From planning to delivery, our senior engineers bring speed, ownership and judgment to your roadmap." },
    { title: "AI & Data Products", icon: "Sparkles", before: "", link: "AI & Data Products", href: "/services/ai-development-services", after: ": ship AI features faster. RAG systems, AI agents and ML pipelines built by senior engineers that keep pace with your roadmap." },
    { title: "Cloud Solutions & DevOps", icon: "CloudCog", before: "Run on solid", link: "cloud and DevOps engineering", href: "/services/cloud-solutions", after: ". Migrate with expert-led automation and get CI/CD pipelines your team can trust." },
  ],
};

/** "Why Arki" section on the dark band: heading, the name's meaning, six points in two columns, a button. */
export const whyArki = {
  title: "What makes",
  highlight: "Arki different",
  description:
    "Arki means to see in Afaan Oromo and satisfying in Amharic. That is how we work: we see the problem clearly first, then deliver software that truly satisfies, built by experienced people who care about the result.",
  left: [
    { title: "See First, Build Second", text: "We understand your users, data and constraints before we write a line of code." },
    { title: "Experienced Engineers, Start to Finish", text: "The people who plan your project are the ones who build it and support it after launch." },
    { title: "Working Demos Every Week", text: "Judge progress by real, working software, not slide decks or status reports." },
  ],
  right: [
    { title: "Clear, Honest Communication", text: "One point of contact, regular updates and early warning when something changes." },
    { title: "Fair, Predictable Pricing", text: "Ethiopian cost levels with a fixed scope or a monthly team. No surprise invoices." },
    { title: "Built for Ethiopia and Beyond", text: "We know the local market and build to international engineering standards." },
  ],
  cta: { label: "How we work", href: "/process" },
};

export const stats = {
  title: "Arki at a",
  highlight: "glance",
  description: "A focused team in Addis Ababa, building software for clients at home and abroad.",
  // TODO(confirm): replace with real figures.
  items: [
    { value: 20, suffix: "+", label: "Products shipped for clients" },
    { value: 6, suffix: "+", label: "Years average engineering experience" },
    { value: 1, suffix: "", label: "Engineering hub (Addis Ababa)" },
    { value: 50, suffix: "+", label: "Engineers in our network" },
  ],
};

/**
 * Home "stack by layer" card: one row per layer, each with a few logos picked from the
 * technology catalogue as [category id, item slug]. The full list lives on /technologies.
 */
export const stackLayers = {
  eyebrow: "Our stack",
  title: "Tools we trust in production",
  description: "Proven, well-supported technology chosen for each project, never trends for their own sake.",
  allLink: { label: "See all technologies", href: "/technologies/ai-machine-learning" },
  layers: [
    {
      label: "AI & data",
      text: "Models, agents and data pipelines",
      icon: "BrainCircuit",
      picks: [["ai-machine-learning", "openai"], ["ai-machine-learning", "pytorch"], ["ai-machine-learning", "tensorflow"], ["ai-machine-learning", "langchain"], ["ai-machine-learning", "hugging-face"], ["ai-machine-learning", "pandas"]],
    },
    {
      label: "Web",
      text: "Fast, accessible web apps",
      icon: "Monitor",
      picks: [["frontend-engineering", "react"], ["frontend-engineering", "nextjs"], ["frontend-engineering", "typescript"], ["frontend-engineering", "vuejs"], ["frontend-engineering", "angular"], ["frontend-engineering", "tailwindcss"]],
    },
    {
      label: "Mobile",
      text: "iOS and Android apps",
      icon: "Smartphone",
      picks: [["mobile-development", "flutter"], ["mobile-development", "reactnative"], ["mobile-development", "swift"], ["mobile-development", "kotlin"], ["mobile-development", "firebase-mobile"]],
    },
    {
      label: "Backend & databases",
      text: "APIs, services and storage",
      icon: "Server",
      picks: [["backend-engineering", "nodejs"], ["backend-engineering", "python"], ["backend-engineering", "go"], ["backend-engineering", "nestjs"], ["backend-engineering", "django"], ["database-engineering", "postgresql"], ["database-engineering", "mongodb"], ["database-engineering", "redis"]],
    },
    {
      label: "Cloud & DevOps",
      text: "Hosting, delivery and monitoring",
      icon: "CloudCog",
      picks: [["cloud-services", "aws"], ["cloud-services", "google-cloud"], ["cloud-services", "azure"], ["devops-engineering", "docker"], ["devops-engineering", "kubernetes"], ["devops-engineering", "terraform"], ["devops-engineering", "github-actions"]],
    },
  ] as { label: string; text: string; icon: string; picks: [string, string][] }[],
};

/** Previous tech section copy (long sticky list of 9 category cards), kept for reference. */
export const techSection = {
  title: "for custom solutions",
  highlight: "Technologies we use",
  description:
    "Your toughest challenges deserve smarter solutions. With trusted tools and proven expertise, we build scalable, efficient and future-ready software that streamlines workflows. Dive into our technical capabilities.",
};

export const techExpertCta = {
  title: "Need the right engineer",
  highlight: "for your project?",
  description: "Tell us what you're building. We'll match you with someone who has done it before.",
  cta: { label: "Talk to an engineer", href: "/schedule-meeting" },
  /** Shown as three checked items under the button; separate them with "·". */
  note: "Free 30-minute consultation · No obligation · Transparent, fixed quotes",
};

/** Home client stories section (quotes come from content/testimonials.ts). */
export const clientStories = {
  eyebrow: "Client stories",
  title: "In our clients'",
  highlight: "own words",
  description: "What it's like to work with Arki, from the people we build for.",
  allLink: { label: "Read all client stories", href: "/all-testimonials" },
};

/** Previous testimonials heading copy (carousel), kept for reference. */
export const testimonialsIntro = {
  title: "Valued feedback from",
  highlight: "our clients",
  description:
    "Don't just take our word for it, hear from the teams we work with. As a dedicated engineering partner, we make sure every client receives high-performance software.",
};

export const industries = {
  title: "Engineering across the",
  highlight: "sectors we know best",
  description:
    "Sectors where our engineering depth makes a measurable difference: regulated platforms, payments, AI-driven products and commerce. If your sector isn't listed, we may still be a fit. Talk to us.",
  items: [
    {
      icons: ["GraduationCap", "HeartPulse"],
      label: "Healthcare & EdTech Platforms",
      title: "Build for regulated environments",
      parts: [
        { link: "Learning platforms", href: "/industries/edtech-solutions" },
        { text: ", AI-powered tutoring, " },
        { link: "telemedicine", href: "/industries/healthcare-solutions" },
        { text: " and secure health data systems. Engineering discipline for sectors where privacy and reliability matter." },
      ],
    },
    {
      icons: ["Landmark", "CreditCard"],
      label: "Fintech & Payments",
      title: "Build scalable payment systems",
      parts: [
        { link: "Digital banking", href: "/industries/fintech-solutions" },
        { text: ", mobile money integrations, subscription billing and reconciliation. Built for the realities of Ethiopian and international payment rails." },
      ],
    },
    {
      icons: ["ShoppingCart", "Store"],
      label: "Commerce Product Teams",
      title: "Engineering for modern commerce platforms",
      parts: [
        { link: "Marketplaces", href: "/industries/e-commerce-solutions" },
        { text: ", headless storefronts, delivery and logistics apps, and payment infrastructure for teams scaling beyond off-the-shelf tools." },
      ],
    },
    {
      icons: ["Database", "Sparkles"],
      label: "AI & Data Products",
      title: "Ship AI features without rebuilding your team",
      parts: [
        { link: "RAG systems", href: "/industries/ai-data-solutions" },
        { text: ", AI agents, ML pipelines and LLM-powered workflows, including Amharic and Afaan Oromo language features, built into products you already run." },
      ],
    },
  ],
};

export const howWeWork = {
  title: "How we work",
  highlight: "alongside your team",
  description:
    "Our engineers join your standups. They learn your business. They push back when a spec is wrong and flag problems before they become problems. That is what being conscious of your product means at Arki: engineers who own the work, not resources who execute a ticket.",
  items: [
    { title: "Senior Engineers on Client Work", text: "Experienced engineers lead every project. The people in your standups are the same people who have already shipped real products." },
    { title: "AI-Leveraged Engineering", text: "Engineers use Claude, Cursor and Copilot as part of their standard workflow. Modern stacks, modern tools, modern speed." },
    { title: "Clear Contracts & IP Ownership", text: "A clear contract with a legally registered Ethiopian company, one point of contact, and full code and IP ownership for you." },
    { title: "Plug In Within 2 Weeks", text: "Hiring a senior engineer can take months. Our teams join your stack, tools and sprints in about 14 days." },
    { title: "The Addis Ababa Advantage", text: "Engineers who stay, on GMT+3, with a large time-zone overlap with Europe, the Middle East and Africa." },
    { title: "Relationships, Not Transactions", text: "Engagements usually start with 2–4 engineers and grow with your roadmap. Same engineers across the engagement." },
  ],
};

/** Home "How we start": five steps on a horizontal timeline. Timings are typical, not promises. */
export const howWeStart = {
  eyebrow: "How we start",
  title: "From first call to",
  highlight: "first release",
  description: "A simple, transparent process. You always know what happens next, and who is doing it.",
  cta: { label: "Book a discovery call", href: "/schedule-meeting" },
  steps: [
    { title: "Discovery call", text: "A free call to understand your problem, users and goals.", when: "Day 1" },
    { title: "Proposal & plan", text: "A clear scope, timeline, team and price, in writing.", when: "Week 1" },
    { title: "Team & kickoff", text: "Meet your engineers, set up tools, access and rituals.", when: "Week 2" },
    { title: "Build in sprints", text: "Short sprints with a working demo every week.", when: "Weekly demos" },
    { title: "Launch & support", text: "Go live, monitor, and keep improving with you.", when: "Ongoing" },
  ],
};

/** Home closing contact card (dark card on the light contour background). */
export const homeContact = {
  title: "Let's talk about",
  highlight: "your project.",
  description: "Tell us what you're building. A senior engineer, not a salesperson, will get back to you with honest next steps.",
  cta: { label: "Book a call", href: "/schedule-meeting" },
};

/** Previous onboarding section copy (still used by OnboardingSteps on other pages). */
export const onboarding = {
  title1: "How",
  title2: "we plug into",
  title3: "your team",
  description:
    "A 5-step onboarding designed to have a senior engineering team working in your codebase in about 14 days. Same process for a 2-engineer team or a full squad.",
  cta: { label: "See our engagement models", href: "/engagement-model" },
  steps: [
    { icon: "FileText", title: "Understand & Plan", text: "We map out a roadmap that matches your vision, goals and technical requirements." },
    { icon: "User", title: "Shortlist Talent", text: "We shortlist the most suitable senior engineers from our team. You interview them. You pick." },
    { icon: "Users", title: "Confirm Engagement", text: "You choose the engagement model: dedicated team, embedded engineers, or fixed-scope project." },
    { icon: "Monitor", title: "Onboard & Set Up", text: "We join your Slack, sprints, codebase and standups. Your tools, not ours." },
    { icon: "ClipboardCheck", title: "Execute & Deliver", text: "Your solution takes shape, delivered with agility, transparency and regular updates." },
  ],
};

export const faq = {
  title: "questions",
  highlight: "Frequently asked",
  description: "Questions about how we work, what to expect, or how we structure engagements? Here are the answers most clients ask about.",
  items: [
    { q: "What development methodologies do you follow?", a: "We use your methodology. If you run Scrum, we run Scrum with you. If you run Kanban or Shape Up, we adapt. Our engineers join your existing sprints instead of asking you to adopt ours." },
    { q: "Can you deliver custom software based on my timeline?", a: "Yes. We work backwards from your deadline to define a realistic roadmap and resource plan. Our priority is shipping stable software that meets your launch window." },
    { q: "Who owns the code once the project is completed?", a: "You own 100% of the code and intellectual property. IP transfer is part of our standard contract, and we hand over all repositories, documentation and credentials." },
    { q: "How do you control the quality of the software you deliver?", a: "Automated testing, peer code reviews and CI/CD pipelines catch issues early. Quality is not a final stage; it is part of every commit." },
    { q: "How do you protect the privacy and confidentiality of our projects?", a: "We sign mutual NDAs, use secure access management and follow strict data-handling practices, in line with Ethiopia's Personal Data Protection Proclamation and your own policies." },
    { q: "Are you a legally registered company?", a: "Yes. Arki Tech Solutions is a legally registered company in Ethiopia, so you contract with an accountable local entity with clear invoicing and tax compliance." },
  ],
};

export const contact = {
  title: "Want to talk to an",
  highlight: "Arki engineer?",
  description:
    "Before any commercial conversation, we'll put you on a 30-min call with a senior engineer in your stack. No salespeople. Just a technical sanity check.",
  // TODO(confirm): replace with real figures.
  stats: [
    { value: "20+", label: "Products shipped for clients", icon: "Package" },
    { value: "6+", label: "Years average engineering experience", icon: "UserCheck" },
    { value: "GMT+3", label: "Addis Ababa engineering hub", icon: "MapPin" },
    { value: "14 days", label: "Average team onboarding time", icon: "Timer" },
  ],
  cardTitle: "Tell us what you're working on.",
  cardText: "We'll respond within one business day with the right next step.",
  cta: { label: "Book a call", href: "/schedule-meeting" },
  checks: ["Engineering Focus", "No Sales"],
};
