import './Button.css'

const Button = ({text, cssClass, icon, iconSize, parentFuction}) => {
  return (
    <button className={`btn-smm ${cssClass}`} onClick={parentFuction}>
      {
        icon && <img src={icon} width={iconSize} alt={icon}/>
      }
      {text}
    </button>
  )
}

export default Button