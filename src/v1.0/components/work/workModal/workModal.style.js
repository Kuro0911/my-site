import styled from "@emotion/styled";

const WorkModalWrapper = styled.div`
  margin-top: 5%;
  background-color: white;
  width: 70vw;
  height: 60vh;
  overflow: hidden;
  .wrap {
    display: flex;
  }
  .wrap-mob {
    scroll-snap-align: start;
    display: none;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    overflow-y: hidden;
    scrollbar-width: none;
    @media screen and (max-width: 900px) {
      margin-top: 15%;
      display: flex;
      color: white;
      height: 60vh;
    }
    .container {
      color: #64ffda;
      h1 {
        text-transform: capitalize;
        font-family: monospace;
        @media screen and (max-width: 900px) {
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    background-color: #09192f;
  }
  .left {
    border-right-style: solid;
    border-color: #64ffda;
    background-color: #09192f;
    width: 25%;
    @media screen and (max-width: 900px) {
      display: none;
    }
    height: 60vh;
    .button-wrapper {
      display: flex;
      flex-direction: column;
      .button {
        span {
          text-decoration: none;
          color: inherit;
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
        }
        // span:hover {
        //   background-size: 0 3px, 100% 3px;
        // }
        text-align: left;
        margin-top: 10%;
        background-color: transparent;
        border: none;
        color: #64ffda;
        font-size: 1.7vw;
      }
      .act {
        span {
          // color: #ccd6f6;
          background-size: 0 3px, 100% 3px;
        }
      }
    }
  }
  .right {
    width: 75%;
    height: 60vh;
    background-color: transparent;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    overflow-y: hidden;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    @media screen and (max-width: 900px) {
      width: 100%;
      overflow-y: hidden;
    }
  }
  .homeBtn {
    color: #64ffda;
    margin-top: -18%;
    transform: rotate(90deg);
    display: ${(props) => (props.active === "home" ? "none" : "")};
    @media screen and (min-width: 900px) {
      display: none;
    }
  }
`;
export default WorkModalWrapper;
