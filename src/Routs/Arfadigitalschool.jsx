// ArfaSchool.js
import React from "react";
import { Routes, Route } from "react-router-dom";


import Hero2 from '../pages2/Hero2.jsx';
import Courses2 from '../pages2/Courses2.jsx';
import Admission2 from '../pages2/Admission1.jsx';
import Fee2 from '../pages2/Fee2.jsx';
import Contact2 from '../pages2/Contact2.jsx';

const Arfadigitalschool = () => {
  return (
    <Routes>
     
        <Route path="hero1" element={<Hero2 />} />
        <Route path="courses1" element={<Courses2 />} />
        <Route path="admission1" element={<Admission2 />} />
        <Route path="fee1" element={<Fee2 />} />
        <Route path="contact1" element={<Contact2 />} />
      
    </Routes>
  );
};

export default Arfadigitalschool;
