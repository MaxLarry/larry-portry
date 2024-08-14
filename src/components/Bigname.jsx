import { useGSAP } from '@gsap/react';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Bigname() {
  useGSAP(() => {
    let direction = 1; // 1 = forward, -1 = backward scroll

    const roll1 = roll(".big-name .name-wrap", { duration: 18 });

    ScrollTrigger.create({
      trigger: "[data-scroll-container]",
      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1;
          gsap.to(roll1, { timeScale: direction, overwrite: true });
        }
      },
    });

    function roll(targets, vars, reverse) {
      vars = vars || {};
      vars.ease ||= "none";
      const tl = gsap.timeline({
          repeat: -1,
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 10);
          },
        }),
        elements = gsap.utils.toArray(targets),
        clones = elements.map((el) => {
          let clone = el.cloneNode(true);
          el.parentNode.appendChild(clone);
          return clone;
        });

      const positionClones = () => {
        elements.forEach((el, i) => {
          gsap.set(clones[i], {
            position: "absolute",
            overwrite: false,
            top: el.offsetTop,
            left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
          });
        });
      };

      positionClones();
      console.log("uklok");
      elements.forEach((el, i) => {
        tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0);
      });

      window.addEventListener("resize", () => {
        let time = tl.totalTime();
        tl.totalTime(0);
        positionClones();
        tl.totalTime(time);
      });

      return tl;
    }
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
