import React, { useEffect, useState } from "react";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import Eye from "../../../../Assets/Icons/eye-open.png";
import { useNavigate } from "react-router-dom";
import getAllUsers from "../../../../api/getAllUsers";
import deleteSingleUser from "../../../../api/deleteUser";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function Users() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(1);
  const [textFilter, setTextFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [eventId, setEventId] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalItems = users.length;
  const paginate = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return users.slice(startIndex, endIndex);
  };
  const [skip, setSkip] = useState(1);
  const handlePreviousClick = () => {
    if (skip > 1) {
      setSkip(skip - 1);
    }
  };

  const handleNextClick = () => {
    setSkip(skip + 1);
  };
  const [error, setError] = useState("");
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const handleButtonClick = (user) => {
    navigate(`/admin/users/edit_user/${user._id}`);
  };
  const handleHistoryButtonClick = (id) => {
    navigate(`/admin/users/history/${id}`);
  };
  const handleCreateButtonClick = () => {
    navigate("/admin/users/add_user");
  };
  const handleDelete = async () => {
    try {
      const response = await deleteSingleUser(user._id);
      getUsers();
      setOpen(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const handleClickOpen = (user) => {
    setUser(user);
    setOpen(true);
    setEventId(user);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getUsers = async () => {
    try {
      const { data: response } = await getAllUsers(skip, textFilter);
      // setUsers(response.data.user);
      setUsers(response?.data?.user);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, [textFilter, skip]);

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
            <div class="relative overflow-x-auto shadow-md edit-contain ">
              <div>
                <div class="relative mt-1">
                  <div class=" flex items-center  tvChannel-head justify-between  flex-wrap md:flex-row md:space-y-0 pb-4   ">
                    {/* <div className="bg-[#313133] Category-Filter rounded">
                      <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        class="inline-flex items-center w-[310px] bg-[#313133]  justify-between text-white border-0 font-medium rounded-lg text-sm px-3 py-2.5 "
                        type="button"
                      >
                        <span class="sr-only">Filter by Plan</span>
                        Filter by Plan
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
                        class="z-10 hidden bg-white w-[310px] top-0 shadow Category-Filter w-44 dark:divide-gray-600"
                      >
                        <ul
                          class="text-sm text-black"
                          aria-labelledby="dropdownActionButton"
                        >
                          <li className="p-2">
                            <input
                              type="text"
                              id="table-search-users"
                              class=" ps-5  text-sm w-full search-title  text-[#6C757D] text-xs border "
                              placeholder="Search by title"
                            />
                          </li>
                          <li>
                            <a class="block px-4 py-2 text-[#6C757D] bg-[#ddd]  dark:hover:bg-[#FF0015] dark:hover:text-white">
                              Filter by Plan
                            </a>
                          </li>
                          <li>
                            <a class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white">
                              MLB
                            </a>
                          </li>
                          <li>
                            <a class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white">
                              NBA
                            </a>
                          </li>
                          <li>
                            <a class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white">
                              NFL
                            </a>
                          </li>
                          <li>
                            <a class="block px-4 py-2  dark:hover:bg-[#FF0015] dark:hover:text-white">
                              NHL
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    <label for="table-search" class="sr-only">
                      Search
                    </label>
                    <div class="relative flex justify-between w-80 rounded-full bg-[#313133]">
                      <input
                        type="text"
                        id="table-search-users"
                        class=" ps-5 text-sm py-3 border-0  text-[#6C757D] text-xs placeholder:text-white bg-[#313133] rounded-full w-80 text-white"
                        placeholder="Search by name or email"
                        onChange={(e) => {
                          setSkip(1);
                          setTextFilter(e.target.value);
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
                        Add User
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <table class="w-full mt-5 text-sm text-left rtl:text-right text-white">
                <thead class=" w-[78vw] text-xs text-white">
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
                  {users.map((user) => {
                    return (
                      <tr>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {user.name}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {user.email}
                        </th>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                          style={{ border: "1px solid #313133" }}
                        >
                          {user.phone || "-"}
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
                          class="px-6 py-4 dark:text-white "
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">
                            <button
                              className="  relative w-[36px] h-[33px] rounded z-10 bg-[#FF0015] hover:before:absolute hover:before:bg-black hover:before:content-['History'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                              onClick={() => handleHistoryButtonClick(user._id)}
                            >
                              <img
                                src={Eye}
                                alt=""
                                className="w-[16px] h-[16px] m-auto"
                              />
                            </button>
                            <button
                              className="   ml-3  relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                              onClick={() => {
                                handleButtonClick(user);
                              }}
                            >
                              <img
                                src={Edit}
                                alt=""
                                className="w-[16px] h-[16px] m-auto"
                              />
                            </button>
                            <>
                              <button
                                variant="outlined"
                                onClick={() => {
                                  handleClickOpen(user);
                                }}
                                className="ml-3  w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]"
                              >
                                <img
                                  src={Cross}
                                  alt=""
                                  className="w-[10px] h-[10px] m-auto"
                                />
                              </button>
                              <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                              >
                                <DialogContent>
                                  <DialogContentText id="alert-dialog-description">
                                    Are you sure you want to delete this?
                                  </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                  <Button onClick={handleClose}>Cancel</Button>
                                  <Button
                                    onClick={() => {
                                      handleDelete();
                                    }}
                                    autoFocus
                                  >
                                    Delete
                                  </Button>
                                </DialogActions>
                              </Dialog>
                            </>
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
                    className={`flex items-center justify-center px-3 h-8 leading-tight border border-[#464648] bg-[#313133] hover:bg-[#FF0015] cursor-pointer  text-white ${
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

export default Users;
