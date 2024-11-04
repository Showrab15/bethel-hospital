import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800">
      <div className="animate-fadeIn text-center p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg border-4 border-blue-500 border-opacity-50 relative">
        <h1 className="text-5xl font-bold text-blue-600 mb-4 animate-bounce">Coming Soon</h1>
        <p className="text-lg mb-6">
          Our hospital's new website is under construction. Check back soon for updates!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-transform duration-200 hover:scale-105">
            Contact Us
          </button>
          <button className="px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transform transition-transform duration-200 hover:scale-105">
            Learn More
          </button>
        </div>
        <div className="absolute inset-0 rounded-lg border-4 border-blue-500 animate-pulse border-opacity-50"></div>
      </div>
    </div>
  );
}

export default App;
