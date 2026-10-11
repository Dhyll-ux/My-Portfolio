import { skills } from "@/data/portfolio";

// Infinite strip of skills; the list is doubled so the CSS loop is seamless.
export default function Marquee() {
  const items = [...skills, ...skills];

  return (
    <div className="marquee" aria-label={`Skills: ${skills.join(", ")}`}>
      <div className="marquee-track" aria-hidden="true">
        {items.map((skill, i) => (
          <span className="marquee-item" key={i}>
            {skill}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
