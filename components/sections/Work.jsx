"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { projectFilters, projects } from "@/data/portfolio";
import { ArrowIcon } from "../Icons";
import { EASE, Reveal, SplitText } from "../motion";

export default function Work() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("All");

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);

  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="work" className="section work-section" ref={ref}>
      <motion.span className="watermark" style={{ x: watermarkX }} aria-hidden="true">
        PORTFOLIO
      </motion.span>

      <div className="container">
        <div className="section-title center">
          <h2>
            <SplitText text="/Selected Work" inView stagger={0.03} />
          </h2>
          <Reveal as="p" delay={0.2}>
            Examples of personal and product-focused work, built for clarity and responsiveness.
          </Reveal>
        </div>

        <Reveal className="filters" role="tablist" aria-label="Filter projects" delay={0.1}>
          {projectFilters.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={filter === name}
              className={filter === name ? "active" : ""}
              onClick={() => setFilter(name)}
            >
              {filter === name && (
                <motion.span
                  className="filter-bg"
                  layoutId="filter-bg"
                  transition={{ duration: 0.5, ease: EASE }}
                />
              )}
              <span>{name}</span>
            </button>
          ))}
        </Reveal>

        <motion.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => {
              const linkProps = project.external
                ? { href: project.href, target: "_blank", rel: "noreferrer" }
                : { href: project.href };
              const LinkTag = project.external ? "a" : Link;

              return (
                <motion.article
                  className={`project-card${project.featured ? " featured" : ""}`}
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
                >
                  <LinkTag {...linkProps} className="project-media" aria-label={`View ${project.title}`}>
                    <Image src={project.image} alt={project.alt} sizes={project.featured ? "100vw" : "(max-width: 760px) 100vw, 50vw"}
                    />
                    <span className="project-arrow">
                      <ArrowIcon />
                    </span>
                  </LinkTag>
                  <div className="project-info">
                    <div className="project-row">
                      <h3>{project.title}</h3>
                      <span className="chip">{project.client}</span>
                    </div>
                    <p>{project.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
