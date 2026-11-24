import type { Metadata } from "next";
// Previous mereb-style sections, kept for reference:
// import { WhyClosing, WhyCompare, WhyHero, WhyOrbit, WhyPillars } from "@/components/company/WhyArkiSections";
// import { ContactBand } from "@/components/sections/ContactBand";
import { WhyFit, WhyHero, WhyPromises, WhyReasons } from "@/components/company/story/Why";
import { HomeContact } from "@/components/home/HomeContact";

export const metadata: Metadata = {
  title: "Why Arki",
  description:
    "Why teams choose Arki Tech Solutions: the engineers who plan your system build and support it, proven on critical systems, built for Ethiopia, with a working demo every week.",
};

export default function WhyArkiPage() {
  return (
    <>
      {/* hero (light) → six reasons (dark) → honest fit (light) → commitments (dark) → contact */}
      <WhyHero />
      <WhyReasons />
      <WhyFit />
      <WhyPromises />
      <HomeContact />

      {/* Previous sections, hidden:
          <WhyHero /> <WhyPillars /> <WhyOrbit /> <WhyCompare /> <WhyClosing /> <ContactBand /> */}
    </>
  );
}
