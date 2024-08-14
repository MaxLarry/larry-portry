// App.jsx
import React, { useEffect,useRef } from "react";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Loading from "./components/Loading.jsx";
import "./assets/css/style-new.css";
import { initPageTransitions } from "./assets/js/index.js";

function App() {
useEffect(() => {

 initPageTransitions();
}, []);

  
 //dito ka muna
  return (
    <>
      <div className="no-scroll-overlay"></div>
      <Loading/>
      <main
        className="main"
        id="home"
        data-barba="container"
        data-barba-namespace="home"
      >
        <div className="main-wrap" data-scroll-container>
          <Header />
          <Aboutme />
        </div>
      </main>
    </>
  );
}

export default App;
