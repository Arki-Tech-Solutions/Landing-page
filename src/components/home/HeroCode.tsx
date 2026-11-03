import { Check } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Hero artwork: a dark code editor with a short, readable function, and a phone screen
 * overlapping its corner showing the result. Says "we build web and mobile" at a glance.
 * Illustrative only. The cursor blink stops for visitors who prefer reduced motion.
 */

/* Token colours for the little bit of syntax highlighting. */
const k = (t: string) => <span className="text-[#f0a37a]">{t}</span>; // keyword (clay light)
const f = (t: string) => <span className="text-primary-light">{t}</span>; // function name
const s = (t: string) => <span className="text-[#e9d79a]">{t}</span>; // string
const p = (t: string) => <span className="text-white/45">{t}</span>; // punctuation / types

const code: ReactNode[] = [
  <>{k("async function")} {f("placeOrder")}{p("(")}cart{p(") {")}</>,
  <>{"  "}{k("const")} order {p("=")} {k("await")} {f("save")}{p("({")}</>,
  <>{"    "}items{p(":")} cart.items{p(",")}</>,
  <>{"    "}total{p(":")} cart.total{p(",")}</>,
  <>{"  "}{p("});")}</>,
  <>{"  "}{k("await")} {f("notify")}{p("(")}{s('"Confirmed"')}{p(");")}</>,
  <>{"  "}{k("return")} order{p(";")}</>,
  <>{p("}")}</>,
];

function Phone() {
  return (
    <div className="w-[190px] rounded-[2.2rem] bg-ink p-2 shadow-[0_30px_60px_-20px_rgba(15,36,25,0.55)] sm:w-[210px]">
      <div className="overflow-hidden rounded-[1.8rem] bg-white">
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-ink/10" />
        <div className="px-5 pb-6 pt-6 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
            <Check className="h-6 w-6" strokeWidth={3} />
          </span>
          <p className="mt-3 text-[15px] font-bold text-ink">Order confirmed</p>
          <p className="text-[11px] text-muted">Order #1024 · today</p>
          <div className="mt-5 space-y-2 text-left text-[12px]">
            {[
              ["Coffee beans, 1kg", "850"],
              ["Delivery", "400"],
            ].map(([item, price]) => (
              <div key={item} className="flex justify-between text-body">
                <span>{item}</span>
                <span>{price}</span>
              </div>
            ))}
            <div className="flex justify-between border-t border-border pt-2 font-bold text-ink">
              <span>Total</span>
              <span>ETB 1,250</span>
            </div>
          </div>
          <div className="mt-5 rounded-full bg-primary py-2 text-[12px] font-bold text-white">Track order</div>
        </div>
      </div>
    </div>
  );
}

export function HeroCode() {
  return (
    <div className="relative w-full max-w-[540px] pb-28 sm:pb-32" aria-hidden>
      <div className="overflow-hidden rounded-2xl sm:mr-[12%] bg-ink shadow-[0_30px_70px_-30px_rgba(15,36,25,0.6)] ring-1 ring-black/5">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 rounded-md bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/70">orders.ts</span>
        </div>
        <pre className="overflow-hidden px-5 py-5 font-mono text-[12.5px] leading-[1.9] text-white/90 sm:text-[13px]">
          {code.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-5 w-4 select-none text-right text-white/25">{i + 1}</span>
              <span className="whitespace-pre">
                {line}
                {i === code.length - 1 ? <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-primary-light animate-pulse" /> : null}
              </span>
            </div>
          ))}
        </pre>
      </div>
      <div className="absolute bottom-0 right-0">
        <Phone />
      </div>
    </div>
  );
}
