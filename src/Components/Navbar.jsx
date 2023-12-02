import React, { useState } from "react";
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
import Image from "../Assets/Icons/person.png";
import logo from "../Assets/Icons/PixelSportLogo.png";
import Account from "../Assets/Icons/account.png";
import Subscribe from "../Assets/Icons/crown.png";
import Search from "../Assets/Icons/search.png";
import "../Assets/styles/Navbar.scss";
import NavLinks from "./Common/NavLinks";
import Login from "../Pages/Login/Login";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const pages = ["HOME", "MLB", "NBA", "NFL", "NHL", "UFC"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = () => {
    navigate("/membership_plan");
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "#0D0620",
        boxShadow: "-1px 6px 18px -6px rgba(255,255,255,0.45)",
      }}
    >
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
            <img className="logo" src={logo} alt="" />
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            style={{
              background: "#00022b",
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", color: "black" },
              }}
            >
              <div>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  style={{
                    background: "#00022b",
                  }}
                >
                  <div
                    className="w-[100vw] m-auto"
                    style={{
                      background: "#00022b",
                    }}
                  >
                    <NavLinks />
                  </div>
                </MenuItem>
              </div>
            </Menu>
          </Box>

          <Typography
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
            <img className="logo" src={logo} alt="" />
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            style={{ marginLeft: "70px" }}
          >
            <NavLinks />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <div className="nav-Icons">
                <div className="w-[55px]" onClick={handleNavigate}>
                  <div className="Sub-Icon rounded-md flex justify-center items-center">
                    <img src={Subscribe} alt="" className="w-[21px] h-[25px]" />
                  </div>
                </div>
                <div className="w-[50px]">
                  <div className="search-Icon rounded-md flex justify-center items-center rounded-full w-[35px] h-[35px] bg-white-700">
                    <img src={Search} alt="" className="w-[17px] h-[17px]" />
                  </div>
                </div>
                <div>
                  {isLoggedIn ? (
                    <div className="avatar-profile">
                      <img
                        className="avatar w-[40px] h-[40px] rounded-full"
                        onClick={toggleDropdown}
                        src={Image}
                      />
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
                                <li className="w-[100%] list-none p-1">
                                  <a href="/dashboard">Dashboard</a>
                                </li>
                                <li className="w-[100%]  list-none p-1">
                                  <a href="/profile">Profile</a>
                                </li>
                                <li className="w-[100%] list-none p-1">
                                  <a href="/watchlist">Watchlist</a>
                                </li>
                                <li className="w-[100%] list-none p-1 border-b-0">
                                  <a href="/">Logout</a>
                                </li>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <button className="w-[100px] h-[35px] rounded-md bg-blue-700 nav-Btn">
                      <div
                        className="w-[70px] h-[35px]  flex justify-between items-center"
                        style={{ margin: "auto" }}
                      >
                        <div style={{ width: "18px", height: "18px" }}>
                          <img src={Account} alt="" />
                        </div>
                        <span style={{ fontSize: "14px" }}>
                          <Link to="/LOGIN"> LOGIN</Link>
                        </span>
                      </div>
                    </button>
                  )}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
