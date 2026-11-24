import type { Metadata } from "next";
import { MeetingRequestForm } from "@/components/booking/MeetingRequestForm";
import { Breadcrumb } from "@/components/industries/Breadcrumb";
import { ContourLines } from "@/components/ui/ContourLines";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a Meeting",
  description: `Book a 30-minute discovery call with the engineers at ${site.name}. We reply within one business day.`,
};

export default function ScheduleMeetingPage() {
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <ContourLines />
      {/* The footer now shows on this page too. To hide it again (as before), add: <span data-hide-footer hidden /> */}
      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-8 sm:pb-24 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Book a meeting" }]} />
        <div className="mx-auto mt-10 max-w-[1040px] lg:mt-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_60px_-30px_rgba(15,36,25,0.25)]">
            <div className="p-2 sm:p-3">
              <MeetingRequestForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
