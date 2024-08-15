import { pageTransitionIn } from "./Loading";
import { gsap, Expo } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from "@barba/core";
gsap.registerPlugin(ScrollTrigger);


let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

export function initPageTransitions() {
  barba.hooks.before(() => {
    console.log("barba.hooks.before called");
    document.documentElement.classList.add("is-transitioning");
  });

  barba.hooks.after(() => {
    console.log("barba.hooks.after called");
    document.documentElement.classList.remove("is-transitioning");
    scroll.init();
    scroll.stop();
  });

  barba.hooks.enter(() => {
    console.log("barba.hooks.enter called");
    scroll.destroy();
  });

  barba.hooks.afterEnter(() => {
    console.log("barba.hooks.afterEnter called");
    window.scrollTo(0, 0);
    //initCookieViews();
  });

  barba.init({
    sync: true,
    debug: false,
    timeout: 7000,
    transitions: [
      {
        name: "default",
        once(data) {
          console.log("default transition once called");
          initSmoothScroll(data.next.container);
          initScript();
          //initCookieViews();
          //initLoader();
        },
        async leave(data) {
          console.log("default transition leave called");
          pageTransitionIn(data.current);
          await delay(495);
          data.current.container.remove();
        },
        async enter(data) {
          console.log("default transition enter called");
          pageTransitionOut(data.next);
          // initNextWord(data); // ito yung names ng page 'siguro'
        },
        async beforeEnter(data) {
          console.log("default transition beforeEnter called");
          ScrollTrigger.getAll().forEach((t) => t.kill());
          scroll.destroy();
          initSmoothScroll(data.next.container);
          initScript();
        },
      },
      {
        name: "to-home",
        from: {},
        to: {
          namespace: ["home"],
        },
        once(data) {
          initSmoothScroll(data.next.container);
          initScript();
          //initCookieViews();
          initLoader();
        },
      },
    ],
  });
  function initSmoothScroll(container) {
    scroll = new LocomotiveScroll({
      el: container.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    window.onresize = scroll.update();

    scroll.on("scroll", () => ScrollTrigger.update());

    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: container.querySelector("[data-scroll-container]").style
        .transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.defaults({
      scroller: document.querySelector("[data-scroll-container]"),
    });

    /**
     * Remove Old Locomotive Scrollbar
     */

    const scrollbar = selectAll(".c-scrollbar");

    if (scrollbar.length > 1) {
      scrollbar[0].remove();
    }

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
}

function initScript() {
  select("body").classList.remove("is-loading");
  console.log("wwhhwwhwh...");
  initScrollLetters();
}

export function initScrollLetters() {
  // Scrolling Letters Both Direction
  // https://codepen.io/GreenSock/pen/rNjvgjo
  // Fixed example with resizing
  // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

  let direction = 1; // 1 = forward, -1 = backward scroll

  const roll1 = roll(".big-name .name-wrap", {duration: 18}),
        roll2 = roll(".rollingText02", {duration: 10}, true),
        scroll = ScrollTrigger.create({
          trigger: document.querySelector('[data-scroll-container]'),
          onUpdate(self) {
            if (self.direction !== direction) {
              direction *= -1;
              gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
            }
          }
        });

  // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
  function roll(targets, vars, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() { 
              this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
          }), 
          elements = gsap.utils.toArray(targets),
          clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
    positionClones();
    elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
    window.addEventListener("resize", () => {
      let time = tl.totalTime(); // record the current time
      tl.totalTime(0); // rewind and clear out the timeline
      positionClones(); // reposition
      tl.totalTime(time); // jump back to the proper time
    });
    return tl;
  }

}


function initLoader() {
  var tl = gsap.timeline();

  //var svgShapeDistance = 50;
  tl.set("html", {
    cursor: "wait",
  });
  tl.call(function () {
    console.log("Stopping scroll...");
    //scroll.stop();
    console.log("Scroll stopped.");
  });

  tl.set(".loading-screen .icon-box svg g.icon", {
    scale: 0,
    transformOrigin: "center center",
    opacity: 0,
  });
  //console.log("natawag1");

  if (window.innerWidth > 540) {
    tl.set("main .once-in", {
      y: "50vh",
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh",
    });
  }
  //console.log("natawag2");
  /*
    tl.set(".loading-screen .icon-box svg g.icon path:nth-child(1)", {
        scale: 0,
        rotation: -360,
        transformOrigin: "center center",
        opacity: 0
    });

    tl.set(".loading-screen .icon-box svg g.icon path:nth-child(2)", {
        yPercent: svgShapeDistance,
        xPercent: svgShapeDistance ,
        opacity: 0
    });

    tl.set(".loading-screen .icon-box svg g.icon path:nth-child(3)", {
        yPercent: svgShapeDistance,
        xPercent:(svgShapeDistance * -1),
        opacity: 0
    });

    tl.set(".loading-screen .icon-box svg g.icon path:nth-child(4)", {
        yPercent: (svgShapeDistance * -1),
        xPercent: svgShapeDistance,
        opacity: 0
    });
*/

  tl.to(".loading-screen .icon-box svg g.icon", {
    scale: 1.3,
    opacity: 1,
    duration: 0.9,
    ease: Expo.easeOut,
    delay: 0.9,
  });

  tl.to(".loading-screen .icon-box svg g.icon", {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: Expo.easeOut,
    delay: 0,
  });

  tl.to(
    ".loading-screen .icon-box svg g.icon",
    {
      rotate: 0,
      duration: 1.2,
      ease: Expo.easeInOut,
    },
    "< 0.5"
  );

  tl.to(
    ".loading-screen .shutter",
    {
      yPercent: -100,
      duration: 1.6,
      stagger: 0.05,
      ease: Expo.easeInOut,
    },
    "< 0.7"
  );

  tl.to(
    ".loading-screen .icon-box svg",
    {
      yPercent: -140,
      duration: 1.6,
      stagger: 0.1,
      ease: Expo.easeInOut,
    },
    "<"
  );

  tl.to(
    "main .once-in",
    {
      duration: 1.5,
      y: "0vh",
      stagger: 0.1,
      ease: Expo.easeOut,
      clearProps: true,
    },
    "=-1.3"
  );

  tl.set(
    "html",
    {
      cursor: "auto",
    },
    "=-1.2"
  );

  tl.call(function () {
    console.log("Starting scroll...");
    scroll.start();
    console.log("Scroll started.");
  });
}
