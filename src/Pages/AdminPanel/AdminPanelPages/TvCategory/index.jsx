import React from "react";
import { useNavigate } from "react-router-dom";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";

function TVCategory() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/admin/Tv_category/edit_category");
  };
  const handleCreateButtonClick = () => {
    navigate("/admin/tv_category/add_category");
  };
  return (
    <>
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
        <div className=" ml-5 mt-20 ">
          <div
            className="w-[82vw] edit-con bg-[#1C1C1E] mx-auto rounded p-5"
            style={{ position: "absolute", left: "16%" }}
          >
            <div class="relative overflow-x-auto shadow-md ">
              <div class="relative mt-1">
                <div class=" flex items-center  ">
                  <button
                    className="w-[120px] h-[4vh] bg-[#0EAC5C] font-medium rounded-md "
                    onClick={handleCreateButtonClick}
                  >
                    <span className="text-white text-sm dark:text-white">
                      {" "}
                      + Add Category
                    </span>
                  </button>
                </div>
              </div>

              <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class=" w-[78vw] text-xs text-gray-700  dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      Category Name
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
                      MLB
                    </th>
                    <td
                      class="px-6 py-4 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      <div className=" bg-[#0EAC5C] w-[60px] text-center rounded text-sm">
                        Active
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 dark:text-white border"
                      style={{ border: "1px solid #313133" }}
                    >
                      <div className="flex">
                        <button
                          className=" border relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
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
    </>
  );
}

export default TVCategory;
