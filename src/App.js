import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import Title from './Title/Title'
// import PostList from './PostList/PostList'

function App() {
  return (
    <div className="App">
      <header>
        The Anxious Turtle
      </header>
      <NavBar />
      <Title />
      {/* <PostList /> */}
    </div>
  );
}

export default App;
