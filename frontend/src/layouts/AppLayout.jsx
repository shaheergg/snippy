import AppBar from "@/components/AppBar";
import React from "react";
const AppLayout = ({ children }) => {
  return (
    <section>
      <AppBar />
      <div>{children}</div>
    </section>
  );
};

export default AppLayout;
