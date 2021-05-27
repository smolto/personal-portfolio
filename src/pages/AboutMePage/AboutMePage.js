//COMPONENTS
import NavBar from 'src/components/NavBar/NavBar'
import Landing from 'src/components/Landing/Landing'
import Footer from 'src/components/Footer/Footer'

//IMAGES
import techStack from 'src/shared/assets/dev_stack.svg'
import devTools from 'src/shared/assets/dev_tools.svg'

//STYLES
import 'src/pages/AboutMePage/AboutMePage.css'

//MENU OPTIONS
const menuOptions = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/about',
    text: 'About me',
    selected: 'selected'
  },
  {
    link: '/work',
    text: 'My work',
  }
]

export const AboutMePage = () => {

  const htmlItem1 =
    (
      <>
        <div className="landing-avatar-wrapper">
          <div className="landing-avatar-wrapper__content"></div>
        </div>
      </>
    )

  const htmlItem2 =
    (
      <div className="landing-about-me">
        <h6 className="landing-about-me__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque minima laboriosam nam corporis, dolorem laborum odio veritatis hic aliquam repudiandae, ducimus harum? Officiis aut id dolore soluta natus ullam numquam?</h6>
        <h6 className="landing-about-me__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque minima laboriosam nam corporis, dolorem laborum odio veritatis hic aliquam repudiandae, ducimus harum? Officiis aut id dolore soluta natus ullam numquam?</h6>
        <h6 className="landing-about-me__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque minima laboriosam nam corporis, dolorem laborum odio veritatis hic aliquam repudiandae, ducimus harum? Officiis aut id dolore soluta natus ullam numquam?</h6>
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
              <div className="smm__container-wrapper__components__about-me">
                <Landing
                  htmlItem1={htmlItem1}
                  htmlItem2={htmlItem2}
                >
                  <div className="border-separator"></div>
                </Landing>
              </div>
            </div>
          </div>

          <div className="smm__container-wrapper">
            <div className="smm__container-wrapper__about-me-container">
              <div className="smm__container-wrapper__components">
                <div className="smm__container-wrapper__content">
                  <div className="smm__container-wrapper__content__tech">
                    <div className="smm__container-wrapper__content__tech-stack">
                      <h4>Tech Stack</h4>
                      <img src={techStack} alt="stack" width={250} />
                    </div>

                    <div className="smm__container-wrapper__content__tech-stack">
                      <h4>Development Tools</h4>
                      <img src={devTools} alt="tech" width={250} />
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