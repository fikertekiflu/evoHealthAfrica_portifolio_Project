import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/Aboutus';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      
    </div>
  );
};

export default Home;