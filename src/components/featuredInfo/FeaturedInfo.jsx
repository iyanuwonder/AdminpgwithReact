import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'; 

export default function FeaturedInfo({ sliderValue }) {
   console.log(sliderValue);

  const activefeaturedMoney = sliderValue * 30;
  const activeFeaturedMoneyRate = sliderValue * 5;
  const activefeaturedSales = sliderValue * 80;
  const activeFeaturedMoneySales = sliderValue * 1.5;
  const activefeaturedCost = sliderValue * 50;
  const activeFeaturedMoneyCost = sliderValue * 3.5;

  return (
    <div className="featured">
      {/** Revenue Item **/}
      <div
        className={`featuredItem ${
          activefeaturedMoney >= 800 ? "revenue" : ""
        }`}
      >
        <span
          className={`featuredTitle ${
            activefeaturedMoney >= 800 ? "revenue" : ""
          }`}
        >
          Revenue
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${activefeaturedMoney}</span>
          {activeFeaturedMoneyRate < 250 && (
            <span className="featuredMoneyRate">
              {activeFeaturedMoneyRate}{" "}
              <ArrowDownward className="featuredIcon negative" />
            </span>
          )}
          {activeFeaturedMoneyRate > 250 && (
            <span className="featuredMoneyRate white">
              +{activeFeaturedMoneyRate}{" "}
              <ArrowUpward className="featuredIcon positive" />
            </span>
          )}
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      {/** Sales Item **/}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${activefeaturedSales}</span>
          {activeFeaturedMoneySales < 75 && (
            <span className="featuredMoneyRate">
              -{activeFeaturedMoneySales}{" "}
              <ArrowDownward className="featuredIcon negative" />
            </span>
          )}
          {activeFeaturedMoneySales > 75 && (
            <span className="featuredMoneyRate">
              +{activeFeaturedMoneySales}{" "}
              <ArrowUpward className="featuredIcon positive" />
            </span>
          )}
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      {/** Cost Item **/}
      <div
        className={`featuredItem ${activefeaturedCost >= 500 ? "cost" : ""}`}
      >
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${activefeaturedCost}</span>
          <span className="featuredMoneyRate">
            +{activeFeaturedMoneyCost} <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
    </div>
  );
}
