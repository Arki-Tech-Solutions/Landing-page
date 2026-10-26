"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cookieBanner } from "@/content/legal";
import { acceptAll, acceptEssentials, hasGpcSignal, saveConsent, useConsent } from "./consent";

/** First-visit consent card (bottom of the viewport). Appears 1s after load when no valid choice is stored. */
export function CookieBanner() {
  const consent = useConsent();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (consent !== null) return;
    if (hasGpcSignal()) {
      // Honour Global Privacy Control: treat it as "essentials only" without asking.
      saveConsent(false, true);
      return;
    }
    const t = setTimeout(() => setReady(true), 1000);
    return () => clearTimeout(t);
  }, [consent]);

  if (consent !== null || !ready) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6 pointer-events-none">
      <div className="mx-auto max-w-5xl pointer-events-auto">
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="relative overflow-hidden rounded-[24px] bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-[cookie-in_0.5s_ease-out]"
        >
          <style>{`@keyframes cookie-in{from{opacity:0;transform:translateY(2.5rem)}to{opacity:1;transform:none}}`}</style>
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <p className="text-[15px] text-slate-700 leading-relaxed max-w-2xl">
                  {cookieBanner.message}{" "}
                  <Link href="/cookie-policy" className="text-primary hover:underline font-bold underline-offset-4 decoration-primary/30">
                    {cookieBanner.policyLink}
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={acceptEssentials}
                  className="rounded-full border border-primary bg-slate-50 px-6 py-3 text-[14px] font-bold text-primary transition-all hover:bg-slate-100 active:scale-95"
                >
                  {cookieBanner.acceptEssentials}
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full bg-primary px-10 py-3 text-[14px] font-extrabold text-white transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                >
                  {cookieBanner.acceptAll}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
