import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../Images/logo.png";

export default function Footer() {
  return (
    <footer >
      <div className="container mx-auto flex flex-col items-center gap-8">

        {/* Logo + Location */}
        <div className="flex flex-col items-center bg-gray-700/10 rounded-3xl w-50 gap-2">
          <img src={logo} alt="logo" className="w-40 opacity-90 hover:opacity-100 transition" />
        </div>

          <div className="flex items-center gap-2 text-md hover:text-yellow-400 transition">
            <FaLocationDot />
            <span>India</span>
          </div>

        {/* Middle Links */}
        <ul className="flex gap-10  text-md font-light">
          <li className="hover:text-yellow-400 transition hover:underline cursor-pointer">
            Terms of Use
          </li>
          <li className="hover:text-yellow-400 transition hover:underline cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-yellow-400 transition hover:underline cursor-pointer">
            Cookie Policy
          </li>
        </ul>

        {/* Divider */}
        <hr className="w-3/4 border-white/20" />

        {/* Copyright */}
        <p className="text-md opacity-70 text-center">
          © {new Date().getFullYear()} | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
