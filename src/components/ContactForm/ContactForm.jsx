import { useState } from 'react'

import 'src/components/ContactForm/ContactForm.css'

import Input from 'src/components/Input/Input'

const ContactForm = () => {

  // const [name, setName] = useState('');
  // const [surname, setSurname] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [reason, setReason] = useState('');

  const [ data, setData ] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    reason: '',
  })

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const sendData = (e) => {
    e.preventDefault()
    let isOk = true
    if(data.name.trim() === '') {
      isOk = false
    }

    if(data.surname.trim() === '') {
      isOk = false
    }

    if(data.name.trim() === '') {
      isOk = false
    }

    if(data.name.trim() === '') {
      isOk = false
    }

    if(data.name.trim() === '') {
      isOk = false
    }

    if(isOk) {
      document.forms['contact_form'].action = 'https://formsubmit.co/santiagomoltomartinez@gmail.com';
      document.forms['contact_form'].submit()
    }else {
      alert('NOT OK')
    }
  }
  

  return (
    <div className="contact-wrapper">
      <div className="contact-wrapper__title">
        <h1>Contact</h1>
      </div>
      <form target="_blank" onSubmit={sendData} method='POST' id='contact_form'>
        <div className="contact-wrapper__inputs">
          <Input
            type={`text`}
            name={`name`}
            value={data.name}
            onChange={handleInputChange}
            placeholder={`Name* ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`text`}
            name={`surname`}
            value={data.surname}
            onChange={handleInputChange}
            placeholder={`Surname* ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`email`}
            name={`email`}
            value={data.email}
            onChange={handleInputChange}
            placeholder={`Email* ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`number`}
            name={`phone`}
            value={data.phone}
            onChange={handleInputChange}
            placeholder={`Phone number ...`}
            cssClass={`input medium-text`}
          />
          <Input
            type={`textarea`}
            name={`reason`}
            value={data.reason}
            onChange={handleInputChange}
            placeholder={`Reason* ...`}
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