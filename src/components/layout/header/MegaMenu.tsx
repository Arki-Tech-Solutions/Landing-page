"use client";

import { useLayoutEffect, useRef, useState, useSyncExternalStore, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { serviceMenu } from "@/content/navigation";
import { techMenuCategories as techCategories } from "@/content/technologies";
import { headerIndustries } from "./data";
import { IndustriesPanel, ResourcesPanel, ServicesPanel, TechnologiesPanel } from "./panels";

export type MenuId = "services" | "technologies" | "industries" | "resources";

const subscribe = () => () => {};

/** Desktop mega-menu: dimmed backdrop + floating panel with a pointer under the hovered trigger. */
export function MegaMenu({
  activeMenu,
  triggerRect,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: {
  activeMenu: MenuId | null;
  triggerRect: DOMRect | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [serviceId, setServiceId] = useState(serviceMenu[0].id);
  const [techId, setTechId] = useState(techCategories[0].id);
  const [industryId, setIndustryId] = useState(headerIndustries[0].id);
  const [arrowLeft, setArrowLeft] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (triggerRect && panelRef.current) {
      const panel = panelRef.current.getBoundingClientRect();
      setArrowLeft(triggerRect.left + triggerRect.width / 2 - panel.left);
    } else {
      setArrowLeft(null);
    }
  }, [triggerRect, activeMenu]);

  if (!mounted) return null;

  const closeOnLink = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) onClose();
  };

  return createPortal(
    <AnimatePresence>
      {activeMenu && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 pointer-events-none"
            aria-hidden
          />
          <motion.div
            ref={panelRef}
            layout
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
            className="fixed z-[60] left-1/2 top-[calc(4rem-6px)] w-[min(1280px,94vw)] max-w-[1400px] -translate-x-1/2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeOnLink}
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_-26px_rgba(15,23,42,0.35)] overflow-visible">
              {arrowLeft !== null && (
                <motion.div
                  layout
                  initial={false}
                  animate={{ left: arrowLeft }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="pointer-events-none absolute -top-[6px] z-10 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-slate-200 bg-white shadow-[0_-1px_0_white]"
                  aria-hidden
                />
              )}
              <div className="overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  {activeMenu === "services" ? (
                    <motion.div key="services" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
                      <ServicesPanel activeCategoryId={serviceId} setActiveCategoryId={setServiceId} />
                    </motion.div>
                  ) : activeMenu === "technologies" ? (
                    <motion.div key="technologies" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }}>
                      <TechnologiesPanel activeCategoryId={techId} setActiveCategoryId={setTechId} />
                    </motion.div>
                  ) : activeMenu === "industries" ? (
                    <motion.div key="industries" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
                      <IndustriesPanel activeCategoryId={industryId} setActiveCategoryId={setIndustryId} />
                    </motion.div>
                  ) : activeMenu === "resources" ? (
                    <motion.div key="resources" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }}>
                      <ResourcesPanel />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
