import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, CircularProgress } from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
}));

export default function PostList() {
  const classes = useStyles();
  const [postsMap, setPostsMap] = useState(null);

  useEffect(() => {   
    async function fetchData() {
      const response = await fetch('https://the-anxious-turtle.com/api/posts');
      const myJson = await response.json();
      setPostsMap(myJson.map((value) =>
        <Post post={value} />
      ));
    };
    fetchData();
  }, []);

  if (postsMap === null) {
    return (
      <Container lg>
        <Box className={classes.progress}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container lg>
      <Box className={classes.root}>
        {postsMap}
      </Box>
    </Container>
  );
}
