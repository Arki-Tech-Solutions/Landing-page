import type { Metadata } from "next";
import { FeaturedCarousel } from "@/components/case-studies/FeaturedCarousel";
import { IndexHero } from "@/components/case-studies/IndexHero";
import { Methodology } from "@/components/case-studies/Methodology";
import { PortfolioGrid } from "@/components/case-studies/PortfolioGrid";
import { StrategicCta } from "@/components/case-studies/StrategicCta";
import { ContactBand } from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Projects and sample engagements from Arki Tech Solutions: payments, health records, AI in Amharic, marketplaces, education and logistics.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <IndexHero />
      <FeaturedCarousel />
      <PortfolioGrid />
      <Methodology />
      <StrategicCta />
      <ContactBand />
    </main>
  );
}
