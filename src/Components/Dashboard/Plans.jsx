import React, { useEffect, useState } from "react";
import avatar from "../../utils/images/avatar.png";
import plan from "../../utils/images/plan.png";
import { useNavigate } from "react-router-dom";
import getUserPayments from "../../api/getUserPayment";
function Plans({ userData }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  };
  const handleSelecPlanClick = () => {
    navigate("/membership_plan");
  };

  const data = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="md:px-40 bg-[#0D0620]  py-5">
      <div className="flex flex-row flex-wrap w-[80%] mx-auto dash-main justify-around text-white bg-[#130A2D] py-10 rounded  gap-5  ">
        <div className="flex flex-col justify-center items-center ">
          <img src={avatar} className="w-40"></img>
          <p className="pt-2">{data?.name}</p>
          <p>{data?.email}</p>
          <button
            class="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l text-white font-normal py-2 px-4 mt-2 rounded flex flex-row gap-2  justify-center items-center "
            onClick={handleClick}
          >
            <svg
              className="feather feather-edit "
              fill="none"
              height="16"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Edit
          </button>
        </div>
        <div
          className="flex flex-col gap-3 justify-start items-start w-[24vw] h-[25vh] dash-card p-3 bg-center rounded-xl"
          style={{
            backgroundColor: "#1F1340",
            backgroundImage: `url(${plan})`,
          }}
        >
          <p className="text-xl">
            My Subscription
            <div
              className="w-10 rounded-lg text-blue-500 bg-blue-500"
              style={{ paddingTop: "2px" }}
            />
          </p>
          <div className=" flex flex-col gap-3">
            <div className="flex ">
              <p>Current Plan:</p>
              <div className="w-auto flex items-center justify-center bg-[#362B53] rounded ml-2 p-1 px-3" style={{fontSize:'11px'}}>
                {userData?.[0]?.packageId?.name}
              </div>
            </div>
            <div className="flex ">
              <p>Subscription expires on:</p>
              <div className="w-auto  flex items-center justify-center bg-[#362B53] rounded ml-2 p-1 px-2" style={{fontSize:'11px'}}>
                {userData?.[0]?.createdAt &&
                  new Date(
                    new Date(userData?.[0]?.createdAt).getTime() +
                      userData?.[0]?.packageId?.days * 24 * 60 * 60 * 1000
                  ).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                {/* November, 01, 2023 */}
              </div>
            </div>

            <div>
              <button
                class="bg-gradient-to-r mt-2 from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l text-white font-normal py-2 px-4 rounded flex flex-row gap-2  justify-center items-center "
                onClick={handleSelecPlanClick}
              >
                Select Plan
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-3 justify-start items-start w-[20vw] h-[25vh] dash-card p-4 bg-center rounded-xl"
          style={{
            backgroundColor: "#1F1340",
            backgroundImage: `url(${plan})`,
          }}
        >
          <p className="text-xl">
            Last Invoice
            <div
              className="w-10 rounded-lg bg-blue-500"
              style={{ paddingTop: "2px" }}
            />
          </p>

          <div className="flex ">
            <p>Date:</p>
            <div className="w-auto  flex items-center justify-center bg-[#362B53] rounded ml-2 p-1 px-3" style={{fontSize:'12px'}}>
              {userData?.[0]?.createdAt?.split("T")[0]}
            </div>
          </div>
          <div className="flex ">
            <p>Plan: </p>
            <div className="w-auto  flex items-center justify-center bg-[#362B53] rounded ml-2 p-1 px-3" style={{fontSize:'12px'}}>
              {userData?.[0]?.packageId.name}
            </div>
          </div>
          <div className="flex ">
            <p>Amount:</p>
            <div className="w-auto  flex items-center justify-center bg-[#362B53] rounded ml-2 p-1 px-3" style={{fontSize:'12px'}}>
              $ {userData?.[0]?.packageId.amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
