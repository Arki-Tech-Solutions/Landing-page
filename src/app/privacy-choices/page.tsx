import type { Metadata } from "next";
import { PrivacyChoicesPanel } from "@/components/legal/PrivacyChoicesPanel";
import { ContactBand } from "@/components/sections/ContactBand";
import { legalMeta } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Your Privacy Choices",
  description: `Manage your privacy and cookie preferences for the ${site.name} website.`,
};

export default function PrivacyChoicesPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-40 selection:bg-primary/10 relative font-sans">
      <PrivacyChoicesPanel version={legalMeta.cookieVersion} />
      <div className="bg-black">
        <ContactBand />
      </div>
    </div>
  );
}
