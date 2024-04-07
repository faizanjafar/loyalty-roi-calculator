import React from "react";

const Navbar = ({ currentSlide }) => {
  return (
    <nav className="w-11/12 mx-auto py-4 px-8 bg-white bg-opacity-35 text-black shadow-md z-50 rounded-bl-3xl rounded-br-3xl absolute top-0 left-0 right-0 overflow-x-hidden">
      <div
        className={`gradient-color ${
          currentSlide === 1
            ? "w-1/5"
            : currentSlide === 2
            ? "w-2/5"
            : currentSlide === 3
            ? "w-3/5"
            : currentSlide === 4
            ? "w-4/5"
            : "w-[95%]"
        }`}
      ></div>
      <div className="flex justify-between items-center relative">
        <div></div>
        <div>
          <img src="/images/loiale.svg" alt="" />
        </div>
        <div className="flex items-center space-x-8">
          <button className="bg-white text-black px-4 py-2 rounded-full shadow-md font-semibold text-base">
            <a href="#home">Demo</a>
          </button>
          <a
            href="#home"
            className="text-black text-lg font-semibold tracking-widest"
          >
            ES
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
