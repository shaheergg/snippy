import { Button } from "@/components/ui/button";
import React from "react";
import { useAuthStore } from "@/store/auth";
import AppLayout from "@/layouts/AppLayout";
const Dashboard = () => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <AppLayout>
      <div className="p-4">
        <h1>Dashboard</h1>
        <Button onClick={logout} variant="outline">
          Logout
        </Button>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
