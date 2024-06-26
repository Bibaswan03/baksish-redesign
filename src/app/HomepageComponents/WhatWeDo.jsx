"use client";
import Image from "next/image";
import React, { useEffect } from "react";

function WhatWeDo() {
  useEffect(() => {
    const elements = document.querySelectorAll(".hr-animate");
    const divElements = document.querySelectorAll(".innergriddiv");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("open-middle");
          observer.unobserve(entry.target); // Stop observing once the animation has been applied
        }
      });
    });

    const divObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("slide-up");
          }, index * 100); // Adjust the delay as needed for the staggered effect
          divObserver.unobserve(entry.target); // Stop observing once the animation has been applied
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    divElements.forEach((divElement) => {
      divObserver.observe(divElement);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
      divElements.forEach((divElement) => {
        divObserver.unobserve(divElement);
      });
    };
  }, []);

  return (
    <div className="m-4 md:m-10 lg:px-32 grid grid-cols-1   gap-5 lg:pb-40 poppins-medium">
      <div className="flex lg:flex-row flex-col justify-evenly items-center  innergriddiv">
      <div className="p-6 lg:w-1/2 md:p-10 rounded ">
        <div className="w-fit mb-8">
          <h3 className="text-xl md:text-3xl poppins-semibold">
            Let’s start with Starters:
          </h3>
          <hr className="border-[#661268] hr-animate border-2 rounded mb-2" />
        </div>
        <p className="poppins-regular lg:pr-10">
          Baksish allows restaurants to display their menus digitally using QR
          codes. Customers can directly access the menu of the specific
          restaurant by scanning the QR code at their table. This eliminates the
          hassle for physical menus, providing a more hygienic and contactless
          dining experience. The digital menu can be easily updated by the
          restaurant, ensuring customers always have access to the latest
          offerings.
        </p>
      </div>
      <div className=" lg:w-1/2 ">
        <Image
        height={1000}
        width={1000}
          src="https://i.ibb.co/KVKF5V7/281465da42e6b432b0a2d8d253463987.png"
          className="w-full h-full object-cover"
          alt="starter"
        />
      </div>
      </div>


      <div className="flex flex-col justify-evenly lg:flex-row-reverse items-center  innergriddiv">
      <div className="p-6 lg:pl-10 lg:w-1/2 md:p-10 rounded ">
        <div className="w-fit mb-8">
          <h3 className="text-xl md:text-3xl poppins-semibold">
          The Main course:
          </h3>
          <hr className="border-[#661268] hr-animate border-2 rounded mb-2" />
        </div>
        <p className="poppins-regular ">
        Baksish includes a built-in tipping system that allows customers to easily tip their servers directly through the website. This brings back the culture of tipping process and ensures that gratuities are accurately recorded and distributed to the appropriate staff members. The integrated tipping system provides a convenient and transparent way for customers to show their appreciation for the service they receive
        </p>
      </div>
      <div className=" lg:w-1/2 ">
        <Image
        height={1000}
        width={1000}
          src="https://i.ibb.co/rkXX5XX/veg-thali-removebg-preview.png"
          className="w-full h-full object-cover mix-blend-multiply"
          alt=""
        />
      </div>
      </div>


      <div className="flex lg:flex-row flex-col justify-evenly items-center  innergriddiv">
      <div className="p-6 lg:w-1/2 md:p-10 rounded ">
        <div className="w-fit mb-8">
          <h3 className="text-xl md:text-3xl poppins-semibold">
          But we do need a side dish:
          </h3>
          <hr className="border-[#661268] hr-animate border-2 rounded mb-2" />
        </div>
        <p className="poppins-regular lg:pr-10">
        You are a foodie, and you have loved various dishes of various cuisines at various restaurants. Sometimes you even wanted to give Baksish to cook also. Well now you can. Loved the taste, Reward the chef directly through our application.
        </p>
      </div>
      <div className=" lg:w-1/2 ">
        <Image
        height={1000}
        width={1000}
          src="https://i.ibb.co/m6rNSKZ/potato-chips-removebg-preview.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      </div>


      <div className="flex  flex-col justify-evenly lg:flex-row-reverse items-center  innergriddiv">
      <div className="p-6 lg:w-1/2 md:p-10 rounded ">
        <div className="w-fit mb-8">
          <h3 className="text-xl md:text-3xl poppins-semibold">
          And Finally some, Dessert! :
          </h3>
          <hr className="border-[#661268] hr-animate border-2 rounded mb-2" />
        </div>
        <p className="poppins-regular lg:pr-10">
        When a customer completes their payment through your application, they are automatically redirected to the restaurant's Google ratings page. This integration allows customers to easily leave a review and rating for the restaurant they just visited. By directing customers Baksish encourages feedback and helps restaurants improve their online reputation and visibility on the most popular review platform. 
        </p>
      </div>
      <div className=" lg:w-1/2 ">
        <Image
        height={1000}
        width={1000}
          src="https://i.ibb.co/kmRrtb6/steptodown-com510142-removebg-preview-removebg-preview.png"
          className="w-full h-[80%] object-cover"
          alt=""
        />
      </div>
      </div>


      
     
    </div>
  );
}

export default WhatWeDo;
