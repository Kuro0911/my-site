import React, { useEffect, useState } from "react";
import { Courses } from "../workCompoents/courses";
import { Internship } from "../workCompoents/internship";
import { Others } from "../workCompoents/others";
import { Prog } from "../workCompoents/prog";
import WorkModalWrapper from "./workModal.style";
import folder from "../workCompoents/logos/fold.png";
import Image from "mui-image";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const WorkModal = () => {
  const [active, setActive] = useState("home");
  const handleclick = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const mobData = [
    { name: "Internships", id: "intern" },
    { name: "Languages", id: "prog" },
    { name: "Courses", id: "course" },
    { name: "Others", id: "others" },
  ];
  useEffect(() => {
    window.addEventListener("resize", function (event) {
      document.body.clientWidth < 900
        ? handleclick("home")
        : handleclick("intern");
      // console.log(
      //   document.body.clientWidth +
      //     " wide by " +
      //     document.body.clientHeight +
      //     " high"
      // );
    });
  }, []);

  return (
    <WorkModalWrapper active={active}>
      <div className="wrap">
        <div className="left">
          <div className="button-wrapper">
            <button
              className={
                "button " +
                (active === "intern" || active === "home" ? "act" : "")
              }
              onClick={() => {
                handleclick("intern");
              }}
            >
              <span>Internships</span>
            </button>
            <button
              className={"button " + (active === "prog" ? "act" : "")}
              onClick={() => handleclick("prog")}
            >
              <span>Languages</span>
            </button>
            <button
              className={"button " + (active === "course" ? "act" : "")}
              onClick={() => handleclick("course")}
            >
              <span>Courses</span>
            </button>
            <button
              className={"button " + (active === "others" ? "act" : "")}
              onClick={() => handleclick("others")}
            >
              <span>Others</span>
            </button>
          </div>
        </div>
        <div className="right">
          <span id="home">
            <div className="wrap-mob">
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 3, md: 4 }}
              >
                {mobData.map((val) => (
                  <Grid item xs={6}>
                    <div className="container">
                      <Image src={folder} onClick={() => handleclick(val.id)} />
                      <h1>{val.name}</h1>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </span>
          <span id="intern">
            <Internship />
          </span>
          <span id="prog">
            <Prog />
          </span>
          <span id="course">
            <Courses />
          </span>
          <span id="others">
            <Others />
          </span>
        </div>
      </div>
      <IconButton onClick={() => handleclick("home")} className="homeBtn">
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>
    </WorkModalWrapper>
  );
};
