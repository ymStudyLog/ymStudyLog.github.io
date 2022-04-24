import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import CommentTemplate from './components/CommentTemplate';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <CommentTemplate />
    </div>
  );
};

export default App;
