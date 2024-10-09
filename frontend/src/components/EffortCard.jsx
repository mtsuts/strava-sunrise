import { Box } from "@mui/material";

function EffortCard(props) {
  return (
    <Box
      sx={{
        margin: "0 auto",
        border: 1,
        p: 3,
        width: 1 / 2,
        textAlign: "center",
      }}
    >
      <Box sx={{ fontSize: 24 }}>Check out your achievments</Box>
      <Box> Biggest ride: {props.data.biggestRide} km</Box>
      <Box> Biggest climb: {props.data.biggestClimb} meter </Box>
      <Box> All distance you covered: {props.data.allDistance} km</Box>
      <Box> How much you have climbed: {props.data.allElevation} meter</Box>
    </Box>
  );
}

export default EffortCard;
