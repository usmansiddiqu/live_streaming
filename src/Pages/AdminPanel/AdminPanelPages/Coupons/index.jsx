import React, { useEffect, useState } from "react";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import { useNavigate } from "react-router-dom";
import { deleteCoupon, getCoupons } from "../../../../api/coupon.api";

function Coupons() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const handleButtonClick = (id) => {
    navigate(`/admin/coupons/editcoupon/${id}`);
  };
  const handleCreateButtonClick = () => {
    navigate("/admin/coupons/addcoupon");
  };
  const getData = async () => {
    const { data: response } = await getCoupons();
    setData(response.data);
  };

  const deleteHandler = async (id) => {
    await deleteCoupon(id);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        background: "black",
        position: "relative",
        // left: "14%",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <div className=" ml-4 mt-20 ">
        <div>
          <div
            className="w-[80vw] box edit-con bg-[#1C1C1E] mx-auto rounded p-5"
            style={{ position: "absolute", left: "16.5%" }}
          >
            <div class="relative overflow-x-auto shadow-md ">
              <button
                className="w-[120px] h-[4vh] Add-tv bg-[#0EAC5C] font-medium rounded-md "
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
                  {data ? (
                    data.map((coupon) => (
                      <tr>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap"
                          style={{ border: "1px solid #313133" }}
                        >
                          {coupon.code}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {coupon.plan.name}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {coupon.totalNumberOfUses}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {coupon.numberOfUses}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {coupon.expiryDate.split("T")[0]}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {coupon.status ? "Active" : "Inactive"}
                        </th>
                        <td
                          class="px-6 py-4 dark:text-white border"
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">
                            <button
                              className="  ml-3  relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                              onClick={() => handleButtonClick(coupon._id)}
                            >
                              <img
                                src={Edit}
                                alt=""
                                className="w-[16px] h-[16px] m-auto"
                              />
                            </button>
                            <button
                              onClick={() => deleteHandler(coupon._id)}
                              className="ml-3 w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]"
                            >
                              <img
                                src={Cross}
                                alt=""
                                className="w-[10px] h-[10px] m-auto"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
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
