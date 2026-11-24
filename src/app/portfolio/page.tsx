import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { portfolioCopy } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: portfolioCopy.intro,
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return <PortfolioPage />;
}
