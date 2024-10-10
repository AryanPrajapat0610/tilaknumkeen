import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
function App() {

  return (
    <>
      <div className=''>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product' element={<Product/>} />

        </Routes>
      
        <Footer/>
        </div>
    </>
  )
}

export default App
