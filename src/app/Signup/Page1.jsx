"use client";
import React from "react";
import LinearDeterminate from "./ProgressBar";
import { useFormik } from "formik";
import { validationSchema1 } from "./Utils/ValidationSchema";

function Page1({ appendvalues, values, page, handleForward, handleBackward }) {
  const handleSubmitforward = (values1) => {
    appendvalues(values1);
    handleForward(page);
  };

  const initialValues = {
    name: values.name || "",
    email: values.email || "",
    phoneNo: values.phoneNo || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema1,
    onSubmit: (values, action) => {
      handleSubmitforward(values);
      action.resetForm();
    },
  });

  return (
    <div className="w-full max-w-md mx-2 p-4 space-y-6 relative h-[650px] bg-white rounded-lg shadow-md">
      <div className="absolute top-0 left-0 right-0">
        <LinearDeterminate currentProgress={0} />
      </div>

      <h2 className="text-3xl font-bold text-center text-rose-800 ">Create Account</h2>

      <h3 className="text-center text-rose-800">To subscribe Baksish</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col ">
          <div className="relative">
            <label htmlFor="name" className="text-sm text-gray-700">
              Admin Name&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              id="name"
              name="name"
              placeholder=" "
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-10">
            {formik.errors.name && formik.touched.name ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.name}
              </p>
            ) : null}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="email" className="text-sm text-gray-700">
              Admin Email&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              id="email"
              name="email"
              placeholder="your_email@example.com"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-10">
            {formik.errors.email && formik.touched.email ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.email}
              </p>
            ) : null}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="phoneNo" className="text-sm text-gray-700">
            Admin Phone Number&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNo}
              type="text"
              id="phoneNo"
              name="phoneNo"
              min={1000000000}
              placeholder="XXXXX XXXXX"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-10">
            {formik.errors.phoneNo && formik.touched.phoneNo ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.phoneNo}
              </p>
            ) : null}
            </div>
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

export default Page1;
