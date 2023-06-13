import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import LoadingBar from '../../Components/Headers/LoadingBar';
import Navbar from '../../Components/Headers/Navbar';
import { AppContext } from '../../Context/AppContext';
import { UserContext } from '../../Context/UserContext';
import ErrorPage from '../Error';
import MainAuth from './Auth/MainAuth';
import HomePage from './Home/Main';
import Cart from './Product/Cart';
import Product from './Product/Product';

const Index = () => {
  const { user } = AppContext();
  const { setOpen ,values} = UserContext();
  const location = useLocation();

  return (
    <Container maxWidth={false} 
    sx={{width:'100%',m:0,p:0 , minHeight:'100vh',display:'flex',flexDirection:'column',backgroundColor:'#F5F5F5'}} disableGutters>
    
      <MainAuth />
      <Navbar />
      <Routes>
            <Route index element={<HomePage />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />


    </Container>
  )
}

export default Index 
