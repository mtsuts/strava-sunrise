import { Box } from "@mui/material";
import theme from "../utils/themes";
import { ThemeProvider } from "@emotion/react";

export default function Card(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          "&:hover": {
            bgcolor: theme.palette.background.default,
            cursor: "pointer",
          },
          fontSize: 20,
          bgcolor: theme.palette.background.default,
          color: "#ffffff",
          p: 4,
          borderRadius: 4,
          maxWidth: 600,
          textAlign: "center",
        }}
        onClick={props.onClick}
      >
        <Box sx={{fontWeight: 'bold', fontSize: 30}}> {props.name} </Box>
        <Box>{props.city} </Box>
        <Box>{props.state}</Box>
      </Box>
    </ThemeProvider>
  );
}
