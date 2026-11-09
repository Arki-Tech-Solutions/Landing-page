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
};

export const teamIntro = {
  eyebrow: "Our team",
  title: "The people",
  highlight: "behind Arki",
  description: "A small team of engineers who look closely at the problem and stay with it until it's solved.",
};

// TODO(confirm): suggested titles, bios and skills for now; each person should check theirs,
// and add photos and LinkedIn links.
export const team: TeamMember[] = [
  {
    name: "Jabir Esmael",
    role: "Chief Executive Officer",
    bio: "Sets Arki's direction and leads client partnerships, keeping every project tied to real business results.",
    skills: ["Business strategy", "Client partnerships", "Product vision", "Team leadership"],
  },
  {
    name: "Firomsa Abrahim",
    role: "Deputy CEO & Head of AI Automation",
    bio: "Runs day-to-day operations and leads our AI practice, building automation that removes repetitive work.",
    skills: ["Operations", "AI agents & LLMs", "Workflow automation", "Python", "API integrations"],
  },
  {
    name: "Habib Gemmechu",
    role: "Chief Technology Officer",
    bio: "Owns the technical direction, from architecture and infrastructure to engineering standards.",
    skills: ["Software architecture", "System design", "Cloud (AWS)", "Security", "Engineering leadership"],
  },
  {
    name: "Felmeta Muktar",
    role: "Project Manager & Lead Full-Stack Engineer",
    bio: "Plans and ships products end to end, keeping projects on scope, on time and clearly communicated.",
    skills: ["Agile & Scrum", "Delivery management", "React & Next.js", "Node.js", "Flutter"],
  },
];
