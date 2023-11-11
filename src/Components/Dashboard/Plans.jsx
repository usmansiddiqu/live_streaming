import React from "react";
import avatar from "../../utils/images/avatar.png";
import plan from "../../utils/images/plan.png";
function Plans() {
  return (
    <div className="md:px-40 bg-[#0D0620]  py-5">
      <div className="flex flex-row flex-wrap  justify-around text-white bg-[#130A2D] py-10 rounded  gap-5 px-5 xl:px-2 lg:px-0 ">
        <div className="flex flex-col justify-center items-center ">
          <img src={avatar} className="w-40"></img>
          <p className="pt-2">Username</p>
          <p>something@example.com</p>
          <button class="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l text-white font-normal py-2 px-4 mt-2 rounded flex flex-row gap-2  justify-center items-center ">
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
          className="flex flex-col gap-8 justify-start items-start ps-7 pt-4 w-[34rem] lg:w-[29rem] xl:w-[26rem] h-56 bg-center rounded-xl"
          style={{
            backgroundColor: "#1F1340",
            backgroundImage: `url(${plan})`,
          }}
        >
          <p className="text-xl">
            My Subscription
            <hr
              className="w-10 rounded-lg bg-blue-500"
              style={{ paddingTop: "2px" }}
            />
          </p>

          <button class="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l text-white font-normal py-2 px-4 rounded flex flex-row gap-2  justify-center items-center ">
            Select Plan
          </button>
        </div>

        <div
          className="flex flex-col gap-3 justify-start items-start ps-7 pt-4 w-[34rem] lg:w-[29rem] xl:w-[26rem] h-56 bg-center rounded-xl"
          style={{
            backgroundColor: "#1F1340",
            backgroundImage: `url(${plan})`,
          }}
        >
          <p className="text-xl">
            Last Invoice
            <hr
              className="w-10 rounded-lg bg-blue-500"
              style={{ paddingTop: "2px" }}
            />
          </p>

          <p>Date:</p>
          <p>Plan:</p>
          <p>Amount:</p>
        </div>
      </div>
    </div>
  );
}

export default Plans;
