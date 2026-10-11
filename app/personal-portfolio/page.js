import Image from "next/image";
import Link from "next/link";
import preview from "@/assets/img1.jpg";
import { Reveal, SplitText } from "@/components/motion";

export const metadata = {
  title: "Personal Portfolio Project",
  description: "Project showcase page for Dhyll Mallorca's personal portfolio concept.",
};

const meta = [
  { label: "Role", value: "UI Design + Front-End" },
  { label: "Focus", value: "Portfolio Presentation" },
  { label: "Stack", value: "HTML, CSS, JavaScript" },
];

const highlights = [
  "Bold hero section with clearer text hierarchy",
  "Clean dark theme with strong visual contrast",
  "Project and service cards for easier scanning",
  "Responsive layout for desktop and mobile viewing",
];

export default function PersonalPortfolioPage() {
  return (
    <main className="container project-page">
      <Link className="pill-dark" href="/#work">
        ← Back to Portfolio
      </Link>

      <section className="project-hero">
        <div>
          <p className="eyebrow">/Exploration</p>
          <h1 className="project-title">
            <SplitText text="Personal" className="outline" stagger={0.03} />
            <SplitText text="Portfolio" delay={0.2} stagger={0.03} />
          </h1>
          <Reveal as="p" delay={0.3}>
            A portfolio concept created to present a developer&apos;s profile, projects, and
            services in a way that feels polished, readable, and personal.
          </Reveal>

          <Reveal className="project-meta" delay={0.4}>
            {meta.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="project-showcase" delay={0.2} y={80}>
          <Image src={preview} alt="Personal portfolio project preview" priority sizes="(max-width: 960px) 100vw, 55vw" />
        </Reveal>
      </section>

      <section className="project-detail-grid">
        <Reveal className="project-detail-card">
          <p className="eyebrow">/Overview</p>
          <h2>Designed to feel polished, readable, and modern.</h2>
          <p>
            This design focuses on strong typography, thoughtful spacing, and a clear structure so
            the portfolio feels professional without losing personality.
          </p>
        </Reveal>

        <Reveal className="project-detail-card" delay={0.1}>
          <p className="eyebrow">/Highlights</p>
          <ul className="project-feature-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </main>
  );
}
