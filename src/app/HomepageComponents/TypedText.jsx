import React from 'react';
import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <div className="typed-text m-4 text-2xl font-semibold font-serif poppins-semibold  text-[#661268]">
      <ReactTyped
        strings={[
          "Hello, welcome to our website!",
          "We offer great services.",
          "Contact us for more information."
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
        className='drop-shadow-2xl'
      />
    </div>
  );
};

export default TypedText;
