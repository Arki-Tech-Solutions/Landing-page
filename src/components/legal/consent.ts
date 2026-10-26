"use client";

import { useSyncExternalStore } from "react";

/**
 * Cookie-consent preference store shared by the CookieBanner, the preferences modal
 * and /privacy-choices. Persisted in localStorage (every access wrapped in try/catch).
 */
export const CONSENT_KEY = "arki_consent";
export const CONSENT_VERSION = "1.0";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const EVENT = "arki-consent-change";

export type ConsentPreferences = { necessary: true; analytics: boolean };
export type Consent = {
  version: string;
  timestamp: number;
  gpcHonoured: boolean;
  preferences: ConsentPreferences;
};

/** "unknown" = not read yet (server render / first hydration pass). */
export type ConsentState = Consent | null | "unknown";

let cachedRaw: string | null | undefined;
let cachedValue: Consent | null = null;

function parse(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const c = JSON.parse(raw) as Consent;
    if (c.version !== CONSENT_VERSION || typeof c.timestamp !== "number") return null;
    if (Date.now() - c.timestamp > MAX_AGE_MS) return null;
    return c;
  } catch {
    return null;
  }
}

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function getSnapshot(): ConsentState {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedValue = parse(raw);
  }
  return cachedValue;
}

function getServerSnapshot(): ConsentState {
  return "unknown";
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export function saveConsent(analytics: boolean, gpcHonoured = false) {
  const value: Consent = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    gpcHonoured,
    preferences: { necessary: true, analytics },
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
  } catch {
    // Storage blocked (private mode, disabled site data): keep the choice for this page view only.
    cachedRaw = JSON.stringify(value);
    cachedValue = value;
  }
  window.dispatchEvent(new Event(EVENT));
}

export const acceptAll = () => saveConsent(true);
export const acceptEssentials = () => saveConsent(false);

/** True when the browser sends a Global Privacy Control signal. */
export function hasGpcSignal() {
  return typeof navigator !== "undefined" && (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export function useConsent(): ConsentState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
