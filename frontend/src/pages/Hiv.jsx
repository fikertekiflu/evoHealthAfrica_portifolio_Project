import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HivPageImage from '../assets/images/Hivpage.jpg';
import symptom from '../assets/images/sym.jpg';

const HIV = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gradient-to-r  bg-gray-800 text-white p-4 sticky top-0 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">HIV Awareness</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="about" smooth={true} duration={800} className="cursor-pointer hover:text-gray-200 transition">About HIV</Link>
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
            <li>
              <Link to="living" smooth={true} duration={800} className="cursor-pointer hover:text-yellow-300 transition">Living with HIV</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Section */}
      <div className="flex-1 p-8 lg:p-16">
        {/* About Section */}
        <section id="about" className="flex flex-col lg:flex-row mb-12" data-aos="sli">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <img
              src={HivPageImage}
              alt="HIV Awareness"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center lg:text-left">About HIV</h2>
            <p className="text-gray-700 text-lg mb-6">
              HIV (Human Immunodeficiency Virus) is a virus that attacks the immune system, weakening the body's ability to fight infections. Without treatment, HIV can progress to AIDS (Acquired Immunodeficiency Syndrome), a life-threatening condition. Understanding HIV is crucial to managing its impact:
            </p>
            <ul className="list-disc pl-5 text-gray-800 text-lg mb-4">
              <li>HIV is a chronic condition, but treatment can help control it.</li>
              <li>With appropriate medical care, people with HIV can live healthy, fulfilling lives.</li>
              <li>HIV is spread through contact with infected body fluids, most often through unprotected sex or sharing needles.</li>
              <li>Certain populations are more affected by HIV.</li>
              <li>Effective prevention strategies include the use of PrEP, regular testing, and safe sex practices.</li>
            </ul>
          </div>
        </section>

        {/* Symptoms Section */}
        <section id="symptom" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Symptoms of HIV</h2>
            <p className="text-gray-700 text-lg mb-6">
              Symptoms of HIV vary depending on the stage of infection. Many people experience flu-like symptoms such as fever, chills, rash, night sweats, muscle aches, and more. As the disease progresses without treatment, more severe symptoms can appear.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <img
              src={symptom}
              alt="Symptoms of HIV"
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
                src="https://www.youtube.com/embed/5g1ijpBI6Dk"
                title="HIV/AIDS Overview Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pr-6 ml-16">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Overview of HIV/AIDS</h2>
            <p className="text-gray-700 text-lg mb-6">
              AIDS is the most severe phase of HIV infection. During this stage, the immune system becomes severely damaged, and the body is vulnerable to opportunistic infections and certain cancers. However, early treatment can prevent the progression to AIDS.
            </p>
          </div>
        </section>

        {/* Prevention Section */}
        <section id="prevention" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Prevention</h2>
            <p className="text-gray-700 text-lg mb-6">
              Preventing HIV is critical in reducing its spread and protecting yourself and others. Here are key methods:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-lg mb-4">
              <li>
                <strong>Use Condoms:</strong> Consistently and correctly using condoms during sex provides a strong barrier to the transmission of HIV and other sexually transmitted infections.
              </li>
              <li>
                <strong>PrEP (Pre-exposure Prophylaxis):</strong> PrEP is a daily pill for people at high risk of HIV. When taken as prescribed, it is highly effective in preventing HIV infection.
              </li>
              <li>
                <strong>Regular Testing:</strong> Getting tested for HIV regularly helps in early detection and treatment, reducing the chances of unknowingly spreading the virus.
              </li>
              <li>
                <strong>Avoid Sharing Needles:</strong> Never share needles, syringes, or other injection equipment. Clean equipment is essential to prevent the transmission of HIV and other blood-borne diseases.
              </li>
              <li>
                <strong>Mother-to-Child Prevention:</strong> HIV-positive mothers can prevent transmission to their babies during pregnancy, childbirth, or breastfeeding by taking antiretroviral therapy (ART) as prescribed by their healthcare provider.
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <img
              src={symptom}  // Replace with the correct prevention image if available
              alt="Prevention"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Treatment Section */}
        <section id="treatment" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Treatment</h2>
            <p className="text-gray-700 text-lg mb-6">
              While there's no cure for HIV, effective treatment options help manage the virus and enable individuals to live healthy lives. Key treatment methods include:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-lg mb-4">
              <li>
                <strong>Antiretroviral Therapy (ART):</strong> ART is the standard treatment for HIV. It involves taking a combination of HIV medicines that help lower the viral load and maintain immune function.
              </li>
              <li>
                <strong>Regular Monitoring:</strong> Regular medical check-ups and laboratory tests are essential to monitor the effectiveness of ART and manage any side effects.
              </li>
              <li>
                <strong>Adherence:</strong> Sticking to the prescribed ART regimen is crucial for controlling the virus and maintaining a good quality of life.
              </li>
              <li>
                <strong>Support Services:</strong> Support services, including counseling and support groups, play a vital role in managing the emotional and psychological aspects of living with HIV.
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <img
              src={symptom}  // Replace with the correct treatment image if available
              alt="Treatment"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* How it Spreads Section */}
        <section id="spread" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">How HIV Spreads</h2>
            <p className="text-gray-700 text-lg mb-6">
              Understanding how HIV spreads is essential for prevention. HIV is transmitted through:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-lg mb-4">
              <li>
                <strong>Unprotected Sexual Contact:</strong> HIV can be transmitted through vaginal, anal, or oral sex without protection.
              </li>
              <li>
                <strong>Sharing Needles:</strong> Using needles or syringes previously used by someone with HIV can transmit the virus.
              </li>
              <li>
                <strong>Mother-to-Child:</strong> HIV can be passed from an HIV-positive mother to her baby during pregnancy, childbirth, or breastfeeding.
              </li>
              <li>
                <strong>Blood Transfusions:</strong> Receiving blood contaminated with HIV, although rare due to rigorous screening, is a possible transmission route.
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <img
              src={symptom}  // Replace with the correct image if available
              alt="How HIV Spreads"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Living with HIV Section */}
        <section id="living" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Living with HIV</h2>
            <p className="text-gray-700 text-lg mb-6">
              Living with HIV involves managing the condition with proper medical care and support. Here are key aspects:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-lg mb-4">
              <li>
                <strong>Regular Medical Care:</strong> Ongoing medical care, including regular check-ups and ART, is essential for maintaining health and managing HIV.
              </li>
              <li>
                <strong>Healthy Lifestyle:</strong> A balanced diet, regular exercise, and avoiding harmful substances contribute to overall well-being.
              </li>
              <li>
                <strong>Emotional Support:</strong> Connecting with support groups and counseling can help manage the psychological impacts of living with HIV.
              </li>
              <li>
                <strong>Preventing Transmission:</strong> Following safe practices to prevent the transmission of HIV to others is important.
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <img
              src={symptom}  // Replace with the correct image if available
              alt="Living with HIV"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 HIV Awareness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HIV;
