import React, { useState } from "react";
import "./topbar.scss";
import Button from "@mui/material/Button";
import mypdf from "./utils/Dhananjai-sharma-resume.pdf";
import "animate.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListWrap } from "./topbar.style";
import { IconButton } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Pokimon } from "./pokimon/pokimon";

export default function Topbar({ menuOpen, setMenuOpen, onChange }) {
  const [state, setState] = React.useState({
    right: false,
  });
  const handleClick = (id) => {
    setState({ right: false });
    onChange(id);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const styles = {
    "&.MuiButton-outlined": {
      borderColor: "#64ffda",
    },
  };
  const [text, setText] = useState("黒.");
  const handleChange = () => {
    text === "黒." ? setText("KURO.") : setText("黒.");
  };
  const handleClickpdf = () => {
    window.open(mypdf);
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" onPointerEnter={handleChange}>
            {text}
          </a>
        </div>
        <div className="right">
          <a href="#about" className="menuText">
            <text className="kanji">一</text> About
          </a>
          <a href="#work" className="menuText">
            <text className="kanji">二</text> Experience
          </a>
          <a href="#projects" className="menuText">
            <text className="kanji">三</text> Projects
          </a>
          <a href="#contact" className="menuText">
            <text className="kanji">四</text> Contact
          </a>
          <Button
            variant="outlined"
            onClick={handleClickpdf}
            className="btn"
            sx={styles}
          >
            <text className="menuTextbtn">resume</text>
          </Button>
          <IconButton
            className="poki"
            size="large"
            onClick={() => setState({ right: "true" })}
          >
            <CatchingPokemonIcon fontSize="large" />
          </IconButton>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
            PaperProps={{
              sx: {
                backgroundColor: "#09192f",
                width: "65%",
              },
            }}
          >
            <ListWrap>
              <List>
                <ListItem>
                  <a
                    href="#about"
                    className="menuText"
                    onClick={() => handleClick("about")}
                  >
                    <text className="kanji">一</text>&nbsp;&nbsp;About
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="#work"
                    className="menuText"
                    onClick={() => handleClick("work")}
                  >
                    <text className="kanji">二</text>&nbsp;&nbsp;Experience
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="#projects"
                    className="menuText"
                    onClick={() => handleClick("projects")}
                  >
                    <text className="kanji">三</text>&nbsp;&nbsp;Projects
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="#contact"
                    className="menuText"
                    onClick={() => handleClick("contact")}
                  >
                    <text className="kanji">四</text>&nbsp;&nbsp;Contact
                  </a>
                </ListItem>
                <ListItem>
                  <Button
                    variant="outlined"
                    onClick={handleClickpdf}
                    className="btn-menu"
                    sx={styles}
                  >
                    <text className="menuTextbtn">resume</text>
                  </Button>
                </ListItem>
                <ListItem>
                  <Pokimon />
                </ListItem>
              </List>
            </ListWrap>
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}
