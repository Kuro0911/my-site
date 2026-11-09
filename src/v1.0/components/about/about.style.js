import styled from "@emotion/styled";

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  margin-top: 3%;
  width: 60%;
  text-align: center;
  @media screen and (max-width: 900px) {
    width: 85%;
    margin-top: 8%;
  }
`;
export const TextWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
export const ImageContainer = styled.div`
  width: fit-content;
  .mui-image-wrapper {
    .css-jlmoib {
      border-radius: 100%;
    }
  }
  .mob-view {
    @media screen and (max-width: 900px) {
      display: flex;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
  }
  .hover-effect {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    transition: 0.5s;
    margin-left: 20%;
    margin-top: 5%;
    @media screen and (max-width: 900px) {
      max-width: 115px;
      min-width: 115px;
      max-height: 115px;
      margin-top: 2%;
      margin-right: 2%;
      min-height: 115px;
    }
  }
  .hover-effect:hover {
    box-shadow: 0 0 16px var(--clr);
    @media screen and (max-width: 900px) {
      box-shadow: 0 0 11px var(--clr);
    }
  }
  @media screen and (max-width: 900px) {
    .hover-effect {
      margin-left: 1%;
    }
  }
`;
export const TagContainer = styled.div`
  text-align: right;
  color: #ccd6f6;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: end;
  h4 {
    color: ${(props) => (props.tag === "黒." ? "#64ffda" : "#ccd6f6")};
  }
  margin-top: 5%;
  p {
    color: #8892b0;
    width: 81%;
  }
  @media screen and (max-width: 900px) {
    text-align: left;
    align-items: start;
    h3 {
      font-size: large;
    }
    h4 {
      font-size: medium;
    }
    p {
      font-size: small;
    }
  }
`;
export const TextContainer = styled.div`
  width: 130%;
  color: #ccd6f6;
  text-align: left;
  font-size: large;
  code {
    color: #64ffda;
  }
  border-right: solid;
  padding: 10px;
  border-color: #64ffda;
  @media screen and (max-width: 900px) {
    border-top: solid;
    border-color: #64ffda;
    width: 100%;
    border-right: none;
    font-size: small;
  }
`;

export const JpWrapper = styled.div`
  text {
    font-family: monospace;
    color: #64ffda;
    font-size: 1.7vw;
  }
  @media screen and (max-width: 900px) {
    text {
      font-size: 4vw;
    }
  }
  @media screen and (max-width: 470px) {
    text {
      font-size: 4vw;
    }
  }
`;
export default AboutWrapper;
