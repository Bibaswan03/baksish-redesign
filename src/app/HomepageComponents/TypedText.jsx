import React from 'react';
import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <div className="typed-text m-4 lg:text-2xl text-xl font-semibold font-serif poppins-semibold  text-[#FFF9EA]">
      <ReactTyped
        strings={[
          "Transforming dining experience.",
          "A table-to-kitchen ordering tech.",
          "Enhancing customer satisfaction.",
        ]}
        typeSpeed={60}
        backSpeed={60}
        loop
        className='drop-shadow-2xl'
      />
    </div>
  );
};

export default TypedText;
