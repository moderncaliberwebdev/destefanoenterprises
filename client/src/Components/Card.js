import React from 'react'

import '../css/Card.css'

function Card({ title, image }) {
  return (
    <div className='card'>
      <img src={image} alt='Business Card' className='card__image' />
      <h2 className='card__title'>{title}</h2>
    </div>
  )
}

export default Card
