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
  return <ThemeProvider theme={theme}>
    <Box sx={{
      bgcolor: theme.palette.background.main.deepPurple900
    }} className='text-white justify-between items-center flex gap-4 p-8 text-4xl'>
      <Link to='/'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" fill='white' viewBox="0 0 50 50">
          <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
        </svg>
      </Link>
      <div className="flex items-center gap-10">
        {token && !isLoading && <Link to='/my-profile'>
          <Box sx={{
            '&:hover': {backgroundColor: '#ffffff', color: '#5e35b1'},
            bgcolor: theme.palette.background.main.deepPurple600, boxShadow: 1,
            borderRadius: 2,
            p: 2.3,
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
            </svg>
          </Box>

        </Link>}
        {!token && !isLoading && <Link to='/login'>
          <Button variant="contained" sx={{ '&:hover': {backgroundColor: '#ffffff'}, backgroundColor: theme.palette.background.main.deepPurple600, color: '#fff', fontSize: '20px', p: 1.5 }}>Log In</Button>
        </Link>}
        {token && !isLoading && <Link to='/logout'>
          <Button variant="contained" sx={{ '&:hover': {backgroundColor: '#ffffff', color: '#5e35b1'}, backgroundColor: theme.palette.background.main.deepPurple600, color: '#fff', fontSize: '20px', p: 1.5 }}>
            Log Out
          </Button>
        </Link>}
      </div>
    </Box>
  </ThemeProvider>
}