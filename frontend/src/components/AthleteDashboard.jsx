import { Box } from "@mui/material";
import theme from "../utils/themes";

export default function AthleteDashboard(props) {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        border: 2,
        borderColor: theme.palette.background.secondary,
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      <Box>Hi {props.name}!</Box>
      <Box sx={{ fontWeight: 600, fontSize: 18 }}>
        <Box
          sx={{
            color: theme.palette.text.primary,
            marginBottom: 2,
            fontSize: 25,
          }}
        >
          Welcome to Sunrise
        </Box>
        The app from where you can share your unique activity as a route,
        worldwide!
      </Box>
    </Box>
  );
}
