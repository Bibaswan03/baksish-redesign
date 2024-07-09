"use client";
import React, { useRef, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinearDeterminate from "./ProgressBar";
import { validationSchema4 } from "./Utils/ValidationSchema";
import { useFormik } from "formik";

function Page4({ values, appendvalues, page, handleForward, handleBackward }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("pic", {
          file,
          base64: reader.result,
        });
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitforward = (e) => {
    console.log(e);
    appendvalues({...e, ...{ pic: e.pic.base64 }});
    handleForward(page);
  };

  const initialValues = {
    opensAt: "",
    closesAt: "",
    chef: "",
    seating: "",
    tables: "",
    employees: "",
    waiter: "",
    pic: null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema4,
    onSubmit: (values, actions) => {
      handleSubmitforward(values);
      actions.resetForm();
    },
  });

  return (
    <div className="w-full max-w-md p-8  space-y-6 relative h-[620px]  bg-white rounded-lg shadow-md">
      <div className="absolute top-0 left-0 right-0">
        <LinearDeterminate currentProgress={60} />
      </div>
      <h2 className="text-left text-rose-800 -mb-5 uppercase tracking-widest text-sm">
        <KeyboardBackspaceIcon onClick={() => handleBackward(page)} />{" "}
        {"Restaurant Name"}
      </h2>
      <h2 className="text-3xl font-bold text-left text-rose-800">
        Fill Restaurant Details
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="opensAt" className="text-sm text-gray-400 ">
                Opens at
              </label>
              <input
                type="time"
                id="opensAt"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.opensAt}
                name="opensAt"
                defaultValue="09:00"
                className="text-rose-700 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              {formik.errors.opensAt && formik.touched.opensAt ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {formik.errors.opensAt}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="closesAt" className="text-sm text-gray-400">
                Closes at
              </label>
              <input
                type="time"
                id="closesAt"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.closesAt}
                name="closesAt"
                defaultValue="17:00"
                className="text-rose-700 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              {formik.errors.closesAt && formik.touched.closesAt ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {formik.errors.closesAt}
                </p>
              ) : null}
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          <div className="flex border-t border-dashed pt-2 items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="chef" className="text-sm text-gray-400 ">
                No. of Chef
              </label>
              <input
                type="number"
                id="chef"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.chef}
                name="chef"
                min={0}
                className="text-rose-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              {formik.errors.chef && formik.touched.chef ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {formik.errors.chef}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="seating" className="text-sm text-gray-400 ">
                Seating Capacity
              </label>
              <input
                type="number"
                id="seating"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.seating}
                name="seating"
                min={0}
                className="text-rose-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              {formik.errors.seating && formik.touched.seating ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {formik.errors.seating}
                </p>
              ) : null}
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          <div className="flex border-t border-dashed pt-2 items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="tables" className="text-sm text-gray-400 ">
                No. of Tables
              </label>
              <input
                type="number"
                id="tables"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tables}
                name="tables"
                min={0}
                className="text-rose-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              {formik.errors.tables && formik.touched.tables ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {formik.errors.tables}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="employees" className="text-sm text-gray-400 ">
                No. of Employees
              </label>
              <input
                type="number"
                id="employees"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.employees}
                name="employees"
                min={0}
                className="text-rose-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              {formik.errors.employees && formik.touched.employees ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {formik.errors.employees}
                </p>
              ) : null}
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          <div className="flex border-t border-dashed pt-2 items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="waiter" className="text-sm text-gray-400 ">
                No. of Waiters
              </label>
              <input
                type="number"
                id="waiter"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.waiter}
                name="waiter"
                min={0}
                className="text-rose-900 font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              {formik.errors.waiter && formik.touched.waiter ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {formik.errors.waiter}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col space-y-1 w-[36%]">
              <label htmlFor="pic" className="text-sm text-gray-400 ">
                Restaurant Image
              </label>
              <input
                type="file"
                id="pic"
                onChange={handleFileChange}
                onBlur={formik.handleBlur}
                name="pic"
                accept="image/png, image/jpeg"
                ref={fileInputRef}
                className="hidden"
              />
              <button
                type="button"
                onClick={handleFileUpload}
                className="bg-gray-300 bg-opacity-30 border border-gray-300 rounded-lg text-rose-700 font-medium px-4 py-2 focus:outline-none hover:bg-slate-200"
              >
                Upload Photo
              </button>
              {fileName && (
                <p className="text-sm text-gray-400 mt-2">{fileName}</p>
              )}
              {formik.errors.pic && formik.touched.pic ? (
                <p className="form-error p-[2px] text-[0.65rem] text-rose-500">
                  {formik.errors.pic}
                </p>
              ) : null}
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#6C0345] rounded-md hover:bg-rose-900 "
          >
            Next
          </button>
        </div>
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

export default Page4;
