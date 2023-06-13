import { createContext, useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './Pages/Website/Index';
import UserIndex from './Pages/User/UserIndex';
import AdminIndex from './Pages/Admin/AdminIndex';
import { AppContext } from './Context/AppContext';
// import Navbar from './Components/Headers/Navbar';
import { MainCartContext  } from '../src/Context/CartContext';
import ErrorPage from './Pages/Error';
function App() {


  return (
    <>

      <MainCartContext >
        <Routes>
          <Route path='/*' element={<Index />} />
          
    
   
        <Route path='/user/*' element={<UserIndex />} />
        <Route path='/admin/' element={<AdminIndex />} />
     
      </Routes>
      </MainCartContext>

    </>
  );
}

export default App;
