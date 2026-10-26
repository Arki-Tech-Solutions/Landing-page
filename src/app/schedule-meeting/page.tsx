import type { Metadata } from "next";
import Link from "next/link";
import { MeetingRequestForm } from "@/components/booking/MeetingRequestForm";
import { Breadcrumb } from "@/components/proof/Breadcrumb";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Schedule a Meeting",
  description: `Request a 30-minute call with a senior engineer at ${site.name}. We reply within one business day.`,
};

export default function ScheduleMeetingPage() {
  return (
    <div className="min-h-screen pt-16 bg-white pb-8 sm:pb-12 px-3 sm:px-6 flex flex-col items-stretch">
      <Breadcrumb items={[{ label: "Book a 30-min call" }]} />
      <div className="max-w-[1040px] mx-auto w-full">
        <div className="flex justify-center mb-2 sm:mb-4 min-[992px]:mb-6">
          <Link href="/" className="shrink-0" aria-label={`${site.shortName} home`}>
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo */}
            <img src={site.logo.light} alt={site.name} className="h-10 sm:h-11 w-auto" />
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-[0_8px_40px_-12px_rgba(15,23,42,0.15)] border border-slate-200/80 overflow-hidden">
          <div className="p-2 sm:p-3">
            <MeetingRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
