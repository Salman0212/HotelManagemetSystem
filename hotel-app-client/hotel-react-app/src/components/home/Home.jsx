// import React from 'react'

import HotelService from "../common/HotelService";
import MainHeader from "../layout/MainHeader";
import RoomCarousal from "../common/RoomCarousal";
import RoomSearch from "../common/RoomSearch";
import { useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const Home = () => {
  const location = useLocation();
  const { user } = useAuth();
  const message = location.state && location.state.message;

  return (
    <section>
      {message && (
        <div className="alert alert-success text-center">
          {message}
        </div>
      )}
      
      {user && (
        <h6 className="text-success text-center">
          You are logged-In as {user.sub}
        </h6>
      )}
      
      <MainHeader />
      <div className="container">
        <RoomSearch />
        <RoomCarousal />
        
        <HotelService />
      </div>
    </section>
  );
};

export default Home;
