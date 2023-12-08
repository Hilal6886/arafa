// ArfaSchool.js
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { auth } from ".././firebase";

import { onAuthStateChanged } from 'firebase/auth'
import { useLocation } from 'react-router-dom';
import useAdmin from "../../src/utils/hooks"

import Hero from '../pages/Hero.jsx';
import Courses from '../pages/Courses.jsx';
import Admission from '../pages/Admission.jsx';
import Fee from '../pages/Fee.jsx';
import Contact from '../pages/Contact.jsx';
import Category from "pages/Category.jsx";
import Signup from "pages/Signup.js";

const ArfaSchool = () => {
  const [active, setActive] = useState("CBlog");
  const [user, setUser] = useState(null);
  const location = useLocation();

  
  const Navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)
  useAdmin()

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || {});
      setCurrentUser(user || {})
      console.log("USERRRRRRRRRRRRRRRRRRRRRRRRR", user)
    })
  }, [])
  return (
    <Routes>
     
        <Route path="hero" element={<Hero />} />
        <Route path="courses" element={<Courses />} />
        <Route path="admission" element={<Admission />} />
        <Route path="fee" element={<Fee />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact" element={<Category />} />
        
        <Route path="signup" element={
            !currentUser?.emailVerified
              ? <Signup />
              : <Navigate to='/' replace />
          } />
      
    </Routes>
  );
};

export default ArfaSchool;
