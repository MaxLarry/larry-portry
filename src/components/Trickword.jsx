import React, { useEffect, useRef } from 'react';

const TrickWords = ({ text }) => {
  const spanRef = useRef(null);

  useEffect(() => {
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
    }
  }, [text]);

  return <div ref={spanRef} className="span-lines animate lg:w-1/2 w-full px-4 text-sm md:text-lg lg:text-xl text-center mx-auto"></div>;
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
