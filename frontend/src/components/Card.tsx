import React from "react";
import { Box } from "@mui/material";
import theme from "../utils/themes";
import MapWithPolylines from "./MapWithPolylines";
import Button from "@mui/material/Button";

interface CardProps {
  activityID: String,
  polyline: [],
  activityName: String,
  city: String, 
  athleteID: String,
}

export default function Card({ activityID, polyline, activityName, city, athleteID }: CardProps) {
  const activityUrl = `https://www.strava.com/activities/${activityID}`;

  function handleAddButtonClick() {
    console.log(activityID);
  }
  return (
    <>
      <Box
        sx={{
          fontSize: 20,
          backgroundColor: "#ffffff",
          color: theme.palette.text.secondary,
          p: 4,
          borderRadius: 1,
          width: "100%",
          textAlign: "left",
          margin: "0 auto",
        }}
        // onClick={onClick}
      >
        <Button
          onClick={handleAddButtonClick}
          sx={{ marginBottom: 2 }}
          variant="contained"
        >
          Add
        </Button>
        <a target="_blank" href={activityUrl}>
          <Box>
            <MapWithPolylines polyline={polyline} />
          </Box>
          <Box sx={{ fontWeight: "medium", fontSize: 23, marginTop: 2 }}>
            {activityName}
          </Box>
          <Box sx={{ fontSize: 12 }}> {city}</Box>
          <Box sx={{ fontSize: 12 }}> Author: {athleteID}</Box>
        </a>
      </Box>
    </>
  );
}
