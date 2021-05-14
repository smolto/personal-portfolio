import { useState } from 'react'

import 'src/components/ContactForm/ContactForm.css'

import Input from 'src/components/Input/Input'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');

  return (
    <div className="contact-wrapper">
      <div className="contact-wrapper__title">
        <h1>Contact</h1>
      </div>
      <form target="_blank" action="https://formsubmit.co/santiagomoltomartinez@gmail.com	" method="POST">
        <div className="contact-wrapper__inputs">
          <Input
            type={`text`}
            name={`name`}
            value={name}
            onChange={setName}
            placeholder={`Name ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`text`}
            name={`surname`}
            value={surname}
            onChange={setSurname}
            placeholder={`Surname ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`email`}
            name={`email`}
            value={email}
            onChange={setEmail}
            placeholder={`Email ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`number`}
            name={`phone`}
            value={phone}
            onChange={setPhone}
            placeholder={`Phone number ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`textarea`}
            name={`reason`}
            value={reason}
            onChange={setReason}
            placeholder={`Reason ...`}
            cssClass={`input medium-text`}
          />
        </div>
        <div className="contact-wrapper__submit">
          <Input
            type={`submit`}
            value={`Send ✉️`}
            cssClass={`btn tertiary large-text`}
          />
        </div>
        <div className="formsubmit_info">
          <span>Powered by</span>
          <a href="https://formsubmit.co/?utm_source=formsubmit.co&amp;utm_medium=site%20link&amp;utm_campaign=submission%20page" rel="no-follow">
            <img height="35px" src="https://formsubmit.co/image/logo.png" alt="FormSubmit logo" />
          </a>
        </div>
      </form>
    </div>
  )
}

export default ContactForm