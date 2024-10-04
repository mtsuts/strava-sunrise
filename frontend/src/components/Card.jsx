import { Box } from "@mui/material";
import theme from "../utils/themes";
import { ThemeProvider } from "@emotion/react";
import MapWithPolylines from "./MapWithPolylines";

export default function Card(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          "&:hover": {
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            cursor: "pointer",
          },
          fontSize: 20,
          bgcolor: theme.palette.background.green,
          color: theme.palette.text.secondary,
          p: 4,
          borderRadius: 4,
          width: "100%",
          // maxWidth:600,
          fontFamily: theme.typography.fontFamily,
          textAlign: "center",
          margin: "0 auto",
        }}
        onClick={props.onClick}
      >
        <Box sx={{ fontWeight: "bold", fontSize: 30 }}> {props.data.name} </Box>
        <Box>{props.data.city.split(",")[0]} </Box>
        <Box>
          <MapWithPolylines polyline={props.data.polyline} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
