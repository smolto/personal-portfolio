// COMPONENTS
import NavBar from 'src/components/NavBar/NavBar'
import Landing from 'src/components/Landing/Landing'
import Footer from 'src/components/Footer/Footer'

// IMAGES
import techStack from 'src/shared/assets/dev_stack.svg'
import devTools from 'src/shared/assets/dev_tools.svg'

// STYLES
import 'src/pages/AboutMePage/AboutMePage.css'

// MENU OPTIONS
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
    text: 'My work'
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
        <h6 className="landing-about-me__content">
          Ever since I was a little kid, computers has been my passion. I still remember sitting in front of my first PC and trying to fix it.
          As I grew up, during high school, I was curious about how computers actually works and how those programs could be developed, that was the moment when I discovered software development.
          I started to do read about programming language and to create my first programs.
        </h6>
        <h6 className="landing-about-me__content">
          This passion carried me to decide to study computer science. My beginnings in college were quite difficult but, having a good group of friends and thanks to them and my hard work, I was able to graduate and appreciate the importance of teamwork.
          I studied new languages, algorithms, mathematics and methodologies, all with practically the same fascination that drove me as a child. But of all the subjects I took, the one that caught my attention the most was web development, and it was at that moment that I really discovered my
          desire to become a frontend developer.
        </h6>
        <h6 className="landing-about-me__content">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          So now, in industry, this passion remains with me. There's certainly yer more to learn, yet more problems to solve and, yer more to build. Your imagination and commitment are the only limit.
        </h6>
        <h6 className="landing-about-me__content">
          Specialties: HTML, CSS, JavaScript (React.js), Graphql
        </h6>
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
                  <br />
                  <hr />
                  <br />
                  <div className="smm__container-wrapper__content__tech">
                    <div className="smm__container-wrapper__content__skills">
                      <h4>Skill Highlights</h4>
                      <ul>
                        <li>🦎 Adaptability </li>
                        <li>💪 Hard-working</li>
                        <li>🤝 Teamwork</li>
                        <li>💡 Problem Solving</li>
                        <li>🗂️ Organization</li>
                      </ul>
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
