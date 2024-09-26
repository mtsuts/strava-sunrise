import * as React from "react";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import theme from '../utils/themes'
import Dashboard from "./Dashboard";


export default function NavigationBar() {
  const { isLoading, open, setOpen } = useContext(AppContext)
  const token = localStorage.getItem('token')

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return <ThemeProvider theme={theme}>
    <Box sx={{
      bgcolor: theme.palette.background.main.deepPurple900
    }} className='text-white justify-between items-center flex gap-4 py-8 px-32 text-4xl'>
      <Link to='/' >
        Sunrise
      </Link>
      <Box sx={{ display: 'flex', alignItems: 'end', gap: 2 }}>
        {!isLoading && token && <Button sx={{ "&:hover": { bgcolor: theme.palette.background.main.deepPurple600, color: '#fff', }, p: 1.5, fontSize: 20, bgcolor: '#fff', color: theme.palette.background.main.deepPurple600, }} onClick={toggleDrawer(true)}> Menu</Button>}
        {!isLoading && !token && <Link to='/login'> <Button sx={{ "&:hover": { bgcolor: theme.palette.background.main.deepPurple600, color: '#fff', }, p: 1.5, fontSize: 20, bgcolor: '#fff', color: theme.palette.background.main.deepPurple600, }}>Login</Button></Link>}
      </Box>

    </Box>
    <Dashboard />
  </ThemeProvider>
}