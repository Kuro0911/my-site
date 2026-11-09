import React, { useRef, useState } from "react";
import { ExternalLink, Heading } from "../shared";
import { archivedPublications, browserTabs as baseTabs } from "../../data/portfolioData";
import ProjectsWrapper from "./projects.style";

const MetricGraph = ({ stats = [] }) => {
  if (!stats.length) return null;

  return (
    <div className="kernel-graph" aria-label="Selected project metrics">
      <div className="graph-grid" aria-hidden="true" />
      <div className="graph-title">RESULTS</div>
      {stats.map((stat, index) => (
        <div className="graph-row" key={stat.label}>
          <div className="graph-label">
            <span>{stat.label}</span>
            <strong>{stat.display}</strong>
          </div>
          <div className="graph-track" aria-hidden="true">
            <span
              className="graph-fill"
              style={{ "--metric": stat.value, "--delay": `${index * 110}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const StatCards = ({ items = [] }) => {
  if (!items.length) return null;
  return (
    <div className="kernel-stat-grid" aria-label="Project statistics">
      {items.map((item) => (
        <div className="kernel-stat" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const FigureImage = ({ src, alt }) => (
  <a className="figure-link" href={src} target="_blank" rel="noreferrer" aria-label={`Open full-size figure: ${alt}`}>
    <img src={src} alt={alt} decoding="async" />
  </a>
);

function FigurePanel({ item }) {
  const [activeFigure, setActiveFigure] = useState(0);
  const figures = item.figures || [];
  const figure = figures[activeFigure] || (item.figure && {
    src: item.figure,
    alt: item.figureAlt || item.figureLabel || item.title,
  });

  return (
    <div className="kernel-visual">
      <div className="figure-box">
        {figure ? (
          <FigureImage {...figure} />
        ) : (
          <div className="figure-placeholder" aria-label={`${item.title} figure placeholder`}>
            <span className="figure-index">FIG. 01</span>
            <strong>MAIN FIGURE</strong>
            <span>{item.figureLabel}</span>
            <i className="figure-line line-a" aria-hidden="true" />
            <i className="figure-line line-b" aria-hidden="true" />
          </div>
        )}
      </div>

      {figures.length > 1 && (
        <div className="figure-picker" aria-label="Select a figure">
          {figures.map(({ src, label }, index) => (
            <button
              type="button"
              key={src}
              aria-pressed={index === activeFigure}
              onClick={() => setActiveFigure(index)}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {item.stats?.length ? <MetricGraph stats={item.stats} /> : null}
      {item.statCards?.length ? <StatCards items={item.statCards} /> : null}
    </div>
  );
}

const ResearchTabs = ({ browserTabs, active, setActive, tabsRef, moveTab }) => (
  <div className="research-tabs" role="tablist" aria-label="Publications and projects">
    {browserTabs.map((tab, index) => {
      const isFirstProject = tab.kind === "project" && browserTabs[index - 1]?.kind === "archive";
      const label = tab.kind === "collab" ? "Collaborate" : tab.kind === "archive" ? tab.title : tab.tabLabel;

      return (
        <React.Fragment key={tab.id}>
          {isFirstProject && <span className="tab-divider" aria-hidden="true" />}
          <button
            ref={(node) => { tabsRef.current[index] = node; }}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls={`panel-${tab.id}`}
            tabIndex={index === active ? 0 : -1}
            className={`research-tab ${tab.kind} ${index === active ? "selected" : ""}`}
            aria-label={label}
            title={label}
            onClick={() => setActive(index)}
            onKeyDown={(event) => moveTab(event, index)}
          >
            <span className="tab-label-full">{tab.tabLabel}</span>
            <span className="tab-label-short">{tab.mobileLabel || tab.tabLabel}</span>
          </button>
        </React.Fragment>
      );
    })}
  </div>
);

const CollaborationPanel = ({ item }) => (
  <article
    className="kernel-panel collab-panel"
    id={`panel-${item.id}`}
    role="tabpanel"
    aria-label={item.title}
    key={item.id}
  >
    <div className="collab-copy">
      <span className="collab-plus" aria-hidden="true">+</span>
      <h3>{item.title}</h3>
      <p>{item.abstract}</p>
      <a className="collab-mail-button" href="mailto:dhananjaisharma09@gmail.com">
        Mail me
      </a>
    </div>
  </article>
);

const archiveYears = [...new Set(archivedPublications.map((paper) => paper.year))].sort((a, b) => b - a);

function PublicationArchive({ item }) {
  return (
    <article className="kernel-panel archive-panel" id={`panel-${item.id}`} role="tabpanel" aria-label={item.title}>
      {archiveYears.map((year) => (
        <section key={year} className="archive-year" aria-label={`Publications from ${year}`}>
          <h3>{year}</h3>
          {archivedPublications.filter((paper) => paper.year === year).map((paper) => (
            <details key={paper.id} className="archive-paper">
              <summary>{paper.title}</summary>
              <div className="archive-paper-content">
                <FigureImage src={paper.figure} alt={paper.figureAlt} />
                <div>
                  <p className="kernel-eyebrow">{paper.eyebrow}</p>
                  <p>{paper.abstract}</p>
                  <ExternalLink href={paper.link} className="kernel-link">Read paper ↗</ExternalLink>
                </div>
              </div>
            </details>
          ))}
        </section>
      ))}
    </article>
  );
}

function CurrentResearch({ item }) {
  return (
    <article className="kernel-panel current-panel" id={`panel-${item.id}`} role="tabpanel" aria-label={item.title}>
      <p className="kernel-eyebrow">CURRENT RESEARCH</p>
      <h3>{item.title}</h3>
      <p>{item.abstract}</p>
      <div className="kernel-tags">
        {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </article>
  );
}

export const Projects = ({ publications = [] }) => {
  const browserTabs = [
    ...baseTabs.filter((tab) => tab.kind === "publication"),
    ...publications,
    ...baseTabs.filter((tab) => tab.kind !== "publication"),
  ];
  const [activeId, setActiveId] = useState(baseTabs[0].id);
  const tabsRef = useRef([]);
  const active = Math.max(0, browserTabs.findIndex((tab) => tab.id === activeId));
  const item = browserTabs[active];
  const setActive = (index) => setActiveId(browserTabs[index].id);

  const moveTab = (event, index) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % browserTabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + browserTabs.length) % browserTabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = browserTabs.length - 1;
    else return;

    event.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  const sectionClasses = [
    "eva-section",
    publications.length > 0 && "has-added-publications",
    item.kind === "archive" && "archive-open",
  ].filter(Boolean).join(" ");

  return (
    <ProjectsWrapper id="projects" className={sectionClasses}>
      <div className="section-inner">
        <Heading number="03" jp="出版物・プロジェクト">Publications / Projects</Heading>

        <div className={`kernel-shell ${item.kind}`}>
          <div className="kernel-head">
            <span>kuro@localhost: /research</span>
            <span>[tty0]</span>
          </div>

          <ResearchTabs
            browserTabs={browserTabs}
            active={active}
            setActive={setActive}
            tabsRef={tabsRef}
            moveTab={moveTab}
          />

          <div className="kernel-command" aria-hidden="true">
            <span>$</span> {item.kind === "collab" ? "./collaborate" : `cat /research/${item.id}.md`}
          </div>

          {item.kind === "collab" ? (
            <CollaborationPanel item={item} />
          ) : item.kind === "archive" ? (
            <PublicationArchive item={item} />
          ) : item.kind === "current" ? (
            <CurrentResearch item={item} />
          ) : (
            <article
              className="kernel-panel"
              id={`panel-${item.id}`}
              role="tabpanel"
              aria-label={item.title}
              key={item.id}
            >
              <FigurePanel item={item} />

              <div className="kernel-copy">
                <p className="kernel-eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>

                <div className="abstract-block">
                  <span>{item.kind === "publication" ? "ABSTRACT SUMMARY" : "PROJECT SUMMARY"}</span>
                  <p>{item.abstract}</p>
                </div>

                {item.rows?.length ? (
                  <dl className="kernel-facts">
                    {item.rows.slice(0, 3).map(([label, value]) => (
                      <div key={`${label}-${value}`}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {item.link && <ExternalLink href={item.link} className="kernel-link">View on arXiv ↗</ExternalLink>}

                <div className="kernel-tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          )}

          <div className="kernel-status" aria-hidden="true">
            <span>{String(active + 1).padStart(2, "0")}/{String(browserTabs.length).padStart(2, "0")}</span>
            <span className="kernel-status-line" />
            <span>{item.kind}</span>
          </div>
        </div>
      </div>
    </ProjectsWrapper>
  );
};
