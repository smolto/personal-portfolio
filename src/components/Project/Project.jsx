import 'src/components/Project/Project.css'

import styled from 'styled-components'

import gitHubLogo from 'src/shared/assets/github_logo.svg'
import desktopImg from 'src/shared/assets/desktop_logo.svg'

const ProjectStyled = styled.div.attrs((props) => ({
  bgImg: props.bgImg
}))`
  background: url(${(props) => props.bgImg}) no-repeat;
  background-size: 100%;
  background-size: cover;
  background-clip: border-box;
  background-position: center;
`

const Project = ({ bgImg, gitHubLink = '/', webLink = '/' }) => {
  return (
    <ProjectStyled className={'element'} bgImg={bgImg}>
      <div className="element__content">
        <a href={gitHubLink} target="_blank" rel="noreferrer">
          <img src={gitHubLogo} alt='gitHubLogo'/>
        </a>
        <a href={webLink} target="_blank" rel="noreferrer">
          <img src={desktopImg} alt='desktopLogo'/>
        </a>
      </div>
    </ProjectStyled>
  )
}

export default Project
