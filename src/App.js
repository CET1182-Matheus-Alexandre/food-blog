import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Home path="/" />
      <Blog path="/blog" />
      <About path="/about" />
    </Router>
  );
}

export default App;
