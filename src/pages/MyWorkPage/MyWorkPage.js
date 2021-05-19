import NavBar from 'src/components/NavBar/NavBar'
import Footer from 'src/components/Footer/Footer'

import 'src/pages/MyWorkPage/MyWorkPage.css'

import signature from 'src/shared/assets/signature.svg'

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
    text: 'My work',
    selected: 'selected'
  }
]

export const MyWorkPage = () => {
  return (
    <>
      <div className="landing">
        <div className="container">
          <NavBar
            menuOptions={menuOptions}
          />

          <div className="landing-container">
            <div className="landing-container__slogan">
              <h4>Hard worker</h4>
              <h2>My work.</h2>
              <h2>Well done</h2>
              <div className={`landing-wrapper__title-container__img`}>
                <img src={signature} alt="sign" width={100} />
              </div>
            </div>
            <div className="landing-container__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit culpa eveniet a repellat quibusdam officiis minus reprehenderit sint accusamus neque voluptatum magni vero itaque quae odio, placeat iusto eaque voluptate.
            </div>
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
