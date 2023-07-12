import React from 'react' 

import Art from '../../Assets/art.jpg';
import './aboutus.css';

const aboutus = () => {
  return (
    <div className='aboutus section__padding'>
      <div className='aboutus__contents'>
        <h2>WELCOME TO THE SHOWROOM</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sapiente obcaecati quam commodi ipsam animi saepe hic, rem placeat sequi, ab est rerum pariatur debitis. Labore eaque quibusdam dolores blanditiis nostrum quia, cumque itaque molestias? Unde accusamus eaque perspiciatis, cum, neque eveniet consequatur natus, saepe corrupti esse laudantium iure autem maiores aperiam sequi. Expedita ratione quam impedit sint eveniet debitis minima libero illum totam, est non dolorem. Incidunt, soluta ipsa!</p>
      </div>
      <div className='about__img'>
        <img src={Art} alt="art" />
      </div>
    </div>
  )
}

export default aboutus;