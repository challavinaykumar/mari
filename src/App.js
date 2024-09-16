import React from "react";
import Home from "./Components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./Components/Margin.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Headers/Header.js";
import Ourorganization from "./Components/Ourorganization.js";
import Registration from "./Components/Registration.js";
import Projects from "./Components/Projects.js";
import Volunteer from "./Components/Volunteer.js";
import Openings from "./Components/Openings.js";
import Audit from "./Components/Audit.js";
import Annual from "./Components/Annual.js";
import Gallery from "./Components/Gallery.js";
import Contact from "./Components/Contact.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Ourorganization" element={<Ourorganization/>}/>
          <Route path="/Registration" element={<Registration/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/volunteer" element={<Volunteer/>}/>
          <Route path="/Openings" element={<Openings/>}/>
          <Route path="/Audit" element={<Audit/>}/>
          <Route path="/Annual" element={<Annual/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
