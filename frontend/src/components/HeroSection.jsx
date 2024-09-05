import React from 'react';
import backgroundImage from '../assets/images/Home.jpg'; // Adjust the path if necessary

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '570px', // Similar height to the Healthily website
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay with 50% opacity */}
      <div className="relative text-center text-white max-w-lg mx-auto p-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-20">
          Your Health Questions, Answered
        </h1>
        <p className="text-lg md:text-xl mt-8 font-bold">
          Medically-reviewed information and science-backed health tips from evoHealthAfrica.
        </p>
        <div className="mt-20 flex justify-center">
          <input
            type="text"
            placeholder="e.g. chest pain, headache"
            className="p-4 rounded-lg w-full max-w-lg text-black placeholder-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
