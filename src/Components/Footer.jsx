import React from "react";
import "../App.css";
import GooglePlay from "../Assets/Icons/google-play.png";
import PaymentIcon from "../Assets/Icons/Payment Icons/download.png";
import CreditCards from "../Assets/Icons/Payment Icons/credit-cards.png";
import PaymentIcon1 from "../Assets/Icons/Payment Icons/download (1).png";
import PaymentIcon2 from "../Assets/Icons/Payment Icons/download (2).png";
import PaymentIcon3 from "../Assets/Icons/Payment Icons/download (3).png";

import Button from "./Common/Button";
import Crown from "../Assets/Icons/crown.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  // const navigate = useNavigate();
  const handleCLick = () => {
    // navigate("/membership_plan");
  };
  const handleCLickAbout = () => {
    window.location.href = "/about-us";
  };

  const handleCLickTerms = () => {
    window.location.href = "/terms-of-use";
  };

  const handleCLickPrivacy = () => {
    window.location.href = "/privacy-policy";
  };

  const handleCLickFAQ = () => {
    window.location.href = "/faq";
  };

  const handleCLickContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    // <div
    //   className="footer relative text-base-content fooer-Img bg-[#170F2C] !h-[10rem]"
    //   style={{ overflowY: "hidden" }}
    // >
    //   <div className="w-[85vw]  new-footer-box">
    //     <div className="flex footer-flex items-center mt-3 !justify-between  w-[50vw] mx-auto">
    //       <div className="flex flex-col !h-[10rem]">
    //         <div className="flex flex-wrap w-full gap-4 w-[29vw] text-footer ">
    //           <a
    //             className="link link-hover text-white text-lg cursor-pointer"
    //             onClick={handleCLickAbout}
    //           >
    //             About us
    //           </a>
    //           <a
    //             className="link link-hover text-white text-lg cursor-pointer"
    //             onClick={handleCLickTerms}
    //           >
    //             Terms Of Use
    //           </a>
    //           <a
    //             className="link link-hover text-white text-lg cursor-pointer"
    //             onClick={handleCLickPrivacy}
    //           >
    //             Privacy Policy
    //           </a>
    //           <a
    //             className="link link-hover text-white text-lg cursor-pointer"
    //             onClick={handleCLickFAQ}
    //           >
    //             FAQ{" "}
    //           </a>
    //           <a
    //             className="link link-hover text-white text-lg cursor-pointer"
    //             onClick={handleCLickContact}
    //           >
    //             Contact Us
    //           </a>
    //         </div>
    //         <p className="text-white footer-copy text-sm mt-4 mb-2">
    //           Copyright @ 2022 PixelSports.tv All Rights Reserved
    //         </p>
    //       </div>
    //       {/* <div className="flex app-btn w-[20vw]  justify-between ">
    //         <div className=" flex  flex-col gap-3">
    //           <h1 className="text-white text-xl  ">
    //             Buy Plans
    //             <div
    //               className="w-10 rounded-lg bg-blue-500"
    //               style={{ paddingTop: "4px" }}
    //             />
    //           </h1>
    //           <div className="w-[170px] h-[60px]  cursor-pointer">
    //             <div className="grid grid-flow-col " onClick={handleCLick}>
    //               <Button
    //                 text="BUY PLAN"
    //                 src={Crown}
    //                 className="post-Button  w-[200px] rounded text-sm"
    //                 style={{ width: "200px" }}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className=" flex  flex-col gap-3 ">
    //           <h1 className="text-white text-xl  ">
    //             Apps
    //             <div
    //               className="w-10 rounded-lg bg-blue-500"
    //               style={{ paddingTop: "4px" }}
    //             />
    //           </h1>
    //           <div className="w-[150px] h-[50px] google-btnn  cursor-pointer">
    //             <img
    //               src={GooglePlay}
    //               alt=""
    //               className="h-[100%] w-[100%]  rounded-lg shadow-xl shadow-black "
    //             />
    //           </div>
    //         </div>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
    <div className="w-[100%] h-[8rem] fooer-bg-Img bg-[#170F2C]">
      <div className="flex  mx-auto flex flex-column justify-equal footer-width">
        <div className="flex footer-tabs w-100">
          <div className="w-[82%] flex justify-between">
            <ul className="w-full flex flex-wrap items-center gap-[10px]">
              <li className="text-white flex-shrink-0 cursor-pointer">
                <a onClick={handleCLickAbout}> About us</a>
              </li>
              <li className="text-white flex-shrink-0 cursor-pointer">
                <a onClick={handleCLickTerms}> Terms Of Use</a>
              </li>
              <li className="text-white flex-shrink-0 cursor-pointer">
                <a onClick={handleCLickPrivacy}> Privacy Policy</a>
              </li>
              <li className="text-white flex-shrink-0 cursor-pointer">
                <a onClick={handleCLickFAQ}> FAQ</a>
              </li>
              <li className="text-white flex-shrink-0 cursor-pointer">
                <a onClick={handleCLickContact}> Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img
              src={CreditCards}
              alt=""
              style={{ width: "250px", height: "40px" }}
            />
          </div>
        </div>
        <div>
          <p className="text-white footer-copy text-sm mt-4 mb-2">
            Copyright @ 2022 PixelSports.tv All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
