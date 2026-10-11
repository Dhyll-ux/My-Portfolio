"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks } from "@/data/portfolio";
import { ArrowIcon } from "./Icons";
import { EASE, INTRO_DELAY } from "./motion";
import { useOpenContact } from "./contact-context";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const openContact = useOpenContact();

  const handleContact = () => {
    setNavOpen(false);
    openContact();
  };

  return (
    <motion.header
      className={`site-header${navOpen ? " nav-open" : ""}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: INTRO_DELAY + 0.6 }}
    >
      <div className="container header-inner">
        <button className="status-pill" type="button" onClick={handleContact}>
          <span className="status-dot"></span>
          Available for New Project
        </button>

        <nav className="site-nav" aria-label="Primary navigation" onMouseLeave={() => setHovered(null)}>
          {[...navLinks, { href: "#contact", label: "Contact" }].map((link) => (
            <a key={link.href} href={link.href} onMouseEnter={() => setHovered(link.href)}>
              {hovered === link.href && (
                <motion.span
                  className="nav-hover"
                  layoutId="nav-hover"
                  transition={{ duration: 0.35, ease: EASE }}
                />
              )}
              {link.label}
              {link.count && <sup>[{link.count}]</sup>}
            </a>
          ))}
        </nav>

        <button className="pill-dark header-cta" type="button" onClick={handleContact}>
          Let&apos;s Talk <ArrowIcon />
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
        </button>

        <AnimatePresence>
          {navOpen && (
            <motion.nav
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
                  {link.label}
                  {link.count && <sup>[{link.count}]</sup>}
                </a>
              ))}
              <a href="#contact" onClick={() => setNavOpen(false)}>
                Contact
              </a>
              <button type="button" onClick={handleContact}>
                Let&apos;s Talk <ArrowIcon />
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
