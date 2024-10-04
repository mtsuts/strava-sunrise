import { createTheme } from "@mui/material/styles";
import { blueGrey, deepPurple, red, purple } from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     background: {
//       main: {
//         blueGrey800: blueGrey[800],
//         deepPurple900: deepPurple[900],
//         deepPurple600: deepPurple[600],
//       },
//       secondary: {
//         purple500: purple[400],
//         purple700: purple[700],
//       },
//     },
//   },
// });

const theme = createTheme({
  palette: {
    mode: "dark", // To ensure a dark (black) UI, use 'dark' mode
    primary: {
      main: "#ffffff", // White for primary color
    },
    background: {
      default: "#000000", // Black background
      paper: "#000000", // Black surfaces
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#000", // Grayish white for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Default font, feel free to change
    fontSize: 12, // Smaller, condensed text
    button: {
      textTransform: "none", // Avoid all caps for buttons
    },
    h1: {
      fontSize: "2rem", // Condensed headings
    },
    h2: {
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "0.875rem", // Smaller body text
    },
    body2: {
      fontSize: "0.75rem", // Even smaller body text for condensed feel
    },
  },
  spacing: 4, // Condensed spacing, default is 8
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          transition: "none !important", // Disable animations
          animation: "none !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px", // Condensed buttons with sharp corners
          padding: "4px 8px", // Condensed padding
          fontWeight: "bold",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: "4px 8px", // Condensed input fields
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "8px", // Condensed padding in cards
          boxShadow: "none", // Remove shadow for snappy, flat UI
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: "4px 8px", // Condensed app bar
        },
      },
    },
  },
});

export default theme;
