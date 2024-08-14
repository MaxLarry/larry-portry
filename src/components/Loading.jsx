function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-screen">
        <div className="loading-dark overlay"></div>
        <div className="icon-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="none"
            viewBox="0 0 368.3 299.3"
          >
            <g className="icon">
              <path
                fill="black"
                d="M 34.83,149.65 a 149.65,149.65 0 1,0 299.3,0 a 149.65,149.65 0 1,0 -299.3,0"
              />
              <path
                fill="white"
                d="M437.85,365.19c5.78.77,8.44,4.76,7.28,10.49-1.39,6.82-3.14,13.57-4.73,20.36a37.2,37.2,0,0,0-1.29,5.82,71.92,71.92,0,0,0,.37,7.86,3.25,3.25,0,0,1-1.88-.28c-3.12-2-6.16-4.22-9.12-6.49-.6-.46-.72-1.54-1.07-2.33a5.7,5.7,0,0,1,2.29.17c2.41,1.37,3.3.11,4.07-2,1.32-3.6,1.56-6.68-2.68-8.6a14.87,14.87,0,0,1-4.25-3c-2.52-2.54-4.73-2.18-7.36-.08s-4.4,3.61-.55,6.08c.43.28.32,1.39.45,2.12-.66-.06-1.47.12-1.95-.2-2.89-1.95-5.75-4-8.51-6.07-.5-.39-.53-1.38-.77-2.1l2-.11c1.73-.14,3.79.28,5.14-.5,7.75-4.51,15.32-9.33,23-14,2-1.2,2.64-2.53,1-4.52A16.43,16.43,0,0,1,437.85,365.19Zm1.74,9.38-13.86,8.75,10,7C437.05,384.91,438.22,380.16,439.59,374.57Z"
                transform="translate(-122.35 -245.57)"
              />
              <path
                fill="white"
                d="M 40.19 60.46 L 95.6 144.33 L 184.15 203.84 L 275.06 143.56 L 314.59 170.01 L 303.31 186.88 L 184.51 265.59 L 66.11 186.39 L 0 86.32 L 40.19 60.46 Z"
              />
              <path
                fill="white"
                d="M 343.89 122.18 L 331.22 122.09 L 315.86 111.12 L 184.5 198.22 L 97.14 139.12 L 68.88 96.8 L 123.59 60.46 L 152.19 103.67 L 143.94 109.3 L 184.15 136.56 L 298.1 60.73 L 333.5 60.73 L 368.3 85.34 L 331.22 122.09 Z"
              />
            </g>
          </svg>
        </div>
        <div className="loading-icon">
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <path
              fill="#000"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
        <div className="shutter"></div>
        <div className="shutter"></div>
        <div className="shutter"></div>
        <div className="shutter"></div>
        <div className="shutter"></div>
        <div className="shutter"></div>
      </div>
    </div>
  );
}

export default Loading;
