// Header.jsx
import React from "react";
import baybayin from "../assets/img/mabuhay_bay.svg";
import Navbar from "./Navbar";
import Bigname from "./Bigname";
import background from '../assets/img/bg-lja.mp4'

function Header() {
  return (
    <header className="section home-header" data-scroll-section>
      <div
        className="overlay lja-background no-select"
        data-scroll
        data-scroll-speed="-3"
        data-scroll-position="top"
      >
        <video autoPlay loop muted plays-inline="true" id="background-video">
          <source src={background} type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <div className="overlay get-height once-in">
        <div className="baybayin">
          <img className="baybayin-img" src={baybayin} alt="Baybayin" />
        </div>
      </div>
      <Bigname />
    </header>
  );
}

export default Header;
