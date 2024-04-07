"use client";
import { useEffect, useState } from "react";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

function App() {
  const initialSlide = parseInt(localStorage.getItem("currentSlide")) || 1;
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  useEffect(() => {
    localStorage.setItem("currentSlide", currentSlide);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handleBack = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div>
      <Navbar currentSlide={currentSlide} />
      <MainSection
        currentSlide={currentSlide}
        handleNext={handleNext}
        handleBack={handleBack}
      />
      {currentSlide === 5 && (
        <div className="w-2/5 absolute -z-10">
          <img src="/images/slide5.png" alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
