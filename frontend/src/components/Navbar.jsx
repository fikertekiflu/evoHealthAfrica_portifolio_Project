import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [learnMoreDropdownOpen, setLearnMoreDropdownOpen] = useState(false);
  const [symptomCheckerDropdownOpen, setSymptomCheckerDropdownOpen] = useState(false);

  const toggleLearnMoreDropdown = () => {
    setLearnMoreDropdownOpen(!learnMoreDropdownOpen);
    // Close the other dropdown when one is opened
    if (symptomCheckerDropdownOpen) setSymptomCheckerDropdownOpen(false);
  };

  const toggleSymptomCheckerDropdown = () => {
    setSymptomCheckerDropdownOpen(!symptomCheckerDropdownOpen);
    // Close the other dropdown when one is opened
    if (learnMoreDropdownOpen) setLearnMoreDropdownOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white py-4 shadow-md flex justify-between items-center z-50 px-8">
      <div className="text-2xl font-bold text-gray-800">evoHealthAfrica</div>
      <ul className="flex space-x-8 text-gray-800 text-lg">
        <li className="relative">
          <button
            onClick={toggleLearnMoreDropdown}
            className="focus:outline-none font-medium hover:text-blue-500 transition-colors duration-300"
          >
            Learn More {learnMoreDropdownOpen ? '▲' : '▼'}
          </button>
          {learnMoreDropdownOpen && (
            <ul className="absolute left-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
              <li><Link to="/malaria" className="block px-4 py-2 hover:bg-gray-100">Malaria</Link></li>
              <li><Link to="/hiv" className="block px-4 py-2 hover:bg-gray-100">HIV/AIDS</Link></li>
              <li><Link to="/monkeyPox" className="block px-4 py-2 hover:bg-gray-100">MonkeyPox</Link></li>
            </ul>
          )}
        </li>

        <li className="relative">
          <button
            onClick={toggleSymptomCheckerDropdown}
            className="focus:outline-none font-medium hover:text-blue-500 transition-colors duration-300"
          >
            Smart Symptom Checker {symptomCheckerDropdownOpen ? '▲' : '▼'}
          </button>
          {symptomCheckerDropdownOpen && (
            <ul className="absolute left-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
              <li><Link to="/smart-symptomChecker/diabetes" className="block px-4 py-2 hover:bg-gray-100">Diabetes Prediction</Link></li>
              <li><Link to="/smart-symptomChecker/heart-disease" className="block px-4 py-2 hover:bg-gray-100">Heart Disease Prediction</Link></li>
              <li><Link to="/smart-symptomChecker/parkinsons" className="block px-4 py-2 hover:bg-gray-100">Parkinson’s Prediction</Link></li>
            </ul>
          )}
        </li>

        <li><a onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">About Us</a></li>
        <li><a onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Contact Us</a></li>
        <li><Link to="/sign-up" className="hover:text-blue-500 transition-colors duration-300">Sign In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
