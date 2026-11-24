import type { Metadata } from "next";
import { pageMeta } from "@/content/seo";
// Previous mereb-style sections, kept for reference:
// import { CustomerBenefits, LeanAgile, Outcomes, ProcessHero, ScrumEvents, SprintLifecycle } from "@/components/company/ProcessSections";
// import { ContactBand } from "@/components/sections/ContactBand";
import { ProcessHero, ProcessQuality, ProcessSteps, ProcessWeek } from "@/components/company/story/Process";
import { HomeContact } from "@/components/home/HomeContact";
import { Faq } from "@/components/sections/Faq";
import { howWeWork } from "@/content/company-story";

export const metadata: Metadata = pageMeta({
  path: "/process",
  title: "How We Work",
  description: "How Arki Tech Solutions runs a project: discovery call on day 1, a written plan in week 1, kickoff in week 2, a working demo every week, then launch and support.",
});

export default function ProcessPage() {
  const f = howWeWork.faq;
  return (
    <>
      {/* hero (light) → five steps (dark) → a normal week (light) → quality (dark) → FAQ → contact */}
      <ProcessHero />
      <ProcessSteps />
      <ProcessWeek />
      <ProcessQuality />
      <Faq title={f.title} highlight={f.highlight} highlightFirst={false} description={f.text} items={f.items} />
      <HomeContact />

      {/* Previous sections, hidden:
          <ProcessHero /> <LeanAgile /> <ScrumEvents /> <SprintLifecycle /> <CustomerBenefits /> <Outcomes /> <ContactBand /> */}
    </>
  );
}
