/**
 * Pages hidden for now. They are left out of the menus, footer and in-page links, and
 * their URLs answer with a 404 (see src/proxy.ts). The page files and content stay in
 * place: remove a path from this list to bring that page back.
 */
export const hiddenPaths = [
  "/blog", // no real posts yet
  "/case-studies", // sample content
  "/all-clients", // sample content
  "/all-testimonials", // sample content
  "/life-at-arki-tech", // also covers Careers (#careers)
  "/technologies", // removed from the menus earlier
  "/industries/gaming-industry-solutions",
  "/industries/fintech-solutions/blockchain-defi-protocols",
  "/industries/fintech-solutions/crypto-wallets",
  "/services/emerging-technologies", // blockchain, AR/VR: not our focus for now
];

/**
 * The service subcategory and item pages (/services/<group>/<sub> and /services/<group>/<sub>/<item>)
 * are hidden too: their URLs redirect to the group's main service page, and the header menus
 * link there instead. Set to false to bring them back.
 */
export const hideServiceSubPages = true;

/** True when `href` is a hidden path or sits under one (query and #hash are ignored). */
export function isHidden(href: string): boolean {
  const path = href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return hiddenPaths.some((p) => path === p || path.startsWith(`${p}/`));
}
