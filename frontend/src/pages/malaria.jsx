import React from 'react';

import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import HivPageImage from '../assets/images/Hivpage.jpg';
// import symptom from '../assets/images/sym.jpg';

const Malaria = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Content */}
      <main className="container mx-auto p-8">
        {/* Navigation */}
        <nav className="bg-gradient-to-r from-blue-400 to-indigo-950 text-white p-4 sticky top-0 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Malaria Awareness</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="about" smooth={true} duration={800} className="cursor-pointer hover:text-gray-200 transition">About malaria</Link>
            </li>
            <li>
              <Link to="prevention" smooth={true} duration={800} className="cursor-pointer hover:text-gray-200 transition">Prevention</Link>
            </li>
            <li>
              <Link to="treatment" smooth={true} duration={800} className="cursor-pointer hover:text-yellow-300 transition">Treatment</Link>
            </li>
            <li>
              <Link to="spread" smooth={true} duration={800} className="cursor-pointer hover:text-yellow-300 transition">How it Spreads</Link>
            </li>
          </ul>
        </div>
      </nav>

        {/* Sections */}
        <section id="definition" className="bg-white p-8 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row items-center">
          <img src="/path-to-definition-image.jpg" alt="Malaria Definition" className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0" />
          <div className="md:ml-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Definition</h2>
            <p className="text-lg text-gray-700 mb-4">
              Malaria is a mosquito-borne infectious disease caused by protozoan parasites of the genus Plasmodium. It is characterized by:
            </p>
            <ul className="list-disc ml-6 text-lg text-gray-700">
              <li>Fever</li>
              <li>Chills</li>
              <li>Flu-like symptoms</li>
              <li>Potentially severe complications if untreated</li>
            </ul>
          </div>
        </section>

        <section id="transmission" className="bg-white p-8 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row items-center">
          <img src="/path-to-transmission-image.jpg" alt="Malaria Transmission" className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0" />
          <div className="md:ml-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Transmission</h2>
            <p className="text-lg text-gray-700 mb-4">
              Malaria is transmitted through:
            </p>
            <ul className="list-disc ml-6 text-lg text-gray-700">
              <li>Bites from infected Anopheles mosquitoes</li>
              <li>Mother to child during pregnancy</li>
              <li>Contaminated blood transfusions</li>
              <li>Occasionally through organ transplants</li>
            </ul>
          </div>
        </section>

        <section id="prevention" className="bg-white p-8 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row items-center">
          <img src="/path-to-prevention-image.jpg" alt="Malaria Prevention" className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0" />
          <div className="md:ml-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Prevention</h2>
            <p className="text-lg text-gray-700 mb-4">
              To prevent malaria, you should:
            </p>
            <ul className="list-disc ml-6 text-lg text-gray-700">
              <li>Use insecticide-treated mosquito nets</li>
              <li>Take antimalarial medications as prescribed</li>
              <li>Eliminate mosquito breeding sites around your home</li>
              <li>Apply insect repellents containing DEET</li>
            </ul>
          </div>
        </section>

        <section id="resources" className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Resources</h2>
          <p className="text-lg text-gray-700 mb-4">
            For more information, visit:
          </p>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li><a href="https://www.cdc.gov/malaria/" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">CDC Malaria Information</a></li>
            <li><a href="https://www.who.int/news-room/fact-sheets/detail/malaria" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">WHO Malaria Fact Sheet</a></li>
            <li><a href="https://www.malariaconsortium.org/" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">Malaria Consortium</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Malaria;
