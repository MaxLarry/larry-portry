import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Bigname() {
  const containerRef = useRef(null);
  const animationEvent = new CustomEvent('bigname-animation-ready');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

     
      let direction = 1;

      function roll(targets, vars, reverse) {
        vars = vars || {};
        vars.ease || (vars.ease = "none");
        const tl = gsap.timeline({
          repeat: -1,
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 10);
          },
        });

        const elements = gsap.utils.toArray(targets);
        const clones = elements.map(el => {
          let clone = el.cloneNode(true);
          el.parentNode.appendChild(clone);

          return clone;
        });

        

        const positionClones = () =>
          elements.forEach((el, i) =>
            gsap.set(clones[i], {
              position: "absolute",
              overwrite: false,
              top: el.offsetTop,
              left:
                el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
            })
          );
        console.log("gumana na!");
        positionClones();

        
        elements.forEach((el, i) =>
          tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
        );
        

        window.addEventListener("resize", () => {
          let time = tl.totalTime();
          tl.totalTime(0);
          positionClones();
          tl.totalTime(time);
        });

        return tl;
      }

      const roll1 = roll(".big-name .name-wrap", { duration: 18 });

      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1], { timeScale: direction, overwrite: true });
          }
        },
      });

      window.dispatchEvent(animationEvent);
      return () => {
        scrollTrigger.kill();
        roll1.kill();
      };
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="big-name" ref={containerRef}>
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
