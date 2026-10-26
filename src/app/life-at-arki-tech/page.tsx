import type { Metadata } from "next";
import { DeskSetups } from "@/components/company/DeskSetups";
import { AlwaysLearning, Careers, Cylinder, FunStuff, InsideArki, LifeHero, OtherSide, Scrapbook, Stories, WhyAddis } from "@/components/company/LifeSections";
import { ContactBand } from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  title: "Life at Arki Tech",
  description: "Culture, learning and teamwork at Arki Tech Solutions in Addis Ababa, plus open roles.",
};

export default function LifeAtArkiPage() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <LifeHero />
      <FunStuff />
      <DeskSetups />
      <OtherSide />
      <Cylinder />
      <Scrapbook />
      <Stories />
      <WhyAddis />
      <InsideArki />
      <AlwaysLearning />
      <Careers />
      <div className="mt-20">
        <ContactBand />
      </div>
    </div>
  );
}
