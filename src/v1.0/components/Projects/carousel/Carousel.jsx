import React, { useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./Carousel.style";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import Tooltip from "@mui/material/Tooltip";
// import Zoom from "@mui/material/Zoom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CircularProgress from "@mui/material/CircularProgress";

export const CarouselModal = () => {
  const [index, setIndex] = useState(0);
  // const [shibaPlay, setShibaPlay] = useState(false);
  // const [sortPlay, setSortPlay] = useState(false);
  // const [weChatPlay, setWeChatPlay] = useState(false);
  const netflixVideo = useRef(null);
  const [loader, setloader] = useState({
    shiba: true,
    netflix: true,
    wechat: true,
    sort: true,
  });
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // console.log(loader);
  const NetflixVid = `https://gdurl.com/fgE5`;
  // const ShibaVid = `https://gdurl.com/FBfR`;
  // const SortinVid = `https://gdurl.com/qYct`;
  // const WechatVid = `https://gdurl.com/QdRK`;

  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          popper: {
            width: "100%",
          },
          tooltip: {
            fontSize: "15px",
            color: "#ccd6f6",
            backgroundColor: "#64ffda42",
            textAlign: "left",
            marginLeft: "15%",
          },
        },
      },
    },
  });
  const sortAlgoNames = [
    "Created intuitive user interfaces to enhance the user experience during algorithm visualization.",
    "Utilized modern web technologies such as React, JavaScript, HTML, and CSS to build a responsive and performant web application.",
    "Actively engaged in iterative development and incorporated user feedback to continuously improve the website's features and usability",
    "Algorithms such as Selection Sort, Merge Sort, Depth First Search, etc are supported",
  ];
  return (
    <Wrapper>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="wrap"
      >
        <Carousel.Item>
          <ThemeProvider theme={theme}>
            {/* <Tooltip
              title={
                <React.Fragment>
                  <div>
                    <code style={{ color: "#64ffda" }}>{"#TIP"}</code>
                    <br />
                    <span>{"You can interact with the project"}</span>
                  </div>
                </React.Fragment>
              }
              arrow={true}
              disableFocusListener
              TransitionComponent={Zoom}
              placement={"bottom-start"}
            > */}
            <div className="container">
              <div className="left">
                {/* {loader.shiba ? (
                    <div className="loader">
                      <CircularProgress size={100} />
                    </div>
                  ) : (
                    <></>
                  )}
                  <span
                    onMouseEnter={() => setShibaPlay(true)}
                    onMouseLeave={() => setShibaPlay(false)}
                  >
                    <ReactPlayer
                      url={ShibaVid}
                      playing={shibaPlay}
                      loop
                      height={"90%"} 
                      width={"100%"}
                      style={{ overflow: "hidden" }}
                      onReady={() => setloader({ ...loader, shiba: false })}
                    />
                  </span> */}
                <iframe
                  src="https://kuro0911.github.io/Shiba---A-chat-Bot/"
                  title="shiba"
                  height={540}
                  width={800}
                />
              </div>

              <div className="right">
                <div className="heading">
                  <a href="https://kuro0911.github.io/Shiba---A-chat-Bot/">
                    Shiba The crypto bot
                  </a>
                </div>
                <br />
                <div className="about">
                  <p>
                    Shiba is a <code>CHATBOT</code> made to help new users to
                    get into crypto-currency by
                    <br />
                    <br />
                    <span>
                      <ArrowRightIcon />
                    </span>
                    Providing them various trading platforms to choose from{" "}
                    <br />
                    <span>
                      <ArrowRightIcon />
                    </span>
                    Implementing basic trading strategies to help the users{" "}
                    <br />
                    <span>
                      <ArrowRightIcon />
                    </span>
                    Providing the real time price of various coins using API
                    <br />
                  </p>
                </div>
                <br />
                <div className="tags">
                  <span>CryptoCurrency</span>
                  <span>JavaSript</span>
                  <span>ReactJS</span>
                  <span>ChatBot</span>
                </div>
                <br />
                <div className="gotoContainer">
                  <a
                    className="goto"
                    href="https://github.com/Kuro0911/Shiba---A-chat-Bot"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                  <a
                    className="goto"
                    href="https://kuro0911.github.io/Shiba---A-chat-Bot/"
                  >
                    <LaunchIcon className="icon" />
                  </a>
                </div>
              </div>
            </div>
            {/* </Tooltip> */}
          </ThemeProvider>
        </Carousel.Item>
        <Carousel.Item>
          <ThemeProvider theme={theme}>
            {/* <Tooltip
              title={
                <React.Fragment>
                  <code style={{ color: "#64ffda" }}>{"#TIP"}</code>
                  <br />
                  <span>{"You can interact with the project"}</span>
                </React.Fragment>
              }
              arrow
              disableFocusListener
              TransitionComponent={Zoom}
              placement={"bottom-start"}
            > */}
            <div className="container">
              <div className="left">
                {/* {loader.sort ? (
                    <div className="loader">
                      <CircularProgress size={100} />
                    </div>
                  ) : (
                    <></>
                  )}
                  <span
                    onMouseEnter={() => setSortPlay(true)}
                    onMouseLeave={() => setSortPlay(false)}
                  >
                    <ReactPlayer
                      url={SortinVid}
                      playing={sortPlay}
                      loop
                      style={{ overflow: "hidden" }}
                      height={"90%"}
                      width={"100%"}
                      onReady={() => setloader({ ...loader, sort: false })}
                    />
                  </span> */}
                <iframe
                  src="https://algovizlab.netlify.app/"
                  title="algoviz"
                  height={540}
                  width={800}
                />
              </div>
              <div className="right">
                <div className="heading">
                  <a href="https://algovizlab.netlify.app/">AlgoViz</a>
                </div>
                <br />
                <div className="about">
                  <p>
                    Independently conceptualized, designed, developed, and
                    deployed a website using Next.js framework to enable users
                    to visualize algorithms. <br />
                    <br />
                    {sortAlgoNames.map((val) => {
                      return (
                        <div style={{ dispay: "flex", fontFamily: "inherit" }}>
                          <span>
                            <ArrowRightIcon />
                          </span>
                          {val}
                        </div>
                      );
                    })}
                  </p>
                </div>
                <div className="tags">
                  <span>Sorting Algorithms</span>
                  <span>JavaSript</span>
                  <span>NextJS</span>
                </div>
                <br />
                <div className="gotoContainer">
                  <a
                    className="goto"
                    href="https://github.com/Kuro0911/Sorting-Visualizer"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                  <a className="goto" href="https://algovizlab.netlify.app/">
                    <LaunchIcon className="icon" />
                  </a>
                </div>
              </div>
            </div>
            {/* </Tooltip> */}
          </ThemeProvider>
        </Carousel.Item>
        <Carousel.Item>
          <ThemeProvider theme={theme}>
            {/* <Tooltip
              title={
                <React.Fragment>
                  <code style={{ color: "#64ffda" }}>{"#TIP"}</code>
                  <br />
                  <span>{"Hover on the picture to play video"}</span>
                </React.Fragment>
              }
              arrow
              disableFocusListener
              TransitionComponent={Zoom}
              placement={"bottom-start"}
            > */}
            <div className="container">
              <div className="left">
                {loader.netflix ? (
                  <div className="loader">
                    <CircularProgress size={100} />
                  </div>
                ) : (
                  <></>
                )}
                <div
                  style={{ width: "100%", height: "90%", overflow: "hidden" }}
                  onMouseEnter={() => netflixVideo.current?.play().catch(() => {})}
                  onMouseLeave={() => netflixVideo.current?.pause()}
                >
                  <video
                    ref={netflixVideo}
                    src={NetflixVid}
                    aria-label="Netflix Clone demo"
                    preload="auto"
                    loop
                    playsInline
                    style={{ width: "100%", height: "100%" }}
                    onCanPlay={() => setloader((value) => ({ ...value, netflix: false }))}
                    onError={() => setloader((value) => ({ ...value, netflix: false }))}
                  />
                  {/* <iframe
                      src="https://kuro0911.github.io/netflix-clone/"
                      title="netflix"
                      height={350}
                      width={650}
                    /> */}
                </div>
              </div>
              <div className="right">
                <div className="heading">
                  <a href="https://kuro0911.github.io/netflix-clone/">
                    Netflix Clone
                  </a>
                </div>
                <br />
                <div className="about">
                  <p>
                    Successfully built and deployed a Netflix clone web
                    application using React.js. Implemented a responsive user
                    interface replicating the look and feel of the Netflix
                    platform. Integrated APIs to fetch and display movie and TV
                    show data, including genres, ratings, and thumbnails.
                  </p>
                </div>
                <br />
                <div className="tags">
                  <span>ReactJS</span>
                  <span>JavaScript</span>
                  <span>API</span>
                  <span>react-youtube</span>
                </div>
                <br />
                <div className="gotoContainer">
                  <a
                    className="goto"
                    href="https://github.com/Kuro0911/netflix-clone"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                  <a
                    className="goto"
                    href="https://kuro0911.github.io/netflix-clone/"
                  >
                    <LaunchIcon className="icon" />
                  </a>
                </div>
              </div>
            </div>
            {/* </Tooltip> */}
          </ThemeProvider>
        </Carousel.Item>
        <Carousel.Item>
          <ThemeProvider theme={theme}>
            {/* <Tooltip
              title={
                <React.Fragment>
                  <code style={{ color: "#64ffda" }}>{"#TIP"}</code>
                  <br />
                  <span>{"Hover on the picture to play video"}</span>
                </React.Fragment>
              }
              arrow
              disableFocusListener
              TransitionComponent={Zoom}
              placement={"bottom-start"}
            > */}
            <div className="container">
              <div className="left">
                {/* {loader.wechat ? (
                    <div className="loader">
                      <CircularProgress size={100} />
                    </div>
                  ) : (
                    <></>
                  )} */}
                {/* <span
                    onMouseEnter={() => setWeChatPlay(true)}
                    onMouseLeave={() => setWeChatPlay(false)}
                  >
                    <ReactPlayer
                      url={WechatVid}
                      playing={weChatPlay}
                      loop
                      style={{ overflow: "hidden" }}
                      height={"90%"}
                      width={"100%"}
                      onReady={() => setloader({ ...loader, wechat: false })}
                    />
                  </span> */}
                <iframe
                  src="https://master--reden-app.netlify.app/auth"
                  title="reden"
                  height={540}
                  width={800}
                />
              </div>
              <div className="right">
                <div className="heading">
                  <a href="https://wechat-bykuro.web.app/">
                    Reden Chatting Website
                  </a>
                </div>
                <br />
                <div className="about">
                  <p>
                    Implemented real-time messaging functionality, allowing
                    users to engage in instant text-based conversations Also
                    integrated <code>Firebase's</code> authentication and
                    database services to ensure secure user registration, login,
                    and data storage
                  </p>
                </div>
                <br />
                <div className="tags">
                  <span>Svetekit</span>
                  <span>Firebase</span>
                  <span>NodeJs</span>
                </div>
                <br />
                <div className="gotoContainer">
                  <a
                    className="goto"
                    href="https://master--reden-app.netlify.app/"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                  <a
                    className="goto"
                    href="https://github.com/Kuro0911/fuwa-git"
                  >
                    <LaunchIcon className="icon" />
                  </a>
                </div>
              </div>
            </div>
            {/* </Tooltip> */}
          </ThemeProvider>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};
