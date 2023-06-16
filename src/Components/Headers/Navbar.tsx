import { AppBar, Box, Container, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

import { ReactElement, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import { OButton, PIButton, WButton, SIButton } from '../Common/Button';
import SideBar from '../Sidebar/SideBar';
import { ParaText1 } from '../Common/ParaText';
import { HashLink } from 'react-router-hash-link';
import { Header4 } from '../Common/HeaderText';
import { AppContext } from '../../Context/AppContext';
import MenuModel from '../Model/MenuModel';

type Type = {
    name: string,
    url: string,
    icon: ReactElement,
    func?: () => void;
}
// interface props{
//     func:()=>void;
//     func2:()=>void;
// }

const pCss = {
    height: '38px',
    width: '38px',
    m: '0px',
    p: '0px',
    color: '#FA8128',
};



const pages: Type[] =
    [{ name: 'Home', url: '/#home', icon: <HomeOutlinedIcon sx={pCss} /> },
    { name: 'Buy Test Series', url: '/#product', icon: <FeedOutlinedIcon sx={pCss} /> },
    { name: 'Features', url: '/#third', icon: <FeaturedPlayListOutlinedIcon sx={pCss} /> },
    { name: 'Cart', url: '/cart', icon: <ShoppingCartOutlinedIcon sx={pCss} /> }];


const Navbar = () => {
    const { handleClickOpen } = UserContext();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const { user } = AppContext();

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
        console.log('click');
        setAnchorElUser(null);
    };


    return (
        <>
            <AppBar position="sticky" sx={{
                backgroundColor: '#3A9BDC', boxShadow: 'none', height: {
                    xs: '4.375rem', lg: '7.813rem', md: '6.875rem', sm: '4.375rem'
                }, justifyContent: 'space-evenly',
            }} >

                <Container maxWidth="xl" >
                    <Toolbar disableGutters sx={{ mt: { sm: 0, lg: 5 }, }}>

                        {/* PC View Header and header*/}
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Box >
                            <Link to='/'>
                                <Header4 header="AI Tech Ed"
                                    css={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' } }} />
                            </Link>

                        </Box>

                        {/* Mobile View SideBar Icon */}
                        <Box sx={{
                            width: '100%', justifyContent: 'space-evenly',
                            alignItems: 'center', display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' }
                        }}>
                            <SideBar handleCloseNavMenu={handleCloseNavMenu} pages={pages}
                                handleOpenUserMenu={handleOpenUserMenu} setAnchorElNav={setAnchorElNav}
                                anchorElNav={anchorElNav} setAnchorElUser={setAnchorElUser} user={user}
                                boxStyle={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' } }} />

                            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                            <Stack spacing={4} direction='row' sx={{ alignItems: 'center' }}>
                                <Link to='/'>
                                    <Header4 header="AI Tech Ed" />
                                </Link>
                                {user && <SIButton css={{ p: '2px', height: '30px', width: '30px', }}
                                    func={handleOpenUserMenu} />}
                            </Stack>
                        </Box>

                        {/* PC View SideBar menu */}

                     
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, justifyContent: 'space-evenly' }}>
                            {pages.map((item: Type, key) => (
                                <HashLink
                                smooth={true}
                                    to={item.url}
                                    key={key}
                                    style={{  }} // Add top margin here
                                >
                                    <Typography sx={{
                                        color: 'white',
                                        display: 'block',
                                        fontSize: '20px',
                                        fontWeight: 600
                                    }}>
                                        {item.name}
                                    </Typography>
                                </HashLink>
                            ))}
                        </Box>

                        {/* PC View setting option */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings" sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
                                {user ?
                                    <Stack spacing={2} direction="row" padding={1}>
                                        <PIButton css={{ p: '6px', height: "60px", width: "60px" }} />
                                        <SIButton css={{ p: '6px', height: "60px", width: "60px" }}
                                            func={handleOpenUserMenu} />
                                    </Stack>
                                    :
                                    <Stack spacing={2} direction="row">
                                        <WButton name="login" func={() => handleClickOpen("1")} css={{ width: '127px' }} />
                                        <OButton name="Register" func={() => handleClickOpen("2")}  css={{ width: '127px' }}/>
                                    </Stack>}
                            </Tooltip>
                            <MenuModel anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    )
}

export default Navbar
