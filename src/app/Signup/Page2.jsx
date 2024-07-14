// Page2.js

import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinearDeterminate from "./ProgressBar";
import { validationSchema2 } from "./Utils/ValidationSchema";
import { useFormik } from "formik";

function Page2({ appendvalues, values, page, handleForward, handleBackward }) {
  const handleSubmitforward = (v) => {
    appendvalues(v);
    handleForward(page);
  };

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: values.username || "",
    password: values.password || "",
    confirmpassword: values.confirmpassword || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema2,
    onSubmit: (values, action) => {
      handleSubmitforward(values);
      action.resetForm();
    },
  });

  return (
    <div className="w-full max-w-md p-8 space-y-6 relative h-[650px] bg-white rounded-lg shadow-md">
      <div className="absolute top-0 left-0 right-0">
        <LinearDeterminate currentProgress={20} />
      </div>
      <h2 onClick={() => handleBackward(page)} className="text-left text-rose-800 -mb-5">
        <KeyboardBackspaceIcon  /> Go back
      </h2>
      <h2 className="text-3xl font-bold text-left text-rose-800">Fill Personal Details</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <label htmlFor="username" className="text-sm text-gray-400">
              Username&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              name="username"
              placeholder=" "
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-5">
            {formik.errors.username && formik.touched.username ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.username}
              </p>
            ) : null}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="password" className="text-sm text-gray-400">
              Password&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              name="password"
              placeholder=" "
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-5">
            {formik.errors.password && formik.touched.password ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.password}
              </p>
            ) : null}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="confirmpassword" className="text-sm text-gray-400">
              Confirm Password&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmpassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
              name="confirmpassword"
              placeholder=" "
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-5">
            {formik.errors.confirmpassword && formik.touched.confirmpassword ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.confirmpassword}
              </p>
            ) : null}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="form-checkbox text-[#6C0345] focus:ring-[#6C0345] ring-[1px] ring-gray-300"
            />
            <label htmlFor="showPassword" className="text-sm text-gray-400 cursor-pointer">
              Show password
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 mt-14 py-2 text-white bg-[#6C0345] rounded-md hover:bg-rose-900"
        >
          Next
        </button>
      </form>

      <p className="text-sm text-center text-gray-600">
        <a href="#" className="font-medium text-[#6C0345] tracking-tight underline">
          Connect with team Baksish
        </a>
      </p>
    </div>
  );
}

export default Page2;
