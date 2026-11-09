import React, { useState } from "react";
import { Heading } from "../shared";
import { timelineItems } from "../../data/portfolioData";
import stLogo from "../../assets/logos/st.png";
import armurLogo from "../../assets/logos/armur.png";
import nusLogo from "../../assets/logos/nus.svg";
import srmLogo from "../../assets/logos/srm.jpg";

const institutionLogos = {
  "ST Engineering": stLogo,
  "Armur.AI": armurLogo,
  "National University of Singapore": nusLogo,
  "SRM Institute of Science & Technology": srmLogo,
};

const TimelineLogo = ({ item }) => {
  const [failed, setFailed] = useState(false);
  const source = institutionLogos[item.org] || item.logo?.src;

  return (
    <div className="background-logo" aria-hidden="true">
      {source && !failed ? (
        <img src={source} alt="" onError={() => setFailed(true)} />
      ) : (
        <span>{item.logo?.fallback || item.org}</span>
      )}
    </div>
  );
};

function BackgroundCard({ item }) {
  return (
    <article className="background-card">
      <div className="background-card-top">
        <TimelineLogo item={item} />
        <div className="background-card-meta">
          <span className="background-card-date">{item.date}</span>
          {item.place && <span className="background-card-place">{item.place}</span>}
        </div>
      </div>

      <div className="background-card-copy">
        <p className="background-card-org">{item.org}</p>
        <h4>{item.title}</h4>
        <ul>
          {item.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
    </article>
  );
}

function BackgroundLane({ kind, title, jp, additions = [] }) {
  const items = [...additions, ...timelineItems.filter((item) => item.kind === kind)];

  return (
    <section className={`background-lane ${kind}`} aria-label={title}>
      <header className="background-lane-heading">
        <div>
          <span lang="ja">{jp}</span>
          <h3>{title}</h3>
        </div>
        <i aria-hidden="true" />
      </header>

      <div className="background-card-stack">
        {items.map((item) => (
          <BackgroundCard key={`${item.org}-${item.date}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function Timeline({ education = [] }) {
  const className = education.length ? "eva-section timeline-section has-added-education" : "eva-section timeline-section";
  return (
    <section id="timeline" className={className}>
      <div className="section-inner">
        <Heading number="02" jp="経歴">Background</Heading>
        <div className="background-columns">
          <BackgroundLane kind="work" title="Work experience" jp="職歴" />
          <BackgroundLane kind="education" title="Education" jp="学歴" additions={education} />
        </div>
      </div>
    </section>
  );
}
