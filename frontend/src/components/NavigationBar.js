import * as React from "react";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import theme from '../utils/themes'


export default function NavigationBar() {
  const { isLoading } = useContext(AppContext)
  const token = localStorage.getItem('token')
  return <div className='bg-red100 text-white justify-between items-center flex gap-4 p-7 text-4xl'>
    <Link to='/'>
      <ThemeProvider theme={theme}>
        <Box sx={{
          bgcolor: theme.palette.background.main, boxShadow: 1,
          borderRadius: 2,
          p: 2,
        }}>My App </Box>
      </ThemeProvider>
    </Link>
    <div className="flex items-center gap-10">
    {token && !isLoading && <Link to='/my-profile'>
      <Box sx={{
        bgcolor: theme.palette.background.main, boxShadow: 1,
        borderRadius: 2,
        p: 1.5,
      }}>
        My Profile
      </Box>

    </Link>}
    {!token && !isLoading && <Link to='/login'>
      <ThemeProvider theme={theme}>
        <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.main, color: '#fff', fontSize: '20px' }}>Log In</Button>
      </ThemeProvider>
    </Link>}
    {token && !isLoading && <Link to='/logout'>
      <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.main, color: '#fff', fontSize: '20px' }}>
        Log Out
      </Button>
    </Link>}
    </div>
  </div>
}