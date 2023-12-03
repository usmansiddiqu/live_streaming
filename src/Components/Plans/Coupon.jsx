import React, { useState } from "react";
import plan from "../../utils/images/plan.png";
import { availCoupon } from "../../api/coupon.api";
import { ToastContainer, toast } from "react-toastify";

function Coupon() {
  const [coupon, setCoupon] = useState("");
  const applyCoupon = async () => {
    const { data: response } = await availCoupon(coupon);
    toast.success(response.message);
    setCoupon("");
  };
  return (
    <div className="lg:px-20 md:px-10 w-[83vw]  mx-auto sm:px-7 px-5 bg-[#0D0620] pt-0 pb-5 md:ps-20 text-white">
      <ToastContainer />
      <div
        className="flex flex-col ml-19 gap-5 justify-center items-center md:ps-7 pt-4 pb-4 md:w-[34rem] h-48 bg-center rounded-xl"
        style={{
          backgroundColor: "#1F1340",
          backgroundImage: `url(${plan})`,
        }}
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-xl md:text-2xl">I Have Coupon Code</p>
          <div
            className="w-12 rounded-lg bg-blue-500"
            style={{ paddingTop: "4px" }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
          <input
            onChange={(e) => setCoupon(e.target.value)}
            onPaste={(e) => setCoupon(e.target.value)}
            value={coupon}
            className="w-full md:w-64 h-12 px-2 bg-[#22134E] border-[#34226A]  focus:outline-none focus:border-[#34226A] focus:ring-4 focus:ring-[#1A2A6F] border-2 rounded-md"
          ></input>
          <button
            onClick={applyCoupon}
            className="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l  text-white font-normal py-2 px-4 rounded flex flex-row gap-2  justify-center items-center md:mt-0 "
          >
            APPLY COUPON
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
