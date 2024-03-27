import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/auth";
import React from "react";

export default function RootLayout({ children }) {
  const authenticated = useAuthStore((state) => state.authenticated);
  return (
    <div className="">
      {!authenticated && <Navbar />}
      <div>{children}</div>
    </div>
  );
}
