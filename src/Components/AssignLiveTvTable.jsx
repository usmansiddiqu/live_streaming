import React from "react";

function AssignLiveTvTable() {
  return (
    <>
      <div className=" ml-4 mt-20 ">
        <div className="w-[81vw] bg-[#1C1C1E] ml-6 rounded p-5">
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
                    <div className=" rounded text-sm">2023-11-17T01:15:00Z</div>
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
                    <div className="relative inline-block group">
                      <button className=" border relative z-10 hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]">
                        Edit
                      </button>
                      <button className="ml-3 border relative z-10 hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]">
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignLiveTvTable;
