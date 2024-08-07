import React from 'react';
import Footerlogo from "../assets/image.png";
import { FaFacebook, FaInstagram, FaUser, FaYoutube, FaBeer } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold">Sign up for our newsletter!</h2>
            <p className="mt-4 text-gray-400">Be the first to know about new flavors and more</p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              className="w-full sm:w-72 h-10 px-4 rounded-full text-black"
              placeholder="Your Email..."
            />
            <button
              type="submit"
              className="w-full sm:w-28 h-10 bg-red-600 hover:bg-gray-700 text-white rounded-full"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="pt-16 sm:pt-32 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-4 sm:mb-0">
            <img id='logo' className='w-24 mb-2 sm:mb-0' src={Footerlogo} alt="Logo" />
            <p className="text-base">&copy; 2024 – Jumys. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl cursor-pointer"><FaFacebook /></a>
            <a href="#" className="text-2xl cursor-pointer"><FaUser /></a>
            <a href="#" className="text-2xl cursor-pointer"><FaYoutube /></a>
            <a href="#" className="text-2xl cursor-pointer"><FaInstagram /></a>
            <a href="#" className="text-2xl cursor-pointer"><FaBeer /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
