// import React from 'react'

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useEffect } from "react";

const Admin = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if user is logged in but not an admin
    if (user && !isAdmin()) {
      navigate("/", { state: { error: "Access denied. Admin privileges required." } });
    }
  }, [user, isAdmin, navigate]);

  // If not logged in, show login form
  if (!user) {
    return (
      <div className="container m-4">
        <nav aria-label="breadcrumb" className="m-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Admin
            </li>
          </ol>
        </nav>
        <section className="container mt-5">
          <h2>Admin Login</h2>
          <hr />
          <p>Please log in with your admin credentials to access the admin panel.</p>
          <Link to="/login" className="btn btn-hotel" state={{ path: "/admin" }}>
            Login as Admin
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="container m-4">
      <nav aria-label="breadcrumb" className="m-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Admin
          </li>
        </ol>
      </nav>
      <section className="container mt-5">
        <h2>Admin Panel</h2>
        <hr />
        <div className="list-group">
          <Link to={"/existing-rooms"} className="list-group-item list-group-item-action">
            Manage Rooms
          </Link>
          <Link to={"/existing-bookings"} className="list-group-item list-group-item-action">
            Manage Bookings
          </Link>
          <Link to={"/add-room"} className="list-group-item list-group-item-action">
            Add New Room
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Admin;
