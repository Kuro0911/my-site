import styled from "@emotion/styled";

const ProjectsWrapper = styled.section`
  .kernel-shell {
    --kernel-accent: #c23a2d;
    --kernel-highlight: #ff8d28;
    width: 100%;
    height: min(690px, calc(100dvh - 178px));
    min-height: 535px;
    border: 2px solid #18141b;
    background: #0b0b0c;
    color: #ece9ee;
    box-shadow: 7px 7px 0 rgba(194, 58, 45, .18);
    display: grid;
    grid-template-rows: 34px 56px 30px minmax(0, 1fr) 25px;
    overflow: hidden;
    font-family: "Courier New", Courier, monospace;
  }

  .kernel-shell.project {
    --kernel-accent: var(--purple);
    --kernel-highlight: var(--green);
    box-shadow: 7px 7px 0 rgba(180, 242, 63, .22);
  }

  .kernel-shell.collab {
    --kernel-accent: var(--purple);
    --kernel-highlight: var(--green);
    box-shadow: 7px 7px 0 rgba(103, 53, 150, .16);
  }

  .kernel-head {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 0 12px 0 64px;
    color: #4e4752;
    background: #eeeaf0;
    border-bottom: 1px solid #c7c1ca;
    font-size: 11px;
    font-weight: 700;
  }

  .kernel-head::before {
    content: "";
    position: absolute;
    left: 15px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #df5547;
    box-shadow: 17px 0 0 #e6a33e, 34px 0 0 #79b842;
  }

  .kernel-head span:last-child { color: #8b838f; }

  /* Browser tabs */
  .research-tabs {
    min-width: 0;
    height: 56px;
    display: flex;
    align-items: end;
    gap: 0;
    padding: 8px 10px 0;
    background: #ded9e2;
    position: relative;
    overflow: hidden;
  }

  .research-tabs::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: #0b0b0c;
  }

  .research-tab {
    --tab-bg: #c9c4cd;
    min-width: 0;
    height: 42px;
    flex: 1 1 0;
    margin: 0 3px;
    padding: 0 8px;
    border: 0;
    border-radius: 10px 10px 0 0;
    background: var(--tab-bg);
    color: #554d59;
    font: 800 9px/1.05 "Courier New", Courier, monospace;
    white-space: nowrap;
    position: relative;
    z-index: 1;
    transition: color .18s ease, background-color .18s ease, transform .18s ease;
  }

  .research-tab::before,
  .research-tab::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 9px;
    height: 9px;
    pointer-events: none;
  }

  .research-tab::before {
    left: -9px;
    border-radius: 0 0 9px 0;
    box-shadow: 4px 4px 0 4px var(--tab-bg);
  }

  .research-tab::after {
    right: -9px;
    border-radius: 0 0 0 9px;
    box-shadow: -4px 4px 0 4px var(--tab-bg);
  }

  .research-tab.archive { box-shadow: inset 0 3px 0 #82798b; }
  .research-tab.current { box-shadow: inset 0 3px 0 var(--purple); }
  .research-tab.publication { box-shadow: inset 0 3px 0 var(--orange); }
  .research-tab.project { box-shadow: inset 0 3px 0 var(--green); }
  .research-tab:hover { --tab-bg: #d4cfd8; color: #1b171d; z-index: 2; }

  .research-tab.selected {
    --tab-bg: #0b0b0c;
    z-index: 5;
    color: #fff;
    transform: translateY(1px);
  }

  .research-tab.collab {
    --tab-bg: #c9c4cd;
    flex: 0 0 44px;
    padding: 0;
    display: grid;
    place-items: center;
    color: #4c4550;
    font: 400 24px/1 var(--ui-sans);
  }

  .research-tab.collab.selected {
    --tab-bg: #0b0b0c;
    color: var(--green);
    box-shadow: inset 0 3px 0 var(--purple);
  }

  .tab-label-short { display: none; }

  .tab-divider {
    width: 1px;
    height: 26px;
    flex: 0 0 1px;
    margin: 0 6px 7px;
    background: #aaa3ae;
  }

  .kernel-command {
    padding: 6px 12px;
    color: #8e8493;
    border-bottom: 1px solid #29242c;
    background: #0d0c0e;
    font-size: 10.5px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .kernel-command span { color: var(--kernel-highlight); margin-right: 8px; }

  .kernel-panel {
    min-width: 0;
    min-height: 0;
    display: grid;
    grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr);
    gap: 20px;
    padding: 19px;
    overflow: hidden;
    animation: kernelPanelIn .28s cubic-bezier(.22, 1, .36, 1) both;
  }

  @keyframes kernelPanelIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .kernel-visual {
    min-width: 0;
    min-height: 0;
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
    gap: 9px;
  }

  .figure-box {
    min-height: 0;
    position: relative;
    border: 1px solid #38323c;
    background: #111014;
    overflow: hidden;
  }

  .figure-link { display: block; background: #fff; }
  .figure-link:focus-visible { outline: 2px solid var(--kernel-highlight); outline-offset: -3px; }
  .figure-link img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .figure-box .figure-link { height: 100%; }

  .figure-picker {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .figure-picker button,
  .kernel-link {
    width: fit-content;
    padding: 5px 8px;
    border: 1px solid #514659;
    background: #1d1921;
    color: #eae4ed;
    font: 700 11px/1.35 "Courier New", monospace;
  }

  .figure-picker button { cursor: pointer; }
  .figure-picker button[aria-pressed="true"],
  .figure-picker button:hover,
  .kernel-link:hover { border-color: var(--kernel-highlight); color: var(--kernel-highlight); }
  .kernel-link { display: inline-block; margin-top: 9px; }

  .kernel-panel.current-panel,
  .kernel-panel.archive-panel {
    display: block;
    padding: clamp(15px, 2.2vw, 28px);
  }

  .current-panel h3 {
    margin: 9px 0;
    font: 800 clamp(19px, 2vw, 27px)/1.15 var(--display-serif);
  }

  .current-panel > p:not(.kernel-eyebrow),
  .archive-paper-content p:not(.kernel-eyebrow) {
    max-width: 70ch;
    margin: 0;
    color: #c6becb;
    font: 14px/1.55 var(--ui-sans);
  }

  .current-panel .kernel-tags { margin-top: 15px; }

  .archive-year { margin-bottom: 14px; }
  .archive-year h3 {
    margin: 0 0 6px;
    color: var(--kernel-highlight);
    font: 700 15px/1.3 "Courier New", monospace;
  }

  .archive-paper { border-top: 1px solid #39343d; }
  .archive-paper:last-child { border-bottom: 1px solid #39343d; }
  .archive-paper summary {
    padding: 9px 3px;
    cursor: pointer;
    font: 650 14px/1.4 var(--ui-sans);
  }

  .archive-paper summary:hover { color: var(--kernel-highlight); }
  .archive-paper-content {
    display: grid;
    grid-template-columns: minmax(0, 240px) minmax(0, 1fr);
    align-items: start;
    gap: 14px;
    padding: 2px 3px 12px;
  }

  .archive-paper-content .figure-link { aspect-ratio: 16 / 10; }
  .archive-paper-content .kernel-eyebrow { margin-bottom: 5px; }

  .figure-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 22px;
    color: #6f6674;
    text-align: center;
    background:
      linear-gradient(90deg, transparent 49.7%, #242027 49.7% 50.3%, transparent 50.3%),
      linear-gradient(transparent 49.7%, #242027 49.7% 50.3%, transparent 50.3%),
      #100f11;
  }

  .figure-placeholder::before,
  .figure-placeholder::after { content: ""; position: absolute; pointer-events: none; }
  .figure-placeholder::before { left: 0; top: 0; width: 8px; height: 68%; background: linear-gradient(var(--kernel-accent) 0 78%, var(--kernel-highlight) 78%); }
  .figure-placeholder::after { right: 0; bottom: 0; width: 36%; height: 5px; background: linear-gradient(90deg, var(--kernel-accent), var(--kernel-highlight)); }

  .figure-index {
    position: absolute;
    left: 16px;
    top: 13px;
    color: var(--kernel-highlight);
    font-size: 8.5px;
    font-weight: 800;
    letter-spacing: .12em;
  }

  .figure-placeholder strong {
    color: #d9d4dc;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: clamp(18px, 1.9vw, 27px);
    font-weight: 900;
    letter-spacing: -.04em;
  }

  .figure-placeholder > span:last-of-type {
    max-width: 310px;
    margin-top: 6px;
    color: #827886;
    font-size: 9.5px;
    line-height: 1.4;
  }

  .figure-line { position: absolute; display: block; background: #332e36; }
  .line-a { width: 54%; height: 1px; left: 9%; bottom: 21%; transform: rotate(-8deg); }
  .line-b { width: 1px; height: 44%; right: 18%; top: 10%; transform: rotate(8deg); }

  .kernel-graph {
    position: relative;
    min-height: 100px;
    padding: 10px 12px 9px;
    border: 1px solid #38323c;
    background: #0f0e10;
    overflow: hidden;
  }

  .graph-grid {
    position: absolute;
    inset: 0;
    opacity: .45;
    background-image:
      linear-gradient(to right, #29252c 1px, transparent 1px),
      linear-gradient(to bottom, #29252c 1px, transparent 1px);
    background-size: 25% 100%, 100% 50%;
  }

  .graph-title { position: relative; z-index: 1; margin-bottom: 6px; color: var(--kernel-highlight); font-size: 8px; font-weight: 800; letter-spacing: .12em; }
  .graph-row { position: relative; z-index: 1; margin-bottom: 6px; }
  .graph-row:last-child { margin-bottom: 0; }
  .graph-label { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 3px; color: #98909c; font-size: 9px; line-height: 1.2; }
  .graph-label strong { color: #ddd7df; }
  .graph-track { height: 5px; border: 1px solid #37323a; background: #18161a; overflow: hidden; }
  .graph-fill { display: block; width: calc(var(--metric) * 1%); height: 100%; background: var(--kernel-highlight); transform-origin: left; animation: graphGrow .9s cubic-bezier(.22, 1, .36, 1) var(--delay) both; }

  @keyframes graphGrow {
    from { transform: scaleX(0); opacity: .45; }
    to { transform: scaleX(1); opacity: 1; }
  }

  .kernel-stat-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .kernel-stat { padding: 10px 11px; border: 1px solid #38323c; background: #0f0e10; }
  .kernel-stat strong { display: block; color: var(--kernel-highlight); font: 900 22px/1 "Century Schoolbook", "Times New Roman", serif; }
  .kernel-stat span { color: #918895; font-size: 8px; }

  .kernel-copy {
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .kernel-eyebrow { margin: 0; color: var(--kernel-highlight); font-size: 10px; font-weight: 800; letter-spacing: .09em; }

  .kernel-copy h3 {
    margin: 8px 0 11px;
    color: #fff;
    font-family: "Century Schoolbook", "Times New Roman", Georgia, serif;
    font-size: clamp(22px, 2vw, 31px);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -.04em;
  }

  .abstract-block {
    padding: 11px 12px;
    border-left: 3px solid var(--kernel-accent);
    background: #121014;
  }

  .abstract-block > span { display: block; margin-bottom: 5px; color: var(--kernel-highlight); font-size: 8px; font-weight: 800; letter-spacing: .12em; }
  .abstract-block p { margin: 0; color: #bdb6c1; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 450; line-height: 1.48; }

  .kernel-facts { margin: 10px 0 0; border-top: 1px solid #2f2932; }
  .kernel-facts > div { display: grid; grid-template-columns: 84px minmax(0, 1fr); gap: 9px; padding: 5px 0; border-bottom: 1px solid #29242c; font-size: 10.5px; line-height: 1.35; }
  .kernel-facts dt { color: var(--kernel-highlight); font-weight: 800; }
  .kernel-facts dd { margin: 0; color: #aba3af; white-space: normal; overflow: visible; }

  .kernel-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: auto; padding-top: 8px; }
  .kernel-tags span { padding: 3px 6px; border: 1px solid #39333d; color: #aaa1ad; background: #131115; font-size: 9px; line-height: 1.2; }

  .collab-panel {
    min-height: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(28px, 5vw, 60px);
    text-align: center;
  }

  .collab-copy { width: min(100%, 680px); margin: auto; text-align: center; }
  .collab-plus { display: block; margin-bottom: 6px; color: var(--green); font: 300 52px/1 var(--ui-sans); }
  .collab-copy h3 { margin: 0 0 12px; color: #fff; font-family: "Century Schoolbook", "Times New Roman", Georgia, serif; font-size: clamp(30px, 4vw, 50px); line-height: 1.04; letter-spacing: -.04em; }
  .collab-copy p { max-width: 620px; margin: 0 auto 22px; color: #bdb6c1; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; }
  .collab-mail-button { display: inline-flex; align-items: center; justify-content: center; min-height: 42px; padding: 10px 20px; border: 1px solid var(--green); color: #0b0b0c; background: var(--green); font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: .08em; }
  .collab-mail-button:hover { color: #0b0b0c; background: #c6ff5b; text-decoration: none; }

  .kernel-status { display: flex; align-items: center; gap: 10px; padding: 0 11px; color: #7c737f; background: #151217; border-top: 1px solid #2e2931; font-size: 9px; font-weight: 700; text-transform: uppercase; }
  .kernel-status-line { flex: 1; height: 1px; background: #302a33; }

  @media (max-width: 1050px) and (min-width: 701px) {
    .kernel-shell { min-height: 500px; grid-template-rows: 34px 54px 28px minmax(0, 1fr) 24px; }
    .research-tabs { height: 54px; padding-inline: 7px; }
    .research-tab { margin-inline: 2px; padding-inline: 4px; font-size: 7.7px; }
    .research-tab.collab { flex-basis: 38px; font-size: 21px; }
    .tab-divider { margin-inline: 3px; }
    .kernel-panel { gap: 14px; padding: 15px; }
    .kernel-copy h3 { font-size: clamp(20px, 2.1vw, 27px); }
    .abstract-block p { font-size: 13px; line-height: 1.42; }
    .kernel-facts > div { font-size: 9.5px; }
  }

  /* Mobile: the shell becomes part of the page. Nothing inside it scrolls. */
  @media (max-width: 700px) {
    .kernel-shell {
      height: auto;
      min-height: 0;
      display: block;
      overflow: visible;
      box-shadow: 4px 4px 0 rgba(194, 58, 45, .16);
    }

    .kernel-shell.project { box-shadow: 4px 4px 0 rgba(180, 242, 63, .18); }

    .kernel-head { height: 34px; padding-left: 58px; font-size: 9px; }
    .kernel-head::before { left: 12px; width: 8px; height: 8px; box-shadow: 14px 0 0 #e6a33e, 28px 0 0 #79b842; }

    .research-tabs {
      height: 49px;
      padding: 7px 4px 0;
      overflow: hidden;
    }

    .research-tab {
      height: 37px;
      flex: 1 1 0;
      min-width: 0;
      margin: 0 1px;
      padding: 0 2px;
      font-size: 7.5px;
      letter-spacing: -.02em;
    }

    .research-tab::before { left: -4px; width: 4px; height: 7px; box-shadow: 2px 3px 0 2px var(--tab-bg); }
    .research-tab::after { right: -4px; width: 4px; height: 7px; box-shadow: -2px 3px 0 2px var(--tab-bg); }
    .research-tab.collab { flex: 0 0 28px; font-size: 19px; }
    .tab-divider { margin: 0 1px 6px; height: 20px; }
    .tab-label-full { display: none; }
    .tab-label-short { display: inline; }

    .kernel-command {
      min-height: 29px;
      padding: 6px 9px;
      font-size: 9px;
    }

    .kernel-panel {
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 12px;
      overflow: visible;
    }

    .kernel-visual {
      display: flex;
      flex-direction: column;
      gap: 9px;
      overflow: visible;
    }

    .figure-box { min-height: 0; aspect-ratio: 16 / 10; }
    .kernel-graph { min-height: 0; }
    .kernel-copy { overflow: visible; }
    .kernel-copy h3 { margin: 7px 0 10px; font-size: 20px; line-height: 1.12; }
    .abstract-block { padding: 10px 11px; }
    .abstract-block p { font-size: 13.5px; line-height: 1.5; }
    .kernel-facts > div { grid-template-columns: 72px minmax(0, 1fr); font-size: 10px; padding: 6px 0; }
    .kernel-tags { margin-top: 0; padding-top: 8px; }
    .kernel-status { height: 25px; }

    .collab-panel {
      min-height: 380px;
      padding: 34px 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .collab-copy p { font-size: 14px; }
    .archive-paper-content { grid-template-columns: minmax(0, 1fr); }
    .archive-paper-content .figure-link { max-width: 320px; }
    .research-tab.current { flex-grow: 1.55; }
  }

  @media (max-width: 390px) {
    .research-tab { font-size: 6.8px; padding-inline: 1px; }
    .research-tab.collab { flex-basis: 25px; min-width: 25px; }
    .tab-divider { display: none; }
    .kernel-panel { padding: 10px; }
    .kernel-copy h3 { font-size: 19px; }
  }
  @media (min-width: 701px) {
    &.archive-open .kernel-shell,
    &.has-added-publications .kernel-shell {
      height: auto;
      min-height: max(535px, min(690px, calc(100dvh - 178px)));
      grid-template-rows: 34px auto 30px minmax(auto, 1fr) 25px;
    }

    &.archive-open .kernel-panel,
    &.has-added-publications .kernel-panel { min-height: min-content; }
    &.has-added-publications .kernel-copy { overflow: visible; }
  }

  &.has-added-publications .research-tabs {
    height: auto;
    flex-wrap: wrap;
    row-gap: 4px;
  }

  &.has-added-publications .research-tab:not(.collab) { flex-basis: max-content; }

`;

export default ProjectsWrapper;
