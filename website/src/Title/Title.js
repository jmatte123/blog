import React from 'react';
import './Title.css';
import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
}));

function Title() {
    const classes = useStyles();
    return (
        <Typography variant="h1" className={classes.root}>
            The Anxious Turtle
        </Typography>
    );
}

export default Title;