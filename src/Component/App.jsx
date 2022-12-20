import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Project from "./Project";
import Blogs from "./Blogs";
import Contacts from "./Contacts";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Skills" element={<Skills/>} />
          <Route path="Services" element={<Services/>} />
          <Route path="Project" element={<Project/>} />
          <Route path="Blogs" element={<Blogs/>} />
          <Route path="Contacts" element={<Contacts/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
