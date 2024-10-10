import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col max-w-[1126px] mt-8 mx-auto">

<div className="bg-slate-300 h-6 w-[1126px]"></div>


      {/* icons or Contact  */}
      <div className="flex justify-between items-center ">
        {/* icons */}
        <div className="flex flex-col items-start">
          <h2 className="font-semibold mb-3">Connect</h2>
          <div className="flex gap-2">
            <FaFacebook className="rounded-full" />
            <FaSquareInstagram className="rounded-full" />
            <FaWhatsappSquare className="rounded-full" />
            <IoLogoYoutube className="rounded-xl" />
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-end">
          <h2 className="font-semibold mt-4 mb-3"> Contact</h2>
          <span >+91 7828277226 </span>
          <span>apkumar1299@gmail.com</span>
        </div>
      </div>

      {/* ©Copyrights div */}
      <div>
        <span className="font-semibold text-sm">©Copyrights 2023-2024. Tilak Numkeen </span>
      </div>

        {/* underline */}
      <div className="bg-yellow-400 h-1 mt-1 mb-2 rounded-lg"></div>

      
    </div>
  );
};

export default Footer;
