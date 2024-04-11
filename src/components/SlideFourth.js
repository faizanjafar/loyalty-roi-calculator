import React, { useEffect, useState } from "react";
import Slider from "./Slider";

const SlideFourth = ({ onNext }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [userDetails, setUserDetails] = useState({
    online_sale_percentage: null,
    email: "",
    website_link: ""
  });

  const handleSlide = (e) => {
    const value = parseInt(e.target.value, 10);
    localStorage.setItem("sliderValue", value);
    setSliderValue(value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  useEffect(() => {
    const savedSliderValue = localStorage.getItem("sliderValue");
    if (savedSliderValue !== null) {
      setSliderValue(parseInt(savedSliderValue, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  useEffect(() => {
    const savedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (savedUserDetails) {
      setUserDetails(savedUserDetails);
    }
  }, []);

  const isInputsEmpty = userDetails.email.trim() === "" || userDetails.website_link.trim() === "";

  return (
    <div className="h-full w-full">
      <div className="bg-white rounded-tl-xl rounded-tr-xl sm:py-20 py-14 sm:px-12 px-8 relative">
        <div>
          <Slider
            title={<h6 className="text-black font-semibold sm:text-xl text-lg">Which percentage (%) of your sales are online?</h6>}
            subtitle=""
            sliderValue={sliderValue}
            handleSliderChange={handleSlide}
            name="online_sale_percentage"
            gradient={`linear-gradient(86.71deg, #00E8DA 0%, #B20DFF ${sliderValue}%, #ccc ${sliderValue}%, #ccc 100%)`}
            max={100}
          />
          <p className="text-sm font-normal text-black">
            Examples: e-commerce, online marketplace, delivery, subscription services...
          </p>
        </div>
      </div>
      <div className="bg-[#2312DA] sm:py-16 py-10 px-8 rounded-bl-xl rounded-br-xl flex gap-4 flex-wrap">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-2 rounded-lg text-black sm:w-auto w-full"
          value={userDetails.email}
          onChange={handleChange}
        />
        <input
          type="url"
          name="website_link"
          placeholder="Your website"
          className="p-2 rounded-lg text-black sm:w-auto w-full"
          value={userDetails.website_link}
          onChange={handleChange}
        />
        <button
          className={`px-12 py-2 rounded-full shadow-md font-semibold text-base 
          ${isInputsEmpty
              ? 'bg-gray-400 text-gray-700'
              : 'bg-[#5A79ED] text-white'
            }`}
          onClick={onNext}
          disabled={isInputsEmpty}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default SlideFourth;
