import React from 'react';

// import brands data
import { brands } from '../data';
import logo from '../assets/img/logo_kmutnb.png';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
      <div
        className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                King Mongkut's University Tecnology North Bangkok.
              </h2>
        <img src={logo} alt='' height='300px' width='130px'/>
      </div>
    </section>
  );
};

export default Brands;
