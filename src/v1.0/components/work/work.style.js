import styled from "@emotion/styled";

const WorkWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #09192f;
`;
export const Container = styled.div`
  margin-top: 2%;
  width: 70%;
  text-align: center;
  @media screen and (max-width: 900px) {
    margin-top: 8%;
  }
`;
export const JpWrapper = styled.div`
  display: flex;
  justify-content: center;
  .exp {
    width: 320px;
  }
  .skill {
    width: 240px;
  }
  text {
    font-family: monospace;
    color: #64ffda;
    font-size: 1.7vw;
  }
  code {
    color: #64ffda;
    font-size: 1.7vw;
  }
  @media screen and (max-width: 900px) {
    .exp {
      width: 290px;
    }
    text {
      font-size: 4vw;
    }
    code {
      font-size: 4vw;
    }
  }
  @media screen and (max-width: 750px) {
    text {
      font-size: 4vw;
    }
    text {
      width: 245px;
    }
    code {
      width: 175px;
    }
  }
`;

export default WorkWrapper;
