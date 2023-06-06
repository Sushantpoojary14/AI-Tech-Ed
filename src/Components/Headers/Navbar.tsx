import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography, Divider } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { OButton, PIButton, WButton, SIButton } from '../Common/Button';
import LoadingBar from '../Headers/LoadingBar';
import { AppContext } from '../../Context/AppContext';

const pages = ['Home', 'Buy Test Series', 'Features', 'Cart'];
const purl = ['/', '', '', '/product'];
const settings = ['Profile', 'change Password', 'Logout'];
const surl = ['/', '', '', '/product'];

const Navbar = () => {
    const { isLoading } = AppContext();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [user, setUser] = useState<boolean>(false);
    // const []
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
        <>
             
            <AppBar position="sticky" sx={{
                backgroundColor: '#3A9BDC', boxShadow: 'none', height: {
                    xs: '70px', md: '125px'
                }, justifyContent: 'center',
            }} >

                <Container maxWidth="xl" >
                    <Toolbar disableGutters sx={{ mt: { sm: 0, md: 5 }, }}>

                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

                        {/* PC View */}
                        <Box >
                            <Link to='/'>
                                <Typography
                                    noWrap
                                    align='justify'
                                    component="a"
                                    sx={{
                                        fontSize: '48px', display: { xs: 'none', md: 'flex' }, fontWeight: 600,
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}> AI Tech ED </Typography>
                            </Link>
                        </Box>

                        {/* Mobile View */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit" >
                                <MenuIcon sx={{ height: '40px', width: '40px' }} />
                            </IconButton>


                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}>
                                <Stack spacing={2}>
                                    <Box>
                                        {pages.map((page, key) => (
                                        //   <Link to={surl[key]}  key={key}>  
                                           <MenuItem   sx={{
                                                px: '30px',
                                                display: 'block',
                                                fontSize: '20px',
                                                fontWeight: 600,
                                            }} 
                                            component={Link}
                                            to={surl[key]}
                                            >
                                                {page}
                                            </MenuItem>
                                            // </Link>
                                        ))}
                                    </Box>
                                    <Divider />
                                    <Box>
                                        {user ?
                                            <Stack spacing={2} direction="row" padding={1}>
                                                <PIButton />
                                                <SIButton func={() => handleOpenUserMenu} />
                                            </Stack>
                                            :
                                            <Stack spacing={2} direction="row" padding={1}>
                                                <WButton name="login" />
                                                <OButton name="Register" />
                                            </Stack>}
                                    </Box>
                                </Stack>
                            </Menu>
                        </Box>


                        {/* Mobile View */}
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <Link to='/'>
                            <Typography
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontSize: '38px',
                                    fontWeight: 600,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }} > AI Tech ED </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex', justifyContent: 'center', } }}>
                            {pages.map((page, key) => (
                                <Link to={surl[key]}  key={key}>
                                    <Typography sx={{
                                        px: '30px',
                                        color: 'white',
                                        display: 'block',
                                        fontSize: '20px',
                                        fontWeight: 600
                                    }} >
                                        {page}
                                    </Typography>
                                </Link>
                            ))}
                        </Box>

                        {/* Mobile View */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings" sx={{ display: { xs: 'none', md: 'block' } }}>
                                {user ?
                                    <Stack spacing={2} direction="row" padding={1}>
                                        <PIButton />
                                        <SIButton func={() => handleOpenUserMenu} />
                                    </Stack>
                                    :
                                    <Stack spacing={2} direction="row">
                                        <WButton name="login" />
                                        <OButton name="Register" />
                                    </Stack>}
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
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
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" >{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <LoadingBar isLoading={isLoading} />
        </>
    )
}

export default Navbar
