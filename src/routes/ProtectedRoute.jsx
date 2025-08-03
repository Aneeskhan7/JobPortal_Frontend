import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ requiredRole }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); // assuming you store user info in localStorage

  // ✅ 1. Redirect if not logged in
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ 2. Check if user has the correct role (optional)
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
