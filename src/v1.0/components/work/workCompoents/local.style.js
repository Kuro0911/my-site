import styled from "@emotion/styled";

const InternWrapper = styled.div`
  text-align: center;
  background-color: #09192f;
  color: #ccd6f6;
  height: 60vh;
  scroll-snap-align: start;

  h1 {
    margin-left: 1em;
    margin-bottom: 1em;
    text-decoration: capitailze;
  }
  .btn {
    margin-left: 2em;
    .menuTextbtn {
      font-size: 15px;
      text-decoration: none;
      font-family: monospace;
      color: #64ffda;
    }
  }
  .para-wrap {
    margin-bottom: 2em;
    text-align: left;
    .list {
      li {
        display: flex;
        align-items: center;
        margin-left: 5%;
        margin-top: 1%;
        span {
          color: #64ffda;
          font-size: 10px;
        }
      }
    }
    h3 {
      margin-left: 1em;
      .date {
        font-size: small;
        color: #64ffda;
        margin-top: 0.5%;
      }
      .location {
        font-size: small;
        color: #ee82ee;
        margin-top: 0.5%;
      }
      a {
        text-decoration: none;
        color: #64ffda;
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
      }
      a:hover {
        background-size: 0 3px, 100% 3px;
        color: #b3bedd;
      }
    }
  }
  @media screen and (max-width: 900px) {
    h1 {
      font-size: x-large;
      margin-top: 15%;
    }
    .btn {
      .menuTextbtn {
        font-size: 11px;
      }
    }
    .para-wrap {
      .list {
        li {
          font-size: 11px;
          span {
            font-size: 11px;
          }
        }
      }
      h3 {
        font-size: medium;
        .date {
          font-size: small;
        }
        a {
          font-size: medium;
        }
      }
    }
  }
`;

export const ProgrammingWrap = styled.div`
  text-align: center;
  background-color: #09192f;
  color: #ccd6f6;
  height: 60vh;
  scroll-snap-align: start;
  h1 {
    margin-left: 1em;
    .code-seg {
      color: #64ffda;
    }
    @media screen and (max-width: 900px) {
      font-size: x-large;
      margin-bottom: 1em;
      margin-top: 1em;
    }
  }
  .logo-container {
    margin-left: 1em;
    margin-top: 5%;
    display: flex;
    @media screen and (max-width: 900px) {
      display: none;
    }
    flex-direction: column;
    align-items: center;
    .logo-top {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 10%;
    }
    .logo-bottom {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
  .logo-container-mob {
    @media screen and (min-width: 900px) {
      display: none;
    }
  }
`;

export const CourseWrap = styled.div`
  text-align: center;
  background-color: #09192f;
  color: #ccd6f6;
  height: 60vh;
  scroll-snap-align: start;
  h1 {
    margin-left: 1em;
    margin-bottom: 1em;
  }
  text-align: center;
  .list {
    li {
      display: flex;
      align-items: center;
      font-size: large;
      margin-bottom: 1%;
      span {
        color: #64ffda;
        font-size: large;
      }
      code {
        color: #64ffda;
        font-size: small;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      a:hover {
        color: #64ffda;
      }
    }
  }
  .date {
    font-size: small;
    color: #64ffda;
    margin-top: 0.5%;
  }
  @media screen and (max-width: 900px) {
    h1 {
      font-size: medium;
      margin-top: 15%;
    }
    .list {
      text-align: left;
      li {
        font-size: small;
        span {
          font-size: small;
        }
        code {
          color: #64ffda;
          font-size: x-small;
        }
        a {
          font-size: small;
        }
      }
    }
    .date {
      font-size: small;
    }
  }
`;
export const OtherWrap = styled.div`
  text-align: center;
  background-color: #09192f;
  color: #ccd6f6;
  height: 60vh;
  overflow: hidden;
  scroll-snap-align: start;
  h1 {
    margin-left: 1em;
    margin-bottom: 1em;
    text-decoration: capitailze;
  }
  .btn {
    margin-left: 2em;
    .menuTextbtn {
      font-size: 15px;
      text-decoration: none;
      font-family: monospace;
      color: #64ffda;
    }
  }
  .para-wrap {
    code {
      color: #64ffda;
    }
    text-align: left;
    margin-bottom: 4%;
    .list {
      li {
        display: flex;
        align-items: center;
        margin-left: 5%;
        margin-top: 1%;
        span {
          color: #64ffda;
          font-size: 10px;
        }
        a {
          text-decoration: none;
          color: #64ffda;
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
        a:hover {
          background-size: 0 3px, 100% 3px;
        }
      }
    }
    h3 {
      margin-left: 1em;
      .date {
        font-size: small;
        color: #64ffda;
        margin-top: 0.5%;
        margin-left: 4%;
      }
      a {
        text-decoration: none;
        color: #64ffda;
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
      }
      a:hover {
        background-size: 0 3px, 100% 3px;
        color: #b3bedd;
      }
    }
  }
  @media screen and (max-width: 900px) {
    h1 {
      font-size: small;
      margin-top: 5%;
    }
    .btn {
      margin-left: 2em;
      .menuTextbtn {
        font-size: 10px;
      }
    }
    .para-wrap {
      code {
      }
      .list {
        font-size: small;
        li {
          margin-left: -4%;
          span {
            font-size: 7px;
          }
          a {
            font-size: small;
          }
        }
      }
      h3 {
        font-size: small;
        .date {
          font-size: xx-small;
        }
        a {
          font-size: small;
        }
      }
    }
  }
`;
export default InternWrapper;
