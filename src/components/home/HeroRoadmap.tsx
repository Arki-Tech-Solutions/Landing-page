import { CalendarCheck, Check } from "lucide-react";

/**
 * Hero artwork: one calm card showing how an Arki project runs, from understanding the
 * problem to running the product, with the current step highlighted. The timings are
 * illustrative, not a commitment. Motion is limited to a soft pulse and the progress bar
 * filling once; both stop for visitors who prefer reduced motion.
 */

const steps = [
  { title: "Discover", text: "Understand the problem", meta: "Week 1", state: "done" },
  { title: "Design", text: "Agree on what matters", meta: "Week 2", state: "done" },
  { title: "Build", text: "Ship in short sprints", meta: "Sprint 3 of 6", state: "current" },
  { title: "Launch & run", text: "Monitor and improve", meta: "Next", state: "next" },
] as const;

export function HeroRoadmap() {
  return (
    <div className="relative w-full max-w-[500px]" aria-hidden>
      <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_30px_70px_-30px_rgba(15,36,25,0.35)] sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-bold text-ink">Your project with Arki</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-[12px] font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            On track
          </span>
        </div>

        <ol className="mt-7">
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={s.title} className="relative flex gap-4 pb-7 last:pb-0">
                {!last ? (
                  <span
                    className={`absolute left-[13px] top-8 bottom-1 w-px ${s.state === "done" ? "bg-primary" : "bg-border"}`}
                  />
                ) : null}

                {s.state === "done" ? (
                  <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                ) : s.state === "current" ? (
                  <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-primary/25 animate-ping-slow" />
                    <span className="relative h-7 w-7 rounded-full border-[7px] border-primary bg-white" />
                  </span>
                ) : (
                  <span className="relative z-10 h-7 w-7 shrink-0 rounded-full border-2 border-border bg-white" />
                )}

                <div className={`flex-1 ${s.state === "current" ? "-mt-1 rounded-2xl bg-surface/70 p-4" : ""}`}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className={`text-[15px] font-bold ${s.state === "next" ? "text-muted" : "text-ink"}`}>{s.title}</p>
                    <p className={`text-[12px] font-semibold ${s.state === "current" ? "text-primary" : "text-muted"}`}>{s.meta}</p>
                  </div>
                  <p className="mt-0.5 text-[13px] text-muted">{s.text}</p>
                  {s.state === "current" ? (
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
                      <div className="h-full w-1/2 rounded-full bg-primary animate-fill-bar" />
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-7 flex items-center gap-3 border-t border-border pt-5 text-[13px] text-muted">
          <CalendarCheck className="h-4 w-4 text-primary" />
          <span>
            <span className="font-semibold text-ink">Weekly demo</span> · see working software every Friday
          </span>
        </div>
      </div>
    </div>
  );
}
