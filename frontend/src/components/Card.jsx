import { Box } from "@mui/material";
import theme from "../utils/themes";
import MapWithPolylines from "./MapWithPolylines";

export default function Card(props) {
  return (
    <>
      <Box
        sx={{
          fontSize: 20,
          bgcolor: theme.palette.background.green,
          color: theme.palette.text.secondary,
          p: 4,
          borderRadius: 4,
          width: "100%",
          textAlign: "center",
          margin: "0 auto",
        }}
        onClick={props.onClick}
      >
        <Box sx={{ fontWeight: "medium", fontSize: 30 }}>
          {" "}
          {props.data.name}{" "}
        </Box>
        <Box>{props.data.city.split(",")[0]} </Box>
        <Box>{/* <MapWithPolylines polyline={props.data.polyline} /> */}</Box>
      </Box>
    </>
  );
}
