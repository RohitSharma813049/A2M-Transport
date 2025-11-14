import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaListAlt,
  FaEnvelopeOpenText,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/app/reducer/user";

export function AdminNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 shadow-md">
      
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Admin Panel</h2>

        {/* Hamburger Button (Mobile) */}
        <button
          className="text-white md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu */}
      <ul
        className={`
          md:flex md:space-x-6 md:items-center md:mt-0 
          mt-4 flex-col md:flex-row 
          ${open ? "flex" : "hidden md:flex"}
        `}
      >
        {/* Dashboard */}
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
            onClick={() => setOpen(false)}
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </li>

        {/* User List */}
        <li>
          <NavLink
            to="/admin/userlist"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
            onClick={() => setOpen(false)}
          >
            <FaListAlt />
            <span>User List</span>
          </NavLink>
        </li>

        {/* Contact Messages */}
        <li>
          <NavLink
            to="/admin/contactlist"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
            onClick={() => setOpen(false)}
          >
            <FaEnvelopeOpenText />
            <span>Contact Messages</span>
          </NavLink>
        </li>

        {/* Profile */}
        <li>
          <NavLink
            to="/admin/profile"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
            onClick={() => setOpen(false)}
          >
            <FaUserCircle />
            <span>{user?.name || "Profile"}</span>
          </NavLink>
        </li>

        {/* Logout */}
        <li className="md:ml-auto">
          <button
            onClick={() => {
              handleLogout();
              setOpen(false);
            }}
            className="flex items-center space-x-2 px-3 py-2 rounded bg-red-600 hover:bg-red-700 w-full md:w-auto mt-3 md:mt-0"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
