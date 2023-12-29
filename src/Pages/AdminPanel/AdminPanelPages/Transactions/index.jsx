import React, { useEffect, useState } from "react";
import getTransactions from "../../../../api/transaction.api";
import getTransaction from "../../../../api/getTransactions";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Transactions() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(1);
  const [data, setData] = useState([]);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const [textFilter, setTextFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [skip, setSkip] = useState(1);

  // const getData = async () => {
  //   const { data: response } = await getTransactions();
  //   console.log(response.data);
  //   setData(response.data);
  // };
  const filter = (e) => {
    if (textFilter.length > e) {
      getData();
    }
    let transaction = [...data];
    if (textFilter.length >= 2) {
      transaction = transaction
        .filter((payment) => {
          if (dateFilter) {
            const currentDate = new Date(payment?.updatedAt);

            const formattedDate = currentDate.toISOString().slice(0, 10);
            return formattedDate == dateFilter;
          } else return true;
        })
        .filter((payment) => {
          if (textFilter) {
            return (
              payment?.userId?.email?.includes(textFilter) ||
              payment?.token?.includes(textFilter)
            );
          } else {
            return true;
          }
        });

      setData(transaction);
    }
  };
  const handlePreviousClick = () => {
    if (skip > 1) {
      setSkip(skip - 1);
    }
  };

  const handleNextClick = () => {
    setSkip(skip + 1);
  };
  const getData = async () => {
    try {
      const { data: response } = await getTransaction(skip, textFilter);
      setData(response.data.userPayments);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    getData();
  }, [textFilter, skip]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalItems = data.length;
  const paginate = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  // const handlePreviousClick = () => {
  //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  // };

  // const handleNextClick = () => {
  //   setCurrentPage((prevPage) =>
  //     Math.min(prevPage + 1, Math.ceil(totalItems / itemsPerPage))
  //   );
  // };
  const handleTextFilter = (e) => {
    setTextFilter(e.target.value);
    filter(e.target.value);
  };
  const handleDateChange = (e) => {
    setDateFilter(e.target.value);
    filter(e.target.value);
  };
  const handleTextPaste = (e) => {
    setTextFilter(e?.clipboardData?.getData("text"));
    filter(e?.clipboardData?.getData("text"));
  };
  const paginatedData = paginate(currentPage);
  const handleUserClick = (payment) => {
    navigate(`/admin/users/history/${payment?.userId?._id}`);
  };
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
            <div class="relative overflow-x-auto shadow-md edit-contain">
              <div>
                <div class="relative mt-1">
                  <div class=" flex items-center  w-[55%]  search-bar-for-transaction  justify-between flex-wrap md:flex-row md:space-y-0 pb-4   ">
                    <label for="table-search" class="sr-only">
                      Search
                    </label>
                    <div class="relative flex justify-between w-[28vw] search-bar-for-transaction  rounded-full bg-[#313133]">
                      <input
                        type="text"
                        id="table-search-users"
                        class=" ps-5 text-sm py-3 border-0 placeholder:text-white  text-white text-xs   bg-[#313133] rounded-full w-full "
                        placeholder="Search by Email"
                        onPaste={(e) => {
                          handleTextPaste(e);
                        }}
                        onChange={(e) => handleTextFilter(e)}
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

                    <div class="relative flex justify-between table-search-user  w-60 rounded-full bg-[#313133]">
                      <input
                        type="date"
                        id="table-search-users"
                        class=" ps-5 text-sm py-3 border-0 outline-none text-white text-xs  bg-[#313133] rounded-full w-60 "
                        placeholder="mm/dd/yy"
                        onChange={(e) => handleDateChange(e)}
                      />
                      {/* <div class="absolute bottom-0 right-0  flex items-center pointer-events-none mr-5 mb-3">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <table class="w-full mt-5 text-sm text-left rtl:text-right text-white">
                <thead class=" w-[78vw] text-xs text-white">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      Name
                    </th>
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
                  {/* {paginatedData
                    ?.filter((payment) => {
                      if (dateFilter) {
                        const currentDate = new Date(payment?.updatedAt);

                        const formattedDate = currentDate
                          .toISOString()
                          .slice(0, 10);
                        return formattedDate == dateFilter;
                      } else return true;
                    })
                    ?.filter((payment) => {
                      if (textFilter) {
                        return (
                          payment?.userId?.email?.includes(textFilter) ||
                          payment?.token?.includes(textFilter)
                        );
                      } else {
                        return true;
                      }
                    }) */}
                  {data?.map((payment) => (
                    <tr>
                      {console.log(payment)}
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium  whitespace-nowrap cursor-pointer text-blue-600"
                        style={{ border: "1px solid #313133" }}
                        onClick={() => {
                          handleUserClick(payment);
                        }}
                      >
                        {payment?.userdata[0]?.name}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        {payment?.userdata[0]?.email}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        {payment?.packagedata[0]?.name}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        ${payment?.packagedata[0]?.amount}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        PAYCEC
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        {payment?.token ? payment?.token : ""}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                        style={{ border: "1px solid #313133" }}
                      >
                        {new Date(payment?.updatedAt).toLocaleString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                      </th>
                    </tr>
                  ))}
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
                    className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-[#464648] bg-[#313133] hover:bg-[#FF0015] cursor-pointer text-white ${
                      activeItem === 0 ? "bg-gray-700 dark:bg-[#FF0015]" : ""
                    }`}
                    onClick={() => handlePreviousClick()}
                  >
                    Previous
                  </a>
                </li>

                <li>
                  <a
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#464648] bg-[#313133] hover:bg-[#FF0015] cursor-pointer text-white ${
                      activeItem === 3 ? "bg-gray-700 dark:bg-[#FF0015]" : ""
                    }`}
                    onClick={() => handleNextClick()}
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
