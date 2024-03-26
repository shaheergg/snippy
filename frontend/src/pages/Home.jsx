import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth";
import React from "react";

const Home = () => {
  const login = useAuthStore((state) => state.login);
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={login} variant="outline">
        Login
      </Button>
    </div>
  );
};

export default Home;
