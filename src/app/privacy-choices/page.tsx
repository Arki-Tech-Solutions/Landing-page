import type { Metadata } from "next";
import { pageMeta } from "@/content/seo";
import { HomeContact } from "@/components/home/HomeContact";
import { LegalHero } from "@/components/legal/LegalHero";
import { PrivacyChoicesPanel } from "@/components/legal/PrivacyChoicesPanel";
import { legalMeta, privacyChoices } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta({
  path: "/privacy-choices",
  title: "Your Privacy Choices",
  description: `Manage your privacy and cookie preferences for the ${site.name} website.`,
});

export default function PrivacyChoicesPage() {
  return (
    <div className="relative bg-white text-black selection:bg-primary/10">
      <LegalHero crumb={privacyChoices.title} title={privacyChoices.title} intro={privacyChoices.heroIntro} version={legalMeta.cookieVersion} />
      <div className="pt-16 lg:pt-20">
        <PrivacyChoicesPanel version={legalMeta.cookieVersion} />
      </div>
      <HomeContact />
    </div>
  );
}
