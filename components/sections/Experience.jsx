"use client";

import { motion } from "motion/react";
import { education } from "@/data/portfolio";
import { EASE, Reveal, SplitText } from "../motion";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-title">
          <h2>
            <SplitText text="/Experience" inView stagger={0.03} />
          </h2>
          <Reveal as="p" delay={0.2}>
            My academic background and the path that led me to front-end development.
          </Reveal>
        </div>

        <div className="experience-list">
          {education.map((item, i) => (
            <Reveal className="experience-item" key={item.title} delay={i * 0.08}>
              <span className="experience-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.school}</p>
              </div>
              <span className="chip">{i === 0 ? "Current" : "Graduated"}</span>
              <motion.span
                className="experience-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.2 + i * 0.08 }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
