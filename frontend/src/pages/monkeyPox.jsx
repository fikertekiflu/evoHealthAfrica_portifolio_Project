import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HivPageImage from '../assets/images/Hivpage.jpg';
import symptom from '../assets/images/sym.jpg';
import mon from '../assets/images/mon.jpg';
import monkey from '../assets/images/monkey.jpg';

const MonkeyPox = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-100 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 sticky top-0 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Monkeypox Awareness</h1>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-gray-200 transition"
              >
                About MonkeyPox
              </Link>
            </li>
            <li>
              <Link
                to="prevention"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-gray-200 transition"
              >
                Prevention
              </Link>
            </li>
            <li>
              <Link
                to="treatment"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-yellow-300 transition"
              >
                Treatment
              </Link>
            </li>
            <li>
              <Link
                to="spread"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-yellow-300 transition"
              >
                How it Spreads
              </Link>
            </li>
            <li>
              <Link
                to="living"
                smooth={true}
                duration={800}
                className="cursor-pointer hover:text-yellow-300 transition"
              >
                Living with MonkeyPox
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Section */}
      <div className="flex-1 p-8 lg:p-16">
        {/* About Section */}
        <section id="about" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <img
              src={mon}
              alt="Monkeypox Awareness"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <h2 className="text-4xl font-semibold text-gray-700 mb-6 text-center lg:text-left">
              About Monkeypox
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Monkeypox is a viral disease that is similar to smallpox but generally less severe. It
              is caused by the monkeypox virus, and its symptoms typically include fever, headache,
              muscle aches, and a distinctive rash. Raising awareness about Monkeypox is essential
              for preventing its spread and ensuring early treatment:
            </p>
            <ul className="list-disc pl-5 text-gray-800 text-lg space-y-3">
              <li>
                Monkeypox can be transmitted through close contact with an infected person or
                animal.
              </li>
              <li>
                It typically causes a rash, which starts on the face and spreads to other parts of
                the body.
              </li>
              <li>Symptoms can include fever, swollen lymph nodes, and body aches.</li>
              <li>
                Practicing good hygiene and avoiding contact with infected individuals can help
                prevent its spread.
              </li>
              <li>
                People at higher risk include those in close contact with animals or those in
                affected regions.
              </li>
              <li>Vaccines used for smallpox may offer some protection against Monkeypox.</li>
            </ul>
          </div>
        </section>

        {/* Symptoms Section */}
        <section id="symptom" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">
              Symptoms of Monkeypox
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Symptoms of Monkeypox often begin with fever, headache, muscle aches, and exhaustion.
              Within 1 to 3 days (sometimes longer) after the appearance of fever, the patient
              develops a rash, often starting on the face and then spreading to other parts of the
              body. The rash goes through several stages before scabbing and eventually falling off.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <img
              src={monkey}
              alt="Monkeypox Symptoms"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pl-6">
            <div className="relative pb-9/16">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/QxvSfXwEoAc"
                title="Monkeypox Overview Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pr-6 ml-16">
            <h2 className="text-4xl font-semibold mb-6 text-gray-800">Overview of Monkeypox</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Monkeypox is a rare viral disease that primarily occurs in Central and West Africa. It
              is caused by the monkeypox virus and can spread to humans from animals, as well as
              through close contact with an infected person. Symptoms include fever, headache,
              muscle pain, and a rash that forms lesions and eventually scabs. Awareness and early
              detection are critical for managing and preventing outbreaks.
            </p>
          </div>
        </section>

        {/* Prevention Section */}
        <section id="prevention" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">Prevention</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Preventing Monkeypox involves taking proactive measures to reduce the risk of exposure
              and infection. Key methods include:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-lg space-y-3">
              <li>
                <strong>Avoid Close Contact:</strong> Avoid close physical contact with individuals
                who have a confirmed or suspected Monkeypox infection, especially skin-to-skin
                contact.
              </li>
              <li>
                <strong>Practice Good Hygiene:</strong> Wash your hands regularly with soap and
                water, or use alcohol-based hand sanitizers to reduce the risk of infection.
              </li>
              <li>
                <strong>Avoid Contact with Infected Animals:</strong> Monkeypox can spread through
                direct contact with infected animals, such as rodents and primates.
              </li>
              <li>
                <strong>Wear Protective Gear:</strong> Healthcare workers or those caring for
                infected individuals should wear personal protective equipment (PPE), such as gloves
                and masks.
              </li>
              <li>
                <strong>Get Vaccinated:</strong> Vaccination can help prevent Monkeypox, especially
                for individuals at higher risk.
              </li>
            </ul>
          </div>
        </section>

        {/* Treatment Section */}
        <section id="treatment" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">Treatment</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              While there is no specific treatment for Monkeypox, most patients recover on their own
              with proper medical care and supportive treatments. In severe cases, antiviral
              medications may be prescribed. Ensuring rest, staying hydrated, and seeking medical
              advice are key steps toward recovery.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <img
              src={symptom}
              alt="Monkeypox Treatment"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Living with Monkeypox */}
        <section id="living" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pl-6">
            <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
              Living with Monkeypox
            </h2>
            <ul className="list-disc pl-5 text-gray-700 text-lg space-y-3">
              <li>
                <strong>Isolation:</strong> Patients with Monkeypox should self-isolate to avoid
                infecting others. This includes avoiding contact with other people and animals.
              </li>
              <li>
                <strong>Mental Health:</strong> Dealing with Monkeypox can be stressful, so it’s
                important to seek emotional support from healthcare providers, family, and support
                groups.
              </li>
              <li>
                <strong>Prevention of Spread:</strong> Those around the patient should take
                precautions to avoid infection. Regular disinfection and avoiding shared personal
                items are crucial.
              </li>
              <li>
                <strong>Post-Recovery Care:</strong> After recovery, follow medical guidance to
                monitor for any long-term effects or complications.
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white p-4 text-center">
        <p>© 2024 Monkeypox Awareness Initiative. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MonkeyPox;
