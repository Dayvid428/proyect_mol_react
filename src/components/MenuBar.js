import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/AttachEmail';
import logo from '../Multim/logo.jpg';

import {
  MDBBtnGroup,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

const pages = ['Inicio', 'Productos', 'Nosotros', 'Contacto'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ fontFamily: 'Poppins, sans-serif', background: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: 70,
              mr: 1,
            }}
          />

          {/* Menú para dispositivos móviles */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Navegación para dispositivos grandes */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', paddingLeft: 300 } }}>
            {pages.map((page) => {
              if (page === 'Productos') {
                return (
                  <MDBBtnGroup key={page} style={{ margin: '0 12px' , boxShadow:'none' }}>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        tag="button"
                        className="btn btn-white text-primary"
                        style={{
                          paddingTop: 24,
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 'bold',
                          fontSize: '14px',  // Cambiar el tamaño de la fuente
                          backgroundColor: 'white',  // Fondo blanco
                          border: 'none',  // Asegurarse de que no haya borde
                          outline: 'none',  // Quitar cualquier borde de enfoque (outline)
                          boxShadow: 'none',  // Eliminar cualquier sombra
                          textDecoration: 'none',  // Evitar que se apliquen subrayados o decoraciones adicionales
                          '&:hover': {
                            backgroundColor: 'transparent',  // Quitar el sombreado de fondo
                            boxShadow: 'none',  // Eliminar el efecto de sombra
                            border: 'none',  // Eliminar el borde al hacer hover
                            outline: 'none',  // Eliminar el borde de enfoque en hover
                            textDecoration: 'none',  // Asegurar que no haya decoraciones
                          },
                          '&:focus': {
                            outline: 'none',  // Eliminar el borde del foco
                            boxShadow: 'none',  // Eliminar sombra de enfoque
                          },
                        }}
                      >
                        {page}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link href="/productos/seccion1">Sección 1</MDBDropdownItem>
                        <MDBDropdownItem link href="/productos/seccion2">Sección 2</MDBDropdownItem>
                        <MDBDropdownItem link href="/productos/seccion3">Sección 3</MDBDropdownItem>
                        <MDBDropdownItem link href="/productos/seccion4">Sección 4</MDBDropdownItem>
                        <MDBDropdownItem link href="/productos/seccion5">Sección 5</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBBtnGroup>
                );
              }
              return (
                <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none' }} key={page}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 3,
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 'bold',
                      backgroundColor: 'white',
                      '&:hover': { backgroundColor: '#CED0D1' },
                      color: '#3F74B9',
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              );
            })}
          </Box>

          {/* Íconos de redes */}
          <IconButton color="inherit" href="https://wa.me/1234567890" target="_blank">
            <WhatsAppIcon sx={{ color: '#25D366', fontSize: '2rem' }} />
          </IconButton>
          <IconButton color="inherit" href="mailto:moliviceirl@gmail.com" target="_blank">
            <EmailIcon sx={{ color: 'black', ml: 1, fontSize: '2rem' }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
