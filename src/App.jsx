// App.jsx
import React, { useEffect,useRef } from "react";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Loading from "./components/Loading.jsx";
import "./assets/css/style-new.css";
import "./assets/css/locomotive-scroll.css";
import { initPageTransitions } from "./assets/js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

useEffect(() => {

 initPageTransitions();
}, []);

  
//  dito ka muna
  return (
    <>
    <div className="no-scroll-overlay"></div>
    <Loading/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/" element={<Home/>}  />
      </Routes>
    </Router>
    </>
  );
}

export default App;
