import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import '../css/Header.css'

import Card from './Card'
import Menu from './Menu'

function Header() {
  const openMenu = () => {
    document.getElementById('menu').style.display = 'block'
    document.body.style.overflow = 'hidden'
  }

  return (
    <div className='body'>
      <div className='flex-1'>
        <Menu />
        <header className='header' style={{ padding: '2rem 6rem' }}>
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
            <img
              src='/public/images/menu.png'
              alt='menu'
              className='header__menu'
              onClick={openMenu}
            />
          </nav>
        </header>
      </div>
      <div className='flex-2'>
        <div className='card-container'>
          <Card
            title='PA Dutch Builders'
            image='/public/images/padutchbuilders.png'
            url='http://padutchbuilders.com'
          />
          {/* <div className='card-container-respond'> */}
          <Card
            title='PA Dutch Auctions'
            image='/public/images/padutchauctions.png'
            url='http://padutchauctions.com'
          />
          {/* </div> */}
          <Card
            title='Old Amish Remedies Plus'
            image='/public/images/amish-remedies.png'
            url='https://oldamishremediesplus.com'
          />

          <Card
            title='Billy Dean and the Woodland Girls'
            image='/public/images/billydean.png'
            url='https://billydeanandthewoodlandgirls.com/'
          />

          {/* <div className='card-container-respond shrink'> */}
          <Card
            title='PA Dutch Contractors'
            image='/public/images/padutchcontractors.png'
            url='http://padutchcontractors.com'
          />
          <Card
            title='TopMyDog'
            image='/public/images/ebay.png'
            url='http://www.ebaystores.com/billiesantiquesandcollectibles'
          />
          <Card
            title='AmericanItem'
            image='/public/images/ebay.png'
            url='https://www.ebay.com/sch/americanitem/m.html?_nkw=&_armrs=1&_ipg=&_from='
          />
          <Card
            title="Billie's Antiques & Collectibles"
            image='/public/images/antiques.png'
            url='https://www.ebay.com/str/billiesantiquesandcollectibles'
          />
          <Card
            title='Eagle Force Employment Services'
            image='/public/images/eagle.png'
            url='https://eagleforce-jobs.vercel.app/'
          />
          {/* </div> */}
        </div>
      </div>
      <div className='flex-3'>
        <img
          src='/public/images/businessman.png'
          alt='destefano businessman'
          className='header__model'
        />
        <picture>
          <source
            media='(max-width:600px)'
            srcSet='/public/images/waves-small.png'
          />
          <img
            src='/public/images/waves.png'
            alt='waves background'
            className='header__waves'
          />
        </picture>
      </div>
      <footer className='footer'>
        Hosted by De Stefano Enterprises, LLC, all rights reserved
      </footer>
      {/* </header> */}
    </div>
  )
}

export default Header
