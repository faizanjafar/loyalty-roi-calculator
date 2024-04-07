import React from "react";

const ResultCard = ({ title, subtitle, lowEnd, highEnd }) => {
  return (
    <div className="flex items-start">
      <div className="w-2/3">
        <h3 className="text-black font-semibold text-lg leading-5">{title}</h3>
        <h5 className="text-[#2B2B2B] font-normal text-base">{subtitle}</h5>
      </div>
      <div className="w-[31%] bg-[#00E8DA] flex justify-between p-2 rounded-md">
        <div className="text-lg text-black font-normal">{`${lowEnd}%`}</div>
        <div className="text-lg text-black font-normal">{`${highEnd}%`}</div>
      </div>
    </div>
  );
};

export default ResultCard;
