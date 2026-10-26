import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TechChooseUs } from "@/components/technologies/tech/TechChooseUs";
import { TechCtaBand } from "@/components/technologies/tech/TechCtaBand";
import { TechExpertise } from "@/components/technologies/tech/TechExpertise";
import { TechHero } from "@/components/technologies/tech/TechHero";
import { TechServices } from "@/components/technologies/tech/TechServices";
import { TechSpotlight } from "@/components/technologies/tech/TechSpotlight";
import { TechStackGrid } from "@/components/technologies/tech/TechStackGrid";
import { ContactBand } from "@/components/sections/ContactBand";
import { Faq } from "@/components/sections/Faq";
import { getTechCategory, getTechItem, techCategories } from "@/content/technologies";
import { getCategoryDetail, getTechDetail, techTemplateCopy } from "@/content/technology-details";

type Props = { params: Promise<{ category: string; slug: string }> };

/** Static params + notFound(); opt out of the instant-shell check (same as /case-studies/[slug]). */
export const instant = false;

export function generateStaticParams() {
  return techCategories.flatMap((c) => c.items.map((i) => ({ category: c.id, slug: i.slug })));
}

function load(category: string, slug: string) {
  const cat = getTechCategory(category);
  const item = getTechItem(category, slug);
  const detail = getTechDetail(category, slug);
  const catDetail = getCategoryDetail(category);
  if (!cat || !item || !detail || !catDetail) return null;
  return { cat, item, detail, catDetail };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const data = load(category, slug);
  if (!data) return {};
  return {
    title: `${data.item.name} Development Services`,
    description: data.detail.description,
    alternates: { canonical: `/technologies/${category}/${slug}` },
  };
}

export default async function TechnologyPage({ params }: Props) {
  const { category, slug } = await params;
  const data = load(category, slug);
  if (!data) notFound();
  const { cat, item, detail, catDetail } = data;

  return (
    <>
      <TechHero category={cat} item={item} detail={detail} catDetail={catDetail} />
      <TechServices item={item} detail={detail} />
      <TechCtaBand name={item.name} />
      <TechExpertise detail={catDetail} />
      <TechStackGrid category={cat} current={item.slug} />
      <TechChooseUs name={item.name} detail={catDetail} />
      <TechSpotlight detail={catDetail} />
      <Faq title="" highlight={`${item.name} FAQs`} description={techTemplateCopy.faqDescription} items={catDetail.faqs} />
      <ContactBand />
    </>
  );
}
