import React from "react";
import ImageSection from "./ImageSection";

const SlideSecond = ({
  onNext,
  industries,
  margin,
  handleSelectIndustry,
  selectedIndustry,
  selectedMargin,
  setSelectedMargin,
}) => {
  return (
    <div className="bg-white w-full rounded-xl py-10 px-6 h-full relative">
      <h4 className="text-black font-semibold text-2xl mb-6">
        Choose your Industry:
      </h4>
      <div className="flex items-start gap-5">
        <div className="w-[85%] flex gap-4 flex-wrap">
          {industries.map((industry, index) => (
            <ImageSection
              key={index}
              img={industry.img}
              text={industry.text}
              onSelect={handleSelectIndustry}
              isSelected={
                selectedIndustry
                  ? selectedIndustry.text === industry.text
                  : false
              }
            />
          ))}
        </div>
        <div className="w-[20%]">
          <p className="text-black font-normal text-base mb-6">
            Your gross margin:
          </p>
          <div className="flex flex-col gap-3">
            {margin.map((m, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="radio"
                  className="radio"
                  id={m.value}
                  name="margin"
                  value={m.value}
                  checked={selectedMargin === m.text}
                  onChange={() => {
                    localStorage.setItem("margin", m.value);
                    setSelectedMargin(m.text);
                  }}
                />
                <label htmlFor={m.value}>{m.text}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6">
        <button
          className={`px-12 py-2 rounded-full shadow-md font-semibold text-base 
          ${
            selectedIndustry === null || selectedMargin === null
              ? "bg-gray-400 text-gray-700"
              : "bg-[#5A79ED] text-white"
          }`}
          onClick={onNext}
          disabled={selectedIndustry === null || selectedMargin === null}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SlideSecond;
