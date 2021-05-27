import {
  Link
} from "react-router-dom";

import Image from 'src/components/Image/Image'
import Button from 'src/components/Button/Button'


import logo from 'src/shared/assets/logo.svg'

import './NavBar.css'

import { HashLink } from 'react-router-hash-link'

import { useHistory } from 'react-router'


const NavBar = ({ menuOptions, showContactButton }) => {

  const history = useHistory()
  
  return (
    <div className="nav">
      <div className="logo">
        <Image
          src={logo}
          alt={`logo`}
        />
      </div>

      <div className="menu">
        <div className="options">
          <ul>
            {
              menuOptions.map(({ link, text, selected }, index) => {
                return (
                  <li className={selected} key={index}><Link to={link}>{text}</Link></li>
                )
              })
            }
          </ul>
        </div>
      </div>

      {
        showContactButton &&
        <div className="contact">
          <HashLink to="/#contact" id='contact-btn'>Contact me</HashLink>
        </div>
      }

    </div>
  )
}

export default NavBar