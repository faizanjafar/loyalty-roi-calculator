import React from "react";

const Button = ({text, onNext}) => {
  return (
    <button
      className="bg-[#5A79ED] text-white px-12 py-2 rounded-full shadow-md font-semibold text-base"
      onClick={onNext}
    >
        {text} 
    </button>
  );
};

export default Button;
