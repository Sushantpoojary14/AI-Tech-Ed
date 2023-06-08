import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Headers/Navbar'
import HomePage from './Home/Main'
import Product from './Product/Cart/Product'

const Index = () => {
 
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default Index 
