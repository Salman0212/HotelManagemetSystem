// import React from 'react'

import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";

export const AuthContext = createContext({
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
  isAdmin: () => false,
});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        // Check if token is expired
        if (decodedUser.exp * 1000 < Date.now()) {
          handleLogout();
        } else {
          setUser(decodedUser);
        }
      } catch (error) {
        handleLogout();
      }
    }
  }, []);

  const handleLogin = (token) => {
    const decodedUser = jwtDecode(token);
    localStorage.setItem("userId", decodedUser.sub);
    localStorage.setItem("userRole", JSON.stringify(decodedUser.roles));
    localStorage.setItem("token", token);
    setUser(decodedUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    setUser(null);
  };

  const isAdmin = () => {
    const roles = user?.roles || [];
    return roles.includes("ROLE_ADMIN");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
	return useContext(AuthContext)
}
