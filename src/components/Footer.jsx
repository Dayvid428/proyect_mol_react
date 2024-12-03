import React from 'react';
import { MDBFooter, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-muted custom-footer'>
      <section className='d-flex justify-content-center justify-content-lg-between border-bottom' style={{ color: '#3f74b9' }}>
        <div className='me-5 d-none d-lg-block'>
          <span>Conéctate con nosotros en las redes sociales:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/industriadejebemolivic" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          {/*
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          */}
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          {/*
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
          */}
        </div>
      </section>

      <section>
        <div className="container-fluid text-center text-md-start">
          <MDBRow className='mt-3' >
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Industria de Jebe Molivic E.I.R.L.
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>
            {/*  
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p><a href='#!' className='text-reset'>Angular</a></p>
              <p><a href='#!' className='text-reset'>React</a></p>
              <p><a href='#!' className='text-reset'>Vue</a></p>
              <p><a href='#!' className='text-reset'>Laravel</a></p>
            </MDBCol>
            */}
            <MDBCol md="6" lg="4" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Terminos y privacidad</h6>
              <p><a href='#!' className='text-reset'>Ver políticas de privacidad</a></p>
              <p><a href='#!' className='text-reset'>Ver tèrminos de uso</a></p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contactanos</h6>
              <p><MDBIcon icon="home" className="me-2" /> Av. Tambo Rio Psje comun fnd. Chacra Cerro Lote 34Q COMAS    - LIMA</p>
              <p><MDBIcon icon="envelope" className="me-3" /> moliviceirl@gmail.com</p>
              <p><MDBIcon icon="phone" className="me-3" /> + 51 988460274</p>
              <p><MDBIcon icon="print" className="me-3" /> + 01 988460274</p>
            </MDBCol>
          </MDBRow>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#3f74b9' }}>
        © 2021 Copyright: 2024 Industria de Jebe Molivic E.I.R.L. Todos los derechos reservados.
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        </a>
      </div>
    </MDBFooter>
  );
}
