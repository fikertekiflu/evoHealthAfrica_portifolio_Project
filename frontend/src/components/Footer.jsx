import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold mb-4">evoHealthAfrica</h3>
          <p className="mb-4">Empowering health through innovation in Africa.</p>
          <p>&copy; 2024 evoHealthAfrica. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul>
            <li className="mb-1"><Link to="/about" className="hover:underline">About Us</Link></li>
            <li className="mb-1"><Link to="/services" className="hover:underline">Services</Link></li>
            <li className="mb-1"><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li className="mb-1"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-blue-500" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-blue-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
