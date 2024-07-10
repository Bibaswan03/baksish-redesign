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
          Baksish allows restaurants to display their menus digitally.Our smart kitchen table technology allows customers to easily order directly from their phones, eliminating the hassle of physical menus and streamlining the ordering process. With our user-friendly interface, customers can browse the menu, customize their orders, and submit them to the manager with just a few taps.
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
        Baksish introduces the ability to view the menu on their phones, customers can make informed decisions and explore the full range of offerings available.We understand that sometimes customers may need to make changes to their orders. With our smart kitchen table tech, customers can easily add to their existing orders until the bill is finalized.
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
        Our smart kitchen table tech seamlessly integrates with the kitchen side of the software, allowing waiters to act as mediators between customers and the kitchen staff. This ensures that orders are accurately communicated and fulfilled, while also providing real-time updates on the status of each order.
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
        With Baksish managers can track every order in real-time, ensuring that no detail is missed. This feature allows for quick and accurate updates on the status of each order, helping to maintain a high level of service and customer satisfaction.Managers can also edit the menu in real-time, adding or removing dishes as needed. This feature ensures that the menu is always up-to-date and accurate.Our system generates detailed reports for managers, providing insights into weekly and monthly orders. This data helps managers analyze trends, identify areas for improvement, and make informed decisions to enhance the business.
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
