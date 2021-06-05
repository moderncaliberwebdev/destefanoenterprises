import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import '../css/Nav.css'

function Nav() {
  return (
    <div className='navbar'>
      <a href='/'>
        <img
          src='/public/images/logo.png'
          alt='logo'
          className='header__logo'
        />
      </a>

      <nav className='header__nav'>
        <ul>
          <Link to='/'>
            <li className='header__navlink link-1'>Home</li>
          </Link>

          <Link to='/partners'>
            <li className='header__navlink link-2'>Partners</li>
          </Link>
          <Link to='/about'>
            <li className='header__navlink link-3'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='header__navlink btn-blue'>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
