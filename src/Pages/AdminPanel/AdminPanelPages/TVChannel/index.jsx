import React, { useEffect, useState } from "react";
import tvchannel from "../../../../Assets/Images/nba poster.webp";
import { useNavigate } from "react-router-dom";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import ErrorComponent from "../../../../Components/Common/ErrorComponent";
import {
  getChannel,
  deleteSpecificChannel,
} from "../../../../api/tvChannel.api";

function TVChannel() {
  const [activeItem, setActiveItem] = useState(1);
  const [channel, setChannel] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalItems = channel.length;
  const paginate = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return channel.slice(startIndex, endIndex);
  };
  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(totalItems / itemsPerPage))
    );
  };

  const handleButtonClick = (chnl) => {
    navigate(`/admin/live_tv/edit_live_tv/${chnl._id}`);
  };
  const handleCreateButtonClick = () => {
    navigate("/admin/live_tv/add_live_tv");
  };
  const getChannels = async () => {
    const { data: response } = await getChannel();
    console.log(response.live);
    setChannel(response.liveTVs);
  };
  const paginatedData = paginate(currentPage);
  const handleDelete = async (chnl) => {
    try {
      const { data: response } = await deleteSpecificChannel(chnl._id);
      getChannels();
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div
      style={{
        background: "black",
        position: "relative",
        // left: "10%",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <div className=" ml-4 mt-20 ">
        <div>
          <div
            className="w-[80vw] edit-con bg-[#1C1C1E]  mx-auto rounded p-5"
            style={{ position: "absolute", left: "17%" }}
          >
            <div class="relative overflow-x-auto shadow-md ">
              {error && <ErrorComponent message={error} />}
              <div>
                <div class="relative mt-1">
                  <div class=" flex items-center w-[60%] justify-between flex-column flex-wrap md:flex-row md:space-y-0 pb-4   ">
                    <div className="bg-[#313133] rounded">
                      <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        class="inline-flex items-center w-[310px] bg-[#313133] justify-between text-white border-0 font-medium rounded-lg text-sm px-3 py-2.5 "
                        type="button"
                      >
                        <span class="sr-only">Filter by category</span>
                        Filter by category
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
                          <li className="p-2">
                            <input
                              type="text"
                              id="table-search-users"
                              class=" ps-5  text-sm w-full  text-[#6C757D] text-xs border "
                              placeholder="Search by title"
                            />
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 text-[#6C757D] bg-[#ddd]  dark:hover:bg-[#FF0015] dark:hover:text-white"
                            >
                              Filter by category
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                            >
                              MLB
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                            >
                              NBA
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                            >
                              NFL
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white"
                            >
                              NHL
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
                        placeholder="Search by title"
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

                    <button
                      className="w-[120px] h-[4vh] bg-[#0EAC5C] font-medium rounded-md "
                      onClick={handleCreateButtonClick}
                    >
                      <span className="text-white text-sm dark:text-white">
                        + Add Live TV
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <table
                class="w-full mt-5 text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400"
                style={{ overflow: "scroll" }}
              >
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
                      TV Logo
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 dark:text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Phone
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
                  {paginatedData.map((chnl) => {
                    return (
                      <tr>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {chnl?.TVCategory?.name}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          <img
                            src={tvchannel}
                            alt=""
                            className="w-[150px] h-[84px]"
                          />
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {chnl.TVAccess}
                        </th>
                        <td
                          class="px-6 py-4 dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className=" bg-[#0EAC5C] w-[60px] text-center rounded text-sm">
                            {chnl.status}
                          </div>
                        </td>
                        <td
                          class="px-6 py-4 dark:text-white border"
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">
                            <button
                              className=" relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                              onClick={() => {
                                handleButtonClick(chnl);
                              }}
                            >
                              <img
                                src={Edit}
                                alt=""
                                className="w-[16px] h-[16px] m-auto"
                              />
                            </button>
                            <button
                              className="ml-3  w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]"
                              onClick={() => {
                                handleDelete(chnl);
                              }}
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
                    );
                  })}
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
                    onClick={() => handlePreviousClick()}
                  >
                    Previous
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#464648] bg-[#313133] dark:hover:bg-[#FF0015]  dark:text-white ${
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

export default TVChannel;
