
import { Route, Routes, } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Headers/Navbar'
import { MainUserContext } from '../../Context/UserContext'
import MainAuth from './Auth/MainAuth'

import Register from './Auth/Register'
import HomePage from './Home/Main'
import Product from './Product/Cart/Product'

const Index = () => {
  
  return (
    <>
    <MainUserContext>
     <MainAuth/>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer/>
    </MainUserContext>
  
    </>
  )
}

export default Index 
