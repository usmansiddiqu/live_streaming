import React from "react";
import AssignLiveTvTable from "../../../../Components/AssignLiveTvTable";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import { useNavigate } from "react-router-dom";

function AssignLiveTv() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/admin/assign_live_tv/assign_tv_edit");
  };
  return (
    <>
      <div
        style={{
          background: "black",
          position: "relative",
          width: "100%",
          height: "100%",
          overflowY: "Scroll",
        }}
      >
        <div className=" ml-4 mt-20 ">
          <div
            className="w-[80vw] edit-con bg-[#1C1C1E] mx-auto rounded p-5"
            style={{ position: "absolute", left: "14%" }}
          >
            <div class="relative overflow-x-auto shadow-md">
              <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class=" w-[78vw] text-xs text-gray-700  dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      TV Channel
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Cincinnati Bengals at Baltimore Ravens
                    </th>
                    <td
                      class="px-6 py-4 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      <div className=" rounded text-sm">
                        2023-11-17T01:15:00Z
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      NFL
                    </td>
                    <td
                      class="px-6 py-4 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Baltimore Ravens Live
                    </td>
                    <td
                      class="px-6 py-4 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      <div className="flex">
                        <button
                          className=" relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                          onClick={handleButtonClick}
                        >
                          <img
                            src={Edit}
                            alt=""
                            className="w-[16px] h-[16px] m-auto"
                          />
                        </button>
                        <button className="ml-3 w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]">
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
    </>
  );
}

export default AssignLiveTv;
