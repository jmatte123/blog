import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import Title from './Title/Title'
import PostList from './PostList/PostList'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  background: 'linear-gradient(45deg, #000080 30%, #bada55 90%)',
});

function App() {
  return (
    <div className="App">
      <head>
        <title>The Anxious Turtle</title>
      </head>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Title />
        <PostList />
      </ThemeProvider>
    </div>
  );
}

export default App;
