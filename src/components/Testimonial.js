import React from "react";
import Data from "./Data.json";
import Avatar1 from "../Assets/UA1.png";
import Avatar2 from "../Assets/UA2.png";
import Avatar3 from "../Assets/UA3.png";
import Avatar4 from "../Assets/UA4.png";
import Avatar5 from "../Assets/UA5.png";
import Avatar6 from "../Assets/UA6.png";
import Avatar7 from "../Assets/UA7.png";
import Avatar8 from "../Assets/UA8.png";

const Testimonial = () => {
  const imageArray = [
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
  ];

  const mappedData = imageArray.map(function (image) {
    return (
      <div className="mr-4 w-16">
        <img src={image} alt="imagegallery"/>
      </div>
    );
  });
  return (
    <div className="flex flex-col lg:flex-row py-12">
      <div className="testimonial-container flex flex-col basis-1/2 lg:pl-28 pl-8">
        <h2 className="lg:text-4xl text-4xl font-extrabold mb-8 text-blue-950 lg:mx-0 pr-3">TimeNow is used by the most influential people</h2>
        <div className="flex lg:pr-8 mb-4">{mappedData}</div>
      </div>

      <div className="left basis-1/2 lg:px-12 px-8">
        <p className="lg:text-xl">The most influential people on Facebook, Twitter, and Instagram are using TweetNow to Schedule posts when their followers are most active.</p>
        <p className="text-xl mt-8">They generally receive 23% more engagemnet than people who do not</p>
      </div>
    </div>
  );
};

export default Testimonial;
