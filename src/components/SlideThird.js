import React from "react";
import ImageSection from "./ImageSection";

const SlideThird = ({
  onNext,
  industries,
  handleIndustryCategory,
  selectedIndustry,
  selectIndustry,
}) => {
  const category = localStorage.getItem("category");
  return (
    <div className="bg-white w-full rounded-xl py-10 px-12 h-full relative">
      <h4 className="text-black font-semibold text-2xl mb-6">
        {selectIndustry
          ? `Choose your Category in the ${selectIndustry.text}`
          : `Choose your Industry:`}
      </h4>
      <div className="w-[85%] flex gap-4 flex-wrap">
        {industries.map((industry, index) => (
          <ImageSection
            key={index}
            img={industry.img}
            text={industry.text}
            onSelect={handleIndustryCategory}
            isSelected={
              selectedIndustry ? selectedIndustry.text === industry.text : false
            }
          />
        ))}
      </div>
      <div className="absolute bottom-6 right-6">
        <button
          className={`px-12 py-2 rounded-full shadow-md font-semibold text-base 
            ${category === null
              ? 'bg-gray-400 text-gray-700'
              : 'bg-[#5A79ED] text-white'
            }`}
          onClick={onNext}
          disabled={category === null}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SlideThird;
