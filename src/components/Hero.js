import React from "react";
import Navbar from "./Navbar";
import verified from "../Assets/security.png";
import Mockup from "../Assets/Mockup.png";
import Button from "./Button";
import Testimonial from "./Testimonial";
import Moreinfo from "./Moreinfo";
import Footer from "./Footer";

const Hero = () => {
  const startSchedulingBtn = <Button />;

  return (
    <div>
      <div className="hero--container flex  pl-28 ">
        <div className="left--hero basis-1/2 bg-white pt-10">
          <Navbar />
          <div className="mt-20 mr-8">
            <h1 className="text-6xl font-extrabold text-blue-950">
              Post when your audience is most active
            </h1>
            <p className="mt-6 mr-12 text-xl">
              With TimeNow, automatically schedule your posts on Twitter,
              LinkedIn, and Instagram to post when your followers are most
              active.
            </p>
            <div className="btn--container mt-6 flex items-center">
              <div>{startSchedulingBtn}</div>
              <a href="#" className="font-semibold ">
                View Demo
              </a>
            </div>
            <div className="learn-more flex items-center mt-6">
              <img src={verified} alt="green" className="w-7 mr-2" />
              <p className="text-sm">
                TimeNow does not sell your data.{" "}
                <span className="font-bold underline hover:cursor-pointer">
                  Learn More
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Hero */}
        <div className="basis-1/2 pt-10 bg-teal-500 pl-6">
          <div className="flex flex-col">
            <div className="self-end mr-14">{startSchedulingBtn}</div>
            <div className="pb-16">
              <img src={Mockup} alt="Mockup" className="mt-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <Testimonial />
      <Moreinfo />
      <Footer />
    </div>
  );
};

export default Hero;
