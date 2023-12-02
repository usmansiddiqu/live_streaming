import React, { useEffect } from "react";
import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

function AddCoupons() {
  useEffect(() => {
    const picker = new Pikaday({
      field: document.getElementById("expiry_date"),
      format: "MM/DD/YYYY",
      yearRange: [new Date().getFullYear(), new Date().getFullYear() + 10],
    });

    return () => {
      picker.destroy();
    };
  }, []);
  return (
    <div
      style={{
        background: "black",
        position: "absolute",
        // left: "10%",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        margin: "auto",
      }}
    >
      <div className=" mt-20 ">
        <div
          className="w-[80vw] edit-con bg-[#1C1C1E]  rounded p-5"
          style={{ position: "absolute", left: "17%" }}
        >
          <form class="max-w-sm ">
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="text"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Coupon Code*
              </label>
              <input
                type="text"
                id="text"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                placeholder="MLB"
                value="MLB"
                required
              />
            </div>
            <div class="mb-5 input-feild-image w-[60vw]  flex items-center justify-evenly">
              <label
                for="email"
                class="block mb-2 text-sm font-medium w-[17.5vw] text-gray-900 text-white "
              ></label>
              <div className="w-full">
                <button className="w-[80px] h-[4vh] bg-[#0EAC5C] font-medium rounded-md flex items-center justify-center">
                  <span className="text-white text-sm dark:text-white">
                    Generate
                  </span>
                </button>
              </div>
            </div>

            <div class=" input-feild w-[72vw] flex  mb-5">
              <label
                for="countries"
                class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
              >
                Plan*
              </label>
              <select
                id="countries"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
              >
                <option>Active</option>
              </select>
            </div>

            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="text"
                class="block input-feild-label  mb-2 text-sm font-medium w-[17vw] text-gray-900 text-white"
              >
                Number of Users Allow*
              </label>
              <input
                type="text"
                id="text"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                placeholder="MLB"
                value="MLB"
                required
              />
            </div>
            <div className="mb-5 input-feild w-[72vw] flex">
              <label
                htmlFor="expiry_date"
                className="block input-feild-label mb-2 text-sm font-medium  w-[17vw] text-gray-900 text-white"
              >
                Expiry Date*
              </label>
              <input
                type="text"
                id="expiry_date"
                className="border-0 text-gray-900 text-sm rounded focus:ring-0 block w-full p-2.5 text-white font-bold bg-[#48484A]"
                required
              />
            </div>
            <div class="mb-5 input-feild w-[72vw] flex  ">
              <label
                for="countries"
                class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[17vw]"
              >
                TV Channel
              </label>
              <select
                id="countries"
                class=" border-0 text-gray-900 text-sm rounded focus:ring-0 bg-[#48484A] block w-full p-2.5 font-bold text-white"
              >
                <option>Active</option>
              </select>
            </div>
            <div class="mb-5 input-feild w-[72vw] flex">
              <label
                for="countries"
                class="block mb-2 input-feild-label  text-sm font-medium text-gray-900 dark:text-white w-[13.5vw]"
              ></label>
              <button
                type="submit"
                class="text-white  bg-[#FF0015] text-sm font-bold rounded-md text-sm w-[70px]  sm:w-auto px-3 py-1.5 text-center "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCoupons;
