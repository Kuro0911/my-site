import React from "react";
import InternWrapper from "./local.style";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@mui/material/Button";
import mypdf from "./utils/InternCert.pdf";
export const Internship = () => {
  const handleClick = () => {
    window.open(mypdf);
  };
  const styles = {
    "&.MuiButton-outlined": {
      borderColor: "#64ffda",
    },
  };
  const data = [
    {
      positon: "Web Developer Intern",
      company: "NoteString",
      duration: "October 2022 - November 2022",
      location: "San Francisco, USA",
      resposibilities: [
        {
          data: "Performed development tasks, including software design and coding",
        },
        {
          data: "Wrote modular/reusable/object-oriented Javascript code and used frameworks like Svelte, SvelteKit, etc",
        },
        {
          data: "Documented application changes and developing updates",
        },
      ],
      companyUrl: "/",
    },
    {
      positon: "Frontend-Developer Intern",
      company: "UnityLabs.ai",
      location: "Bangalore, INDIA",
      duration: "Feb 2022 - May 2022",
      resposibilities: [
        {
          data: "Developed new user-facing features using JavaScript Frameworks like ReactJs and NextJs",
        },
        {
          data: "Build reusable components and front-end libraries for future use",
        },
        {
          data: "Documented application changes and developing updates",
        },
      ],
      companyUrl: "/",
    },
  ];
  return (
    <InternWrapper>
      <h1>Where I've Worked</h1>
      {data.map((ele, key) => (
        <div className="para-wrap">
          <h3>
            {ele.positon} @ <a href={ele.companyUrl}>{ele.company}</a>{" "}
            <div className="location">{ele.location}</div>
            <div className="date">{ele.duration}</div>
          </h3>
          <p>
            <ol className="list">
              {ele.resposibilities.map((i) => (
                <li>
                  <span>
                    <ArrowRightIcon />
                  </span>
                  {i.data}
                </li>
              ))}
            </ol>
          </p>
          <Button
            variant="outlined"
            onClick={handleClick}
            className="btn"
            sx={styles}
          >
            <text className="menuTextbtn">CERTIFICATE</text>
          </Button>
        </div>
      ))}
    </InternWrapper>
  );
};
