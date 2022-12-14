import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuitems = (
    <>
      <li className="text-xl font-semibold">
        <Link to={"/"}>HOME</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link to={"/about"}>ABOUT</Link>
      </li>

      <li className="text-xl font-semibold">
        <Link to={"/skill"}>SKILL</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link to={"/services"}>SERVICES</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link to={"/portfolio"}>PORTFOLIO</Link>
      </li>
      <li className="text-xl font-semibold">
        <Link to={"/contact"}>CONTACT</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-800 flex justify-between text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
          >
            {menuitems}
          </ul>
        </div>
        <Link
          className="sakib btn btn-ghost normal-case text-2xl text-pink-600 font-bold"
          to="/"
        >
          M.T.N Sakib
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">{menuitems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-secondary lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
