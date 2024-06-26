// components/Layout.js
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`flex justify-between items-center py-4 px-10 lg:px-20 z-50 transition-all duration-300 ${
          isSticky ? "sticky top-0 bg-[#FFF9EA] text-black shadow-md" : "absolute w-full text-[#FFF9EA]"
        }`}
      >
        <Image src={logo} alt="logo" className="w-36 h-10 drop-shadow-xl" />
        <ul className="justify-center items-center space-x-10 hidden lg:flex">
          <Link className="cursor-pointer hover:scale-95 duration-500" href={"/"}>
            Home
          </Link>
          <Link className="cursor-pointer hover:scale-95 duration-500" href={"/AboutUs"}>
            About Us
          </Link>
          <Link className="cursor-pointer hover:scale-95 duration-500" href={"/ContactUs"}>
            Contact Us
          </Link>
          <Link className={`cursor-pointer hover:scale-95 duration-500 p-3 rounded-full ${isSticky &&"bg-[#dfac1d]"}`} href={"/Collaboratewithus"}>
            Book a Demo
          </Link>
        </ul>
        <RxHamburgerMenu
          onClick={toggleMenu}
          className={`lg:hidden block text-xl font-semibold z-50 ${isSticky ? "text-black" : "text-[#FFF9EA]"}`}
        />
        {showMenu && (
          <div onMouseOut={() => setShowMenu(false)} className="absolute right-2 w-fit bg-[#FFF9EA] rounded-md p-4 top-8">
            <ul className="flex flex-col">
              <Link className="cursor-pointer hover:scale-95 duration-500" href={"/"}>
                Home
              </Link>
              <Link className="cursor-pointer hover:scale-95 duration-500" href={"/AboutUs"}>
                About Us
              </Link>
              <Link className="cursor-pointer hover:scale-95 duration-500" href={"/ContactUs"}>
                Contact Us
              </Link>
            </ul>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
