import './Landing.css'

const Landing = ({ htmlItem1, htmlItem2 }) => {
  return (
    <div className="landing-wrapper">
      <div className="landing-wrapper__first-item">
        { htmlItem1 }
      </div>
      <div className="landing-wrapper__second-item">
        { htmlItem2 }
      </div>
    </div>
  )
}

export default Landing;