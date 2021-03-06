import { useHistory } from 'react-router'

// COMPONENTS
import Landing from 'src/components/Landing/Landing'
import NavBar from 'src/components/NavBar/NavBar'
import ContactForm from 'src/components/ContactForm/ContactForm'
import Footer from 'src/components/Footer/Footer'
import Button from 'src/components/Button/Button'

// IMAGES
import signature from 'src/shared/assets/signature.svg'
import landingImg from 'src/shared/assets/landing-img.svg'
import searchIcon from 'src/shared/assets/search_icon.svg'

// STYLES
import './HomePage.css'

// MENU OPTIONS
const menuOptions = [
  {
    link: '/',
    text: 'Home',
    selected: 'selected'
  },
  {
    link: '/about',
    text: 'About me'
  },
  {
    link: '/work',
    text: 'My work'
  }
]

const HomePage = () => {
  const history = useHistory()

  const htmlItem1 =
    (
      <div className="landing-message">
        <h3 className={'landing-message__subtitle'}>Tech Lover</h3>
        <h1 className={'landing-message__title'}>Hi, I’m Santi. Welcome to my portfolio</h1>
        <div className={'landing-message__img'}>
          <img src={signature} alt="sign" width={150} />
        </div>
        <div className="landing-message__my-work-container">
          <div className="landing-message__my-work-container__button">
            <Button
              text={'My Work'}
              cssClass={'primary-smm medium-text'}
              icon={searchIcon}
              iconSize={30}
              parentFuction={() => {
                history.push('/work')
              }}
            />
          </div>
        </div>
      </div>
    )

  const htmlItem2 =
    (
      <div className="landing-img">
        <img src={landingImg} alt="landing_img" width={700} />
      </div>
    )

  return (
    <>
      <div className="smm__container">
        <div className="smm__container-wrapper">
          <div className="smm__container-wrapper__components">
            <div className="smm__container-wrapper__components__nav-component">
              <NavBar
                menuOptions={menuOptions}
              />
            </div>

            <Landing
              htmlItem1={htmlItem1}
              htmlItem2={htmlItem2}
            />
          </div>
        </div>

        <div className="smm__container-wrapper">
          <div className="smm__container-wrapper__contact-container">
            <div className="smm__container-wrapper">
              <div className="smm__container-wrapper__components">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="smm__container-wrapper__footer-component" id='contact'>
            <div className="smm__container-wrapper">
              <div className="smm__container-wrapper__components">
                <Footer />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default HomePage
