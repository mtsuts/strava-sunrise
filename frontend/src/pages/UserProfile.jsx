import React, { useState, useEffect, useRef, useContext } from "react";
import * as d3 from "d3";
import { AppContext } from "../components/AppContext";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { GetActivities } from "../api/api";
import { useSearchParams } from "react-router-dom";
import theme from "../utils/themes";
import {
  fromMetersSecondToKmsHour,
  fromMetersToKms,
  dateFormatter,
} from "../utils/metricsUpdates";
import Card from "../components/Card";
import MapWithPolylines from "../components/MapWithPolylines";

export default function UserProfile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, setData, isLoading, setIsLoading } = useContext(AppContext);
  const dataLoaded = useRef(false);

  const token = localStorage.getItem("token");
  // load data
  useEffect(() => {
    if (dataLoaded.current) {
      return;
    }
    dataLoaded.current = true;
    GetActivities()
      .then((data) => {
        setSearchParams({});
        setData(data);
        localStorage.setItem("token", data.accessToken);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  // data manipulations
  const mainData = data?.data || [];
  const activities = mainData

  console.log(activities);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ textAlign: "center", margin: '0 auto', fontSize: 20 }}>
        <Box
          sx={{
            marginTop: 2,
            color: theme.palette.text.secondary,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {" "}
          {/* {token && "My last 12 Activities"} */}
          {!token && "Please authenticate"}
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(2, 1fr)",
            px: 32,
            py: 6,
          }}
        >
          {activities.map((activity, index) => {
            return <Card key={index} data={activity} />;
          })}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
