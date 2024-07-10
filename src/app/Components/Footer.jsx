import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#441029] text-[#FFF9EA] py-12 lg:px-20 poppins-medium">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <div className="bg-[#FFF9EA] w-fit p-1 mb-4 rounde-lg">
            <Image
              src={logo}
              alt="logo"
              className="w-28 h-10 drop-shadow-xl "
            />
          </div>
          <p>Table-to-kitchen tech</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigations</h3>
          <ul>
            <li>
              {" "}
              <Link href={"/AboutUs"} className="mb-2 hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/FeedBack"} className="mb-2 hover:underline">
                Feedback
              </Link>
            </li>
            <li>
              <Link href={"/"} className="mb-2 hover:underline">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          <ul>
            <li className="mb-2 hover:underline"><Link href={"/Collaboratewithus"} className="mb-2 hover:underline">
                Request a demo
              </Link></li>
            <li className="mb-2 hover:underline"><Link href={"/ContactUs"} className="mb-2 hover:underline">
                Contact Us
              </Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 ">Customer Policy</h3>
          <ul>
            <li>
              {" "}
              <Link href={"/PrivacyPolicy"} className="mb-2 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"/TermsAndConditions"} className="mb-2 hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              {" "}
              <Link href={"/RefundPolicy"} className="mb-2 hover:underline">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <ul className="flex space-x-4">
            <Link
              href={"/"}
              className="cursor-pointer hover:scale-90 duration-500"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer hover:scale-90 duration-500"
            >
              <RiTwitterXLine size={24} />
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer hover:scale-90 duration-500"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href={"/"}
              className="cursor-pointer hover:scale-90 duration-500"
            >
              <FaFacebookF size={24} />
            </Link>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4">
        <div className="border-t border-[#FBEABD] pt-8 lg:flex hidden flex-col md:flex-row md:justify-between md:items-center">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="mb-4">
              Get updated job listings weekly directly in your inbox. No spam.
            </p>
          </div>
          <div className="mt-8 md:mt-0 lg:w-1/3 space-y-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 rounded-l-md text-black"
              />
              <button className="bg-purple-800 p-3 rounded-r-md text-white">
                Subscribe
              </button>
            </div>
            <p className="text-sm">
              By submitting your email address, you agree to receive
              RemoteNomad's monthly newsletter. For more information, please
              read our{" "}
              <a href="#" className="underline">
                privacy policy
              </a>
              . You can always withdraw your consent.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-[#FBEABD] pt-8 flex justify-center items-center text-[#FBEABD] text-sm">
          <p className="hidden lg:block">
            Copyright © 2024 Baksish<sup>TM</sup>. All rights reserved.
          </p>
        </div>
        <p className="mt-10 lg:hidden">
          Copyright © 2024 Baksish<sup>TM</sup>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
