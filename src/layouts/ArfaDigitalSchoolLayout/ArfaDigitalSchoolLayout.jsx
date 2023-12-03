// components/ArfaDigitalSchoolLayout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ArfaDigitalSchoolLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-gray-200">{children}</div>
      <Footer />
    </div>
  );
};

export default ArfaDigitalSchoolLayout;
