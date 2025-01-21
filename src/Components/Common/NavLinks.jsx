import React, { useState } from "react";
import "../../Assets/styles/Navbar.scss";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CrossIcon from "../../Assets/Icons/cross.png";

function NavLinks({ handleOpenNavMenu }) {
  const [activeLink, setActiveLink] = useState();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const isDesktop = useMediaQuery({ query: "(min-width: 901px)" });

  return (
    <>
      {isDesktop ? (
        <div
          style={{
            width: "39%",
          }}
        >
          <ul className="flex flex-col font-medium md:flex-row md:space-x-4 md:mt-0 w-full  justify-between">
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 text-sm nav-aa  md:hover:bg-transparent md:p-0 text-white md:dark:hover:bg-transparent ${
                  activeLink === "Home" ? "active" : ""
                }`}
                aria-current={activeLink === "Home" ? "page" : undefined}
                onClick={() => handleLinkClick("Home")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/" className="nav-a" style={{ color: "white" }}>
                  HOME
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "MLB" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("MLB")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/mlb" className="nav-a" style={{ color: "white" }}>
                  {" "}
                  MLB
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent ${
                  activeLink === "NBA" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("NBA")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/nba" className="nav-a" style={{ color: "white" }}>
                  {" "}
                  NBA
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "NFL" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("NFL")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/nfl" className="nav-a" style={{ color: "white" }}>
                  {" "}
                  NFL
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aaa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "NHL" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("NHL")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/nhl" className="nav-a" style={{ color: "white" }}>
                  {" "}
                  NHL
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aaa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent ${
                  activeLink === "CHANNEL" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("CHANNEL")}
                style={{ textDecoration: "none" }}
              >
                <Link
                  to="/channel"
                  className="nav-a"
                  style={{ color: "white" }}
                >
                  CHANNEL
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aaa text-sm Support-text text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "SUPPORT" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("SUPPORT")}
                style={{ display: "none", textDecoration: "none" }}
              >
                <Link
                  to="https://help.pixelsport.tv/en/"
                  className="nav-a"
                  style={{ color: "white" }}
                >
                  SUPPORT
                </Link>
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
          }}
        >
          <ul className="flex flex-col font-medium  w-full px-3 justify-between">
            <li
              className="w-[90%] flex justify-end"
              style={{ listStyle: "none" }}
            >
              <a
                href="#"
                className={`block py-3 text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "Home" ? "active" : ""
                }`}
                onClick={handleOpenNavMenu}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={CrossIcon}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "Home" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("Home")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/" className="nav-a" style={{ color: "white" }}>
                  {" "}
                  HOME
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "MLB" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("MLB")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/mlb" className="nav-a" style={{ color: "white" }}>
                  {" "}
                  MLB
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent ${
                  activeLink === "NBA" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("NBA")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/nba" className="nav-a" style={{ color: "white" }}>
                  {" "}
                  NBA
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "NFL" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("NFL")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/nfl" className="nav-a" style={{ color: "white" }}>
                  {" "}
                  NFL
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aaa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "NHL" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("NHL")}
                style={{ textDecoration: "none" }}
              >
                <Link to="/nhl" className="nav-a" style={{ color: "white" }}>
                  {" "}
                  NHL
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aaa text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent ${
                  activeLink === "CHANNEL" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("CHANNEL")}
                style={{ textDecoration: "none" }}
              >
                <Link
                  to="/channel"
                  className="nav-a"
                  style={{ color: "white" }}
                >
                  CHANNEL
                </Link>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                className={`block py-3 nav-aaa text-sm Support-text text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent  ${
                  activeLink === "SUPPORT" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("SUPPORT")}
                style={{ display: "none", textDecoration: "none" }}
              >
                <Link
                  to="https://help.pixelsport.tv/en/"
                  className="nav-a"
                  style={{ color: "white" }}
                >
                  SUPPORT
                </Link>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavLinks;
