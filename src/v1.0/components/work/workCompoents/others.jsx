import React from "react";
import { OtherWrap } from "./local.style";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Others = () => {
  const MoreStuff = [
    {
      name: "Inter-College Basketball Tournament @ ",
      tag: "SRMIST",
      date: "9 May - 10 May 2022",
      description: [
        "Secured the first position in the inter-college basketball tournament at SRMIST",
      ],
      cert: "",
    },
    {
      name: "JLPT N5",
      tag: "",
      date: "July 2022",
      description: ["Recived the JLPT N5 certificate for Japanese language"],
      cert: "",
    },
  ];
  return (
    <OtherWrap>
      <h1>Some Other Stuff I've Done</h1>
      {MoreStuff.map((x) => (
        <div className="para-wrap">
          <h3>
            <code># </code>
            {x.name}
            <a href="aa">{x.tag}</a>
            <div className="date">{x.date}</div>
          </h3>
          <p>
            <ol className="list">
              {x.description.map((val) => (
                <li>
                  <span>
                    <ArrowRightIcon />
                  </span>
                  {val}
                </li>
              ))}
              <li>
                <span>
                  <ArrowRightIcon />
                </span>
                <a href={x.cert}>Certificate</a>
              </li>
            </ol>
          </p>
        </div>
      ))}
    </OtherWrap>
  );
};
