"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1];

// Seconds the preloader stays on screen; hero animations start after it.
export const INTRO_DELAY = 1.6;

// Fades and lifts its children into view once, when scrolled to.
export function Reveal({ children, delay = 0, y = 40, as = "div", ...props }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...props}
    >
      {children}
    </Tag>
  );
}

// Splits text into letters that slide up from behind a mask.
// With `inView`, it waits until the text scrolls into view; otherwise it plays on mount.
export function SplitText({ text, delay = 0, stagger = 0.04, inView = false, className }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const show = !inView || seen;

  // Group letters by word so lines only break between words.
  let index = 0;
  const words = text.split(" ").map((word) =>
    [...word].map((char) => ({ char, i: index++ }))
  );

  return (
    <span className={className} ref={ref}>
      <span className="sr-only">{text}</span>
      {words.map((letters, w) => (
        <span className="split-word" key={w} aria-hidden="true">
          {letters.map(({ char, i }) => (
            <span className="mask" key={i}>
              <motion.span
                initial={{ y: "110%" }}
                animate={show ? { y: "0%" } : undefined}
                transition={{ duration: 1, ease: EASE, delay: delay + i * stagger }}
              >
                {char}
              </motion.span>
            </span>
          ))}
          {w < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
