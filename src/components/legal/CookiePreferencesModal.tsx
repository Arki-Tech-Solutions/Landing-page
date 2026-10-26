"use client";

import { useEffect, useState } from "react";
import { ChartColumn, Shield, X } from "lucide-react";
import { cookieCategories, cookiePreferences } from "@/content/legal";
import { saveConsent, useConsent } from "./consent";

/** "Cookie Preferences" dialog with per-category switches and the cookie inventory. */
export function CookiePreferencesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const consent = useConsent();
  const stored = consent && consent !== "unknown" ? consent.preferences.analytics : false;
  const [analytics, setAnalytics] = useState(stored);
  const [lastOpen, setLastOpen] = useState(open);

  // Reset the draft to the stored value each time the dialog opens.
  if (open !== lastOpen) {
    setLastOpen(open);
    if (open) setAnalytics(stored);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const values: Record<string, boolean> = { necessary: true, analytics };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h2 id="cookie-prefs-title" className="text-xl font-bold text-primary">
              {cookiePreferences.title}
            </h2>
            <p className="text-sm text-slate-500 mt-1">{cookiePreferences.intro}</p>
          </div>
          <button onClick={onClose} aria-label="Close cookie preferences" className="p-2 rounded-full hover:bg-slate-50 text-slate-400 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {cookieCategories.map((c) => {
            const on = values[c.id];
            const locked = c.id === "necessary";
            return (
              <div key={c.id} className="p-4 rounded-2xl bg-white border border-slate-100 transition-all hover:border-primary/30 group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="mt-1 p-3 rounded-2xl bg-white text-primary shrink-0 flex items-center justify-center border border-slate-100 shadow-sm">
                      {locked ? <Shield className="w-5 h-5" /> : <ChartColumn className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary flex flex-wrap items-center gap-2">
                        {c.title}
                        {locked ? (
                          <span className="text-[10px] uppercase tracking-widest bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold">
                            {cookiePreferences.alwaysActive}
                          </span>
                        ) : null}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{c.description}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    aria-label={`Toggle ${c.title} cookies`}
                    disabled={locked}
                    onClick={() => !locked && setAnalytics((v) => !v)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                      on ? "bg-primary" : "bg-slate-200"
                    } ${locked ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        on ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <div className="mt-4 border-t border-slate-50 pt-3">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">{cookiePreferences.inventory}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {c.cookies.map((k) => (
                      <div key={k.name} className="text-[11px] text-slate-500 flex justify-between gap-2 bg-slate-50 p-2 rounded">
                        <span className="font-medium text-slate-700">{k.name}</span>
                        <span className="text-slate-400">{k.expiry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
          <button onClick={onClose} className="px-6 py-2.5 rounded-2xl border border-slate-200 text-slate-600 font-bold hover:bg-white transition-all text-[14px]">
            {cookiePreferences.cancel}
          </button>
          <button
            onClick={() => {
              saveConsent(analytics);
              onClose();
            }}
            className="px-8 py-2.5 rounded-2xl bg-primary text-white font-extrabold hover:bg-primary-dark transition-all text-[14px] shadow-lg shadow-primary/10"
          >
            {cookiePreferences.save}
          </button>
        </div>
      </div>
    </div>
  );
}
