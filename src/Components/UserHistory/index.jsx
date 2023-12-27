import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import authGetUserHistory from "../../api/authGetUserHistory";
import { url } from "../../helper/url";

function UserHistory() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [user, setUser] = useState();
  const getData = async () => {
    const { data: response } = await authGetUserHistory(params.id);
    setData(response?.data);
    setUser(response?.data?.user);
  };
  useEffect(() => {
    getData();
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
      <div className=" mt-10 ">
        <div className="flex flex-col">
          <div
            className="w-[86vw] main-user-container flex  mx-auto rounded p-5"
            style={{ position: "relative", left: "7%" }}
          >
            <div className="w-[65%] userhisotryy h-[23vh] bg-[#1C1C1E] user-edit flex justify-between rounded p-3">
              <div className="w-[200px] h-[170px] border-[5px] user-img">
                <img
                  src={
                    url +
                    "\\" +
                    data?.user?.image
                      ?.replace("uploads\\", "")
                      ?.replace("uploads/", "")
                  }
                  alt=""
                  className="w-[100%] h-[100%]"
                />
              </div>
              <div className="user-info flex justify-between w-[45vw]  p-4">
                <div>
                  <h1 className="text-lg text-white font-bold">
                    {data?.user?.name}
                  </h1>
                  <div className="flex items-center">
                    <h1 className="text-md text-white font-bold">Email :</h1>
                    <h2 className="text-sm text-white ml-2">
                      {data?.user?.email}
                    </h2>
                  </div>
                  <div className="flex items-center mb-1">
                    <h1 className="text-md text-white font-bold">Phone :</h1>
                    <h2 className="text-sm text-white ml-2">
                      {data?.user?.phone}
                    </h2>
                  </div>
                  <div className="flex items-center ">
                    <h1 className="text-md text-white font-bold adress">
                      Address :
                    </h1>
                    <h2 className="text-xs text-white ml-2 address-ip">
                      {"123 Main Street, Cityville, Country"
                        .match(/.{1,50}/g)
                        .map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="active-user-btn bg-[#0EAC5C] w-[60px] text-center text-white rounded text-sm">
                    {data?.user?.status}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[33vw] h-[21vh] Useredit-side bg-[#1C1C1E] ml-5 flex flex-col rounded p-3">
              <h1 className="text-white font-bold mb-4">Subscription Plan</h1>
              <div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 text-gray-400  ">
                  <tbody>
                    <tr class="bg-white border-b ">
                      <th
                        scope="row"
                        class="px-6 py-2 font-medium bg-[#444548] whitespace-nowrap text-white"
                      >
                        <div className="flex items-center sub-type w-[12vw]  justify-between ">
                          <div className="w-[1.7vw] ">
                            <div className="w-[10px] h-[10px] bg-[#FF0015] rounded-full"></div>
                          </div>
                          <div className="w-[100%]  text-start">
                            <h3>
                              {data?.payments.length
                                ? data?.payments?.[0].packageId?.name
                                : "No Service Availed"}

                              <br />
                              <p className="mt-1 text-xs">Current Plan</p>
                            </h3>
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr class="bg-white  ">
                      <th
                        scope="row"
                        class="px-6 py-2 bg-[#444548] font-medium  whitespace-nowrap text-white"
                      >
                        <div className="flex items-center sub-type w-[8vw] ">
                          <div className="w-[5vw] ">
                            <div className="w-[10px] h-[10px] bg-[#10C469] rounded-full"></div>
                          </div>
                          <div className="w-[100%]  text-start">
                            <h3>
                              {data?.payments.length
                                ? new Date(
                                    new Date(
                                      data?.payments?.[0].createdAt
                                    ).getTime() +
                                      data?.payments?.[0].packageId?.days *
                                        24 *
                                        60 *
                                        60 *
                                        1000
                                  ).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  })
                                : "No Service Availed"}
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
            <table class="w-full mt-5 text-sm text-left rtl:text-right text-white ">
              <thead class=" w-[78vw] text-xs text-white">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Plan
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Payment Gateway
                  </th>

                  <th
                    scope="col"
                    class="px-6 py-3 text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Payment ID
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-white"
                    style={{ border: "1px solid #313133" }}
                  >
                    Payment Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.payments?.length ? (
                  data?.payments?.map((data) => {
                    return (
                      <tr>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {user?.email}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {data?.packageId?.name}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          $ {data?.packageId?.amount}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {data?.packageId?.amount ? "PayCEC" : "-"}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          $ {data?._id}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {data?.createdAt}
                        </th>
                      </tr>
                    );
                  })
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHistory;
