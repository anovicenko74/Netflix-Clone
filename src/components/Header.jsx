import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Search from './Search';
import ThemeSwitcher from './ThemeSwitcher';
import { Link } from 'react-router-dom'
import { useTheme } from '@emotion/react';
import logo from '../images/logo.png'
import { filterRoutes } from './Routes';

const Header = () => {
    const theme = useTheme()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const menuRoutes = filterRoutes(['Home', 'Movies'])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{
            color: theme.palette.primary.second,
            paddingTop: { xs: '10px', md: '30px' },
            paddingBottom: { xs: '10px', md: '15px' },
        }}
            position="static"
        >
            <Container>
                <Toolbar
                    sx={{
                        minHeight: '0 !important',
                    }}
                    disableGutters >
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: '40px'
                        }}
                    >
                        <Link to='/'>
                            <img
                                style={
                                    {
                                        maxWidth: "150px",
                                        maxHeight: "150px",
                                    }
                                }
                                src={logo}
                                alt='logo' />
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                            }}
                        >
                            {menuRoutes.map((route) => (
                                <Link to={route.url}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography
                                            sx={{
                                                display: 'block',
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            textAlign="center">
                                            {route.title}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            margin: '0 30px 0 30px',
                        }}
                    >
                        <Link to='/'>
                            <img
                                style={
                                    {
                                        maxWidth: "70px",
                                        maxHeight: "70px",
                                    }
                                }
                                src={logo}
                                alt='logo' />
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {menuRoutes.map((route) => (
                            <Link to={route.url} key={route.url}>
                                <MenuItem key={route.title} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{route.title}</Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <ThemeSwitcher></ThemeSwitcher>
                        <Search></Search>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Header;