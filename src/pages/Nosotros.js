import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import '../styles/Nosotros.css';
import mision_aq from '../Multim/mision_aq.png';
import vision_aq from '../Multim/vision_aq.png';
import Prioridades_estrategicas from '../Multim/Prioridades_estrategicas.png';
import ima_1 from '../Multim/ima_1.jpg';
import ima_2 from '../Multim/ima_2.jpg';
import ima_3 from '../Multim/ima_3.jpg';
import flecha_izq from '../Multim/flecha_izq.png';
import flecha_der from '../Multim/flecha_der.png';

function Nosotros() {
  const historias = [
    {
      anio: "1997 - 1999",
      descripcion: "Somos una empresa dedicada a la producción de productos de jebe de alta calidad, comprometidos con la satisfacción de nuestros clientes y el desarrollo sostenible.",
      imagen: ima_1,
    },
    {
      anio: "2000 - 2005",
      descripcion: "Expansión de nuestra línea de productos y apertura a nuevos mercados.",
      imagen: ima_2,
    },
    {
      anio: "2006 - 2010",
      descripcion: "Innovación en nuestros procesos y un enfoque en la sostenibilidad.",
      imagen: ima_3,
    },
  ];

  // Estado para manejar el índice actual de la historia
  const [indiceActual, setIndiceActual] = useState(0);

  // Función para cambiar el cuadro
  const cambiarCuadro = (direccion) => {
    setIndiceActual((prevIndice) => {
      let nuevoIndice = prevIndice + direccion;

      // Controla los límites del índice
      if (nuevoIndice < 0) {
        nuevoIndice = historias.length - 1;
      } else if (nuevoIndice >= historias.length) {
        nuevoIndice = 0;
      }
      return nuevoIndice;
    });
  };

  // Obtener la historia actual
  const historiaActual = historias[indiceActual];

  // Desplazarse automáticamente al inicio al cargar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box sx={{ mt: 8 }}>
        <div className="nosotros-header">
          <img src={ima_1} alt="Imagen header nosotros" />
        </div>
      </Box>
      <Box sx={{ mt: 5, px: 4 }}>
        {/* Sección de Quiénes Somos */}
        <div className="nosotros-content">
          <div className="imagen-nosotros">
            <img src={historiaActual.imagen} alt="Imagen de la empresa" />
          </div>
          <div className="cuadro-blanco">
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>SOBRE NOSOTROS</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.6 }}>
              Somos una empresa dedicada a la producción de productos de jebe de alta calidad, comprometidos con la satisfacción de nuestros clientes y el desarrollo sostenible.
            </p>
          </div>
        </div>

        {/* Sección de Visión y Misión */}
        <div className="vision-mision">
          <div className="cuadro-azul">
            <img src={vision_aq} className="vm-img" alt="Visión" />
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>NUESTRA VISIÓN</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.6 }}>
              Somos una empresa dedicada a la producción de productos de jebe de alta calidad, comprometidos con la satisfacción de nuestros clientes y el desarrollo sostenible.
            </p>
          </div>
          <div className="cuadro-azul">
            <img src={mision_aq} className="vm-img" alt="Misión" />
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>NUESTRA MISIÓN</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.6 }}>
              Somos una empresa dedicada a la producción de productos de jebe de alta calidad, comprometidos con la satisfacción de nuestros clientes y el desarrollo sostenible.
            </p>
          </div>
        </div>
        <div className="cuadro-azul-valores">
          <div>
            <img src={Prioridades_estrategicas} className="valor-img" alt="Valores" />
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Prioridades Estratégicas</h3>
          </div>
          <p style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.6 }}>
            1. Innovación y sostenibilidad: Fomentar el desarrollo de productos innovadores que satisfagan las necesidades de los sectores clave y adoptar prácticas de producción sostenibles que reduzcan el impacto ambiental.
            <br />
            2. Expansión de mercado y alianzas: Ampliar la presencia en mercados internacionales y diversificar en sectores adicionales, estableciendo alianzas estratégicas con distribuidores y socios clave.
            <br />
            3. Optimización operativa: Mejorar la eficiencia en la cadena de suministro, optimizar los procesos de producción mediante nuevas tecnologías y automatización, y fortalecer la relación con proveedores de calidad.
            <br />
            4. Fortalecimiento de marca: Mejorar la visibilidad de la marca a través de campañas de marketing, buscando posicionarnos como uno de los líderes en calidad e innovación, y obtener certificaciones que respalden su fiabilidad.
          </p>
        </div>

        {/* Sección de Historia */}
        <h3 className="titulo-historia" style={{ margin: '20px 0' }}>
          NUESTRA HISTORIA
        </h3>

        {/* Cuadro y Carrusel */}
        <div className="nuestra-historia">
          <div className="flecha-izquierda" onClick={() => cambiarCuadro(-1)}>
            <img src={flecha_izq} alt="Flecha izquierda" />
          </div>
          <div className="historia">
            <div className="cuadro-historia">
              <h3>{historiaActual.anio}</h3>
              <p>{historiaActual.descripcion}</p>
            </div>
            <div className="imagen-historia">
              <img src={historiaActual.imagen} alt={`Historia ${historiaActual.anio}`} />
            </div>
          </div>
          <div className="flecha-derecha" onClick={() => cambiarCuadro(1)}>
            <img src={flecha_der} alt="Flecha derecha" />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Nosotros;
