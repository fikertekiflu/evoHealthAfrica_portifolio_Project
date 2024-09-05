import react from 'react'
   

import React from 'react';

const HeartDiseasePrediction = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-xl border border-gray-300 p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-gray-600 pb-2">
          Heart Disease Prediction
        </h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
          <p className="text-lg text-gray-700">
            Evaluate your risk of heart disease by filling out this form with your health data. Accurate inputs help in obtaining a more precise prediction.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="number" placeholder="Age" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="text" placeholder="Sex" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Chest Pain types (cp)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Resting Blood Pressure (trestbps)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Cholesterol (chol)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Fasting Blood Sugar > 120 mg/dl (fbs)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Resting ECG results (restecg)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Maximum Heart Rate (thalach)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Exercise Induced Angina (exang)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="ST depression induced by exercise (oldpeak)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Slope of the peak exercise ST segment (slope)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Number of major vessels (ca)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Thalassemia (thal)" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
          </div>
          <button type="submit" className="w-full py-4 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out">
            Check Heart Disease
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeartDiseasePrediction;
