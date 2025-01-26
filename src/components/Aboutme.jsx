import React, { useEffect, useState, useRef } from "react";
import EyeImage from "../assets/img/eyeyeye.png";
import SideImage from "../assets/img/eyeyeye1.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TreakWords from "./Trickword";

gsap.registerPlugin(ScrollTrigger);

function Aboutme() {
  const rightImageRef = useRef(null);
  const leftImageRef = useRef(null);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const rightTextRef = useRef(null);
  const leftTextRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        !triggerRef.current ||
        !rightImageRef.current ||
        !leftImageRef.current ||
        !containerRef.current ||
        !rightTextRef.current ||
        !leftTextRef.current
      )
        return;

        const textLeftSpan = leftTextRef.current?.querySelector('span');
        const textRightSpan = rightTextRef.current?.querySelector('span');

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top +=300px",
          end: "bottom center",
          scrub: true,
        },
        stagger: 0.1,
      });

      // Image animations
      tl.fromTo(
        rightImageRef.current,
        { x: 150, opacity: 0, rotate: 10, y: -130 },
        { x: 0, duration: 3, opacity: 1, rotate: 0, y: 0}
      ).fromTo(
        leftImageRef.current,
        { x: -150, opacity: 0, rotate: -10, y: 130},
        { x: 0, duration: 3, opacity: 1, rotate: 0, y: 0 },
        "<"
      );

      // Text animations
      tl.fromTo(
        rightTextRef.current,
        { x: 100, opacity: 0.5 },
        { x: 0, duration: 2, opacity: 1 },
        "<"
      ).fromTo(
        leftTextRef.current,
        { x: -100, opacity: 0.5 },
        { x: 0, duration: 2, opacity: 1 },
        "<"
      );

      gsap.to(textLeftSpan, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(textLeftSpan, {
              backgroundPosition: `${100 - self.progress * 100}% 0%`
            });
          }
        }
      });
  
      gsap.to(textRightSpan, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center", 
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(textRightSpan, {
              backgroundPosition: `${self.progress * 100}% 0%`
            });
          }
        }
      });

      gsap.to(triggerRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
          onUpdate: (self) => {
            let percentage;
            if (self.progress <= 0.33) {
              percentage = "0";
            } else if (self.progress <= 0.66) {
              percentage = "-33.33333333333333";
            } else {
              percentage = "-66.66666666666666";
            }
      
            triggerRef.current.style.setProperty("--current-slide-percentage", `${percentage}%`);
          },
        },
      });
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="home-intro  bg-[--color-dark]"
      data-scroll-section
      ref={triggerRef}
    >
      <div className="container-intro" ref={containerRef}>
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
            <h1
              ref={rightTextRef}
              className="flex justify-end text-in-right tracking-tighter"
            >
              <span>Web Developer/Designer</span>
            </h1>
          </div>
          <div className="EyeImage w-full justify-center items-center p-[1vw] relative flex z-20">
            <img
              src={EyeImage}
              alt="larry-eye.jpg"
              className="object-cover max-h-72 w-5/6  rounded-3xl"
            />
            <div
              className="absolute z-50 right-0 -bottom-10 "
              ref={rightImageRef}
            >
              <img
                src={SideImage}
                alt=""
                className="object-cover w-[20vw] max-w-60 aspect-square rounded-2xl -rotate-3"
              />
            </div>
            <div className="absolute z-50 left-0 -top-10" ref={leftImageRef}>
              <img
                src={SideImage}
                alt=""
                className="object-cover w-[20vw] max-w-60 aspect-square rounded-2xl rotate-3"
              />
            </div>
          </div>
          <div className="text bottom-text flex flex-col justify-start mt-4">
            <h1 ref={leftTextRef} className="text-in-left tracking-tighter">
              <span>Graphic Designer/Video Editor</span>
            </h1>
          </div>
        </div>
        <div className="text-intro flex flex-col align-middle text-[--color-text-light] justify-center ">
          <TreakWords text="Passionate and adaptable freelancer delivering high-quality work that exceeds expectations. Continuously learning and staying ahead of industry trends to provide cutting-edge solutions. Committed to excellence, I am a reliable asset for any project." />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
