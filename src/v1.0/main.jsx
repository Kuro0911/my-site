import React from "react";
import { useState } from "react";
import Topbar from "./components/topbar/topbar";
import Menu from "./components/menu/menu";
import "./main.scss";
import { Projects } from "./components/Projects/projects";
import { Intro } from "./components/intro/intro";
import { Work } from "./components/work/work";
import { Social } from "./components/Social/social";
import { Contact } from "./components/contact/Contact";
import { About } from "./components/about/about";

export default function OldVer() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [active, setActive] = useState("intro");
  const onChangeId = (id) => {
    // setActive(id);
    const element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App_v_1_0">
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onChange={onChangeId}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Social />
      <div className="sections">
        <Intro />
        <About />
        <Work />
        <Projects className="long" />
        <Contact />
      </div>
    </div>
  );
}
