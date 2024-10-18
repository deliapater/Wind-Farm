import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex bg-black py-3 m-4 rounded ml-8">
      <div className="container mx-auto flex items-center justify-between">
        <div>   
        </div>
        <div className="flex items-center">
        <Link to="/" className="text-white px-4 py-2 rounded hover:bg-gray-700">
            Turbine Inspections
          </Link>
          <Link
            to="/create"
            className="text-white px-4 py-2 rounded hover:bg-gray-700 ml-4"
          >
            Add Inspection
          </Link>
        </div>
      </div>
    </nav>
  );
};
Navbar.displayName = "Navbar";
export default Navbar;
