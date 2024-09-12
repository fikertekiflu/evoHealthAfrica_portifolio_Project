import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignIn ? `http://localhost:3000/api/auth/login` : `http://localhost:3000/api/auth/register`;
      const { data } = await axios.post(endpoint, formData);
      
      // Check if login or signup is successful and navigate to home page
      if (isSignIn && data.message === 'Login successful') {
        navigate('/Home');
      } else if (!isSignIn && data.message === 'User registered successfully') {
        navigate('/Home');
      }

    } catch (error) {
      // Show an error message if authentication fails
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-indigo-950">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
          <p className="text-gray-900 text-lg">{isSignIn ? 'Welcome back! Please sign in.' : 'Create an account to get started.'}</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          />
          {!isSignIn && (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            />
          )}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          />
          <button
            type="submit"
            className="w-full py-4 bg-gray-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-6">
          {isSignIn ? (
            <>
              <p className="text-gray-600 mb-2">Don't have an account?</p>
              <button
                className="text-gray-600 font-semibold hover:underline"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <p className="text-gray-600 mb-2">Already have an account?</p>
              <button
                className="text-gray-600 font-semibold hover:underline"
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
