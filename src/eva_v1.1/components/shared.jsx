import React from "react";

export const KuroMark = ({ className = "" }) => (
  <span className={`kuro-mark ${className}`} lang="ja" aria-hidden="true">黒</span>
);

export const Heading = ({ children, number, jp }) => (
  <header className="section-heading" data-section={number}>
    <span className="section-number">{number}</span>
    <div className="section-title-wrap">
      {jp && <span className="section-jp" lang="ja">{jp}</span>}
      <h2 data-title={children}>{children}</h2>
    </div>
  </header>
);

export const ExternalLink = ({ href, children, ...props }) => (
  <a
    href={href}
    {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
    {...props}
  >
    {children}
  </a>
);
