import React from 'react';
import LjaBackground from "./LjaBackground";
import baybayin from "../assets/img/mabuhay_bay.svg";
import Navbar from "./Navbar";
import Bigname from "./Bigname";

function Header() {
  return (
    <header className="section home-header" data-scroll-section>
      <LjaBackground />
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
