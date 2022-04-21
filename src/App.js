import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Work from './components/Work'
import Comment from './components/Comment'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Comment />
    </div>
  )
}

export default App