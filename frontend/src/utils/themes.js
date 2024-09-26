import { createTheme } from '@mui/material/styles';
import { blueGrey, deepPurple, red, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      main: {
        blueGrey800: blueGrey[800],
        deepPurple900: deepPurple[900],
        deepPurple600: deepPurple[600]
      },
      secondary: {
        purple500: purple[400],
        purple700: purple[700]
      }
    },
  },
});

export default theme;
