import React from "react";
import plan from "../../utils/images/plan.png";
function PlanCards() {
  return (
    <div className="px-40 bg-[#0D0620] pt-5 pb-[30px] text-white flex flex-row justify-around gap-8 ">
      <div
        className="flex flex-col gap-3   w-[22rem] h-64 bg-center rounded-xl"
        style={{
          backgroundColor: "#1F1340",
          backgroundImage: `url(${plan})`,
        }}
      >
        <div className="flex justify-start items-start">
          <div className="bg-gradient-to-r from-[#00C5FF] to-[#0074FF] w-full rounded-tr-xl rounded-tl-xl flex justify-center items-center h-12 text-xl font-semibold">
            Basic Service
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <p className="text-4xl font-bold">
            <span className="text-xl font-bold">$</span>
            10
            <span className="text-xl font-bold">.00</span>
          </p>
          <hr
            className="w-14 rounded-lg bg-blue-500"
            style={{ paddingTop: "4px", marginTop: "4px" }}
          />
          <div>
            <p className="text-lg mt-3">
              <span>7</span> <span>Day</span> (<span>s</span>)
            </p>
          </div>
          <button class="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l  text-white font-normal py-2 px-4 rounded flex flex-row gap-2  justify-center items-center mt-3 ">
            Select Plan
          </button>
        </div>
      </div>
      <div
        className="flex flex-col gap-3   w-[22rem] h-64 bg-center rounded-xl"
        style={{
          backgroundColor: "#1F1340",
          backgroundImage: `url(${plan})`,
        }}
      >
        <div className="flex justify-start items-start">
          <div className="bg-gradient-to-r from-[#00C5FF] to-[#0074FF] w-full rounded-tr-xl rounded-tl-xl flex justify-center items-center h-12 text-xl font-semibold">
            Basic Service
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <p className="text-4xl font-bold">
            <span className="text-xl font-bold">$</span>
            10
            <span className="text-xl font-bold">.00</span>
          </p>
          <hr
            className="w-14 rounded-lg bg-blue-500"
            style={{ paddingTop: "4px", marginTop: "4px" }}
          />
          <div>
            <p className="text-lg mt-3">
              <span>7</span> <span>Day</span> (<span>s</span>)
            </p>
          </div>
          <button class="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l  text-white font-normal py-2 px-4 rounded flex flex-row gap-2  justify-center items-center mt-3 ">
            Select Plan
          </button>
        </div>
      </div>
      <div
        className="flex flex-col gap-3   w-[22rem] h-64 bg-center rounded-xl"
        style={{
          backgroundColor: "#1F1340",
          backgroundImage: `url(${plan})`,
        }}
      >
        <div className="flex justify-start items-start">
          <div className="bg-gradient-to-r from-[#00C5FF] to-[#0074FF] w-full rounded-tr-xl rounded-tl-xl flex justify-center items-center h-12 text-xl font-semibold">
            Basic Service
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <p className="text-4xl font-bold">
            <span className="text-xl font-bold">$</span>
            10
            <span className="text-xl font-bold">.00</span>
          </p>
          <hr
            className="w-14 rounded-lg bg-blue-500"
            style={{ paddingTop: "4px", marginTop: "4px" }}
          />
          <div>
            <p className="text-lg mt-3">
              <span>7</span> <span>Day</span> (<span>s</span>)
            </p>
          </div>
          <button class="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l  text-white font-normal py-2 px-4 rounded flex flex-row gap-2  justify-center items-center mt-3 ">
            Select Plan
          </button>
        </div>
      </div>
      <div
        className="flex flex-col gap-3   w-[22rem] h-64 bg-center rounded-xl"
        style={{
          backgroundColor: "#1F1340",
          backgroundImage: `url(${plan})`,
        }}
      >
        <div className="flex justify-start items-start">
          <div className="bg-gradient-to-r from-[#00C5FF] to-[#0074FF] w-full rounded-tr-xl rounded-tl-xl flex justify-center items-center h-12 text-xl font-semibold">
            Basic Service
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <p className="text-4xl font-bold">
            <span className="text-xl font-bold">$</span>
            10
            <span className="text-xl font-bold">.00</span>
          </p>
          <hr
            className="w-14 rounded-lg bg-blue-500"
            style={{ paddingTop: "4px", marginTop: "4px" }}
          />
          <div>
            <p className="text-lg mt-3">
              <span>7</span> <span>Day</span> (<span>s</span>)
            </p>
          </div>
          <button class="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] hover:bg-gradient-to-l  text-white font-normal py-2 px-4 rounded flex flex-row gap-2  justify-center items-center mt-3 ">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanCards;
