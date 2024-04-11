import React from "react";

const ResultCard = ({ title, subtitle, lowEnd, highEnd }) => {
  return (
    <div className="flex items-start lg:flex-row flex-col lg:gap-0 gap-4">
      <div className="lg:w-2/3 w-full">
        <h3 className="text-black font-semibold text-lg leading-5">{title}</h3>
        <h5 className="text-[#2B2B2B] font-normal text-base">{subtitle}</h5>
      </div>
      <div className="lg:min-w-[31%] lg:w-auto w-full bg-[#00E8DA] flex justify-between p-2 rounded-md">
        <div className="text-lg text-black font-normal">{`${lowEnd}%`}</div>
        <div className="text-lg text-black font-normal">{`${highEnd}%`}</div>
      </div>
    </div>
  );
};

export default ResultCard;
