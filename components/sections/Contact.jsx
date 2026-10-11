"use client";

import { profile, socials } from "@/data/portfolio";
import { ArrowIcon, socialIcons } from "../Icons";
import { Reveal, SplitText } from "../motion";
import { useOpenContact } from "../contact-context";

export default function Contact() {
  const openContact = useOpenContact();

  return (
    <footer id="contact" className="section contact-section">
      <div className="container">
        <p className="eyebrow">/Contact</p>
        <h2 className="contact-big">
          <SplitText text="Let's work" inView stagger={0.03} className="outline" />
          <br />
          <SplitText text="together" inView delay={0.25} stagger={0.03} />
        </h2>

        <div className="contact-row">
          <Reveal style={{ display: "grid", gap: "1.25rem" }}>
            <p>Got a vision you want to bring to life? Let&apos;s make it happen.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} <ArrowIcon />
            </a>
          </Reveal>

          <Reveal style={{ display: "grid", gap: "1rem", justifyItems: "start" }} delay={0.1}>
            <button className="pill-dark" type="button" onClick={openContact}>
              Let&apos;s Talk <ArrowIcon />
            </button>
            <div className="contact-socials">
              {Object.entries(socials).map(([key, social]) => {
                const Icon = socialIcons[key];
                return (
                  <a key={key} className="pill-light" href={social.href} target="_blank" rel="noreferrer">
                    <span className="icon">
                      <Icon />
                    </span>
                    {social.label}
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 {profile.name}. All rights reserved.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
