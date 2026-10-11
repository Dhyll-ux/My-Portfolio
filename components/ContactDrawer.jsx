"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile, socials } from "@/data/portfolio";
import { CloseIcon, socialIcons } from "./Icons";
import { EASE } from "./motion";

export default function ContactDrawer({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: profile.phoneHref },
    { label: "Location", value: profile.location },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="contact-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.aside
            className="contact-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Contact"
            initial={{ x: "110%" }}
            animate={{ x: 0 }}
            exit={{ x: "110%" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <button
              className="contact-drawer-close"
              type="button"
              aria-label="Close contact panel"
              onClick={onClose}
              autoFocus
            >
              <CloseIcon />
            </button>

            <p className="eyebrow">/Contact</p>
            <h2>Get in Touch</h2>
            <p>Have a project in mind? I&apos;d love to hear about it.</p>

            <div className="contact-drawer-list">
              {items.map((item, i) => {
                const Tag = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.25 + i * 0.08 }}
                  >
                    <Tag className="contact-drawer-item" href={item.href}>
                      <small>{item.label}</small>
                      <span>{item.value}</span>
                    </Tag>
                  </motion.div>
                );
              })}
            </div>

            <div className="contact-socials">
              {Object.entries(socials).map(([key, social]) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    className="pill-light"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon">
                      <Icon />
                    </span>
                    {social.label}
                  </a>
                );
              })}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
