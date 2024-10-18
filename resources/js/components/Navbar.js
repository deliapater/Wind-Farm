import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // Import an icon for the button

const Navbar = () => {
  return (
    <nav className="flex bg-black py-3 m-4 rounded ml-8">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="hidden lg:flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 mr-3"
            />
            <span className="text-white text-lg font-bold">Wind Farm</span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className="text-white px-4 mx-4 py-2 rounded-full hover:bg-gray-700">
            Turbine Inspections
          </Link>
          <Link
            to="/create"
            className="flex items-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition duration-200"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Inspection
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.displayName = "Navbar";
export default Navbar;
