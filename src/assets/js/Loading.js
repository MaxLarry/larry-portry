import { gsap, Expo } from "gsap";
let scroll;

function initLoaderShort() {
  var tl = gsap.timeline();

  tl.set("html", {
    cursor: "wait",
  });

  tl.set(".loading-screen .shutter", {
    yPercent: -100,
  });

  tl.set(".loading-screen .icon-box svg", {
    yPercent: -120,
  });

  tl.set("html", {
    cursor: "auto",
  });

  tl.call(
    function () {
      pageTransitionOut();
    },
    null,
    0
  );
}

// Animation - Page Loader
export function initLoader() {
  var tl = gsap.timeline();

  //var svgShapeDistance = 50;

  tl.set("html", {
    cursor: "wait",
  });
  if ($(window).width() > 540) {
    tl.set("main .once-in", {
      y: "50vh",
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh",
    });
  }
  tl.set(".loading-screen .icon-box svg g.icon", {
    scale: 0,
    transformOrigin: "center center",
    opacity: 0,
  });
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

  
    tl.to(".loading-screen .icon-box svg g.icon", {
        rotate: 0,
        duration: 1.2,
        ease: Expo.easeInOut
    }, "< 0.5");

    tl.to(".loading-screen .shutter", {
        yPercent: -100,
        duration: 1.6,
        stagger: 0.05,
        ease: Expo.easeInOut
    }, "< 0.7");

    tl.to(".loading-screen .icon-box svg", {
        yPercent: -140,
        duration: 1.6,
        stagger: 0.1,
        ease: Expo.easeInOut
    }, "<");

    tl.set("html", {
        cursor: "auto",
    });

    tl.call(function() {
        scroll.stop();
    }, null, 0);

    tl.call(function() {
        //pageTransitionOut();
        scroll.start();
    }, null, 2);

}

// Animation - Page Leave
export function pageTransitionIn() {
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

// Animation - Page Enter

// Animation - Page Leave
function pageTransitionInPortfolioSingle() {
  var tl = gsap.timeline();

  tl.call(function () {
    scroll.start();
  });

  tl.to("[data-transition-portfolio-single-fade]", {
    opacity: 0,
    duration: 0.2,
  });

  tl.to(
    "[data-transition-portfolio-single-fade-alt]",
    {
      opacity: 0,
      duration: 0.2,
    },
    "<"
  );
}

// Animation - Page Enter
export function pageTransitionOutPortfolioSingle() {
  var tl = gsap.timeline();

  tl.call(function () {
    scroll.start();
  });

  tl.fromTo(
    "[data-transition-portfolio-single-fade]",
    {
      opacity: 0,
      y: "4em",
    },
    {
      opacity: 1,
      duration: 1.2,
      y: "0em",
      delay: 0.1,
      stagger: 0.05,
      ease: Expo.easeOut,
      clearProps: "all",
    }
  );

  tl.fromTo(
    "[data-transition-portfolio-single-fade-alt]",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      stagger: 0.05,
      ease: Power1.easeOut,
      clearProps: "all",
    },
    "<"
  );
}


// Animation - Page Enter
function pageTransitionOut() {
  var tl = gsap.timeline();

  tl.call(function() {
      scroll.start();
      $('.loading-container .loading-icon').removeClass('active');
  });

  if (document.querySelector('[data-transition-slide-in]')) {
      tl.from("[data-transition-slide-in]", {
          yPercent: 25,
          opacity: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: Expo.easeOut,
          delay: 0.5,
          clearProps: "all"
      }, "<");
  }

  if (document.querySelector('.home-header .col-logo svg path')) {
      tl.from(".home-header .col-logo svg path", {
          yPercent: 120,
          duration: 1.2,
          stagger: 0.05,
          ease: Expo.easeOut,
          delay: 0.3,
          clearProps: "all"
      }, "<");
  }

  if (document.querySelector('[data-transition-typewriter]')) {
      tl.fromTo("[data-transition-typewriter] .single-char, [data-transition-typewriter] .single-word", {
          display: "none"
      }, {
          display: "inline",
          duration: 0.01,
          stagger: 0.04,
          ease: Expo.easeIn,
          onComplete: function() {
              $('[data-transition-typewriter]').find('.typewriter-bar').addClass('blink');
          }
      }, "< 0.7");
  }

  if (document.querySelector('[data-transition-portfolio-single-fade]')) {
      tl.fromTo('[data-transition-portfolio-single-fade]', {
          opacity: 0,
          y: "4em"
      }, {
          opacity: 1,
          duration: 1.2,
          y: "0em",
          delay: 0.1,
          stagger: 0.05,
          ease: Expo.easeOut,
          clearProps: "all"
      }, "< 0.25");
  }

  if (document.querySelector('[data-transition-portfolio-single-fade-alt]')) {
      tl.fromTo('[data-transition-portfolio-single-fade-alt]', {
          opacity: 0,
      }, {
          opacity: 1,
          duration: 1.5,
          delay: 0.1,
          stagger: 0.05,
          ease: Power1.easeOut,
          clearProps: "all"
      }, "<");
  }

  tl.call(function() {

      if (document.querySelector('[data-transition-gradient]')) {
          gsap.from("[data-transition-gradient]", {
              scale: 0.5,
              opacity: 0,
              duration: 5,
              ease: Expo.easeOut,
              clearProps: "all"
          }, "<");
      }

  }, null, 0);

  tl.call(function() {
      if (document.querySelector('[data-transition-scramble]')) {
          tl.from("[data-transition-scramble]", {
              duration: 0.6,
              scrambleText: {
                  text: "{original}",
                  speed: 1.2,
                  chars: scrambleCharacters,
                  delimiter: " ",
                  tweenLength: false
              }
          }, "<");
      }
  }, null, 2.5);

}
