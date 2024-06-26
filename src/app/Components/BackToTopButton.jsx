"use client"
import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#5a025e] text-[#FFF9EA] shadow-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-all animate-bounce hover:animate-nome duration-300"
        >
          <IoIosArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
