import { useState } from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/About';
import Featured from '../components/Featured';
import Outlet from '../components/Outlet';
import Contact from '../components/Booking';
import Footer from '../components/Footer';


function App() {

  return (
    <>
  <Navbar />
  <Hero/>
  <About/>
  <Featured/>
  <Outlet/>
  <Contact/>
  <Footer/>
    </>
  )
}

export default App
