"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";
import { MegaMenu, type MenuId } from "./header/MegaMenu";
import { MenuTrigger, type HeaderVariant } from "./header/MenuTrigger";
import { MobileMenu } from "./header/MobileMenu";

const menus: { id: MenuId; label: string }[] = [
  { id: "services", label: "Services" },
  { id: "technologies", label: "Technologies" },
  { id: "industries", label: "Industries" },
  { id: "resources", label: "Resources" },
];

/** Routes whose hero is dark: the header starts with white text and logo until scrolled. */
function isDarkHeroRoute(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  return (
    (parts[0] === "services" && parts.length >= 2 && parts.length <= 3) ||
    pathname === "/life-at-arki-tech" ||
    pathname === "/engagement-model" ||
    pathname === "/process"
  );
}

/**
 * Fixed site header. Transparent at the top of the page, frosted white once scrolled,
 * desktop hover mega-menus and a full-screen mobile menu below 992px.
 */
export function Header() {
  // usePathname may suspend under cacheComponents on routes with unknown params;
  // the fallback renders the same header with the default (light) variant.
  return (
    <Suspense fallback={<HeaderView pathname={null} />}>
      <RoutedHeader />
    </Suspense>
  );
}

function RoutedHeader() {
  const pathname = usePathname();
  return <HeaderView key={pathname} pathname={pathname} />;
}

function HeaderView({ pathname }: { pathname: string | null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuId | null>(null);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearLeave = () => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  };
  const openMenu = (id: MenuId, rect: DOMRect) => {
    clearLeave();
    setActiveMenu(id);
    setTriggerRect(rect);
  };
  const scheduleClose = () => {
    clearLeave();
    leaveTimer.current = setTimeout(() => {
      setActiveMenu(null);
      setTriggerRect(null);
    }, 100);
  };
  const closeMenu = () => {
    clearLeave();
    setActiveMenu(null);
    setTriggerRect(null);
  };
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => clearLeave, []);

  // Scroll state (rAF-throttled, 48px threshold).
  useEffect(() => {
    let ticking = false;
    let last = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const next = window.scrollY > 48;
        if (next !== last) {
          last = next;
          setScrolled(next);
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile menu when the viewport grows to desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const darkHero = pathname !== null && isDarkHeroRoute(pathname);
  const variant: HeaderVariant = scrolled ? "light" : darkHero ? "dark" : "light";
  const logoVariant = mobileOpen || scrolled ? "light" : darkHero ? "dark" : "light";

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out",
        mobileOpen
          ? "bg-white border-transparent"
          : activeMenu && scrolled
            ? "bg-gray-100 border-b border-slate-200 py-0 shadow-lg"
            : scrolled
              ? "bg-white/85 backdrop-blur-md border-b border-slate-200 py-0 shadow-sm"
              : "bg-transparent border-transparent py-0 shadow-none",
      ].join(" ")}
    >
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] flex items-center justify-between h-16">
        <span onClick={closeMobile} className="flex shrink-0">
          <Logo variant={logoVariant} />
        </span>
        <nav className="hidden min-[992px]:flex items-center gap-8">
          {menus.map((m) => (
            <MenuTrigger
              key={m.id}
              label={m.label}
              open={activeMenu === m.id}
              variant={variant}
              onEnter={(rect) => openMenu(m.id, rect)}
              onLeave={scheduleClose}
            />
          ))}
        </nav>
        <MegaMenu activeMenu={activeMenu} triggerRect={triggerRect} onMouseEnter={clearLeave} onMouseLeave={scheduleClose} onClose={closeMenu} />
        <div className="hidden min-[992px]:flex items-center gap-4">
          <Link
            href={site.bookingHref}
            className={[
              "inline-flex items-center rounded-full border-2 border-primary px-6 py-2.5 text-sm font-bold transition-all duration-300",
              variant === "dark" ? "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02]" : "bg-primary/10 text-primary hover:bg-primary/15",
            ].join(" ")}
          >
            Partner with Us
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className={[
            "inline-flex h-10 w-10 min-[992px]:hidden items-center justify-center rounded-md border transition-all duration-300",
            variant === "dark" ? "border-white/40 text-white hover:bg-white/10" : "border-slate-200 text-slate-900 hover:bg-slate-100",
          ].join(" ")}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && <MobileMenu onClose={closeMobile} />}
    </header>
  );
}
