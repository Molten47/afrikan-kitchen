import { useState } from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/About';
import Featured from './components/Featured';

function App() {

  return (
    <>
  <Navbar />
  <Hero/>
  <About/>
  <Featured/>
  
    </>
  )
}

export default App
