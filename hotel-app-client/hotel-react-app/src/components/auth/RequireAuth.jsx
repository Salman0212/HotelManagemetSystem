// import React from 'react'

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
