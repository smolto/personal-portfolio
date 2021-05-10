import Landing from 'src/components/Landing/Langing'
import NavBar from 'src/components/NavBar/NavBar'
import ContactForm from 'src/components/ContactForm/ContactForm'
import './HomePage.css'

const menuOptions = [
  {
    link: '/',
    text: 'Home'
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
      <div className="container">
        <NavBar
          menuOptions={menuOptions}
        />

        <div className="landing-container">
          <Landing />
        </div>

        <div className="contact-container">
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
