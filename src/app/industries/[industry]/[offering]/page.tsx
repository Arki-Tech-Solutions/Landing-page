import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DeliveryPath,
  OfferingAudience,
  OfferingChallenges,
  OfferingCta,
  OfferingHero,
  OfferingOutcomes,
  OfferingStack,
} from "@/components/industries/OfferingSections";
import { ContactBand } from "@/components/sections/ContactBand";
import { Faq } from "@/components/sections/Faq";
import { getOffering, getOfferings, offeringTemplate } from "@/content/industries";

/** All params are prerendered via generateStaticParams; unknown slugs must block to return a real 404. */
export const instant = false;

export function generateStaticParams() {
  return getOfferings().map((o) => ({ industry: o.industry.slug, offering: o.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[industry]/[offering]">): Promise<Metadata> {
  "use cache";
  const { industry, offering: slug } = await params;
  const offering = getOffering(industry, slug);
  if (!offering) return {};
  const { menu } = offering;
  return {
    title: `${menu.label} | ${offering.industry.menu.label}`,
    description: menu.description,
    alternates: { canonical: menu.href },
    openGraph: { title: menu.label, description: offering.content.intro },
  };
}

export default async function OfferingPage({ params }: PageProps<"/industries/[industry]/[offering]">) {
  "use cache";
  const { industry, offering: slug } = await params;
  const offering = getOffering(industry, slug);
  if (!offering) notFound();

  // FAQ title: first two words highlighted, as the reference does ("AI Fraud" + "Detection FAQs").
  const words = offering.menu.label.split(" ");
  const highlight = words.slice(0, 2).join(" ");
  const rest = [...words.slice(2), "FAQs"].join(" ");

  return (
    <>
      <OfferingHero offering={offering} />
      <OfferingChallenges offering={offering} />
      <OfferingOutcomes offering={offering} />
      <OfferingStack offering={offering} />
      <DeliveryPath offering={offering} />
      <OfferingAudience offering={offering} />
      <OfferingCta offering={offering} />
      <Faq title={rest} highlight={highlight} description={offeringTemplate.faqDescription} items={offering.content.faqs} />
      <ContactBand />
    </>
  );
}
