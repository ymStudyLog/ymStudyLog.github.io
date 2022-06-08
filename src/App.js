import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
