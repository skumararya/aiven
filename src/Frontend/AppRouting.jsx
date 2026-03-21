import React from "react";
import { Route, Routes } from "react-router-dom";

// --- Main Menu Pages ---
import Home from "./Container/MainMenuPages/Home.jsx";
import AboutUs from "./Container/MainMenuPages/AboutUs.jsx";


const AppRouting = () => {
  return (
    <Routes>
      {/* --- Main & Department Profile Routes --- */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      
    </Routes>
  );
};

export default AppRouting;