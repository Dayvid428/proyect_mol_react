import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import './App.css';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';


function App() {
  return (
    <Router>
      <div>
        {/*Navbar en la parte superior */}
        <MenuBar />

        {/* Las rutas y el contenido de la página */}
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
