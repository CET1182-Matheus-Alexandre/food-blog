import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Home path="/" />
      <Blog path="/blog" />
      <About path="/about" />
      <Post path="/post/:postId" />
    </Router>
  );
}

export default App;
