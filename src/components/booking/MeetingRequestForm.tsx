"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CalendarClock, Check, Clock, Globe, Mail, Phone, Video } from "lucide-react";
import { site } from "@/content/site";

// TODO(confirm): Arki has no scheduler account yet. When one exists (e.g. Cal.com or Calendly),
// replace this form with the provider's inline embed inside the same card (reference: an iframe,
// h-[700px] sm:h-[760px], rounded-lg, border-slate-200) and list the provider in the Cookie Policy.

/** Time windows in East Africa Time (GMT+3); the note under the field says so. */
const timeWindows = ["Morning, 09:00–12:00", "Afternoon, 13:00–17:00", "Flexible: suggest a time"];

/** What happens on the call, shown in the left column. */
const onTheCall = [
  "We listen to the problem, your users and your goals",
  "We tell you honestly whether we're the right team",
  "You leave with a clear next step, even if it isn't us",
];

const input =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";
const label = "block text-sm font-bold text-ink mb-1.5";

/**
 * Meeting request form. It does not submit to a backend: on submit it opens the visitor's
 * email app with a prefilled message to site.emails.contact.
 */
export function MeetingRequestForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const subject = `Meeting request: ${v("name")}${v("company") ? ` (${v("company")})` : ""}`;
    const body = [
      `Name: ${v("name")}`,
      `Email: ${v("email")}`,
      `Phone: ${v("phone") || "-"}`,
      `Company: ${v("company") || "-"}`,
      `Preferred date: ${v("date") || "-"}`,
      `Preferred time: ${v("time")} (East Africa Time, GMT+3)`,
      "",
      v("message"),
    ].join("\n");
    window.location.href = `mailto:${site.emails.contact}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <div className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] min-h-[700px] sm:min-h-[760px] rounded-lg border border-slate-200 overflow-hidden">
      {/* Event details column (mirrors the scheduler's left panel) */}
      <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-200 bg-white">
        <p className="text-sm font-semibold text-slate-500">{site.name}</p>
        <h1 className="mt-2 font-heading text-2xl sm:text-[30px] font-extrabold text-ink tracking-[-0.02em] leading-tight">30-minute discovery call</h1>
        <ul className="mt-6 space-y-4 text-[15px] font-semibold text-slate-600">
          <li className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-slate-400 shrink-0" /> 30 min
          </li>
          <li className="flex items-center gap-3">
            <Video className="w-5 h-5 text-slate-400 shrink-0" /> Video call, link sent on confirmation
          </li>
          <li className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-slate-400 shrink-0" /> Addis Ababa, East Africa Time (GMT+3)
          </li>
        </ul>
        <p className="mt-8 text-[15px] text-slate-600 leading-relaxed">
          Tell us what you are trying to solve. You will speak with one of the engineers who would work on your project, not a
          salesperson. We reply within one business day to confirm a time.
        </p>
        <p className="mt-8 text-sm font-bold text-ink">On the call</p>
        <ul className="mt-3 space-y-3">
          {onTheCall.map((t) => (
            <li key={t} className="flex items-start gap-3 text-[15px] leading-snug text-slate-600">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-xl bg-primary-soft border border-primary/15 p-4">
          <p className="text-sm font-bold text-ink">Prefer to write or call?</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href={`mailto:${site.emails.contact}`} className="font-semibold text-primary hover:underline break-all">
                {site.emails.contact}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${p.replace(/s+/g, "")}`} className="font-semibold text-primary hover:underline">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Request form column */}
      <div className="p-6 sm:p-8 bg-white">
        <div className="flex items-center gap-2 mb-6">
          <CalendarClock className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-bold text-ink">Request a meeting</h2>
        </div>
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="mr-name" className={label}>
                Name *
              </label>
              <input id="mr-name" name="name" required autoComplete="name" className={input} placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="mr-email" className={label}>
                Email *
              </label>
              <input id="mr-email" name="email" type="email" required autoComplete="email" className={input} placeholder="you@company.com" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="mr-phone" className={label}>
                Phone
              </label>
              <input id="mr-phone" name="phone" type="tel" autoComplete="tel" className={input} placeholder="+251 …" />
            </div>
            <div>
              <label htmlFor="mr-company" className={label}>
                Company
              </label>
              <input id="mr-company" name="company" autoComplete="organization" className={input} placeholder="Company name" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="mr-date" className={label}>
                Preferred date
              </label>
              <input id="mr-date" name="date" type="date" className={input} />
            </div>
            <div>
              <label htmlFor="mr-time" className={label}>
                Preferred time *
              </label>
              <select id="mr-time" name="time" required defaultValue={timeWindows[0]} className={input} aria-describedby="mr-time-note">
                {timeWindows.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <p id="mr-time-note" className="mt-1.5 text-xs text-slate-500">
                East Africa Time (GMT+3)
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="mr-message" className={label}>
              What would you like to discuss? *
            </label>
            <textarea
              id="mr-message"
              name="message"
              required
              rows={5}
              className={`${input} resize-y`}
              placeholder="A few lines about your product, stack and timeline"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            Open email to send request
          </button>
          <p className="text-xs text-slate-500 leading-relaxed" aria-live="polite">
            {opened
              ? `Your email app should now be open with the request filled in. Press send there to reach us. If nothing opened, email ${site.emails.contact} directly.`
              : "Submitting opens your email app with this request filled in, addressed to our team. Nothing is sent until you press send. We reply within one business day."}
          </p>
          <p className="text-xs text-slate-400">
            See our{" "}
            <Link href="/privacy-policy" className="underline hover:text-primary">
              Privacy Policy
            </Link>{" "}
            for how we handle your details.
          </p>
        </form>
      </div>
    </div>
  );
}
