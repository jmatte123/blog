import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200
  },
}));

export default function PostList() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {   // Update the document title using the browser API    
    async function fetchData() {
      const response = await fetch('https://the-anxious-turtle.com/api/posts');
      const myJson = await response.json();
      console.log(JSON.stringify(myJson));
      setData(myJson);
    };
    fetchData();
  }, []);

  function showData() {
    if (data !== null) {
      return data[0].title;
    }
  };

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg>
            <Paper className={classes.paper}>
              {showData()}
            </Paper>
          </Grid>
        </Grid>
        {/* <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid> */}
      </div>
    </Container>
  );
}
