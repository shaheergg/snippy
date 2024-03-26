import { Button } from "@/components/ui/button";
import React from "react";
import { useAuthStore } from "@/store/auth";

const Dashboard = () => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={logout} variant="outline">
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
