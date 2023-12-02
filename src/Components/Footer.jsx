import React from "react";
import "../App.css";
import GooglePlay from "../Assets/Icons/google-play.png";
import Button from "./Common/Button";
import Crown from "../Assets/Icons/crown.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate("/membership_plan");
  };
  return (
    <footer className="footer text-base-content fooer-Img bg-[#170F2C] pt-10">
      <div className="flex flex-wrap  items-center !justify-between  !gap-10 px-4 lg:px-72">
        <div className="">
          <nav className="flex flex-wrap justify-between w-full gap-4 ">
            <a className="link link-hover text-white text-lg">About us</a>
            <a className="link link-hover text-white text-lg">Contact</a>
            <a className="link link-hover text-white text-lg">Jobs</a>
            <a className="link link-hover text-white text-lg">Press kit</a>
            <a className="link link-hover text-white text-lg">Press kit</a>
          </nav>
          <p className="text-white text-sm mt-6">
            Copyright @ 2022 PixelSports.tv All Rights Reserved
          </p>
        </div>
        <div className="flex gap-10 lg:gap-20  flex-wrap px-12">
          <div className=" flex flex-col flex-wrap gap-3">
            <div className="flex flex-col gap-5">
              <header className="footer-title text-white text-2xl ">
                Buy Subscription
              </header>
              <div className="grid grid-flow-col mt-5" onClick={handleCLick}>
                <Button
                  text="BUY PLAN"
                  src={Crown}
                  className="post-Button w-[200px] rounded text-sm"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 px-12">
            <h1 className="text-white text-xl  ">
              Apps
              <div
                className="w-10 rounded-lg bg-blue-500"
                style={{ paddingTop: "4px" }}
              />
            </h1>
            <img
              src={GooglePlay}
              alt=""
              className="h-[55px] rounded-lg shadow-xl shadow-black "
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
