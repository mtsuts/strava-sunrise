import React, { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import theme from "./utils/themes";
import { ThemeProvider } from "@emotion/react";
import { Slide, Box } from "@mui/material";
import pathImage from "./images/path.JPG";

function App() {
  const [showBoxes, setShowBoxes] = useState(false);

  useEffect(() => {
    setShowBoxes(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          fontFamily: theme.typography.fontFamily,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.white,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <NavigationBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            px: {xs: 5, sm: 32},
            py: {xs: 5, sm:16},
            gap: 4,
            fontSize: 20,
          }}
        >
          <Slide
            direction="up"
            in={showBoxes}
            timeout={3000}
            mountOnEnter
            unmountOnExit
          >
            <Box sx={{ width: "100%", textAlign: "left" }}>
              <img
                src={pathImage}
                alt="path"
                className="md:w-[550px] md:h-[550px] w-full h-full rounded-2xl"
              />
            </Box>
          </Slide>
          <Slide
            direction="up"
            in={showBoxes}
            timeout={3000}
            mountOnEnter
            unmountOnExit
          >
            <Box sx={{ width: "100%", textAlign: "left" }}>
              <Box sx={{ fontSize: 28, fontWeight: "medium" }}>
                You went on a unique ride and would love to share the route with
                other cyclists?
              </Box>
              <Box sx={{ marginTop: 4 }}>
                Here is how you can do it: Authorize with Strava by clicking
                'Login' and select the activity you'd like to share as a route
                worldwide.
              </Box>
            </Box>
          </Slide>
        </Box>

        <div className="flex-1">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
