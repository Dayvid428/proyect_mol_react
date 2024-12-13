import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';  // Importa el Footer
import Whatsapp from './components/Whatsapp'; //Importar Whatsapp
import './App.css';
import './index.css';  // Asegúrate de importar el archivo de estilo donde está Tailwind
import Inicio from './pages/Inicio.jsx';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import Seccion1 from './pages/prod/Seccion1';
import Seccion2 from './pages/prod/Seccion2';
import Seccion3 from './pages/prod/Seccion3';
import Seccion4 from './pages/prod/Seccion4';
import Seccion5 from './pages/prod/Seccion5';


function App() {
  return (    
    <Router>
        {/*Navbar en la parte superior */}  
        <MenuBar />
        {/* Las rutas y el contenido de la página */}
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/productos/Seccion1" element={<Seccion1 />} />
          <Route path="/productos/Seccion2" element={<Seccion2 />} />
          <Route path="/productos/Seccion3" element={<Seccion3 />} />
          <Route path="/productos/Seccion4" element={<Seccion4 />} />
          <Route path="/productos/Seccion5" element={<Seccion5 />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Whatsapp />{/* Se mantendrá constante en todas las páginas */}
        <Footer /> {/* El Footer se mantendrá constante en todas las páginas */}
    </Router>
  );
}

export default App;


