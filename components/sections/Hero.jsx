"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import portrait from "@/assets/p1-removebg-preview.png";
import { profile, socials } from "@/data/portfolio";
import { ArrowIcon, socialIcons } from "../Icons";
import { EASE, INTRO_DELAY, SplitText } from "../motion";
import { useOpenContact } from "../contact-context";

const heroSocials = ["github", "linkedin", "facebook", "instagram"];

export default function Hero() {
  const ref = useRef(null);
  const openContact = useOpenContact();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const firstX = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const lastX = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="container hero-inner">
        <h1 className="hero-name">
          <motion.span className="outline" style={{ x: firstX }}>
            <SplitText text={profile.firstName} delay={INTRO_DELAY} />
          </motion.span>
          <motion.span style={{ x: lastX }}>
            <SplitText text={profile.lastName} delay={INTRO_DELAY + 0.2} />
          </motion.span>
        </h1>

        <motion.div className="hero-portrait" style={{ y: portraitY }}>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE, delay: INTRO_DELAY + 0.3 }}
          >
            <Image src={portrait} alt={profile.name} priority sizes="(max-width: 760px) 80vw, 36vw" />
          </motion.div>
        </motion.div>

        <motion.div className="hero-intro" style={{ opacity: fade }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: INTRO_DELAY + 0.7 }}
            style={{ display: "grid", gap: "0.9rem" }}
          >
            <h2>{profile.role}</h2>
            <p>{profile.tagline}</p>
            <button className="pill-dark" type="button" onClick={openContact}>
              Let&apos;s collaborate <ArrowIcon />
            </button>
          </motion.div>
        </motion.div>

        <motion.div className="hero-socials" style={{ opacity: fade }}>
          {heroSocials.map((key, i) => {
            const Icon = socialIcons[key];
            return (
              <motion.a
                key={key}
                className="pill-light"
                href={socials[key].href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: INTRO_DELAY + 0.8 + i * 0.08 }}
              >
                <span className="icon">
                  <Icon />
                </span>
                {socials[key].label}
              </motion.a>
            );
          })}
        </motion.div>

        <motion.span
          className="scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: INTRO_DELAY + 1.4 }}
        >
          Scroll
        </motion.span>
      </div>
    </section>
  );
}
