import React, { useState } from 'react';

const DiabetesPrediction = () => {
  const [formData, setFormData] = useState({
    Pregnancies: '',
    Age: '',
    Glucose: '',
    BloodPressure: '',
    Insulin: '',
    BMI: '',
    SkinThickness: '',
    DiabetesPedigreeFunction: ''
  });

  const [result, setResult] = useState('');
  const [recommendation, setRecommendation] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); 
  const [isDiabetic, setIsDiabetic] = useState(false); // To track if the user is diabetic

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.Age <= 0 || formData.Age > 120) newErrors.Age = 'Age must be between 1 and 120.';
    if (formData.Glucose <= 0 || formData.Glucose > 300) newErrors.Glucose = 'Glucose must be between 1 and 300 mg/dL.';
    if (formData.BloodPressure < 0 || formData.BloodPressure > 200) newErrors.BloodPressure = 'Blood Pressure must be between 0 and 200 mmHg.';
    if (formData.Insulin < 0 || formData.Insulin > 1000) newErrors.Insulin = 'Insulin must be between 0 and 1000 μU/mL.';
    if (formData.BMI <= 0 || formData.BMI > 100) newErrors.BMI = 'BMI must be between 1 and 100.';
    if (formData.SkinThickness < 0 || formData.SkinThickness > 100) newErrors.SkinThickness = 'Skin Thickness must be between 0 and 100 mm.';
    if (formData.DiabetesPedigreeFunction < 0 || formData.DiabetesPedigreeFunction > 2.5) newErrors.DiabetesPedigreeFunction = 'Diabetes Pedigree Function must be between 0 and 2.5.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setResult('Error: Please correct the invalid inputs.');
      return;
    }
    setLoading(true);

    try {
      const response = await fetch('https://diabete-prediction-1.onrender.com/smart-symptomChecker/diabetes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.result);
        
        if (data.result.includes('diabetic')) {
          setRecommendation('You might be at risk for diabetes. Please consult a healthcare provider for diagnosis and treatment options. Focus on a balanced diet, regular exercise, and continuous monitoring of glucose levels.');
          setIsDiabetic(true); // Diabetic case
        } else {
          setRecommendation('You are not diabetic. Maintain a healthy lifestyle through balanced nutrition, regular physical activity, and routine medical check-ups.');
          setIsDiabetic(false); // Non-diabetic case
        }

        setShowModal(true); // Show modal with result
      } else {
        setResult(`Error: ${data.message || 'Unknown error occurred'}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setResult('Error making the prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-pink-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-900">Diabetes Prediction</h1>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl mx-auto">
        This system uses a machine learning model to predict the likelihood of diabetes based on input metrics.
        Please enter your measurements below to get a prediction.
      </p>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {[
            { label: 'Pregnancies', name: 'Pregnancies', type: 'number', tooltip: 'Number of pregnancies. Range: any.' },
            { label: 'Age', name: 'Age', type: 'number', tooltip: 'Age in years. Valid range: 1-120.' },
            { label: 'Glucose Level', name: 'Glucose', type: 'number', tooltip: 'Blood glucose level (mg/dL). Valid range: 1-300.' },
            { label: 'Blood Pressure', name: 'BloodPressure', type: 'number', tooltip: 'Blood pressure (mmHg). Valid range: 0-200.' },
            { label: 'Insulin', name: 'Insulin', type: 'number', tooltip: 'Insulin levels (μU/mL). Valid range: 0-1000.' },
            { label: 'BMI', name: 'BMI', type: 'number', step: '0.1', tooltip: 'Body Mass Index (BMI). Valid range: 1-100.' },
            { label: 'Skin Thickness', name: 'SkinThickness', type: 'number', tooltip: 'Skin thickness (mm). Valid range: 0-100.' },
            { label: 'Diabetes Pedigree Function', name: 'DiabetesPedigreeFunction', type: 'number', step: '0.01', tooltip: 'Diabetes Pedigree Function. Valid range: 0-2.5.' }
          ].map(({ label, name, type, step, tooltip }) => (
            <div key={name} className="relative group hover:shadow-lg transition-shadow duration-200 ease-in-out p-4 bg-white rounded-lg border border-gray-200">
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
                className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                step={step}
                required
              />
              {errors[name] && <p className="text-red-500 text-xs mt-2">{errors[name]}</p>}
            </div>
          ))}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Check Diabetes'}
            </button>
          </div>
        </div>
      </form>

      {/* Modal for showing result and recommendation */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className={`bg-white rounded-lg p-6 w-96 shadow-lg relative`}>
            <h2 className={`text-2xl font-semibold text-center mb-4 ${isDiabetic ? 'text-red-600' : 'text-green-600'}`}>Prediction Result</h2>
            <p className="text-lg text-center mb-4">{result}</p>
            <p className="text-sm text-gray-600 mb-6">{recommendation}</p>
            <button
              className={`py-2 px-4 w-full rounded-md ${isDiabetic ? 'bg-red-600 hover:bg-red-500' : 'bg-green-600 hover:bg-green-500'} text-white transition`}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiabetesPrediction;
