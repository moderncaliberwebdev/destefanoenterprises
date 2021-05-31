import React from 'react'

import '../css/Header.css'

import Card from './Card'

function Header() {
  return (
    <header className='header'>
      <a href='/'>
        <img
          src='/public/images/logo.png'
          alt='logo'
          className='header__logo'
        />
      </a>
      <a href='/'>
        <h1 className='header__heading'>DeStefano Enterprises, LLC</h1>
      </a>
      <nav className='header__nav'>
        <ul>
          <a href='/'>
            <li className='header__navlink link-1'>Home</li>
          </a>
          <a href='/'>
            <li className='header__navlink link-2'>Partners</li>
          </a>
          <a href='/'>
            <li className='header__navlink link-3'>About</li>
          </a>
          <a href='/'>
            <li className='header__navlink btn-blue'>Contact</li>
          </a>
        </ul>
      </nav>
      <img
        src='/public/images/waves.png'
        alt='waves background'
        className='header__waves'
      />
      <img
        src='/public/images/businessman.png'
        alt='destefano businessman'
        className='header__model'
      />
      <div className='card-container'>
        <Card
          title='PA Dutch Builders'
          image='/public/images/padutchbuilders.png'
          url='http://padutchbuilders.com'
        />
        <Card
          title='PA Dutch Auctions'
          image='/public/images/padutchauctions.png'
          url='http://padutchauctions.com'
        />
        <Card
          title='Old Amish Remedies'
          image='/public/images/oldamish.png'
          url='http://oldamishremedies.com'
        />
        <Card
          title='Billy Dean and the Woodland Girls'
          image='/public/images/billydean.png'
          url='https://billydeanandthewoodlandgirls.com/'
        />
        <Card
          title='PA Dutch Contractors'
          image='/public/images/padutchcontractors.png'
          url='http://padutchcontractors.com'
        />
      </div>
      <footer className='footer'>
        Hosted by De Stefano Enterprises, LLC, all rights reserved
      </footer>
    </header>
  )
}

export default Header
