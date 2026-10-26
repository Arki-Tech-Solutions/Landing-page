/* eslint-disable @next/next/no-img-element -- small SVG brand mark */
import { Check } from "lucide-react";
import { site } from "@/content/site";

/** Round badge at the end of an outcome row: brand mark at rest, white check on hover (needs a `group` parent). */
export function VerifiedMark() {
  return (
    <div className="hidden sm:flex relative h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 group-hover:bg-primary border border-slate-100 group-hover:border-primary transition-all duration-500">
      <img src={site.logo.mark} alt="" className="absolute w-4 h-4 transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-50" />
      <Check className="absolute w-4 h-4 text-white transition-all duration-500 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100" strokeWidth={3} />
    </div>
  );
}
