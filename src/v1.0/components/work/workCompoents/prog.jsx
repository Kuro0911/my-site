import React from "react";
import { ProgrammingWrap } from "./local.style";
import Image from "mui-image";
import cpp from "./logos/cpp_logo.svg";
import c from "./logos/c_logo.svg";
import js from "./logos/js_logo.svg";
import python from "./logos/p_logo.svg";
import reactLogo from "./logos/React-icon.png";
import nextLogo from "./logos/next-js-logo.png";
import htmlLogo from "./logos/htmlLogo.png";
import cssLogo from "./logos/cssLogo.png";
import nodeLogo from "./logos/nodejs-logo.svg";
import Grid from "@mui/material/Grid";

export const Prog = () => {
  const SrcImg = [
    cpp,
    c,
    js,
    python,
    htmlLogo,
    cssLogo,
    reactLogo,
    nextLogo,
    nodeLogo,
  ];
  return (
    <ProgrammingWrap>
      <h1>
        Languages <code className="code-seg">&&</code> Technologies
      </h1>
      <div className="logo-container">
        <div className="logo-top">
          <Image src={cpp} width={75} height={75} />
          <Image src={c} width={75} height={75} />
          <Image src={js} width={75} height={75} />
          <Image src={python} width={75} height={75} />
          <Image src={htmlLogo} width={65} height={65} />
          <Image src={cssLogo} width={65} height={65} />
        </div>
        <div className="logo-bottom">
          <Image src={reactLogo} width={62} height={55} />
          <Image src={nextLogo} width={65} height={65} />
          <Image src={nodeLogo} width={105} height={60} />
        </div>
      </div>
      <div className="logo-container-mob">
        <Grid
          rowSpacing={5}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {SrcImg.map((val) => (
            <Grid item xs={4}>
              <Image src={val} width={80} height={75} />
            </Grid>
          ))}
        </Grid>
      </div>
    </ProgrammingWrap>
  );
};
