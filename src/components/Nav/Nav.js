import React from "react";
import "./Nav.css";
import { FaUser, FaSearch } from "react-icons/fa";

function Nav() {
  return (
    <nav className="bg-white shadow-md h-20 flex items-center justify-between px-[27.68px]">
      {/* Logo */}
      <div
        className="text-2xl font-bold ml-[27.68px] mr-auto"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <span className="mr-auto">Moby</span>
      </div>

      {/* Navigation Items Container */}
      <div className="flex items-center space-x-8 mr-[27.68px]">
        <span className="text-gray-700">Moby Shot</span>
        <span className="text-gray-700">Moby Wave</span>
        <span className="text-gray-700">Moby Synergy</span>
        <span className="text-gray-700">Moby Max</span>
        <span className="text-gray-700">Stories</span>
        <span className="text-gray-700">About</span>

        {/* Book Now Button */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
          Book Now
        </button>

        {/* Icons */}
        <FaUser className="text-gray-700" />
        <FaSearch className="text-gray-700" />
      </div>
    </nav>
  );
}

export default Nav;