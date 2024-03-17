import React from 'react'

import "./header.scss"
import headerImage from "../../assets/img/cook & talk.svg"


const Header = () => {
  return (
    <div className='header'>
      <div className='header--image'>
      <img src={headerImage} alt="" />
      </div>
    </div>
  )
}

export default Header
