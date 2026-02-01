import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App
