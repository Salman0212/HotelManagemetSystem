// import React from 'react'

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "../auth/Logout";
import { useAuth } from "../auth/AuthProvider";
import { FaUser } from "react-icons/fa";
// Import the logo
import hotelLogo from "../../assets/images/logo2.png";

const Navbar = () => {
  const [showAccount, setShowAccount] = useState(false);
  const { user, isAdmin } = useAuth();

  const handleAccountClick = () => {
    setShowAccount(!showAccount);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow sticky-top">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          {/* Replace the text with the logo image */}
          <img 
            src={hotelLogo} 
            alt="Shaik's Hotel Logo" 
            height="40" 
            className="d-inline-block align-text-top me-2" 
          />
          <span className="hotel-color">Shaik's Hotel</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={"/browse-all-rooms"}
              >
                All Rooms
              </NavLink>
            </li>

            {/* Show Add Room only for admin users */}
            {isAdmin() && (
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Admin Panel
                </Link>
              </li>
            )}
          </ul>

          <ul className="d-flex navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/find-booking"}>
                My Bookings
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleAccountClick}
              >
                <FaUser className="me-1" /> You
              </a>

              <ul
                className={`dropdown-menu ${showAccount ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                {user ? (
                  <>
                    <Logout />
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to={"/login"}>
                        User
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/admin"}>
                        Admin
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
