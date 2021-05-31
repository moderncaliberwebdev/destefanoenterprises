import React from 'react'

import '../css/Card.css'

function Card({ title, image, url }) {
  return (
    <div className='card'>
      <a href={url}>
        <img src={image} alt='Business Card' className='card__image' />
        <h2 className='card__title'>{title}</h2>
      </a>
    </div>
  )
}

export default Card
