"use client";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/navigation";
import LinearDeterminate from "./ProgressBar";
import { validationSchema5 } from "./Utils/ValidationSchema";
import { useFormik } from "formik";

function Page5({appendvalues, page, handleBackward, handleForward }) {
    let prog = 80;
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmitforward = (e) => {
    prog=100;
    appendvalues(e);
    console.log(e);
    // console.log();
  };

  const initialValues = {
    restaurantname: "",
    restaurantemail: "",
    restaurantphoneNo: "",
    restaurantwebsite: "",
  };
  const { values1, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validationSchema5,
      onSubmit: (values1, action) => {
        handleSubmitforward(values1);
        action.resetForm();
      },
    });

  return (
    <div className="w-full max-w-md p-8  space-y-6 relative h-[620px]  bg-white rounded-lg shadow-md">
      <div className="absolute top-0 left-0 right-0">
        <LinearDeterminate key={prog} currentProgress={prog} />
      </div>{" "}
      <h2 className="text-left text-rose-800 -mb-5 uppercase tracking-widest text-sm">
        <KeyboardBackspaceIcon onClick={() => handleBackward(page)} />{" "}
        {"Restaurant Name"}
      </h2>
      <h2 className="text-3xl font-bold text-left text-rose-800">
        About Restaurant
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-8">
          <input
            type="text"
            id="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values1?.address}
            name="address"
            placeholder="Enter restaurant address"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
          />
          {errors.address && touched.address ? (
            <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
              {errors.address}
            </p>
          ) : null}

          <div class="w-96">
            <div class="relative w-full min-w-[200px]">
              <textarea
              id="description"
              name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values1?.description}
                class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-gray-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-rose-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-rose-700 disabled:resize-none disabled:border-0 disabled:bg-rose-50"
                placeholder=" "
              ></textarea>
              {errors.description && touched.description ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {errors.description}
                </p>
              ) : null}
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-normal leading-tight text-rose-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-300 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-300 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-rose-500">
                Restaurant description
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 mt-14 py-2 text-white bg-[#6C0345] rounded-md hover:bg-rose-900 "
        >
          Sign Up
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
