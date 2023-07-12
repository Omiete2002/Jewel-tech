import React from 'react'

const product = ( {Img, title, price} ) => {
  return (
    <div product>
        <img src={Img} alt="product" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

export default product;