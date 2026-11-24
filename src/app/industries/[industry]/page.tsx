import type { Metadata } from "next";
import { notFound } from "next/navigation";
// Previous mereb-style sections, kept for reference:
// import { CaseSnapshot, ClientLogos, IndustryCapabilities, IndustryConsultBand, IndustryHero, IndustryStats,
//   LeanAgileMethod, NicheSolutions, WhyChooseUs } from "@/components/industries/IndustrySections";
// import { ContactBand } from "@/components/sections/ContactBand";
import { HomeContact } from "@/components/home/HomeContact";
import {
  IndustryChallenges,
  IndustryDelivery,
  IndustryOfferings,
  IndustryStoryHero,
  IndustryWhy,
} from "@/components/industries/IndustryStory";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { getIndustries, getIndustry, industryTemplate } from "@/content/industries";
import { portfolioCopy, projectsForIndustry } from "@/content/portfolio";
import { pageMeta } from "@/content/seo";
import { serviceSchema } from "@/content/structured-data";

/** All params are prerendered via generateStaticParams; unknown slugs must block to return a real 404. */
export const instant = false;

export function generateStaticParams() {
  return getIndustries().map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[industry]">): Promise<Metadata> {
  "use cache";
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const { menu, content } = industry;
  return pageMeta({ path: menu.href, title: `${menu.label} in Ethiopia`, description: content.heroDescription });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[industry]">) {
  "use cache";
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      {/* Problem → solution: hero (light) → challenge (dark) → what we build (light)
          → how we deliver (dark) → why Arki (light) → FAQ → contact card. */}
      <JsonLd
        data={serviceSchema({ name: industry.menu.label, description: industry.content.heroDescription, path: industry.menu.href, serviceType: "Software development" })}
      />
      <IndustryStoryHero industry={industry} />
      <IndustryChallenges industry={industry} />
      <IndustryOfferings industry={industry} />
      <IndustryDelivery />
      <IndustryWhy industry={industry} />
      <SelectedWork
        projects={projectsForIndustry(industry.slug)}
        className="bg-white border-t border-border"
        eyebrow={portfolioCopy.industryEyebrow}
        title={portfolioCopy.industryTitle}
        highlight={industry.menu.menuLabel ?? industry.menu.label}
        text={portfolioCopy.industryText}
      />
      <Faq bg="bg-white border-t border-border" title="Questions about" highlight={industry.menu.menuLabel ?? industry.menu.label} highlightFirst={false} description={industryTemplate.faqDescription} items={industry.content.faqs} />
      <HomeContact />

      {/* Previous sections, hidden:
          <IndustryHero /> <IndustryCapabilities /> <IndustryConsultBand /> <NicheSolutions /> <IndustryStats />
          <CaseSnapshot /> <LeanAgileMethod /> <ClientLogos /> <WhyChooseUs /> <ContactBand /> */}
    </>
  );
}
