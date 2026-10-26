"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { privacyChoices as t } from "@/content/legal";
import { site } from "@/content/site";
import { saveConsent, useConsent } from "./consent";
import { CookiePreferencesModal } from "./CookiePreferencesModal";

const link = "text-primary underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-colors font-bold";

/** Interactive body of /privacy-choices: opt-out checkbox, confirm dialog, preferences modal. */
export function PrivacyChoicesPanel({ version }: { version: string }) {
  const consent = useConsent();
  const optedOut = consent !== "unknown" && consent !== null && consent.preferences.analytics === false;
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);

  return (
    <>
      <div className="max-w-[700px] mx-auto px-6 mb-32">
        <h1 className="text-[36px] font-bold mb-10 tracking-tight text-primary">{t.title}</h1>
        <div className="space-y-6 text-[16px] leading-[1.6] text-slate-700">
          <p>{t.intro1}</p>
          <p>
            {t.intro2}{" "}
            <Link href="/privacy-policy" className={link}>
              {t.privacyPolicyLink}
            </Link>
            .
          </p>
        </div>
        <div className="h-px bg-slate-100 my-10" />
        <div className="bg-slate-50 rounded-lg p-7 mb-10 border border-slate-100">
          <p className="text-[14px] leading-relaxed text-slate-700">{t.infoBox}</p>
        </div>
        <div className="flex items-start gap-4 group">
          <div className="relative flex items-center mt-1.5 shrink-0">
            <input
              id="opt-out-checkbox"
              type="checkbox"
              checked={optedOut}
              onChange={() => (optedOut ? setConfirmOpen(true) : saveConsent(false))}
              className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-slate-300 bg-white transition-all checked:bg-primary checked:border-primary hover:border-primary/50"
            />
            <svg
              className="absolute h-4 w-4 pointer-events-none hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <label htmlFor="opt-out-checkbox" className="text-[18px] font-bold text-primary cursor-pointer select-none">
              {t.optOutLabel}
            </label>
            <p className="text-[15px] text-slate-500 mt-2.5 leading-relaxed">
              {t.optOutDescription}{" "}
              <button type="button" onClick={() => setPrefsOpen(true)} className={link}>
                {t.settingsButton}
              </button>
              .
            </p>
          </div>
        </div>
        <div className="h-px bg-slate-100 my-12" />
        <div className="bg-white rounded-[24px] p-8 md:p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100 shadow-sm">
          <div className="text-center md:text-left">
            <h2 className="text-[22px] font-bold text-primary mb-2">{t.contactTitle}</h2>
            <p className="text-slate-500 text-[15px]">{t.contactDescription}</p>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="px-8 py-3.5 rounded-2xl bg-primary text-white font-extrabold hover:bg-primary-dark transition-all text-[15px] shadow-lg shadow-primary/10 whitespace-nowrap"
          >
            {site.email}
          </a>
        </div>
        <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
          <span>{t.complianceLabel}</span>
          <span>Policy v{version}</span>
        </div>
      </div>

      {confirmOpen ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          <div role="dialog" aria-modal="true" aria-labelledby="optin-title" className="w-full max-w-[500px] bg-white rounded-[32px] p-10 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setConfirmOpen(false)}
              aria-label="Close"
              className="absolute top-8 right-8 p-2 rounded-full bg-slate-50 text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mt-2">
              <h2 id="optin-title" className="text-[28px] font-bold text-primary leading-tight mb-6 pr-10">
                {t.confirmModal.title}
              </h2>
              <p className="text-[16px] text-slate-600 leading-[1.6] mb-10">
                {t.confirmModal.description}{" "}
                <Link href="/privacy-policy" className={link}>
                  {t.privacyPolicyLink}
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => setConfirmOpen(false)}
                className="px-8 py-3.5 rounded-full border border-slate-300 text-slate-600 font-bold hover:bg-slate-50 transition-all text-[14px]"
              >
                {t.confirmModal.cancel}
              </button>
              <button
                type="button"
                onClick={() => {
                  saveConsent(true);
                  setConfirmOpen(false);
                }}
                className="px-10 py-3.5 rounded-full bg-primary text-white font-extrabold hover:bg-primary-dark transition-all text-[14px] shadow-xl shadow-primary/10"
              >
                {t.confirmModal.save}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <CookiePreferencesModal open={prefsOpen} onClose={() => setPrefsOpen(false)} />
    </>
  );
}
