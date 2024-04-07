import React from "react";

const Slider = ({
  title,
  subtitle,
  sliderValue,
  handleSliderChange,
  gradient,
  name,
  max
}) => {
  const Aov = title === "AOV";
  return (
    <div className="flex flex-col w-11/12">
      <div className="flex justify-between items-center pb-2">
        <h6 className="text-lg font-normal">{title}</h6>
        <div className="flex justify-end items-center h-6 w-28 border rounded-3xl shadow px-2">
          <p className="text-black font-normal text-base">{Aov ? `$ ${sliderValue}` : sliderValue}</p>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max={max}
        value={sliderValue}
        name={name}
        id="range3"
        onChange={handleSliderChange}
        className="w-full range-input"
        style={{ background: gradient }}
      />
      <p className="text-sm font-normal text-black">{subtitle}</p>
    </div>
  );
};

export default Slider;
