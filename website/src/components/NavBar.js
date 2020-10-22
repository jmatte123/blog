import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#ffffff',
        color: theme.color
    },
}));

function NavBar() {
    const classes = useStyles();
    return (
        <div className="NavBar">
            <AppBar className={classes.root} position="relative">
                <Toolbar>
                    <Typography variant="h6">
                        The Anxious Turtle
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;