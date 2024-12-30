//index1.js

import { useEffect } from "react";
import { gsap, Expo } from "gsap";
import LocomotiveScroll from "locomotive-scroll";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from "@barba/core";
gsap.registerPlugin(ScrollTrigger);

export function delay(n = 2000) {
  return new Promise((done) => {
    setTimeout(done, n);
  });
}

export const initSmoothScroll = (container) => {
  const scroll = new LocomotiveScroll({
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
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: container.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.defaults({
    scroller: document.querySelector("[data-scroll-container]"),
  });

  // Remove old Locomotive Scrollbar
  const scrollbar = document.querySelectorAll(".c-scrollbar");
  if (scrollbar.length > 1) scrollbar[0].remove();

  // Refresh ScrollTrigger on window update
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();

  return scroll;
};


const initPageTransitions = () => {
  let scroll;

  barba.hooks.before(() => {
    console.log("barba.hooks.before called");
    document.documentElement.classList.add("is-transitioning");
  });

  barba.hooks.after(() => {
    console.log("barba.hooks.after called");
    document.documentElement.classList.remove("is-transitioning");
    if (scroll) {
      scroll.init();
      scroll.stop();
    }
  });

  barba.hooks.enter(() => {
    console.log("barba.hooks.enter called");
    if (scroll) {
      scroll.destroy();
    }
  });

  barba.hooks.afterEnter(() => {
    console.log("barba.hooks.afterEnter called");
    window.scrollTo(0, 0);
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
          scroll = initSmoothScroll(data.next.container);
          //initScript();
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
          //pageTransitionOut(data.next);
          // Add custom logic for entering pages here
        },
        async beforeEnter(data) {
          console.log("default transition beforeEnter called");
          ScrollTrigger.getAll().forEach((t) => t.kill());
          scroll.destroy();
          scroll = initSmoothScroll(data.next.container);
          //initScript();
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
          //initScript();
          //initCookieViews();
          initLoader();
        },
      },
    ],
  });
};

function initScript() {
  select("body").classList.remove("is-loading");
  console.log("wwhhwwhwh...");
  //initScrollLetters();
}

export const usePageTransitions = () => {
  useEffect(() => {
    initPageTransitions();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};

export function initLoader() {
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
    "=-1.3",
    console.log("tinawag na!"),
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
    //scroll.start();
    console.log("Scroll started.");
  });
}

function pageTransitionIn() {
  var tl = gsap.timeline();

  tl.call(function () {
    scroll.start();
    $(".loading-container .loading-icon").addClass("active");
  });

  tl.set(".loading-screen .shutter", {
    yPercent: 100,
    autoAlpha: 1,
  });

  tl.set(".loading-screen .loading-dark", {
    opacity: 0,
  });

  tl.set(".loading-screen .icon-box svg g.icon", {
    rotate: -45,
  });

  tl.set(".loading-screen .icon-box svg", {
    yPercent: 140,
  });

  tl.to(
    ".loading-screen .shutter",
    {
      yPercent: 0,
      duration: 1.2,
      stagger: -0.05,
      ease: Expo.easeInOut,
    },
    "<"
  );

  tl.to(
    ".loading-screen .loading-dark",
    {
      opacity: 1,
      duration: 1.2,
      ease: Expo.easeInOut,
    },
    "<"
  );

  tl.to(
    ".loading-screen .icon-box svg g.icon",
    {
      rotate: 0,
      duration: 1.2,
      ease: Expo.easeInOut,
    },
    "< 0.2"
  );

  tl.to(
    ".loading-screen .icon-box svg",
    {
      yPercent: 0,
      duration: 1.2,
      ease: Expo.easeInOut,
    },
    "<"
  );

  tl.to(
    ".loading-screen .shutter",
    {
      yPercent: -100,
      duration: 1.2,
      stagger: 0.05,
      ease: Expo.easeInOut,
    },
    "< 0.75"
  );

  tl.to(
    ".loading-screen .icon-box svg g.icon",
    {
      rotate: 45,
      duration: 1.2,
      ease: Expo.easeInOut,
    },
    "<"
  );

  tl.to(
    ".loading-screen .icon-box svg",
    {
      yPercent: -140,
      duration: 1.2,
      ease: Expo.easeInOut,
    },
    "<"
  );

  tl.to(
    ".loading-screen .loading-dark",
    {
      opacity: 0,
      duration: 1.4,
      ease: Expo.easeInOut,
    },
    "<"
  );
}
