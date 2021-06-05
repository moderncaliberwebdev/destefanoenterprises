import React from 'react'

import '../css/Partner_Card.css'

function PartnerCard({ title, image, url }) {
  return (
    <div className='partner-card'>
      <a href={url}>
        <img src={image} alt='Partner Card' className='partner-card__image' />
        <h2 className='partner-card__title'>{title}</h2>
      </a>
    </div>
  )
}

export default PartnerCard
