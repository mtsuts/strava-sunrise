import { Box } from "@mui/material";
import theme from "../utils/themes";
import MapWithPolylines from "./MapWithPolylines";
import Button from "@mui/material/Button";

export default function Card(props) {
  const activityUrl = `https://www.strava.com/activities/${props.data.activityID}`;

  function handleAddButtonClick() {
    console.log(props.data.activityID)
  }
  return (
    <>
      <Box
        sx={{
          fontSize: 20,
          backgroundColor: theme.palette.text.white,
          color: theme.palette.text.secondary,
          p: 4,
          borderRadius: 1,
          width: "100%",
          textAlign: "left",
          margin: "0 auto",
        }}
        onClick={props.onClick}
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
            <MapWithPolylines polyline={props.data.polyline} />
          </Box>
          <Box sx={{ fontWeight: "medium", fontSize: 23, marginTop: 2 }}>
            {props.data.name}
          </Box>
          <Box sx={{ fontSize: 12 }}> {props.data.city}</Box>
          <Box sx={{ fontSize: 12 }}> Author: {props.data.athleteID}</Box>
        </a>
      </Box>
    </>
  );
}
