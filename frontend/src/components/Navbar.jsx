import React from 'react';
import '../styles/navbar.css';  // Importamos el archivo de estilos de la barra de navegación

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">SquadTech Analytics</a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">Sobre nosotros</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;