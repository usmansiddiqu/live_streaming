import React, { useState } from "react";
import logo from "../../../Assets/Icons/PixelSportLogo.png";
import DashboardIcon from "../../../Assets/Icons/dashboard.png";
import Layers from "../../../Assets/Icons/layers.png";
import Tv from "../../../Assets/Icons/television.png";
import Tag from "../../../Assets/Icons/tags.png";
import List from "../../../Assets/Icons/list.png";
import HomeBar from "../../../Assets/Icons/volume-bars.png";
import Group from "../../../Assets/Icons/group.png";
import Gift from "../../../Assets/Icons/gift.png";
import User from "../../../Assets/Icons/manager.png";
import LogOut from "../../../Assets/Icons/log-out.png";
import { Link, useNavigate } from "react-router-dom";
function AdminPanelBar() {
  const [activeItem, setActiveItem] = useState({ id: null, name: null });

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHome, setisOpenHome] = useState(false);
  const [isOpenUser, setIsOpenUSer] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();

  const handleToggleBar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleButtonClick = () => {
    navigate("/admin/profile");
  };

  const handleItemClick = (itemId, itemName) => {
    setActiveItem({
      id: itemId === activeItem.id ? null : itemId,
      name: itemName,
    });
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const toggleHomeDrop = () => {
    setisOpenHome(!isOpenHome);
  };
  const toggleUserDrop = () => {
    setIsOpenUSer(!isOpenUser);
  };
  const handleToggle = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    <>
      <div
        className="bg-black h-[100vh] overflow-y-hidden	"
        style={{ overflow: "hidden" }}
      >
        <nav
          class="fixed top-0 z-50 w-full bg-black border-t-[3px] border-red-500 "
          style={{ boxShadow: "-1px 6px 18px -13px rgba(255,255,255,0.45)" }}
        >
          <div class="px-3 lg:px-5 lg:pl-3 h-[7vh]">
            <div class="flex items-center justify-between ">
              <div class="flex items-center justify-center rtl:justify-end border-r border-red-500 h-[7vh] w-[14.5vw]">
                <a href="" class="flex ms-2 md:me-24 mx-auto ">
                  <img
                    src={logo}
                    className="ml-14 h-[25px] w-[90px] AdminBarLogo"
                    alt="PixelSportTv"
                  />
                </a>
              </div>
              <div className="flex justify-between items-center w-full">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  onClick={handleToggle}
                  class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span class="sr-only">Open sidebar</span>
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <h1 className="text-white ml-2">{activeItem.name || ""}</h1>
                <div class="flex items-center">
                  <div class="flex items-center ms-3">
                    <div>
                      <button
                        type="button"
                        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                      >
                        <span class="sr-only">Open user menu</span>
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="user photo"
                        />
                      </button>
                    </div>
                    <div
                      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-[120px] "
                      id="dropdown-user"
                    >
                      <ul class="py-1" role="none">
                        <li onClick={handleButtonClick}>
                          <a
                            class="block px-4 py-2 text-sm text-black dark:hover:bg-[#c6c6c6] flex cursor-pointer "
                            role="menuitem"
                          >
                            <img
                              src={User}
                              alt=""
                              className="w-[18px] h-[18px]"
                            />
                            <p className="ml-2"> Profile</p>
                          </a>
                        </li>
                        <li>
                          <a
                            class="block px-4 py-2 text-sm text-black dark:hover:bg-[#c6c6c6] flex cursor-pointer "
                            role="menuitem"
                          >
                            <img
                              src={LogOut}
                              alt=""
                              className="w-[18px] h-[18px]"
                            />
                            <p className="ml-2"> LogOut</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <a
          id="sidebar-toggle"
          className="absolute sidebar-toggle top-4 left-4 cursor-pointer text-white text-2xl z-50"
          onClick={handleToggle}
        >
          <img
            src={Layers}
            alt=""
            className="w-[25px] h-[25px] hidden layer-icon"
          />
        </a>
        <aside
          id="logo-sidebar"
          className={`fixed logo-sidebar top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
            isCollapsed ? "-translate-x-[200px]" : "translate-x-0"
          } border-r border-gray-200 bg-[#0c0c0d] dark:border-gray-700`}
          aria-label="Sidebar"
        >
          <div class="h-full side-Bar pb-4 overflow-y-auto bg-[#0c0c0d]">
            <ul class=" font-medium">
              <li
                className={activeItem.id === "dashboard" ? "active" : ""}
                onClick={() => handleItemClick("dashboard", "Dashboard")}
              >
                <a
                  className={`flex items-center text-sm p-2 dark:text-white bg-[#1c1c1e] group-hover:text-red-600 ${
                    activeItem.id === "dashboard" ? "bg-[#ff0015]" : ""
                  } ${isCollapsed ? "justify-end" : "justify-start"}`}
                >
                  <img
                    src={DashboardIcon}
                    alt=""
                    className={`w-[18px] h-[18px] flex ${
                      isCollapsed ? "mr-3" : "ml-2"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="ms-3">
                      <Link to="/admin/dashboard">Dashboard</Link>
                    </span>
                  )}
                </a>
              </li>

              {/*  ------------------------LIVE TV ---------------------- */}
              <li
                id="Live TV"
                className={`mt-1 ${activeItem === "Live TV" ? "active" : ""}`}
                onClick={() => {
                  toggleDropDown();
                  handleItemClick("Live TV");
                  handleItemClick("Live TV", "Live TV");
                }}
              >
                <button
                  type="button"
                  className={`flex items-center w-full transition duration-75 bg-[#1c1c1e] p-2 text-gray-900 dark:text-white group-hover:text-red-600 ${
                    activeItem.id === "Live TV" ? "bg-[#ff0015]" : ""
                  } ${isCollapsed ? "justify-end" : "justify-start"}`}
                >
                  <img
                    src={Tv}
                    alt=""
                    className={`w-[18px] h-[18px] flex ${
                      isCollapsed ? "mr-3" : "ml-2"
                    }`}
                  />
                  {!isCollapsed && (
                    <span class="flex-1 ms-3 text-sm text-left rtl:text-right whitespace-nowrap">
                      Live TV
                    </span>
                  )}

                  {!isCollapsed && (
                    <svg
                      class="w-3 h-3"
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
                  )}
                </button>
              </li>
              {isOpen && (
                <ul className="py-2 space-y-2">
                  <li
                    className="flex items-center pl-11"
                    onClick={() =>
                      handleItemClick("TV category", "TV category")
                    }
                  >
                    <a
                      className={`flex  w-full p-2 text-gray-900 transition duration-75 group  text-sm dark:text-white dark:hover:text-red-600 ${
                        isCollapsed ? "justify-end" : "justify-start"
                      }`}
                    >
                      <img
                        src={Tag}
                        alt=""
                        className={`w-[18px] h-[18px] flex ${
                          isCollapsed ? "mr-3" : ""
                        }`}
                      />
                      {!isCollapsed && (
                        <span className="ms-3">
                          <Link to="/admin/Tv_category"> TV Category</Link>
                        </span>
                      )}
                    </a>
                  </li>
                  <li
                    className="flex items-center pl-11"
                    onClick={() =>
                      handleItemClick(" TV Channel", " TV Channel")
                    }
                  >
                    <a
                      className={`flex  w-full p-2 text-gray-900 transition duration-75 group  text-sm dark:text-white dark:hover:text-red-600 ${
                        isCollapsed ? "justify-end" : "justify-start"
                      }`}
                    >
                      <img
                        src={List}
                        alt=""
                        className={`w-[18px] h-[18px] flex ${
                          isCollapsed ? "mr-3" : ""
                        }`}
                      />
                      {!isCollapsed && (
                        <span className="ms-3">
                          <Link to="/admin/live_tv"> TV Channel</Link>
                        </span>
                      )}
                    </a>
                  </li>
                  <li
                    className="flex items-center pl-11"
                    onClick={() =>
                      handleItemClick("Assign Live TV", "Assign Live TV")
                    }
                  >
                    <a
                      className={`flex  w-full p-2 text-gray-900 transition duration-75 group  text-sm dark:text-white dark:hover:text-red-600 ${
                        isCollapsed ? "justify-end" : "justify-start"
                      }`}
                    >
                      <img
                        src={List}
                        alt=""
                        className={`w-[18px] h-[18px] flex ${
                          isCollapsed ? "mr-3" : ""
                        }`}
                      />
                      {!isCollapsed && (
                        <span className="ms-3">
                          <Link to="/admin/assign_live_tv">Assign Live TV</Link>
                        </span>
                      )}
                    </a>
                  </li>
                </ul>
              )}

              {/*  ------------------------HOME---------------------- */}
              <li
                id="Home"
                className={`mt-1 ${activeItem === "Home" ? "active" : ""}`}
                onClick={() => {
                  toggleHomeDrop();
                  handleItemClick("Home");
                  handleItemClick("Home", "Home");
                }}
              >
                <button
                  type="button"
                  className={`flex items-center w-full transition duration-75 bg-[#1c1c1e] p-2 text-gray-900 dark:text-white group-hover:text-red-600 ${
                    activeItem.id === "Home" ? "bg-[#ff0015]" : ""
                  } ${isCollapsed ? "justify-end" : "justify-start"}`}
                >
                  <img
                    src={HomeBar}
                    alt=""
                    className={`w-[18px] h-[18px] flex ${
                      isCollapsed ? "mr-3" : "ml-2"
                    }`}
                  />
                  {!isCollapsed && (
                    <span class="flex-1 ms-3 text-sm text-left rtl:text-right whitespace-nowrap">
                      Home
                    </span>
                  )}
                  {!isCollapsed && (
                    <svg
                      class="w-3 h-3"
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
                  )}
                </button>
              </li>
              {isOpenHome && (
                <ul className="py-2 space-y-2">
                  <li
                    className="flex items-center pl-11"
                    onClick={() => handleItemClick(" Slider", " Slider")}
                  >
                    <a
                      className={`flex  w-full p-2 text-gray-900 transition duration-75 group  text-sm dark:text-white dark:hover:text-red-600 ${
                        isCollapsed ? "justify-end" : "justify-start"
                      }`}
                    >
                      <img
                        src={HomeBar}
                        alt=""
                        className={`w-[18px] h-[18px] flex ${
                          isCollapsed ? "mr-3" : ""
                        }`}
                      />
                      {!isCollapsed && (
                        <span className="ms-3">
                          <Link to="/admin/slider"> Sldier</Link>
                        </span>
                      )}
                    </a>
                  </li>
                  <li
                    className="flex items-center pl-11"
                    onClick={() =>
                      handleItemClick("  Home Section", "  Home Section")
                    }
                  >
                    <a
                      className={`flex  w-full p-2 text-gray-900 transition duration-75 group  text-sm dark:text-white dark:hover:text-red-600 ${
                        isCollapsed ? "justify-end" : "justify-start"
                      }`}
                    >
                      <img
                        src={HomeBar}
                        alt=""
                        className={`w-[18px] h-[18px] flex ${
                          isCollapsed ? "mr-3" : ""
                        }`}
                      />
                      {!isCollapsed && (
                        <span className="ms-3">
                          {" "}
                          <Link to="/admin/home_section"> Home Section</Link>
                        </span>
                      )}
                    </a>
                  </li>
                </ul>
              )}
              {/*  ------------------------USERS---------------------- */}
              <li
                id="Users"
                className={`mt-1 ${activeItem.id === "Users" ? "active" : ""}`}
                onClick={() => {
                  toggleUserDrop();
                  handleItemClick("Users");
                  handleItemClick("Users", "Users");
                }}
              >
                <button
                  type="button"
                  className={`flex items-center w-full transition duration-75 bg-[#1c1c1e] p-2 text-gray-900 dark:text-white group-hover:text-red-600 ${
                    activeItem.id === "Users" ? "bg-[#ff0015]" : ""
                  } ${isCollapsed ? "justify-end" : "justify-start"}`}
                >
                  <img
                    src={Group}
                    alt=""
                    className={`w-[18px] h-[18px] flex ${
                      isCollapsed ? "mr-3" : "ml-2"
                    }`}
                  />
                  {!isCollapsed && (
                    <span class="flex-1 ms-3 text-sm text-left rtl:text-right whitespace-nowrap">
                      Users
                    </span>
                  )}

                  {!isCollapsed && (
                    <svg
                      class="w-3 h-3"
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
                  )}
                </button>
              </li>
              {isOpenUser && (
                <ul className="py-2 space-y-2">
                  <li
                    className="flex items-center pl-11"
                    onClick={() => handleItemClick(" User", " User")}
                  >
                    <a
                      className={`flex w-full p-2  text-gray-900 transition duration-75 group  text-sm dark:text-white dark:hover:text-red-600 ${
                        activeItem.id === "User" ? "bg-[#ff0015]" : ""
                      } ${isCollapsed ? "justify-end" : "justify-start"}`}
                    >
                      <img
                        src={Group}
                        alt=""
                        className={`w-[18px] h-[18px] flex ${
                          isCollapsed ? "mr-3" : ""
                        }`}
                      />
                      {!isCollapsed && (
                        <span className="ms-3">
                          <Link to="/admin/users"> Users</Link>
                        </span>
                      )}
                    </a>
                  </li>
                  <li
                    className="flex items-center pl-11"
                    onClick={() => handleItemClick(" Sub Admin", " Sub Admin")}
                  >
                    <a
                      className={`flex  w-full p-2  text-gray-900 transition duration-75 group  text-sm dark:text-white dark:hover:text-red-600 ${
                        activeItem.id === "Sub Admin" ? "bg-[#ff0015]" : ""
                      } ${isCollapsed ? "justify-end" : "justify-start"}`}
                    >
                      <img
                        src={Group}
                        alt=""
                        className={`w-[18px] h-[18px] flex ${
                          isCollapsed ? "mr-3" : ""
                        }`}
                      />
                      {!isCollapsed && (
                        <span className="ms-3">
                          <Link to="/admin/sub_admin"> Sub Admin</Link>
                        </span>
                      )}
                    </a>
                  </li>
                </ul>
              )}
              <li
                id="Coupons"
                className={`mt-1 ${
                  activeItem.id === "Coupons" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Coupons", "Coupons")}
              >
                <a
                  className={`flex items-center text-sm p-2 dark:text-white bg-[#1c1c1e] group-hover:text-red-600 ${
                    activeItem.id === "Coupons" ? "bg-[#ff0015]" : ""
                  } ${isCollapsed ? "justify-end" : "justify-start"}`}
                >
                  <img
                    src={Gift}
                    alt=""
                    className={`w-[18px] h-[18px] flex ${
                      isCollapsed ? "mr-3" : "ml-2"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="ms-3">
                      {" "}
                      <Link to="/admin/coupons">Coupons</Link>
                    </span>
                  )}
                </a>
              </li>
              <li
                id="Transcations"
                className={`mt-1 ${
                  activeItem.id === "Transcations" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Transcations", "Transcations")}
              >
                <a
                  className={`flex items-center text-sm p-2 dark:text-white bg-[#1c1c1e] group-hover:text-red-600 ${
                    activeItem.id === "Transcations" ? "bg-[#ff0015]" : ""
                  } ${isCollapsed ? "justify-end" : "justify-start"}`}
                >
                  <img
                    src={List}
                    alt=""
                    className={`w-[18px] h-[18px] flex ${
                      isCollapsed ? "mr-3" : "ml-2"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="ms-3">
                      {" "}
                      <Link to="/admin/transactions">Transcations</Link>
                    </span>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default AdminPanelBar;
