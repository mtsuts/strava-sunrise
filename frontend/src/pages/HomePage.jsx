import { useState, useEffect } from "react";
import { Slide, Box } from "@mui/material";
import pathImage from "../images/path.JPG";

export default function HomePage() {


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 4,
        fontSize: 20,
      }}
    >
      <Slide
        direction="up"
        in={true}
        timeout={2000}
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
        in={true}
        timeout={2000}
        mountOnEnter
        unmountOnExit
      >
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Box sx={{ fontSize: 28, fontWeight: "medium" }}>
            You went on a unique ride and would love to share the route with
            other cyclists?
          </Box>
          <Box sx={{ marginTop: 4 }}>
            Here is how you can do it: Authorize with Strava by clicking 'Share your route'
            and select the activity you'd like to share as a route worldwide.
          </Box>
        </Box>
      </Slide>
    </Box>
  );
}
