import Landing from 'src/components/Landing/Landing'
import NavBar from 'src/components/NavBar/NavBar'
import ContactForm from 'src/components/ContactForm/ContactForm'
import Footer from 'src/components/Footer/Footer'

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


  return (
    <>
      <div className="landing">
        <div className="container">
          <NavBar
            menuOptions={menuOptions}
          />

          <div className="landing-container">
            <Landing />
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
      </div>
    </>
  )
}

export default HomePage
