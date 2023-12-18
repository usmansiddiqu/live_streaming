import React, { useEffect, useState } from "react";
import "../../../App.css";
import CustomBarChart from "../../../Components/Common/Graph";
import getDashboardData from "../../../api/authGetDashboard";
const AdminCards = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const { data: response } = await getDashboardData();
    setData([
      1,
      response.liveTv,
      response.Users,
      response.Transactions,
      response.todayAmount,
      response.weekAmount,
      response.monthAmount,
      response.yearAmount,
    ]);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (data) {
      let valueDisplays = document.querySelectorAll(".num");
      let duration = 300;
      let interval = 100;

      valueDisplays.forEach((valueDisplay, i) => {
        let startValue = 0;
        let endValue = data[i];
        let steps = Math.ceil(duration / interval);
        let stepValue = (endValue - startValue) / steps;

        let counter = setInterval(function () {
          startValue += stepValue;
          valueDisplay.textContent = Math.round(startValue);
          if (startValue >= endValue) {
            valueDisplay.textContent = endValue;
            clearInterval(counter);
          }
        }, interval);

        return () => clearInterval(counter);
      });
    }
  }, [data]);

  return (
    <>
      <div
        className="ml-12 mt-20 w-[80vw] dash-card"
        style={{ position: "relative", left: "2%" }}
      >
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
        <div className="wrapper mt-3">
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
        {/* <div className=" w-[80vw] h-[45vh] bg-[#1C1C1E] rounded mt-10">
          <div className="p-2 px-9">
            <h2 className="text-white font-medium text-xl">
              Users Plan Statistics
            </h2>{" "}
            <p className="text-white">Current Year</p>
          </div>
          <div className=" w-[70vw] h-[40vh] mx-auto">
            <CustomBarChart />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AdminCards;
