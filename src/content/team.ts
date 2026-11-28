/**
 * Arki team members, shown in the home "Meet the team" section.
 *
 * To add a photo: put the image in public/team/ (e.g. public/team/habib.jpg, portrait,
 * about 800×1000) and set `photo: "/team/habib.jpg"`. Until then the card shows initials.
 * `linkedin` is optional; the icon only appears when it is set.
 */
export type TeamMember = {
  name: string;
  role: string;
  /** One short sentence about what they do. */
  bio?: string;
  /** A few core skills, shown as small tags (keep it to about 4–5). */
  skills?: string[];
  photo?: string;
  linkedin?: string;
  /** "founder" cards form the first row; "team" cards the row below it. */
  group: "founder" | "team";
};

export const teamIntro = {
  eyebrow: "Our team",
  title: "The people",
  highlight: "behind Arki",
  description: "A small team of engineers and specialists who look closely at the problem and stay with it until it's solved.",
  foundersLabel: "Founders",
  teamLabel: "Team",
};

// TODO(confirm): suggested titles, bios and skills for now; each person should check theirs.
export const team: TeamMember[] = [
  {
    name: "Jabir Esmael",
    role: "Chief Executive Officer",
    bio: "Founder and full-stack engineer. Sets Arki's direction, leads client partnerships, and still writes code on the systems we ship.",
    skills: ["Business strategy", "Client partnerships", "Product vision", "Full-stack engineering", "Enterprise systems"],
    photo: "/team/jabir.jpg",
    group: "founder",
  },
  {
    name: "Firomsa Abrahim",
    role: "Deputy CEO & Head of AI Automation",
    bio: "Runs day-to-day operations and leads our AI practice, building automation that removes repetitive work.",
    skills: ["Operations", "AI agents & LLMs", "Workflow automation", "Python", "API integrations"],
    photo: "/team/firomsa.jpg",
    group: "founder",
  },
  {
    name: "Habib Gemmechu",
    role: "Chief Technology Officer",
    bio: "Owns the technical direction, from architecture and infrastructure to engineering standards.",
    skills: ["Software architecture", "System design", "Cloud (AWS)", "Security", "Engineering leadership"],
    photo: "/team/habib.jpg",
    group: "founder",
  },
  {
    name: "Felmeta Muktar",
    role: "Project Manager & Lead Full-Stack Engineer",
    bio: "Plans and ships products end to end, keeping projects on scope, on time and clearly communicated.",
    skills: ["Agile & Scrum", "Delivery management", "React & Next.js", "Node.js", "Flutter"],
    photo: "/team/felmeta.jpg",
    group: "founder",
  },
  {
    name: "Liban A. Nura",
    role: "AI Research Engineer",
    bio: "Turns AI research into working products, from deep learning on muscle signals and medical images to vision-language models and fintech platforms.",
    skills: ["Deep learning", "Computer vision", "Vision-language models", "Django & Next.js", "Solution architecture"],
    photo: "/team/liban.jpg",
    linkedin: "https://www.linkedin.com/in/liban-abduba/",
    group: "team",
  },
  {
    name: "Endale Yohannes",
    role: "Generative AI & Backend Lead",
    bio: "Builds LLM products for production: RAG systems, AI agents and data pipelines over hundreds of millions of rows, deployed on AWS.",
    skills: ["RAG & LLMs", "Python & FastAPI", "Vector databases", "AWS & DevOps", "Data pipelines"],
    photo: "/team/endale.jpg",
    linkedin: "https://www.linkedin.com/in/endale-yohannes-469ab8230/",
    group: "team",
  },
  {
    name: "Henok Yisma",
    role: "Legal & Compliance Lead",
    bio: "Keeps our work on solid legal ground: contracts and NDAs, IP, data protection and the paperwork behind public-sector projects.",
    skills: ["Contracts & NDAs", "Data protection", "Intellectual property", "Public procurement", "Legal research"],
    photo: "/team/henok.jpg",
    linkedin: "https://www.linkedin.com/in/henok-yisma-ay/",
    group: "team",
  },
];
