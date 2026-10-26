/**
 * Arki Tech engineering blog.
 *
 * Posts are typed data rendered by `src/components/blog/PostBody.tsx` (no MDX).
 * Every post is original Arki copy. Dates are placeholders: TODO(confirm) the real
 * publication dates before launch. Do not add statistics without a cited source.
 */

export type BlogCategoryId = "technology" | "ai" | "process";

export type BlogCategory = {
  id: BlogCategoryId;
  title: string;
  description: string;
  /** lucide icon name, resolved in components/blog/icons.ts */
  icon: "Cpu" | "Sparkles" | "Layers";
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; title: string; columns: [string, string, string]; rows: [string, string, string][] }
  | { type: "faq"; intro: string; items: { q: string; a: string }[] };

export type BlogPost = {
  slug: string;
  /** First line of the H1. */
  title: string;
  /** Second line of the H1, shown in the brand color. */
  titleHighlight: string;
  /** Short label for the breadcrumb. */
  shortTitle: string;
  category: BlogCategoryId;
  tags: string[];
  excerpt: string;
  /** Grey lead paragraph above the body. */
  intro: string;
  readTime: string;
  /** Display date. TODO(confirm): placeholder dates. */
  date: string;
  featured: boolean;
  blocks: BlogBlock[];
};

export const blogAuthor = {
  name: "Arki Tech Engineering",
  role: "Engineering Team",
  initials: "AT",
};

export const blogIntro = {
  breadcrumbParent: "Resources",
  badge: "Engineering Blog",
  title: "Practical Engineering Notes From",
  highlight: "Addis Ababa",
  description:
    "Practical guides from our engineers in Addis Ababa: building for patchy networks, local payment rails, Ethiopian languages and the decisions that shape a software project.",
  cta: "Explore Articles",
  featuredTitle: "Featured Articles",
  editorsPick: "Editor's Pick",
  readArticle: "Read Article",
};

export const blogPostChrome = {
  eyebrow: "Engineering Briefing",
  metadataTitle: "Article Details",
  authorLabel: "Author",
  readingTimeLabel: "Reading Time",
  publishedLabel: "Published",
  ctaTitle: "Planning something similar?",
  ctaText:
    "Book a 30-minute call with one of our senior engineers to talk through your product, constraints and options. No sales pitch.",
  ctaLabel: "Book a Call",
};

export const blogCategories: BlogCategory[] = [
  {
    id: "technology",
    title: "Technology Deep Dives",
    description: "Hands-on engineering guides from our delivery teams.",
    icon: "Cpu",
  },
  {
    id: "ai",
    title: "AI & Language",
    description: "Building AI products that work for Ethiopian languages and users.",
    icon: "Sparkles",
  },
  {
    id: "process",
    title: "Process & Leadership",
    description: "How software work is planned, bought and run.",
    icon: "Layers",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-offline-tolerant-apps",
    title: "Building Apps That Keep Working",
    titleHighlight: "When the Network Doesn't",
    shortTitle: "Offline-Tolerant Apps",
    category: "technology",
    tags: ["Offline-First", "Mobile", "Sync"],
    excerpt:
      "Patchy mobile data is a design constraint, not an edge case. A practical approach to local-first storage, sync queues and honest interface states.",
    intro:
      "Many users move between strong 4G in a city centre, weak signal in transit and no data at all when a bundle runs out. Apps that assume a constant connection fail these users in quiet, frustrating ways: lost form entries, endless spinners and duplicate submissions.",
    readTime: "6 min",
    date: "October 2026", // TODO(confirm)
    featured: true,
    blocks: [
      {
        type: "p",
        text: "Designing for intermittent connectivity changes architecture decisions early, so it is far cheaper to plan for it on day one than to retrofit it later. This is the approach we use.",
      },
      { type: "h2", text: "Start with the local database" },
      {
        type: "p",
        text: "Treat the device as the primary home of the user's work and the server as the place it eventually syncs to. Screens read from local storage first; the network only refreshes it. On Android and iOS that usually means SQLite, directly or through a library such as Room, Drift or WatermelonDB. On the web it means IndexedDB behind a service worker.",
      },
      {
        type: "ul",
        items: [
          "Render screens from local data immediately, then refresh in the background.",
          "Store when each record was last synced so the interface can say how fresh it is.",
          "Cache reference data such as product lists, branch locations and price tables aggressively: it changes rarely.",
        ],
      },
      { type: "h2", text: "Queue writes, don't block on them" },
      {
        type: "p",
        text: "When the user submits something, write it locally and add it to an outbox queue. A background worker sends queued items when a connection is available and retries with exponential backoff. The user keeps working instead of watching a spinner.",
      },
      {
        type: "ul",
        items: [
          "Give every write a client-generated ID (a UUID) so the server can safely ignore a retry that arrives twice.",
          "Make server endpoints idempotent, especially anything that moves money or stock.",
          "Keep the queue ordered per record so an edit never overtakes the create it depends on.",
        ],
      },
      { type: "h2", text: "Decide how conflicts are resolved" },
      {
        type: "p",
        text: "If two people edit the same record while offline, something has to win. Pick a rule per type of data rather than one rule for the whole app.",
      },
      {
        type: "table",
        title: "Common conflict strategies",
        columns: ["Strategy", "How it works", "Good fit for"],
        rows: [
          ["Last write wins", "The latest timestamp overwrites", "Profile fields, settings"],
          ["Server authoritative", "Server rejects stale updates; client refetches", "Balances, stock, payments"],
          ["Field-level merge", "Non-overlapping field changes are combined", "Notes, checklists, forms"],
        ],
      },
      { type: "h2", text: "Be honest in the interface" },
      {
        type: "p",
        text: "People trust an app that tells them what is happening. Show a clear \"saved on this phone, will send when online\" state, a visible count of pending items and the time of the last successful sync. Never show a success message for an action the server has not confirmed when that action has real-world consequences, such as a payment.",
      },
      { type: "h2", text: "Respect the data bundle" },
      {
        type: "p",
        text: "Offline tolerance and data cost go together. Compress API responses, paginate lists, resize images on the server and avoid re-downloading unchanged data with ETags or \"changed since\" queries. Let users choose to download large media only on Wi-Fi.",
      },
      {
        type: "faq",
        intro: "Questions product owners ask us before committing to an offline-first build.",
        items: [
          {
            q: "Does offline-first make a project much more expensive?",
            a: "It adds work to the data layer and to testing, but much less than retrofitting it later. Scope it per feature: not every screen needs to work offline.",
          },
          {
            q: "Can a web app work offline too?",
            a: "Yes. A progressive web app with a service worker and IndexedDB can cache the app shell and queue submissions, although background sync support varies between browsers.",
          },
          {
            q: "How do we test it?",
            a: "Use network throttling and airplane-mode testing on real low-end devices, and write automated tests for the sync queue and the conflict rules.",
          },
        ],
      },
    ],
  },
  {
    slug: "integrating-mobile-money-payments",
    title: "Integrating Mobile Money Payments",
    titleHighlight: "Without Losing Transactions",
    shortTitle: "Mobile Money Payments",
    category: "technology",
    tags: ["Payments", "Mobile Money", "Fintech"],
    excerpt:
      "Mobile wallets are how many customers prefer to pay. What to get right: callbacks, idempotency, status checks, reconciliation and clear failure states.",
    intro:
      "In Ethiopia, mobile wallets such as telebirr and M-PESA, and bank wallets such as CBE Birr, are a normal way to pay for goods and services. For many products supporting them is not optional. Each provider documents its API; the hard part is building a payment flow that never loses or double-counts money when networks and callbacks misbehave.",
    readTime: "7 min",
    date: "October 2026", // TODO(confirm)
    featured: true,
    blocks: [
      { type: "h2", text: "Understand the asynchronous flow" },
      {
        type: "p",
        text: "Most mobile money APIs follow the same pattern. Your server creates a payment request, the customer approves it on their phone (often with a PIN prompt or USSD push), and the provider later notifies your server through a callback. Approval can take seconds or minutes, and sometimes never happens.",
      },
      {
        type: "ul",
        items: [
          "Create an order with status \"pending\" before calling the provider.",
          "Store the provider's transaction reference against your order as soon as you receive it.",
          "Treat the callback or a status query as the source of truth for success, never the customer's redirect back to your app.",
        ],
      },
      { type: "h2", text: "Make every step idempotent" },
      {
        type: "p",
        text: "Callbacks can arrive twice, late or out of order, and customers tap \"Pay\" twice. Your system must reach the same result whether a message arrives once or five times.",
      },
      {
        type: "ul",
        items: [
          "Send your own unique payment ID as the reference or idempotency key wherever the provider's API supports it.",
          "Process each callback inside a database transaction that checks the current status before changing it.",
          "Verify every callback with the signature or verification method the provider documents, and check that amount and currency match the order.",
        ],
      },
      { type: "h2", text: "Always have a status check" },
      {
        type: "p",
        text: "Never rely on callbacks alone. A scheduled job should query the provider's transaction status endpoint for payments that have stayed pending longer than expected, and resolve them either way. This catches callbacks lost to downtime or network failures.",
      },
      {
        type: "table",
        title: "Payment states to model",
        columns: ["State", "Meaning", "What the customer sees"],
        rows: [
          ["Pending", "Request sent, awaiting approval", "\"Approve on your phone\""],
          ["Succeeded", "Confirmed by callback or status check", "Receipt and confirmation"],
          ["Failed or expired", "Declined, timed out or insufficient balance", "Clear reason and a retry option"],
          ["Refunded", "Money returned after success", "Refund confirmation"],
        ],
      },
      { type: "h2", text: "Reconcile every day" },
      {
        type: "p",
        text: "Fetch the provider's settlement report and match it against your own records daily. Mismatches are uncommon, but when they happen you want to find them within a day, not at the end of the quarter. Automate the matching and alert a person only when something differs.",
      },
      { type: "h2", text: "Design for the customer's phone" },
      {
        type: "p",
        text: "Many customers pay from entry-level Android phones on limited data. Keep the payment screen light, explain exactly what will appear on their phone, and show a \"waiting for approval\" state with a timeout and a retry path instead of a frozen screen.",
      },
      {
        type: "faq",
        intro: "Questions we hear when teams add mobile money to a product.",
        items: [
          {
            q: "Should we integrate each wallet directly or use an aggregator?",
            a: "Direct integrations give more control and can lower fees at volume. A payment aggregator gets you several wallets and cards with one integration. Many teams start with an aggregator and add direct integrations later.",
          },
          {
            q: "Do we need a licence to accept mobile money?",
            a: "Merchants usually accept payments through a licensed provider or aggregator under a merchant agreement. Requirements depend on your business model, so confirm with the provider and legal counsel, especially if you hold funds on behalf of others.",
          },
          {
            q: "How do we test without moving real money?",
            a: "Most providers offer a sandbox or test credentials. Combine that with automated tests that replay duplicate, delayed and missing callbacks.",
          },
        ],
      },
    ],
  },
  {
    slug: "amharic-afaan-oromo-ai-assistants",
    title: "Adding Amharic and Afaan Oromo",
    titleHighlight: "to AI Assistants",
    shortTitle: "Ethiopian Languages in AI",
    category: "ai",
    tags: ["AI", "NLP", "Localization"],
    excerpt:
      "Large language models handle Ethiopian languages unevenly. How to evaluate them honestly, handle Ge'ez script and Qubee, and design fallbacks users trust.",
    intro:
      "Amharic and Afaan Oromo are each spoken by tens of millions of people, yet they are still comparatively low-resource languages for AI. Modern language models can read and write both to a degree, but quality varies widely between models and tasks. Serving these users well takes deliberate engineering, not just a translated system prompt.",
    readTime: "7 min",
    date: "October 2026", // TODO(confirm)
    featured: true,
    blocks: [
      { type: "h2", text: "Know the scripts" },
      {
        type: "p",
        text: "Amharic is written in the Ge'ez (Ethiopic) script, an abugida in which each character represents a consonant-vowel combination. Afaan Oromo is written in Qubee, a Latin-based alphabet in which doubled vowels and consonants change meaning. Both affect how text is tokenised, searched and validated.",
      },
      {
        type: "ul",
        items: [
          "Normalise input: several Ethiopic characters share a sound (for example ሀ, ሐ and ኀ, or ሰ and ሠ) and people type them interchangeably, so search should treat them as equivalent.",
          "Expect mixed-language messages. People switch between Amharic, Afaan Oromo and English in one conversation, and sometimes write Amharic in Latin letters.",
          "Check that fonts, input fields and PDF exports render Ethiopic characters correctly on the devices your users actually have.",
        ],
      },
      { type: "h2", text: "Evaluate before you promise" },
      {
        type: "p",
        text: "Do not assume a model that is strong in English is strong in Amharic. Build a small evaluation set from real, anonymised questions in each language, have native speakers grade the answers, and rerun it whenever you change the model or the prompt.",
      },
      {
        type: "table",
        title: "What to measure per language",
        columns: ["Check", "Why it matters", "Who judges"],
        rows: [
          ["Factual accuracy", "Fluent but wrong answers erode trust fastest", "Domain expert"],
          ["Fluency and register", "Literal or archaic phrasing feels foreign", "Native speaker"],
          ["Language consistency", "Replies should stay in the user's language", "Automated check and reviewer"],
          ["Safety behaviour", "Moderation can be weaker outside English", "Reviewer"],
        ],
      },
      { type: "h2", text: "Ground answers in your own content" },
      {
        type: "p",
        text: "Retrieval-augmented generation (RAG) helps a great deal: index your help articles, policies and product data, retrieve the relevant passages and ask the model to answer from them. Keep source documents in the languages you serve where possible, because cross-language retrieval is less reliable, and test your embedding model on Amharic and Afaan Oromo queries specifically.",
      },
      { type: "h2", text: "Design graceful fallbacks" },
      {
        type: "ul",
        items: [
          "Let users choose their language explicitly instead of relying only on automatic detection.",
          "Hand over to a human agent, with the conversation history, when the assistant is unsure.",
          "For high-stakes answers about money, health or legal matters, show the source passage next to the reply.",
        ],
      },
      { type: "h2", text: "Voice is a separate project" },
      {
        type: "p",
        text: "Many users prefer voice notes to typing Ge'ez script on a phone keyboard. Speech recognition and text-to-speech quality for Ethiopian languages differs from text quality, so evaluate it separately with recordings that reflect real accents and background noise.",
      },
      {
        type: "faq",
        intro: "What teams ask before launching an assistant in Ethiopian languages.",
        items: [
          {
            q: "Can we fine-tune a model on our own Amharic data?",
            a: "Yes, but start with prompting and retrieval. Fine-tuning helps with tone and format once you have enough clean, consented examples, and it needs its own evaluation.",
          },
          {
            q: "Is translating through English a good shortcut?",
            a: "It can work as a fallback, but it adds latency and loses names, idioms and nuance. Measure it against direct generation on your evaluation set before relying on it.",
          },
          {
            q: "Where should conversations be stored?",
            a: "Treat them as personal data: decide where they are stored and for how long, and follow Ethiopia's Personal Data Protection Proclamation and any sector rules that apply to you.",
          },
        ],
      },
    ],
  },
  {
    slug: "dedicated-team-vs-fixed-scope-project",
    title: "Dedicated Team or Fixed-Scope Project?",
    titleHighlight: "How to Choose",
    shortTitle: "Choosing an Engagement Model",
    category: "process",
    tags: ["Engagement Models", "Planning", "Delivery"],
    excerpt:
      "Both models work well for the right problem. A plain comparison of budget predictability, flexibility and knowledge retention to help you pick.",
    intro:
      "Before any code is written you have to decide how the work will be bought. In a fixed-scope project a defined deliverable is built for an agreed price. In a dedicated team, engineers work as an extension of your company for an ongoing monthly fee. Neither is better in general; each fits a different kind of problem.",
    readTime: "5 min",
    date: "October 2026", // TODO(confirm)
    featured: true,
    blocks: [
      { type: "h2", text: "When a fixed-scope project fits" },
      {
        type: "ul",
        items: [
          "Requirements are clear and unlikely to change much: a marketing site, an integration with a documented API, a well-specified MVP.",
          "You need a firm budget approved up front, for example for a grant or a tender.",
          "There is a natural end point after which the software mostly runs on its own.",
        ],
      },
      {
        type: "p",
        text: "The trade-off is change. Every significant change of direction goes through a change request, and the vendor prices risk into anything uncertain.",
      },
      { type: "h2", text: "When a dedicated team fits" },
      {
        type: "ul",
        items: [
          "The product will keep evolving based on user feedback.",
          "You want the same engineers to build long-term knowledge of your domain and codebase.",
          "You have, or plan to have, a product owner who sets priorities every sprint.",
        ],
      },
      {
        type: "p",
        text: "The trade-off is that cost follows time, not output. You gain flexibility, and you take on responsibility for prioritising well.",
      },
      {
        type: "table",
        title: "Side by side",
        columns: ["Factor", "Fixed scope", "Dedicated team"],
        rows: [
          ["Budget", "Agreed up front", "Monthly, adjustable"],
          ["Changing requirements", "Change requests", "Re-prioritised each sprint"],
          ["Your time needed", "Mostly at milestones", "Ongoing product ownership"],
          ["Knowledge retention", "Handover at the end", "Builds up in the team"],
          ["Best for", "Well-defined, bounded work", "Evolving products"],
        ],
      },
      { type: "h2", text: "A common hybrid" },
      {
        type: "p",
        text: "Many engagements begin with a short fixed-scope discovery phase of a few weeks to clarify requirements, design the key flows and estimate, then move to a dedicated team for the build. You get a defined first commitment and the freedom to adapt once real users arrive.",
      },
      { type: "h2", text: "Questions to ask any vendor" },
      {
        type: "ul",
        items: [
          "Who exactly will work on my project, and how much of their time is committed?",
          "How are estimates produced, and what happens when they turn out wrong?",
          "Who owns the code and intellectual property, and when does it transfer?",
          "How will we see progress: demos, a staging environment, sprint reports?",
        ],
      },
      {
        type: "faq",
        intro: "Straight answers to the questions buyers ask most often.",
        items: [
          {
            q: "Can we switch models mid-engagement?",
            a: "Usually, yes. Moving from a fixed-scope build to a dedicated team after launch is common, as is ending a team engagement with a fixed-price handover.",
          },
          {
            q: "Which is cheaper?",
            a: "It depends on how stable your requirements are. A fixed price includes a risk margin; a team model avoids it but costs more if priorities keep shifting without focus.",
          },
          {
            q: "Does the time zone matter?",
            a: "Addis Ababa is on GMT+3 (East Africa Time), which overlaps fully with European and Gulf working hours and with part of the US East Coast day, so regular stand-ups and demos are practical in either model.",
          },
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getCategory(id: BlogCategoryId) {
  return blogCategories.find((c) => c.id === id)!;
}
