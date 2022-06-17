import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box style={{position:'fixed',width:"100%",top:0}} sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        LIBRARY
        </Typography>
        <Button onClick={
          () => navigate('/login')

         }  
        color="inherit">Add Book</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar