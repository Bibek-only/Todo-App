import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-around  w-full mt-14 fixed  z-10 top-0">
      <div className="left">
        
        <NavLink to="/">
          <div className="logo text-2xl font-bold">
            Only<span className="text-blue-500">Do...</span>
          </div>
        </NavLink>
      </div>
      <div className="right flex gap-6 text-2xl font-bold">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            [isActive ? "text-blue-500 duration-200" : ""].join(" ")
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            [isActive ? "text-blue-500 duration-200" : ""].join(" ")
          }
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
