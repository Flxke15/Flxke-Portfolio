import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BackTopBtn from './components/BackTopBtn';
import Contract from './components/Contract';

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      
      <Testimonials />
      <Contract/>
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;