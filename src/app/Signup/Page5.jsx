"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Importing uuid
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinearDeterminate from "./ProgressBar";
import { validationSchema5 } from "./Utils/ValidationSchema";
import { useFormik } from "formik";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';

function Page5({
  appendvalues,
  values = {},
  page,
  handleBackward,
  handleForward,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);

  const handleSubmitforward = async (formValues) => {
    const combinedValues = { ...values, ...formValues };
    appendvalues(formValues);

    try {
      setIsSubmitting(true);
      toast.loading('Submitting...', { id: uuidv4() }); // Generating a unique ID using uuid
      let { data } = await axios.post('/api/signup', combinedValues);
      console.log(data);
      toast.dismiss();
      if (data.success) {
        toast.success('Successfully Signed in');
        window.location = 'https://admin.baksish.in';
      } else {
        toast.error('Failed to Sign in');
      }
    } catch (error) {
      console.error("Error sending data to the backend:", error);
      toast.dismiss();
      toast.error('An error occurred while submitting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const initialValues = {
    restaurantaddress: values.restaurantaddress || "",
    restaurantdescription: values.restaurantdescription || "",
    pincode: values.pincode || "",
    sgst: values.sgst || "",
    cgst: values.cgst || "",
    gstin: values.gstin || ""
  };

  const {
    values: formValues,
    errors,
    touched,
    handleBlur,
    handleChange: formikHandleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: validationSchema5,
    onSubmit: handleSubmitforward,
  });

  const handleChange = (e) => {
    formikHandleChange(e);
    if (e.target.name === 'sgst') {
      formikHandleChange({
        target: {
          name: 'cgst',
          value: e.target.value,
        },
      });
    }
    if (e.target.name === 'pincode' && e.target.value.length === 6) {
      fetchLocationDetails(e.target.value);
    }
  };

  const fetchLocationDetails = async (pincode) => {
    try {
      const response = await axios.get(`/api/pincode?pincode=${pincode}`);
      if (response.data.success) {
        setLocationDetails(response.data);
      } else {
        setLocationDetails(null);
      }
    } catch (error) {
      setLocationDetails(null);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 overflow-y-auto relative h-[650px] bg-white rounded-lg shadow-md">
      <div className="absolute top-0 left-0 right-0">
        <LinearDeterminate currentProgress={100} />
        <Toaster />
      </div>
      <h2 onClick={() => handleBackward(page)} className="text-left text-rose-800 -mb-5 tracking-widest text-sm">
        <KeyboardBackspaceIcon />{" "}
        Go back
      </h2>
      <h2 className="text-3xl font-bold text-left text-rose-800">
        About Restaurant
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-8">
          <input
            type="text"
            id="restaurantaddress"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formValues.restaurantaddress}
            name="restaurantaddress"
            placeholder="Enter restaurant address*"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            disabled={isSubmitting}
          />
          {errors.restaurantaddress && touched.restaurantaddress ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.restaurantaddress}
            </p>
          ) : null}

          <div className="w-96">
            <div className="relative w-full min-w-[200px]">
              <textarea
                id="restaurantdescription"
                name="restaurantdescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formValues.restaurantdescription}
                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-gray-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-zinc-500 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-rose-700 disabled:resize-none disabled:border-0 disabled:bg-rose-50"
                placeholder=" "
                disabled={isSubmitting}
              ></textarea>
              {errors.restaurantdescription && touched.restaurantdescription ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {errors.restaurantdescription}
                </p>
              ) : null}
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-normal leading-tight text-rose-950 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-300 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-300 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-rose-500">
                Restaurant description&nbsp;<span className="text-red-500 ">*</span>
              </label>
            </div>
          </div>

          <input
            type="text"
            id="pincode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formValues.pincode}
            name="pincode"
            placeholder="Enter pincode*"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            disabled={isSubmitting}
          />
          {errors.pincode && touched.pincode ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.pincode}
            </p>
          ) : null}

          {locationDetails && (
            <div className="mt-4">
              <h3 className="text-lg font-bold">Location Details:</h3>
              <p>State: {locationDetails.state}</p>
              <p>District: {locationDetails.district}</p>
              <p>Area: {locationDetails.area}</p>
              <p>Pincode: {locationDetails.pincode}</p>
            </div>
          )}

          <select
            id="sgst"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formValues.sgst}
            name="sgst"
            className="w-full px-3 text-sm py-2 border-b border-gray-300 text-zinc-500 focus:outline-none"
            disabled={isSubmitting}
          >
            <option value="">Select SGST %</option>
            <option value="0.0">0.0%</option>
            <option value="2.5">2.5%</option>
            <option value="6.5">6.5%</option>
            <option value="9">9%</option>
          </select>
          {errors.sgst && touched.sgst ? (
            <p className="form-error p-[2px] text-rose-500">
              {errors.sgst}
            </p>
          ) : null}

          <select
            id="cgst"
            onChange={handleChange}
            onBlur={handleBlur}
            value={formValues.cgst}
            name="cgst"
            className="w-full px-3 py-2 text-sm border-b border-gray-300 text-zinc-500 focus:outline-none"
            disabled={isSubmitting}
            readOnly
          >
            <option value="">Select CGST %</option>
            <option value="0.0">0.0%</option>
            <option value="2.5">2.5%</option>
            <option value="6.5">6.5%</option>
            <option value="9">9%</option>
          </select>
          {errors.cgst && touched.cgst ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.cgst}
            </p>
          ) : null}

          <div className="relative">
            <label htmlFor="gstin" className="text-sm text-gray-400">
              GSTIN&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={formValues.gstin}
              type="text"
              id="gstin"
              name="gstin"
              placeholder=" "
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
              disabled={isSubmitting}
            />
            {errors.gstin && touched.gstin ? (
              <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                {errors.gstin}
              </p>
            ) : null}
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 mt-14 py-2 text-white bg-[#6C0345] rounded-md hover:bg-rose-900"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
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
export default Page5;
