import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import theme from "../utils/themes";
import Dashboard from "./Dashboard";

export default function NavigationBar() {
  const { isLoading, open, setOpen } = useContext(AppContext);
  const token = localStorage.getItem("token");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: theme.palette.background.default,
        }}
        className="text-white justify-between items-center flex gap-4 md:px-32 py-5 px-5 text-4xl"
      >
        <Link to="/" sx={{ fontFamily: theme.typography.fontFamily }}>
          Sunrise
        </Link>
        <Box sx={{ display: "flex", alignItems: "end", gap: 2 }}>
          {!isLoading && token && (
            <Button
              sx={{
                "&:hover": {
                  bgcolor: theme.palette.background.paper,
                  color: "#fff",
                },
                p: 1.5,
                fontSize: 20,
                bgcolor: "#fff",
                color: theme.palette.text.secondary,
              }}
              onClick={toggleDrawer(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
              </svg>
            </Button>
          )}
          {!isLoading && !token && (
            <Link to="/login">
              {" "}
              <Button
                sx={{
                  "&:hover": {
                    bgcolor: theme.palette.background.secondary,
                    color: "#fff",
                  },
                  p: 1.5,
                  fontSize: 20,
                  bgcolor: "#fff",
                  color: theme.palette.text.secondary,
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </Box>
      </Box>
      <Dashboard />
    </ThemeProvider>
  );
}
