import { createContext, useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './Pages/Website/Index';
import UserIndex from './Pages/User/UserIndex';
import AdminIndex from './Pages/Admin/AdminIndex';
import { AppContext } from './Context/AppContext';
// import Navbar from './Components/Headers/Navbar';
import { MainUserContext } from '../src/Context/UserContext';
function App() {

  const { user } = AppContext();

  return (
    <>

      <MainUserContext>
        <Routes>
          <Route path='/*' element={<Index />} />
        </Routes>
      </MainUserContext>
      <Routes>
        <Route path='/user/*' element={<UserIndex />} >

        </Route>
        <Route path='/admin/' element={<AdminIndex />} >

        </Route>
        {/* <Route path='/*' element={<Index />} /> */}
      </Routes>

    </>
  );
}

export default App;
