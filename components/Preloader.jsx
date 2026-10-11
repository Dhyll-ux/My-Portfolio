"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "motion/react";
import { EASE, INTRO_DELAY } from "./motion";

// Counts 0 → 100, then lifts away like a curtain to reveal the hero.
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: INTRO_DELAY - 0.4,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => setCount(Math.round(value)),
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="preloader-label">Dhyll Mallorca — Portfolio</span>
          <span className="preloader-count">{String(count).padStart(3, "0")}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
