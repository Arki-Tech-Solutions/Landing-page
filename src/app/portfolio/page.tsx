import type { Metadata } from "next";
import { pageMeta } from "@/content/seo";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { portfolioCopy } from "@/content/portfolio";

export const metadata: Metadata = pageMeta({
  path: "/portfolio",
  title: "Portfolio: Software We've Built in Ethiopia",
  description: portfolioCopy.intro,
});

export default function Portfolio() {
  return <PortfolioPage />;
}
