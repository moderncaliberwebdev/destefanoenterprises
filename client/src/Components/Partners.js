import React from 'react'

import Nav from './Nav'
import Partner_Card from './PartnerCard'
import Menu from './Menu'

import '../css/Partners.css'

function Partners() {
  return (
    <div>
      <Menu />
      <Nav />
      <div className='partners'>
        <h1 className='partners__heading'>Our Partners</h1>
        <div className='partner-card-container'>
          <Partner_Card
            title='PA Dutch Builders'
            image='/public/images/padutchbuilders.png'
            url='http://padutchbuilders.com'
          />
          <Partner_Card
            title='PA Dutch Auctions'
            image='/public/images/padutchauctions.png'
            url='http://padutchauctions.com'
          />
          <Partner_Card
            title='Old Amish Remedies'
            image='/public/images/oldamish.png'
            url='http://oldamishremedies.com'
          />
          <Partner_Card
            title='Billy Dean and the Woodland Girls'
            image='/public/images/billydean.png'
            url='https://billydeanandthewoodlandgirls.com/'
          />
          <Partner_Card
            title='PA Dutch Contractors'
            image='/public/images/padutchcontractors.png'
            url='http://padutchcontractors.com'
          />
        </div>
      </div>
      <footer className='footer_copyright'>
        Hosted by De Stefano Enterprises, LLC, all rights reserved
      </footer>
    </div>
  )
}

export default Partners
