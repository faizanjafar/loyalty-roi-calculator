"use client";
import React, { useEffect, useMemo, useState } from "react";
import SlideFirst from "./SlideFirst";
import SlideSecond from "./SlideSecond";
import SlideThird from "./SlideThird";
import {
  food,
  health,
  kids,
  electronics,
  industries,
  margin,
  fashion,
  home,
  sports,
  hotels,
  media,
  shopping,
} from "../constant/data";
import SlideFourth from "./SlideFourth";
import Result from "./Result";

const MainSection = ({ currentSlide, handleNext, handleBack }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMargin, setSelectedMargin] = useState(null);

  useEffect(() => {
    const industry = localStorage.getItem("industry");
    const category = localStorage.getItem("category");
    const margin = localStorage.getItem("margin");

    if (industry) setSelectedIndustry(JSON.parse(industry));
    if (category) setSelectedCategory(category);
    if (margin) setSelectedMargin(margin);
  }, []);

  const categories = useMemo(() => {
    switch (selectedIndustry?.text) {
      case "Health & Beauty":
        return health;
      case "Fashion":
        return fashion;
      case "Food & Restaurants":
        return food;
      case "Home & Garden":
        return home;
      case "Babies & Kids":
        return kids;
      case "Sports & Outdoors":
        return sports;
      case "Electronics & Telecom":
        return electronics;
      case "Hotels":
        return hotels;
      case "Media & Entertain- ment":
        return media;
      case "Shopping & Malls":
        return shopping;
      default:
        return [];
    }
  }, [selectedIndustry]);

  const handleSelectIndustry = (industry) => {
    setSelectedIndustry(industry);
    localStorage.setItem("industry", JSON.stringify(industry));
  };

  const handleIndustryCategory = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("category", JSON.stringify(category));
  };

  return (
    <>
      <div
        className={`bg-[#5A79ED] w-full flex justify-start ${
          currentSlide <= 4
            ? "items-center h-[90vh]"
            : "items-start pt-44 h-[110vh] flex-col"
        }`}
      >
        <div className="container mx-auto relative">
          {currentSlide <= 4 ? (
            <div className="flex justify-between items-start">
              <div className="w-[35%] flex flex-col justify-center items-start gap-4">
                <h1 className="text-white text-5xl font-bold ">
                  Loyalty ROI Calculator
                </h1>
                <p className="text-white text-lg flex flex-col gap-3">
                  Slash acquisition costs and skyrocket your revenue with
                  Loiale's loyalty magic. See your potential gains in a flash
                  with our quick ROI (return on investment) calculator powered
                  by AI.
                  <p>Dive in now—let's unlock your brand's loyalty power!</p>
                </p>
              </div>
              <div className="w-[55%]">
                {currentSlide > 1 && (
                  <img
                    src="/images/icons/back_icon.png"
                    className="h-5 w-16 mb-3 cursor-pointer"
                    alt=""
                    onClick={handleBack}
                  />
                )}
                <div className="flex justify-start items-center h-[488px] w-[734px]">
                  {currentSlide === 1 && <SlideFirst onNext={handleNext} />}
                  {currentSlide === 2 && (
                    <SlideSecond
                      onNext={handleNext}
                      handleSelectIndustry={handleSelectIndustry}
                      margin={margin}
                      industries={industries}
                      selectedIndustry={selectedIndustry}
                      selectedMargin={selectedMargin}
                      setSelectedMargin={setSelectedMargin}
                    />
                  )}
                  {currentSlide === 3 && (
                    <SlideThird
                      onNext={handleNext}
                      industries={categories}
                      handleIndustryCategory={handleIndustryCategory}
                      selectedIndustry={selectedCategory}
                      selectIndustry={selectedIndustry}
                    />
                  )}
                  {currentSlide === 4 && <SlideFourth onNext={handleNext} />}
                </div>
              </div>
            </div>
          ) : (
            <Result />
          )}
          <div className="h-60 w-60 absolute -bottom-72">
            {currentSlide === 1 && <img src="/images/slide1.png" alt="" />}
            {currentSlide === 2 && <img src="/images/slide2.png" alt="" />}
            {currentSlide === 3 && <img src="/images/slide3.png" alt="" />}
            {currentSlide === 4 && <img src="/images/slide4.png" alt="" />}
          </div>
        </div>
        {currentSlide > 4 && (
          <section className="bg-[#414141] px-7 w-4/5 relative z-50 mt-10 flex justify-between items-center">
            <h1 className="text-white text-3xl font-semibold">
              Learn More About The Most Advanced Loyalty Engine In The Market
            </h1>
            <button className="px-12 py-2 rounded-full shadow-md font-semibold text-base bg-[#5A79ED] text-white">
              Get demo
            </button>
            <img src="/images/logo.png" className="h-44 pr-20" alt="" />
          </section>
        )}
      </div>
    </>
  );
};

export default MainSection;
