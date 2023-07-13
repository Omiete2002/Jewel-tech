import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

// import { Don } from '../../components/products/product';
import { Data } from '../../Constants/Index';
import './don.css';

const DonCard = ({ don: { imgUrl, title, price }})  => {
  return (
    <div className='product'>
        <img src={imgUrl} alt="product" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

const Don = () => {
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
    <div className='don section__padding'>
      <div className='don__title'>
        <h2>PRODUCTS</h2>
        <p> Browse the collection of our best selling and top interesting products.<br />
          You’ll definitely find what you are looking for.</p>
        <h1>DON</h1>
      </div>

        <div className="don__products">
          <div className="don__products-swiper" ref={scrollRef}>
            {Data.don.map((don) => (
              <div className="don__products-images" >
                <DonCard don={don} key={don.title} />
              </div>
            ))}
          </div>
          <div className="don__products-arrows">
            <BsArrowLeftShort className='products_arrow-icons' onClick={() => scroll('left')} />
            <BsArrowRightShort className='products_arrow-icons' onClick={() => scroll('right')} />
          </div>
        </div>
    </div>
  )
}

export default Don;