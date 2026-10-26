import type { Metadata } from "next";
import { Journey } from "@/components/company/Journey";
import { MissionVision } from "@/components/company/MissionVision";
import { StoryBand, StoryHero, StoryPrinciples, StoryStats, StoryTeam, StoryValues } from "@/components/company/OurStorySections";
import { ContactBand } from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How Arki Tech Solutions, a software and AI company in Addis Ababa, came to be, what the name means, and what we believe.",
};

export default function OurStoriesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <StoryHero />
      <StoryBand />
      <StoryStats />
      <Journey />
      <StoryPrinciples />
      <StoryValues />
      <MissionVision />
      <StoryTeam />
      <ContactBand />
    </div>
  );
}
