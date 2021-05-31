import React from 'react'

import '../css/Header.css'

import Card from './Card'

function Header() {
  return (
    <header className='header'>
      <img src='/public/images/logo.png' alt='logo' className='header__logo' />
      <h1 className='header__heading'>DeStefano Enterprises, LLC</h1>
      <nav className='header__nav'>
        <ul>
          <li className='header__navlink'>Home</li>
          <li className='header__navlink'>Partners</li>
          <li className='header__navlink'>About</li>
          <li className='header__navlink btn-blue'>Contact</li>
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
        />
        <Card
          title='PA Dutch Auctions'
          image='/public/images/padutchauctions.png'
        />
        <Card title='Old Amish Remedies' image='/public/images/oldamish.png' />
        <Card
          title='Billy Dean and the Woodland Girls'
          image='/public/images/billydean.png'
        />
        <Card
          title='PA Dutch Contractors'
          image='/public/images/padutchcontractors.png'
        />
      </div>
      <footer className='footer'>
        Hosted by De Stefano Enterprises, LLC, all rights reserved
      </footer>
    </header>
  )
}

export default Header
