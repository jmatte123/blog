import React from 'react';
import './App.css';
import Title from './components/Title';
import PostList from './components/PostList';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: '#000000',
  fontFamily: 'Anton',
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Title />
        <PostList />
        <footer>
          <h6>The-Anxious-Turtle @ 2020</h6>
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
