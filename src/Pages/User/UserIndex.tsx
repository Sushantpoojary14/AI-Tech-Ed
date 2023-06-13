import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserNavbar from '../../Components/Headers/UserNavbar'
import { AppContext } from '../../Context/AppContext';
import ErrorPage from '../Error';
import MainDash from './Dashboard/MainDash';

const UserIndex = () => {
  const { user } = AppContext();
    // useEffect(() => {

  //   if (location.pathname !== '/' && !user) {
  //     setOpen(true);
  //   }
  // }, [location]);
  return (
    <>
      
        {
        user ?
         <>
         <UserNavbar />
         <Routes>
            <Route index element={<MainDash />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          </>
          :
          <>
            <Navigate to="/" replace={true} />
          </>
      }
    </>
  )
}

export default UserIndex
