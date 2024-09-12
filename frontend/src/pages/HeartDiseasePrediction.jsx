import React, { useState } from 'react';

const HeartDiseasePrediction = () => {
  const [formData, setFormData] = useState({
    Age: '',
    Sex: '',
    ChestPain: '',
    RestingBP: '',
    Cholesterol: '',
    FastingBS: '',
    RestECG: '',
    MaxHeartRate: '',
    ExerciseAngina: '',
    OldPeak: '',
    Slope: '',
    MajorVessels: '',
    Thalassemia: '',
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateInputs = () => {
    const newInvalidFields = [];
    for (const [key, value] of Object.entries(formData)) {
      if (value === '' || isNaN(value)) {
        newInvalidFields.push(key);
      }
    }
    setInvalidFields(newInvalidFields);
    return newInvalidFields.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      setError('Please provide valid inputs for all fields.');
      return;
    }

    try {
      const response = await fetch('https://heartdisease-prediction-1.onrender.com/smart-symptomChecker/heart-disease', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.result);
        setError(null);
      } else {
        setResult(null);
        setError(data.error || 'An error occurred');
      }
    } catch (err) {
      setResult(null);
      setError('Failed to connect to the server');
    }
  };

  const getRecommendation = (result) => {
    switch (result) {
      case 'High Risk':
        return 'It is recommended to visit a healthcare provider for a detailed assessment and further testing.';
      case 'Moderate Risk':
        return 'Consider lifestyle changes and consult with a healthcare provider for a comprehensive evaluation.';
      case 'Low Risk':
        return 'Your risk is low, but maintaining a healthy lifestyle is advised to prevent future issues.';
      default:
        return 'Please consult with a healthcare provider for a detailed assessment.';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-xl border border-gray-300 p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-gray-600 pb-2">
          Heart Disease Prediction
        </h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
          <p className="text-lg text-gray-700">
            Evaluate your risk of heart disease by filling out this form with your health data. Accurate inputs help in obtaining a more precise prediction.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Age', name: 'Age', type: 'number', tooltip: 'Your age in years (20-80).' },
              { label: 'Sex', name: 'Sex', type: 'text', tooltip: '1 for male, 0 for female.' },
              { label: 'Chest Pain types (cp)', name: 'ChestPain', type: 'number', tooltip: 'Value from 0 to 3 (0: typical angina, 1: atypical angina, 2: non-anginal pain, 3: asymptomatic).' },
              { label: 'Resting Blood Pressure (trestbps)', name: 'RestingBP', type: 'number', tooltip: 'Your resting blood pressure (in mmHg, 80-200).' },
              { label: 'Cholesterol (chol)', name: 'Cholesterol', type: 'number', tooltip: 'Your serum cholesterol level (in mg/dL, 150-500).' },
              { label: 'Fasting Blood Sugar > 120 mg/dl (fbs)', name: 'FastingBS', type: 'number', tooltip: '1 if true, 0 if false.' },
              { label: 'Resting ECG results (restecg)', name: 'RestECG', type: 'number', tooltip: 'Resting electrocardiographic results (0-2).' },
              { label: 'Maximum Heart Rate (thalach)', name: 'MaxHeartRate', type: 'number', tooltip: 'Your maximum heart rate achieved (60-220).' },
              { label: 'Exercise Induced Angina (exang)', name: 'ExerciseAngina', type: 'number', tooltip: '1 = yes, 0 = no.' },
              { label: 'ST depression induced by exercise (oldpeak)', name: 'OldPeak', type: 'number', tooltip: 'ST depression relative to rest (0-6).' },
              { label: 'Slope of the peak exercise ST segment (slope)', name: 'Slope', type: 'number', tooltip: 'Slope of the peak exercise ST segment (0, 1, or 2).' },
              { label: 'Number of major vessels (ca)', name: 'MajorVessels', type: 'number', tooltip: 'Number of major vessels colored by fluoroscopy (0-3).' },
              { label: 'Thalassemia (thal)', name: 'Thalassemia', type: 'number', tooltip: '3 = normal, 6 = fixed defect, 7 = reversible defect.' },
            ].map(({ label, name, type, tooltip }) => (
              <div
                key={name}
                className={`relative group hover:shadow-lg transition-shadow duration-200 ease-in-out p-4 bg-white rounded-lg border ${
                  invalidFields.includes(name) ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  {label}
                  <span className="ml-2 relative flex items-center group">
                    <svg className="w-4 h-4 text-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                    <span className="absolute bottom-full mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {tooltip}
                    </span>
                  </span>
                </label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                    invalidFields.includes(name) ? 'border-red-500' : ''
                  }`}
                  required
                />
              </div>
            ))}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
            >
              Check Heart Disease
            </button>
          </div>
        </form>
        {result && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
            onClick={() => setResult(null)}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Prediction Result</h2>
              <p className="text-lg mb-4">{result}</p>
              <p className="text-md mb-4">{getRecommendation(result)}</p>
              <button
                className="py-2 px-4 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-800"
                onClick={() => setResult(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {error && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
            onClick={() => setError(null)}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Error</h2>
              <p className="text-lg mb-4">{error}</p>
              <button
                className="py-2 px-4 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-800"
                onClick={() => setError(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeartDiseasePrediction;
