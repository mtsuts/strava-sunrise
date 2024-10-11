import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import theme from "./utils/themes";
import { GetActivities } from "./api/api";
import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  const { data, setData } = useContext(AppContext);
  const dataLoaded = useRef(false);

  const location = useLocation();
  const isHomePage = false && location.pathname === "/";

  return (
    <Box
      sx={{
        fontFamily: theme.typography.fontFamily.inter,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.white,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <ResponsiveAppBar />
      <Container maxWidth={"lg"} sx={{ py: 28, px: { sm: 0, xs: 5 } }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
