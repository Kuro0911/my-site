import styled from "@emotion/styled";

const ContactWrapper = styled.div`
  display: flex;
  background-color: #09192f;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Container = styled.div`
  margin-top: 3%;
  width: 50%;
  text-align: center;
  overflow: hidden;
  @media screen and (max-width: 900px) {
    margin-top: 10%;
    width: 75%;
  }
  @media screen and (max-width: 470px) {
    width: 85%;
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
export const HeadWrapper = styled.div`
  text {
    width: 80px;
    color: #ccd6f6;
    font-size: 4.8vw;
    font-weight: 600;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
`;
export const DesContainer = styled.div`
  margin-top: 5%;
  text {
    color: #8892b0;
    font-size: 1.5vw;
    font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
      -apple-system, system-ui, sans-serif;
  }
  a {
    cursor: pointer;
    color: #64ffda;
    font-size: 1.5w;
    text-decoration: underline;
  }
  @media screen and (max-width: 900px) {
    text {
      font-size: 3vw;
    }
    a {
      font-size: 3vw;
    }
  }
  @media screen and (max-width: 470px) {
    text {
      font-size: 4vw;
    }
    a {
      font-size: 4vw;
    }
  }
`;
export const Footer = styled.div`
  text-align: center;
  text {
    font-size: 1vw;
    font-family: monospace;
    color: #8892b0;
  }
  .jp {
    color: #64ffda;
    font-size: 1vw;
  }
  @media screen and (max-width: 900px) {
    text {
      font-size: 2vw;
    }
    .jp {
      font-size: 2vw;
    }
  }
  @media screen and (max-width: 470px) {
    text {
      font-size: 3vw;
    }
    .jp {
      font-size: 3vw;
    }
  }
`;
export default ContactWrapper;
