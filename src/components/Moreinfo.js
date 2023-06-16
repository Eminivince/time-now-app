import React from "react";
import Button from "./Button";

const Moreinfo = () => {
  return (
    <div className="ml-8 flex py-12 bg-teal-300 flex-col lg:flex-row">
      <div className="basis-1/2 pr-6">
        <p className="mb-5 text-blue-950 font-bold">Unified Dashboard</p>
        <h3 className="font-bold text-4xl mb-5">
          Customizable dashboard for all platforms
        </h3>
        <p className="lg:text-2xl mb-6 pr-8">
          Use Twitter and Instagram but not LinkedIn? You can customize your
          dashboard to your liking. You can even schedule the same post to
          individual platforms instead of all platforms
        </p>
        <Button />
      </div>

      
      <div className="basis-1/2 pr-6">
        <p className="mb-5 text-blue-950 font-bold lg:mt-0 mt-4">Enhanced Analytics</p>
        <h3 className="font-bold text-4xl mb-5">
          Real-time data that tells you everything.
        </h3>
        <p className="lg:text-2xl mb-6 pr-8">
          Get detailed reports of what's working and what isn't. Engagement rates, impressions, views, and much more data is available to you through pur in-depth dashboard tool.
        </p>
        <a href="#" className="font-semibold ">View Live Demo</a>
      </div>
      
    </div>
  );
};

export default Moreinfo;
