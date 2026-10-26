import type { Metadata } from "next";
import {
  CommercialAlignment,
  EngagementCompare,
  EngagementHero,
  EngagementModels,
  EngagementServices,
  EngagementSteps,
} from "@/components/company/EngagementSections";
import { ContactBand } from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  title: "Engagement Model",
  description: "Work with Arki Tech Solutions as embedded engineers, a dedicated team, or a fixed-scope project, with teams onboarded in about 14 days.",
};

export default function EngagementModelPage() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-primary/30 font-sans">
      <EngagementHero />
      <EngagementModels />
      <EngagementCompare />
      <EngagementSteps />
      <CommercialAlignment />
      <EngagementServices />
      <ContactBand />
    </div>
  );
}
