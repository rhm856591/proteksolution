import React from 'react';
import './loader.css'

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin"></div>
        {/* Inner Circle */}
        <div className="absolute inset-2 rounded-full border-4 border-gray-200 border-t-transparent animate-spin-slow"></div>
        {/* Core Dot */}
        <div className="absolute inset-6 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
