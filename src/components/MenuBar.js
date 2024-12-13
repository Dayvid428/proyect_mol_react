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
          {/* Logo con Link para redirigir al inicio */}
          <Link to="/inicio" style={{ textDecoration: 'none' }}>
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
          </Link>

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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', paddingLeft: 300 }, justifyContent: 'flex-end' }}>
            {pages.map((page) => {
              if (page === 'Productos') {
                return (
                  <MDBBtnGroup key={page} style={{ margin: '0 12px', boxShadow: 'none' }}>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        tag="button"
                        className="btn btn-white text-primary"
                        style={{
                          paddingTop: 24,
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 'bold',
                          fontSize: '14px',
                          backgroundColor: 'white',
                          border: 'none',
                          outline: 'none',
                          boxShadow: 'none',
                          textDecoration: 'none',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            border: 'none',
                            outline: 'none',
                            textDecoration: 'none',
                          },
                          '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                          },
                        }}
                      >
                        {page}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu
                        style={{
                          padding: '0',
                          minWidth: '200px',
                          whiteSpace: 'nowrap',
                          textAlign: 'left',
                        }}
                      >
                        <MDBDropdownItem style={{ padding: '10px' }}>
                          <Link
                            to="/productos/seccion1"
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                              display: 'inline-block',
                            }}
                          >
                            SECTOR CONSTRUCCIÓN
                          </Link>
                        </MDBDropdownItem>
                        <MDBDropdownItem style={{ padding: '10px' }}>
                          <Link
                            to="/productos/seccion2"
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                              display: 'inline-block',
                            }}
                          >
                            SECTOR MARÍTIMO
                          </Link>
                        </MDBDropdownItem>
                        <MDBDropdownItem style={{ padding: '10px' }}>
                          <Link
                            to="/productos/seccion3"
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                              display: 'inline-block',
                            }}
                          >
                            SECTOR AUTOMOTRÍZ
                          </Link>
                        </MDBDropdownItem>
                        <MDBDropdownItem style={{ padding: '10px' }}>
                          <Link
                            to="/productos/seccion4"
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                              display: 'inline-block',
                            }}
                          >
                            SECTOR INDUSTRIAL
                          </Link>
                        </MDBDropdownItem>
                        <MDBDropdownItem style={{ padding: '10px' }}>
                          <Link
                            to="/productos/seccion5"
                            style={{
                              textDecoration: 'none',
                              color: 'inherit',
                              display: 'inline-block',
                            }}
                          >
                            SECTOR SANEAMIENTO
                          </Link>
                        </MDBDropdownItem>
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
          <IconButton color="inherit" href="https://wa.me/51988460274" target="_blank">
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
