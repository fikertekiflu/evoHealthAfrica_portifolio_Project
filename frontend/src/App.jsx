import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SmartSymptomChecker from './pages/SmartSymptomChecker';
import Authpage from './pages/Authpage';
import DiabetesPrediction from './pages/DiabetesPrediction';
import HeartDiseasePrediction from './pages/HeartDiseasePrediction';
import ParkinsonsPrediction from './pages/ParkinsonsPrediction';
import Hiv from './pages/Hiv';
import MonkeyPox from './pages/monkeyPox';
import Malaria from './pages/malaria';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smart-symptomChecker" element={<SmartSymptomChecker />} />
        <Route path="/sign-up" element={<Authpage />} />
        <Route path="/smart-symptomChecker/diabetes" element={<DiabetesPrediction />} />
        <Route path="/smart-symptomChecker/heart-disease" element={<HeartDiseasePrediction />} />
        <Route path="/smart-symptomChecker/parkinsons" element={<ParkinsonsPrediction />} />
        <Route path="/hiv" element={<Hiv />} />
        <Route path="/malaria" element={<Malaria />} />
        <Route path="/monkeyPox" element={<MonkeyPox />} />
      </Routes>
    </Router>
  );
};

export default App;
