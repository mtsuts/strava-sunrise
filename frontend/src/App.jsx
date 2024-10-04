import React, { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Box } from "@mui/material";

function App() {
  const { isLoggedIn, isLoading, data } = useContext(AppContext);
  const token = localStorage.getItem("token");
  console.log(data)

  return (
    <div className="flex flex-col min-h-[100vh]">
      <NavigationBar />

      <div className="flex-1">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
