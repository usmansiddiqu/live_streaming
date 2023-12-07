import React from "react";
import { useNavigate, useParams } from "react-router";

function UserHistory() {
  const params = useParams();
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
        <div className="flex flex-col">
          <div
            className="w-[83vw] main-user-container flex  mx-auto rounded p-5"
            style={{ position: "relative", left: "7%" }}
          >
            <div className="w-[65%]  bg-[#1C1C1E] user-edit flex justify-between rounded p-5">
              <img src="" alt="" className="w-[200px] h-[200px] border-[5px]" />
              <div className="user-info flex justify-between w-[45vw]  p-4">
                <div>
                  <h1 className="text-lg text-white font-bold">Matt</h1>
                  <div className="flex items-center">
                    <h1 className="text-md text-white font-bold">Email :</h1>
                    <h2 className="text-sm text-white ml-2">
                      mbrown4487@yahoo.com
                    </h2>
                  </div>
                  <div className="flex items-center mb-5">
                    <h1 className="text-md text-white font-bold">Phone :</h1>
                    <h2 className="text-sm text-white ml-2"></h2>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-md text-white font-bold">Address :</h1>
                    <h2 className="text-sm text-white ml-2"></h2>
                  </div>
                </div>
                <div>
                  <div className="active-user-btn bg-[#0EAC5C] w-[60px] text-center text-white rounded text-sm">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[33vw] Useredit-side bg-[#1C1C1E] ml-5 flex flex-col rounded p-5">
              <h1 className="text-white font-bold mb-5">Subscription Plan</h1>
              <div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr class="bg-white border-b dark:bg-[#444548] dark:border-[white] hover:bg-gray-50 dark:hover:bg-[#282A2D]">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex items-center sub-type w-[12vw]  justify-between ">
                          <div className="w-[5vw] ">
                            <div className="w-[10px] h-[10px] bg-[#FF0015] rounded-full"></div>
                          </div>
                          <div className="w-[100%]  text-start">
                            <h3>
                              Free Service - No Card Required
                              <br />
                              <p className="mt-1 text-xs">Current Plan</p>
                            </h3>
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr class="bg-white border-b border-[0.5px] dark:bg-[#444548]  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#282A2D]">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex items-center sub-type w-[8vw] ">
                          <div className="w-[5vw] ">
                            <div className="w-[10px] h-[10px] bg-[#10C469] rounded-full"></div>
                          </div>
                          <div className="w-[100%]  text-start">
                            <h3>
                              December,03,2023
                              <br />
                              <p className="mt-1 text-xs">
                                Subscription expires on
                              </p>
                            </h3>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="bg-[#1C1C1E] user-transaction p-4 w-[81vw] rounded relative overflow-x-auto shadow-md "
            style={{ position: "relative", left: "16.5%" }}
          >
            <h1 className="text-white font-bold">User Transactions</h1>
            <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class=" w-[78vw] text-xs text-gray-700  dark:text-gray-400">
                <tr>
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
        </div>
      </div>
    </div>
  );
}

export default UserHistory;
