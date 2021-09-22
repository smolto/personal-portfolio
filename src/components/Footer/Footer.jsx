import 'src/components/Footer/Footer.css'

import GitHubLogo from 'src/shared/assets/github_logo.svg'
import LinkedInLogo from 'src/shared/assets/linkedin_logo.svg'
import FigmaLogo from 'src/shared/assets/figma_logo.svg'

const Footer = () => {
  return (
    <div className="logos">
      <div className="logo_social_media">
        <a href="https://github.com/smolto" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt={GitHubLogo} width={40} /></a>
      </div>
      <div className="logo_social_media">
        <a href="https://www.linkedin.com/in/santiago-molt%C3%B3-mart%C3%ADnez-89a656179/" target="_blank" rel="noreferrer"><img src={LinkedInLogo} alt={LinkedInLogo} width={40} /></a>
      </div>
      <div className="logo_social_media">
        <a href="https://www.figma.com/file/aCYioom3WYjwr2QTsGBsOo/Mi-portfolio?node-id=0%3A1" target="_blank" rel="noreferrer"><img src={FigmaLogo} alt={FigmaLogo} width={40} /></a>
      </div>
    </div>
  )
}

export default Footer
