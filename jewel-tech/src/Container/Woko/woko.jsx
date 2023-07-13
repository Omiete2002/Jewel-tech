import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// import { Don } from '../../components/products/product';
import { Data } from '../../Constants/Index';
import './woko.css';

const WokoCard = ({ woko: { imgUrl, title, price }})  => {
  return (
    <div className='product'>
        <img src={imgUrl} alt="woko" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

const Woko = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  })

  return (
    <div className='woko section__padding'>
      <div className='woko__title'>
        <h1>WOKO</h1>
      </div>

        <div className="woko__products">
          <div className="woko__products-swiper" ref={scrollRef}>
            {Data.woko.map((woko) => (
              <div className="don__products-images" >
                <WokoCard woko={woko} key={woko.title} />
              </div>
            ))}
          </div>
          <div className="woko__products-arrows">
            <BsArrowLeftShort className='products_arrow-icons' onClick={() => scroll('left')} />
            <BsArrowRightShort className='products_arrow-icons' onClick={() => scroll('right')} />
          </div>
        </div>
    </div>
  )
}

export default Woko;