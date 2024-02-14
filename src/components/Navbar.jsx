import React from "react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const navLink = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/team",
    display: "Team",
  },
];

const Navbar = () => {
  const navMenu = useRef(null);

  const callMenubtn = () => {
    navMenu.current.classList.toggle("hidden");
  };

  return (
    <nav className="navbar-bg fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={`/assets/logos/gfg-logo.svg`} className="h-8" alt="Logo" />
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap ">
            GFG-MITA
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="https://chat.whatsapp.com/FqjB1hqDzgWDFz1ZyA9SCJ"
            target="_blank"
            className="hidden md:block  bg-[#4eff3f] text-black rounded-lg px-5 py-3 text-xs  font-bold tracking-wider uppercase"
          >
            Join Our Community
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={callMenubtn}
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
          ref={navMenu}
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            {navLink.map((ele, index) => {
              return (
                // <li>
                <NavLink
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  key={index}
                  to={ele.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? " block py-2 px-3 text-[#4fff3f90]  rounded md:bg-transparent  md:p-0 "
                      : " block py-2 px-3 text-slate-50  rounded md:bg-transparent md:hover:text-[#fff] md:p-0 "
                  }
                  onClick={callMenubtn}
                >
                  {ele.display}
                </NavLink>
                // </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
