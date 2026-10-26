import type { Metadata } from "next";
import { CustomerBenefits, LeanAgile, Outcomes, ProcessHero, ScrumEvents, SprintLifecycle } from "@/components/company/ProcessSections";
import { ContactBand } from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  title: "Our Process",
  description: "How Arki Tech Solutions delivers software: agile sprints, clear ceremonies, weekly demos and outcomes we measure.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen selection:bg-primary/30 font-sans">
      <ProcessHero />
      <LeanAgile />
      <ScrumEvents />
      <SprintLifecycle />
      <CustomerBenefits />
      <Outcomes />
      <ContactBand />
    </div>
  );
}
