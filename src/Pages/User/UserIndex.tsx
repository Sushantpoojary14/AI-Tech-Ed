import { Container } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate, Route, Routes } from 'react-router-dom'
import UserNavbar from '../../Components/Headers/UserNavbar'
import { AppContext } from '../../Context/AppContext';
import { UserContext } from '../../Context/UserContext';
import ErrorPage from '../Error';
import MainDash from './Dashboard/MainDash';
import ConfirmModel from '../../Components/Model/ConfirmModel';
import PasswordChangeModal from '../../Components/Model/PasswordChangeModal';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SuccessModel from '../../Components/Model/SuccessModel';
import img from '../../Assets/images/password_success.jpg';

const UserIndex = () => {
  const { user } = AppContext();
  const { handleMenuClose,openMenu,openPC2,handlePC2Close,handleSubmit,openSuccess ,handleSuccessClose} 
  = UserContext();
  return (
    <>

      {
        user ?
          <>
            <ConfirmModel handleClose={handleMenuClose} open={openMenu} icon={<LogoutIcon sx={{height:'100px',width:'100px',color:'#FA8128' ,mx:'auto'}}/>} text="Are you sure you want to log out?" />

            <ConfirmModel handleClose={handlePC2Close} open={openPC2} icon={<LockOpenIcon sx={{height:'100px',width:'100px',color:'#FA8128' ,mx:'auto'}}/>} text="Are you sure you want to Change your password?" func={handleSubmit}/>

            <PasswordChangeModal/>
            <SuccessModel handleClose={handleSuccessClose} open={openSuccess} icon={<img src={img} style={{ height: '150px', width: '150px', color: '#FA8128', marginLeft: 'auto',marginRight:'auto' }} />} header="Your password has been changed successfully!" text="Back to Dashboard" link="/user"/>

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
