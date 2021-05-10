import 'src/components/Input/Input.css'

const Input = ({ type, value, placeholder, cssClass, name }) => {

  if (type !== 'textarea')
    return (
      <input
        className={`${cssClass}`}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
      />
    )
  else
    return (
      <textarea
        name={name}
        className={`textarea ${cssClass}`}
        placeholder={placeholder}
        cols="20"
        rows="7" 
      />
    )
}

export default Input