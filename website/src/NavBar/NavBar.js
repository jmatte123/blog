import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.background,
    },
}));

function NavBar() {
    const classes = useStyles();
    return (
        <div className="NavBar">
            <AppBar className={classes.root} position="relative">
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