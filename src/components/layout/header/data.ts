import { headerIndustryIds, industryMenu, serviceMenu } from "@/content/navigation";

/** Service categories as listed in the header: only the picked subcategory (`menuPick`) of each. */
export const headerServices = serviceMenu.map((c) => ({
  ...c,
  subcategories: c.menuPick ? c.subcategories.filter((s) => s.id === c.menuPick) : c.subcategories,
}));

/**
 * Industries as listed in the header: filtered, with the shorter menu labels and icons,
 * and only the picked offerings (`menuPicks`). `moreCount` is how many offerings the
 * industry page lists beyond the picks.
 */
export const headerIndustries = industryMenu
  .filter((c) => headerIndustryIds.includes(c.id))
  .map((c) => {
    const entries = c.menuPicks
      ? c.menuPicks.map((href) => c.entries.find((e) => e.href === href)).filter((e) => e !== undefined)
      : c.entries;
    return { ...c, label: c.menuLabel ?? c.label, icon: c.menuIcon ?? c.icon, entries, moreCount: c.entries.length - entries.length };
  });

export const techHref = (categoryId: string, slug?: string) =>
  slug ? `/technologies/${categoryId}/${slug}` : `/technologies/${categoryId}`;
