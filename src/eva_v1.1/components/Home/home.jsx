import React from "react";
import { ExternalLink } from "../shared";
import profile from "../../assets/profile.jpg";
import { socials } from "../../data/portfolioData";

export default function Home() {
  return (
    <section
      id="intro"
      className="eva-section home-section"
      aria-labelledby="home-title"
    >
      <div className="section-inner">
        <div className="home-layout">
          <div className="home-copy">
            <p className="greeting">
              Hello everyone, I am
              <span lang="ja">こんにちは、ダナンジャイです</span>
            </p>

            <h1 className="eva-name" id="home-title">
              Dhananjai Sharma
            </h1>

            <p className="home-line">
              I like hard problems. Bonus points if I regret picking them.
            </p>

            <div className="home-about">
              <p>
                I'm a <strong>Cybersecurity Research Engineer</strong> at ST
                Engineering. My research focuses on AI security, particularly
                embodied AI security and privacy-preserving inference.
              </p>
              <p>
                I completed my master's at NUS, where I studied AI and
                trustworthy machine learning and wrote my dissertation on AI
                forensics. During my internship as an AI Engineer, I worked on
                RAG and document AI for financial document analysis. My other
                projects have explored automated penetration testing, smart
                contract security, and generative models.
              </p>
              <p>
                I studied computer science with a focus on cybersecurity at SRM,
                where I also led the university basketball team.
              </p>
              <p>
                Outside research, I still play basketball and enjoy competitive
                programming, Soulslike games, and first-person shooters.
              </p>
            </div>

            <div className="home-actions">
              <a
                className="button"
                href="https://docs.google.com/document/d/1mqODObqFqd0ThEEOgWX9iLGsqa1mswxI/export?format=pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume ↗
              </a>
              {socials.map((link) => (
                <ExternalLink href={link.href} key={link.label}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>

          <div
            className="hero-portrait"
            aria-label="Portrait of Dhananjai Sharma"
          >
            <div className="portrait-signal signal-purple" aria-hidden="true" />
            <div className="portrait-signal signal-green" aria-hidden="true" />
            <div className="portrait-signal signal-red" aria-hidden="true" />
            <div className="portrait-signal signal-orange" aria-hidden="true" />
            <div className="hero-portrait-media">
              <img src={profile} alt="Dhananjai Sharma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
