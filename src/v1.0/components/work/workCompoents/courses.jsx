import React from "react";
import { CourseWrap } from "./local.style";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Courses = () => {
  const NameCourse = {
    withLab: [
      "Data Structures and Algorithms",
      "Design and Analysis of Algorithms",
      "Advanced Programming Practice",
      "Operating systems",
    ],
    noLab: [
      {
        name: "Usable Security, University of Maryland",
        link: "https://coursera.org/share/971a508fff958faeb2a132c9535a660e",
      },
      {
        name: "Introduction to Cybersecurity Tools & Cyber Attacks IBM",
        link: "https://coursera.org/share/971a508fff958faeb2a132c9535a660e",
      },
    ],
  };
  return (
    <CourseWrap>
      <h1>Courses I've Taken</h1>
      <p>
        <ol className="list">
          {NameCourse.withLab.map((i) => (
            <li>
              <span>
                <ArrowRightIcon />
              </span>
              {i} &nbsp;<code>(+ With Lab)</code>
            </li>
          ))}
          {NameCourse.noLab.map((i) => (
            <li>
              <span>
                <ArrowRightIcon />
              </span>
              <a href={i.link}>{i.name}</a>
            </li>
          ))}
        </ol>
      </p>
    </CourseWrap>
  );
};
