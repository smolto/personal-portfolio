import {
  Link
} from "react-router-dom";

import Image from 'src/components/Image/Image'
import Button from 'src/components/Button/Button'


import logo from 'src/shared/assets/logo.svg'

import './NavBar.css'


const NavBar = ({ menuOptions }) => {
  return (
    <div className="nav">
      <div className="logo">
        <Image
          src={logo}
          alt={`logo`}
          width={150}
        />
      </div>

      <div className="menu">
        <div className="options">
          <ul>
            {
              menuOptions.map(({ link, text }, index) => {
                return (
                  <li key={index}><a href={link}>{text}</a></li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="contact">
        <Button
          text={`Contact me`}
          cssClass={`primary bold medium-text`}
        />
      </div>
    </div>
  )
}

export default NavBar