import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HivPageImage from '../assets/images/Hivpage.jpg';
import symptom from '../assets/images/sym.jpg';
import malsym from '../assets/images/malsym.jpg';
import mal from '../assets/images/malaria.jpg';

const Malaria = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
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

      {/* Content Section */}
      <div className="flex-1 p-8 lg:p-16">
        {/* About Section */}
        <section id="about" className="flex flex-col lg:flex-row mb-12" data-aos="sli">
          <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <img
              src={mal}
              alt="HIV Awareness"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center lg:text-left">About Malaria</h2>
            <p className="text-gray-700 text-lg mb-6">
            Malaria is a mosquito-borne infectious disease caused by Plasmodium parasites. It is a serious global health issue, particularly in tropical and subtropical regions. Understanding malaria and its transmission is key to prevention and control efforts:
            </p>
            <ul className="list-disc pl-5 text-gray-800 text-lg mb-4">
              <li>Malaria is treatable, but if left untreated, it can lead to severe complications and even death.</li>
              <li>Malaria prevention involves both individual and community efforts, such as using insecticide-treated bed nets and eliminating mosquito breeding sites.</li>
              <li>primarily spread through the bites of infected female Anopheles mosquitoes, but it can also be transmitted through blood transfusions, organ transplants, or from mother to child during pregnancy.</li>
              <li>Populations in certain regions, especially in sub-Saharan Africa and Southeast Asia, are more vulnerable to malaria.</li>
              <li>Effective prevention strategies include the use of bed nets, antimalarial medications, and vector control programs aimed at reducing mosquito populations.</li>
            </ul>
          </div>
        </section>

        {/* Symptoms Section */}
        <section id="symptom" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
  <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Symptoms of Malaria</h2>
    <p className="text-gray-700 text-lg mb-6">
      Symptoms of malaria typically include fever, chills, headache, nausea, and muscle pain. In more severe cases, malaria can cause anemia, respiratory distress, or organ failure. The onset of symptoms usually begins 10-15 days after being bitten by an infected mosquito.
    </p>
  </div>
  <div className="lg:w-1/2 lg:pl-6">
    <img
      src={malsym}
      alt="Symptoms of Malaria"
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>
</section>
<section id="overview" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
  <div className="lg:w-1/2 lg:pl-6">
    <div className="relative pb-9/16">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/your-malaria-video-link" // Update the video link to a relevant malaria video
        title="Malaria Overview Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  <div className="lg:w-1/2 lg:pr-6 ml-16">
    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Overview of Malaria</h2>
    <p className="text-gray-700 text-lg mb-6">
      Malaria is a potentially life-threatening disease caused by parasites transmitted to humans through the bites of infected mosquitoes. If left untreated, malaria can lead to severe complications, including organ failure and death. However, with early diagnosis and treatment, it can be effectively managed and cured.
    </p>
  </div>
</section>
        {/* Prevention Section */}
<section id="prevention" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
  <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Prevention</h2>
    <p className="text-gray-700 text-lg mb-6">
      Preventing malaria is essential in reducing its spread and protecting yourself and others. Here are key methods:
    </p>
    <ul className="list-disc pl-5 text-gray-700 text-lg mb-4">
      <li>
        <strong>Use Insecticide-Treated Nets:</strong> Sleeping under insecticide-treated mosquito nets provides protection against mosquito bites, which is the primary mode of malaria transmission.
      </li>
      <li>
        <strong>Indoor Residual Spraying (IRS):</strong> IRS involves spraying the inside walls of homes with insecticides to kill mosquitoes that rest on them, reducing the transmission of malaria.
      </li>
      <li>
        <strong>Antimalarial Medication:</strong> For people traveling to areas where malaria is common, taking antimalarial drugs as prescribed helps prevent infection.
      </li>
      <li>
        <strong>Eliminate Standing Water:</strong> Mosquitoes breed in standing water, so reducing sources like stagnant water near homes helps to minimize mosquito populations.
      </li>
      <li>
        <strong>Wear Protective Clothing:</strong> Wearing long-sleeved shirts and pants, especially during the evening when mosquitoes are most active, reduces the risk of mosquito bites.
      </li>
    </ul>
  </div>
  <div className="lg:w-1/2 lg:pl-6">
    <img
      src={HivPageImage}  // Replace with the correct prevention image for malaria if available
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
      Malaria can be effectively treated if diagnosed early. Proper treatment options help manage the infection and prevent complications. Key treatment methods include:
    </p>
    <ul className="list-disc pl-5 text-gray-700 text-lg mb-4">
      <li>
        <strong>Antimalarial Medication:</strong> The most common treatment for malaria is the use of antimalarial drugs like artemisinin-based combination therapies (ACTs), which target the malaria parasites in the body.
      </li>
      <li>
        <strong>Hospitalization for Severe Cases:</strong> In cases of severe malaria, hospitalization may be required for intravenous medications and close monitoring.
      </li>
      <li>
        <strong>Early Diagnosis:</strong> Timely diagnosis is crucial for effective treatment. Blood tests can identify the malaria parasite, allowing for the appropriate treatment to begin as soon as possible.
      </li>
      <li>
        <strong>Prevention of Relapse:</strong> In cases of Plasmodium vivax and Plasmodium ovale malaria, additional treatment is required to prevent relapses by eliminating dormant parasites in the liver.
      </li>
    </ul>
  </div>
  <div className="lg:w-1/2 lg:pl-6">
    <img
      src={HivPageImage}  // Replace with the correct treatment image for malaria if available
      alt="Treatment"
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>
</section>


        {/* How it Spreads Section */}
        <section id="spread" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
  <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">How Malaria Spreads</h2>
    <p className="text-gray-700 text-lg mb-6">
      Understanding how malaria spreads is essential for prevention. Malaria is transmitted through:
    </p>
    <ul className="list-disc pl-5 text-gray-700 text-lg mb-4">
      <li>
        <strong>Infected Mosquito Bites:</strong> Malaria is primarily transmitted through the bite of an infected female Anopheles mosquito, which carries the Plasmodium parasite.
      </li>
      <li>
        <strong>Mother-to-Child:</strong> In rare cases, malaria can be transmitted from an infected mother to her baby during pregnancy or delivery.
      </li>
      <li>
        <strong>Blood Transfusions:</strong> Malaria can be transmitted through transfusions of infected blood, though this is uncommon due to rigorous screening.
      </li>
      <li>
        <strong>Organ Transplants:</strong> Malaria can also spread through organ transplants from infected donors, though such cases are rare.
      </li>
    </ul>
  </div>
  <div className="lg:w-1/2 lg:pl-6">
    <img
      src={HivPageImage}  // Replace with the correct image if available
      alt="How Malaria Spreads"
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>
</section>

{/* Living with Malaria Section */}
<section id="living" className="flex flex-col lg:flex-row mb-12" data-aos="fade-up">
  <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Living with Malaria</h2>
    <p className="text-gray-700 text-lg mb-6">
      Living with malaria requires proper medical care and preventive measures to manage symptoms and avoid reinfection. Key aspects include:
    </p>
    <ul className="list-disc pl-5 text-gray-700 text-lg mb-4">
      <li>
        <strong>Access to Treatment:</strong> Early treatment with antimalarial drugs is critical in managing malaria and preventing complications.
      </li>
      <li>
        <strong>Preventing Reinfection:</strong> Protecting yourself from mosquito bites, especially in high-risk areas, is essential to prevent reinfection.
      </li>
      <li>
        <strong>Follow-Up Care:</strong> Regular medical follow-ups help ensure that the infection has been fully cleared and to monitor for any recurrence.
      </li>
      <li>
        <strong>Healthy Lifestyle:</strong> Maintaining a balanced diet and staying hydrated can help your body recover from malaria and improve overall well-being.
      </li>
    </ul>
  </div>
  <div className="lg:w-1/2 lg:pl-6">
    <img
      src={HivPageImage}  // Replace with the correct image if available
      alt="Living with Malaria"
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>
</section>
</div>

{/* Footer */}
<footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
  <div className="container mx-auto text-center">
    <p>&copy; 2024 Malaria Awareness. All rights reserved.</p>
  </div>
</footer>
</div>
)
}

export default Malaria;
