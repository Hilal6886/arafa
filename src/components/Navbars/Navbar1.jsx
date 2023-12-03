// components/Navbar1.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Your Logo
        </Link>

        <div className="flex space-x-4">
          <Link to="/arfa/hero" className="text-white">
            Home
          </Link>
          <Link to="/arfa/courses" className="text-white">
            Courses
          </Link>
          <Link to="/arfa/admission" className="text-white">
            Admission
          </Link>
          <Link to="/arfa/fee" className="text-white">
            Fee
          </Link>
          <Link to="/arfa/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
