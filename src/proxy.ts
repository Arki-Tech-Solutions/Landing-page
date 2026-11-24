import { NextResponse, type NextRequest } from "next/server";
import { hideServiceSubPages, isHidden } from "@/content/hidden";
import { knownPaths } from "@/content/known-paths";
import { serviceGroups } from "@/content/services";

const notFound = (request: NextRequest) => NextResponse.rewrite(new URL("/__not-found", request.url));

/**
 * Hidden pages (content/hidden.ts) are answered with a real 404, and hidden service
 * subcategory and item pages redirect to their group's main service page. Unknown slugs in the dynamic sections are
 * rewritten to a path no route matches, so Next.js serves its not-found page with a real
 * 404 status. Section index paths (/blog, /case-studies) are static pages and pass through.
 */
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/+$/, "");
  if (isHidden(path)) return notFound(request);

  const segments = path.split("/").filter(Boolean);
  if (hideServiceSubPages && segments[0] === "services" && segments.length >= 3) {
    const landing = serviceGroups.find((g) => g.id === segments[1])?.landing;
    if (landing) return NextResponse.redirect(new URL(`/services/${landing}`, request.url));
  }

  if (segments.length < 2 || knownPaths.has(path)) return NextResponse.next();
  return notFound(request);
}

export const config = {
  matcher: [
    "/blog/:path*",
    "/case-studies/:path*",
    "/industries/:path+",
    "/portfolio/:path+",
    "/services/:path+",
    "/technologies/:path*",
    "/all-clients",
    "/all-testimonials",
    "/life-at-arki-tech",
  ],
};
