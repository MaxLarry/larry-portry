// Home.jsx
import React, { useEffect,useRef } from "react";
import Header from "./Header";
import Aboutme from "./Aboutme";
import Loading from "./Loading.jsx";
import "../assets/css/style-new.css";
import "../assets/css/locomotive-scroll.css";


function Home() {

//  dito ka muna
  return (
    <>
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

export default Home;
