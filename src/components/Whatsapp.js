import React from 'react';
import './Whatsapp.css';

function Whatsapp() {
  // Funciones de manejo de eventos
  const handleWhatsappClick = () => {
    window.open('https://wa.me/51988460274', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:moliviceirl@gmail.com';
  };

  return (
    <div>
      {/* Icono de WhatsApp */}
      <div className="whatsapp-icon" onClick={handleWhatsappClick}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
        />
        <span className="tooltip">WhatsApp:<br /> +51987654321</span> 
      </div>

      {/* Icono de Email */}
      <div className="email-button" onClick={handleEmailClick}>
        <img 
          src="https://raw.githubusercontent.com/Dayvid428/Proyect/refs/heads/master/imagenes/email_icon.png" 
          alt="Email" 
        />
        <span className="tooltip">moliviceirl<br />@gmail.com</span> 
      </div>
    </div>
  );
}

export default Whatsapp;
