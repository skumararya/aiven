import React from "react";
import { Route, Routes } from "react-router-dom";

// --- Main Menu Pages ---
import Home from "./Container/MainMenuPages/Home.jsx";
import AboutUs from "./Container/MainMenuPages/AboutUs.jsx";
import CoursePrograme from "./Container/MainMenuPages/CoursePrograme.jsx";
import Contact from "./Container/MainMenuPages/Contact.jsx";
import Login from "./Container/Login.jsx";


const AppRouting = () => {
  return (
    <Routes>
      {/* --- Main & Department Profile Routes --- */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} /> 
      <Route path="/courses" element={<CoursePrograme />} /> 
      <Route path="/contact" element={<Contact />} /> 
       <Route path="/login" element={<Login />} /> 
    </Routes>
  );
};

export default AppRouting;