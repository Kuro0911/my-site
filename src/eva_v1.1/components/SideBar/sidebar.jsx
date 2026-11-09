import React, { useEffect, useMemo, useState } from "react";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { KuroMark } from "../shared";
import { navigationItems } from "../../data/portfolioData";

const iconMap = {
  intro: PersonOutlineRoundedIcon,
  skills: MemoryRoundedIcon,
  timeline: WorkHistoryRoundedIcon,
  projects: TerminalRoundedIcon,
  other: GridViewRoundedIcon,
};

export default function SideBar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => navigationItems.map((item) => ({ ...item, Icon: iconMap[item.id] })),
    [],
  );

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navigate = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <aside className={`side-nav ${open ? "open" : ""}`} aria-label="Portfolio navigation">
      <div className="side-nav-top">
        <button
          className="side-brand"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <KuroMark />
        </button>
        <button
          className="side-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "›"}</span>
        </button>
      </div>

      <nav>
        {items.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            className="side-nav-item"
            aria-current={active === id ? "location" : undefined}
            aria-label={label}
            title={!open ? label : undefined}
            onClick={() => navigate(id)}
          >
            <span className="side-nav-icon" aria-hidden="true"><Icon fontSize="small" /></span>
            <span className="side-nav-label">{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
