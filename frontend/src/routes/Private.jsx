import { useAuthStore } from "@/store/auth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const Private = () => {
  const authenticated = useAuthStore((state) => state.authenticated);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Private;
