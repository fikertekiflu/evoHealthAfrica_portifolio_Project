import React from 'react';


const Monkeypox = () => {
  return (
    <div>
     
      <div className="bg-gray-100 min-h-screen pt-16">
        {/* Header */}
        <header className="bg-yellow-800 text-white py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-2">Understanding Monkeypox</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive information about Monkeypox, including its definition, transmission, and prevention methods.
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="container mx-auto p-8">
          {/* Navigation */}
          <nav className="flex justify-center space-x-6 mb-8">
            <a href="#definition" className="text-yellow-600 hover:underline text-lg font-semibold">Definition</a>
            <a href="#transmission" className="text-yellow-600 hover:underline text-lg font-semibold">Transmission</a>
            <a href="#prevention" className="text-yellow-600 hover:underline text-lg font-semibold">Prevention</a>
            <a href="#resources" className="text-yellow-600 hover:underline text-lg font-semibold">Resources</a>
          </nav>

          {/* Sections */}
          <section id="definition" className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Definition</h2>
            <p className="text-lg text-gray-700">
              Monkeypox is a rare viral disease that primarily occurs in Central and West Africa. It is characterized by fever, rash, and swollen lymph nodes.
            </p>
          </section>

          <section id="transmission" className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Transmission</h2>
            <p className="text-lg text-gray-700">
              Monkeypox is transmitted through:
              <ul className="list-disc ml-6 mt-4">
                <li>Contact with infected animals or their body fluids</li>
                <li>Human-to-human contact via respiratory droplets</li>
                <li>Contact with contaminated objects or surfaces</li>
              </ul>
            </p>
          </section>

          <section id="prevention" className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Prevention</h2>
            <p className="text-lg text-gray-700">
              To prevent Monkeypox:
              <ul className="list-disc ml-6 mt-4">
                <li>Avoid contact with infected animals</li>
                <li>Practice good hygiene, including handwashing</li>
                <li>Use personal protective equipment if caring for infected individuals</li>
                <li>Avoid close contact with infected people</li>
              </ul>
            </p>
          </section>

          <section id="resources" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Resources</h2>
            <p className="text-lg text-gray-700">
              For more information, visit:
              <ul className="list-disc ml-6 mt-4">
                <li><a href="https://www.cdc.gov/poxvirus/monkeypox/" className="text-yellow-600 hover:underline" target="_blank" rel="noopener noreferrer">CDC Monkeypox Information</a></li>
                <li><a href="https://www.who.int/news-room/fact-sheets/detail/monkeypox" className="text-yellow-600 hover:underline" target="_blank" rel="noopener noreferrer">WHO Monkeypox Fact Sheet</a></li>
              </ul>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Monkeypox;
