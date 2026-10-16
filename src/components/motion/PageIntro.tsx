"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE } from "./config";

/** Short load intro: wordmark fade, then unlocks header slide via CSS class. */
export default function PageIntro() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduced) {
      document.documentElement.classList.add("intro-done");
      setShow(false);
      return;
    }
    document.documentElement.classList.remove("intro-done");
    const t = window.setTimeout(() => {
      setShow(false);
      document.documentElement.classList.add("intro-done");
    }, 1100);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && !reduced && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[10060] flex items-center justify-center bg-[#0c1826]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: DURATION.base, ease: EASE } }}
          aria-hidden
        >
          <motion.span
            className="font-display text-[2.8rem] tracking-[-0.03em] text-white sm:text-[3.5rem]"
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: DURATION.intro, ease: EASE }}
          >
            Veriton
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
