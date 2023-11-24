import React from "react";

function TVCategoryTable() {
  return (
    <div className=" ml-4 mt-20 ">
      <div className="w-[81vw] bg-[#1C1C1E] ml-6 rounded p-5">
        <div class="relative overflow-x-auto shadow-md ">
          <div class="relative mt-1">
            <div class=" flex items-center  ">
              <button className="w-[120px] h-[4vh] bg-[#0EAC5C] font-medium rounded-md ">
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
                  class="px-6 py-4 dark:text-white"
                  style={{ border: "1px solid #313133" }}
                >
                  Laptop
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TVCategoryTable;
