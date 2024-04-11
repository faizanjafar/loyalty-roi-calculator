import React from "react";

const Slider = ({
  title,
  subtitle,
  sliderValue,
  handleSliderChange,
  gradient,
  name,
  max,
}) => {
  const Aov = title === "AOV";
  return (
    <div className="flex flex-col w-11/12">
      <div className="flex justify-between items-center pb-2">
        <h6 className="text-lg font-normal">{title}</h6>
        <div className="flex gap-2 shadow px-2 rounded-3xl">
          <input
            type="number"
            value={Aov ? sliderValue : sliderValue}
            name={name}
            onChange={handleSliderChange}
            className="w-24 h-6 border-none outline-none"
          />
          <p className="text-sm font-normal text-black">{Aov ? "US $" : ""}</p>
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
