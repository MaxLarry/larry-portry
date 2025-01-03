import React from "react";
import EyeImage from "../assets/img/eyeyeye.png";
import SideImage from "../assets/img/eyeyeye1.jpg";

function Aboutme() {
  return (
    <section
      className="section home-intro px-9 bg-[--color-dark-dark]"
      data-scroll-section
    >
      <div className="container">
        <div className="animation-intro">
          <div className="title-wrapper absolute flex flex-col text-center">
            <div className="title-list ">
              <div className="single-title">
                <h2 className="xl">No Rules.</h2>
              </div>
              <div className="single-title">
                <h2 className="xl">Create Without<br /> Limits.</h2>
              </div>
              <div className="single-title">
                <h2 className="xl">Develop Design Inspire</h2>
              </div>
            </div>
          </div>
          <div className="text top-text flex-col flex">
            <h1 className="flex justify-end text-in-right">
              Web Developer/Designer
            </h1>
          </div>
          <div className="EyeImage w-full justify-center items-center p-5 flex flex-col z-20">
            <img
              src={EyeImage}
              alt="larry-eye.jpg"
              className="object-cover max-h-72 w-5/6 "
            />
          </div>
          <div className="text bottom-text flex flex-col justify-start">
            <h1 className="text-in-left">Graphic Designer/Video Editor</h1>
          </div>

          {/* text middle* */}
          {/* <div className="text-mid absolute text-9xl text-center text-[--color-text-light]">
          <div className="relative">
            <h1 className="z-30 text-stroke absolute inset-0">DEVELOP</h1>
            <h1 className="z-10">DEVELOP</h1>
          </div>
          <h1 className="z-30 relative text-stroke">DESIGN</h1>
          <div className="relative">
            <h1 className="z-30 text-stroke absolute inset-0"> f</h1>
            <h1 className="z-10"> f</h1>
          </div>
        </div> */}

          {/* image animated* */}

          <div className="absolute z-50 right-0 bottom-10">
            <img
              src={SideImage}
              alt=""
              className="object-cover lg:w-60 lg:h-60 md:w-52 md:h-52 w-24 h-24 rounded-lg -rotate-3"
            />
          </div>
          <div className="absolute z-50 left-0 top-10">
            <img
              src={SideImage}
              alt=""
              className="object-cover lg:w-60 lg:h-60 md:w-52 md:h-52 w-24 h-24 rounded-lg rotate-3"
            />
          </div>
        </div>
        <div className="text-intro flex flex-col text-center text-[--color-text-light] justify-center items-center">
          <div className="lg:w-1/2 w-full">
            passionate and adaptable freelancer delivering high-quality work
            that exceeds expectations. Continuously learning and staying ahead
            of industry trends to provide cutting-edge solutions. Committed to
            excellence, I am a reliable asset for any project.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
