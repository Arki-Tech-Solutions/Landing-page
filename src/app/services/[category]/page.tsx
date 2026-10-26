import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { CategoryPage } from "@/components/services/CategoryPage";
import { getLanding, landingRedirects, landings } from "@/content/services";

export function generateStaticParams() {
  return [...landings.map((l) => ({ category: l.slug })), ...Object.keys(landingRedirects).map((category) => ({ category }))];
}

export async function generateMetadata({ params }: PageProps<"/services/[category]">): Promise<Metadata> {
  const { category } = await params;
  const l = getLanding(category);
  if (!l) return {};
  return { title: l.crumb, description: l.description };
}

export default async function ServiceLandingPage({ params }: PageProps<"/services/[category]">) {
  const { category } = await params;
  const target = landingRedirects[category];
  if (target) redirect(target);
  const landing = getLanding(category);
  if (!landing) notFound();
  return <CategoryPage landing={landing} />;
}
