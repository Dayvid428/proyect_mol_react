import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/AttachEmail';
import logo from '../Multim/logo.jpg';

const pages = ['Inicio','Productos', 'Nosotros', 'Contacto'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static" sx={{ fontFamily: 'Poppins, sans-serif', background: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            display: { xs: 'none', md: 'flex' },
            height: 70, // Ajusta el tamaño según tus preferencias
            mr: 1,
          }}
        />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* Texto: LOGO*/}
          </Typography>

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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
                {/* Usar Link para la navegación */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',/*color del boton*/
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', paddingLeft: 400} }}>
            {/* Usar Link para la navegación */}
            {pages.map((page) => (
              <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none' }} key={page}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, 
                    color: 'white', 
                    display: 'block', 
                    mx:3,
                    fontFamily: 'Poppins, sans-serif',  // Asegurando que se usa Poppins
                    fontWeight: 'bold',  // Esto hace que el texto esté en negrita
                    backgroundColor: 'white',  // Cambia el fondo
                    '&:hover': {
                      backgroundColor: '#CED0D1',  // Cambia el color de fondo cuando pasa el mouse
                    },
                    color: '#3F74B9',// color de la fuente del texto de barra
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

            {/* Ícono de WhatsApp en la parte derecha */}
          <IconButton color="inherit" href="https://wa.me/1234567890" target="_blank">
            <WhatsAppIcon sx={{ color: '#25D366', fontSize: '2rem' }}/>
          </IconButton>
            {/* Ícono de email en la parte derecha */}
          <IconButton color="inherit" href="moliviceirl@gmail.com" target="_blank">
            <EmailIcon sx={{ color: 'black', ml: 1, fontSize: '2rem' }}/>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
