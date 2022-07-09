import React from "react";
import { SocialWrapper } from "./social.style";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

export const Social = () => {
  return (
    <SocialWrapper>
      <GitHubIcon
        className="icon"
        onClick={() => {
          window.open("https://github.com/Kuro0911");
        }}
      />
      <LinkedInIcon
        className="icon"
        onClick={() => {
          window.open("https://www.linkedin.com/in/dhananjai-sharma09/");
        }}
      />
      <MailIcon
        className="icon"
        onClick={() => {
          window.open("");
        }}
      />
      <div className="line"></div>>
    </SocialWrapper>
  );
};