import 'src/components/Footer/Footer.css'

import GitHubLogo from 'src/shared/assets/github_logo.svg'
import LinkedInLogo from 'src/shared/assets/linkedin_logo.svg'
import FigmaLogo from 'src/shared/assets/figma_logo.svg'

const Footer = () => {
  return(
    <div className="logos">
      <img src={GitHubLogo} alt={GitHubLogo} width={40}/>
      <img src={LinkedInLogo} alt={LinkedInLogo} width={40}/>
      <img src={FigmaLogo} alt={FigmaLogo} width={40}/>
    </div>
  )
}

export default Footer