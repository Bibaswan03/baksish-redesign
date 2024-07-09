"use client";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinearDeterminate from "./ProgressBar";
import { validationSchema3 } from "./Utils/ValidationSchema";
import { useFormik } from "formik";

function Page3({appendvalues,values, page, handleForward, handleBackward }) {
  // console.log(page);
  const handleSubmitforward = (e) => {
    console.log(e);
    appendvalues(e);
    handleForward(page);
  };

  const initialValues = {
    restaurantname: "",
    restaurantemail: "",
    restaurantphoneNo:"",
    restaurantwebsite:""
  };
  const { values1, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validationSchema3,
      onSubmit: (values1, action) => {
        handleSubmitforward(values1);
        action.resetForm();
      },
    });


  return (
<div className="w-full max-w-md p-8  space-y-6 relative h-[620px]  bg-white rounded-lg shadow-md">
      <div className='absolute top-0 left-0 right-0'>
      <LinearDeterminate currentProgress={40} />
      </div>      <h2 className="text-left text-rose-800 -mb-5">
        <KeyboardBackspaceIcon onClick={()=>handleBackward(page)} /> {"sudip@gmail.com"}
      </h2>
      <h2 className="text-3xl font-bold text-left text-rose-800">
        Fill Restaurant Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="restaurantname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values1?.restaurantname}
            name="restaurantname"
            placeholder="Enter Restaurant Name"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
          />
          {errors.restaurantname && touched.restaurantname ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.restaurantname}
            </p>
          ) : null}

          <input
            type="email"
            id="restaurantemail"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values1?.restaurantemail}
            name="restaurantemail"
            placeholder="restaurant_email@gmail.com"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
          />
          {errors.restaurantemail && touched.restaurantemail ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.restaurantemail}
            </p>
          ) : null}

          <input
            type="number"
            id="restaurantphoneNo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values1?.restaurantphoneNo}
            name="restaurantphoneNo"
            min={1000000000}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
          />
          {errors.restaurantphoneNo && touched.restaurantphoneNo ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.restaurantphoneNo}
            </p>
          ) : null}

          <input
            type="text"
            id="restaurantwebsite"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values1?.restaurantwebsite}
            name="restaurantwebsite"
            placeholder="restaurant_website.com"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
          />
          {errors.restaurantwebsite && touched.restaurantwebsite ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.restaurantwebsite}
            </p>
          ) : null}

          
        </div>
        <button
            type="submit"
            className="w-full px-4 mt-14 py-2 text-white bg-[#6C0345] rounded-md hover:bg-rose-900 "
          >
            Next
          </button>
      </form>
      <p className="text-sm text-center text-gray-600">
        <a
          href="#"
          className="font-medium text-[#6C0345] tracking-tight underline"
        >
          Connect with team Baksish
        </a>
      </p>
    </div>
  );
}

export default Page3;
