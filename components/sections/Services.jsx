"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { services } from "@/data/portfolio";
import { ArrowIcon } from "../Icons";
import { EASE, Reveal, SplitText } from "../motion";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title services-head">
          <h2>
            <SplitText text="/Services" inView stagger={0.03} />
          </h2>
          <Reveal as="p" delay={0.2}>
            Built around clean design, responsive development, and clear presentation for clients
            who need a strong online presence.
          </Reveal>
        </div>

        <div className="service-list">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={service.title} className={`service-item${isOpen ? " open" : ""}`} delay={i * 0.08}>
                <button
                  type="button"
                  className="service-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {isOpen && (
                    <motion.span
                      className="service-bg"
                      layoutId="service-bg"
                      transition={{ duration: 0.55, ease: EASE }}
                    />
                  )}
                  <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="service-title">{service.title}</span>
                  <span className="service-icon">
                    <ArrowIcon />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="service-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      <div className="service-panel-inner">
                        <div>
                          <p>{service.text}</p>
                          <div className="service-tags">
                            {service.tags.map((tag) => (
                              <span className="chip" key={tag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
