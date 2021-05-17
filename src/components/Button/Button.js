import './Button.css'

const Button = ({text, cssClass, icon, iconSize}) => {
  return (
    <button className={`btn-smm ${cssClass}`}>
      {
        icon && <img src={icon} width={iconSize} alt={icon}/>
      }
      {text}
    </button>
  )
}

export default Button