import React, { useEffect} from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { Box } from '@mui/material';
import ima_1 from '../Multim/ima_1.jpg';
import '../styles/Inicio.css';
import Secciones from './inic/Secciones';
export default function App() {
  // Desplazarse automáticamente al inicio al cargar el componente
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
    <Box sx={{ mt: 8 }}>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>SECCION 1</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>SECCION 2</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>SECCION 3</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={4}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>SECCION 4</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>SECCION 5</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={6}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>SECCION 6</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
    </Box>
    <Box sx={{ mt: 8 , px: 4}}>
      <div className='inicio-contenido' >
        <h1>
          PRODUCTOS DE ALTA CALIDAD
        </h1>
        <div className='contenido-flex'>
          <p>
            Industria de Jebe Molivic E.I.R.L. se especializa en la fabricación de productos de caucho y jebe de alta calidad, diseñados para satisfacer las necesidades de los sectores. Ofrecemos soluciones confiables, resistentes y personalizadas para asegurar el máximo desempeño en aplicaciones exigentes. Nuestro compromiso es proporcionar innovación, durabilidad y excelencia en cada uno de nuestros productos.
          </p>
            <img src={ima_1} alt="imagen nuestros princ secetores" />
        </div>
        <div className='Secciones-inicio'>
          <h1>
            NUESTROS PRINCIPALES SECTORES:
          </h1>
        <Secciones/>
        </div>
      </div>
    </Box>
    </div>
  );
}