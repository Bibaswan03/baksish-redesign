"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
  const [showmenu, setshowmenu] = useState(false);

  const tooglemenu = () => {
    setshowmenu(!showmenu);
  };
  return (
    <div className="sticky top-0 flex justify-between items-center lg:px-20 px-10 py-4 bg-[#FBEABD] ">
    <Link href={"/"}>
      <Image
        priority
        src={logo}
        alt="logo"
        className="w-36 h-10 drop-shadow-xl"
      />
    </Link>
    <ul className="justify-center items-center space-x-10 text-[#3B3131] hidden lg:flex">
      <Link
        className="cursor-pointer hover:scale-95 duration-500"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="cursor-pointer hover:scale-95 duration-500"
        href={"/AboutUs"}
      >
        About Us
      </Link>
      <Link
        className="cursor-pointer hover:scale-95 duration-500"
        href={"/ContactUs"}
      >
        Contact Us
      </Link>
    </ul>
    <RxHamburgerMenu
      onClick={tooglemenu}
      className="lg:hidden block text-xl font-semibold z-50 text-[#3B3131]"
    />
    {showmenu && (
      <div
        onMouseOut={() => setshowmenu(false)}
        className="absolute right-10 z-50 w-fit bg-[#FFF9EA] shadow-lg rounded-md p-4 top-10"
      >
        <ul className="flex flex-col">
          <Link
            className="cursor-pointer hover:scale-95 duration-500"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer hover:scale-95 duration-500"
            href={"/AboutUs"}
          >
            About Us
          </Link>
          <Link
            className="cursor-pointer hover:scale-95 duration-500"
            href={"/ContactUs"}
          >
            Contact Us
          </Link>
        </ul>
      </div>
    )}
  </div>
  )
}

export default Header