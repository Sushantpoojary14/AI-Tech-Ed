import { createContext, useContext, useEffect , useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './Pages/Website/Index';
import UserIndex from './Pages/User/UserIndex';
import AdminIndex from './Pages/Admin/AdminIndex';
import Product from './Pages/Website/Product/Cart/Product';
import HomePage from './Pages/Website/Home/Main';
// import Navbar from './Components/Headers/Navbar';

function App() {
  

  return (
    <>
   
      <Routes>
        <Route path='/' element={<Index />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<Product />} />
        </Route>
        <Route path='/user/' element={<UserIndex />} >

        </Route>
        <Route path='/admin/' element={<AdminIndex />} >

        </Route>
      </Routes>
      
    </>
  );
}

export default App;
