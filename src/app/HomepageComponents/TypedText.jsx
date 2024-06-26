import React from 'react';
import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <div className="typed-text m-4 lg:text-2xl text-xl font-semibold font-serif poppins-semibold  text-[#FFF9EA]">
      <ReactTyped
        strings={[
          "Accelarate Your Ratings",
          "Get Your Menu Online",
          "Increase Your Staffs Income",
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
