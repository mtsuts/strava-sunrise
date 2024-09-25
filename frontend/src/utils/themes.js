import { createTheme } from '@mui/material/styles';
import { blueGrey, deepPurple, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      main: {
        red500: red[500],
        blueGrey800: blueGrey[800],
        deepPurple900: deepPurple[900],
        deepPurple600: deepPurple[600]
      }
    },
  },
});

export default theme;
