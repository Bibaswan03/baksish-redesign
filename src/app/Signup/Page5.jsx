"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importing uuid
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinearDeterminate from "./ProgressBar";
import { validationSchema5 } from "./Utils/ValidationSchema";
import { useFormik } from "formik";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

function Page5({ appendvalues, values, page, handleBackward}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);

  const moveback=(page)=>{
    appendvalues(formValues);
    handleBackward(page);
  }
  const handleSubmitforward = async (formValues) => {
    const combinedValues = { ...values, ...formValues };
    appendvalues(formValues);
    try {
      setIsSubmitting(true);
      toast.loading("Submitting...", { id: uuidv4() }); // Generating a unique ID using uuid
      let { data } = await axios.post("/api/signup", {combinedValues,state,area,district,pincode});
      //console.log(data);
      toast.dismiss();
      if (data.success) {
        toast.success("Successfully Signed in");
        window.location = "https://admin.baksish.in";
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error sending data to the backend:", error);
      toast.dismiss();
      toast.error("An error occurred while submitting.");
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
    gstin: values.gstin || "",
  };
  const [state, setstate] = useState("")
  const [district, setdistrict] = useState("")
  const [area, setarea] = useState("")
  const [pincode, setpincode] = useState("")
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

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: validationSchema5,
  //   onSubmit: (values, action) => {
  //     console.log(values);
  //     handleSubmitforward(values);
  //     action.resetForm();
  //   },
  // });

  const handleChange = (e) => {
    formikHandleChange(e);
    if (e.target.name === "sgst") {
      formikHandleChange({
        target: {
          name: "cgst",
          value: e.target.value,
        },
      });
    }
    if (e.target.name === "pincode" && e.target.value.length === 6) {
      fetchLocationDetails(e.target.value);
    }
  };

  const fetchLocationDetails = async (pincode) => {
    try {
      const response = await axios.get(`/api/pincode?pincode=${pincode}`);
      if (response.data.success) {
        setLocationDetails(response.data);
        setstate(response.data.state);
        setdistrict(response.data.district);
        setarea(response.data.area);
        setpincode(response.data.pincode);
      } else {
        setLocationDetails(null);
      }
    } catch (error) {
      setLocationDetails(null);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 mx-2 overflow-y-auto overflow-x-auto relative h-[650px] bg-white rounded-lg shadow-md">
      <div className="absolute top-0 left-0 right-0">
        <LinearDeterminate currentProgress={100} />
        <Toaster />
      </div>
      <h2
        
        className="text-left text-rose-800 -mb-5 tracking-widest text-sm"
      >
        <span onClick={() => moveback(page)} className="cursor-pointer "><KeyboardBackspaceIcon /> Go back</span>
      </h2>
      <h2 className="text-3xl font-bold text-left text-rose-800">
        About Restaurant
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-8">
          <div className="relative">
            <label
              htmlFor="restaurantphoneNo"
              className="text-sm text-gray-700"
            >
              Restaurant Address&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="restaurantaddress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formValues.restaurantaddress}
              name="restaurantaddress"
              placeholder="Enter restaurant address*"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-2">
              {errors.restaurantaddress && touched.restaurantaddress ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {errors.restaurantaddress}
                </p>
              ) : null}
            </div>
          </div>

          
            <div className="relative w-full min-w-[200px]">
            <label htmlFor="email" className="text-sm text-gray-700">
              Restaurant Description&nbsp;<span className="text-red-500">*</span>
            </label>
              <textarea
                id="restaurantdescription"
                name="restaurantdescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formValues.restaurantdescription}
                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-gray-300  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-zinc-500 outline outline-0 transition-all   disabled:resize-none disabled:border-0 disabled:bg-rose-50"
                placeholder="A short description of your restaurant"
                disabled={isSubmitting}
              ></textarea>
              {errors.restaurantdescription && touched.restaurantdescription ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {errors.restaurantdescription}
                </p>
              ) : null}
            </div>
          

          <div className="relative">
            <label htmlFor="pincode" className="text-sm text-gray-700">
              Pincode&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="pincode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formValues.pincode}
              name="pincode"
              placeholder="Enter pincode*"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
            />
            <div className="h-2">
              {errors.pincode && touched.pincode ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {errors.pincode}
                </p>
              ) : null}
            </div>
          </div>

          {locationDetails && (
            <div className="mt-1">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label className="block text-sm font-medium text-gray-700">State:</label>
                <input 
                  type="text" 
                  value={state} 
                  readOnly 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label className="block text-sm font-medium text-gray-700">District:</label>
                <input 
                  type="text" 
                  value={district} 
                  readOnly 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label className="block text-sm font-medium text-gray-700">Area:</label>
                <input 
                  type="text" 
                  onChange={(e)=>{setarea(e.target.value)}}
                  value={area} 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label className="block text-sm font-medium text-gray-700">Pincode:</label>
                <input 
                  type="text" 
                  value={pincode} 
                  readOnly 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md "
                />
              </div>
            </div>
          </div>
          
          )}

          <div className="relative">
            <label htmlFor="pincode" className="text-sm text-gray-700">
              SGST&nbsp;<span className="text-red-500">*</span>
            </label>
            <select
              id="sgst"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formValues.sgst}
              name="sgst"
              placeholder="Select sgst %"
              className="w-full px-3 text-sm py-2 border-b border-gray-300 text-zinc-500 focus:outline-none"
              disabled={isSubmitting}
            >
              <option value="">Select SGST %</option>
              <option value="0.0">0.0%</option>
              <option value="2.5">2.5%</option>
              <option value="6.5">6.5%</option>
              <option value="9">9%</option>
            </select>
            <div className="h-2">
              {errors.sgst && touched.sgst ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {errors.sgst}
                </p>
              ) : null}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="pincode" className="text-sm text-gray-700">
              CGST&nbsp;<span className="text-red-500">*</span>
            </label>
            <select
              id="cgst"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formValues.cgst}
              name="cgst"
              placeholder="Select CGST %"
              className="w-full px-3 text-sm py-2 border-b border-gray-300 text-zinc-500 focus:outline-none"
              disabled={isSubmitting}
            >
              <option value="">Select CGST %</option>
              <option value="0.0">0.0%</option>
              <option value="2.5">2.5%</option>
              <option value="6.5">6.5%</option>
              <option value="9">9%</option>
            </select>
            <div className="h-2">
              {errors.cgst && touched.cgst ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {errors.cgst}
                </p>
              ) : null}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="gstin" className="text-sm text-gray-700">
              GSTIN&nbsp;<span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={formValues.gstin}
              type="text"
              id="gstin"
              name="gstin"
              placeholder="Enter GST number"
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
          {isSubmitting ? "Submitting..." : "Sign Up"}
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
