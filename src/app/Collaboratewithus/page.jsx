"use client";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Form validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  restaurantName: Yup.string()
    .required("Restaurant name is required"),
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Name must contain only alphabets.")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  address: Yup.string().required("Address is required"),
});

function Page() {
  const [showmenu, setshowmenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const tooglemenu = () => {
    setshowmenu(!showmenu);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsLoading(true);
    try {
      const res= await axios.post(`/api/sendemail`, values);
      if (res.data.success) {
        setIsLoading(false);
        setSubmitting(false);
        toast.success("Your Request is successfully sent and will be reviewed");
        //resetForm();
      } else if(res.status==203){
        setIsLoading(false);
        setSubmitting(false);
        toast.error("A request has already been sent and is in process for this email address");
      }
      else{
        setIsLoading(false);
        setSubmitting(false);
        toast.error("An error occurred");
      }
    } catch (error) {
      setIsLoading(false);
      setSubmitting(false);
      toast.error("An error occurred");
    }
    resetForm();
  };

  return (
    <div>
      <Toaster />
      <Header />

      <section className="-mt-4 mb-6">
        <div className="max-w-[1200px] mx-auto p-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl text-[#661268] font-bold mb-4">
              Book a call
              <br />
              Accelerate Your Reviews
            </h1>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔</span>
                <span className="text-lg text-[#3B3131]">Virtual Menu</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔</span>
                <span className="text-lg text-[#3B3131]">Tip Staffs</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔</span>
                <span className="text-lg text-[#3B3131]">Increase Review</span>
              </li>
            </ul>
          </div>
          <div className="md:w-[40%] bg-[#fff1c9] p-6 mt-10 rounded-xl shadow-lg">
            <Formik
              initialValues={{
                restaurantName: "",
                name: "",
                email: "",
                phone: "",
                address: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-6 relative">
                    <label className="block text-[#3B3131]">
                      Restaurant name<sup className="text-rose-500">*</sup>
                    </label>
                    <Field
                      type="text"
                      name="restaurantName"
                      placeholder="Restaurant name"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="restaurantName"
                      component="div"
                      className="text-red-500 absolute text-sm"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <label className="block text-[#3B3131]">
                      Name<sup className="text-rose-500">*</sup>
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 absolute text-sm"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <label className="block text-[#3B3131]">
                      Email<sup className="text-rose-500">*</sup>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter work email"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 absolute text-sm"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <label className="block text-[#3B3131]">
                      Phone<sup className="text-rose-500">*</sup>
                    </label>
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 absolute text-sm"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <label className="block text-[#3B3131]">
                      Address<sup className="text-rose-500">*</sup>
                    </label>
                    <Field
                      as="textarea"
                      name="address"
                      placeholder="Enter your address"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 absolute text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#661268] text-white p-2 rounded-md w-full"
                    disabled={isSubmitting}
                  >
                    {isLoading ? (
                      <ClipLoader
                        size={18}
                        color={"#ffffff"}
                        loading={isLoading}
                      />
                    ) : (
                      "Submit"
                    )}
                  </button>
                  <p className="text-center mt-px">
                    All <sup className="text-rose-500">*</sup> marked are
                    required
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Page;
