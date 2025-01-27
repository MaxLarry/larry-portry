import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrickWords = ({ text }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
    if (spanRef.current) {
      const spanWord = spanRef.current;
      
      // Clear the existing content
      spanWord.innerHTML = '';

      // Split the text, but keep the original separators
      const parts = text.split(/(\s+)/);

      // Wrap words and spaces in the required span structure
      parts.forEach((part) => {
        if (part.trim() !== '') {
          const span = document.createElement('span');
          span.className = 'span-line';
          const innerSpan = document.createElement('span');
          innerSpan.className = 'span-line-inner';
          innerSpan.innerText = part;
          span.appendChild(innerSpan);
          spanWord.appendChild(span);
        } else {
          // Preserve whitespace
          spanWord.appendChild(document.createTextNode(part));
        }
      });
      
      gsap.utils.toArray(spanRef.current).forEach((triggerElement) => {
        const targetElement =
          triggerElement.querySelectorAll(".span-line-inner");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: triggerElement,
              toggleActions: "play none none reset",
              start: "0% 100%",
              end: "100% 0%",
              // markers: true,
            },
          })
          .from(targetElement, {
            y: "100%",
            stagger: 0.01,
            ease: "power3.out",
            duration: 1,
          });
      });

    }
  },0);
  }, [text]);

  return <div ref={spanRef} className="span-lines animate"></div>;
};

export default TrickWords;

// import React, { useEffect, useRef } from 'react';

// const TrickWords = ({ text }) => {
//   const spanRef = useRef(null);

//   useEffect(() => {
//     if (spanRef.current) {
//       const spanWord = spanRef.current;

//       // Wrap each word and preserve spaces
//       spanWord.innerHTML = text.replace(/(\s+|[^a-zA-Z0-9<]+)/g, (match) => {
//         if (match === ' ') {
//           return ' '; // Preserve spaces
//         }
//         return `<span class="span-line"><span class="span-line-inner" style="transform: translate(0px, 0%);">${match}</span></span>`; // Wrap each word
//       });
//     }
//   }, [text]);

//   return (
//     <h4 ref={spanRef} className="span-lines animate">
//       {/* The content will be dynamically injected into the h4 */}
//     </h4>
//   );
// };

// export default TrickWords;
