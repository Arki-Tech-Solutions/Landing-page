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
  secondaryCta: { label: "See our work", href: "/case-studies" },
  marqueeLabel: "Technologies We Build With",
};

/**
 * Home services section, laid out as a bento grid. `size` picks the tile shape:
 * "feature" = large 2x2 tile with a visual, "wide" = 2 columns, "small" = 1 column.
 */
export const services = {
  eyebrow: "Services",
  title: "What we build",
  description:
    "From a first AI feature to a full platform. Start with the one closest to your problem; most projects end up using a few.",
  tiles: [
    {
      title: "AI Solutions",
      icon: "BrainCircuit",
      size: "feature",
      text: "Assistants, agents and automation that take real work off your team's plate, built with machine learning, NLP and today's best models, and shaped around how your business runs.",
      tags: ["Chatbots & assistants", "AI agents", "NLP", "Predictive models"],
      href: "/services/ai-development-services",
    },
    {
      title: "Custom Software",
      icon: "Code2",
      size: "small",
      text: "Web, mobile and backend systems built around how your business actually works.",
      tags: [],
      href: "/services/software-development",
    },
    {
      title: "Cloud & DevOps",
      icon: "CloudCog",
      size: "small",
      text: "Cloud migration, automated releases and monitoring that keep you running.",
      tags: [],
      href: "/services/cloud-solutions",
    },
    {
      title: "AI & Data Products",
      icon: "Sparkles",
      size: "wide",
      text: "Turn the data you already have into product features: smart search, recommendations and ML pipelines that keep pace with your roadmap.",
      tags: ["RAG search", "ML pipelines", "Data engineering"],
      href: "/services/artificial-intelligence/data-science",
    },
    {
      title: "Digital Transformation",
      icon: "RefreshCw",
      size: "wide",
      text: "Replace paper, spreadsheets and disconnected tools with simple systems people enjoy using.",
      tags: ["Workflow digitisation", "Integrations", "Legacy modernisation"],
      href: "/services/digital-transformation",
    },
    {
      title: "Dedicated Teams",
      icon: "Users",
      size: "wide",
      text: "Senior engineers who join your stand-ups, work in your tools and stay with your product for the long run.",
      tags: ["Staff augmentation", "Dedicated team", "Project-based"],
      href: "/services/hire-dedicated-developers",
    },
  ],
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

export const whyArki = {
  title: "Why build with",
  highlight: "Arki Tech?",
  description:
    "Arki means to see and be conscious in Afaan Oromo, and satisfying in Amharic. We look at your product with care, then deliver work that satisfies: senior engineering capacity, fast, without trade-offs on quality.",
  left: [
    { title: "Senior-Led Teams", text: "Every engagement is led by senior engineers who have shipped production systems." },
    { title: "Structured Project Management", text: "Clear plans, weekly demos and on-time delivery you can measure." },
    { title: "Cost-Effective Delivery", text: "World-class engineering at Ethiopian cost levels, with predictable investment." },
  ],
  right: [
    { title: "Agile & Transparent", text: "Daily updates, clear communication and flexible engagement models." },
    { title: "Modern Technology Stack", text: "Expertise across modern frameworks, cloud platforms and AI/ML." },
    { title: "Local Insight, Global Standards", text: "We know the Ethiopian market and build to international engineering standards." },
  ],
  cta: { label: "Discover Our Approach", href: "/engagement-model" },
};

export const stats = {
  title: "Arki Tech by the",
  highlight: "numbers",
  description: "Delivering high-performance software with engineering rigor and a clear view of the problem.",
  // TODO(confirm): replace with real figures.
  items: [
    { value: 20, suffix: "+", label: "Products shipped for clients" },
    { value: 6, suffix: "+", label: "Years average engineering experience" },
    { value: 1, suffix: "", label: "Engineering hub (Addis Ababa)" },
    { value: 50, suffix: "+", label: "Engineers in our network" },
  ],
};

export const techSection = {
  title: "for custom solutions",
  highlight: "Technologies we use",
  description:
    "Your toughest challenges deserve smarter solutions. With trusted tools and proven expertise, we build scalable, efficient and future-ready software that streamlines workflows. Dive into our technical capabilities.",
};

export const techExpertCta = {
  title: "Looking for a",
  highlight: "specific tech expert?",
  description: "Scale your team with senior developers. Overcome your technical challenges and bring your project safely to market.",
  cta: { label: "Connect with a tech-expert", href: "/schedule-meeting" },
  note: "Free Consultation • No Hidden Costs • 100% Transparent",
};

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
