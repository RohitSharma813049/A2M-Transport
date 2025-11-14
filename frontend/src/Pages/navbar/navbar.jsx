import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTruck, FaPhoneAlt, FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/app/reducer/user"; 
import "@/App.css";

export function UserNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header
      className="shadow-sm sticky top-0 z-50"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LEFT — LOGO */}
        <div className="flex items-center space-x-3">
          <div
            className="p-3 rounded-xl text-white"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            <FaTruck className="text-2xl" />
          </div>
          <div>
            <h1 className="font-bold text-xl" style={{ color: "var(--text-dark)" }}>
              A2M Transport
            </h1>
            <p className="text-sm" style={{ color: "var(--text-dark)" }}>
              Gurgaon & Delhi NCR
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-blue-600" style={{ color: "var(--text-dark)" }}>Home</Link>
          <Link to="/services" className="hover:text-blue-600" style={{ color: "var(--text-dark)" }}>Services</Link>
          <Link to="/about" className="hover:text-blue-600" style={{ color: "var(--text-dark)" }}>About</Link>
          <Link to="/contact" className="hover:text-blue-600" style={{ color: "var(--text-dark)" }}>Contact</Link>
        </nav>

        {/* RIGHT — AUTH BUTTONS */}
        <div className="hidden md:flex items-center space-x-6">

          {/* If NOT logged in → Show Login */}
          {!isAuthenticated && (
            <Link
              to="/account/login"
              className="flex items-center hover:text-blue-600"
              style={{ color: "var(--text-dark)" }}
            >
              <FaUser className="mr-1" /> Login
            </Link>
          )}

          {/* If logged in → Show Profile & Logout */}
          {isAuthenticated && (
            <>
              {/* Profile Button */}
              <Link
                to="/account/profile"
                className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                <FaUser className="mr-1" /> {user?.name || "Profile"}
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center text-red-600 hover:text-red-800 font-semibold"
              >
                <FaSignOutAlt className="mr-1" /> Logout
              </button>
            </>
          )}

          {/* Call Button */}
          <a
            href="tel:8130880761"
            className="flex items-center text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            <FaPhoneAlt className="mr-2" /> 8130880761
          </a>
        </div>

        {/* MOBILE MENU BTN */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col items-center py-4 space-y-4 border-t"
          style={{ backgroundColor: "var(--background)", color: "var(--text-dark)" }}
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</Link>

          {/* AUTH — MOBILE */}
          {!isAuthenticated && (
            <Link
              to="/account/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center hover:text-blue-600"
            >
              <FaUser className="mr-1" /> Login
            </Link>
          )}

          {isAuthenticated && (
            <>
              {/* Profile */}
              <Link
                to="/account/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center text-blue-600 font-semibold"
              >
                <FaUser className="mr-1" /> {user?.name || "Profile"}
              </Link>

              {/* Logout */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="flex items-center text-red-600 font-semibold"
              >
                <FaSignOutAlt className="mr-1" /> Logout
              </button>
            </>
          )}

          {/* Call Button */}
          <a
            href="tel:8130880761"
            className="flex items-center text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            <FaPhoneAlt className="mr-2" /> 8130880761
          </a>
        </div>
      )}
    </header>
  );
}
