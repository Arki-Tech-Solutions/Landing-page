import type { Metadata } from "next";
import { notFound } from "next/navigation";
// Previous mereb-style sections, kept for reference:
// import { DeliveryPath, OfferingAudience, OfferingChallenges, OfferingCta, OfferingHero, OfferingOutcomes,
//   OfferingStack } from "@/components/industries/OfferingSections";
// import { ContactBand } from "@/components/sections/ContactBand";
import { HomeContact } from "@/components/home/HomeContact";
import {
  OfferingAudiences,
  OfferingBeforeAfter,
  OfferingSiblings,
  OfferingSteps,
  OfferingStoryHero,
} from "@/components/industries/OfferingStory";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOffering, getOfferings, offeringStory } from "@/content/industries";
import { pageMeta } from "@/content/seo";
import { serviceSchema } from "@/content/structured-data";

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
  return pageMeta({ path: menu.href, title: `${menu.label}: ${offering.industry.menu.label}`, description: menu.description ?? offering.content.intro });
}

export default async function OfferingPage({ params }: PageProps<"/industries/[industry]/[offering]">) {
  "use cache";
  const { industry, offering: slug } = await params;
  const offering = getOffering(industry, slug);
  if (!offering) notFound();

  return (
    <>
      {/* Before → after: hero (light) → today vs. with Arki (dark) → how we build it (light)
          → who it's for (dark) → FAQ → more in this industry → contact card. */}
      <JsonLd
        data={serviceSchema({ name: offering.menu.label, description: offering.menu.description ?? offering.content.intro, path: offering.menu.href, serviceType: offering.industry.menu.label })}
      />
      <OfferingStoryHero offering={offering} />
      <OfferingBeforeAfter offering={offering} />
      <OfferingSteps offering={offering} />
      <OfferingAudiences offering={offering} />
      <Faq
        title={offeringStory.faqTitle}
        highlight={offeringStory.faqHighlight}
        highlightFirst={false}
        description={offeringStory.faqDescription}
        items={offering.content.faqs}
      />
      <OfferingSiblings offering={offering} />
      <HomeContact />

      {/* Previous sections, hidden:
          <OfferingHero /> <OfferingChallenges /> <OfferingOutcomes /> <OfferingStack /> <DeliveryPath />
          <OfferingAudience /> <OfferingCta /> <Faq … /> <ContactBand /> */}
    </>
  );
}
