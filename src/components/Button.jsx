import React from "react";

const Button = ({text, location}) => {
  return (
    <div className="btn button-about w-full px-10 bottom-0 text-4xl mt-20">
      <div className="btn-classy w-full justify-center">
        <a className="button" href={location} aria-label="About me">
          <span className="btn-text">
            <span className="btn-text-inner change">{text}</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Button;
