import React, { useEffect } from "react";
import "../../../App.css";
const AdminCards = () => {
  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 400;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      return () => clearInterval(counter);
    });
  }, []);

  return (
    <>
      <div className="ml-12 mt-20 w-[80vw] ">
        <div className="wrapper">
          <div className="container1">
            <span className="num text-[#FF0015] text-2xl" data-val="5">
              0
            </span>
            <span className="text text-white text-sm">Languages</span>
          </div>
          <div className="container1">
            <span className="num text-red-500 text-2xl" data-val="129">
              0
            </span>
            <span className="text text-white text-sm">Live TV</span>
          </div>
          <div className="container1">
            <span className="num text-[#5B69BC] text-2xl" data-val="145">
              0
            </span>
            <span className="text text-white text-sm">Users</span>
          </div>
          <div className="container1">
            <span className="num text-[#FF0015] text-2xl" data-val="414">
              0
            </span>
            <span className="text text-white text-sm">Transactions</span>
          </div>
        </div>
        <div className="wrapper mt-5">
          <div className="container1">
            <span className="num text-[#FF0015] text-2xl" data-val="298">
              0
            </span>
            <span className="text text-white text-sm">Daily Revenue</span>
          </div>
          <div className="container1">
            <span className="num text-[#FF8ACC] text-2xl" data-val="186">
              0
            </span>
            <span className="text text-white text-sm">Weekly Revenue</span>
          </div>
          <div className="container1">
            <span className="num text-[#F9C851] text-2xl" data-val="240">
              0
            </span>
            <span className="text text-white text-sm">Monthly Revenue</span>
          </div>
          <div className="container1">
            <span className="num text-[#10C469] text-2xl" data-val="239">
              0
            </span>
            <span className="text text-white text-sm">Yearly Revenue</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCards;
