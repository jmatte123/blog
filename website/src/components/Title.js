import React from 'react';
import {Container, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        fontFamily: 'Anton',
        background: 'linear-gradient(45deg, #00ccff 30%, #00ff00 90%)',
        color: '#ffffff',
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(0, 255, 204, .3)',
    },
}));

function Title() {
    const classes = useStyles();
    return (
        <Container lg>
            <Typography variant="h1" className={classes.root}>
                The Anxious Turtle
            </Typography>
        </Container>
    );
}

export default Title;