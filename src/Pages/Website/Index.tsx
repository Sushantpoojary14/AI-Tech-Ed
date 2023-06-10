import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Headers/Navbar';
import { AppContext } from '../../Context/AppContext';
import { UserContext } from '../../Context/UserContext';

import MainAuth from './Auth/MainAuth';
import HomePage from './Home/Main';
import Product from './Product/Cart/Product';

const Index = () => {
  const { user } = AppContext();
  const { setOpen } = UserContext();

  const location = useLocation();

  useEffect(() => {

    if (location.pathname !== '/' && !user) {
      setOpen(true);
    }
  }, [location]);

  return (
    <>

      <MainAuth />
      <Navbar />
      {
        user ?
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/product' element={<Product />} />
          </Routes>
          :
          <>
            <Routes>
              <Route index element={<HomePage user={true} />} />
            </Routes>
            <Navigate to="/" replace={true} />
          </>
      }
      <Footer />


    </>
  )
}

export default Index 
