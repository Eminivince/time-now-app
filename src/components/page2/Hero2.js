import React from "react";
import Navbar from "../Navbar";
import Checkmark from "../../Assets/Checkmark.svg";
import Footer from "../Footer";
import Button from "../Button";

const Hero2 = () => {
  return (
    <div className="mt-24 px-28">
      <div className="mb-12 flex justify-between">
        <Navbar />
        <div>
            <Button />
        </div>
      </div>

      <div>
        <div className="flex flex-col">
          <h1 className="text-blue-950 text-6xl font-bold text-center mb-8">
            Flexible Plans for Everyone.
          </h1>
          <p className="text-xl text-center mt-8 px-56">
            Our plans are made for everyone. Whether you're just starting out on
            social media, or have been on there for a long time, we have a plan
            that's right for you.
            <div className="flex justify-center mt-10 mb-10">
              <p>Billed Monthly</p>
              <div>Toggle</div>
              <p>Billed Yearly</p>
            </div>
          </p>
        </div>

        <div className="flex justify-between space-x-3">
          <div className="price-container1 border-2 p-4 w-96 mb-4">
            <p className="text-xl">
              <span className="font-bold">$</span>
              <span className="font-bold">4</span>
              <span>
                /<span>mo</span>
              </span>
            </p>
            <p className="mb-4">Perfect plan if you're just starting out</p>
            <hr className="w-80 mb-4" />
            <div className="flex mb-4">
              <img src={Checkmark} alt="tick" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex mb-4">
              <img src={Checkmark} alt="tick" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex mb-4">
              <img src={Checkmark} alt="tick" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <button className="bg-blue-900 hover:bg-blue-950 p-3 rounded mr-6 font-semibold text-white">
              <a href="#">Subcribe Now</a>
            </button>
          </div>
          <div className="price-container1 border-2 p-4 w-96">
            <p className="text-xl">
              <span className="font-bold">$</span>
              <span className="font-bold">4</span>
              <span>
                /<span>mo</span>
              </span>
            </p>
            <p className="mb-4">Perfect plan if you're just starting out</p>
            <hr className="w-80 mb-4" />
            <div className="flex mb-4">
              <img src={Checkmark} alt="tick" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex mb-4">
              <img src={Checkmark} alt="tick" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex mb-4">
              <img src={Checkmark} alt="tick" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex mb-4">
              <img src={Checkmark} alt="tick" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <button className="bg-blue-900 hover:bg-blue-950 p-3 rounded mr-6 font-semibold text-white">
              <a href="#">Subcribe Now</a>
            </button>
          </div>
          <div className="price-container1 border-2 p-4 w-96 mb-4">
            <p className="text-xl">
              <span className="font-bold">$</span>
              <span className="font-bold">4</span>
              <span>
                /<span>mo</span>
              </span>
            </p>
            <p className="mb-4">Perfect plan if you're just starting out</p>
            <hr className="w-80 mb-4" />
            <div className="flex item-center mb-4">
              <img src={Checkmark} alt="tickk" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex item-center mb-4">
              <img src={Checkmark} alt="tickk" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <div className="flex item-center mb-4">
              <img src={Checkmark} alt="tickk" className="mr-3" />
              <p>LinkedIn Integration</p>
            </div>
            <button className="bg-blue-900 hover:bg-blue-950 p-3 rounded mr-6 font-semibold text-white">
              <a href="#">Subcribe Now</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero2;
