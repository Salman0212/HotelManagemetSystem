import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const RequireAdmin = ({ children }) => {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  if (!isAdmin()) {
    return <Navigate to="/" state={{ error: "Access denied. Admin privileges required." }} />;
  }

  return children;
};

export default RequireAdmin; 