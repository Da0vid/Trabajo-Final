import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
      <li><Link to="/Inicio">Inicio</Link></li>
        <li><Link to="/Informacion">Información</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
