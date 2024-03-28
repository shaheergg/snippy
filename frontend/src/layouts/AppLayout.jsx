import AppBar from "@/components/AppBar";
import React from "react";
const AppLayout = ({ children }) => {
  return (
    <section className="bg-[#f7f7fc] min-h-screen">
      <AppBar />
      <div>{children}</div>
    </section>
  );
};

export default AppLayout;
