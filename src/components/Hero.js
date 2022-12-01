import React from 'react';

// import woman image
import WomanImg from '../assets/img/banner-woman2.webp';
import Flxke from '../assets/img/Flxke.jpg';
import Flxke1 from '../assets/img/Flxke1.png'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Flxke! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Danaipong <br /> Sangarun
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Software Engineer / FullStack Developer.
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all' >
              <a href='https://www.facebook.com/flukk.danaipong.7/'>Work with me</a>
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={Flxke1} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
