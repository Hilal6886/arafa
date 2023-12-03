// ArfaSchool.js
import React from "react";
import { Routes, Route } from "react-router-dom";


import Hero from '../pages/Hero.jsx';
import Courses from '../pages/Courses.jsx';
import Admission from '../pages/Admission.jsx';
import Fee from '../pages/Fee.jsx';
import Contact from '../pages/Contact.jsx';
import Category from "pages/Category.jsx";

const ArfaSchool = () => {
  return (
    <Routes>
     
        <Route path="hero" element={<Hero />} />
        <Route path="courses" element={<Courses />} />
        <Route path="admission" element={<Admission />} />
        <Route path="fee" element={<Fee />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact" element={<Category />} />
      
    </Routes>
  );
};

export default ArfaSchool;
