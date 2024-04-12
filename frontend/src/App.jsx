import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Public from "./routes/Public";
import Private from "./routes/Private";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";
import Snippet from "./pages/Snippet";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/" element={<Private />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/snippet/:id" element={<Snippet />} />
          </Route>
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
