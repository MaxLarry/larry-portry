import { useGSAP } from "@gsap/react";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Bigname() {


  return (
    <div className="big-name">
      <div
        className="name-h1"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="4"
        data-scroll-position="top"
      >
        <div className="name-wrap">
          <h1 className="no-select once-in once-in-secondary">
            Larry John Andonga<span className="spacer">•</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Bigname;
