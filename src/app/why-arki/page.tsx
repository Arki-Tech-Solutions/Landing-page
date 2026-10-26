import type { Metadata } from "next";
import { WhyClosing, WhyCompare, WhyHero, WhyOrbit, WhyPillars } from "@/components/company/WhyArkiSections";
import { ContactBand } from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  title: "Why Arki",
  description: "Why product teams choose Arki Tech Solutions: senior-led engineering, clear governance, quality you can see, and teams onboarded in about 14 days.",
};

export default function WhyArkiPage() {
  return (
    <>
      <div className="flex-1">
        <WhyHero />
        <WhyPillars />
        <WhyOrbit />
        <WhyCompare />
        <WhyClosing />
      </div>
      <ContactBand />
    </>
  );
}
