import React, { useState, useEffect } from 'react';
import '../styles/Nosotros.css';
import vision from '../Multim/vision.png';
import mision from '../Multim/mision.png';
import flecha_der from '../Multim/flecha_der.png';
import flecha_izq from '../Multim/flecha_izq.png';
import ima_1 from '../Multim/ima_1.jpg';
import ima_2 from '../Multim/ima_2.jpg';
import ima_3 from '../Multim/ima_3.jpg';

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

  return (
    <section id="nosotros" className="nosotros container">
      <h2>Nosotros</h2>
      <div className="nosotros-content">
        <div className="imagen-nosotros">
          <img src={historiaActual.imagen} alt="Imagen de la empresa" />
        </div>
        <div className="cuadro-blanco">
          <h3>QUIÉNES SOMOS</h3>
          <p>
            Somos una empresa dedicada a la producción de productos de jebe de alta calidad, comprometidos con la satisfacción de nuestros clientes y el desarrollo sostenible.
          </p>
        </div>
      </div>
      <div className="vision-mision">
        <div className="cuadro-azul">
          <img src={vision} className="vm-img" alt="Visión" />
          <h3>NUESTRA VISIÓN</h3>
          <p>
            Somos una empresa dedicada a la producción de productos de jebe de alta calidad, comprometidos con la satisfacción de nuestros clientes y el desarrollo sostenible.
          </p>
        </div>
        <div className="cuadro-azul">
          <img src={mision} className="vm-img" alt="Misión" />
          <h3>NUESTRA MISIÓN</h3>
          <p>
            Somos una empresa dedicada a la producción de productos de jebe de alta calidad, comprometidos con la satisfacción de nuestros clientes y el desarrollo sostenible.
          </p>
        </div>
      </div>
      <h3 className="titulo-historia">NUESTRA HISTORIA</h3>
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
    </section>
  );
}

export default Nosotros;
