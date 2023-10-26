import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Header = ({ setSearchCoin }) => {
  return (
    <header className="p-4 bg-red-300 text-yellow-50">
      <div className="container flex justify-between h-8 mx-auto">
        <ul className="items-stretch hidden space-x-3 lg:flex font-medium">
          <li className="flex">
            <NavLink
              to="/"
              className="flex items-center px-4 -mb-1 text-white "
            >
              {/* border-b-2 border-transparent text-red-600 border-red-600 */}
              Coins
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/about"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              About
            </NavLink>
          </li>
        </ul>
        <NavLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center space-x-2 p-2"
        >
         <span> <img src="./logo512.png" className="w-6" alt="Cryptoinator"/></span>
         <span className="font-mono">Cryptoinator</span>
        </NavLink>
        <div className="flex items-center md:space-x-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-red-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-red-100 text-red-800 focus:bg-red-50"
              onChange={(event) => {
                setSearchCoin(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="dropdown md:hidden relative">
          <button title="Open menu" type="button" className="p-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-red-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-red-700 pt-1 right-1">
            <li className="">
              <NavLink
                className="rounded-t bg-red-200 hover:bg-red-300 py-2 px-4 block whitespace-no-wrap"
                to="/"
              >
                Coins
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className="bg-red-200 hover:bg-red-300 py-2 px-4 block whitespace-no-wrap"
                to="/about"
              >
                About
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
