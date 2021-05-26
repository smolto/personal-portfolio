import "src/components/Project/Project.css";

import styled from "styled-components";

import gitHubLogo from "src/shared/assets/github_logo.svg";
import desktopImg from "src/shared/assets/desktop_logo.svg";

const ProjectStyled = styled.div.attrs((props) => ({
  // we can define static props

  // or we can define dynamic ones
  bgImg: props.bgImg,
}))`
  background: url(${(props) => props.bgImg}) no-repeat;
  background-size: 100%;
  background-size: cover;
  background-clip: border-box;
  background-position: center;
`;

const Project = ({ bgImg }) => {
  return (
    <ProjectStyled className={`element`} bgImg={bgImg}>
      <div className="element__content">
        <a href="/" target="_blank">
          <img src={gitHubLogo} alt='gitHubLogo'/>
        </a>
        <a href="/" target="_blank">
          <img src={desktopImg} alt='desktopLogo'/>
        </a>
      </div>
    </ProjectStyled>
  );
};

export default Project;
