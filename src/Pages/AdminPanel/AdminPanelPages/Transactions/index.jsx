import React, { useState } from "react";
import TransactionTable from "../../../../Components/TransactionTable";

function Transactions() {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <div
      style={{
        background: "black",
        position: "absolute",
        left: "14%",
        width: "85vw",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div className=" ml-4 mt-20 ">
        <div>
          <div className="w-[81vw] bg-[#1C1C1E] ml-6 rounded p-5">
            <div class="relative overflow-x-auto shadow-md ">
              <div>
                <div class="relative mt-1">
                  <div class=" flex items-center w-[70%] justify-between flex-column flex-wrap md:flex-row md:space-y-0 pb-4   ">
                    <div className="bg-[#313133] rounded">
                      <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        class="inline-flex items-center w-[310px] bg-[#313133] justify-between text-white border-0 font-medium rounded-lg text-sm px-3 py-2.5 "
                        type="button"
                      >
                        <span class="sr-only">Filter by Gateway</span>
                        Filter by Gateway
                        <svg
                          class="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        id="dropdownAction"
                        class="z-10 hidden bg-white w-[310px] top-0 shadow w-44 dark:divide-gray-600"
                      >
                        <ul
                          class="text-sm text-black"
                          aria-labelledby="dropdownActionButton"
                        >
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 text-[#6C757D] bg-[#ddd]  dark:hover:bg-[#FF0015] dark:hover:text-white"
                            >
                              Filter by Gateway
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                            >
                              NowPayments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <label for="table-search" class="sr-only">
                      Search
                    </label>
                    <div class="relative flex justify-between w-80 rounded-full bg-[#313133]">
                      <input
                        type="text"
                        id="table-search-users"
                        class=" ps-5 text-sm py-3 border-0  text-[#6C757D] text-xs  bg-[#313133] rounded-full w-80 "
                        placeholder="Search by Payment ID or Email"
                      />
                      <div class="absolute bottom-0 right-0  flex items-center pointer-events-none mr-5 mb-3">
                        <svg
                          class="w-3 h-3 text-white dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div class="relative flex justify-between w-60 rounded-full bg-[#313133]">
                      <input
                        type="text"
                        id="table-search-users"
                        class=" ps-5 text-sm py-3 border-0 outline-none text-[#6C757D] text-xs  bg-[#313133] rounded-full w-60 "
                        placeholder="mm/dd/yy"
                      />
                      <div class="absolute bottom-0 right-0  flex items-center pointer-events-none mr-5 mb-3">
                        <svg
                          class="w-3 h-3 text-white dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
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
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Email
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
                      Amount
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Payment Gateway
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Payment ID
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Payment Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-600"
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
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Nov 24 2023 03:13 AM
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav
              className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
              aria-label="Table navigation"
            >
              <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-[#464648] bg-[#313133] dark:hover:bg-[#FF0015] dark:text-white ${
                      activeItem === 0 ? "bg-gray-700 dark:bg-[#FF0015]" : ""
                    }`}
                    onClick={() => handleItemClick(0)}
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#464648] bg-[#313133] dark:hover:bg-[#FF0015]  dark:text-white ${
                      activeItem === 1 ? "bg-gray-700 dark:bg-[#FF0015]" : ""
                    }`}
                    onClick={() => handleItemClick(1)}
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#464648] bg-[#313133] dark:hover:bg-[#FF0015]  dark:text-white ${
                      activeItem === 2 ? "bg-gray-700 dark:bg-[#FF0015]" : ""
                    }`}
                    onClick={() => handleItemClick(2)}
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#464648] bg-[#313133] dark:hover:bg-[#FF0015]  dark:text-white ${
                      activeItem === 3 ? "bg-gray-700 dark:bg-[#FF0015]" : ""
                    }`}
                    onClick={() => handleItemClick(3)}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
