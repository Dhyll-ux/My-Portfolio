"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import aboutPhoto from "@/assets/img.jpg";
import { aboutStats, profile } from "@/data/portfolio";
import { Reveal } from "../motion";

const statement =
  "Most websites try to impress. I build ones that communicate — clean, responsive, and easy to use on every screen.";

// A word that brightens from faint to solid as the statement scrolls past.
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span className="word" style={{ opacity }}>
      {children}
    </motion.span>
  );
}

export default function About() {
  const statementRef = useRef(null);
  const photoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start 85%", "end 45%"],
  });
  const { scrollYProgress: photoProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(photoProgress, [0, 1], ["-10%", "0%"]);

  const words = statement.split(" ");

  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-photo" ref={photoRef}>
          <motion.div style={{ y: photoY, height: "100%" }}>
            <Image src={aboutPhoto} alt={`${profile.name} portrait`} sizes="(max-width: 960px) 100vw, 40vw" />
          </motion.div>
        </Reveal>

        <div>
          <p className="eyebrow">/About Me</p>
          <p className="about-statement" ref={statementRef}>
            {words.map((word, i) => (
              <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                {word}
              </Word>
            ))}
          </p>
          <Reveal as="p" className="about-body" delay={0.1}>
            I&apos;m {profile.name}, a front-end developer and IT student from {profile.location}.
            I enjoy turning ideas into simple interfaces that feel smooth and easy to navigate, and
            I&apos;m always sharpening my skills in HTML, CSS, JavaScript, and React.
          </Reveal>

          <div className="about-stats">
            {aboutStats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 * i}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
