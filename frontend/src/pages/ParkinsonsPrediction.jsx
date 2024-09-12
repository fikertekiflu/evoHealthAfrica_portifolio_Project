import React, { useState } from 'react';
import axios from 'axios';

const ParkinsonsPrediction = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    Fo: '',
    Fhi: '',
    Flo: '',
    JitterPercent: '',
    JitterAbs: '',
    RAP: '',
    PPQ: '',
    DDP: '',
    Shimmer: '',
    Shimmer_dB: '',
    APQ3: '',
    APQ5: '',
    APQ: '',
    DDA: '',
    NHR: '',
    HNR: '',
    RPDE: '',
    DFA: '',
    Spread1: '',
    Spread2: '',
    D2: '',
    PPE: '',
  });

  // State to store the prediction result
  const [result, setResult] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://parkinsons-prediction.onrender.com/smart-symptomChecker/parkinsons', formData);
      setResult(response.data.result);
    } catch (error) {
      setResult('An error occurred while predicting Parkinson’s.');
      console.error('Error during prediction:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-300 p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 border-b-4 border-gray-700 pb-2">
          Parkinson’s Prediction
        </h1>
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-6 border border-gray-200">
          <p className="text-lg text-gray-700">
            Enter the following details to predict the likelihood of Parkinson’s disease. Hover over the fields for more information.
          </p>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "Fo", name: "Fo", tooltip: "Fundamental frequency of the vocal fold vibrations (Hz)." },
              { label: "Fhi", name: "Fhi", tooltip: "Highest vocal fold frequency (Hz)." },
              { label: "Flo", name: "Flo", tooltip: "Lowest vocal fold frequency (Hz)." },
              { label: "Jitter Percent", name: "JitterPercent", tooltip: "Frequency variation percentage." },
              { label: "Jitter Abs", name: "JitterAbs", tooltip: "Absolute jitter in the vocal fold vibration (seconds)." },
              { label: "RAP", name: "RAP", tooltip: "Relative average perturbation of vocal fold vibration." },
              { label: "PPQ", name: "PPQ", tooltip: "Pitch perturbation quotient." },
              { label: "DDP", name: "DDP", tooltip: "Degree of pitch perturbation." },
              { label: "Shimmer", name: "Shimmer", tooltip: "Amplitude variation in the vocal fold vibrations." },
              { label: "Shimmer dB", name: "Shimmer_dB", tooltip: "Amplitude variation measured in decibels." },
              { label: "APQ3", name: "APQ3", tooltip: "Three-point amplitude perturbation quotient." },
              { label: "APQ5", name: "APQ5", tooltip: "Five-point amplitude perturbation quotient." },
              { label: "APQ", name: "APQ", tooltip: "Amplitude perturbation quotient." },
              { label: "DDA", name: "DDA", tooltip: "Difference of differential amplitudes." },
              { label: "NHR", name: "NHR", tooltip: "Noise-to-harmonics ratio." },
              { label: "HNR", name: "HNR", tooltip: "Harmonics-to-noise ratio." },
              { label: "RPDE", name: "RPDE", tooltip: "Recurrence period density entropy." },
              { label: "DFA", name: "DFA", tooltip: "Detrended fluctuation analysis." },
              { label: "Spread1", name: "Spread1", tooltip: "First measure of spread in vocal fold frequencies." },
              { label: "Spread2", name: "Spread2", tooltip: "Second measure of spread in vocal fold frequencies." },
              { label: "D2", name: "D2", tooltip: "Correlation dimension." },
              { label: "PPE", name: "PPE", tooltip: "Pitch period entropy." },
            ].map((input) => (
              <div className="relative group" key={input.name}>
                <input
                  type="number"
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleInputChange}
                  placeholder={input.label}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200"
                />
                <span className="absolute bottom-full left-0 mb-2 text-sm bg-gray-800 text-white p-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap z-10">
                  {input.tooltip}
                </span>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            Check Parkinson’s
          </button>
        </form>
        {result && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkinsonsPrediction;
