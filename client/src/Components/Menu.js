import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import '../css/Menu.css'

function Menu() {
  const goHome = () => {
    document.getElementById('menu').style.display = 'none'
    document.body.style.overflow = 'visible'
  }

  return (
    <div className='menu' id='menu'>
      <span className='menu__x' onClick={goHome}>
        X
      </span>
      <nav>
        <ul className='menu__nav'>
          <Link to='/'>
            <li className='menu__navlink' onClick={goHome}>
              Home
            </li>
          </Link>

          <Link to='/partners'>
            <li className='menu__navlink' onClick={goHome}>
              Partners
            </li>
          </Link>
          <Link to='/about'>
            <li className='menu__navlink' onClick={goHome}>
              About
            </li>
          </Link>
          <Link to='/contact'>
            <li className='menu__navlink' onClick={goHome}>
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
