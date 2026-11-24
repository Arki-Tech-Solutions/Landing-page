import type { Metadata } from "next";
// Previous mereb-style sections, kept for reference:
// import { CommercialAlignment, EngagementCompare, EngagementHero, EngagementModels, EngagementServices, EngagementSteps }
//   from "@/components/company/EngagementSections";
// import { ContactBand } from "@/components/sections/ContactBand";
import { WaysHero, WaysModels, WaysPick, WaysSame } from "@/components/company/story/Engagement";
import { HomeContact } from "@/components/home/HomeContact";
import { Faq } from "@/components/sections/Faq";
import { ways } from "@/content/company-story";

export const metadata: Metadata = {
  title: "Ways to Work With Us",
  description:
    "Work with Arki Tech Solutions as a fixed-price project, a dedicated team, or engineers who join your team. Written terms, weekly demos and your IP protected in every model.",
};

export default function EngagementModelPage() {
  const f = ways.faq;
  return (
    <>
      {/* hero (light) → the three models (dark) → which fits (light) → what never changes (dark) → FAQ → contact */}
      <WaysHero />
      <WaysModels />
      <WaysPick />
      <WaysSame />
      <Faq title={f.title} highlight={f.highlight} highlightFirst={false} description={f.text} items={f.items} />
      <HomeContact />

      {/* Previous sections, hidden:
          <EngagementHero /> <EngagementModels /> <EngagementCompare /> <EngagementSteps /> <CommercialAlignment />
          <EngagementServices /> <ContactBand /> */}
    </>
  );
}
