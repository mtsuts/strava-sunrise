import { Box } from "@mui/material";
import theme from "../utils/themes";
import MapWithPolylines from "./MapWithPolylines";

export default function Card(props) {
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
        <Box>
          <MapWithPolylines polyline={props.data.polyline} />
        </Box>
        <Box sx={{ fontWeight: "medium", fontSize: 23 }}>
          {props.data.name}
        </Box>
      </Box>
    </>
  );
}
