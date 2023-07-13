import React from 'react'

import { Images, Data } from '../../Constants/Index';

const Don = ({ don: { imgUrl, title, price }}) => {
  return (
    <div product>
        <img src={imgUrl} alt="product" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

const woko = ({ woko: { imgUrl, title, price }}) => {
  return (
    <div product>
        <img src={imgUrl} alt="product" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

const etibo = ({ etibo: { imgUrl, title, price }}) => {
  return (
    <div product>
        <img src={imgUrl} alt="product" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

export default { Don, woko, etibo };