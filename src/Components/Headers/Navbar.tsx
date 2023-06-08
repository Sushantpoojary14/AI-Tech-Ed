import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography, Divider } from '@mui/material';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { OButton, PIButton, WButton, SIButton } from '../Common/Button';
import LoadingBar from '../Headers/LoadingBar';
import { AppContext } from '../../Context/AppContext';
import SideBar from '../Sidebar/SideBar';
import { ParaText1 } from '../Common/ParaText';
interface Type {
    name: string;
    url: string;
    icon: ReactElement;
}


const pCss ={
    height:'38px',
    width:'38px',
    m:'0px',
    p:'0px',
    color: '#FA8128',
};

const sCss ={
    height:'28px',
    width:'28px',
    color: '#FA8128',
    mx:'8px'
};
const pages: Type[] =
    [{ name: 'Home', url: '/' ,icon:<HomeOutlinedIcon sx={pCss} />}, 
    { name: 'Buy Test Series', url: '/',icon:<FeedOutlinedIcon sx={pCss}/>}, 
    { name: 'Features', url: '/' ,icon:<FeaturedPlayListOutlinedIcon sx={pCss} />}, 
    { name: 'Cart', url: '/product' ,icon:<ShoppingCartOutlinedIcon sx={pCss}/> }];

const settings: Type[] =
    [{ name: 'Profile', url: '' , icon:<PersonIcon sx={sCss} />}, 
    { name: 'change Password', url: '',icon:<LockOutlinedIcon sx={sCss} /> }, 
    { name: 'Logout', url: '' ,icon:<ExitToAppOutlinedIcon sx={sCss} />}];

const Navbar = () => {
    const { isLoading } = AppContext();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [user, setUser] = useState<boolean>(true);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        console.log('click');

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
                    xs: '70px', lg: '125px', md: '110px', sm: '70px'
                }, justifyContent: 'space-evenly',
            }} >

                <Container maxWidth="xl" >
                    <Toolbar disableGutters sx={{ mt: { sm: 0, lg: 5 }, }}>

                        {/* PC View Header and header*/}
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Box >
                            <Link to='/'>
                                <Typography noWrap align='justify' component="a"
                                    sx={{
                                        fontSize: '48px',
                                        display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                                        fontWeight: 600,
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}> AI Tech ED </Typography>
                            </Link>

                        </Box>

                        {/* Mobile View SideBar Icon */}
                        <Box sx={{
                            width: '100%', justifyContent: 'space-between',
                            alignItems: 'center', display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' }
                        }}>
                            <SideBar handleCloseNavMenu={handleCloseNavMenu} pages={pages}
                                handleOpenUserMenu={handleOpenUserMenu} setAnchorElNav={setAnchorElNav}
                                anchorElNav={anchorElNav} setAnchorElUser={setAnchorElUser} user={user} />

                            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                            <Stack spacing={4} direction='row' sx={{alignItems:'center'}}>
                                <Link to='/'>
                                    <Typography
                                        noWrap
                                        component="a"
                                        href=""
                                        sx={{
                                            mx: 'auto',
                                            flexGrow: 1,
                                            fontSize: '38px',
                                            fontWeight: 600,
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }} > AI Tech ED </Typography>
                                </Link>
                               { user  && <SIButton css={{ p: '2px', height: '30px', width: '30px',}}
                                func={handleOpenUserMenu} />}
                            </Stack>
                        </Box>

                        {/* PC View SideBar menu */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, justifyContent: 'space-evenly' }}>
                            {pages.map((item:Type, key) => (
                                <Link to={item.url} key={key}>
                                    <Typography sx={{
                                        color: 'white',
                                        display: 'block',
                                        fontSize: '20px',
                                        fontWeight: 600
                                    }} >
                                        {item.name}
                                    </Typography>
                                </Link>
                            ))}
                        </Box>

                        {/* Mobile View setting option */}
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
                                        <WButton name="login" />
                                        <OButton name="Register" />
                                    </Stack>}
                            </Tooltip>
                            <Menu
                                sx={{ width:'272px',height:'270px', mt: {md:'45px',lg:'65px',xs:'45px'}, }}
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
                                {settings.map((item:Type, key) => (
                                    <MenuItem key={key} >
                                        {item.icon}
                                        <ParaText1 text={item.name}/>
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
