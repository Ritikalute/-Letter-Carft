// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import Aee from "./Aee";
// import Navbers from "./Components/Navbers";
import Home from "./HomePage/Home";
import Navbers from "./Components/Navbers";
import Footer from "./Components/Footer";
import Aboutpages from "./Aboutpage/Aboutpages";
import Careers from "./CareeresPage/Careers";
import Contact from "./Contact/Contact";
import Language from "./Language/Language";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbers />
      <Routes>
      <Route path="/home" element={<Home/>} /></Routes>
      <Routes><Route path="/about" element={<Aboutpages/>} /></Routes>
      <Routes><Route path="/contact" element={<Contact/>} /></Routes>
      <Routes><Route path="/languages" element={<Language/>} /></Routes>
      <Routes><Route path="/careers" element={<Careers/>} />


      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
