"use client";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinearDeterminate from "./ProgressBar";
import { validationSchema2 } from "./Utils/ValidationSchema";
import { useFormik } from "formik";

function Page2({appendvalues,values,page,handleForward,handleBackward}) {

  const handleSubmitforward = (v) => {
    console.log(v);
    appendvalues(v);

    handleForward(page);
  };

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: "",
    password: "",
    confirmpassword:""
  };
  const { values1, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validationSchema2,
      onSubmit: (values1, action) => {
        handleSubmitforward(values1);
        action.resetForm();
      },
    });

  return (
    <div className="w-full max-w-md p-8  space-y-6 relative h-[620px]  bg-white rounded-lg shadow-md">
      <div className='absolute top-0 left-0 right-0'>
      < LinearDeterminate currentProgress={20} />
      </div>      
      <h2 className="text-left text-rose-800 -mb-5">
        <KeyboardBackspaceIcon onClick={()=>handleBackward(page)}/> {"sudip@gmail.com"}
      </h2>
      <h2 className="text-3xl font-bold text-left text-rose-800">
        Fill Personal Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values1?.username}
            name="username"
            placeholder="Enter username"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
          />
          {errors.username && touched.username ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.username}
            </p>
          ) : null}

          <input
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values1?.password}
            id="password"
            name="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
          />
          {errors.password && touched.password ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.password}
            </p>
          ) : null}
          <input
            type={showPassword ? "text" : "password"}
            id="confirmpassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values1?.confirmpassword}
            name="confirmpassword"
            placeholder="Re-enter your password"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
          />
          {errors.confirmpassword && touched.confirmpassword ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.confirmpassword}
            </p>
          ) : null}
          <div className="flex px-1">
            <input
              id="check"
              type="checkbox"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
            <p className="px-2">Show password</p>
          </div>
          
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

export default Page2;
