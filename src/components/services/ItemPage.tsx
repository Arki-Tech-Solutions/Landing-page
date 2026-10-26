import type { ServiceGroup, ServiceItem, ServiceSubcategory } from "@/content/services";
import type { Crumb } from "./Breadcrumb";
import { ItemDelivery } from "./ItemDelivery";
import { ItemHiring } from "./ItemHiring";
import { ItemTransition } from "./ItemTransition";

export type ItemProps = { group: ServiceGroup; sub: ServiceSubcategory; item: ServiceItem };

/** /services/<group>/<sub>/<item> — picks the layout for the group's variant. */
export function ItemPage(props: ItemProps) {
  const { group, sub, item } = props;
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Services" },
    { label: group.label, href: `/services/${group.id}` },
    { label: sub.label, href: sub.href },
    { label: item.label },
  ];
  if (group.variant === "delivery") return <ItemDelivery {...props} crumbs={crumbs} />;
  if (group.variant === "hiring") return <ItemHiring {...props} crumbs={crumbs} />;
  return <ItemTransition {...props} crumbs={crumbs} />;
}
