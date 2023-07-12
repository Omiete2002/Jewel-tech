import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import Product from '../../components/products/product';
import Don1 from '../../Assets/DON 1.jpg';
import Don2 from '../../Assets/DON 2.jpg';
import './don.css';

const productImages = [ Don1, Don2, Don1, Don2, Don1, Don2 ]


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
      </div>

        <div className="don__products">
          <div className="don__products-swiper" ref={scrollRef}>
            {productImages.map((image, index) => (
              <div className="don__products-images" key={`product_image-${index + 1}`} >
                <img src={Don1} alt="product" />
                <h3>DON 1</h3>
                <p>₦150,000</p>
                {/* <Product Img={Don1} title="DON1" price="₦150,000" /> */}
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