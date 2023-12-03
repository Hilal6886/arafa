import React from "react";
import { Routes, Route,  } from "react-router-dom";
import './app.css';

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Home from "./components/Home/Home.js"
import ArfaSchool from "Routs/Arfaschool.jsx";
import ArfaSchoolLayout from "layouts/arfaschool/ArfaSchoolLayout.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Home />} />
      <Route path="/arfa/*" element={<ArfaSchoolLayout />} />
 
    </Routes>
  );
};

export default App;
