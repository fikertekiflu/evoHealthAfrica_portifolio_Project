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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://4624-35-233-161-36.ngrok-free.app/smart-symptomChecker/diabetes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response Status:', response.status);
      const data = await response.json();
      console.log('Response Data:', data);

      if (response.ok) {
        setResult(data.result); // Assuming the response has a 'result' field
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

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Diabetes Prediction</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pregnancies</label>
            <input
              type="number"
              name="Pregnancies"
              value={formData.Pregnancies}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Glucose Level</label>
            <input
              type="number"
              name="Glucose"
              value={formData.Glucose}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Blood Pressure</label>
            <input
              type="number"
              name="BloodPressure"
              value={formData.BloodPressure}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Insulin</label>
            <input
              type="number"
              name="Insulin"
              value={formData.Insulin}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">BMI</label>
            <input
              type="number"
              step="0.1"
              name="BMI"
              value={formData.BMI}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Skin Thickness</label>
            <input
              type="number"
              name="SkinThickness"
              value={formData.SkinThickness}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Diabetes Pedigree Function</label>
            <input
              type="number"
              step="0.01"
              name="DiabetesPedigreeFunction"
              value={formData.DiabetesPedigreeFunction}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Check Diabetes'}
            </button>
          </div>
        </div>
      </form>

      {result && (
        <div className={`mt-6 p-4 rounded-md ${result.includes('not diabetic') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <h2 className="text-xl font-semibold">Prediction Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default DiabetesPrediction;
