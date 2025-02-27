import React from "react";
import Play from "../../Assets/Icons/play.png";
import dashBoardImage from "../../Assets/Images/league.jpg";
import { Link } from "react-router-dom";
function DashHeader({ title, subtitle, info, type, noContent }) {
  return (
    <>
    {!noContent &&
    <div
      className="relative w-[100%] text-[white]  lg:h-[40vh] md:dash-header md:w-100 object-cover bg-center bg-opacity-90 flex flex-column flex-wrap items-center justify-around top-[30px] text-height"
      style={{
        backgroundImage: !info && `url(${dashBoardImage})`,
        backgroundColor: !info && "rgba(128, 0, 128, 0.5)",
      }}
    >
      <div
        className="absolute h-[20vh] w-100 inset-0  "
        // style={{
        //   background: "linear-gradient( #372566, #37256669)",
        // }}
      ></div>
      {info ? (
        <div class=" mx-auto absolute w-[70%] sm:w-[100%] md:w-[80%] lg:w-[55%]  text-white lg:p-0 md:pb-10 rounded-lg text-height md:relative">
        {/* <div class="border-t-4 border-red-600 pb-4"> */}
          <h1 class="text-3xl font-bold">{title}</h1>
          <span class="inline-block border border-white mt-2 rounded-md text-xs px-3 py-1 uppercase">{type}</span>
        {/* </div> */}
      
        <p class="mt-4 text-gray-300">
          {info}
        </p>
      
        <h2 class="mt-6 text-2xl font-bold">Live & Upcoming</h2>
      </div>
      ) : (
        <div className="!w-[65%] flex justify-between mx-auto dash-headd ml-9">
          <div className=" flex justify-between">
            <h1 className="text-2xl z-20 font-semibold">{title}</h1>
          </div>
          <div
            className="flex  flex-row  z-20 justify-between cursor-pointer  headdd items-center"
            style={{ gap: "8px" }}
          >
            <a>
              {" "}
              <Link to="/"> Home</Link>
            </a>
            <img src={Play} alt="" className="w-[10px] h-[10px]" />
            <p>{subtitle}</p>
          </div>
        </div>
      )}
    </div>
    }
    </>
  );
}

export default DashHeader;
