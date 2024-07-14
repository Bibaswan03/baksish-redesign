// components/TopBanner.js
"use client";
import Image from "next/image";
import React from "react";
import bgimg from "../assets/topbg.png";
import TypedText from "./TypedText";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import bgimgnew from "../assets/bgimgnew.jpg";

function TopBanner() {
  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen lg:h-screen h-[500px] relative bg-black/50 px-10 lg:px-20 pt-4 ">
      <Image
        src={bgimgnew}
        alt="bgimg"
        priority
        className="w-full h-full object-cover lg:object-top object-left-top absolute top-0 left-0 -z-20"
      />

      <div className="items-center justify-center flex flex-col lg:mt-44 mt-14 ">
        <div>
          <p className="lg:text-5xl text-4xl font-semibold  text-center text-white ">
            Revolutionizing restaurant operations <br/> <br/> <span className="text-xl "> With BAKSISH</span> <br />
          </p>
        </div>
        <div className="max-h-20">
          <TypedText />
        </div>
        <Link
          // href="/Collaboratewithus"
          href="/Pincode"
          className="bg-[#f6ddc2] font-bold   p-4 py-2 rounded-md text-[#262217] text-xl hover:scale-105  animate-pulse duration-700"
          // href="/Signup"
          // className="bg-yellow-400/90 font-semibold p-4 py-2 rounded-md text-[#FFF9EA] text-xl hover:scale-105 duration-500"
        >
          Book your FREE trial
        </Link>
      </div>
      <FaAngleDown
        className="mx-auto lg:mt-20 mt-10 bottom-6 left-[50%] translate-x-1/2 h-10 w-20 text-[#FFF9EA] animate-bounce duration-300 cursor-pointer"
        onClick={scrollToContent}
      />
    </div >
  );
}

export default TopBanner;
