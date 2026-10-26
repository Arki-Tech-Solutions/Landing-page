/* eslint-disable @next/next/no-img-element -- client logos are small static SVG/PNG files */
import { Building2 } from "lucide-react";
import type { Client } from "@/content/clients";

/**
 * A client's logo, or a neutral "Client logo" placeholder box of the same size
 * until real logos are approved (see src/content/clients.ts).
 */
export function ClientLogo({ client, className = "" }: { client: Client; className?: string }) {
  if (client.logo) {
    return <img src={client.logo} alt={client.name} className={`max-w-full max-h-full object-contain ${className}`} />;
  }
  return (
    <div className={`w-full h-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50/60 text-slate-400 ${className}`} aria-label="Client logo placeholder">
      <Building2 className="w-5 h-5 shrink-0" strokeWidth={1.75} aria-hidden />
      <span className="text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">Client logo</span>
    </div>
  );
}
