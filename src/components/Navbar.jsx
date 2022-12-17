import React from "react";
import { NavLink, Link } from "react-router-dom";

//
const Navbar1 = () => {
  let activeStyle = {
    color: "red",
  };
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <svg width="32" height="32" viewBox="0 0 64 64">
            <path
              fill="#354a52"
              d="M49.45 1.557c-6.078 0-11.255 3.797-13.327 9.143H23.797a8.552 8.552 0 1 0 0 17.104h17.818a14.247 14.247 0 0 0 7.835 2.346c7.894 0 14.296-6.403 14.296-14.295c0-7.898-6.402-14.298-14.296-14.298"
            />
            <path
              fill="#243438"
              d="M47.691 6.591c-5.01 0-9.273 3.126-10.977 7.532H26.557a7.051 7.051 0 0 0-7.05 7.05c0 3.89 3.157 7.05 7.05 7.05h14.681a11.718 11.718 0 0 0 6.454 1.933c6.507 0 11.781-5.275 11.781-11.779c0-6.51-5.275-11.781-11.782-11.781"
            />
            <path
              fill="#56787f"
              d="M44.47 17.03c0 2.346 1.857 4.25 4.146 4.25c2.298 0 4.16-1.903 4.16-4.25c0-2.351-1.862-4.256-4.16-4.256c-2.289 0-4.146 1.905-4.146 4.256"
            />
            <g fill="#243438">
              <path d="M34.539 47.957h3.798v15.775h-3.798zm-5.112 15.775H25.24l6.283-20.952h4.19z" />
              <path d="M42.723 63.732h4.19L40.629 42.78h-4.191z" />
              <path d="M26.69 45.4h19.498v9.751H26.69zm-6.345-2.14L.848 47.45V27.23l19.497 6.284z" />
            </g>
            <path fill="#34484c" d="M14.174 27.23h46.09v23.05h-46.09z" />
            <path
              fill="#56787f"
              d="M33.26 30.471h20.854v10.43H33.26zM16.263 41.04h1.558v6.918h-1.558zm3.568 0h1.557v6.918h-1.557zm3.598 0h1.559v6.918h-1.559z"
            />
          </svg>
          {/* Left links */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item p-2">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Watch List
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                to="/Watched"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Watched
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                to="/Add"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                +Add
              </NavLink>
            </li>
          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="flex items-center relative">
          {/* Icon */}

          <div className="dropdown relative">
            <div className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                />
              </svg>
              <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                1
              </span>
            </div>
          </div>
          <div className="dropdown relative ml-4">
            <div
              className="dropdown-toggle flex items-center hidden-arrow"
              // href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3zm0 1c-1.84 0-3.56.5-5.03 1.37c-.61.36-.97 1.02-.97 1.72V16c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-.91c0-.7-.36-1.36-.97-1.72A9.844 9.844 0 0 0 12 12zm10.11-4.21c.55-.23.78-.88.5-1.41a12.12 12.12 0 0 0-4.99-4.99a1.01 1.01 0 0 0-1.4.5c-.19.47-.01 1.02.43 1.25c1.79.94 3.26 2.42 4.21 4.21c.23.45.78.63 1.25.44zM7.79 1.89c-.23-.55-.88-.78-1.4-.5A12.06 12.06 0 0 0 1.4 6.38c-.28.52-.05 1.18.5 1.41a.98.98 0 0 0 1.25-.43c.94-1.79 2.42-3.26 4.21-4.21c.44-.24.62-.79.43-1.26zm-5.9 14.32c-.55.23-.78.88-.5 1.4c1.13 2.12 2.87 3.87 5 5c.52.28 1.17.04 1.4-.5c.19-.47.01-1.02-.43-1.25c-1.79-.94-3.26-2.42-4.21-4.21a1 1 0 0 0-1.26-.44zm14.32 5.9c.23.55.88.78 1.4.5c2.12-1.13 3.87-2.87 5-5c.28-.52.04-1.17-.5-1.4c-.47-.19-1.02-.01-1.25.43c-.94 1.79-2.42 3.26-4.21 4.21a1 1 0 0 0-.44 1.26z"
                />
              </svg>
            </div>
            <ul
              className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <Link
                  to="Profile"
                  className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                >
                  Profile
                </Link>
                <Link
                  to="Account"
                  className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                >
                  Account
                </Link>
              </li>
              <Link
                to="LogOut"
                className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
              >
                LogOut
              </Link>
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
    </nav>
  );
};

export default Navbar1;
