import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-blue-100 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-around items-center mb-8">
          
          {/* Contact Information */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Address</h3>
            <p className="text-gray-600">
              1234 Health Street,<br />
              Wellness City, HC 56789
            </p>
            <p className="text-gray-600 mt-2">
              Email: <a href="mailto:contact@evohealthafrica.com" className="text-blue-500 hover:underline">contact@evohealthafrica.com</a>
            </p>
            <p className="text-gray-600 mt-2">Phone: (123) 456-7890</p>
          </div>
          
          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={28} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Other Concepts */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Concepts</h3>
          <p className="text-gray-600">
            At evoHealthAfrica, we are dedicated to promoting health and wellness through accessible and innovative healthcare solutions. 
            Our mission is to empower individuals and communities with the knowledge and tools they need to live healthier lives.
          </p>
          <p className="text-gray-600 mt-4">
            If you have any questions or need more information about our services, please don't hesitate to reach out to us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
