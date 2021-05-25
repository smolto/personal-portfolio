//COMPONENTS
import NavBar from 'src/components/NavBar/NavBar'
import Landing from 'src/components/Landing/Landing'
import Footer from 'src/components/Footer/Footer'

//IMAGES
import signature from 'src/shared/assets/signature.svg'
import project1 from 'src/shared/assets/projects/project1.svg'

//STYLES
import 'src/pages/MyWorkPage/MyWorkPage.css'

//MENU OPTIONS
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

  const htmlItem1 =
    (
      <>
        <div className="landing-message">
          <h3 className={`landing-message__subtitle`}>Hard worker</h3>
          <h1 className={`landing-message__title`}>My work.</h1>
          <h1 className={`landing-message__title`}>Well done</h1>
          <div className={`landing-message__img`}>
            <img src={signature} alt="sign" width={150} />
          </div>
        </div>
      </>
    )

  const htmlItem2 =
    (
      <div className="landing-description">
        <h6 className="landing-description__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque minima laboriosam nam corporis, dolorem laborum odio veritatis hic aliquam repudiandae, ducimus harum? Officiis aut id dolore soluta natus ullam numquam?</h6>
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
                showContactButton={true}
              />
            </div>
            <Landing
              htmlItem1={htmlItem1}
              htmlItem2={htmlItem2}
            >
              <div className="border-separator"></div>
            </Landing>
          </div>

          <div className="smm__container-wrapper">
            <div className="smm__container-wrapper__projects-container">
              <div className="smm__container-wrapper">
                <div className="smm__container-wrapper__components">
                  <div className="smm__container-wrapper__components__project-component">
                    <div className="smm__container-wrapper__components__project-component__project">
                      
                    </div>
                    <div className="smm__container-wrapper__components__project-component__project">
                      
                    </div>
                    <div className="smm__container-wrapper__components__project-component__project">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="smm__container-wrapper__footer-component">
              <div className="smm__container-wrapper">
                <div className="smm__container-wrapper__components">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

{/* <div className="landing">
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
      </div> */}
