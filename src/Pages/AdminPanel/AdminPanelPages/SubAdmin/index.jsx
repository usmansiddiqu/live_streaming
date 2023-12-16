import React, { useEffect, useState } from "react";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import { useNavigate } from "react-router-dom";
import getAllSubAdmin from "../../../../api/subadmins.api";
import deleteSingleUser from "../../../../api/deleteUser";
import ErrorComponent from "../../../../Components/Common/ErrorComponent";
function SubAdmin() {
  const [subAdmin, setSubAdmin] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = (admin) => {
    navigate(`/admin/sub_admin/edit_user/${admin._id}`);
  };
  const handleCreateButtonClick = () => {
    navigate("/admin/sub_admin/add_user");
  };
  const getSubAdmins = async () => {
    try {
      const { data: response } = await getAllSubAdmin();
      console.log(response.data);
      setSubAdmin(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const handleDelete = async (id) => {
    const { data: response } = await deleteSingleUser(id);
    getSubAdmins();
  };
  useEffect(() => {
    getSubAdmins();
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
            {error && <ErrorComponent message={error} />}
            <div class="relative overflow-x-auto shadow-md edit-contain">
              <div>
                <div class="relative mt-1">
                  <div class=" flex items-center  w-[35%] justify-between tvChannel-head flex-wrap md:flex-row md:space-y-0 pb-4   ">
                    <label for="table-search" class="sr-only">
                      Search
                    </label>
                    <div class="relative flex justify-between w-80 rounded-full bg-[#313133]">
                      <input
                        type="text"
                        id="table-search-users"
                        class=" ps-5 text-sm py-3 border-0  text-[#6C757D] text-xs placeholder:text-white bg-[#313133] rounded-full w-80 text-white"
                        placeholder="Search by name or email"
                   
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
                      className="w-[110px] h-[4vh] bg-[#0EAC5C] font-medium rounded-md"
                      onClick={handleCreateButtonClick}
                    >
                      <span className="text-white text-sm text-white">
                        + Add Users
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class=" w-[78vw] text-xs text-white">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-white text-md"
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
                  {subAdmin &&
                    subAdmin.map((admin) => {
                      return (
                        <tr>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                            style={{ border: "1px solid #313133" }}
                          >
                            {admin.name}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                            style={{ border: "1px solid #313133" }}
                          >
                            {admin.email}
                          </th>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                            style={{ border: "1px solid #313133" }}
                          >
                            {admin.phone}
                          </th>
                          <td
                            class="px-6 py-4 dark:text-white"
                            style={{ border: "1px solid #313133" }}
                          >
                            {admin.status ? (
                              <div className=" bg-[#0EAC5C] w-[60px] text-center rounded text-sm">
                                Active
                              </div>
                            ) : (
                              <div className=" bg-red-700 p-1 w-[60px] text-center rounded text-sm">
                                Inactive
                              </div>
                            )}
                          </td>
                          <td
                            class="px-6 py-4 dark:text-white border"
                            style={{ border: "1px solid #313133" }}
                          >
                            <div className="flex">
                              <button
                                className=" border relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                                onClick={() => {
                                  handleButtonClick(admin);
                                }}
                              >
                                <img
                                  src={Edit}
                                  alt=""
                                  className="w-[16px] h-[16px] m-auto"
                                />
                              </button>
                              <button
                                className="ml-3 border w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]"
                                onClick={() => {
                                  handleDelete(admin._id);
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubAdmin;
