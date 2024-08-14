import React from "react";

function Aboutme() {
  return (
    <section className="section home-intro" data-scroll-section>
      <div className="container medium">
        <div className="row">
          <div className="flex-col">
            <h4 className="span-lines animate">
              Helping brands to stand out in the digital era. Together we will
              set the new status quo. No nonsense, always on the cutting edge.
            </h4>
          </div>
          <div className="flex-col">
            <div className="text-wrap fade-in animate">
              <p>
                The combination of my passion for Video editing, observing
                brands and creating a unique style for them to stand out.
              </p>
            </div>
            <div className="btn btn-round" data-scroll data-scroll-speed="2">
              <a
                className="btn-click magnetic"
                data-strength-text="50"
                data-strength="100"
                href="/about"
              >
                <div className="btn-fill"></div>
                <span className="btn-text">
                  <span className="btn-text-inner">About me</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
