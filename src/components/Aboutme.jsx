import React, { useEffect, useState, useRef } from "react";
import EyeImage from "../assets/img/eyeyeye.png";
import SideImage from "../assets/img/eyeyeye1.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Aboutme() {
  const rightImageRef = useRef(null);
  const leftImageRef = useRef(null);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        !triggerRef.current ||
        !rightImageRef.current ||
        !leftImageRef.current ||
        !containerRef.current
      )
        return;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top +=300px",
          end: "bottom center",
          // markers: true,
          scrub: true,
        },
      });

      tl.fromTo(
        rightImageRef.current,
        { x: 150, opacity: 0, rotate: 180 },
        { x: 0, duration: 3, opacity: 1, rotate: 0 }
      ).fromTo(
        leftImageRef.current,
        { x: -150, opacity: 0, rotate: -180 },
        { x: 0, duration: 3, opacity: 1, rotate: 0 },
        "<"
      );
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="home-intro  bg-[--color-dark-dark]"
      data-scroll-section
      ref={triggerRef}
    >
      <div
        className="container-intro"
        ref={containerRef}
        data-slides-amount="5"
      >
        <div className="animation-intro">
          <div className="title-wrapper">
            <div className="single-title hidden ">
              <h2 className="xl hidden">
                Larry
                <br /> John
              </h2>
            </div>
            <div className="title-list ">
              <div className="single-title">
                <h2 className="xl">
                  There is No
                  <br />
                  Rules.
                </h2>
              </div>
              <div className="single-title">
                <h2 className="xl">
                  Create Without
                  <br /> Limits.
                </h2>
              </div>
              <div className="single-title">
                <h2 className="xl">
                  Develop Design
                  <br />
                  Inspire.
                </h2>
              </div>
            </div>
          </div>
          <div className="text top-text">
            <h1 className="flex justify-end text-in-right">
              Web Developer/Designer
            </h1>
          </div>
          <div className="EyeImage w-full justify-center items-center p-[1vw] relative flex z-20">
            <img
              src={EyeImage}
              alt="larry-eye.jpg"
              className="object-cover max-h-72 w-5/6 "
            />
            <div
              className="absolute z-50 right-0 -bottom-10 "
              ref={rightImageRef}
            >
              <img
                src={SideImage}
                alt=""
                className="object-cover w-[20vw] max-w-60 aspect-square rounded-lg -rotate-3"
              />
            </div>
            <div className="absolute z-50 left-0 -top-10" ref={leftImageRef}>
              <img
                src={SideImage}
                alt=""
                className="object-cover w-[20vw] max-w-60 aspect-square rounded-lg rotate-3"
              />
            </div>
          </div>
          <div className="text bottom-text flex flex-col justify-start">
            <h1 className="text-in-left">Graphic Designer/Video Editor</h1>
          </div>

          {/* text middle* */}
          {/* <div className="text-mid absolute text-9xl text-center text-[--color-text-light]">
          <div className="relative">
            <h1 className="z-30 text-stroke absolute inset-0">DEVELOP</h1>
            <h1 className="z-10">DEVELOP</h1>
          </div>
          <h1 className="z-30 relative text-stroke">DESIGN</h1>
          <div className="relative">
            <h1 className="z-30 text-stroke absolute inset-0"> f</h1>
            <h1 className="z-10"> f</h1>
          </div>
        </div> */}

          {/* image animated* */}
        </div>
        <div className="text-intro flex flex-col text-center text-[--color-text-light] justify-center items-center">
          <div className="lg:w-1/2 w-full px-4 text-sm md:text-lg lg:text-lg">
            Passionate and adaptable freelancer delivering high-quality work
            that exceeds expectations. Continuously learning and staying ahead
            of industry trends to provide cutting-edge solutions. Committed to
            excellence, I am a reliable asset for any project.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
