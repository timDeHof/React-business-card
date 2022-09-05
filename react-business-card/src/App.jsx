import { useState } from 'react'
import  About  from './Components/About'
import Info from './Components/Info'
import Interest from './Components/Interest'
import Footer from './Components/Footer'
import './App.css'

function App() {
 

  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

export default App
