import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import   Navbar  from '../components/home/NavBar';
import BookShow from '../components/home/BookShow';

function HomePage() {
  return (
    <div>
        <Navbar/>
        <BookShow/>
    </div>
  )
}

export default HomePage