import React from 'react';
import Telefono from '../Componentes/Telefono';
import Correo from '../Componentes/Correo';

const Contacto = () => {
  return (
    <div>
      <h1 className="Contacto">Contacto</h1>
      <Telefono/>
      <Correo/>
    </div>
  );
};

export default Contacto;
