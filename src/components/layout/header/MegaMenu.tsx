"use client";

import { useSyncExternalStore, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { IndustriesPanel, ResourcesPanel, ServicesPanel, TechnologiesPanel } from "./panels";

export type MenuId = "services" | "technologies" | "industries" | "resources";

const subscribe = () => () => {};

/**
 * Desktop mega-menu: lightly dimmed backdrop + a full-width panel under the header.
 * `triggerRect` is still reported by the header but no longer positions anything.
 */
export function MegaMenu({
  activeMenu,
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
            className="fixed inset-0 z-40 bg-ink/20 pointer-events-none"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed z-[60] left-1/2 top-[calc(4rem+6px)] w-[min(1280px,94vw)] -translate-x-1/2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeOnLink}
          >
            {/* Invisible bridge over the gap so the pointer can travel from the trigger to the panel. */}
            <div className="absolute -top-2 inset-x-0 h-2" aria-hidden />
            <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_30px_70px_-25px_rgba(15,36,25,0.35)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeMenu}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                >
                  {activeMenu === "services" ? (
                    <ServicesPanel />
                  ) : activeMenu === "technologies" ? (
                    <TechnologiesPanel />
                  ) : activeMenu === "industries" ? (
                    <IndustriesPanel />
                  ) : (
                    <ResourcesPanel />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
