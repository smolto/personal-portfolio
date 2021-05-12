import 'src/components/Input/Input.css'

const Input = ({ type, value, placeholder, cssClass, name, onChange }) => {

  if (type !== 'textarea')
    return (
      <input
        className={`${cssClass}`}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    )
  else
    return (
      <textarea
        className={`textarea ${cssClass}`}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        cols="20"
        rows="7" 
      />
    )
}

export default Input