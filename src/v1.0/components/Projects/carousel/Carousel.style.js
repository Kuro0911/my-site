import styled from "@emotion/styled";

const Wrapper = styled.div`
  .wrap {
    width: 95vw;
    height: 60vh;
    .carousel-indicators [data-bs-target] {
      background-color: #64ffda;
    }
    .carousel-inner {
      min-height: 60vh;
      .carousel-item {
        min-height: 60vh;
      }
    }
    @media screen and (max-width: 1200px) {
      margin-top: 3%;
      height: 70vh;
    }
    @media screen and (max-width: 900px) {
      margin-top: 3%;
      height: 70vh;
    }
    @media screen and (max-width: 470px) {
    }
  }
  .container {
    display: flex;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .left {
    overflow: hidden;
    width: 70%;
    cursor: pointer;
    @media screen and (max-width: 1024px) {
      display: none;
    }
    .loader {
      overflow: hidden;
      margin-top: 10%;
      margin-bottom: -30%;
      .MuiCircularProgress-svg {
        color: #64ffda;
      }
    }
  }
  .right {
    width: 40%;
    @media screen and (max-width: 1024px) {
      width: 80%;
      margin-left: 10%;
      height: 55vh;
      display: flex;
      flex-direction: column;
      justify-contents: center;
      align-items: center;
    }
    @media screen and (max-width: 1024px) {
      margin-left: -1em;
    }
  }
  .heading {
    overflow: hidden;
    a {
      text-decoration: none;
      color: inherit;
      font-size: xx-large;
      font-family: monospace !important;
      background: linear-gradient(
          to right,
          rgb(100 200 200 / 0%),
          rgb(100 200 200 / 0%)
        ),
        linear-gradient(
          to right,
          rgba(100, 200, 200, 1),
          rgba(100, 200, 200, 1)
        );
      background-size: 100% 3px, 0 3px;
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
      transition: background-size 400ms;
      cursor: pointer;
      margin-left: 1em;
    }
    a:hover {
      background-size: 0 3px, 100% 3px;
    }
    text-align: left;
    color: #64ffda;
  }
  .about {
    margin-left: 1em;
    span {
      color: #64ffda;
      font-size: 10px;
      .css-i4bv87-MuiSvgIcon-root {
        margin-top: -1.6%;
      }
    }
    text-align: left;
    p {
      font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
        -apple-system, system-ui, sans-serif;
      font-size: medium;
      code {
        color: #64ffda;
        font-size: 16px;
      }
    }
    color: #8892b0;
  }
  .tags {
    margin-left: 1em;
    text-align: left;
    span {
      font-size: 14px;
      font-family: monospace !important;
      margin-right: 1em;
    }
    color: #ccd6f6;
  }
  .gotoContainer {
    margin-left: 1em;
    text-align: left;
  }
  .goto {
    margin-right: 1em;
    .icon {
      color: #ccd6f6;
      font-size: 25px;
      transition: 0.1s ease-in;
    }
    .icon:hover {
      cursor: pointer;
      color: #64ffda;
    }
  }
  @media screen and (max-width: 1024px) {
    .heading {
      a {
        margin-bottom: 3em;
        font-size: 2rem;
      }
    }
    .about {
      span {
        font-size: 1rem;
      }
      p {
        text-align: center;
        font-size: 1rem;
        code {
          font-size: 1rem;
        }
      }
    }
    .tags {
      margin-top: 2em;
      span {
        font-size: 1rem;
      }
    }
    .gotoContainer {
      margin-top: 1em;
      .icon {
        font-size: 1rem;
      }
    }
  }
`;

export default Wrapper;
