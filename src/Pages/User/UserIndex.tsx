import { Container } from '@mui/material';
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
            <Container maxWidth={false}
              sx={{ width: '100%', m: 0, p: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5F5' }} disableGutters>

              <UserNavbar />
              <Routes>
                <Route index element={<MainDash />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Container>
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
