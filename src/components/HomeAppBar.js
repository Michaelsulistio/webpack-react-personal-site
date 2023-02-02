import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjectsSharp';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    toolbarButtons: {
        textDecorationThickness: '1px',
        textUnderlineOffset: '4px',
    },
  }));

const ButtonStyle = {
    color: 'black',
    ':hover': {
        textDecoration: 'underline',
        textDecorationColor: 'black',
    },
}

export default function HomeAppBar() {
    const classes = useStyles()
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{background: 'white', color: 'black' }} elevation={1} position="static">
        <Toolbar>
        <EmojiObjectsIcon sx={{
            color: 'black',
            fontSize: 32,
            outline: 'solid'
        }}/>
        <Divider flexItem variant="middle" sx={{background: 'black', marginLeft: '20px', marginRight: '20px'}} orientation="vertical" />
        <div className={classes.toolbarButtons}>
            <Button sx={ButtonStyle}>about</Button>
            <Button sx={ButtonStyle}>projects</Button>
            <Button sx={ButtonStyle}>contact</Button>
        </div>
        <Button variant="contained" sx={{':hover': {backgroundColor: 'black'}, backgroundColor: 'black', marginLeft: 'auto'}}> Play me!</Button>
        </Toolbar>
        </AppBar>
    </Box>
    );
}