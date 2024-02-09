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
        <h1 className='partners__heading'>Our Companies</h1>
        <div className='partner-card-container'>
          <Partner_Card
            title='PA Dutch Builders'
            image='/public/images/padutchbuilders.png'
            url='http://padutchbuilders.com'
          />

          <Partner_Card
            title='Eagle Force Employment Services'
            image='/public/images/eagle.png'
            url='https://www.eagleforceemploymentservices.com/'
          />
          <Partner_Card
            title='Old Amish Remedies Plus'
            image='/public/images/amish-remedies.png'
            url='https://oldamishremediesplus.com'
          />
          <Partner_Card
            title="Billie's Antiques & Collectibles"
            image='/public/images/billies.png'
            url='https://billies-antiques-collectibles.myshopify.com/'
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
        <h1 className='partners__heading'>Our Partners</h1>
        <div className='partner-card-container'>
          <span className='partners__link'>
            1. Beaver Dam Builders, LLC, Honey Brook, PA
          </span>
          <span className='partners__link'>
            2. Beiler Brothers Construction, Ronks, PA
          </span>
          <span className='partners__link'>
            3. Forest View Construction, LLC New Holland, PA
          </span>
          <span className='partners__link'>
            4. Pinecraft Construction, LLC Leola, PA{' '}
            <a href='https://pinecraftconstruction.com'>(visit website)</a>
          </span>
          <span className='partners__link'>
            5. ADS Builders, LLC New Holland, PA
          </span>
          <span className='partners__link'>
            6. New England Weathervanes, Willow Street, PA
            <a href='https://newenglandweathervanes.com/'>(visit website)</a>
          </span>
          <span className='partners__link'>
            7. Welsh View Farms, New Holland, PA 17557
            <a href='https://www.ebay.com/str/backcountryfarmhatchingeggs'>
              (visit website)
            </a>
          </span>
          <span className='partners__link'>
            8. Stoltzfus Masonry LLC, Ronks, PA
          </span>
          <span className='partners__link'>
            9. Add Keystone Steel Structures LLC, Honey Brook, PA
          </span>
          <span className='partners__link'>
            10. Elmer's Roofing, Lancaster, PA
            <a href='https://www.elmersroofing.com/'>(visit website)</a>
          </span>
          <span className='partners__link'>
            11. Precise Buildings LLC, Bird In Hand, PA
            <a href='https://precisebuildings.com/'>(visit website)</a>
          </span>
          {/* <Partner_Card
            title='Pine Ridge Landscaping'
            image='/public/images/pineridge.png'
            url='http://pineridgelandscaping.net'
          />
          <Partner_Card title='Beaver Dam Builders, LLC' image='' url='#' />
          <Partner_Card title='Beiler Brothers Construction' image='' url='#' />
          <Partner_Card
            title='Forest View Construction, LLC'
            image=''
            url='#'
          />
          <Partner_Card
            title='Pinecraft Construction, LLC'
            image='/public/images/pinecraft.png'
            url='#'
          />
          <Partner_Card
            title='ADS Builders, LLC'
            image='/public/images/adsbuilders.png'
            url='http://adsbuildersllc.com/?fbclid=IwAR3y-vPtEbSuaibHMimcgAma8DIY-ray9xPX_cT0f8zxjAtX_aF9AdBab2o'
          /> */}
        </div>
      </div>
      <footer className='footer_copyright'>
        Hosted by De Stefano Enterprises, LLC, all rights reserved
      </footer>
    </div>
  )
}

export default Partners
