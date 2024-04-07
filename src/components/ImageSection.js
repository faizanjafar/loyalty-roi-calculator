"use client";
import React from "react";

const ImageSection = ({ img, text, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect({ img, text });
  };

  return (
    <div
      className={`relative p-1 ${
        isSelected
          ? "bg-white shadow-lg p-1 border rounded-lg flex justify-center items-center"
          : ""
      }`}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <img src={img} className="h-20 w-20" alt="" />
      <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 text-center">
        <p className="text-white leading-tight text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ImageSection;
