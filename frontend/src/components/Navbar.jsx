import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0">
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b ">
        <Logo />
      </div>
    </nav>
  );
}
