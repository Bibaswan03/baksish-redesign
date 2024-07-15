"use client";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinearDeterminate from "./ProgressBar";
import { validationSchema3 } from "./Utils/ValidationSchema";
import { useFormik } from "formik";

function Page3({ appendvalues, values, page, handleForward, handleBackward }) {
  const handleSubmitforward = (e) => {
    appendvalues(e);
    handleForward(page);
  };

  const initialValues = {
    restaurantname: values.restaurantname || "",
    restaurantemail: values.restaurantemail || "",
    restaurantphoneNo: values.restaurantphoneNo || "",
    restaurantwebsite: values.restaurantwebsite || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema3,
    onSubmit: (values, action) => {
      handleSubmitforward(values);
      action.resetForm();
    },
  });

  return (
    <div className="w-full max-w-md p-8 space-y-6 relative h-[700px] lg:h-[650px] bg-white rounded-lg shadow-md">
      <div className="absolute top-0 left-0 right-0">
        <LinearDeterminate currentProgress={40} />
      </div>
      <h2 onClick={() => handleBackward(page)} className="text-left text-rose-800 -mb-5">
        <KeyboardBackspaceIcon/> Go back
      </h2>
      <h2 className="text-3xl font-bold text-left text-rose-800">Fill Restaurant Details</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <label htmlFor="restaurantname" className="text-sm text-gray-700">
              Restaurant Name&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="restaurantname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.restaurantname}
              name="restaurantname"
              placeholder=" "
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-2">
            {formik.errors.restaurantname && formik.touched.restaurantname ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.restaurantname}
              </p>
            ) : null}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="restaurantemail" className="text-sm text-gray-700">
              Restaurant Email&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="restaurantemail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.restaurantemail}
              name="restaurantemail"
              placeholder="your_email@example.com"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-2">
            {formik.errors.restaurantemail && formik.touched.restaurantemail ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.restaurantemail}
              </p>
            ) : null}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="restaurantphoneNo" className="text-sm text-gray-700">
              Restaurant Phone Number&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="restaurantphoneNo"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.restaurantphoneNo}
              name="restaurantphoneNo"
              min={1000000000}
              placeholder=" "
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-2">
            {formik.errors.restaurantphoneNo && formik.touched.restaurantphoneNo ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.restaurantphoneNo}
              </p>
            ) : null}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="restaurantwebsite" className="text-sm text-gray-700">
              Restaurant Website
            </label>
            <input
              type="text"
              id="restaurantwebsite"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.restaurantwebsite}
              name="restaurantwebsite"
              placeholder=" "
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-2">
            {formik.errors.restaurantwebsite && formik.touched.restaurantwebsite ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {formik.errors.restaurantwebsite}
              </p>
            ) : null}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              # Provide your restaurant's website URL for better visibility.
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 mt-8 py-2 text-white bg-[#6C0345] rounded-md hover:bg-rose-900"
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

export default Page3;
