import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import '../prod/Secc_css/Seccion1.css';
import ima_1 from '../../Multim/ima_1.jpg';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

const Seccion1 = () => {
  // Desplazarse automáticamente al inicio al cargar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ mt: 8, px: 4 }}>
      <div className='seccion1-contenido'>
        <h1>SECTOR CONSTRUCCIÓN</h1>
        <div className='contenido-flex'>
          <p>
          Productos de caucho diseñados para resistir las exigencias del sector construcción. Nuestros materiales aseguran durabilidad y rendimiento en aplicaciones como juntas de expansión, sellos impermeables y amortiguadores para estructuras.
          </p>
          <img src={ima_1} alt="imagen nuestros principales sectores" />
        </div>
      </div>
      <div className='productos'>
      <h1>NUESTROS PRODUCTOS</h1>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/042.webp'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>This is a short card.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/043.webp'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/044.webp'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </div>
    </Box>
  );
};

export default Seccion1;
