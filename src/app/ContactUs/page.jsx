"use client";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import Header from "../Components/Header";
import Loader from "../components/Loader";

const validator = require("email-validator");

function Page() {
  //loading
  const [loading, setLoading] = useState(false);

  //contact data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //validation for contact data
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);

  const handleInputForSendMessage = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "message") {
      setMessage(e.target.value);
    }
    if (e.target.name === "email" && validator.validate(email)) {
      setValidEmail(true);
    } else if (e.target.name === "email" && !validator.validate(email)) {
      setValidEmail(false);
    } else if (e.target.name === "name" && e.target.value.length < 3) {
      setValidName(false);
    } else if (e.target.name === "name" && e.target.value.length > 2) {
      setValidName(true);
    } else if (e.target.name === "message" && e.target.value.length < 6) {
      setValidMessage(false);
    } else if (e.target.name === "message" && e.target.value.length > 5) {
      setValidMessage(true);
    }
  };

  //clear all fields
  const clearInput = () => {
    setName("");
    setEmail("");
    setMessage("");
    setValidEmail(true);
    setValidName(true);
    setValidMessage(true);
  };

  function disableScroll() {
    window.scrollTo(0, 0);
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  const sendEmail = async () => {
    setLoading(true);
    disableScroll();
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    if (!email || !name || !message) {
      toast.error("Please fill all credentials.");
      setLoading(false);
      enableScroll();
      return;
    } else {
      try {
        let { data } = await axios.post("/api/sendcontactemail", templateParams);
        const response = data;
        console.log(response);
        if (response.success) {
          toast.success("Message sent. You will receive a reply soon.");
        } else {
          toast.error("Failed to send message. Please try again later.");
        }
      } catch (error) {
        toast.error("Failed to send message. Please try again later.");
      }
    }
    setLoading(false);
    enableScroll();
    clearInput();
  };

  return (
    <div>
      <Header />
      <Toaster />
      {loading && <Loader />}
      <section className="text-gray-600 body-font relative">
        <div className="container md:px-20 px-2 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4308.492192863368!2d88.38580195950892!3d22.88210269581864!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716183001805!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              loading="lazy"
              referrerPolicy="-z-10 no-referrer-when-downgrade"
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded-xl shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Chinsurah, Hooghly, West Bengal
                  <br />
                  Pin - 712101
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-yellow-500 leading-relaxed">
                  baksish247@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">(+91)&nbsp;9330277953</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex px-10 py-10 rounded-xl shadow-md flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-xl mb-1 font-sans font-semibold title-font">
              Let's Talk
            </h2>
            <p className="leading-relaxed mb-5 text-sm text-gray-500">
              Feel Free To Contact With Us
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleInputForSendMessage}
                value={name}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {!validName && (
                <span className="absolute -bottom-4 text-rose-500 right-1 text-[.7rem]">
                  *Name must contain more than 2 characters
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleInputForSendMessage}
                value={email}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {!validEmail && (
                <span className="absolute -bottom-4 text-rose-500 right-1 text-[.7rem]">
                  *Enter a valid email address
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleInputForSendMessage}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                value={message}
              />
              {!validMessage && (
                <span className="absolute -bottom-2 pt-[0.1rem] text-rose-500 right-1 text-[.7rem]">
                  *Message must contain more than 5 characters
                </span>
              )}
            </div>
            <button
              onClick={sendEmail}
              className="text-[#FFF9EA] bg-[#661268] border-0 py-2 px-6 focus:outline-none hover:bg-[#661268] rounded-lg text-base"
            >
              <span className="flex justify-center space-x-1 items-center">
                <p>Send Message</p> <FiSend />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
