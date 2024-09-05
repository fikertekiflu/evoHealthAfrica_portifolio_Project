import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SmartSymptomChecker = () => {
  const { disease } = useParams();
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize inputs based on the disease type
    const initializeInputs = () => {
      switch (disease) {
        case 'diabetes':
          return {
            Pregnancies: '',
            Glucose: '',
            BloodPressure: '',
            SkinThickness: '',
            Insulin: '',
            BMI: '',
            DiabetesPedigreeFunction: '',
            Age: ''
          };
        case 'heart-disease':
          return {
            age: '',
            sex: '',
            cp: '',
            trestbps: '',
            chol: '',
            fbs: '',
            restecg: '',
            thalach: '',
            exang: '',
            oldpeak: '',
            slope: '',
            ca: '',
            thal: ''
          };
        case 'parkinsons':
          return {
            fo: '',
            fhi: '',
            flo: '',
            Jitter_percent: '',
            Jitter_Abs: '',
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
            spread1: '',
            spread2: '',
            D2: '',
            PPE: ''
          };
        default:
          return {};
      }
    };

    setInputs(initializeInputs());
  }, [disease]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `https://4624-35-233-161-36.ngrok-free.app/smart-symptomChecker/${disease}`,
        inputs
      );
      setResult(response.data);
    } catch (err) {
      setError('An error occurred while checking the symptoms.');
    } finally {
      setLoading(false);
    }
  };

  const renderInputs = () => {
    switch (disease) {
      case 'diabetes':
        return (
          <>
            <input type="number" name="Pregnancies" value={inputs.Pregnancies} onChange={handleChange} placeholder="Pregnancies" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="Glucose" value={inputs.Glucose} onChange={handleChange} placeholder="Glucose" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="BloodPressure" value={inputs.BloodPressure} onChange={handleChange} placeholder="BloodPressure" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="SkinThickness" value={inputs.SkinThickness} onChange={handleChange} placeholder="SkinThickness" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="Insulin" value={inputs.Insulin} onChange={handleChange} placeholder="Insulin" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="BMI" value={inputs.BMI} onChange={handleChange} placeholder="BMI" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="DiabetesPedigreeFunction" value={inputs.DiabetesPedigreeFunction} onChange={handleChange} placeholder="DiabetesPedigreeFunction" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="Age" value={inputs.Age} onChange={handleChange} placeholder="Age" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
          </>
        );
      case 'heart-disease':
        return (
          <>
            <input type="number" name="age" value={inputs.age} onChange={handleChange} placeholder="Age" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="sex" value={inputs.sex} onChange={handleChange} placeholder="Sex" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="cp" value={inputs.cp} onChange={handleChange} placeholder="CP" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="trestbps" value={inputs.trestbps} onChange={handleChange} placeholder="Trestbps" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="chol" value={inputs.chol} onChange={handleChange} placeholder="Chol" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="fbs" value={inputs.fbs} onChange={handleChange} placeholder="Fbs" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="restecg" value={inputs.restecg} onChange={handleChange} placeholder="Restecg" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="thalach" value={inputs.thalach} onChange={handleChange} placeholder="Thalach" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="exang" value={inputs.exang} onChange={handleChange} placeholder="Exang" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="oldpeak" value={inputs.oldpeak} onChange={handleChange} placeholder="Oldpeak" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="slope" value={inputs.slope} onChange={handleChange} placeholder="Slope" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="ca" value={inputs.ca} onChange={handleChange} placeholder="CA" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="thal" value={inputs.thal} onChange={handleChange} placeholder="Thal" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
          </>
        );
      case 'parkinsons':
        return (
          <>
            <input type="number" name="fo" value={inputs.fo} onChange={handleChange} placeholder="FO" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="fhi" value={inputs.fhi} onChange={handleChange} placeholder="FHI" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="flo" value={inputs.flo} onChange={handleChange} placeholder="FLO" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="Jitter_percent" value={inputs.Jitter_percent} onChange={handleChange} placeholder="Jitter Percent" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="Jitter_Abs" value={inputs.Jitter_Abs} onChange={handleChange} placeholder="Jitter Abs" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="RAP" value={inputs.RAP} onChange={handleChange} placeholder="RAP" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="PPQ" value={inputs.PPQ} onChange={handleChange} placeholder="PPQ" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="DDP" value={inputs.DDP} onChange={handleChange} placeholder="DDP" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="Shimmer" value={inputs.Shimmer} onChange={handleChange} placeholder="Shimmer" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="Shimmer_dB" value={inputs.Shimmer_dB} onChange={handleChange} placeholder="Shimmer dB" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="APQ3" value={inputs.APQ3} onChange={handleChange} placeholder="APQ3" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="APQ5" value={inputs.APQ5} onChange={handleChange} placeholder="APQ5" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="APQ" value={inputs.APQ} onChange={handleChange} placeholder="APQ" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="DDA" value={inputs.DDA} onChange={handleChange} placeholder="DDA" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="NHR" value={inputs.NHR} onChange={handleChange} placeholder="NHR" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="HNR" value={inputs.HNR} onChange={handleChange} placeholder="HNR" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="RPDE" value={inputs.RPDE} onChange={handleChange} placeholder="RPDE" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="DFA" value={inputs.DFA} onChange={handleChange} placeholder="DFA" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="spread1" value={inputs.spread1} onChange={handleChange} placeholder="Spread1" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="spread2" value={inputs.spread2} onChange={handleChange} placeholder="Spread2" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="D2" value={inputs.D2} onChange={handleChange} placeholder="D2" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
            <input type="number" name="PPE" value={inputs.PPE} onChange={handleChange} placeholder="PPE" className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Smart Symptom Checker</h1>
      <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
        <Link to="/smart-symptomChecker/diabetes" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Diabetes Prediction</Link>
        <Link to="/smart-symptomChecker/heart-disease" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Heart Disease Prediction</Link>
        <Link to="/smart-symptomChecker/parkinsons" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Parkinson’s Prediction</Link>
      </div>
      {renderForm()}
      <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">Submit</button>
      {result && (
        <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Prediction Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default SmartSymptomChecker;
