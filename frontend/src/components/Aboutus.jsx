import React from 'react';
import 'aos/dist/aos.css';

const Aboutus = () => {
  return (
    <section className="p-10 bg-gray-50" >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-20 mt-20">About Us</h2>
      <div className="flex justify-center space-x-6">
        {/* Smart Symptom Checker */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/5 transform hover:shadow-xl hover:scale-105 transition duration-500 ease-in-out animate-slideFromRight">
          <h3 className="text-2xl font-semibold text-gray-800">Smart Symptom Checker</h3>
          <p className="mt-2 text-gray-600">Quickly assess symptoms and receive guidance on potential health issues.</p>
        </div>
        {/* Personalized Health Guide */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/5 transform hover:shadow-xl hover:scale-105 transition duration-500 ease-in-out animate-slideFromLeft">
          <h3 className="text-2xl font-semibold text-gray-800">Personalized Health Guide</h3>
          <p className="mt-2 text-gray-600">Essential health tools, accessible whenever you need them.</p>
        </div>
        {/* Take Action */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/5 transform hover:shadow-xl hover:scale-105 transition duration-500 ease-in-out animate-slideFromRight">
          <h3 className="text-2xl font-semibold text-gray-800">Take Action</h3>
          <p className="mt-2 text-gray-600">Get clear information to help you decide your next steps.</p>
        </div>
      </div>

      <br/>
      <br/>
      {/* Help for your health section */}
        <div className="mt-10 text-center" >
        <h3 className="text-3xl font-bold">Help for your health</h3>
        <p className="text-lg mt-2">The home of health support and medically checked information</p>
        <div className="flex justify-around mt-8">
          <div className="flex flex-col items-center">
            <h4 className="text-6xl font-bold text-gray-700" >1</h4>
            <p className="mt-5 text-center">
              Check in <br />
              Use our search tool and Smart Symptom Checker to  <br />help you work out what might be wrong with you
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-6xl font-bold text-gray-700" >2</h4>
            <p className="mt-4 text-center">
              Learn more <br />
              Learn more about your symptoms or possible conditions <br />with our in-depth guides
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-6xl font-bold text-gray-700">3</h4>
            <p className="mt-4 text-center">
              Take action <br />
              Get clear information to help you<br /> decide your next steps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;