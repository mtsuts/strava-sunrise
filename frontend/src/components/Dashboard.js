import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useContext } from "react";
import { AppContext } from "./AppContext";


export default function Dashboard(props) {
  const {open, setOpen} = useContext(AppContext)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <div>
      <Drawer anchor='right' transitionDuration={1000} open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 4 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem disablePadding>
              <Link to='/my-profile'>
                <ListItemButton>
                  <ListItemText primary='My Profile' />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link to='/logout'>
                <ListItemButton>
                  <ListItemText primary='Log Out' />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}
