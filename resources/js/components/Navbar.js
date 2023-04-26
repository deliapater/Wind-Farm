import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black py-3 m-4 rounded">
      <div className="container mx-auto flex items-center justify-between">
        <div>
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
        <div className="flex items-center">
          <Link
            to="/login"
            className="text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white px-4 py-2 rounded hover:bg-gray-700 ml-4"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
