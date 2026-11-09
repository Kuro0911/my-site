import styled from "@emotion/styled";

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  margin-top: 10%;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 900px) {
    text-align: left;
    margin-top: 15%;
  }
  @media screen and (max-width: 470px) {
    margin-top: 25%;
  }
`;
export const GreetContainer = styled.div`
  animation: fadeInDown 1.5s;
  text {
    font-size: 1.4vw;
    font-family: monospace;
    color: #64ffda;
  }
  .jp {
    font-size: 1vw;
  }
  @media screen and (max-width: 900px) {
    margin-left: 2em;
    text {
      font-size: 5vw;
      font-family: monospace;
      color: #64ffda;
    }
    .jp {
      font-size: 2vw;
    }
  }
  @media screen and (max-width: 470px) {
    text {
      font-size: 1.5rem;
      font-family: monospace;
      color: #64ffda;
    }
    .jp {
      font-size: 1.5rem;
    }
    margin-bottom: 3em;
  }
`;
export const NameContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: none;
  }
  animation: fadeIn 2s;
  text {
    cursor: pointer;
    color: ${(props) =>
      props.text === "ダナンジャイ" ? "#64ffda" : "#ccd6f6"};
    font-size: ${(props) => (props.text === "ダナンジャイ" ? "6vw" : "7vw")};
    font-weight: 650;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
  .lname {
    font-size: 7vw;
    color: #ccd6f6;
    margin-left: ${(props) => (props.text === "ダナンジャイ" ? "-2.45%" : "0")};
  }
  @media screen and (max-width: 900px) {
    margin-left: 5%;
    text {
      font-size: ${(props) => (props.text === "ダナンジャイ" ? "9vw" : "10vw")};
    }
    .lname {
      font-size: 10vw;
    }
  }
  @media screen and (max-width: 470px) {
    text {
      font-size: ${(props) => (props.text === "ダナンジャイ" ? "9vw" : "11vw")};
    }
    .lname {
      font-size: ${(props) => (props.text === "ダナンジャイ" ? "9vw" : "11vw")};
    }
  }
`;

export const DesContainer = styled.div`
  animation: fadeInUp 1.5s;
  text {
    color: #8892b0;
    font-size: 2vw;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
  .jp {
    font-size: 1.6vw;
  }
  @media screen and (max-width: 900px) {
    margin-left: 2em;
    text {
      font-size: 4vw;
    }
    .jp {
      font-size: 3.6vw;
    }
  }
  @media screen and (max-width: 470px) {
    text {
      font-size: 1.5rem;
    }
    .jp {
      font-size: 1.5rem;
    }
  }
`;

export default IntroWrapper;
