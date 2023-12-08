import React from "react";
import { Routes, Route,  } from "react-router-dom";
import './app.css';

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Home from "./components/Home/Home.js"

import ArfaSchoolLayout from "layouts/arfaschool/ArfaSchoolLayout.jsx";
import ArfaDigitalSchoolLayout from "layouts/ArfaDigitalSchoolLayout/ArfaDigitalSchoolLayout";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Home />} />
      <Route path="/arfa/*" element={<ArfaSchoolLayout />} />
      <Route path="/arfaDigital/*" element={<ArfaDigitalSchoolLayout />} />
 
    </Routes>
  );
};

export default App;
