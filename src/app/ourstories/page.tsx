import type { Metadata } from "next";
import { pageMeta } from "@/content/seo";
// Previous mereb-style sections, kept for reference:
// import { Journey } from "@/components/company/Journey";
// import { MissionVision } from "@/components/company/MissionVision";
// import { StoryBand, StoryHero, StoryPrinciples, StoryStats, StoryTeam, StoryValues } from "@/components/company/OurStorySections";
// import { ContactBand } from "@/components/sections/ContactBand";
import { AboutBeliefs, AboutHero, AboutJourney, AboutName, AboutStory } from "@/components/company/story/About";
import { HomeContact } from "@/components/home/HomeContact";
import { MeetTheTeam } from "@/components/home/MeetTheTeam";

export const metadata: Metadata = pageMeta({
  path: "/ourstories",
  title: "Our Story",
  description: "Arki Tech Solutions PLC is a software and AI engineering company in Addis Ababa, founded by four Addis Ababa University engineers. Our story, our journey and what we believe.",
});

export default function OurStoriesPage() {
  return (
    <>
      {/* hero (light) → the name (dark) → story (light) → journey (dark) → beliefs (light) → team (dark) → contact */}
      <AboutHero />
      <AboutName />
      <AboutStory />
      <AboutJourney />
      <AboutBeliefs />
      <MeetTheTeam theme="dark" />
      <HomeContact />

      {/* Previous sections, hidden:
          <StoryHero /> <StoryBand /> <StoryStats /> <Journey /> <StoryPrinciples /> <StoryValues />
          <MissionVision /> <StoryTeam /> <ContactBand /> */}
    </>
  );
}
