import {
  BellRing, BookOpen, CalendarDays, ClipboardCheck, ClipboardList, Headset, LayoutDashboard, Map, MessagesSquare,
  Smartphone, Sparkles, Store, Truck, type LucideIcon,
} from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { CaseStudy } from "@/content/case-studies";

/** Local icon map for interface tiles (keeps the shared Icon map untouched). */
const screenIcons: Record<string, LucideIcon> = {
  BellRing, BookOpen, CalendarDays, ClipboardCheck, ClipboardList, Headset, LayoutDashboard, Map, MessagesSquare,
  Smartphone, Store, Truck,
};

/**
 * Branded stand-in for an app screenshot: a soft "window" with skeleton UI and
 * the screen's icon. Fills its (relative) parent, so the parent keeps the
 * original image box size. Replace with real screenshots when available.
 */
export function ScreenMock({ icon, label, className = "" }: { icon: string; label: string; className?: string }) {
  const C = screenIcons[icon] ?? Sparkles;
  return (
    <div className={`absolute inset-0 flex items-center justify-center p-3 sm:p-5 ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_60%),radial-gradient(circle_at_80%_85%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent_55%)]" />
      <div className="relative w-full h-full max-w-[560px] rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 overflow-hidden flex flex-col">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 bg-slate-50/80">
          <span className="w-2 h-2 rounded-full bg-slate-200" />
          <span className="w-2 h-2 rounded-full bg-slate-200" />
          <span className="w-2 h-2 rounded-full bg-slate-200" />
          <span className="ml-3 h-2 w-24 rounded-full bg-slate-100" />
        </div>
        <div className="flex-1 flex min-h-0">
          <div className="hidden sm:flex w-1/5 flex-col gap-2 p-3 border-r border-slate-100">
            {[70, 55, 80, 45, 60].map((w, i) => (
              <span key={i} className={`h-1.5 rounded-full ${i === 1 ? "bg-primary/40" : "bg-slate-100"}`} style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-3 p-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-soft border border-primary/15 flex items-center justify-center text-primary">
              <C className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.6} />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-indigo-950/60">{label}</span>
            <div className="w-3/4 grid grid-cols-3 gap-2 mt-1">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-6 sm:h-8 rounded-md bg-slate-50 border border-slate-100" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Small cover tile (hero collage): project icon on a tinted panel with the project title. */
export function CaseTile({ cs }: { cs: CaseStudy }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-3 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--color-primary)_14%,transparent),transparent_65%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--color-accent)_12%,transparent),transparent_60%)]" aria-hidden>
      <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-[8px] sm:border-[10px] border-primary/90 bg-white flex items-center justify-center shadow-lg shadow-primary/20">
        <Icon name={cs.icon} className="w-5 h-5 sm:w-7 sm:h-7 text-primary" strokeWidth={1.7} />
        <span className="absolute -right-1.5 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent ring-2 ring-white" />
      </div>
      <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-indigo-950/60 text-center leading-tight">{cs.title}</span>
    </div>
  );
}
