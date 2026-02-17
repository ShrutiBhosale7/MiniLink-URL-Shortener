

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <header className="h-16 bg-surface shadow-md sticky top-0 z-50 flex items-center">
      <div className="w-full flex justify-between items-center lg:px-14 sm:px-8 px-4">
        <Link to="/">
          <h1 className="font-bold text-2xl sm:text-3xl text-primary italic">
            MiniLink
          </h1>
        </Link>

        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center text-sm text-textPrimary font-semibold sm:static absolute left-0 top-[64px] transition-all duration-150 bg-surface sm:bg-transparent sm:h-auto h-0 overflow-hidden sm:overflow-visible sm:flex-row flex-col w-full sm:w-auto px-4 sm:px-0 ${
            navbarOpen ? "h-fit py-4" : ""
          }`}
        >
          <li className={`hover:text-accent transition`}>
            <Link to="/" className={`${path === "/" && "text-accent"}`}>
              Home
            </Link>
          </li>
          <li className={`hover:text-accent transition`}>
            <Link to="/about" className={`${path === "/about" && "text-accent"}`}>
              About
            </Link>
          </li>
          {token && (
            <li className={`hover:text-accent transition`}>
              <Link to="/dashboard" className={`${path === "/dashboard" && "text-accent"}`}>
                Dashboard
              </Link>
            </li>
          )}
          {!token && (
            <Link to="/register">
              <li className="bg-primary text-white w-24 text-center px-2 py-2 rounded-md hover:bg-opacity-90 transition">
                SignUp
              </li>
            </Link>
          )}
          {token && (
            <button
              onClick={onLogOutHandler}
              className="bg-error text-white w-24 text-center px-2 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              LogOut
            </button>
          )}
        </ul>

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center"
        >
          {navbarOpen ? (
            <RxCross2 className="text-textPrimary text-3xl" />
          ) : (
            <IoIosMenu className="text-textPrimary text-3xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
