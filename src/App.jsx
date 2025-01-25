//App.jsx
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Loading from "./components/Loading.jsx";
import "./assets/css/style-new.css";
import "./assets/css/locomotive-scroll.css";
import { initLoader, initSmoothScroll, delay, initScript } from "./assets/js/index1.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { gsap, Expo } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from "@barba/core";
gsap.registerPlugin(ScrollTrigger);

function Wrapper() {
  const location = useLocation();

  const [pageId, setPageId] = useState("home");
  const [namespace, setNamespace] = useState("home");

  // Update pageId and namespace based on route changes
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageId("home");
        setNamespace("home");
        break;
      case "/aboutme":
        setPageId("aboutme");
        setNamespace("aboutme");
        break;
      default:
        setPageId("default");
        setNamespace("default");
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
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
            initScript();
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
            //useScrollLetters();
            //initCookieViews();
            window.addEventListener("bigname-animation-ready", () => { 
              initLoader();
            });
            initScript();
            
          },
        },
      ],
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="no-scroll-overlay"></div>
      <Loading />
      <main
        className="main"
        id={pageId}
        data-barba="container"
        data-barba-namespace={namespace}
      >
        <div className="main-wrap" data-scroll-container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

// App Component: Ensures <Router> is at the root level
function App() {
  return (
    <Router>
      <Wrapper />
    </Router>
  );
}

export default App;
