import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilitiesBand } from "@/components/technologies/category/CapabilitiesBand";
import { CaseSnapshot } from "@/components/technologies/category/CaseSnapshot";
import { CategoryHero } from "@/components/technologies/category/CategoryHero";
import { ChooseUsGrid } from "@/components/technologies/category/ChooseUsGrid";
import { ExcellenceGrid } from "@/components/technologies/category/ExcellenceGrid";
import { ImpactStats } from "@/components/technologies/category/ImpactStats";
import { Methodology } from "@/components/technologies/category/Methodology";
import { ProjectArchive } from "@/components/technologies/category/ProjectArchive";
import { SolutionsGrid } from "@/components/technologies/category/SolutionsGrid";
import { ToolsGrid } from "@/components/technologies/category/ToolsGrid";
import { ContactBand } from "@/components/sections/ContactBand";
import { Faq } from "@/components/sections/Faq";
import { getTechCategory, techCategories } from "@/content/technologies";
import { getCategoryDetail, techTemplateCopy } from "@/content/technology-details";

type Props = { params: Promise<{ category: string }> };

/** Static params + notFound(); opt out of the instant-shell check (same as /case-studies/[slug]). */
export const instant = false;

export function generateStaticParams() {
  return techCategories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getTechCategory(category);
  const detail = getCategoryDetail(category);
  if (!cat || !detail) return {};
  return {
    title: `${cat.title} Services`,
    description: detail.heroLead,
    alternates: { canonical: `/technologies/${cat.id}` },
  };
}

export default async function TechnologyCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getTechCategory(category);
  const detail = getCategoryDetail(category);
  if (!cat || !detail) notFound();

  return (
    <>
      <CategoryHero category={cat} detail={detail} />
      <ToolsGrid category={cat} />
      <ExcellenceGrid category={cat} detail={detail} />
      <CapabilitiesBand detail={detail} />
      <ProjectArchive detail={detail} />
      <SolutionsGrid category={cat} detail={detail} />
      <ImpactStats stats={detail.stats} />
      <CaseSnapshot category={cat} detail={detail} />
      <Methodology />
      <ChooseUsGrid category={cat} detail={detail} />
      <Faq title="FAQs" highlight={cat.title} highlightFirst description={techTemplateCopy.faqDescription} items={detail.faqs} />
      <ContactBand />
    </>
  );
}
