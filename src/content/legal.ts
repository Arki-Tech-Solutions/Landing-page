/**
 * Legal copy: Privacy Policy, Cookie Policy, Your Privacy Choices, cookie banner.
 *
 * IMPORTANT, TODO(confirm): this text is a good-faith draft written for Arki Tech Solutions.
 * It is NOT legal advice. A qualified lawyer familiar with Ethiopia's Personal Data Protection
 * Proclamation No. 1321/2024 (and any law that applies to clients abroad) must review and
 * approve it before the site is published. Update `lastUpdated` and `version` on every change.
 */
import { site } from "@/content/site";

export const legalMeta = {
  lastUpdated: "TODO: date of legal review", // TODO(confirm): set when the lawyer signs off
  privacyVersion: "1.0",
  cookieVersion: "1.0",
  lawName: "Personal Data Protection Proclamation No. 1321/2024",
  /** Where postal requests go. */
  address: "Addis Ababa, Ethiopia", // TODO(confirm): registered office address
};

/* ------------------------------------------------------------------ */
/* Cookie consent (banner, preferences modal, inventory)              */
/* ------------------------------------------------------------------ */

export const cookieBanner = {
  message:
    "We use a small amount of browser storage to remember your privacy choices, and we would only use analytics with your permission. Choose \"Accept All\" to allow optional analytics, or \"Accept Essentials\" to keep only what the site needs. Learn more in our",
  policyLink: "Cookie Policy",
  acceptEssentials: "Accept Essentials",
  acceptAll: "Accept All",
};

export const cookiePreferences = {
  title: "Cookie Preferences",
  intro: "Choose which optional technologies this site may use in this browser.",
  alwaysActive: "Always Active",
  inventory: "Cookie Inventory",
  cancel: "Cancel",
  save: "Save Preferences",
};

export type CookieItem = { name: string; category: string; provider: string; purpose: string; duration: string; expiry: string };

/**
 * TODO(confirm): the site currently sets no analytics cookies. If an analytics or performance
 * tool is added, list each cookie here, load the tool only when `preferences.analytics` is true,
 * and update the Cookie Policy text.
 */
export const cookieCategories: {
  id: "necessary" | "analytics";
  title: string;
  description: string;
  cookies: CookieItem[];
}[] = [
  {
    id: "necessary",
    title: "Strictly Necessary",
    description:
      "Needed for the site to work and to remember the privacy choice you make here. These cannot be switched off.",
    cookies: [
      {
        name: "arki_consent",
        category: "Necessary",
        provider: site.shortName,
        purpose: "Stores your cookie and privacy choices in this browser (local storage).",
        duration: "1 year",
        expiry: "1 year",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Performance",
    description:
      "Would help us understand, in aggregate, which pages are useful and how fast they load. No analytics tool is active today; this switch records your choice in case one is added.",
    cookies: [
      {
        name: "None in use",
        category: "Analytics",
        provider: "—",
        purpose: "No analytics or performance cookies are currently set.",
        duration: "—",
        expiry: "—",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Privacy Policy                                                     */
/* ------------------------------------------------------------------ */

export const privacyPolicy = {
  title: "Privacy Policy",
  subtitle: "How we collect, use and protect your personal data",
  toc: [
    { id: "introduction", label: "Introduction" },
    { id: "data-collection", label: "Data Collection" },
    { id: "types-of-data", label: "Types of Data" },
    { id: "use-of-data", label: "Use of Data" },
    { id: "third-party-services", label: "Third-Party Services" },
    { id: "user-rights", label: "Your Rights" },
    { id: "security-measures", label: "Security & Retention" },
    { id: "contact-information", label: "Contact Us" },
  ],
  introTitle: `About this privacy policy`,
  intro: [
    `This policy explains how ${site.legalName} ("${site.shortName}", "we", "us"), a company registered in Ethiopia with its office in Addis Ababa, handles personal data when you visit this website, contact us, or apply to work with us.`,
    `We process personal data in line with Ethiopia's ${legalMeta.lawName} and its implementing rules. Where we work with clients in other countries, we also follow the data protection terms agreed in our contracts with them.`,
  ],
  collection: {
    title: "Data Collection",
    provided: {
      title: "Information you give us",
      lead: "We collect personal data that you choose to share with us, for example when you email us, request a meeting or apply for a role. This can include:",
      items: [
        { label: "Contact details", text: "your name, email address, phone number, company and job title." },
        { label: "Project information", text: "what you tell us about your business needs, timelines and budget." },
        { label: "Applications", text: "your CV, work history and any other information you send when applying to join us." },
      ],
    },
    automatic: {
      title: "Information collected automatically",
      text: "Like most websites, our hosting provider records basic technical data such as IP address, browser type and the pages requested, to deliver the site and keep it secure. We store your privacy choice in your browser. We do not use analytics or advertising cookies; see our",
    },
  },
  types: {
    title: "Types of Data",
    items: [
      { title: "1. Personal data", text: "Information that identifies you, such as your name and contact details. We only ask for what we need to respond to you or to manage a working relationship." },
      { title: "2. Technical data", text: "Server logs and security data generated when you load a page. These are used to operate and protect the site and are not used to build profiles of visitors." },
    ],
  },
  use: {
    title: "How We Use Your Data",
    lead: "We use personal data only for clear, legitimate purposes, including to:",
    items: [
      "reply to your enquiries and arrange the meetings you request;",
      "prepare proposals and deliver services under a contract with you or your organisation;",
      "assess job applications;",
      "keep our website and systems secure; and",
      "meet our legal, tax and regulatory obligations in Ethiopia.",
    ],
    basis:
      "We rely on your consent, the need to take steps before or perform a contract, our legal obligations, or our legitimate interests, as permitted by the Proclamation. We do not sell personal data.",
  },
  thirdParty: {
    title: "Third-Party Services",
    lead: "We use a small number of service providers who process data on our behalf, under contracts that require them to protect it. Some are located outside Ethiopia; where data leaves the country we take the steps the Proclamation requires for cross-border transfers.",
    // TODO(confirm): list the real providers (hosting, email, any scheduler) and their policy links.
    items: [
      { name: "Website hosting", text: "Our hosting provider serves this website and keeps standard server logs for security and reliability.", href: "" },
      { name: "Email", text: "Messages you send us, including meeting requests from this site, are received and stored in our business email service.", href: "" },
    ],
  },
  rights: {
    title: "Your Rights & Controls",
    lead: "Subject to the conditions in the Proclamation, you can ask us to:",
    items: [
      { title: "Access", text: "Tell you whether we hold personal data about you and give you a copy." },
      { title: "Correction & deletion", text: "Correct inaccurate data or delete data we no longer have a reason to keep." },
      { title: "Object & restrict", text: "Stop or limit certain processing, including any direct marketing." },
      { title: "Withdraw consent", text: "Withdraw consent you gave earlier, without affecting processing that already took place." },
    ],
    complaint:
      "If you are unhappy with how we handled your data, please contact us first. You also have the right to complain to the supervisory authority designated under the Proclamation.",
  },
  security: {
    title: "Security & Retention",
    text: "We protect personal data with access controls, encryption in transit and the principle of least privilege. We keep it only as long as needed for the purpose it was collected for, or as long as the law requires (for example, for accounting records), and then delete or anonymise it.",
  },
  contact: {
    title: "Contact Us",
    lead: "To exercise your rights, withdraw consent or ask a question about this policy, contact us at:",
  },
};

/* ------------------------------------------------------------------ */
/* Cookie Policy                                                      */
/* ------------------------------------------------------------------ */

export const cookiePolicy = {
  title: "Cookie policy",
  intro: `This page explains what cookies and similar browser storage are, and the very limited way ${site.shortName} uses them.`,
  tocTitle: "Page contents",
  toc: [
    { id: "what-are-cookies", label: "What are cookies?" },
    { id: "how-use-cookies", label: "How do we use cookies?" },
    { id: "consent-comparison", label: "Consent Comparison" },
    { id: "your-rights", label: "Your Rights" },
    { id: "gpc-policy", label: "Global Privacy Control" },
    { id: "minors", label: "Protection of Minors" },
    { id: "third-party-cookies", label: "Third-party services" },
    { id: "manage-cookies", label: "How can you manage cookies?" },
    { id: "contact-information", label: "Contact Information" },
  ],
  what: {
    paragraphs: [
      "Cookies are small text files that a website places on your device. Similar technologies, such as the browser's local storage, keep small pieces of information in the same way. They let a site remember things between page loads, such as a choice you have made.",
      "Some are set by the site you are visiting (first-party); others are set by outside services the site uses (third-party).",
    ],
    kinds: [
      { title: "Session storage", text: "Temporary data that is deleted when you close the browser tab or window." },
      { title: "Persistent storage", text: "Data that stays on your device until it expires or you delete it, so your choices are remembered on your next visit." },
    ],
  },
  how: {
    lead: "We group the technologies we use into two categories:",
    categories: [
      { title: "Strictly Necessary", icon: "shield" as const, text: "Required for the site to work and to remember your privacy choice. This is the only storage we use today." },
      { title: "Analytics & Performance", icon: "chart" as const, text: "Optional. We do not currently use any analytics or performance tool. If we add one, it will only run after you allow it, and this policy will list its cookies." },
    ],
    tableHeaders: ["Name", "Category", "Provider", "Purpose", "Duration"],
  },
  comparison: {
    lead: "These are the two choices offered in our consent banner:",
    options: [
      {
        id: "essentials",
        label: "Accept Essentials",
        text: "Maximum privacy. Only the storage needed to run the site and remember your choice is used.",
        features: [
          { label: "Core site functionality", included: true },
          { label: "Privacy preferences", included: true },
          { label: "Usage analytics (if added)", included: false },
          { label: "Performance monitoring (if added)", included: false },
        ],
      },
      {
        id: "all",
        label: "Accept All",
        text: "Also allows aggregated, privacy-respecting analytics, if we introduce it, to help us improve the site.",
        features: [
          { label: "Core site functionality", included: true },
          { label: "Privacy preferences", included: true },
          { label: "Usage analytics (if added)", included: true },
          { label: "Performance monitoring (if added)", included: true },
        ],
      },
    ],
  },
  rights: {
    paragraphs: [
      `We apply the same controls to every visitor, wherever they are. Under Ethiopia's ${legalMeta.lawName}, you have rights over your personal data, and many other countries give similar rights.`,
      "We aim to respond to every request without undue delay and within the time limits the law sets.",
    ],
    items: [
      { title: "Right to withdraw consent", text: "Change your mind at any time from the Your Privacy Choices page. Optional technologies stop as soon as you do." },
      { title: "Right of access", text: "Ask us what personal data we hold about you and receive a copy." },
      { title: "Right to correction and erasure", text: "Ask us to correct inaccurate data or to delete data we no longer need." },
      { title: "Right to object", text: "Object to processing based on our legitimate interests, including any direct marketing." },
    ],
  },
  gpc: [
    "Our site detects the Global Privacy Control (GPC) signal that some browsers and extensions send.",
    "If we detect it and you have not made a choice yet, we automatically apply \"Accept Essentials\" and do not show the consent banner.",
  ],
  minors: [
    "This website is meant for businesses and job applicants. It is not directed at children, and we do not knowingly collect personal data from them.",
    "If you believe a child has sent us personal data, please contact us and we will delete it.",
  ],
  thirdParty: {
    paragraphs: [
      "This site does not embed third-party content that sets cookies. Our fonts are served from our own domain, and meeting requests are sent by email rather than through an embedded scheduling tool.",
      // TODO(confirm): update if a scheduler (e.g. Cal.com or Calendly), video embeds or analytics are added.
      "If we add a third-party service in future, such as a scheduling widget, we will list it here with a link to its own policy.",
    ],
    quote: "If you do not interact with third-party content, no third-party cookies are placed on your device.",
  },
  manage: {
    lead: "You can decide whether to accept cookies, both through our preference controls and through your browser.",
    browserTitle: "Browser settings",
    browserText: "Each browser lets you view, block and delete cookies and site data. Instructions for common browsers:",
    browsers: [
      { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
      { label: "Mozilla Firefox", href: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" },
      { label: "Apple Safari", href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
      { label: "Microsoft Edge", href: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
    ],
    cards: [
      { title: "Clearing browsing data", text: "Clearing your browser's cookies and site data removes stored choices for every site, including ours." },
      { title: "Blocking cookies", text: "You can block cookies altogether. Our site will still work, but it will ask for your privacy choice on each visit." },
    ],
    footer: "You can also change your choice for this site at any time on the",
    footerLink: "Your Privacy Choices page",
  },
  contact: {
    paragraphs: [
      "If you have questions about our use of cookies or browser storage, please contact us.",
      "We aim to respond within one business day and to fulfil data requests within the time limits set by law.",
    ],
    cardTitle: "Have questions?",
    cardText: "We are happy to help with any privacy or data request.",
  },
};

/* ------------------------------------------------------------------ */
/* Your Privacy Choices                                               */
/* ------------------------------------------------------------------ */

export const privacyChoices = {
  title: "Your Privacy Choices",
  intro1: `${site.shortName} does not sell your personal data or share it for advertising. The only optional processing on this site is analytics, which is switched off unless you allow it.`,
  intro2: "For more information about how we handle personal data, please read our",
  privacyPolicyLink: "Privacy Policy",
  infoBox:
    "Your choices apply to this browser on this device. If you use another browser or device, or clear your site data, you will be asked again. You can come back and change these settings whenever you like.",
  optOutLabel: "Do Not Allow Optional Analytics",
  optOutDescription:
    "When checked, we will not use any analytics or performance tools in this browser. Uncheck it to allow them. For more detail, open",
  settingsButton: "Privacy & Cookie Settings",
  contactTitle: "Have questions?",
  contactDescription: "Contact us directly for data access, correction or deletion requests.",
  complianceLabel: `${site.shortName} Privacy`,
  confirmModal: {
    title: "Allow optional analytics?",
    description:
      "You previously chose not to allow optional analytics. Select Save to change your choice. You can switch it off again at any time. For more information, see our",
    cancel: "Cancel",
    save: "Save",
  },
};
