// src/pages/Contacto.js
import React from 'react';
import '../styles/Contacto.css';
import { Box, Typography } from '@mui/material';
import CONTACTO_FONDO from '../Multim/CONTACTO_FONDO.PNG';
import calendario from '../Multim/calendario.PNG';
import mensaje from '../Multim/correo.PNG';
import telefono from '../Multim/telefono.PNG';
import ubicacion from '../Multim/ubicacion.PNG';

function Contacto() {
  return (
      <div>
      <div className="imagen-contacto">
        <img src={CONTACTO_FONDO} alt="Fondo de contacto" />
        <Typography variant="h3" sx={{ fontWeight: 'bold' }} className="titulo-contacto">
        <i class="fas fa-tty"></i>
        <br/>
          CONTACTO
        </Typography>
      </div>

      <div className="info-boxes">
        <div className="box">
          <div className="circle">
            <img src={telefono} alt="Teléfono" />
          </div>
          <Typography variant="h6">TELEFONO</Typography>
          <Typography variant="body1">
            <br />
            <br />
            OFICINA: +51 987654321
          </Typography>
        </div>
        <div className="box">
          <div className="circle">
            <img src={mensaje} alt="Email" />
          </div>
          <Typography variant="h6">CORREO</Typography>
          <Typography variant="body1">
            <br />
            <br />
            moliviceirl@gmail.com
          </Typography>
        </div>
        <div className="box">
          <div className="circle">
            <img src={calendario} alt="Horario" />
          </div>
          <Typography variant="h6">HORARIO</Typography>
          <Typography variant="body1">
            <br />
            Lunes-Viernes:<br /> 8:00 am - 6:00 pm
            <br />
            Sabados:<br /> 8:00 am - 1:00 pm
            <br />
            <br />
          </Typography>
        </div>
        <div className="box">
          <div className="circle">
            <img src={ubicacion} alt="Dirección" />
          </div>
          <Typography variant="h6">UBICANOS</Typography>
          <Typography variant="body1">
            <br />
            <br />
            Av. Ejemplo 123, Lima
            <br />
            <br />
          </Typography>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.777496985553!2d-77.07058874400465!3d-11.920567191731456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1cd4a1de8d7%3A0xf5518b255d8c553c!2sIndustria%20de%20Jebe%20Molivic%20EIRL!5e0!3m2!1ses-419!2spe!4v1729472983136!5m2!1ses-419!2spe"
          style={{ border: 0, width: '100%', height: '600px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación"
        ></iframe>
      </div>
      </div>
  );
}

export default Contacto;
