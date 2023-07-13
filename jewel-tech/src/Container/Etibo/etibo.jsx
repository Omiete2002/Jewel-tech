import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// import { Don } from '../../components/products/product';
import { Data } from '../../Constants/Index';
import './etibo.css';

const EtiboCard = ({ etibo: { imgUrl, title, price }})  => {
  return (
    <div className='product'>
        <img src={imgUrl} alt="etibo" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

const Etibo = () => {
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
    <div className='etibo section__padding'>
      <div className='etibo__title'>
        <h1>ETIBO</h1>
      </div>

        <div className="etibo__products">
          <div className="etibo__products-swiper" ref={scrollRef}>
            {Data.etibo.map((etibo) => (
              <div className="don__products-images" >
                <EtiboCard etibo={etibo} key={etibo.title} />
              </div>
            ))}
          </div>
          <div className="etibo__products-arrows">
            <BsArrowLeftShort className='products_arrow-icons' onClick={() => scroll('left')} />
            <BsArrowRightShort className='products_arrow-icons' onClick={() => scroll('right')} />
          </div>
        </div>
    </div>
  )
}

export default Etibo;