import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { strategicAvenues } from "../constant/data";

const Result = () => {
  const [selectedStrategic, setSelectedStrategic] = useState(null);

  const steps = [
    {
      title: "Explore with Loiale",
      description:
        "Discover how Loiale's advanced features can revolutionize your loyalty in a personalized demo.",
    },
    {
      title: "Customize and Integrate",
      description:
        "Collaborate with our experts to craft a loyalty solution that embodies your brand and meets your audience's needs. Not having an IT team? No problem.",
    },
    {
      title: "Launch and Optimize",
      description:
        "Roll out your loyalty program. Use Loiale’s analytics powered with AI for continuous refinement and optimization.",
    },
  ];

  const category = JSON.parse(localStorage.getItem("category"));
  const industry = JSON.parse(localStorage.getItem("industry"));
  useEffect(() => {
    const selectedIndustry = Object.keys(strategicAvenues[0]).find(
      (industry) => industry === category["text"]
    );
    if (selectedIndustry) {
      setSelectedStrategic(strategicAvenues[0][selectedIndustry]);
    }
  }, [category, strategicAvenues]);

  const handleRestart = () => {
    localStorage.clear();
    window.location.reload();
  };

  const firstSlide = JSON.parse(localStorage.getItem("first_slide"));
  const margin = localStorage.getItem("margin");
  const marginText= localStorage.getItem("margin_text");
  const aov = firstSlide?.aovValue;
  const orders = firstSlide?.ordersValue;
  const purchase_per_customer = localStorage.getItem("purchase_per_customer");
  const website = localStorage.getItem("userDetails");
  const customers = firstSlide?.customersValue;

  // Incremental Revenue Percentage
  const minIRP = (
    +orders *
    +aov *
    (margin / 100) *
    (selectedStrategic?.min_incremental_revenue_percentage / 100)
  ).toFixed(0);
  const maxIRP = (
    +orders *
    +aov *
    (margin / 100) *
    (selectedStrategic?.max_incremental_revenue_percentage / 100)
  ).toFixed(0);

  // Total Projected Annual Revenue
  const minTPAR = (+minIRP + +orders * +aov).toFixed(0);
  const maxTPAR = (+maxIRP + +orders * +aov).toFixed(0);

  // Increase in AOV
  const minIncreaseInAOV = (
    +aov *
    (selectedStrategic?.min_Increase_in_aov_percentage / 100)
  ).toFixed(2);
  const maxIncreaseInAOV = (
    +aov *
    (selectedStrategic?.max_Increase_in_aov_percentage / 100)
  ).toFixed(2);

  // Increase in Purchases per Customer
  const minIncreaseInPurchasesPerCustomer = (
    +purchase_per_customer *
    (selectedStrategic?.min_Increase_in_purchases_per_customer / 100)
  ).toFixed(2);
  const maxIncreaseInPurchasesPerCustomer = (
    +purchase_per_customer *
    (selectedStrategic?.max_Increase_in_purchases_per_customer / 100)
  ).toFixed(2);

  // Percentage of Customers Who Become Members
  const minPercentageOfCustomersWhoBecomeMembers = (
    customers *
    (selectedStrategic?.min_Membership_conversion_percentage / 100)
  ).toFixed(2);
  const maxPercentageOfCustomersWhoBecomeMembers = (
    customers *
    (selectedStrategic?.max_Membership_conversion_percentage / 100)
  ).toFixed(2);

  // Percentage of Customers Who Refer Friends
  const minPercentageOfCustomersWhoReferFriends = (
    customers *
    (selectedStrategic?.min_referral_rate_percentage / 100)
  ).toFixed(2);
  const maxPercentageOfCustomersWhoReferFriends = (
    customers *
    (selectedStrategic?.max_referral_rate_percentage / 100)
  ).toFixed(2);

  const priceFormater = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const minIPRFormated = priceFormater(minIRP);
  const maxIPRFormated = priceFormater(maxIRP);

  const minTPARFormated = priceFormater(minTPAR);
  const maxTPARFormated = priceFormater(maxTPAR);

  const Result = [
    {
      title: "Increase in AOV",
      subtitle: "Projected Increase for Program Members",
      lowEnd: minIncreaseInAOV,
      highEnd: maxIncreaseInAOV,
    },
    {
      title: "Percentage of customers who Become Members",
      subtitle: "Projected Increase for Program Members",
      lowEnd: minPercentageOfCustomersWhoBecomeMembers,
      highEnd: maxPercentageOfCustomersWhoBecomeMembers,
    },
    {
      title: "Increase in Purchases Per Customer",
      subtitle: "Projected Increase for Program Members",
      lowEnd: minIncreaseInPurchasesPerCustomer,
      highEnd: maxIncreaseInPurchasesPerCustomer,
    },
    {
      title: "Percentage of Customers Who Refer Friends",
      subtitle: "Percentage of Customers Who Refer Friends",
      lowEnd: minPercentageOfCustomersWhoReferFriends,
      highEnd: maxPercentageOfCustomersWhoReferFriends,
    },
  ];

  return (
    <>
      <div className="2xl:w-[70%] xl:w-4/5 w-full mx-auto z-50 px-6">
        <h3 className="text-white font-semibold text-5xl mb-4">Results</h3>
        <div className="flex items-start mb-8 md:flex-nowrap flex-wrap md:gap-0 gap-4">
          <p className="text-white font-normal text-base md:w-4/5 tracking-wide">
            Here’s a look at how Loiale’s loyalty engine can impact your
            business on {JSON.parse(website).website_link}
          </p>
          <div className="flex md:flex-col gap-7 items-start md:gap-3">
            <button className="text-white font-semibold text-base flex gap-2 items-center">
              <img src="/images/icons/external-link.svg" alt="" />
              Share Report
            </button>

            <button
              className="text-white font-semibold text-base flex gap-2 items-center"
              onClick={handleRestart}
            >
              <img src="/images/icons/restart.svg" alt="" />
              Restart
            </button>
          </div>
        </div>
        <section className="bg-[#2312DA] rounded-xl shadow-xl">
          <div className="p-8 text-center flex flex-col gap-3 border-b-2 border-gray-800 border-opacity-25 ">
            <h3 className="md:text-xl text-lg text-white font-semibold">
              Incremental revenue lift with Loiale loyalty engine
            </h3>
            <h2 className="md:text-4xl text-3xl text-white font-semibold">
              {` ${minIPRFormated}-${maxIPRFormated}`}
            </h2>
          </div>
          <div className="p-8 text-center flex flex-col gap-3">
            <h3 className="md:text-xl text-lg text-white font-semibold">
              Total projected annual revenue with Loiale loyalty engine
            </h3>
            <h5 className="text-xl text-white font-semibold">
              {`${minTPARFormated}-${maxTPARFormated}`}
            </h5>
          </div>
          <div className="bg-white rounded-bl-xl rounded-br-xl md:px-16 px-8 py-8 flex flex-col gap-6 ">
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-6 pb-8">
              {Result.map((result, index) => (
                <ResultCard
                  key={index}
                  title={result.title}
                  subtitle={result.subtitle}
                  lowEnd={result.lowEnd}
                  highEnd={result.highEnd}
                />
              ))}
            </div>
            <div className="text-center pt-8 pb-2 border-t-2 border-gray-800 border-opacity-20">
              <p>
                These outcomes are determined based on industry benchmarks from
                Loiale’s database of loyalty programs.
              </p>
            </div>
          </div>
        </section>
        <section className="shadow-xl rounded-xl sm:p-10 p-6 mt-10 bg-white">
          <div className=" flex flex-col gap-4 items-start md:w-11/12 w-full">
            <h4 className="text-xl font-semibold">
              Strategic Avenues For Your Brand: 📈
            </h4>
            {selectedStrategic &&
              selectedStrategic.stratgic_avenus.map((strategic, index) => (
                <p key={index}>
                  <span className="text-black font-medium">
                    {strategic.title}:{" "}
                  </span>
                  {strategic.description}
                </p>
              ))}
          </div>
        </section>
        <section className="flex justify-between items-start md:h-[362px] flex-wrap">
          <div className="lg:w-[60%] w-full shadow-xl rounded-xl md:p-10 p-6 mt-10 bg-white h-full">
            <h6 className="font-semibold text-black text-xl mb-3">
              Next Steps:{" "}
            </h6>
            <ul className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <span>{index + 1}. </span>
                  <li className="text-black font-normal">
                    <span className="text-black font-medium">
                      {step.title}:
                    </span>
                    {step.description}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="lg:w-[35%] w-full shadow-xl rounded-xl p-6 mt-10 bg-white h-full">
            <h6 className="text-black font-medium">Your inputs:</h6>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col gap-3">
                <div>
                  <h6 className="text-black font-medium">Annual Orders:</h6>
                  <p className="text-black font-normal">{orders}</p>
                </div>
                <div>
                  <h6 className="text-black font-medium">AOV</h6>
                  <p className="text-black font-normal">${aov}</p>
                </div>
                <div>
                  <h6 className="text-black font-medium">Gross margin</h6>
                  <p className="text-black font-normal">{marginText}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h6 className="text-black font-medium">Annual Customers:</h6>
                  <p className="text-black font-normal">{customers}</p>
                </div>
                <div>
                  <h6 className="text-black font-medium">Industry</h6>
                  <p className="text-black font-normal">{industry.text}</p>
                </div>
                <div>
                  <h6 className="text-black font-medium">Category</h6>
                  <p className="text-black font-normal">{category.text}</p>
                </div>
              </div>
            </div>
            <p className="text-[#2B2B2B] font-normal text-sm pt-5 pb-4">
              Current annual revenue generated
            </p>
            <div className="bg-[#5A79ED4D] h-9 w-full flex justify-start items-center rounded-md px-5">
              {priceFormater(aov * orders)}
            </div>
          </div>
        </section>
        <section className="bg-[#414141] px-7 w-full mt-12 flex justify-between item-start md:hidden flex-col py-6 gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-2xl font-semibold">
              Learn More About The Most Advanced Loyalty Engine In The Market
            </h1>
            <button className="px-12 py-2 rounded-full shadow-md font-semibold text-base bg-[#5A79ED] text-white">
              Get demo
            </button>
          </div>
          <img src="/images/logo.png" className="h-36 w-28" alt="" />
        </section>
        <br />
        <br />
      </div>
    </>
  );
};

export default Result;
