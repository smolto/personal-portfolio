import './Button.css'

const Button = ({text, cssClass}) => {
  return (
    <button className={`btn ${cssClass}`}>{text}</button>
  )
}

export default Button