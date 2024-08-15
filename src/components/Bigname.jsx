import { useGSAP } from "@gsap/react";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Bigname() {
  useGSAP(() => {
    function initScrollLetters() {
      // Scrolling Letters Both Direction
      // https://codepen.io/GreenSock/pen/rNjvgjo
      // Fixed example with resizing
      // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

      let direction = 1; // 1 = forward, -1 = backward scroll

      const roll1 = roll(".big-name .name-wrap", { duration: 18 }),
        roll2 = roll(".rollingText02", { duration: 10 }, true),
        scroll = ScrollTrigger.create({
          trigger: document.querySelector("[data-scroll-container]"),
          onUpdate(self) {
            if (self.direction !== direction) {
              direction *= -1;
              gsap.to([roll1, roll2], {
                timeScale: direction,
                overwrite: true,
              });
            }
          },
        });

      // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
      function roll(targets, vars, reverse) {
        vars = vars || {};
        vars.ease || (vars.ease = "none");
        const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() {
              this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            },
          }),
          elements = gsap.utils.toArray(targets),
          clones = elements.map((el) => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () =>
            elements.forEach((el, i) =>
              gsap.set(clones[i], {
                position: "absolute",
                overwrite: false,
                top: el.offsetTop,
                left:
                  el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
              })
            );
        positionClones();
        elements.forEach((el, i) =>
          tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
        );
        window.addEventListener("resize", () => {
          let time = tl.totalTime(); // record the current time
          tl.totalTime(0); // rewind and clear out the timeline
          positionClones(); // reposition
          tl.totalTime(time); // jump back to the proper time
        });
        return tl;
      }
    }
    initScrollLetters();
  }, []);

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
