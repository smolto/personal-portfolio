import './Landing.css'
import signature from 'src/shared/assets/signature.svg'
import landing_img from 'src/shared/assets/landing-img.svg'

const Landing = () => {
  return(
    <>
      <div className="landing-wrapper">
        <div className="landing-wrapper__title-container">
          <h3 className={`landing-wrapper__title-container__subtitle`}>Tech Lover</h3>
          <h1 className={`landing-wrapper__title-container__title`}>Hi, I’m Santi. Welcome to my portfolio</h1>
          <div className={`landing-wrapper__title-container__img`}>
            <img src={signature} alt="sign" width={150}/>
          </div>
        </div>
        <div className="landing-wrapper__image-container">
          <img src={landing_img} alt="landing_img" width={700}/>
        </div>
      </div>
    </>
  )
}

export default Landing;