import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      main: red[500],
    },
    primary: {
      main: red[500]
    },
  },
});

export default theme;
