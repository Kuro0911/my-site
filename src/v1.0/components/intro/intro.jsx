import React, { useState } from "react";
import IntroWrapper, {
  Container,
  DesContainer,
  GreetContainer,
} from "./intro.style";
import "animate.css";
import "./style.scss";

export const Intro = () => {
  const [firstName, setFirstName] = useState("Dhananjai");
  const handleChangeF = () => {
    firstName === "Dhananjai"
      ? setFirstName("ダナンジャイ")
      : setFirstName("Dhananjai");
  };
  return (
    <IntroWrapper id="intro">
      <Container>
        <GreetContainer>
          <text>Hello everyone i am</text>
          <br />
          <text className="jp">こんにちはみんなさん私は</text>
        </GreetContainer>
        <div className="wrapper-glitch">
          <h1
            class={`glitch ${firstName !== "Dhananjai" ? "jp" : "eng"}`}
            data-text={firstName}
            onMouseEnter={handleChangeF}
            onMouseLeave={handleChangeF}
          >
            {firstName}
          </h1>
          <h1 class="glitch eng" data-text="Sharma">
            Sharma
          </h1>
        </div>
        {/* <NameContainer text={firstName}>
          <text onMouseEnter={handleChangeF} onMouseLeave={handleChangeF}>
            {firstName}
          </text>
          <text className="lname"> Sharma</text>
        </NameContainer> */}
        <DesContainer>
          <text>I build stuff for the web</text>
          <br />
          <text className="jp">私はウェブ用のものを作ります</text>
        </DesContainer>
      </Container>
    </IntroWrapper>
  );
};
