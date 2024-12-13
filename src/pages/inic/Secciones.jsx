import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

const Secciones = () => {
  return (
    <Box sx={{ mt: 8, px:4 }}>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <Link to="/productos/Seccion1">
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>SECTOR CONSTRUCCIÓN</MDBCardTitle>
            <MDBCardText>
              Productos para el sector construcción.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>
      </MDBCol>
      <MDBCol>
      <Link to="/productos/Seccion2">
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>SECTOR MARÍTIMO</MDBCardTitle>
            <MDBCardText>
              Productos para el sector marítimo.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>
      </MDBCol>
      <MDBCol>
      <Link to="/productos/Seccion3">
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>SECTOR AUTOMOTRÍZ</MDBCardTitle>
            <MDBCardText>
              Productos para el sector Automotríz
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>
      </MDBCol>
      <MDBCol>
      <Link to="/productos/Seccion4">
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>SECTOR INDUSTRIAL</MDBCardTitle>
            <MDBCardText>
              Prodcutos para el sector industrial.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>
      </MDBCol>
      <MDBCol>
      <Link to="/productos/Seccion5">
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>SECTOR SANEAMIENTO</MDBCardTitle>
            <MDBCardText>
              Productos para el sector saneamiento.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </Link>
      </MDBCol>
    </MDBRow>
    </Box>
  );
};

export default Secciones;