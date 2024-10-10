import React from 'react'
import Navbar from './Navbar'
import ImageSlider from './ImageSlider'
import Category from './Category'
import Product from './Product'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <ImageSlider/>
      <Category/>
      <Product/>
      <About/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
