import React, { useState, useEffect, useRef, useContext } from "react";
import * as d3 from "d3";
import { AppContext } from "../components/AppContext";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { GetActivities } from "../api/api";
import { useSearchParams } from "react-router-dom";
import theme from "../utils/themes";
import Card from "../components/Card";
import CardsGrid from "../components/CardsGrid";

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
  const activities = data?.data || [];

  return (
    <>
      <Box>
        <Box
          sx={{
            color: theme.palette.text.secondary,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {!token && "Please authenticate"}
        </Box>
        <CardsGrid activities={activities} />
      </Box>
    </>
  );
}
