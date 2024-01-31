import React from "react";
import logo from "../assets/logos/gfg-logo.svg";


const Navbar = () => {
  return (
    <nav className="navbar-bg fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap ">
            GFG-MITA
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="https://chat.whatsapp.com/FqjB1hqDzgWDFz1ZyA9SCJ"
            className="hidden md:block  bg-[#4eff3f] text-black rounded-lg px-5 py-3 text-xs  font-bold tracking-wider uppercase"
          >
            Join Our Community
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white  rounded md:bg-transparent md:hover:text-[#4eff3f] md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/team"
                className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-[#4eff3f] md:p-0 "
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-[#4eff3f] md:p-0 "
              >
                Events
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
