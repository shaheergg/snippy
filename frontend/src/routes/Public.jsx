import { useAuthStore } from "@/store/auth";
import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
  const authenticated = useAuthStore((state) => state.authenticated);

  return authenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default Public;
