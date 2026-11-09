import React, { useCallback, useEffect, useRef, useState } from "react";
import "./main.scss";
import SideBar from "./components/SideBar/sidebar";
import Home from "./components/Home/home";
import Skills from "./components/Skills/skills";
import Timeline from "./components/Timeline/timeline";
import { Projects } from "./components/Projects/projects";
import Other from "./components/Other/other";

export default function Main({ onOpenLegacy }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState("intro");
  const [additions, setAdditions] = useState({ education: [], publications: [] });

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/portfolio", { signal: controller.signal })
      .then((response) => {
        const contentType = response.headers.get("content-type");
        return response.ok && contentType?.includes("application/json") ? response.json() : null;
      })
      .then((data) => {
        if (Array.isArray(data?.education) && Array.isArray(data?.publications)) {
          setAdditions(data);
        }
      })
      .catch(() => {
        // The bundled portfolio remains available without the API.
      });

    return () => controller.abort();
  }, []);

  const navigate = useCallback((id) => {
    const container = containerRef.current;
    if (!container || !id) return;

    const target = container.querySelector(`#${id}`);
    if (!target) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const top = Math.max(0, target.offsetTop);

    container.scrollTo({
      top,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const sections = Array.from(container.querySelectorAll(".eva-section[id]"));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: container,
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-8% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App_v_1_1">
      <SideBar active={active} onNavigate={navigate} />
      <main
        ref={containerRef}
        className="eva-main"
        tabIndex={-1}
        aria-label="Dhananjai Sharma portfolio"
      >
        <Home />
        <Skills />
        <Timeline education={additions.education} />
        <Projects publications={additions.publications} />
        <Other onOpenLegacy={onOpenLegacy} />
      </main>
    </div>
  );
}
