"use client"
import Image from "next/image";
import React, { useState } from "react";
import bgimg from "../assets/topbg.png";
import logo from "../assets/logo.png";
import Link from "next/link";
import { useRef,useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import TypedText from "./TypedText";
function TopBanner() {


  const el = useRef(null);


  const [showmenu, setshowmenu] = useState(false);
  const tooglemenu = () => {
    setshowmenu(!showmenu);
  };
  return (
    <>
      <div className="w-screen lg:h-[500px] h-[400px] relative bg-black/20 px-10 pt-4 ">
        <Image
          src={bgimg}
          alt="bgimg"
          priority
          className="w-full h-full object-cover lg:object-center object-left-top absolute top-0 left-0 -z-20"
        />
        <div className="flex justify-between items-center relative">
          <Image src={logo} alt="logo" className="w-28 h-10 drop-shadow-xl" />
          <ul className=" justify-center items-center space-x-10 mr-40 hidden lg:flex">
            <Link
              className="cursor-pointer hover:scale-95 duration-500"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="cursor-pointer hover:scale-95 duration-500"
              href={"/"}
            >
              About Us
            </Link>
            <Link
              className="cursor-pointer hover:scale-95 duration-500"
              href={"/"}
            >
              Contact Us
            </Link>
          </ul>
          <RxHamburgerMenu  onClick={tooglemenu} className="lg:hidden block text-xl  font-semibold z-50 text-[#FFF9EA]" />
          {/* hamburgerments */}
          {showmenu &&<div onMouseOut={()=>setshowmenu(false)} className="absolute  right-2 w-fit bg-[#FFF9EA] rounded-md p-4 top-8">
            <ul className="flex flex-col  ">
              <Link
                className="cursor-pointer hover:scale-95 duration-500"
                href={"/"}
              >
                Home
              </Link>
              <Link
                className="cursor-pointer hover:scale-95 duration-500"
                href={"/"}
              >
                About Us
              </Link>
              <Link
                className="cursor-pointer hover:scale-95 duration-500"
                href={"/"}
              >
                Contact Us
              </Link>
            </ul>
          </div>}

          {/*HamburgerMenu */}
        </div>
        <div className="items-center justify-center flex flex-col lg:my-56 my-44" >
         <div className="h-14"> <TypedText/></div>
          <button className="bg-yellow-400 p-4 py-2 rounded-md text-white text-xl hover:scale-105 duration-500">Request a demo</button>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
