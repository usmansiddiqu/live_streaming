import React, { useState } from "react";
import "../../Assets/styles/Navbar.css";
import { Link } from "react-router-dom";

function NavLinks() {
  const [activeLink, setActiveLink] = useState();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div
      style={{
        width: "35%",
      }}
    >
      <ul className="flex flex-col font-medium md:flex-row md:space-x-4 md:mt-0 md:border-0  w-full  justify-between">
        <li>
          <a
            href="#"
            className={`block py-3 text-sm  text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
              activeLink === "Home" ? "active" : ""
            }`}
            aria-current={activeLink === "Home" ? "page" : undefined}
            onClick={() => handleLinkClick("Home")}
          >
            <Link to="/">Home</Link>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`block py-3 text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
              activeLink === "MLB" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("MLB")}
          >
            <Link to="/MLB"> MLB</Link>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`block py-3 text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
              activeLink === "NBA" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("NBA")}
          >
            <Link to="/NBA"> NBA</Link>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`block py-3 text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
              activeLink === "NFL" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("NFL")}
          >
            <Link to="/NFL"> NFL</Link>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`block py-3 text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
              activeLink === "NHL" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("NHL")}
          >
            <Link to="/NHL"> NHL</Link>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`block py-3 text-sm text-gray-900 md:hover:bg-transparent md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
              activeLink === "UFC" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("UFC")}
          >
            <Link to="/UFC"> UFC</Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
