import React, { useEffect, useRef } from "react";
import baybayin from "../assets/img/mabuhay_bay.svg";
import Navbar from "./Navbar";
import Bigname from "./Bigname";
import background from "../assets/img/bg-lja.mp4";

function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get scroll position
      const speed = 0.3; // Adjust speed as needed (negative for upward movement)
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="section home-header">
      <div className="overlay lja-background no-select" ref={videoRef}>
        <video autoPlay loop muted playsInline id="background-video">
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
