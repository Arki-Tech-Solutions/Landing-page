import { headerIndustryIds, industryMenu } from "@/content/navigation";

/** Industries as listed in the header (filtered, with the shorter menu labels). */
export const headerIndustries = industryMenu
  .filter((c) => headerIndustryIds.includes(c.id))
  .map((c) => ({ ...c, label: c.menuLabel ?? c.label }));

export const techHref = (categoryId: string, slug?: string) =>
  slug ? `/technologies/${categoryId}/${slug}` : `/technologies/${categoryId}`;
