import React from "react";
import Play from "../../Assets/Icons/play.png";
import dashBoardImage from "../../utils/images/dashboardBanner.jpg";
import { Link } from "react-router-dom";
function DashHeader({ title, subtitle }) {
  return (
    <div
      className=" text-[white]  h-[20vh] relative  md:w-100 object-cover bg-center bg-opacity-90 flex flex-row flex-wrap items-center justify-around lg:justify-between"
      style={{
        backgroundImage: `url(${dashBoardImage})`,
        backgroundColor: "rgba(128, 0, 128, 0.5)",
      }}
    >
      <div
        className="absolute h-[20vh] w-100 inset-0 "
        style={{
          background: "linear-gradient(to right, #372566, #37256669)",
        }}
      ></div>
      <div className="!w-[65%] flex justify-between mx-auto dash-headd ml-9">
        <div className=" flex justify-between">
          <h1 className="text-2xl z-20 font-semibold">{title}</h1>
        </div>
        <div className="flex  flex-row  z-20 justify-between !w-[150px] cursor-pointer  headdd items-center">
          <a>
            {" "}
            <Link to="/"> Home</Link>
          </a>
          <img src={Play} alt="" className="w-[10px] h-[10px]" />
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
