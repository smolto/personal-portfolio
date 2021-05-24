import {
  Link
} from "react-router-dom";

import Image from 'src/components/Image/Image'
import Button from 'src/components/Button/Button'


import logo from 'src/shared/assets/logo.svg'

import './NavBar.css'


const NavBar = ({ menuOptions, showContactButton }) => {


  console.log(menuOptions)
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
          <Button
            text={`Contact me`}
            cssClass={`secondary-smm bold medium-text`}
          />
        </div>
      }

    </div>
  )
}

export default NavBar