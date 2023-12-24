import React, { useEffect, useState } from "react";
import tvchannel from "../../../../Assets/Images/nba poster.webp";
import { useNavigate } from "react-router-dom";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import ErrorComponent from "../../../../Components/Common/ErrorComponent";
import deleteSpecificChannel from "../../../../api/tvChannel.api";
import getChannel from "../../../../api/retrieveChannel";
function TVChannel() {
  const [activeItem, setActiveItem] = useState(1);
  const [channel, setChannel] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [textFilter, setTextFilter] = useState("");
  const totalItems = channel.length;
  // .filter((chnl) => {
  //   if (categoryFilter == "Filter by category") {
  //     return true;
  //   } else return chnl.TVCategory.name == categoryFilter;
  // })
  // const filter = () => {
  //   getChannels();
  //   let tvChannel = [...channel];
  //   if (textFilter.length >= 2) {
  //     tvChannel?.filter((chnl) => {
  //       if (textFilter) {
  //         console.log(
  //           chnl.TVName.toLowerCase().includes(textFilter.toLowerCase())
  //         );
  //         return chnl.TVName.toLowerCase().includes(textFilter.toLowerCase());
  //       }
  //     });
  //     console.log("running filter", tvChannel);

  //     setChannel(tvChannel);
  //   }
  // };
  const filter = (e) => {
    if (textFilter.length > e) {
      getChannels();
    }
    let tvChannel = [...channel];
    if (textFilter.length >= 2) {
      tvChannel = tvChannel.filter((chnl) => {
        return chnl.TVName.toLowerCase().includes(textFilter.toLowerCase());
      });

      console.log("running filter", tvChannel);
      setChannel(tvChannel);
    }
  };
  const paginate = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    console.log(channel);
    return channel.slice(startIndex, endIndex);
  };

  const [categoryFilter, setCategoryFilter] = useState("Filter by category");
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
    // console.log(response.live, "chnl123123");
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
  const handleTextFilter = (e) => {
    setTextFilter(e.target.value);
    filter(e.target.value);
  };
  const handleTextPaste = (e) => {
    setTextFilter(e?.clipboardData?.getData("text"));
    filter(e?.clipboardData?.getData("text"));
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
            className="w-[80vw] box edit-con bg-[#1C1C1E] mx-auto rounded p-5"
            style={{ position: "absolute", left: "16.5%" }}
          >
            <div class="relative overflow-x-auto shadow-md edit-contain">
              {error && <ErrorComponent message={error} />}
              <div>
                <div class="relative mt-1">
                  <div class=" flex items-center tvChannel-head2 justify-between  flex-wrap md:flex-row md:space-y-0 pb-4   ">
                    {/* <div className="bg-[#313133] Category-Filter rounded">
                      <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        class="dropdownActionButton inline-flex items-center w-[310px]  bg-[#313133] justify-between text-white border-0 font-medium rounded-lg text-sm px-3 py-2.5 "
                        type="button"
                      >
                        <span class="sr-only">{categoryFilter}</span>
                        {categoryFilter}
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
                        class="z-10 hidden bg-white w-[250px]  Category-Filter top-0 shadow w-44 dark:divide-gray-600"
                      >
                        <ul
                          class="text-sm text-black"
                          aria-labelledby="dropdownActionButton"
                        >
                          <li className="p-2">
                            <input
                              type="text"
                              id="table-search-users"
                              class=" ps-5  text-sm w-full  text-white text-xs border "
                              placeholder="Search by title"
                              value={textFilter}
                            />
                          </li>
                          <li>
                            <a
                              onClick={() =>
                                setCategoryFilter("Filter by category")
                              }
                              class="block px-4 py-2 text-[#6C757D] bg-[#ddd]  dark:hover:bg-[#FF0015] dark:hover:text-white"
                            >
                              Filter by category
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => setCategoryFilter("MLB")}
                              class="block px-4 py-2  hover:bg-[#FF0015] hover:text-white cursor-pointer"
                            >
                              MLB
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => setCategoryFilter("NBA")}
                              class="block px-4 py-2  hover:bg-[#FF0015] hover:text-white cursor-pointer"
                            >
                              NBA
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => setCategoryFilter("NFL")}
                              class="block px-4 py-2  hover:bg-[#FF0015] hover:text-white cursor-pointer"
                            >
                              NFL
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => setCategoryFilter("NHL")}
                              class="block px-4 py-2  hover:bg-[#FF0015] hover:text-white cursor-pointer"
                            >
                              NHL
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    <label for="table-search" class="sr-only">
                      Search
                    </label>
                    <div class="relative flex justify-between search-title w-80 rounded-full bg-[#313133]">
                      <input
                        style={{ color: "white" }}
                        type="text"
                        id="table-search-users"
                        class=" ps-5 text-sm py-3 border-0  text-[#6C757D] text-xs  bg-[#313133] rounded-full w-80 "
                        placeholder="Search by title"
                        onPaste={(e) => {
                          handleTextPaste(e);
                        }}
                        onChange={(e) => {
                          handleTextFilter(e);
                        }}
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
                      className="w-[125px] h-[4vh] bg-[#0EAC5C] Add-tv font-medium rounded-md flex items-center justify-evenly"
                      onClick={handleCreateButtonClick}
                    >
                      <svg
                        fill="#FFFFFF"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                      </svg>
                      <span className="text-white text-sm dark:text-white">
                        Add Live Tv
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <table
                class="w-full mt-5 text-sm  text-left rtl:text-right text-white"
                style={{ overflow: "scroll" }}
              >
                <thead class=" w-[78vw] text-xs text-white">
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
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {chnl?.TVName}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="tv-img w-[150px] h-[84px]">
                            <img src={tvchannel} alt="" className="" />
                          </div>
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {chnl.TVAccess}
                        </th>
                        <td
                          class="px-6 py-4 text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className=" bg-[#0EAC5C] w-[60px] text-center rounded text-sm">
                            {chnl.status}
                          </div>
                        </td>
                        <td
                          class="px-6 py-4 text-white"
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
                    className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-[#464648] bg-[#313133] hover:bg-[#FF0015] text-white ${
                      activeItem === 0 ? "bg-gray-700 bg-[#FF0015]" : ""
                    }`}
                    onClick={() => handlePreviousClick()}
                  >
                    Previous
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#464648] bg-[#313133] hover:bg-[#FF0015]  text-white ${
                      activeItem === 3 ? "bg-gray-700 bg-[#FF0015]" : ""
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
