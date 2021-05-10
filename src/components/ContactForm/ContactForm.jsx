import 'src/components/ContactForm/ContactForm.css'

import Input from 'src/components/Input/Input'

const ContactForm = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-wrapper__title">
        <h1>Contact</h1>
      </div>
      <form>
        <div className="contact-wrapper__grid">
          <Input
            type={`text`}
            value={``}
            placeholder={`Name ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`text`}
            value={``}
            placeholder={`Surname ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`email`}
            value={``}
            placeholder={`Email ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`number`}
            value={``}
            placeholder={`Phone number ...`}
            cssClass={`input medium-text`}
          />
          <div className="col-2">
            <Input
              type={`textarea`}
              value={``}
              placeholder={`Reason ...`}
              cssClass={`input medium-text`}
            />
          </div>
        </div>
        <div className="contact-wrapper__submit">
          <Input
            type={`submit`}
            value={`Send ✉️`}
            cssClass={`btn tertiary large-text`}
          />
        </div>
      </form>
    </div>
  )
}

export default ContactForm