import { AppBar, Box, Menu, MenuItem, Stack } from '@mui/material';
import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { PIButton, SIButton } from '../Common/Button';
import { Header4 } from '../Common/HeaderText';
import { ParaText1 } from '../Common/ParaText';
import SideBar from '../Sidebar/SideBar';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

interface Type {
  name: string;
  url: string;
  icon: ReactElement;
}

const pCss = {
  height: '38px',
  width: '38px',
  m: '0px',
  p: '0px',
  color: '#FA8128',
};

const sCss = {
  height: '28px',
  width: '28px',
  color: '#FA8128',
  mx: '8px'
};

const pages: Type[] =
    [{ name: 'Home', url: '/', icon: <HomeOutlinedIcon sx={pCss} /> },
    { name: 'Buy Test Series', url: '/#second', icon: <FeedOutlinedIcon sx={pCss} /> },
    { name: 'Features', url: '/#third', icon: <FeaturedPlayListOutlinedIcon sx={pCss} /> },
    { name: 'Cart', url: '/cart', icon: <ShoppingCartOutlinedIcon sx={pCss} /> }];

const settings: Type[] =
    [{ name: 'Profile', url: '', icon: <PersonIcon sx={sCss} /> },
    { name: 'change Password', url: '', icon: <LockOutlinedIcon sx={sCss} /> },
    { name: 'Logout', url: '', icon: <ExitToAppOutlinedIcon sx={sCss} /> }];

const UserNavbar = () => {
  const { user } = AppContext();
  // const { handleClickOpen } = UserContext();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="sticky" sx={{
      backgroundColor: '#3A9BDC', boxShadow: 'none', height: {
        xs: '4.375rem', lg: '7.813rem', md: '6.875rem', sm: '4.375rem'
      }, justifyContent: 'space-evenly',
    }} >
      <Box sx={{
        width: '100%', justifyContent: 'space-between',
        alignItems: 'center', display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' }
      }}>
        <SideBar handleCloseNavMenu={handleCloseNavMenu} pages={pages}
          handleOpenUserMenu={handleOpenUserMenu} setAnchorElNav={setAnchorElNav}
          anchorElNav={anchorElNav} setAnchorElUser={setAnchorElUser} user={user} />

        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
        <Stack spacing={4} direction='row' sx={{ alignItems: 'center' }}>
          <Link to='/user/'>
            <Header4 header="AI Tech Ed" />

          </Link>

        </Stack>
      </Box>
      <Box>

        <Stack spacing={2} direction="row" padding={1}>
          <PIButton css={{ p: '6px', height: "60px", width: "60px" }} />
          <SIButton css={{ p: '6px', height: "60px", width: "60px" }} />
        </Stack>
        <Menu
          sx={{ width: '272px', height: '270px', mt: { md: '45px', lg: '65px', xs: '45px' }, }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((item: Type, key) => (
            <MenuItem key={key} >
              {item.icon}
              <ParaText1 text={item.name} />
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </AppBar >
  )
}

export default UserNavbar
