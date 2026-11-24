/**
 * /llms.txt: a short, factual summary of Arki for AI assistants (https://llmstxt.org).
 * Built from the same content as the pages, so it never drifts from the site.
 */
import { isHidden } from "@/content/hidden";
import { getIndustries } from "@/content/industries";
import { kindLabels, projects } from "@/content/portfolio";
import { absoluteUrl } from "@/content/seo";
import { landings } from "@/content/services";
import { site } from "@/content/site";
import { team } from "@/content/team";

const link = (label: string, path: string, note?: string) => `- [${label}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;

function body(): string {
  const services = landings.filter((l) => !isHidden(`/services/${l.slug}`));
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.legalName} is a software and AI engineering company in ${site.address.street}, ${site.address.city}, ${site.address.countryName}. It builds custom software, ERP and business systems, AI features and cloud infrastructure for organisations in Ethiopia and for clients worldwide, and runs its own software products.`,
    "",
    "Key facts:",
    `- Legally registered in Ethiopia as ${site.legalName}; headquarters and engineering in ${site.address.city}.`,
    `- The name "Arki" means "${site.nameMeaning.oromo.split(",")[0]}" in Afaan Oromo and "${site.nameMeaning.amharic}" in Amharic.`,
    "- Works in English, Amharic and Afaan Oromo; builds software with Amharic/Afaan Oromo interfaces, Ethiopian e-invoicing (Ministry of Revenues) and local payments (Telebirr, Chapa).",
    "- Engagements: fixed-scope projects, dedicated teams, or engineers who join a client's team. Clients own their code and IP.",
    `- Team: ${team.map((m) => `${m.name} (${m.role})`).join("; ")}.`,
    `- Contact: ${site.emails.contact}, ${site.phone}, ${absoluteUrl(site.bookingHref)}`,
    "",
    "## Services",
    ...services.map((l) => link(l.crumb, `/services/${l.slug}`, l.description)),
    "",
    "## Industries",
    ...getIndustries().map((i) => link(i.menu.label, i.menu.href, i.content.heroDescription)),
    "",
    "## Portfolio",
    ...projects.map((p) =>
      link(p.name, `/portfolio/${p.slug}`, `${kindLabels[p.kind]}, ${p.sector}, ${p.period}${p.client ? `, for ${p.client}` : ""}. ${p.summary}`),
    ),
    "",
    "## Company",
    link("Our story", "/ourstories"),
    link("Why Arki", "/why-arki"),
    link("How we work", "/process"),
    link("Ways to work with us", "/engagement-model"),
    link("Book a meeting", "/schedule-meeting"),
    "",
    "## Optional",
    link("Sitemap", "/sitemap.xml"),
    link("Privacy policy", "/privacy-policy"),
    "",
  ];
  return lines.join("\n");
}

export function GET() {
  return new Response(body(), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
