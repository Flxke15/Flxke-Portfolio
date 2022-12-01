import React from 'react';

// import img
import map from '../assets/img/map.jpg';

const About = () => {
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={map}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Contact me 
              </h2>
              <p className='mb-4 text-accent'>
                Address 
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                <h2>Personal</h2>
                Name : Danaipong Sangarun ( Fluke ) <br/>  
                Age : 22  <br/>
                Hobby : Basketball , Play Guitar , Sleep  <br/>
                Tel : 0966696247  <br/>  
                <h2>Socials</h2>
                Facebook : <a href='https://www.facebook.com/flukk.danaipong.7/'>Fluke Danaipong</a>  <br/>
                IG : <a href='https://www.instagram.com/flukedanaii/'> flukedanaii</a>   <br/>
                Email : fluke.danaipong@gmail.com   <br/>  
                <h2>Address</h2>
                Address : 533/132 ( Knightsbridge Space Rama 9 )  <br/>ชั้น 12 ถ.อโศก-ดินแดง แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400  <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
