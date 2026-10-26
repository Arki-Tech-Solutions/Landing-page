import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubcategoryPage } from "@/components/services/SubcategoryPage";
import { getSubcategory, serviceGroups } from "@/content/services";

export function generateStaticParams() {
  return serviceGroups.flatMap((g) => g.subcategories.map((s) => ({ category: g.id, sub: s.id })));
}

export async function generateMetadata({ params }: PageProps<"/services/[category]/[sub]">): Promise<Metadata> {
  const { category, sub } = await params;
  const found = getSubcategory(category, sub);
  if (!found) return {};
  return { title: found.sub.label, description: found.sub.description };
}

export default async function ServiceSubcategoryPage({ params }: PageProps<"/services/[category]/[sub]">) {
  const { category, sub } = await params;
  const found = getSubcategory(category, sub);
  if (!found) notFound();
  return <SubcategoryPage group={found.group} sub={found.sub} />;
}
