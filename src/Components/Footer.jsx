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
  const handleCLickAbout = () => {
    navigate("/about-us");
  };
  const handleCLickTerms = () => {
    navigate("/terms-of-use");
  };
  const handleCLickPrivacy = () => {
    navigate("/privacy-policy");
  };
  const handleCLickFAQ = () => {
    navigate("/faq");
  };
  const handleCLickContact = () => {
    navigate("/contact-us");
  };
  return (
    <footer className="footer relative text-base-content fooer-Img bg-[#170F2C] pt-10">
      <div className="flex footer-flex items-center !justify-between  !gap-10 px-4 lg:px-72">
        <div className="flex flex-col ">
          <nav className="flex flex-wrap w-full gap-4 ">
            <a
              className="link link-hover text-white text-lg cursor-pointer"
              onClick={handleCLickAbout}
            >
              About us
            </a>
            <a
              className="link link-hover text-white text-lg cursor-pointer"
              onClick={handleCLickTerms}
            >
              Terms Of Use
            </a>
            <a
              className="link link-hover text-white text-lg cursor-pointer"
              onClick={handleCLickPrivacy}
            >
              Privacy Policy
            </a>
            <a
              className="link link-hover text-white text-lg cursor-pointer"
              onClick={handleCLickFAQ}
            >
              FAQ{" "}
            </a>
            <a
              className="link link-hover text-white text-lg cursor-pointer"
              onClick={handleCLickContact}
            >
              Contact Us
            </a>
          </nav>
          <p className="text-white text-sm mt-6">
            Copyright @ 2022 PixelSports.tv All Rights Reserved
          </p>
        </div>
        <div className="flex app-btn p-4 w-[60%] justify-between">
          <div className=" flex flex-col flex-wrap gap-3">
            <div className="flex flex-col gap-5">
              <header className="footer-title text-white text-2xl ">
                Buy Plan
              </header>
              <div className="grid grid-flow-col " onClick={handleCLick}>
                <Button
                  text="BUY PLAN"
                  src={Crown}
                  className="post-Button mt-4 w-[200px] rounded text-sm"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>
          <div className=" flex  flex-col gap-3 px-4">
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
              className="h-[55px] rounded-lg shadow-xl shadow-black mt-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
