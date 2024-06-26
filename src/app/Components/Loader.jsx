"use client"
// components/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-t-4 border-b-4 border-yellow-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
