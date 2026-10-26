import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CaseSnapshot,
  ClientLogos,
  IndustryCapabilities,
  IndustryConsultBand,
  IndustryHero,
  IndustryStats,
  LeanAgileMethod,
  NicheSolutions,
  WhyChooseUs,
} from "@/components/industries/IndustrySections";
import { ContactBand } from "@/components/sections/ContactBand";
import { Faq } from "@/components/sections/Faq";
import { getIndustries, getIndustry, industryTemplate } from "@/content/industries";

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
  return {
    title: menu.label,
    description: content.heroDescription,
    alternates: { canonical: menu.href },
    openGraph: { title: `${content.heroHighlight} ${content.heroTitle}`, description: content.heroDescription },
  };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[industry]">) {
  "use cache";
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <IndustryHero industry={industry} />
      <IndustryCapabilities industry={industry} />
      <IndustryConsultBand industry={industry} />
      <NicheSolutions industry={industry} />
      <IndustryStats />
      <CaseSnapshot industry={industry} />
      <LeanAgileMethod />
      <ClientLogos />
      <WhyChooseUs industry={industry} />
      <Faq title="FAQs" highlight={industry.menu.label} description={industryTemplate.faqDescription} items={industry.content.faqs} />
      <ContactBand />
    </>
  );
}
