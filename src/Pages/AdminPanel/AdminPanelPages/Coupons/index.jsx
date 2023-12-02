import React from "react";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import { useNavigate } from "react-router-dom";

function Coupons() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/admin/users/edit_user");
  };
  const handleCreateButtonClick = () => {
    navigate("/admin/coupons/addcoupon");
  };
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
      <div className=" ml-4 mt-20 ">
        <div>
          <div
            className="w-[80vw] edit-con bg-[#1C1C1E] mx-auto rounded p-5"
            style={{ position: "absolute", left: "17%" }}
          >
            <div class="relative overflow-x-auto shadow-md ">
              <button
                className="w-[120px] h-[4vh] bg-[#0EAC5C] font-medium rounded-md "
                onClick={handleCreateButtonClick}
              >
                <span className="text-white text-sm dark:text-white">
                  + Add Coupons
                </span>
              </button>
              <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class=" w-[78vw] text-xs text-gray-700  dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      Coupons
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Plan
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Number of Users Allow
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Coupon Used
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Expiry Date
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap"
                      style={{ border: "1px solid #313133" }}
                    >
                      Greg
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      greg@tt.com
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Free Service - No Card required
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      $ 0.00
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      NA
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      -
                    </th>
                    <td
                      class="px-6 py-4 dark:text-white border"
                      style={{ border: "1px solid #313133" }}
                    >
                      <div className="flex">
                        <button
                          className=" border  ml-3  relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                          onClick={handleButtonClick}
                        >
                          <img
                            src={Edit}
                            alt=""
                            className="w-[16px] h-[16px] m-auto"
                          />
                        </button>
                        <button className="ml-3 border w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]">
                          <img
                            src={Cross}
                            alt=""
                            className="w-[10px] h-[10px] m-auto"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
