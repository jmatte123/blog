import React, { useEffect } from 'react';
import { makeStyles, Typography, Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.background,
      margin: 20,
      height: 500,
      color: '#000000',
      width: 500,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#e6e6e6',
      boxShadow: '0 3px 5px 2px rgba(230, 230, 230, .3)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'auto',
    },
    title: {
        padding: 20,
        fontFamily: theme.fontFamily,
        fontWeight: 'bolder',
        fontSize: 50,
        letterSpacing: -1,
    },
    date: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: '#b3b3b3'
    },
    content: {
        marginTop: 30,
        fontFamily: 'Roboto',
        marginBottom: 30,
        paddingBottom: 30,
    },
}));

export default function Post(props) {
    const post = props.post;
    const classes = useStyles();
    const url = 'https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap';
    const createElement = url => {
        const element = document.createElement('link')
        element.rel = 'stylesheet'
        element.href = url
        return element
    };

    useEffect(() => {
        const element = createElement(url)
        document.head.appendChild(element)
        return () => document.head.removeChild(element)
    }, [])

    return (
        <Box className={classes.root}>
            <Container>
                <Typography className={classes.date}>
                    {post.createdAt}
                </Typography>
                <Typography>
                    <Box className={classes.title}>
                        {post.title}
                    </Box>
                </Typography>
            </Container>
            <Container className={classes.content}>
                <Typography>
                    {post.content}
                </Typography>
            </Container>
        </Box>
    );
}