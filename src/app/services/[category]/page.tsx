import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
// import { CategoryPage } from "@/components/services/CategoryPage"; // previous template
import { ServicePage } from "@/components/services/ServiceStory";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMeta } from "@/content/seo";
import { getLanding, landingRedirects, landings } from "@/content/services";
import { serviceSchema } from "@/content/structured-data";

/** All params are prerendered via generateStaticParams; unknown slugs must block to return a real 404. */
export const instant = false;

export function generateStaticParams() {
  return [...landings.map((l) => ({ category: l.slug })), ...Object.keys(landingRedirects).map((category) => ({ category }))];
}

export async function generateMetadata({ params }: PageProps<"/services/[category]">): Promise<Metadata> {
  const { category } = await params;
  const l = getLanding(category);
  if (!l) return {};
  return pageMeta({ path: `/services/${l.slug}`, title: `${l.crumb} in Ethiopia`, description: l.description });
}

export default async function ServiceLandingPage({ params }: PageProps<"/services/[category]">) {
  const { category } = await params;
  const target = landingRedirects[category];
  if (target) redirect(target);
  const landing = getLanding(category);
  if (!landing) notFound();
  // Previous mereb-style template: <CategoryPage landing={landing} />
  return (
    <>
      <JsonLd data={serviceSchema({ name: landing.crumb, description: landing.description, path: `/services/${landing.slug}`, serviceType: landing.crumb })} />
      <ServicePage landing={landing} />
    </>
  );
}
