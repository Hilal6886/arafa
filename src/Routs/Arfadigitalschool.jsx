// ArfaSchool.js
import React from "react";
import { Routes, Route } from "react-router-dom";


import Hero2 from '../pages2/Hero2.jsx';
import Courses2 from '../pages2/Courses2.jsx';
import Admission2 from '../pages2/2Admission.jsx';
import Fee2 from '../2pages/2Fee.jsx';
import Contact2 from '../2pages/2Contact.jsx';

const ArfaSchool = () => {
  return (
    <Routes>
     
        <Route path="hero" element={<Hero2 />} />
        <Route path="courses" element={<Courses2 />} />
        <Route path="admission" element={<Admission2 />} />
        <Route path="fee" element={<Fee2 />} />
        <Route path="contact" element={<Contact2 />} />
      
    </Routes>
  );
};

export default ArfaSchool;
