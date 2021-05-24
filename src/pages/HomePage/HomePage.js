//COMPONENTS
import Landing from 'src/components/Landing/Landing'
import NavBar from 'src/components/NavBar/NavBar'
import ContactForm from 'src/components/ContactForm/ContactForm'
import Footer from 'src/components/Footer/Footer'
import Button from 'src/components/Button/Button'

//IMAGES
import signature from 'src/shared/assets/signature.svg'
import landing_img from 'src/shared/assets/landing-img.svg'
import search_icon from 'src/shared/assets/search_icon.svg'


import './HomePage.css'

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

  const htmlItem1 =
    (
      <div className="landing-message">
        <h3 className={`landing-message__subtitle`}>Tech Lover</h3>
        <h1 className={`landing-message__title`}>Hi, I’m Santi. Welcome to my portfolio</h1>
        <div className={`landing-message__img`}>
          <img src={signature} alt="sign" width={150} />
        </div>
        <div className="landing-message__my-work-container">
          <div className="landing-message__my-work-container__button">
            <Button
              text={`My Work`}
              cssClass={`primary-smm medium-text`}
              icon={search_icon}
              iconSize={30}
            />
          </div>
        </div>
      </div>
    )

  const htmlItem2 =
    (
      <div className="landing-img">
        <img src={landing_img} alt="landing_img" width={700} />
      </div>
    )


  return (
    <>
      <div className="smm__container">
        <div className="smm__container-wrapper">
          <NavBar
            menuOptions={menuOptions}
            showContactButton={true}
          />

          <Landing
            htmlItem1={htmlItem1}
            htmlItem2={htmlItem2}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage

{/* <div className="landing">
        <div className="container">
          <NavBar
            menuOptions={menuOptions}
          />

          <div className="landing-container">
            <Landing>

            </Landing>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="container">
          <div className="container__contact">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <Footer />
        </div>
      </div> */}
