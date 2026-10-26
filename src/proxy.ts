import { NextResponse, type NextRequest } from "next/server";
import { knownPaths } from "@/content/known-paths";

/**
 * Unknown slugs in the dynamic sections are rewritten to a path no route
 * matches, so Next.js serves its not-found page with a real 404 status.
 * Section index paths (/blog, /case-studies) are static pages and pass through.
 */
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/+$/, "");
  const depth = path.split("/").length - 1;
  if (depth < 2 || knownPaths.has(path)) return NextResponse.next();
  return NextResponse.rewrite(new URL("/__not-found", request.url));
}

export const config = {
  matcher: ["/blog/:path+", "/case-studies/:path+", "/industries/:path+", "/services/:path+", "/technologies/:path+"],
};
