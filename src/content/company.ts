/**
 * Copy for the company pages: /ourstories, /process, /engagement-model,
 * /life-at-arki-tech and /why-arki.
 *
 * Known facts: Arki Tech Solutions is a software and AI company legally
 * registered in Ethiopia, based in Addis Ababa. "Arki" means to see / observe /
 * be conscious (Afaan Oromo) and satisfying (Amharic).
 *
 * Everything marked TODO(confirm) is a placeholder for a company fact we do not
 * know yet (history, years, people, numbers, photos, open roles). Replace those
 * before launch; do not present them as real.
 */

/* -------------------------------------------------------------------------- */
/*                                 /ourstories                                */
/* -------------------------------------------------------------------------- */

export const ourStory = {
  breadcrumb: "Our Story",
  hero: {
    eyebrow: "About Arki Tech",
    title: "A software and AI company built to see the problem first.",
    description:
      "Arki Tech Solutions is a legally registered Ethiopian company based in Addis Ababa. We give local and international product teams senior engineering capacity: people who understand the problem before they write the code.",
    primary: { label: "Talk to our team", href: "/schedule-meeting" },
    secondary: { label: "See how we work", href: "/engagement-model" },
  },
  story: {
    eyebrow: "Our Story",
    title: "Where the name comes from",
    paragraphs: [
      "Arki is a word with two meanings. In Afaan Oromo it means to see, to observe, to be conscious. In Amharic it means satisfying. We chose it because it describes the job: look at a product carefully, understand what it really needs, and deliver work that leaves the people using it satisfied.",
      // TODO(confirm): founding year, founders and early history.
      "Arki Tech Solutions was founded in Addis Ababa [Year] by [Founder names]. The starting point was simple: Ethiopia has experienced engineers who can build software to the same standard as teams anywhere, and product teams need that capacity more than ever.",
      "We work across custom software, AI and data products, cloud and DevOps, and digital transformation. Some clients bring us a full product to build; others need a few senior engineers inside their existing team. Either way, the engineers own the outcome, not just the ticket.",
      "We build for the realities of where our clients operate, from Ethiopian payment rails and mobile money to Amharic and Afaan Oromo language features in AI products, and we hold the work to international engineering standards.",
      "We are based in Addis Ababa, on GMT+3, and we intend to stay that way: close to the talent, close to the market, and within a working day's reach of Europe, the Middle East and Africa.",
    ],
  },
  // TODO(confirm): replace with real figures. Values are placeholders.
  stats: [
    { value: 1, suffix: "", label: "Engineering hub" },
    { value: 20, suffix: "+", label: "Projects" },
    { value: 50, suffix: "+", label: "Tech Talent" },
    { value: 3, suffix: "", label: "Time zone", display: "GMT+3" },
  ] as { value: number; suffix: string; label: string; display?: string }[],
  journey: {
    eyebrow: "Journey",
    title: "Three steps.",
    highlight: "One direction",
    description: "Every stage of Arki's growth has been about seeing our clients' problems more clearly, not about doing more things.",
    // TODO(confirm): real years and milestones for each phase.
    phases: [
      {
        years: "Year",
        title: "Phase 1: Foundation",
        text: "Arki Tech Solutions is registered in Addis Ababa with a small team of senior engineers and a clear bet: careful, senior-led engineering from Ethiopia can match the standard of any team in the world. [Milestone details to confirm.]",
        icon: "Flag",
      },
      {
        years: "Year",
        title: "Phase 2: Software and AI focus",
        text: "We narrow our work to the areas where we add the most: custom software, AI and data products, and cloud engineering for product teams in Ethiopia and abroad. [Milestone details to confirm.]",
        icon: "BrainCircuit",
      },
      {
        years: "Year",
        title: "Phase 3: Growing with our clients",
        text: "We grow our engineering hub in Addis Ababa and our engagement models, so teams can work with us as embedded engineers, a dedicated team, or a fixed-scope project. [Milestone details to confirm.]",
        icon: "Users",
      },
    ],
    cta: { prompt: "Want to talk to an Arki engineer?", label: "Talk to our team", href: "/schedule-meeting" },
  },
  principles: {
    eyebrow: "What we believe",
    title: "Three principles that shape how we work.",
    description: "We keep the list short on purpose. These three ideas decide who we hire, how we run projects, and which work we say no to.",
    items: [
      {
        icon: "Eye",
        title: "See the problem before writing the code.",
        text: "Arki means to see and be conscious. Before we build, we ask why: who uses this, what is it for, what happens if it fails. Engineers who understand the problem make better decisions than engineers who only read the spec.",
      },
      {
        icon: "Users",
        title: "Senior engineers who own the work.",
        text: "The people in your standups are experienced engineers who have shipped products before. They push back when something looks wrong, flag risks early, and care whether the product is actually good.",
      },
      {
        icon: "Handshake",
        title: "Work that satisfies, over the long run.",
        text: "Arki also means satisfying. We measure success by whether the client wants to keep working with us, not by hours billed. Most engagements start small and grow as trust builds.",
      },
    ],
  },
  values: {
    eyebrow: "What guides us",
    title: "Our",
    highlight: "values",
    items: [
      { icon: "Crosshair", color: "text-primary", title: "Clarity", text: "We look closely, ask the obvious questions and write down what we decide, so nothing important stays vague." },
      { icon: "MessagesSquare", color: "text-accent", title: "Transparency", text: "Honest updates, visible progress and early warnings when something is off track." },
      { icon: "ShieldCheck", color: "text-primary", title: "Reliability", text: "We commit to what we can deliver, then deliver it on the dates we agreed." },
      { icon: "Lightbulb", color: "text-accent", title: "Curiosity", text: "We keep learning new tools, including AI, and use them where they make our clients' products better." },
      { icon: "Scale", color: "text-primary", title: "Integrity", text: "Confidentiality, data protection and fair dealing are standard on every engagement." },
    ],
  },
  missionVision: {
    mission: "Help product teams see their problems clearly and ship software that satisfies, with senior engineers from Addis Ababa.",
    vision: "To be the engineering partner teams in Ethiopia and abroad recommend to each other, because the work was careful and the results held up.",
  },
  team: {
    eyebrow: "Leadership",
    title: "The people",
    highlight: "building Arki",
    description: "A leadership team that stays close to the engineering work and to every client engagement.",
    // TODO(confirm): real names, roles, bios and photos. Initials avatars are used until photos exist.
    members: [
      { name: "Team member", role: "Role to confirm", initials: "TM", bio: "Short bio to confirm: background, what this person leads at Arki, and how they work with clients." },
      { name: "Team member", role: "Role to confirm", initials: "TM", bio: "Short bio to confirm: background, what this person leads at Arki, and how they work with clients." },
      { name: "Team member", role: "Role to confirm", initials: "TM", bio: "Short bio to confirm: background, what this person leads at Arki, and how they work with clients." },
    ],
  },
  leadershipInPractice: {
    eyebrow: "Leadership in practice",
    title: "What our leadership team",
    highlight: "actually does",
    description: "Principles only count if they show up in the work. This is where our leadership spends its time.",
    items: [
      { icon: "ShieldCheck", title: "In client workshops", text: "Joins kick-offs and architecture reviews so the first decisions on a project are senior decisions." },
      { icon: "Target", title: "Mentoring engineers", text: "Runs code reviews and internal tech talks to raise the bar across every team." },
      { icon: "Zap", title: "Keeping the standard", text: "Holds every project to our commitments on data protection, responsible AI and honest reporting." },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*                                  /process                                  */
/* -------------------------------------------------------------------------- */

export const process = {
  breadcrumb: "Our Process",
  hero: {
    title: "Agile",
    highlight: "Methodology",
    description:
      "We work in short, iterative cycles with close collaboration between our engineers, your product owners and your stakeholders. Small increments, frequent demos and honest feedback keep everyone looking at the same picture and make ownership shared.",
    cta: { label: "Discuss a Project", href: "/schedule-meeting" },
    points: ["Closer collaboration", "Room to change", "Faster releases", "Steady quality"],
  },
  lean: {
    title: "Our Lean-Agile Methodology",
    lines: [
      "A delivery rhythm that keeps engineering aligned with your product goals.",
      "We use Scrum by default because it lets us adapt to changing requirements and ship working software every sprint. If your team runs Kanban or another method, we join yours.",
    ],
    roles: ["Product Owner", "Scrum Master", "Development Team", "Stakeholders"],
  },
  events: {
    title: "Core Scrum Events",
    description: "The checkpoints that keep every sprint visible and on track.",
    items: [
      { icon: "RefreshCw", duration: "1 - 4 weeks", title: "Sprint", text: "The time-box that holds all the work needed to produce a usable, potentially releasable increment.", focus: ["Working increment", "Continuous delivery", "Fixed time-box"] },
      { icon: "CalendarCheck", duration: "2 - 8 hours", title: "Sprint Planning", text: "What will we build this sprint, and how will we build it?", focus: ["Sprint goal", "Product backlog", "Team capacity", "Lessons from last retro", "Known blockers"] },
      { icon: "MessageSquare", duration: "15 Mins", title: "Daily Scrum", text: "Are we still on track for the sprint goal? What needs to change today?", focus: ["Progress since yesterday", "Plan for today", "Open blockers"] },
      { icon: "Presentation", duration: "1 - 4 hours", title: "Sprint Review", text: "Demo the increment, collect feedback and update the release plan.", focus: ["Sprint goal check", "Feature demo", "Stakeholder feedback", "Backlog updates", "Risks"] },
      { icon: "Repeat", duration: "1 - 3 hours", title: "Sprint Retrospective", text: "What should we do differently next sprint to work better than this one?", focus: ["What went well", "What to improve", "Action items", "Next sprint focus"] },
    ],
  },
  lifecycle: {
    title: "Our Sprint Lifecycle",
    description: "The same sequence every sprint, so backlog work stays visible and delivery stays predictable.",
    steps: [
      "Backlog Refinement",
      "Capacity & Sprint Planning",
      "Select Backlog for the Sprint",
      "Build & Implement",
      "Commit to Sprint Estimates",
      "Daily Scrum",
      "Sprint Review (Demo)",
      "Sprint Retrospective",
    ],
  },
  benefits: {
    title: "Customer Benefits",
    description: "What this way of working gives you, whatever the size or complexity of the project.",
    items: [
      { icon: "Zap", title: "Faster time to market" },
      { icon: "Bot", title: "Room for automation" },
      { icon: "Eye", title: "Full visibility" },
      { icon: "BadgeCheck", title: "Quality built in" },
      { icon: "Shuffle", title: "Open to change" },
      { icon: "Filter", title: "Less waste, more focus" },
      { icon: "CalendarClock", title: "Predictable cadence" },
      { icon: "Rocket", title: "Early, frequent delivery" },
      { icon: "TrendingUp", title: "Focus on business value" },
    ],
  },
  outcomes: {
    title: "What We Measure",
    highlight: "Outcomes",
    description: "We judge our work by delivery consistency and by engineers who stay with your product, not by headline statistics.",
    items: [
      { icon: "Award", title: "Senior Experience", text: "Experienced engineers lead every engagement." },
      { icon: "MapPin", title: "Where We Operate", text: "Engineering delivered from our Addis Ababa hub, on GMT+3." },
      { icon: "Users", title: "In-house Engineers", text: "A dedicated team of our own engineers, not freelancers." },
      { icon: "Layers", title: "Scale & Delivery", text: "Teams that grow from two engineers to a full squad as your roadmap needs." },
      { icon: "ShieldCheck", title: "Quality Standards", text: "Code review, automated tests and stakeholder demos at every milestone." },
      { icon: "Timer", title: "Fast Onboarding", text: "About 14 days from kickoff to a team contributing in your sprints." },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*                              /engagement-model                             */
/* -------------------------------------------------------------------------- */

export const engagement = {
  breadcrumb: "Engagement Model",
  hero: {
    titleA: "Engagement",
    titleB: "Models that plug in",
    highlight: "within 14 days",
    description:
      "Clear commercial terms, predictable delivery and engineers who fit into your roadmap. Whether you need a few embedded engineers, a dedicated team, or a fixed-scope build.",
    cta: { label: "Discuss a project", href: "#contact" },
    points: ["Clear commercials", "Project governance", "Flexible team size", "NDA & IP protected"],
  },
  models: {
    title: "One partner, three ways to work together",
    description:
      "We match how we staff and contract to your timeline, your risk tolerance and the capacity you already have. The engineering standards are the same in every model; only the commercial wrapper changes.",
    // Pricing is not published. TODO(confirm): add pricing guidance if and when it is decided.
    items: [
      {
        icon: "Users",
        title: "Dedicated team",
        text: "A cross-functional Arki team (engineers, QA and a delivery lead) working only on your product, aligned to your releases and goals.",
        bestFor: ["Long-running product work", "Delivery outcomes without managing each engineer day to day", "Building a new product or major module"],
      },
      {
        icon: "UserPlus",
        title: "Embedded engineers",
        text: "Senior engineers who join your tools, ceremonies and backlog as part of your team. Staff augmentation, without the months of hiring.",
        bestFor: ["Your team keeps backlog ownership", "Filling specific skill gaps quickly", "Scaling up or down by quarter"],
      },
      {
        icon: "Target",
        title: "Fixed-scope project",
        text: "A defined scope with milestones, acceptance criteria and a documented change process if the scope moves.",
        bestFor: ["Well-bounded MVPs and modules", "Procurement that needs a fixed scope", "Prototypes and proofs of concept"],
      },
    ],
  },
  comparison: {
    title: "Compare engagement models",
    description: "Commercial structure, speed, flexibility and how much control you keep, side by side.",
    columns: ["Model", "Commercial structure", "Time to start", "Scope flexibility", "Client control"],
    rows: [
      { icon: "Users", model: "Dedicated team", structure: "Monthly retainer", start: "Medium (2–4 weeks)", flexibility: "High", control: "Shared" },
      { icon: "UserPlus", model: "Embedded engineers", structure: "Monthly, per engineer", start: "Fast (1–2 weeks)", flexibility: "High", control: "High" },
      { icon: "Target", model: "Fixed-scope project", structure: "Fixed price per milestone", start: "Slower (planning first)", flexibility: "Low", control: "Milestone-based" },
    ],
  },
  howWeWork: {
    title: "How We Work With You",
    description: "A clear path from first conversation to delivery, with shared context at every step.",
    steps: [
      { title: "Discovery Call", text: "We learn your goals, team setup and delivery needs in a focused first conversation." },
      { title: "Model Fit", text: "We recommend the engagement model that fits your priorities, budget and timeline." },
      { title: "Scope & Proposal", text: "You get a scope, timeline and commercial proposal, with change terms written down upfront." },
      { title: "Team Setup", text: "You meet and approve the engineers, we align on tools and workflow, and work begins." },
      { title: "Weekly Rhythm", text: "Weekly syncs, sprint reports and demos keep delivery visible and on schedule." },
    ],
  },
  commercial: {
    title: "Commercial alignment, without surprises",
    items: [
      { title: "Discovery first", text: "We agree goals, constraints and success measures early, so the model fits the work from day one." },
      { title: "Change control", text: "When scope changes, we document it and agree the impact before the work starts." },
      { title: "Security & IP", text: "NDAs, careful access management and full IP ownership for you are standard on every engagement." },
    ],
  },
  services: {
    title: "See how this maps to our services",
    description: "Our team engagement and project delivery services use the same models. Pick a starting point and we will propose the right fit.",
    links: [
      { label: "Dedicated engineering teams", href: "/services/team-engagement/staff-augmentation" },
      { label: "Project delivery", href: "/services/team-engagement/project-delivery" },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*                             /life-at-arki-tech                             */
/* -------------------------------------------------------------------------- */

export const life = {
  hero: {
    badge: "Life at Arki",
    title: "Beyond the Code",
    lead: "Careful engineering. Real people. Good coffee.",
    text: "We build software and AI for teams in Ethiopia and abroad, in a culture that values curiosity, clear thinking and saying what you see.",
  },
  // TODO(confirm): replace the branded tiles with real team photos when available.
  funStuff: {
    title: "The Fun Stuff",
    items: [
      { icon: "Coffee", caption: "Buna break: the daily coffee ceremony", rotate: "-rotate-3" },
      { icon: "Gamepad2", caption: "Friday games, fierce rivalries", rotate: "rotate-2" },
      { icon: "Lightbulb", caption: "The whiteboard wall of ideas", rotate: "-rotate-1" },
      { icon: "Users", caption: "Team time away from the keyboard", rotate: "rotate-3" },
    ],
  },
  desks: {
    badge: "Inside the studio",
    title: "How Arki engineers work",
    items: [
      { icon: "Monitor", title: "The multi-screen setup", text: "Code on one screen, logs on another, the design file on a third. For engineers who like to see the whole system at once." },
      { icon: "Focus", title: "The quiet corner", text: "One screen, headphones on, notifications off. Where the hardest problems get solved in long stretches of focus." },
      { icon: "Server", title: "The build station", text: "Enough memory to run local services, containers and a staging build at the same time, for the days with big deployments." },
      { icon: "Sprout", title: "The green desk", text: "Plants, daylight and a view of Addis. A calmer space for design reviews and fresh thinking." },
    ],
  },
  otherSide: {
    badge: "The other side",
    title: "Serious work. Good company.",
    text: "We take the engineering seriously and ourselves a little less. Hard problems, honest reviews and a team that helps each other out.",
    items: [
      { icon: "Terminal", gradient: "from-primary to-primary-light", tint: "bg-primary/10 text-primary-light", title: "Internal hack days", text: "Time set aside to try new tools, prototype ideas and learn something outside the current project." },
      { icon: "BrainCircuit", gradient: "from-accent to-accent-light", tint: "bg-accent/10 text-accent-light", title: "Deep work blocks", text: "Protected focus time for architecture and performance problems, before they reach production." },
      { icon: "Hexagon", gradient: "from-primary-light to-accent-light", tint: "bg-white/10 text-white", title: "Craft and care", text: "We care about clean code, careful reviews and interfaces that feel right to the people who use them." },
    ],
  },
  carousel: {
    title: "Life at Arki Tech",
    lines: ["Where careful engineering meets Ethiopian talent.", "Building software that satisfies, one release at a time."],
    // TODO(confirm): replace tiles with real photos (12 panels in the spinning gallery).
    tiles: ["Code", "Coffee", "Users", "Lightbulb", "Monitor", "BookOpen", "Rocket", "Sprout", "MessagesSquare", "Brain", "Mountain", "Sparkles"],
    points: [
      { title: "Fast, careful engineering", text: "Short sprint cycles led by experienced engineers, with review built into every step." },
      { title: "Working across borders", text: "Based in Addis Ababa on GMT+3, collaborating daily with teams in Africa, the Middle East and Europe." },
      { title: "Built for production", text: "Software for fintech, health, education and commerce, tested and documented before handoff." },
    ],
  },
  scrapbook: {
    title: "Team Moments",
    // TODO(confirm): replace with real photos.
    items: [
      { icon: "MessagesSquare", caption: "Pairing on a tricky problem", rotate: "-rotate-3" },
      { icon: "Headphones", caption: "Deep work: the flow state", rotate: "rotate-2" },
      { icon: "Smile", caption: "The people behind the screens", rotate: "-rotate-1" },
    ],
  },
  stories: {
    badge: "Engineering notes",
    title: "Stories from the",
    highlight: "Inside Out",
    text: "Our engineers write about what they build, what went wrong and what they learned along the way. Read the latest on our blog.",
    cta: { label: "Read the blog", href: "/blog" },
    // TODO(confirm): feature a real article or video here.
    featured: "Featured story coming soon",
  },
  whyAddis: {
    badge: "Our perspective",
    title: "Why Addis Ababa?",
    lead: "Why building software from Ethiopia makes sense for product teams.",
    text: "Addis Ababa has a growing community of experienced engineers, a time zone that overlaps with three continents, and a fast-moving local tech market. Here is what that means for the teams we work with.",
    points: [
      { title: "Experienced local talent", text: "Engineers who have built real products, and who grow fastest on demanding, international work." },
      { title: "A growing tech hub", text: "Ethiopia's digital economy is expanding fast, from payments and mobile money to e-government and AI." },
      { title: "Earning trust through quality", text: "Clients choose a partner on evidence. We earn it with careful work, clear reporting and code that holds up." },
      { title: "Local insight, global standards", text: "We understand the Ethiopian market and build to international engineering practices." },
    ],
    cta: { label: "See why teams choose Arki", href: "/why-arki" },
    panelLabel: "Addis Ababa, Ethiopia",
    panelTag: "Engineering hub",
  },
  vibe: {
    title: "Inside Arki",
    tag: "Coming soon",
    // TODO(confirm): link to real videos or posts when available.
    items: [
      { icon: "Building", title: "Office tour", gradient: "from-primary to-primary-light" },
      { icon: "Layers", title: "The stack we rely on", gradient: "from-accent to-accent-light" },
      { icon: "Coffee", title: "A day in the life: buna and code", gradient: "from-primary-light to-accent-light" },
      { icon: "BookOpen", title: "What our engineers are reading", gradient: "from-primary to-accent" },
    ],
  },
  growth: {
    badge: "How we grow",
    title: "Always learning",
    text: "Engineers at Arki keep learning on the job. These are the habits that keep our skills sharp.",
    items: [
      { title: "Code review culture", text: "Every change is reviewed by another engineer, and reviews are where most of the learning happens." },
      { title: "Internal tech talks", text: "Engineers share what they learned on projects, from new frameworks to production incidents." },
      { title: "AI in the workflow", text: "We use AI coding tools as part of daily work and share what works and what does not." },
      { title: "Local language AI", text: "Exploring Amharic and Afaan Oromo language features for the products we build." },
    ],
  },
  careers: {
    title: "Want to join Arki?",
    text: "We are always glad to meet curious, careful engineers who want to build software that matters.",
    // TODO(confirm): replace with real open roles (or remove the list when hiring is closed).
    roles: [
      { title: "Open role (to confirm)", meta: "Engineering · Addis Ababa" },
      { title: "Open role (to confirm)", meta: "Engineering · Addis Ababa" },
      { title: "Open role (to confirm)", meta: "Design / QA · Addis Ababa" },
    ],
    note: "No role that fits? Send us your CV anyway.",
    cta: "Email your CV",
  },
};

/* -------------------------------------------------------------------------- */
/*                                  /why-arki                                 */
/* -------------------------------------------------------------------------- */

export const whyArkiPage = {
  breadcrumb: "Why Arki",
  hero: {
    badge: "Why Arki Tech?",
    titleA: "See It Clearly,",
    titleB: "Build It Right,",
    titleC: "Ship What Satisfies.",
    description:
      "Choosing an engineering partner affects how fast you can hire, how predictable delivery is, and whether your roadmap actually ships. At Arki this comes down to a small set of working practices: senior people, clear oversight, and quality checks you can see.",
    primary: { label: "Book a 30-min call", href: "/schedule-meeting" },
    secondary: { label: "Explore Our Approach", href: "/engagement-model" },
    stats: [
      { label: "Team lead", value: "Senior" },
      { label: "Time zone", value: "GMT+3" },
      { label: "Average onboarding", value: "14 days" },
    ],
  },
  blueprint: {
    label: "Arki Engineering Blueprint",
    badge: "Clear oversight",
    steps: [
      { icon: "ShieldCheck", title: "Security and privacy by default", text: "Data protection, access control and NDAs planned from sprint zero." },
      { icon: "Users", title: "Senior engineers lead", text: "Experienced engineers make the architecture decisions from day one." },
    ],
    bar: { label: "Sprint demos", value: "Weekly", text: "Visible milestones and regular demos. No black-box delivery." },
  },
  pillars: {
    eyebrow: "Our engineering protocol",
    title: "Five Principles Behind How Arki Delivers",
    description: "Clear process, senior ownership and quality checks, built for teams that need to know what they are getting.",
    items: [
      { icon: "UserCheck", title: "Senior-Led Engineering", tag: "Depth over volume", text: "Expertise matters more than headcount. Our engagements are led by experienced engineers who have shipped production systems, and our assessment process checks for judgment as well as skill.", impact: "Faster ramp-up, architecture decisions based on real delivery experience, and a team that anticipates problems instead of reacting to them.", signal: "Senior engineers on every engagement" },
      { icon: "Settings", title: "Project Governance", tag: "Predictability by design", text: "Every engagement has a delivery lead who is your single point of accountability: tracking milestones, managing risks and keeping communication clear and frequent.", impact: "Fewer surprises, honest status reporting, and consistent engineering discipline on timelines and quality.", signal: "One accountable delivery lead" },
      { icon: "ShieldCheck", title: "Quality & Security Standards", tag: "Built in, not bolted on", text: "We work with coding standards, automated tests, mandatory code review and a security-first approach, in line with Ethiopia's Personal Data Protection Proclamation and your own policies.", impact: "Software that passes review and testing, carries less technical debt and scales well. Your IP is protected through clear contracts and NDAs.", signal: "Code review on every change" },
      { icon: "MessageSquare", title: "Transparent Collaboration", tag: "Direct access", text: "You work directly with your engineers: daily standups, sprint reviews and shared tools such as Jira, Slack and Figma. Scope, responsibilities and milestones are written down from the start.", impact: "You stay informed and in control, working with our team as if they were in the next room.", signal: "Daily standups and sprint reviews" },
      { icon: "TrendingUp", title: "Capacity at Product Speed", tag: "Faster team growth", text: "Our onboarding has engineers contributing in about 14 days, so teams that cannot hire senior engineers quickly can keep their roadmap moving.", impact: "Add engineering capacity without waiting through a long senior hiring cycle.", signal: "About 14 days to onboard" },
    ],
  },
  orbit: {
    eyebrow: "Our engineering partnership model",
    title: "How we work with",
    highlight: "product teams",
    center: "How we work with product teams →",
    items: [
      { icon: "Building2", title: "Support for Product Teams", text: "We solve business problems, not only write code." },
      { icon: "Users", title: "Build Your Dedicated Team", text: "Choose the team you want and start building quickly." },
      { icon: "ShieldAlert", title: "Low-Risk Start", text: "Begin small, review the work, then scale with confidence." }, // TODO(confirm): formal trial period terms, if any
      { icon: "Wallet", title: "Flexible Capacity", text: "Team size that follows your roadmap and budget." },
      { icon: "Cpu", title: "Senior Engineers, On Time", text: "Delivery against agreed milestones and dates." },
      { icon: "Globe", title: "Engineering Infrastructure", text: "Tools for collaboration, testing and delivery from day one." },
      { icon: "Handshake", title: "You Pick the Engineers", text: "Interview, choose and direct your own team." },
      { icon: "Clock", title: "Time Zone Overlap", text: "GMT+3, overlapping with Africa, the Middle East and Europe." },
    ],
  },
  compare: {
    eyebrow: "Side by side",
    title: "How We",
    highlight: "Compare",
    description: "How working with Arki compares with a traditional agency or hiring a team yourself.",
    columns: ["Aspect", "Traditional Agency", "Hiring In-House", "Arki Tech"],
    rows: [
      { aspect: "Talent quality", agency: "Mixed, often junior-heavy.", local: "High, but hard to find quickly.", arki: "Senior-led, vetted engineers." },
      { aspect: "Hiring speed", agency: "Varies by project and team.", local: "Months per senior hire.", arki: "About 14 days to onboard." },
      { aspect: "Communication", agency: "Through account managers, often slow.", local: "Direct and synchronous.", arki: "Direct access to engineers." },
      { aspect: "Project control", agency: "Limited, black-box delivery.", local: "Full control, high management load.", arki: "Shared control with a delivery lead." },
      { aspect: "Risk profile", agency: "Higher (quality, timeline, IP).", local: "Lower, but high fixed cost.", arki: "Managed through process and clear contracts." },
      { aspect: "Outcome", agency: "Unpredictable.", local: "Predictable but expensive.", arki: "Predictable, careful, good value." },
    ],
  },
  closing: {
    title: "Add Engineering Capacity in Two Weeks",
    text: "Arki works as an engineering partner inside your product team, invested in how your product does over the long run, not just in the next release.",
    note: "Need senior engineers within two weeks? Let's talk.",
    primary: { label: "Book a 30-min call", href: "/schedule-meeting" },
    secondary: { label: "Explore Our Story", href: "/ourstories" },
  },
};
