import React, { useEffect, useState } from "react";
import Slider from "./Slider";

const SlideFirst = ({ onNext }) => {
  const [inputs, setInputs] = useState({
    ordersValue: 0,
    customersValue: 0,
    aovValue: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    localStorage.setItem("first_slide", JSON.stringify(inputs));
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { ordersValue, customersValue, aovValue } = inputs;

  const perchasePerCustomer = (ordersValue, customersValue) => {
    return ordersValue / customersValue;
  };

  let data = perchasePerCustomer(ordersValue, customersValue);
  if (data === Infinity || isNaN(data)) {
    data = 0;
  }
  data = data.toFixed(0);

  localStorage.setItem("purchase_per_customer", data);

  useEffect(() => {
    const firstSlide = JSON.parse(localStorage.getItem("first_slide"));
    if (firstSlide) {
      setInputs(firstSlide);
    }
  }, []);

  const gradients = {
    ordersValue: `linear-gradient(86.71deg, #00E8DA 0%, #B20DFF ${(inputs.ordersValue / 10000000) * 100}%, #B20DFF ${(inputs.ordersValue / 10000000) * 80}%, #ccc 0%)`,
    customersValue: `linear-gradient(86.71deg, #00E8DA 0%, #B20DFF ${(inputs.customersValue / 1000000) * 100}%, #FFC700 ${(inputs.customersValue / 1000000) * 80}%, #ccc 0%)`,
    aovValue: `linear-gradient(86.71deg, #00E8DA 0%, #B20DFF ${(inputs.aovValue / 5000) * 100}%, #FFC700 ${(inputs.aovValue / 5000) * 80}%, #ccc 0%)`,
  };

  const purchase_per_customer = localStorage.getItem("purchase_per_customer");

  return (
    <>
      <div className="bg-white w-full rounded-bl-xl rounded-tl-xl p-10 h-full flex justify-between items-start flex-col">
        <Slider
          title="Your annual orders"
          subtitle="How many orders does your brand process per year?"
          sliderValue={ordersValue}
          handleSliderChange={handleChange}
          name="ordersValue"
          gradient={gradients.ordersValue}
          max={10000000}
        />
        <Slider
          title="Your annual customers"
          subtitle="How many new customers do you get per year?"
          sliderValue={customersValue}
          handleSliderChange={handleChange}
          name="customersValue"
          gradient={gradients.customersValue}
          max={1000000}
        />
        <Slider
          title="AOV"
          subtitle="What is the average order value for your customers?"
          sliderValue={aovValue}
          handleSliderChange={handleChange}
          name="aovValue"
          gradient={gradients.aovValue}
          max={5000}
        />
      </div>
      <div className="w-2/6 bg-[#2312DA] rounded-br-xl rounded-tr-xl p-4 h-full flex justify-between items-center flex-col">
        <div className="h-28 w-48 flex justify-center items-center bg-[#003499] mb-7">
          <p className="text-white font-semibold text-4xl">
            {purchase_per_customer}
          </p>
        </div>
        <div className="flex flex-col gap-4 w-48">
          <p className="text-white font-medium text-md">
            Purchases per customers
          </p>
          <p className="text-white font-normal text-sm">
            How many purchases make your customers per year?{" "}
          </p>
          <p className="text-white font-normal text-sm">
            In metrics from thousands of loyalty programs, this calculator is
            designed to show you the revenue uplift you can potentially see from
            a Loiale Loyalty program.
          </p>
        </div>
        <div>
          <button
            className="bg-[#5A79ED] text-white px-12 py-2 rounded-full shadow-md font-semibold text-base"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideFirst;
