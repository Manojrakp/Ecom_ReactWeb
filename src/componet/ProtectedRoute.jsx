// src/componet/ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/context/AuthContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  //  console.log("ProtectedRoute ----->", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
