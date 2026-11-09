import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Heading, KuroMark } from "../shared";
import { socials } from "../../data/portfolioData";

function Basketball() {
  const [shots, setShots] = useState(0);
  const [score, setScore] = useState(0);
  const [shooting, setShooting] = useState(false);
  const [madeShot, setMadeShot] = useState(true);
  const [message, setMessage] = useState("Take a shot.");
  const timer = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const shoot = () => {
    if (shooting) return;
    const made = Math.random() < 0.65;
    setMadeShot(made);
    setShooting(true);
    setShots((value) => value + 1);
    timer.current = window.setTimeout(() => {
      if (made) setScore((value) => value + 1);
      setMessage(made ? "Swish. One more?" : "Off the rim. Try again?");
      setShooting(false);
    }, 700);
  };

  return (
    <article className="interest-card basketball-card">
      <div className="interest-label">
        <span>Basketball</span>
        <span aria-label={`${score} baskets`}>{String(score).padStart(2, "0")}</span>
      </div>
      <div className={`mini-court ${shooting ? (madeShot ? "shooting" : "shooting missed") : ""}`} aria-hidden="true">
        <div className="backboard"><i /></div>
        <div className="hoop-net" />
        <div className="court-line" />
        <span className="basketball" key={shots}>◒</span>
      </div>
      <div className="interest-bottom">
        <p aria-live="polite">{message}</p>
        <button type="button" onClick={shoot} disabled={shooting}>Shoot ↗</button>
      </div>
    </article>
  );
}

export default function Other({ onOpenLegacy }) {
  return (
    <section id="other" className="eva-section other-section">
      <div className="section-inner">
        <Heading number="04" jp="その他">Other</Heading>

        <div className="other-content">
          <div className="interest-grid">
            <Basketball />

            <article className="interest-card programming-card">
              <div className="interest-label"><span>Competitive programming</span></div>
              <div className="code-art" aria-hidden="true"><span>{"{"}</span><i>…</i><span>{"}"}</span></div>
              <p>Solving problems. Then finding a faster way.</p>
              <ExternalLink href="https://github.com/Kuro0911">My GitHub ↗</ExternalLink>
            </article>

            <article className="interest-card japanese-card">
              <div className="interest-label"><span>Learning Japanese</span></div>
              <div className="language-art"><strong>N5</strong><span>↗</span></div>
              <p>Somewhere past JLPT N5.<br />Still learning, a little at a time.</p>
            </article>
          </div>

          <div className="other-connect">
            <div>
              <h3>Feel free to email me to connect.</h3>
              <p><a href="mailto:dhananjaisharma09@gmail.com">Drop me a message ↗</a></p>
            </div>
            <div className="social-links">
              {socials.map((link) => <ExternalLink href={link.href} key={link.label}>{link.label} ↗</ExternalLink>)}
            </div>
          </div>

          <footer>
            <span className="footer-signature"><KuroMark /> Dhananjai Sharma</span>
            <button className="text-button" type="button" onClick={onOpenLegacy}>old website · archive ↗</button>
          </footer>
        </div>
      </div>
    </section>
  );
}
