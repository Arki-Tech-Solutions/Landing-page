import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ItemPage } from "@/components/services/ItemPage";
import { getItem, serviceGroups } from "@/content/services";

export function generateStaticParams() {
  return serviceGroups.flatMap((g) => g.subcategories.flatMap((s) => s.items.map((i) => ({ category: g.id, sub: s.id, item: i.slug }))));
}

export async function generateMetadata({ params }: PageProps<"/services/[category]/[sub]/[item]">): Promise<Metadata> {
  const { category, sub, item } = await params;
  const found = getItem(category, sub, item);
  if (!found) return {};
  return { title: found.item.label, description: found.item.description };
}

export default async function ServiceItemPage({ params }: PageProps<"/services/[category]/[sub]/[item]">) {
  const { category, sub, item } = await params;
  const found = getItem(category, sub, item);
  if (!found) notFound();
  return <ItemPage group={found.group} sub={found.sub} item={found.item} />;
}
