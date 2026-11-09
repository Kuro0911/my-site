import React from "react";
import { Heading } from "../shared";
import { skillGroups } from "../../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="eva-section skills-section">
      <div className="section-inner">
        <Heading number="01" jp="スキル">Skills</Heading>

        <div className="skills-board">
          {skillGroups.map((group) => (
            <article className={`skill-card ${group.tone || "neutral"}`} key={group.title}>
              <div className="skill-head">
                <h3>{group.title}</h3>
                {group.jp && <span lang="ja">{group.jp}</span>}
              </div>
              <div className="skill-tags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
