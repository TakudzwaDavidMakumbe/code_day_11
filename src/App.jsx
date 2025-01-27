import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import hero from './assets/Group 11.png'


const App = () => {
  return (
    <div className="" style={{backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100vh'}}> 
    <Navbar/>
    <Hero/>
    </div>
  )
}

export default App  