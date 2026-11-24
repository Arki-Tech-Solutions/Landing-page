/**
 * Copy for the redesigned company pages: /ourstories, /why-arki, /process and /engagement-model.
 * Facts come from the company profile (November 2026) and the portfolio (src/content/portfolio.ts).
 * The previous mereb-style copy is still in src/content/company.ts.
 */

const cta = { label: "Book a meeting", href: "/schedule-meeting" };

/* -------------------------------------------------------------------------- */
/*                                 /ourstories                                */
/* -------------------------------------------------------------------------- */

export const about = {
  crumb: "Our Story",
  hero: {
    eyebrow: "About Arki Tech",
    title: "We see the problem first,",
    highlight: "then build what satisfies.",
    text: "Arki Tech Solutions PLC is a software and AI engineering company in Addis Ababa. We build our own products, and we work as an engineering partner for organisations that need custom systems, in Ethiopia and abroad.",
    primary: cta,
    secondary: { label: "See our work", href: "/portfolio" },
    factsTitle: "At a glance",
    facts: [
      { label: "Company", value: "Arki Tech Solutions PLC, legally registered in Ethiopia" },
      { label: "Based in", value: "Kirkos, Addis Ababa: headquarters and engineering hub" },
      { label: "Team", value: "Four engineers from Addis Ababa University" },
      { label: "First project", value: "2023, BioFlex research" },
    ],
  },
  name: {
    eyebrow: "Why “Arki”",
    meanings: [
      { word: "Arki", language: "Afaan Oromo", meaning: "to see" },
      { word: "Arki", language: "Amharic", meaning: "satisfying" },
    ],
    line: "That is how we work: we see the problem clearly first, then deliver software that truly satisfies.",
  },
  story: {
    eyebrow: "Our story",
    title: "One campus, one standard,",
    highlight: "one team",
    paragraphs: [
      "All four of us studied at Addis Ababa University. Our earliest work goes back to 2023: BioFlex, machine learning that reads muscle signals to control a bionic hand, built with the Ethiopian Artificial Intelligence Institute. It was funded and published.",
      "From there we moved into systems that organisations depend on every day: a membership platform for the Muslim Professionals Association and a configurable ERP that now runs businesses from vehicle import to trade and services.",
      "Along the way we started building products of our own, for pharmacies, hospitals, restaurants and exporters. Running our own software in production keeps us honest about what it takes to make a system work after launch day.",
      "Today Arki Tech Solutions is a registered PLC in Addis Ababa. The people who plan your project are the ones who build it and support it after launch.",
    ],
  },
  journey: {
    eyebrow: "Our journey",
    title: "From a research lab",
    highlight: "to a regional platform",
    text: "Each step built on the one before it. Every milestone below is a real project you can read about in our portfolio.",
    steps: [
      { years: "2023 – 2024", title: "Research first", text: "BioFlex: machine learning that classifies muscle (EMG) signals to control a bionic hand, with the Ethiopian AI Institute.", slugs: ["bioflex"] },
      { years: "2025", title: "Systems for organisations", text: "A membership and events platform for the Muslim Professionals Association, with online payment through Chapa.", slugs: ["mpa-membership-platform"] },
      { years: "2025 – 2026", title: "Our own products", text: "A configurable enterprise ERP for clients, then products of our own: a hospital system, Fewes Pharmacy OS, Serviy and TradeEscrow.", slugs: ["custom-enterprise-erp", "hospital-management-system", "fewes-pharmacy-os", "serviy", "trade-escrow"] },
      { years: "2026 – now", title: "Data for a region", text: "Tumsa: a field data platform that brings verified raw data to the region, proposed to the Oromia Region President's Office.", slugs: ["tumsa"] },
    ],
  },
  beliefs: {
    eyebrow: "What we believe",
    title: "Three ideas behind",
    highlight: "every project",
    text: "We keep the list short on purpose. These ideas decide how we run projects and which work we take on.",
    items: [
      { icon: "Eye", title: "See the problem before writing code.", text: "Before we build, we ask who uses it, what it is for and what happens if it fails. Engineers who understand the problem make better decisions than engineers who only read the spec." },
      { icon: "Users", title: "The people who plan it, build it.", text: "No hand-offs from sales to architects to someone new. The team you meet on the first call is the team that writes the code and supports it after launch." },
      { icon: "Handshake", title: "Work that satisfies, over the long run.", text: "We measure success by whether you want to keep working with us. Most of our work grows from a first project into a long relationship." },
    ],
    mission: { label: "Our mission", text: "Help organisations see their problems clearly and ship software that satisfies the people who use it." },
    vision: { label: "Our vision", text: "To be the engineering partner teams in Ethiopia and abroad recommend to each other, because the work was careful and it held up." },
  },
};

/* -------------------------------------------------------------------------- */
/*                                  /why-arki                                 */
/* -------------------------------------------------------------------------- */

export const why = {
  crumb: "Why Arki",
  hero: {
    eyebrow: "Why Arki Tech",
    title: "A small team that sees your problem clearly,",
    highlight: "and stays until it's solved.",
    text: "We are not the biggest company you could hire. We are the one where the engineers who plan your system build it, test it and support it, with a working demo every week.",
    primary: cta,
    secondary: { label: "See our work", href: "/portfolio" },
    proofTitle: "What we've done so far",
  },
  reasons: {
    eyebrow: "Six reasons",
    title: "Why teams",
    highlight: "choose Arki",
    text: "Every reason comes with the work that backs it up.",
    proofLabel: "See it in",
    items: [
      { icon: "Users", title: "The people who plan it, build it", text: "No hand-offs and no juniors learning on your project. The engineers you meet on the first call write the code and stay for support.", proof: [] as string[] },
      { icon: "Building2", title: "Trusted with critical systems", text: "We build the systems organisations run every day: an ERP that handles finance, inventory and imports, and a field data platform for a regional government.", proof: ["custom-enterprise-erp", "tumsa"] },
      { icon: "Rocket", title: "We run products of our own", text: "Building and running our own products teaches us what software needs after launch: support, updates, monitoring and real users.", proof: ["fewes-pharmacy-os", "serviy"] },
      { icon: "MapPin", title: "Built for how Ethiopia works", text: "Amharic and Afaan Oromo, local payments, e-invoicing, counters that keep working offline and data kept on local servers.", proof: ["fewes-pharmacy-os", "tumsa"] },
      { icon: "BrainCircuit", title: "AI where it earns its place", text: "From published research to AI menus and AI-written reports, we add AI where it saves real work, not as decoration.", proof: ["bioflex", "tumsa"] },
      { icon: "Eye", title: "You see progress every week", text: "A written scope and price before we start, then a working demo every week. You always know what happens next and who is doing it.", proof: [] as string[] },
    ],
  },
  fit: {
    eyebrow: "Honest fit",
    title: "Is Arki",
    highlight: "right for you?",
    text: "We would rather tell you now than halfway through a project.",
    goodTitle: "A good fit if you",
    good: [
      "Need a product or system built end to end, or rebuilt properly",
      "Want experienced engineers on your project, not a rotating bench",
      "Operate in Ethiopia or need software that works for Ethiopian users",
      "Value weekly visibility and plain answers over long reports",
    ],
    notTitle: "Probably not the best fit if you",
    not: [
      "Need dozens of engineers hired next month",
      "Are choosing only on the lowest price",
      "Want to hand over a spec and hear back in six months",
    ],
  },
  promises: {
    eyebrow: "Our commitments",
    title: "What you can count on,",
    highlight: "in writing",
    items: [
      { icon: "BadgeCheck", title: "Scope, timeline and price up front", text: "In writing before work starts, with a clear process if anything changes." },
      { icon: "Presentation", title: "A working demo every week", text: "Real software you can click through, not slides about progress." },
      { icon: "MessagesSquare", title: "A direct line to the engineers", text: "Ask the person writing the code, not a go-between." },
      { icon: "ShieldCheck", title: "Your code and data stay yours", text: "You own the code and IP. NDAs and data protection are standard." },
      { icon: "Code", title: "Code review and tests on every change", text: "Quality is checked continuously, not at the end." },
      { icon: "Headphones", title: "Support after launch", text: "We monitor, fix and keep improving once your users are on it." },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*                                  /process                                  */
/* -------------------------------------------------------------------------- */

export const howWeWork = {
  crumb: "How we work",
  hero: {
    eyebrow: "How we work",
    title: "From first call to first release,",
    highlight: "with no surprises.",
    text: "A simple, transparent process. You always know what happens next, and who is doing it.",
    primary: cta,
    secondary: { label: "Ways to work with us", href: "/engagement-model" },
    cardTitle: "Your first two weeks",
  },
  steps: {
    eyebrow: "Five steps",
    title: "What happens,",
    highlight: "and when",
    text: "The same path for every project, from a small feature to a full platform.",
    youGet: "You get",
    items: [
      { when: "Day 1", icon: "MessageSquare", title: "Discovery call", text: "We learn your problem, your users and your goals. We ask a lot of questions, and we tell you honestly if we are not the right team.", gets: "A clear summary of what we heard" },
      { when: "Week 1", icon: "BadgeCheck", title: "Proposal and plan", text: "We turn the conversation into a plan: what we will build first, how long it takes, who works on it and what it costs.", gets: "Scope, timeline, team and price, in writing" },
      { when: "Week 2", icon: "Users", title: "Team and kickoff", text: "You meet your engineers. We set up the tools, access and environments, and agree how we will talk and report.", gets: "A shared board and a first sprint plan" },
      { when: "Weekly", icon: "RefreshCw", title: "Build in sprints", text: "Short sprints with a working demo every week. You see real software early and change direction while it is still cheap to do so.", gets: "A working demo and a written update" },
      { when: "Ongoing", icon: "Rocket", title: "Launch and support", text: "We go live with you, watch how the system behaves with real users, fix what comes up and keep improving it.", gets: "Monitoring, fixes and a roadmap" },
    ],
  },
  week: {
    eyebrow: "Every week",
    title: "What a normal",
    highlight: "week looks like",
    text: "No black box. Four things happen every week, on every project.",
    items: [
      { day: "Start of week", title: "Plan", text: "We agree what this week should deliver, based on what you saw last week." },
      { day: "Every day", title: "Build and review", text: "Engineers build, review each other's code and keep the board up to date." },
      { day: "End of week", title: "Demo", text: "We show the working software and you tell us what to change." },
      { day: "After the demo", title: "Written update", text: "What was done, what comes next and any risks, in a short note." },
    ],
  },
  quality: {
    eyebrow: "Quality, built in",
    title: "How we keep",
    highlight: "the standard",
    text: "The checks that run on every project, whatever its size.",
    items: [
      { icon: "Code", title: "Code review", text: "Every change is read by a second engineer before it is merged." },
      { icon: "BadgeCheck", title: "Automated tests", text: "Tests run on every change, so fixes don't break what already works." },
      { icon: "Layers", title: "Staging first", text: "New work goes to a test environment you can try before it reaches users." },
      { icon: "ShieldCheck", title: "Security and data protection", text: "Access control, encryption and Ethiopia's data protection rules planned from day one." },
      { icon: "Server", title: "Monitoring and backups", text: "We watch the live system and keep backups, so problems are caught early." },
      { icon: "BookOpen", title: "Documentation and handover", text: "Clear docs, so your team or ours can keep the system running." },
    ],
  },
  faq: {
    title: "Questions about",
    highlight: "how we work",
    text: "If yours isn't here, ask us on the first call.",
    items: [
      { q: "How long does a project take?", a: "It depends on the scope. A focused first version usually takes weeks, not months; larger platforms are built in stages, with something usable early. You get a timeline in writing before we start." },
      { q: "What do you need from us?", a: "One person who can make decisions, about an hour a week for the demo and feedback, and access to any systems we need to connect to." },
      { q: "Do you give a fixed price?", a: "Yes, for work with a clear scope we quote a fixed price per milestone. For ongoing work we agree a monthly rate. See Ways to work with us for the options." },
      { q: "Who owns the code?", a: "You do. The code, designs and documentation we write for you belong to you, and we hand everything over." },
      { q: "Can you work with our existing team or system?", a: "Yes. We can join your team and tools, or take over and improve a system someone else built, after a short review of the code." },
      { q: "What happens after launch?", a: "We stay on to monitor, fix issues and keep improving the system, under a support agreement that fits how much help you need." },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*                              /engagement-model                             */
/* -------------------------------------------------------------------------- */

export const ways = {
  crumb: "Ways to work with us",
  hero: {
    eyebrow: "Ways to work with us",
    title: "Three ways to work together.",
    highlight: "One standard of work.",
    text: "Build a product with us from scratch, get a dedicated team for the long run, or add engineers to the team you already have. The engineering standard is the same in every case; only the arrangement changes.",
    primary: cta,
    secondary: { label: "How we work", href: "/process" },
    noteTitle: "Not sure which one fits?",
    note: "Tell us about your project on a short call. We'll recommend one, and explain why.",
  },
  models: {
    eyebrow: "The options",
    title: "Pick the arrangement",
    highlight: "that fits your work",
    text: "Each model comes with a clear price basis and a clear owner for delivery.",
    priceLabel: "Price basis",
    startLabel: "Typical start",
    items: [
      { icon: "Target", name: "Project", tagline: "We build it for you", text: "A defined scope with milestones and acceptance criteria. We own delivery from plan to launch, then support it.", price: "Fixed price per milestone", start: "About 2 weeks after the call", bestFor: ["A new product, MVP or module", "Clear goals and a deadline", "Procurement that needs a fixed scope"] },
      { icon: "Users", name: "Dedicated team", tagline: "Your own Arki team", text: "Engineers and a delivery lead working only on your product, month after month, following your roadmap.", price: "Monthly, by team size", start: "About 2 weeks", bestFor: ["Long-running product work", "A roadmap that keeps changing", "Outcomes without managing each engineer"] },
      { icon: "UserPlus", name: "Engineers in your team", tagline: "We join your team", text: "Arki engineers join your standups, tools and backlog, and work as part of your team.", price: "Monthly, per engineer", start: "1 – 2 weeks", bestFor: ["A specific skill you lack, such as AI or DevOps", "Extra hands for a busy quarter", "Your team keeps ownership of the backlog"] },
    ],
  },
  pick: {
    eyebrow: "Quick guide",
    title: "Which one",
    highlight: "fits you?",
    text: "Start from your situation. You can switch models later as the work changes.",
    items: [
      { situation: "You have a clear idea, a budget and a deadline.", answer: "Project" },
      { situation: "You have a product to grow for months, maybe years.", answer: "Dedicated team" },
      { situation: "You have a team, but need more hands or a missing skill.", answer: "Engineers in your team" },
      { situation: "You're not sure yet what you need.", answer: "Start with a discovery call" },
    ],
  },
  same: {
    eyebrow: "In every model",
    title: "What never",
    highlight: "changes",
    items: [
      { icon: "BadgeCheck", title: "Written terms", text: "Scope or role, timeline and price agreed in writing before work starts." },
      { icon: "Presentation", title: "Weekly demos", text: "Working software every week, and a short written update." },
      { icon: "Shuffle", title: "Change control", text: "When plans change, we write down the impact and agree it first." },
      { icon: "ShieldCheck", title: "Your IP, protected", text: "You own the code. NDAs and careful access control are standard." },
      { icon: "Clock", title: "GMT+3 working hours", text: "Easy overlap with Africa, the Middle East and Europe." },
      { icon: "Headphones", title: "Support after launch", text: "We stay to monitor, fix and improve what we built." },
    ],
  },
  faq: {
    title: "Questions about",
    highlight: "working with us",
    text: "Commercial details are agreed in each proposal; these are the answers we give most often.",
    items: [
      { q: "Can we start small?", a: "Yes, and most clients do. A first milestone or a short engagement lets you see how we work before committing to more." },
      { q: "Can we change models later?", a: "Yes. Projects often become dedicated teams once the first version is live. We agree the change in writing." },
      { q: "Do you work with clients outside Ethiopia?", a: "Yes. We work remotely on GMT+3, which overlaps well with Africa, the Middle East and Europe, and we run calls, demos and updates online." },
      { q: "How do payments work?", a: "Projects are paid per milestone; team and engineer arrangements are paid monthly. The exact terms and currency are set out in the proposal." },
      { q: "Who manages the engineers?", a: "In a project or a dedicated team, we do, through a delivery lead. When engineers join your team, you direct their daily work and we stay responsible for their quality." },
    ],
  },
};
