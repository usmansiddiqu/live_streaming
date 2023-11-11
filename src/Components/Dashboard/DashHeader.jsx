import React from "react";
import dashBoardImage from "../../utils/images/dashboardBanner.jpg";
function DashHeader() {
  return (
    <div
      className=" text-[white] h-[30vh]   md:w-100 object-cover bg-center bg-opacity-90 flex flex-row flex-wrap items-center justify-around lg:justify-between"
      style={{
        backgroundImage: `url(${dashBoardImage})`,
        backgroundColor: "rgba(128, 0, 128, 0.5)",
      }}
    >
      <div
        className="absolute h-[30vh] w-100 inset-0 "
        style={{
          background: "linear-gradient(to right, #372566, #37256669)",
        }}
      ></div>
      <div className=" flex justify-between  lg:px-40 md:px-20">
        <h1 className="text-3xl z-20 ">Dashboard</h1>
      </div>
      <div className="flex  flex-row  z-20 gap-4 lg:gap-10 justify-between lg:px-5">
        <a href="">Home</a>
        <p>Dashboard</p>
      </div>
    </div>
  );
}

export default DashHeader;
