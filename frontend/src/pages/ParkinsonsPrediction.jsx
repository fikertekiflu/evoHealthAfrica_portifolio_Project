import React from 'react';

const ParkinsonsPrediction = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-xl border border-gray-300 p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-gray-600 pb-2">
          Parkinson’s Prediction
        </h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
          <p className="text-lg text-gray-700">
            Enter the following details to predict the likelihood of Parkinson’s disease. Accurate data will help provide a more reliable prediction.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="number" placeholder="Fo" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Fhi" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Flo" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Jitter Percent" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Jitter Abs" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="RAP" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="PPQ" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="DDP" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Shimmer" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Shimmer dB" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="APQ3" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="APQ5" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="APQ" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="DDA" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="NHR" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="HNR" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="RPDE" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="DFA" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Spread1" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="Spread2" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="D2" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" placeholder="PPE" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
          </div>
          <button type="submit" className="w-full py-4 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out">
            Check Parkinson’s
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParkinsonsPrediction;
