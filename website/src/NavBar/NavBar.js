import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <AppBar className="appBar" position="relative">
                <Toolbar>
                    <IconButton edge="start" className="iconButton" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        The Anxious Turtle
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;