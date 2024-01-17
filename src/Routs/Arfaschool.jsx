import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { auth } from ".././firebase";
import { onAuthStateChanged } from 'firebase/auth'
import { useLocation } from 'react-router-dom';
import useAdmin from "../../src/utils/hooks"

const Hero = lazy(() => import('../pages/Hero.jsx'));
const Courses = lazy(() => import('../pages/Courses.jsx'));
const Admission = lazy(() => import('../pages/Admission.jsx'));
const Fee = lazy(() => import('../pages/Fee.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const Category = lazy(() => import("pages/Category.jsx"));
const ImageGallery = lazy(() => import("pages/ImageGallery"));
const FaqSection = lazy(() => import("pages/Faq"));
const Addblog = lazy(() => import("pages/Addblog"));
const Blog = lazy(() => import("pages/Blog"));
const Detail = lazy(() => import("pages/Detail"));
const CardSection = lazy(() => import("pages/CardSection"));
const AdmissionList = lazy(() => import("pages/AdmissionList"));
const AboutUsPage = lazy(() => import("pages/Aboutus"));
const ImageUploadGallery = lazy(() => import("pages/ImageUploadGallery"));
const Allimages = lazy(() => import("pages/Allimages"));

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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="hero" element={<Hero />} />
        <Route path="cour" element={<CardSection />} />
        <Route path="courses" element={<Courses />} />
        <Route path="admission" element={<Admission />} />
        <Route path="fee" element={<Fee />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact" element={<Category />} />
        <Route path="conta" element={<ImageGallery />} />
        <Route path="conta" element={<FaqSection />} />
        <Route path="Addblog" element={<Addblog user={user} setActive={setActive} />} />
        <Route path="/update/:id" element={<Addblog user={user} setActive={setActive} />} />
        <Route path="Blog" element={<Blog setActive={setActive} user={user} active={active} />} />
        <Route path="/detail/:id" element={<Detail user={user} />} />
        <Route path="/admissiondata" element={<AdmissionList />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/uplodeimges" element={<ImageUploadGallery />} />
        <Route path="allimges" element={<Allimages />} />
      </Routes>
    </Suspense>
  );
};

export default ArfaSchool;
