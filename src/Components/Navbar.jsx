import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import avatar from "../Assets/Icons/person.png";
import logo from "../Assets/Icons/PixelSportLogo.png";
import Account from "../Assets/Icons/account.png";
import Subscribe from "../Assets/Icons/crown.png";
import Search from "../Assets/Icons/search.png";
import "../Assets/styles/Navbar.scss";
import NavLinks from "./Common/NavLinks";
import Login from "../Pages/Login/Login";
import { Link, useNavigate } from "react-router-dom";
import Database from "../Assets/Icons/database.png";
import Profile from "../Assets/Icons/user.png";
import Watchlist from "../Assets/Icons/watchlist.png";
import Logout from "../Assets/Icons/logout.png";
import clearLocalStorage from "../helper/localstorage";
import cross from "../utils/images/cross.png";
import { url } from "../helper/url";
import SearchCards from "./Common/SearchCards";
import getEvents from "../api/getEvents";
import { useMediaQuery } from "react-responsive";
import { ToastContainer } from "react-toastify";

function Nav() {
  const [eventData, setEventData] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [sortedData, setSortedData] = useState([]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setSortedData(filterArray(eventData, search));
  };

  const openModal = () => {
    getData();
    setModalOpen(true);
  };
  const closeModal = () => {
    setSearch("");
    setSortedData([]);
    setModalOpen(false);
  };
  const isGoogleImageUrl = (url) => {
    const googleImageUrlRegex =
      /^https:\/\/lh3\.googleusercontent\.com\/.+=[sS]\d+(-c)?$/;
    return googleImageUrlRegex.test(url);
  };
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [data, setData] = useState(JSON?.parse(localStorage.getItem("data")));
  // const pages = ["HOME", "MLB", "NBA", "NFL", "NHL", "UFC"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [image, setImage] = useState(
    data?.image
      ? isGoogleImageUrl(data.image)
        ? data.image
        : url +
          "\\" +
          data.image.replace("uploads\\", "").replace("uploads/", "")
      : null
  );
  const isDesktop = useMediaQuery({ query: "(min-width: 1001px)" });
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavOpen(false);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = () => {
    navigate("/membership_plan");
  };

  const handleSupport = () => {
    window.location.href = "https://help.pixelsport.tv/en/";
  };
  const getData = async () => {
    const { data: response } = await getEvents();
    setEventData(response.events);
  };

  window.addEventListener("profile", () => {
    let d = JSON.parse(localStorage.getItem("data"));
    setImage(
      d
        ? isGoogleImageUrl(data.image)
          ? image
          : url +
            "\\" +
            d.image.replace("uploads\\", "").replace("uploads/", "")
        : null
    );
  });

  function filterArray(arr, search) {
    if (search.length >= 2) {
      return arr.filter((item) => {
        const tvCategory = item.channel.TVCategory.name.toLowerCase();
        // const competitorNames = item.data.competitors
        //   .map((comp) => comp.displayName.toLowerCase())
        //   .join(" ");
        const competitorNames = `${item.competitors1_name.toLowerCase()} ${item.competitors2_name.toLowerCase()}`;
        const searchLower = search.toLowerCase();

        // Check if the search string is included in TV category names or competitor names
        return (
          tvCategory.includes(searchLower) ||
          competitorNames.includes(searchLower)
        );
      });
    }

    return arr;
  }
  return (
    <AppBar
      position="static"
      style={{
        background: "#0D0620",
        boxShadow: "-1px 6px 8px -6px rgba(255,255,255,0.45)",
      }}
    >
      <ToastContainer />
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center bg-[#0D0721] bg-opacity-90 z-50">
          <div className="p-8 rounded shadow-lg flex flex-col item-center relative">
            <button
              onClick={() => {
                closeModal();
              }}
              className="  text-white px-4 py-2 rounded absolute"
              style={{ right: "2%" }}
            >
              <img src={cross} height="30px" width="30px"></img>
            </button>
            <div className="flex flex-col ">
              <label className="mt-5 w-[60vw] search-bar mx-auto text-xl text-[#D9D9D9] font-medium">
                SEARCH
              </label>
              <input
                className="w-[60vw] search-bar mx-auto bg-[#0D0721] px-3 py-2 mt-2 border-2 outline-none !border-[#34236A] focus:!border-[#34236A] rounded-md "
                placeholder="Title"
                onChange={(e) => {
                  handleSearchChange(e);
                }}
              />
            </div>
            {search.length > 2 ? (
              <div className="bg-[#18132A] w-[100vw] h-[20vh] flex mt-4">
                <SearchCards data={sortedData} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
      <Container style={{ padding: "0px 0px" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </Typography>

          <div
            className="relative flex w-100"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              className="logooo flex justify-between items-center mt-3 ml-2"
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/">
                <img className="logo" src={logo} alt="" />
              </Link>
            </div>

            <div className=" flex w-100 navbar-dis">
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                style={{ marginLeft: "80px" }}
              >
                {isDesktop ? <NavLinks /> : <></>}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip>
                  <div className="nav-Icons">
                    <div
                      className="w-[115px] support-icon cursor-pointer"
                      onClick={handleSupport}
                    >
                      <div
                        className="w-[100px] h-[35px] rounded-md flex justify-center items-center"
                        style={{ background: "none" }}
                      >
                        <p className="mb-1">Support</p>
                      </div>
                    </div>
                    <div className="w-[50px]">
                      <div
                        className="search-Icon rounded-md flex justify-center items-center rounded-full w-[35px] h-[35px] bg-white-700 "
                        onClick={() => {
                          openModal();
                        }}
                      >
                        <img
                          src={Search}
                          alt=""
                          className="w-[17px] h-[17px]"
                        />
                      </div>
                    </div>
                    {!localStorage.getItem("data") ? (
                      <div className="w-[55px]" onClick={handleNavigate}>
                        <div className="Sub-Icon rounded-md flex justify-center items-center">
                          <img
                            src={Subscribe}
                            alt=""
                            className="w-[21px] h-[25px]"
                          />
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div>
                      {data ? (
                        <div className="avatar-profile">
                          {isDesktop ? (
                            <img
                              className="avatar w-[40px] h-[40px] rounded-full cursor-pointer"
                              onClick={toggleDropdown}
                              src={
                                typeof image === "string"
                                  ? image
                                    ? image
                                    : image instanceof File
                                    ? URL.createObjectURL(image)
                                    : image
                                  : avatar
                              }
                            />
                          ) : (
                            <div className="w-[55px]" onClick={toggleDropdown}>
                              <div className="Sub-Icon rounded-md flex justify-center items-center">
                                <img
                                  src={Account}
                                  alt=""
                                  className="w-[21px] h-[25px]"
                                />
                              </div>
                            </div>
                          )}
                          {isDropdownOpen && (
                            <>
                              <div>
                                <div className="triangle"></div>
                                <div className="dropdown rounded-md">
                                  <div
                                    className="dropdown-content rounded-md"
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    {data?.usertype == "admin" ? (
                                      <>
                                        <li className="w-[100%] list-none p-2">
                                          <a
                                            href="/admin/dashboard"
                                            className="flex items-center"
                                          >
                                            <img
                                              src={Database}
                                              alt=""
                                              className="w-[15px] h-[15px]"
                                            />{" "}
                                            <span className="ml-2 text-sm">
                                              Dashboard
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="w-[100%] list-none p-2 cursor-pointer"
                                          style={{ borderBottom: "0px" }}
                                        >
                                          <a
                                            className="flex items-center"
                                            onClick={() => {
                                              clearLocalStorage();
                                              navigate("/login");
                                            }}
                                          >
                                            <img
                                              src={Logout}
                                              alt=""
                                              className="w-[15px] h-[15px]"
                                            />
                                            <span className="ml-2 text-sm">
                                              Logout
                                            </span>
                                          </a>
                                        </li>
                                      </>
                                    ) : (
                                      <>
                                        <li className="w-[100%] list-none p-2 cursor-pointer">
                                          <a
                                            href="/dashboard"
                                            className="flex items-center"
                                          >
                                            <img
                                              src={Database}
                                              alt=""
                                              className="w-[15px] h-[15px]"
                                            />{" "}
                                            <span className="ml-2 text-sm">
                                              Dashboard
                                            </span>
                                          </a>
                                        </li>
                                        <li className="w-[100%] list-none p-2">
                                          <a
                                            href="/profile"
                                            className="flex items-center"
                                          >
                                            <img
                                              src={Profile}
                                              alt=""
                                              className="w-[15px] h-[15px]"
                                            />{" "}
                                            <span className="ml-2 text-sm">
                                              Profile
                                            </span>
                                          </a>
                                        </li>
                                        <li className="w-[100%] list-none p-2">
                                          <a
                                            href="/watchlist"
                                            className="flex items-center"
                                          >
                                            <img
                                              src={Watchlist}
                                              alt=""
                                              className="w-[15px] h-[15px]"
                                            />
                                            <span className="ml-2 text-sm">
                                              Watchlist
                                            </span>
                                          </a>
                                        </li>
                                        <li className="w-[100%] list-none p-2">
                                          <a
                                            href="/affiliate_requests"
                                            className="flex items-center"
                                          >
                                            <img
                                              src={Watchlist}
                                              alt=""
                                              className="w-[15px] h-[15px]"
                                            />
                                            <span className="ml-2 text-sm">
                                              Affiliate Dashboard
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          className="w-[100%] list-none p-2"
                                          style={{
                                            borderBottom: "0px",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <a
                                            className="flex items-center"
                                            onClick={() => {
                                              clearLocalStorage();
                                              navigate("/login");
                                            }}
                                          >
                                            <img
                                              src={Logout}
                                              alt=""
                                              className="w-[15px] h-[15px]"
                                            />
                                            <span className="ml-2 text-sm">
                                              Logout
                                            </span>
                                          </a>
                                        </li>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ) : (
                        <>
                          {isDesktop ? (
                            <button className="w-[100px] h-[35px] rounded-md bg-blue-700 nav-Btn">
                              <div
                                className="w-[70px] h-[35px]  flex justify-between items-center"
                                style={{ margin: "auto" }}
                              >
                                <div style={{ width: "18px", height: "18px" }}>
                                  <img
                                    src={
                                      typeof image === "string"
                                        ? isGoogleImageUrl(image)
                                          ? image
                                          : image instanceof File
                                          ? URL.createObjectURL(image)
                                          : image
                                        : null
                                    }
                                    alt=""
                                  />
                                </div>
                                <span
                                  style={{ fontSize: "14px" }}
                                  className="mr-3 "
                                >
                                  <Link to="/login"> LOGIN</Link>
                                </span>
                              </div>
                            </button>
                          ) : (
                            <button className="mr-2">
                              <div
                                className="Sub-Icon rounded-md flex justify-center items-center"
                                onClick={() => {
                                  clearLocalStorage();
                                  navigate("/login");
                                }}
                              >
                                <img
                                  src={Account}
                                  alt=""
                                  className="w-[21px] h-[25px]"
                                />
                              </div>
                            </button>
                          )}
                        </>
                      )}
                    </div>
                    <div className="relative">
                      <div
                        className="nav-menu-btn flex flex-center items-center relative"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "#332360",
                          marginTop: "-2px",
                        }}
                      >
                        <div
                          className="absolute"
                          style={{
                            marginTop: "-4px",
                            marginRight: "0px",
                            right: "-10%",
                          }}
                        >
                          <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                          >
                            <MenuIcon />
                          </IconButton>
                        </div>
                      </div>

                      <div
                        className={`absolute w-[300px] nav-mbl-links ${
                          navOpen ? "show" : "hide"
                        }`}
                        style={{
                          left: navOpen ? "-250px" : "100px",
                          transition: "left 0.5s ease-in-out",
                        }}
                      >
                        {isDesktop ? <></> : <NavLinks />}
                      </div>
                    </div>
                  </div>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <div className="Profile-DropDown"></div>
                </Menu>
              </Box>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
